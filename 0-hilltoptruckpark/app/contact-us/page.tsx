import type { Metadata } from "next";
import PlaceholderForm from "@/components/PlaceholderForm";

export const metadata: Metadata = {
  title: "Contact Us | Hilltop Truck Park",
  description: "Get in touch with Hilltop Truck Park in Justin, TX.",
};

export default function ContactUsPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Contact Us</h1>
        <div className="space-y-8 text-contrast-midtone mb-12">
          <p>
            Have questions? Reach out to us at Hilltop Truck Park. We&apos;d love to hear from you.
          </p>
          <div>
            <h2 className="text-xl font-medium text-contrast mb-2">Address</h2>
            <p>8356 Thompson Road, Justin, TX 76247</p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-contrast mb-2">Email</h2>
            <a
              href="mailto:info@hilltoptruckpark.com"
              className="text-accent-2 hover:underline"
            >
              info@hilltoptruckpark.com
            </a>
          </div>
        </div>
        <PlaceholderForm
          title="Contact Form (Coming Soon)"
          message="This form is not yet active. Please email us directly at info@hilltoptruckpark.com for now."
        />
      </div>
    </section>
  );
}
