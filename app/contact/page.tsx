import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Signal & Form",
  description:
    "Signal & Form LLC specializes in designing and printing vehicle wraps, food trailer wraps, signs, and more. Get in touch for a quote.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 px-4 bg-base">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-semibold text-contrast mb-4">
            Got some questions? Good. We got answers.
          </h1>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-8 px-4 bg-base">
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Contact info & FAQ */}
      <section className="py-16 px-4 bg-[#f3f4f6]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-base mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-base mb-2">
                What services does Signal &amp; Form LLC offer?
              </h3>
              <p className="text-base-midtone">
                Signal &amp; Form LLC specializes in designing and printing a variety of visual
                communication materials, including vehicle wraps, food trailer wraps, signs,
                stickers, banners, and flags tailored for small businesses.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-base mb-2">What is the turnaround time for orders?</h3>
              <p className="text-base-midtone">
                Our typical turnaround time for orders is 7-10 business days, depending on the
                complexity and size of the project. But our timeline isn&apos;t ever fixed—whether
                you needed it yesterday, or won&apos;t need it for a little while, we&apos;d love
                to chat!
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-base rounded-lg">
            <h3 className="font-medium text-contrast mb-2">Reach out directly</h3>
            <p className="text-contrast-midtone">
              <a href="tel:2148032520" className="text-accent-2 hover:underline">
                214 803 2520
              </a>
              <br />
              <a href="mailto:jack@signalandformllc.com" className="text-accent-2 hover:underline">
                jack@signalandformllc.com
              </a>
            </p>
            <p className="text-contrast-midtone mt-2 text-sm">
              Monday – Friday | 9am – 5pm CST
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
