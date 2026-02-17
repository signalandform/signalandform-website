"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAnnualCost } from "@/lib/subscription-utils";
import type { Subscription } from "@/lib/types";
import CancellationGuideModal from "./CancellationGuideModal";

interface SubscriptionsListProps {
  subscriptions: Subscription[];
  className?: string;
}

type SortKey = "name" | "annual" | "renewal";

export default function SubscriptionsList({
  subscriptions,
  className = "",
}: SubscriptionsListProps) {
  const [sortBy, setSortBy] = useState<SortKey>("annual");
  const [cancelModal, setCancelModal] = useState<{ id: string; name: string } | null>(null);
  const router = useRouter();

  const sorted = [...subscriptions].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "annual") {
      const aAnnual = getAnnualCost(Number(a.price), a.billing_cycle);
      const bAnnual = getAnnualCost(Number(b.price), b.billing_cycle);
      return bAnnual - aAnnual;
    }
    if (sortBy === "renewal") {
      const aDate = a.next_renewal_date ? new Date(a.next_renewal_date).getTime() : 0;
      const bDate = b.next_renewal_date ? new Date(b.next_renewal_date).getTime() : 0;
      return aDate - bDate;
    }
    return 0;
  });

  const annualTotals = subscriptions.map((s) =>
    getAnnualCost(Number(s.price), s.billing_cycle)
  );
  const highSpendThreshold = Math.max(...annualTotals, 0) * 0.2; // Top 20% or similar

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your subscriptions</CardTitle>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          className="text-sm border border-input rounded-md px-2 py-1 bg-background"
        >
          <option value="annual">Sort by annual cost</option>
          <option value="name">Sort by name</option>
          <option value="renewal">Sort by renewal date</option>
        </select>
      </CardHeader>
      <CardContent>
        {sorted.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            No subscriptions yet. Add your first subscription to get started.
          </p>
        ) : (
          <>
          <ul className="space-y-2">
            {sorted.map((sub) => {
              const annual = getAnnualCost(Number(sub.price), sub.billing_cycle);
              const isHighSpend = annual >= highSpendThreshold && annual > 0;
              return (
                <li
                  key={sub.id}
                  className={`flex items-center justify-between py-3 px-3 rounded-md ${
                    isHighSpend ? "bg-warning/10 border border-warning/30" : ""
                  }`}
                >
                  <div>
                    <span className="font-medium">{sub.name}</span>
                    <span className="text-muted-foreground text-sm ml-2">
                      ${Number(sub.price).toFixed(2)}/{sub.billing_cycle}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCancelModal({ id: sub.id, name: sub.name })}
                    >
                      How to cancel
                    </Button>
                    <span className="font-semibold">
                      ${annual.toLocaleString("en-US", { minimumFractionDigits: 2 })}/yr
                    </span>
                    {isHighSpend && (
                      <span className="text-xs text-warning">High spend</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          {cancelModal && (
            <CancellationGuideModal
              subscriptionName={cancelModal.name}
              subscriptionId={cancelModal.id}
              open={!!cancelModal}
              onOpenChange={(open) => !open && setCancelModal(null)}
              onCanceled={() => router.refresh()}
            />
          )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
