import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Signal & Form",
  description:
    "Signal & Form LLC specializes in designing and printing vehicle wraps, food trailer wraps, signs, and more. Get in touch for a quote.",
};

export default function ContactPage() {
  return (
    <>
      <div className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-28 px-4 bg-base overflow-hidden">
          <div className="max-w-3xl mx-auto text-center scroll-reveal">
            <h1 className="font-display font-semibold text-display-lg text-contrast mb-6">
              Got some questions? Good.
            </h1>
            <p className="text-xl text-accent-2 font-medium">We got answers.</p>
          </div>
        </section>

        {/* Contact form */}
        <section className="py-16 px-4 backdrop-blur-md shadow-lg shadow-black/10">
          <div className="max-w-2xl mx-auto scroll-reveal">
            <ContactForm />
          </div>
        </section>

        {/* Contact info & FAQ */}
        <section className="py-28 px-4 bg-base overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-semibold text-display-md text-white mb-12 scroll-reveal">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 scroll-reveal">
              <div className="rounded-xl border border-white/30 bg-base/20 p-6 transition-colors hover:border-accent-3/50">
                <h3 className="font-medium text-white mb-3">
                  What services does Signal &amp; Form LLC offer?
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Signal &amp; Form LLC specializes in designing and printing a variety of visual
                  communication materials, including vehicle wraps, food trailer wraps, signs,
                  stickers, banners, and flags tailored for small businesses.
                </p>
              </div>
              <div className="rounded-xl border border-white/30 bg-base/20 p-6 transition-colors hover:border-accent-3/50">
                <h3 className="font-medium text-white mb-3">
                  What is the turnaround time for orders?
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Our typical turnaround time for orders is 7-10 business days, depending on the
                  complexity and size of the project. But our timeline isn&apos;t ever fixed—whether
                  you needed it yesterday, or won&apos;t need it for a little while, we&apos;d love
                  to chat!
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-xl border border-base-midtone bg-base-midtone/30 scroll-reveal">
              <h3 className="font-display font-semibold text-contrast mb-4">
                Reach out directly
              </h3>
              <p className="text-contrast-midtone space-y-2">
                <a
                  href="tel:2144448889"
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
    </>
  );
}
