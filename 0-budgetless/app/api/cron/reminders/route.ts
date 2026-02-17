import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  // Get all active subscriptions with next_renewal_date
  const { data: subscriptions } = await supabase
    .from("subscriptions")
    .select("id, user_id, name, price, billing_cycle, next_renewal_date")
    .eq("is_active", true)
    .not("next_renewal_date", "is", null);

  if (!subscriptions || subscriptions.length === 0) {
    return NextResponse.json({ sent: 0, message: "No subscriptions to remind" });
  }

  // Get user profiles with reminder preferences
  const userIds = Array.from(new Set(subscriptions.map((s) => s.user_id)));
  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, email, reminder_days")
    .in("id", userIds);

  const profileMap = new Map(profiles?.map((p) => [p.id, p]) ?? []);

  // Build map: user_id -> subscriptions due for reminder (grouped by days until)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const toSend: Map<
    string,
    { email: string; subs: { name: string; date: string; days: number }[] }
  > = new Map();

  for (const sub of subscriptions) {
    const profile = profileMap.get(sub.user_id);
    if (!profile?.email) continue;

    const reminderDays = (profile.reminder_days as number[]) ?? [1, 3, 7];
    const renewalDate = new Date(sub.next_renewal_date!);
    renewalDate.setHours(0, 0, 0, 0);
    const diffMs = renewalDate.getTime() - today.getTime();
    const daysUntil = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (reminderDays.includes(daysUntil) && daysUntil >= 0) {
      const existing = toSend.get(sub.user_id);
      const entry = {
        name: sub.name,
        date: sub.next_renewal_date!,
        days: daysUntil,
      };
      if (existing) {
        existing.subs.push(entry);
      } else {
        toSend.set(sub.user_id, {
          email: profile.email,
          subs: [entry],
        });
      }
    }
  }

  let sent = 0;
  for (const [, { email, subs }] of Array.from(toSend.entries())) {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: `Budgetless: ${subs.length} subscription(s) renewing soon`,
      html: `
        <h2>Upcoming renewals</h2>
        <p>You have ${subs.length} subscription(s) renewing soon:</p>
        <ul>${subs.map((s) => `<li>${s.name} - ${s.days === 0 ? "Today" : `In ${s.days} days`}</li>`).join("")}</ul>
        <p>Log in to <a href="https://budgetless.signalandform.net/dashboard">Budgetless</a> to manage your subscriptions.</p>
      `,
    });

    if (!error) sent++;
  }

  return NextResponse.json({ sent, total: toSend.size });
}
