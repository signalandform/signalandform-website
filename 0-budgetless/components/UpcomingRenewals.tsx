"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAnnualCost } from "@/lib/subscription-utils";
import type { Subscription } from "@/lib/types";

interface UpcomingRenewalsProps {
  subscriptions: Subscription[];
  className?: string;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function daysUntil(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(dateStr);
  d.setHours(0, 0, 0, 0);
  const diff = d.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function UpcomingRenewals({
  subscriptions,
  className = "",
}: UpcomingRenewalsProps) {
  const withDates = subscriptions
    .filter((s) => s.next_renewal_date)
    .sort(
      (a, b) =>
        new Date(a.next_renewal_date!).getTime() -
        new Date(b.next_renewal_date!).getTime()
    )
    .slice(0, 10);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Upcoming renewals</CardTitle>
      </CardHeader>
      <CardContent>
        {withDates.length === 0 ? (
          <p className="text-muted-foreground text-sm">
            No upcoming renewals. Add renewal dates to your subscriptions to see
            them here.
          </p>
        ) : (
          <ul className="space-y-2">
            {withDates.map((sub) => {
              const days = daysUntil(sub.next_renewal_date);
              const isSoon = days !== null && days <= 7 && days >= 0;
              const isOverdue = days !== null && days < 0;
              return (
                <li
                  key={sub.id}
                  className={`flex items-center justify-between py-2 border-b border-border last:border-0 ${
                    isSoon ? "text-warning" : isOverdue ? "text-muted-foreground" : ""
                  }`}
                >
                  <div>
                    <span className="font-medium">{sub.name}</span>
                    <span className="text-muted-foreground text-sm ml-2">
                      {formatDate(sub.next_renewal_date)}
                      {days !== null && (
                        <>
                          {" "}
                          (
                          {days === 0
                            ? "today"
                            : days === 1
                            ? "tomorrow"
                            : days < 0
                            ? `${Math.abs(days)} days ago`
                            : `in ${days} days`}
                          )
                        </>
                      )}
                    </span>
                  </div>
                  <span className="font-medium">
                    ${getAnnualCost(Number(sub.price), sub.billing_cycle).toFixed(2)}/yr
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
