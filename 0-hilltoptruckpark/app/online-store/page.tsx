import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Store | Hilltop Truck Park",
  description: "Shop Hilltop Truck Park merchandise and more.",
};

export default function OnlineStorePage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Online Store</h1>
        <div className="space-y-6 text-contrast-midtone">
          <p>
            Shop Hilltop Truck Park merchandise, apparel, and more. Our online store is coming soon.
          </p>
          <div className="bg-base-midtone rounded-lg p-8 text-center">
            <p className="text-contrast font-medium mb-2">Store Coming Soon</p>
            <p className="text-contrast-midtone text-sm">
              Check back later for merch, swag, and more. In the meantime, visit us in person at
              8356 Thompson Road, Justin, TX!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
