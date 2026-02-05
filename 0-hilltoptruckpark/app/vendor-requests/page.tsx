import type { Metadata } from "next";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Vendor Requests | Hilltop Truck Park",
  description: "Apply to become a food truck vendor or market vendor at Hilltop Truck Park.",
};

export default function VendorRequestsPage() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-content mx-auto">
        <h1 className="font-display text-htp-h1 md:text-5xl text-htp-navy uppercase tracking-[0.04em] mb-8">
          Vendor Requests
        </h1>
        <div className="space-y-6 text-htp-ink leading-[1.55] mb-12 max-w-2xl">
          <p>
            Interested in scheduling your food truck or becoming a vendor at our farmers markets and
            events? Fill out the form below and we&apos;ll get back to you.
          </p>
          <p>
            Form coming soon. In the meantime, please email{" "}
            <a href="mailto:info@hilltoptruckpark.com" className="text-htp-red hover:underline font-medium">
              info@hilltoptruckpark.com
            </a>{" "}
            with your inquiry.
          </p>
        </div>
        <PlaceholderForm
          title="Food Truck / Vendor Application (Coming Soon)"
          message="This form is not yet active. Please email info@hilltoptruckpark.com with your business name, contact info, and what type of vending you&apos;re interested in."
          fields={[
            { name: "business", type: "text", label: "Business Name" },
            { name: "name", type: "text", label: "Contact Name" },
            { name: "email", type: "email", label: "Email" },
            { name: "phone", type: "tel", label: "Phone" },
            { name: "type", type: "text", label: "Vendor Type (Food Truck, Market Vendor, etc.)" },
            { name: "message", type: "textarea", label: "Tell us about your business" },
          ]}
        />
      </div>
    </section>
  );
}
