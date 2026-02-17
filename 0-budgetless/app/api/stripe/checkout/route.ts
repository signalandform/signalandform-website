import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getStripe, PREMIUM_MONTHLY_PRICE_ID, PREMIUM_YEARLY_PRICE_ID } from "@/lib/stripe";

export async function POST(request: Request) {
  const stripe = getStripe();
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { priceId, successUrl, cancelUrl } = body;

  if (!priceId || !successUrl || !cancelUrl) {
    return NextResponse.json(
      { error: "priceId, successUrl, cancelUrl required" },
      { status: 400 }
    );
  }

  if (priceId !== PREMIUM_MONTHLY_PRICE_ID && priceId !== PREMIUM_YEARLY_PRICE_ID) {
    return NextResponse.json({ error: "Invalid price" }, { status: 400 });
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", user.id)
    .single();

  let customerId = profile?.stripe_customer_id;

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { supabase_user_id: user.id },
    });
    customerId = customer.id;
    await supabase
      .from("profiles")
      .update({ stripe_customer_id: customerId })
      .eq("id", user.id);
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata: { user_id: user.id },
    subscription_data: { metadata: { user_id: user.id } },
  });

  return NextResponse.json({ url: session.url });
}
