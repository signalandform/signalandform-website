import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/imageMap";

export default function HomePage() {
  const caseStudyImg1 = getImageUrl(
    "https://signalandformllc.com/wp-content/uploads/2025/10/IMG_0233.jpg"
  );

  return (
    <>
      {/* Hero - business overview */}
      <section className="relative min-h-[100vh] flex items-center bg-gradient-to-b from-base via-base to-base-midtone px-4 sm:px-8 lg:px-12 py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--accent-2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative w-full max-w-6xl">
          <div className="max-w-2xl text-left">
            <h1 className="font-display font-semibold text-display-2xl text-contrast mb-6 tracking-tight opacity-0 animate-hero-fade-up [animation-delay:0.1s] ">
              <span className="block">Design</span>
              <span className="block text-accent-2">&amp; Build</span>
            </h1>
            <p className="text-lg md:text-xl text-contrast-midtone mb-14 opacity-0 animate-hero-fade-up [animation-delay:0.25s] ">
              Signal &amp; Form is a Grapevine-based studio. We design brands, signage, and
              physical products—and we build them for food trucks, local businesses, and makers in DFW.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6 opacity-0 animate-hero-fade-up [animation-delay:0.4s] ">
              <Link
                href="/solutions"
                className="group px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-1/25"
              >
                Design, Print &amp; Wrap
              </Link>
              <Link
                href="/products"
                className="px-10 py-4 border border-contrast-midtone text-contrast rounded-full font-medium hover:bg-contrast hover:text-base transition-all duration-300"
              >
                Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do - overview */}
      <section className="py-28 px-4 relative" style={{ background: "var(--warm-gradient)" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-semibold text-display-md text-base mb-12 scroll-reveal">
            What we do
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Link
              href="/solutions"
              className="group block p-8 rounded-xl border border-warm-border bg-warm-bg/80 transition-all duration-300 hover:border-accent-3/50 hover:shadow-lg scroll-reveal"
            >
              <h3 className="font-display font-semibold text-xl text-base mb-3 group-hover:text-accent-3 transition-colors">
                Design, Print &amp; Wrap
              </h3>
              <p className="text-base-midtone leading-relaxed mb-4">
                Vehicle wraps, custom signage, banners, flags, and event visuals for food trucks,
                trailers, and local businesses. We handle design, print coordination, and install.
              </p>
              <span className="text-accent-2 font-medium group-hover:text-accent-3 transition-colors">
                Explore solutions →
              </span>
            </Link>
            <Link
              href="/products"
              className="group block p-8 rounded-xl border border-warm-border bg-warm-bg/80 transition-all duration-300 hover:border-accent-3/50 hover:shadow-lg scroll-reveal"
            >
              <h3 className="font-display font-semibold text-xl text-base mb-3 group-hover:text-accent-3 transition-colors">
                Products
              </h3>
              <p className="text-base-midtone leading-relaxed mb-4">
                TypeStrip (privacy-first text capture, on-device OCR) and CountrTop (restaurant
                operations platform—one system, front to back). Product brands for retail, events,
                and makers.
              </p>
              <span className="text-accent-2 font-medium group-hover:text-accent-3 transition-colors">
                See products →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section id="casestudy" className="py-28 px-4 bg-base overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 scroll-reveal">
              <h2 className="font-display font-semibold text-display-md text-accent-1 mb-2">
                Work we&apos;ve done
              </h2>
              <p className="text-contrast-midtone mb-6">
                Baja Quesadilla truck wrap—full design and production coordination for a growing
                food truck brand.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-accent-2 font-medium hover:text-accent-1 transition-colors"
              >
                Project Showcase
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-base-midtone scroll-reveal">
              <Image
                src={caseStudyImg1}
                alt="Baja Quesadilla truck wrap"
                width={1186}
                height={224}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-28 px-4"
        style={{ background: "var(--warm-gradient)" }}
      >
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <h2 className="font-display font-semibold text-display-md text-base mb-6">
            Ready to get started?
          </h2>
          <p className="text-base-midtone mb-8">
            Whether you need a wrap, signage, or a product—we&apos;d love to hear about your project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105"
          >
            Get a quote
          </Link>
        </div>
      </section>
    </>
  );
}
