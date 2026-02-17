"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FREE_LIMIT = 5;

export default function UpgradePage() {
  const [loading, setLoading] = useState<"monthly" | "yearly" | null>(null);

  async function handleCheckout(priceId: string) {
    setLoading(priceId === process.env.NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID ? "monthly" : "yearly");
    try {
      const base = typeof window !== "undefined" ? window.location.origin : "";
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId,
          successUrl: `${base}/dashboard?upgraded=1`,
          cancelUrl: `${base}/dashboard/upgrade`,
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } finally {
      setLoading(null);
    }
  }

  const monthlyPriceId = process.env.NEXT_PUBLIC_STRIPE_PREMIUM_MONTHLY_PRICE_ID;
  const yearlyPriceId = process.env.NEXT_PUBLIC_STRIPE_PREMIUM_YEARLY_PRICE_ID;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to dashboard
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Upgrade to Premium</CardTitle>
          <CardDescription>
            Free tier allows up to {FREE_LIMIT} subscriptions. Premium unlocks unlimited
            subscriptions, renewal reminders, cancellation guides, and savings tracker.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {monthlyPriceId && (
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-semibold">Monthly</p>
                <p className="text-2xl">$5<span className="text-sm font-normal text-muted-foreground">/month</span></p>
              </div>
              <Button
                onClick={() => handleCheckout(monthlyPriceId)}
                disabled={!!loading}
              >
                {loading === "monthly" ? "Redirecting..." : "Subscribe"}
              </Button>
            </div>
          )}
          {yearlyPriceId && (
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-semibold">Yearly</p>
                <p className="text-2xl">$29<span className="text-sm font-normal text-muted-foreground">/year</span></p>
                <p className="text-xs text-success">Save $31 vs monthly</p>
              </div>
              <Button
                onClick={() => handleCheckout(yearlyPriceId)}
                disabled={!!loading}
              >
                {loading === "yearly" ? "Redirecting..." : "Subscribe"}
              </Button>
            </div>
          )}
          {!monthlyPriceId && !yearlyPriceId && (
            <p className="text-muted-foreground text-sm">
              Stripe is not configured. Add price IDs to enable checkout.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
