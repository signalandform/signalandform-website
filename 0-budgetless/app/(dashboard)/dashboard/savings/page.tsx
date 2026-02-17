import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getAnnualCost } from "@/lib/subscription-utils";
import type { BillingCycle } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function SavingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: canceled } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .eq("is_active", false)
    .not("canceled_at", "is", null)
    .order("canceled_at", { ascending: false });

  const totalSavings = (canceled ?? []).reduce(
    (sum, sub) => sum + getAnnualCost(Number(sub.price), sub.billing_cycle as BillingCycle),
    0
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to dashboard
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Savings tracker</CardTitle>
          <p className="text-muted-foreground text-sm">
            Track how much you save by canceling subscriptions.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-success/10 border border-success/30">
            <p className="text-2xl font-bold text-success">
              ${totalSavings.toLocaleString("en-US", { minimumFractionDigits: 2 })}/yr
            </p>
            <p className="text-sm text-muted-foreground">
              Total yearly savings from {canceled?.length ?? 0} canceled subscription(s)
            </p>
          </div>
          {canceled && canceled.length > 0 ? (
            <ul className="space-y-2">
              {canceled.map((sub) => (
                <li
                  key={sub.id}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="font-medium">{sub.name}</span>
                  <span className="text-success">
                    +${getAnnualCost(Number(sub.price), sub.billing_cycle as BillingCycle).toFixed(2)}/yr saved
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground text-sm">
              No canceled subscriptions yet. Use &quot;How to cancel&quot; on a subscription
              and mark it as canceled to track your savings.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
