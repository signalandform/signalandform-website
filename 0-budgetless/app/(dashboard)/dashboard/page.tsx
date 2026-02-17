import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DashboardTotals from "@/components/DashboardTotals";
import SubscriptionsList from "@/components/SubscriptionsList";
import UpcomingRenewals from "@/components/UpcomingRenewals";
import AddSubscriptionModal from "@/components/AddSubscriptionModal";
import ExportButton from "@/components/ExportButton";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: subscriptions } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", user.id)
    .eq("is_active", true)
    .order("next_renewal_date", { ascending: true, nullsFirst: false });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <ExportButton subscriptions={subscriptions ?? []} />
          <AddSubscriptionModal />
        </div>
      </div>

      <DashboardTotals subscriptions={subscriptions ?? []} />
      <UpcomingRenewals subscriptions={subscriptions ?? []} className="mt-8" />
      <SubscriptionsList subscriptions={subscriptions ?? []} className="mt-8" />
    </div>
  );
}
