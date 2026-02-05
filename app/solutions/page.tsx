import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/imageMap";
import ParallaxBackground from "@/components/ParallaxBackground";

export const metadata: Metadata = {
  title: "Solutions | Signal & Form",
  description:
    "Design, print, and wrap solutions for small businesses in DFW. Vehicle wraps, custom signage, banners, flags, and event visuals from Signal & Form.",
};

export default function SolutionsPage() {
  const caseStudyImg1 = getImageUrl(
    "https://signalandformllc.com/wp-content/uploads/2025/10/IMG_0233.jpg"
  );

  return (
    <>
      <ParallaxBackground />
      <div className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-28 px-4 bg-base overflow-hidden">
          <div className="max-w-6xl mx-auto scroll-reveal">
            <h1 className="font-display font-semibold text-display-lg text-contrast mb-6">
              Design, Print &amp; Wrap
            </h1>
            <p className="text-xl text-contrast-midtone max-w-2xl mb-10">
              Vehicle wraps, custom signage, banners, and flags for food trucks, trailers, and
              local businesses in DFW.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105"
              >
                Get a quote
              </Link>
              <a
                href="https://signalandformllc.bs.run"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 border border-contrast-midtone text-contrast rounded-full font-medium hover:bg-contrast hover:text-base transition-all duration-300"
              >
                Full print catalog
              </a>
            </div>
          </div>
        </section>

        {/* What we do - Design, Print, Wrap */}
        <section className="py-28 px-4 relative backdrop-blur-md shadow-lg shadow-black/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-semibold text-display-md text-white text-center mb-16 scroll-reveal">
              What we do
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group rounded-xl border border-white/30 bg-base/20 p-8 transition-all duration-300 hover:border-accent-3/50 hover:shadow-lg scroll-reveal">
                <p className="text-accent-2 text-2xl font-light tracking-wider mb-4">01</p>
                <h3 className="text-xl font-medium text-white mb-3">Design</h3>
                <p className="text-white/90 leading-relaxed">
                  Whether it is helping bring a new brand to life, giving an existing brand a fresh
                  look, or optimizing a wonderful one, we can do it all.
                </p>
              </div>
              <div className="group rounded-xl border border-white/30 bg-base/20 p-8 transition-all duration-300 hover:border-accent-3/50 hover:shadow-lg scroll-reveal">
                <p className="text-accent-2 text-2xl font-light tracking-wider mb-4">02</p>
                <h3 className="text-xl font-medium text-white mb-3">Print</h3>
                <p className="text-white/90 leading-relaxed">
                  We can print anything that we design on our entire print catalog, as well as help
                  optimize and import your design, making ordering a banner a breeze.
                </p>
              </div>
              <div className="group rounded-xl border border-white/30 bg-base/20 p-8 transition-all duration-300 hover:border-accent-3/50 hover:shadow-lg scroll-reveal">
                <p className="text-accent-2 text-2xl font-light tracking-wider mb-4">03</p>
                <h3 className="text-xl font-medium text-white mb-3">Wrap</h3>
                <p className="text-white/90 leading-relaxed">
                  We partner with{" "}
                  <a
                    href="https://sigmawraps.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-2 font-medium hover:text-accent-1 transition-colors"
                  >
                    Sigma Grafix
                  </a>
                  , the best vehicle wrappers in DFW to bring your vision to 4 (or more) wheels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services detail */}
        <section className="py-28 px-4 bg-base overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-semibold text-display-md text-contrast mb-16 scroll-reveal">
              Services for Food Trucks, Trailers, and Local Businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-14">
              <div className="group p-8 rounded-xl border border-base-midtone bg-base-midtone/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
                <h3 className="text-xl font-medium text-contrast mb-3 group-hover:text-accent-2 transition-colors">
                  Custom Vehicle &amp; Food Trailer Wraps
                </h3>
                <p className="text-contrast-midtone leading-relaxed">
                  Full-wrap design, print, and install coordination for food trucks, trailers, and
                  service vehicles. We handle the layout around your windows, doors, and menu so
                  it&apos;s readable from a distance and looks professional.
                </p>
              </div>
              <div className="group p-8 rounded-xl border border-base-midtone bg-base-midtone/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
                <h3 className="text-xl font-medium text-contrast mb-3 group-hover:text-accent-2 transition-colors">
                  Banners, Flags &amp; Event Visuals
                </h3>
                <p className="text-contrast-midtone leading-relaxed">
                  High-visibility banners, feather flags, and event signage designed to pull eyes to
                  your booth or storefront. Perfect for markets, pop-ups, and seasonal promotions.
                </p>
              </div>
              <div className="group p-8 rounded-xl border border-base-midtone bg-base-midtone/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
                <h3 className="text-xl font-medium text-contrast mb-3 group-hover:text-accent-2 transition-colors">
                  Storefront &amp; Business Signage
                </h3>
                <p className="text-contrast-midtone leading-relaxed">
                  Impactful storefront signs and directional signage that clearly communicate who you
                  are, what you do, and where to go—so customers don&apos;t walk past you.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-1/25 scroll-reveal"
            >
              Start your project
            </Link>
          </div>
        </section>

        {/* Process */}
        <section className="py-28 px-4 relative backdrop-blur-md shadow-lg shadow-black/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display font-semibold text-display-lg text-white text-center mb-20 scroll-reveal">
              How the Process Works
            </h2>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/20 -translate-y-1/2" />
              <div className="grid md:grid-cols-3 gap-8 relative">
                <div className="relative p-8 rounded-xl border border-white/30 bg-base/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-3/50 scroll-reveal">
                  <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-accent-3 flex items-center justify-center text-white font-medium text-sm">
                    01
                  </div>
                  <h3 className="text-xl font-medium text-white mt-4 mb-3">
                    Share Your Project &amp; Get a Clear Quote
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Fill out the contact form or email us with your vehicle or booth details, goals,
                    and timeline. We&apos;ll send a straightforward quote covering design, print, and
                    (if needed) install coordination—no surprise fees.
                  </p>
                </div>
                <div className="relative p-8 rounded-xl border border-white/30 bg-base/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-3/50 scroll-reveal">
                  <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-accent-3 flex items-center justify-center text-white font-medium text-sm">
                    02
                  </div>
                  <h3 className="text-xl font-medium text-white mt-4 mb-3">Design &amp; Revisions</h3>
                  <p className="text-white/90 leading-relaxed">
                    We collaborate on the design, refine it with your feedback, and finalize
                    print-ready files.
                  </p>
                </div>
                <div className="relative p-8 rounded-xl border border-white/30 bg-base/20 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-3/50 scroll-reveal">
                  <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-accent-3 flex items-center justify-center text-white font-medium text-sm">
                    03
                  </div>
                  <h3 className="text-xl font-medium text-white mt-4 mb-3">Print, Install &amp; Launch</h3>
                  <p className="text-white/90 leading-relaxed">
                    We coordinate with trusted production partners so your wrap or signage is printed
                    correctly and installed on time. Most projects turnaround in as little as 14 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case study teaser */}
        <section className="py-28 px-4 bg-base overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 scroll-reveal">
                <h2 className="font-display font-semibold text-display-md text-accent-1 mb-2">
                  Case Study: Baja Quesadilla
                </h2>
                <p className="text-contrast-midtone mb-6">
                  Full truck wrap design and production coordination to help a growing food truck
                  brand stand out and stay consistent across multiple vehicles.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-accent-2 font-medium hover:text-accent-1 transition-colors"
                >
                  See more work
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
      </div>
    </>
  );
}
