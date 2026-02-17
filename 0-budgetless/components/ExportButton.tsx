"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getAnnualCost } from "@/lib/subscription-utils";
import type { Subscription } from "@/lib/types";

interface ExportButtonProps {
  subscriptions: Subscription[];
}

export default function ExportButton({ subscriptions }: ExportButtonProps) {
  const [loading, setLoading] = useState(false);

  function handleExport() {
    setLoading(true);
    const headers = ["Name", "Price", "Billing Cycle", "Annual Cost", "Next Renewal"];
    const rows = subscriptions.map((sub) => [
      sub.name,
      sub.price,
      sub.billing_cycle,
      getAnnualCost(Number(sub.price), sub.billing_cycle).toFixed(2),
      sub.next_renewal_date ?? "",
    ]);
    const csv = [
      headers.join(","),
      ...rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `budgetless-subscriptions-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    setLoading(false);
  }

  return (
    <Button variant="outline" size="sm" onClick={handleExport} disabled={loading}>
      <Download className="h-4 w-4 mr-2" />
      {loading ? "Exporting..." : "Export CSV"}
    </Button>
  );
}
