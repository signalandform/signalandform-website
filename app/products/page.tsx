import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Signal & Form",
  description:
    "TypeStrip and CountrTop — product brands from Signal & Form. Custom typography products and counter-top solutions for your business.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28 px-4 bg-base">
        <div className="max-w-6xl mx-auto">
          <p className="text-contrast-midtone mb-4 scroll-reveal">
            Product brands from Signal &amp; Form
          </p>
          <h1 className="font-display font-semibold text-display-lg text-contrast mb-16 scroll-reveal">
            Products
          </h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* TypeStrip */}
            <div className="group rounded-xl border border-base-midtone bg-base-midtone/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
              <h2 className="font-display font-semibold text-2xl text-contrast mb-4">
                TypeStrip
              </h2>
              <p className="text-contrast-midtone leading-relaxed mb-6">
                Custom typography products and lettering solutions. TypeStrip brings design and
                craft together for businesses, events, and makers.
              </p>
              <a
                href="https://www.typestrip.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-2 font-medium hover:text-accent-1 transition-colors"
              >
                Visit TypeStrip
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* CountrTop */}
            <div className="group rounded-xl border border-base-midtone bg-base-midtone/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
              <h2 className="font-display font-semibold text-2xl text-contrast mb-4">
                CountrTop
              </h2>
              <p className="text-contrast-midtone leading-relaxed mb-6">
                Counter-top signage and display solutions for retail, restaurants, and service
                businesses. Stand out at the point of sale.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-accent-2 font-medium hover:text-accent-1 transition-colors"
              >
                Learn more / Get a quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <p className="mt-16 text-contrast-midtone scroll-reveal">
            For design, print, and wrap services—including vehicle wraps, banners, signs, and
            flags—visit our{" "}
            <Link href="/solutions" className="text-accent-2 font-medium hover:text-accent-1 transition-colors">
              Solutions
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </div>
  );
}
