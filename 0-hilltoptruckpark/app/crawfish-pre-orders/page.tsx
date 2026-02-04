import type { Metadata } from "next";
import Link from "next/link";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Crawfish Pre-Orders | Hilltop Truck Park",
  description: "Pre-order crawfish for pickup at Hilltop Truck Park in Justin, TX.",
};

export default function CrawfishPreOrdersPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Crawfish Pre-Orders</h1>
        <div className="space-y-6 text-contrast-midtone mb-12">
          <p>
            Pre-order crawfish for pickup at Hilltop Truck Park. Check our{" "}
            <Link href="/events" className="text-accent-2 hover:underline">
              Events
            </Link>{" "}
            page for upcoming crawfish dates.
          </p>
          <p>
            Pre-order form and checkout coming soon. For now, please contact us at{" "}
            <a href="mailto:info@hilltoptruckpark.com" className="text-accent-2 hover:underline">
              info@hilltoptruckpark.com
            </a>{" "}
            for crawfish pre-orders.
          </p>
        </div>
        <PlaceholderForm
          title="Pre-Order Form (Coming Soon)"
          message="Crawfish pre-order and checkout will be available soon."
          fields={[
            { name: "name", type: "text", label: "Name" },
            { name: "email", type: "email", label: "Email" },
            { name: "phone", type: "tel", label: "Phone" },
            { name: "quantity", type: "text", label: "Quantity" },
            { name: "date", type: "text", label: "Pickup Date" },
          ]}
        />
      </div>
    </section>
  );
}
