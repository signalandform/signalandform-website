import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/imageMap";

export default function HomePage() {
  const caseStudyImg1 = getImageUrl(
    "https://signalandformllc.com/wp-content/uploads/2025/10/IMG_0233.jpg"
  );
  const caseStudyImg2 = getImageUrl(
    "https://signalandformllc.com/wp-content/uploads/2025/10/IMG_0922-1.webp"
  );

  return (
    <>
      {/* Hero - full-viewport, split headline, staggered entrance */}
      <section className="relative min-h-[100vh] flex items-center justify-center bg-gradient-to-b from-base via-base to-base-midtone px-4 py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--accent-2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-14 flex justify-center opacity-0 animate-hero-fade-up [animation-delay:0.1s] ">
            <video
              src="/brand/logo-animation.mov"
              autoPlay
              muted
              loop
              playsInline
              className="h-24 w-auto max-w-[240px] object-contain brightness-0 invert opacity-95"
              aria-label="Signal & Form"
            />
          </div>
          <h1 className="font-display font-semibold text-display-xl text-contrast mb-6 tracking-tight opacity-0 animate-hero-fade-up [animation-delay:0.2s] ">
            <span className="block">Wraps &amp; Signs</span>
            <span className="block text-accent-2">That Make Your Truck Unmissable</span>
          </h1>
          <p className="text-lg md:text-xl text-contrast-midtone mb-14 max-w-2xl mx-auto opacity-0 animate-hero-fade-up [animation-delay:0.35s] ">
            Signal &amp; Form is a Grapevine-based studio specializing in food truck and trailer
            wraps, custom signage, banners, and flags for small businesses in DFW.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-hero-fade-up [animation-delay:0.5s] ">
            <Link
              href="/contact"
              className="group px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-1/25"
            >
              Get a quote
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#casestudy"
                className="text-contrast-midtone hover:text-accent-2 transition-colors underline-offset-4 hover:underline"
              >
                See what we do
              </Link>
              <Link
                href="/work"
                className="text-contrast-midtone hover:text-accent-2 transition-colors underline-offset-4 hover:underline"
              >
                Project Showcase
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for - bold quote block layout */}
      <section className="py-28 px-4 relative" style={{ background: "var(--warm-gradient)" }}>
        <div className="max-w-6xl mx-auto scroll-reveal">
          <blockquote className="border-l-4 border-accent-3 pl-8 md:pl-12 py-4">
            <h2 className="font-display font-semibold text-display-md text-base mb-6">
              Perfect for Food Trucks, Trailers, and Local Booths in DFW
            </h2>
            <p className="text-lg text-base-midtone mb-8 max-w-2xl">
              Signal &amp; Form is built for <strong className="text-base">you</strong>. We focus
              on clear, bold visuals that make it obvious who you are and what you do—fast.
            </p>
            <p className="font-medium text-base mb-3">If you are a:</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-base-midtone">
              <li className="flex items-start gap-2">
                <span className="text-accent-3 mt-1">—</span>
                Food truck or trailer getting ready to launch or rebrand
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-3 mt-1">—</span>
                Local restaurant or bar that wants signage that actually gets noticed
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-3 mt-1">—</span>
                Market or event vendor who needs banners, flags, and tents that stand out
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-3 mt-1">—</span>
                Small business that&apos;s outgrown DIY designs and wants a professional look
              </li>
            </ul>
          </blockquote>
        </div>
      </section>

      {/* Services - cards with hover lift */}
      <section className="py-28 px-4 bg-base">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-semibold text-display-lg text-contrast mb-16 scroll-reveal">
            Services for Food Trucks, Trailers, and Local Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="group p-8 rounded-xl border border-base-midtone bg-base-midtone/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
              <p className="text-accent-2 text-2xl font-light tracking-wider mb-4">01</p>
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
              <p className="text-accent-2 text-2xl font-light tracking-wider mb-4">02</p>
              <h3 className="text-xl font-medium text-contrast mb-3 group-hover:text-accent-2 transition-colors">
                Banners, Flags &amp; Event Visuals
              </h3>
              <p className="text-contrast-midtone leading-relaxed">
                High-visibility banners, feather flags, and event signage designed to pull eyes to
                your booth or storefront. Perfect for markets, pop-ups, and seasonal promotions.
              </p>
            </div>
            <div className="group p-8 rounded-xl border border-base-midtone bg-base-midtone/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
              <p className="text-accent-2 text-2xl font-light tracking-wider mb-4">03</p>
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

      {/* Process - horizontal timeline layout with scroll reveal */}
      <section className="py-28 px-4 bg-warm-bg-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-semibold text-display-lg text-base text-center mb-20 scroll-reveal">
            How the Process Works
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-warm-border -translate-y-1/2" />
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="relative bg-warm-bg p-8 rounded-xl border border-warm-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-3/30 scroll-reveal">
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-accent-3 flex items-center justify-center text-white font-medium text-sm">
                  01
                </div>
                <h3 className="text-xl font-medium text-base mt-4 mb-3">
                  Share Your Project &amp; Get a Clear Quote
                </h3>
                <p className="text-base-midtone leading-relaxed">
                  Fill out the contact form or email me with your vehicle or booth details, goals, and
                  timeline. We&apos;ll send a straightforward quote covering design, print, and (if
                  needed) install coordination—no surprise fees.
                </p>
              </div>
              <div className="relative bg-warm-bg p-8 rounded-xl border border-warm-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-3/30 scroll-reveal">
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-accent-3 flex items-center justify-center text-white font-medium text-sm">
                  02
                </div>
                <h3 className="text-xl font-medium text-base mt-4 mb-3">Design &amp; Revisions</h3>
                <p className="text-base-midtone leading-relaxed">
                  We collaborate on the design, refine it with your feedback, and finalize print-ready
                  files.
                </p>
              </div>
              <div className="relative bg-warm-bg p-8 rounded-xl border border-warm-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-3/30 scroll-reveal">
                <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-accent-3 flex items-center justify-center text-white font-medium text-sm">
                  03
                </div>
                <h3 className="text-xl font-medium text-base mt-4 mb-3">Print, Install &amp; Launch</h3>
                <p className="text-base-midtone leading-relaxed">
                  We coordinate with trusted production partners so your wrap or signage is printed
                  correctly and installed on time. Most projects turnaround in as little as 14 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Loop-style with [Client] format, full-bleed imagery */}
      <section id="casestudy" className="py-28 px-4 bg-base overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="scroll-reveal">
            <h2 className="font-display font-semibold text-display-md text-accent-1 mb-2">
              Designing a Bold Wrap for a Growing Food Truck
            </h2>
            <p className="text-accent-2 text-lg mb-8">
              <em>with</em> <strong>Baja Quesadilla</strong>
            </p>
            <p className="text-contrast-midtone max-w-2xl mb-12">
              Full truck wrap design and production coordination to help a growing food truck brand
              stand out and stay consistent across multiple vehicles.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 scroll-reveal">
            <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-base-midtone transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src={caseStudyImg1}
                alt="Baja Quesadilla truck wrap"
                width={1186}
                height={224}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 rounded-xl overflow-hidden border border-base-midtone transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src={caseStudyImg2}
                alt="Food truck wrap detail"
                width={597}
                height={249}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - smoother accordion, two-column on desktop */}
      <section className="py-28 px-4" style={{ background: "var(--warm-gradient)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div className="scroll-reveal">
              <h3 className="font-display font-semibold text-display-md text-base mb-8">
                General FAQs
              </h3>
              <div className="space-y-2">
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                What does Signal &amp; Form do exactly?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                We help small businesses look sharp and get noticed with custom design and print
                solutions—especially vehicle wraps (with a focus on food trucks and trailers), signs,
                banners, flags, and event tents. We handle the design and print setup, then
                coordinate production and fulfillment through trusted print partners.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                Where are you located and what areas do you serve?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                We are based in Grapevine, Texas and primarily serve the Dallas–Fort Worth area. For
                printed products like banners, signs, flags, and tents, we can ship anywhere in the
                U.S.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                What are your hours?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                We are generally available every day from 8am–8pm Central. We&apos;re flexible, so
                if you need to talk outside those hours, just let us know and we&apos;ll find a
                time.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                How long does a typical project take?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                Project timelines vary, but a typical project can take about 2 – 4 weeks depending on
                the complexity of the design and the quantity of revisions.
              </p>
            </details>
              </div>
            </div>

            <div className="scroll-reveal">
              <h3 className="font-display font-semibold text-display-md text-base mb-8">
                Vehicle Wraps FAQs
              </h3>
              <div className="space-y-2">
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                I&apos;m starting a food truck. Can you help with my wrap?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                Yes—that&apos;s our specialty. We can help you from &quot;idea only&quot; all the
                way to a finished wrap on your truck or trailer. We&apos;ll clarify your brand,
                layout, menu placement, and key messaging, then we&apos;ll design the wrap and
                prepare files for our install partner (or your installer).
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                Do you handle printing and installation, or just design?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                We handle the full process: design, print-ready files, and coordination with a
                trusted local wrap shop (Sigma Grafix) for printing and installation. If you already
                have an installer, we can also provide design + print-ready files only for a reduced
                cost.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                How much does a wrap cost?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                Pricing depends on vehicle size and coverage. Food Trucks and Fleet Vehicles
                typically start at $14/square foot. Food Trailers typically start at $12/square
                foot. Once we know your vehicle type, rough measurements, and coverage (partial vs
                full wrap), we&apos;ll send a clear quote before we start.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                How long does the wrap process take?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                A typical project takes about 14 business days from the time you pay the deposit and
                we lock in content (logo, menu, photos, copy). That includes design, revisions, and
                preparing files for print. Install scheduling depends on the wrap shop&apos;s
                calendar, but I&apos;ll coordinate that with you.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                What do you need from me to get started on a wrap?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <ul className="px-5 pb-4 text-base-midtone list-disc list-inside space-y-1 leading-relaxed">
                <li>Photos and measurements of the vehicle</li>
                <li>Your Logo (if you have one)</li>
                <li>Any brand colors, fonts, and details as to desired outcome.</li>
              </ul>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                What if I already have a design?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                We can help format your existing design to meet print specs, adjust sizing, and make
                sure everything will print cleanly at full scale. If needed, we can also refine or
                update your design.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                Is there a warranty on the wrap?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                Yes. Wraps printed and installed through our partner Sigma Grafix include a 3‑year
                warranty on the material and installation. We&apos;ll walk you through care tips to
                help your wrap last as long as possible.
              </p>
            </details>
              </div>
            </div>
          </div>

          <div className="mt-16 scroll-reveal">
            <h3 className="font-display font-semibold text-display-md text-base mb-8">
              Signs, Banners, Flags &amp; Event Tents FAQs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                What kinds of signs and banners do you offer?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                Vinyl banners (indoor/outdoor), yard signs and rigid signs, feather flags and pole
                flags, event tents and booth setups, and much more. These are great for storefronts,
                markets, pop‑ups, and events.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                Do you print in-house?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                We don&apos;t print in-house. We work with wholesale print partners to produce
                high‑quality products at good prices, then pass that value on to you. We handle the
                design, print setup, and ordering so you don&apos;t have to deal with specs or
                vendors.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                How much do flags, banners, and tents cost?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                Pricing depends on size, quantity, and hardware. For example, XL feather flags
                I&apos;ve quoted at around $250 each including design. Once I know what you need
                (size, quantity, single vs double-sided), we&apos;ll send a detailed quote. For a
                full list of products with individual pricing estimates, visit our{" "}
                <Link href="/products" className="text-accent-2 hover:underline">
                  Products
                </Link>{" "}
                page.
              </p>
            </details>
            <details className="group rounded-lg border border-warm-border bg-warm-bg/80 overflow-hidden transition-colors hover:border-accent-3/30">
              <summary className="cursor-pointer px-5 py-4 font-medium text-base list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-4">
                How long do signs and banners take?
                <span className="shrink-0 text-accent-3 transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-base-midtone leading-relaxed">
                Most sign and banner projects take about 10-14 business days from design approval to
                delivery, depending on shipping. If you&apos;re on a tight timeline, tell us your
                deadline and we&apos;ll let you know what&apos;s realistic.
              </p>
            </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
