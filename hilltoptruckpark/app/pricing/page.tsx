import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Hilltop Truck Park",
  description: "Admission, parking, and event pricing at Hilltop Truck Park in Justin, TX.",
};

export default function PricingPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Pricing</h1>
        <div className="space-y-8 text-contrast-midtone">
          <p>
            Hilltop Truck Park offers affordable admission and parking for visitors. Pricing may vary
            for special events, farmers markets, and themed nights.
          </p>
          <div className="grid gap-6">
            <div className="border-l-4 border-accent-1 pl-4">
              <h2 className="text-xl font-medium text-contrast mb-2">General Admission</h2>
              <p>Free admission to the park. Enjoy the food trucks, playground, and atmosphere.</p>
            </div>
            <div className="border-l-4 border-accent-1 pl-4">
              <h2 className="text-xl font-medium text-contrast mb-2">Parking</h2>
              <p>Free parking is available on-site at 8356 Thompson Road, Justin, TX.</p>
            </div>
            <div className="border-l-4 border-accent-1 pl-4">
              <h2 className="text-xl font-medium text-contrast mb-2">Food &amp; Drinks</h2>
              <p>Purchases are made directly from our rotating food trucks. Each truck sets its own prices.</p>
            </div>
          </div>
          <p>
            For vendor pricing, market sign-ups, and special event details, visit our{" "}
            <Link href="/vendor-requests" className="text-accent-2 hover:underline">
              Vendor Requests
            </Link>{" "}
            page or contact us at{" "}
            <a href="mailto:info@hilltoptruckpark.com" className="text-accent-2 hover:underline">
              info@hilltoptruckpark.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
