export type BillingCycle = "monthly" | "quarterly" | "yearly";

export const ANNUAL_MULTIPLIERS: Record<BillingCycle, number> = {
  monthly: 12,
  quarterly: 4,
  yearly: 1,
};

export function getAnnualCost(price: number, billingCycle: BillingCycle): number {
  return price * ANNUAL_MULTIPLIERS[billingCycle];
}

export function getMonthlyCost(price: number, billingCycle: BillingCycle): number {
  const annual = getAnnualCost(price, billingCycle);
  return annual / 12;
}
