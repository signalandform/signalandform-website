"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMonthlyCost, getAnnualCost } from "@/lib/subscription-utils";
import type { Subscription } from "@/lib/types";

interface DashboardTotalsProps {
  subscriptions: Subscription[];
}

export default function DashboardTotals({ subscriptions }: DashboardTotalsProps) {
  const monthlyTotal = subscriptions.length === 0 ? 0 : subscriptions.reduce(
    (sum, sub) => sum + getMonthlyCost(Number(sub.price), sub.billing_cycle),
    0
  );
  const annualTotal = subscriptions.length === 0 ? 0 : subscriptions.reduce(
    (sum, sub) => sum + getAnnualCost(Number(sub.price), sub.billing_cycle),
    0
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Monthly total</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            ${monthlyTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Annual total</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            ${annualTotal.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
