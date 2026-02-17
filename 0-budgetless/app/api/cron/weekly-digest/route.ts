import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Weekly digest: run on Mondays (cron: 0 9 * * 1)
export async function GET(request: Request) {
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

  const ANNUAL_MULTIPLIERS: Record<string, number> = {
    monthly: 12,
    quarterly: 4,
    yearly: 1,
  };

  function getMonthlyTotal(price: number, cycle: string): number {
    return (price * (ANNUAL_MULTIPLIERS[cycle] ?? 1)) / 12;
  }

  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, email");

  if (!profiles || profiles.length === 0) {
    return NextResponse.json({ sent: 0 });
  }

  let sent = 0;
  for (const profile of profiles) {
    if (!profile.email) continue;

    const { data: subs } = await supabase
      .from("subscriptions")
      .select("name, price, billing_cycle")
      .eq("user_id", profile.id)
      .eq("is_active", true);

    if (!subs || subs.length === 0) continue;

    const monthlyTotal = subs.reduce(
      (sum, s) => sum + getMonthlyTotal(Number(s.price), s.billing_cycle),
      0
    );
    const annualTotal = monthlyTotal * 12;

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: profile.email,
      subject: "Budgetless: Your weekly subscription summary",
      html: `
        <h2>Weekly subscription summary</h2>
        <p><strong>Monthly total:</strong> $${monthlyTotal.toFixed(2)}</p>
        <p><strong>Annual total:</strong> $${annualTotal.toFixed(2)}</p>
        <h3>Your subscriptions (${subs.length})</h3>
        <ul>
          ${subs.map((s) => `<li>${s.name}: $${Number(s.price).toFixed(2)}/${s.billing_cycle}</li>`).join("")}
        </ul>
        <p><a href="https://budgetless.signalandform.net/dashboard">View in Budgetless</a></p>
      `,
    });

    if (!error) sent++;
  }

  return NextResponse.json({ sent, total: profiles.length });
}
