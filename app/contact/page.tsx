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
      {/* Hero - dramatic */}
      <section className="relative py-28 px-4 bg-base overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--accent-2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center scroll-reveal">
          <h1 className="font-display font-semibold text-display-lg text-contrast mb-6">
            Got some questions? Good.
          </h1>
          <p className="text-xl text-accent-2 font-medium">We got answers.</p>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-16 px-4 bg-base">
        <div className="max-w-2xl mx-auto scroll-reveal">
          <ContactForm />
        </div>
      </section>

      {/* Contact info & FAQ */}
      <section
        className="py-28 px-4"
        style={{ background: "var(--warm-gradient)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-semibold text-display-md text-base mb-12 scroll-reveal">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 scroll-reveal">
            <div className="rounded-xl border border-warm-border bg-warm-bg/80 p-6 transition-colors hover:border-accent-3/30">
              <h3 className="font-medium text-base mb-3">
                What services does Signal &amp; Form LLC offer?
              </h3>
              <p className="text-base-midtone leading-relaxed">
                Signal &amp; Form LLC specializes in designing and printing a variety of visual
                communication materials, including vehicle wraps, food trailer wraps, signs,
                stickers, banners, and flags tailored for small businesses.
              </p>
            </div>
            <div className="rounded-xl border border-warm-border bg-warm-bg/80 p-6 transition-colors hover:border-accent-3/30">
              <h3 className="font-medium text-base mb-3">
                What is the turnaround time for orders?
              </h3>
              <p className="text-base-midtone leading-relaxed">
                Our typical turnaround time for orders is 7-10 business days, depending on the
                complexity and size of the project. But our timeline isn&apos;t ever fixed—whether
                you needed it yesterday, or won&apos;t need it for a little while, we&apos;d love
                to chat!
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-base rounded-xl border border-base-midtone scroll-reveal">
            <h3 className="font-display font-semibold text-contrast mb-4">
              Reach out directly
            </h3>
            <p className="text-contrast-midtone space-y-2">
              <a
                href="tel:2148032520"
                className="block text-accent-2 font-medium hover:text-accent-1 transition-colors"
              >
                214 444 8889
              </a>
              <a
                href="mailto:jack@signalandformllc.com"
                className="block text-accent-2 font-medium hover:text-accent-1 transition-colors"
              >
                jack@signalandformllc.com
              </a>
            </p>
            <p className="text-contrast-midtone mt-4 text-sm">
              Monday – Friday | 9am – 5pm CST
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
