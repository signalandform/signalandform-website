export type BillingCycle = "monthly" | "quarterly" | "yearly";

export interface Subscription {
  id: string;
  user_id: string;
  name: string;
  price: number;
  billing_cycle: BillingCycle;
  next_renewal_date: string | null;
  category: string | null;
  is_active: boolean;
  canceled_at: string | null;
  created_at: string;
  updated_at: string;
}
