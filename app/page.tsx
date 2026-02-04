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
      {/* Hero - neo-retro minimal, spacious */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-base to-base-midtone px-4 py-30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <video
              src="/brand/logo-animation.mov"
              autoPlay
              muted
              loop
              playsInline
              className="h-20 w-auto max-w-[200px] object-contain brightness-0 invert opacity-90"
              aria-label="Signal & Form"
            />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-contrast mb-8 leading-tight">
            Wraps &amp; Signs That Make Your Food Truck or Booth Unmissable in DFW
          </h1>
          <p className="text-lg md:text-xl text-contrast-midtone mb-12 max-w-2xl mx-auto">
            Signal &amp; Form is a Grapevine-based studio specializing in food truck and trailer
            wraps, custom signage, banners, and flags for small businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 border border-contrast-midtone text-contrast rounded-full font-medium hover:bg-contrast hover:text-base transition-colors"
            >
              Get a quote
            </Link>
            <Link
              href="#casestudy"
              className="px-8 py-3 border border-contrast-midtone text-contrast rounded-full font-medium hover:bg-contrast hover:text-base transition-colors"
            >
              See what we do
            </Link>
            <Link
              href="/work"
              className="px-8 py-3 border border-contrast-midtone text-contrast rounded-full font-medium hover:bg-contrast hover:text-base transition-colors"
            >
              Project Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="py-24 px-4 bg-warm-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h2 className="font-serif text-2xl font-medium text-base mb-4">
                Perfect for Food Trucks, Trailers, and Local Booths in DFW
              </h2>
            </div>
            <div>
              <p className="font-medium text-base mb-2">If you are a:</p>
              <ul className="list-disc list-inside text-base-midtone space-y-2">
                <li>Food truck or trailer getting ready to launch or rebrand</li>
                <li>Local restaurant or bar that wants signage that actually gets noticed</li>
                <li>Market or event vendor who needs banners, flags, and tents that stand out</li>
                <li>Small business that&apos;s outgrown DIY designs and wants a professional look</li>
              </ul>
            </div>
            <div>
              <p className="text-base-midtone">
                Signal &amp; Form is built for <strong className="text-contrast">you</strong>. We
                focus on clear, bold visuals that make it obvious who you are and what you
                do—fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-base">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-contrast mb-16">
            Services for Food Trucks, Trailers, and Local Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="border-t border-contrast-midtone pt-4">
              <h3 className="text-lg font-medium text-contrast mb-2">
                Custom Vehicle &amp; Food Trailer Wraps
              </h3>
              <p className="text-contrast-midtone">
                Full-wrap design, print, and install coordination for food trucks, trailers, and
                service vehicles. We handle the layout around your windows, doors, and menu so
                it&apos;s readable from a distance and looks professional.
              </p>
            </div>
            <div className="border-t border-contrast-midtone pt-4">
              <h3 className="text-lg font-medium text-contrast mb-2">
                Banners, Flags &amp; Event Visuals
              </h3>
              <p className="text-contrast-midtone">
                High-visibility banners, feather flags, and event signage designed to pull eyes to
                your booth or storefront. Perfect for markets, pop-ups, and seasonal promotions.
              </p>
            </div>
            <div className="border-t border-contrast-midtone pt-4">
              <h3 className="text-lg font-medium text-contrast mb-2">
                Storefront &amp; Business Signage
              </h3>
              <p className="text-contrast-midtone">
                Impactful storefront signs and directional signage that clearly communicate who you
                are, what you do, and where to go—so customers don&apos;t walk past you.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-1 text-base rounded-full font-medium hover:bg-accent-2 transition-colors"
          >
            start your project
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 bg-warm-bg-alt">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-base text-center mb-16">
            How the Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-warm-bg p-8 border border-warm-border">
              <p className="text-accent-3 text-xl font-light tracking-wider mb-2">01</p>
              <h3 className="text-lg font-medium text-base mb-3">
                Share Your Project &amp; Get a Clear Quote
              </h3>
              <p className="text-base-midtone">
                Fill out the contact form or email me with your vehicle or booth details, goals, and
                timeline. And from there, we&apos;ll send a straightforward quote covering design,
                print, and (if needed) install coordination—no surprise fees.
              </p>
            </div>
            <div className="bg-warm-bg p-8 border border-warm-border">
              <p className="text-accent-3 text-xl font-light tracking-wider mb-2">02</p>
              <h3 className="text-lg font-medium text-base mb-3">Design &amp; Revisions</h3>
              <p className="text-base-midtone">
                We collaborate on the design, refine it with your feedback, and finalize print-ready
                files.
              </p>
            </div>
            <div className="bg-warm-bg p-8 border border-warm-border">
              <p className="text-accent-3 text-xl font-light tracking-wider mb-2">03</p>
              <h3 className="text-lg font-medium text-base mb-3">Print, Install &amp; Launch</h3>
              <p className="text-base-midtone">
                We coordinate with trusted production partners so your wrap or signage is printed
                correctly and installed on time. Most projects can turnaround in as little as 14
                days, but we are always flexible to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="casestudy" className="py-24 px-4 bg-base">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <h2 className="font-serif text-2xl font-medium text-accent-1 shrink-0">
              Case Study: Baja Quesadilla
            </h2>
            <div className="border-l-2 border-accent-3 pl-8">
              <p className="text-contrast-midtone">
                Full truck wrap design and production coordination to help a growing food truck brand
                stand out and stay consistent across multiple vehicles.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <Image
                src={caseStudyImg1}
                alt="Baja Quesadilla truck wrap"
                width={1186}
                height={224}
                className="w-full h-auto rounded"
              />
            </div>
            <div className="flex-1 flex gap-4">
              <div className="flex-1">
                <Image
                  src={caseStudyImg2}
                  alt="Food truck wrap detail"
                  width={597}
                  height={249}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-warm-bg">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-base mb-8">General FAQs</h3>
          <div className="space-y-4">
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                What does Signal &amp; Form do exactly?
              </summary>
              <p className="mt-2 text-base-midtone">
                We help small businesses look sharp and get noticed with custom design and print
                solutions—especially vehicle wraps (with a focus on food trucks and trailers), signs,
                banners, flags, and event tents. We handle the design and print setup, then
                coordinate production and fulfillment through trusted print partners.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                Where are you located and what areas do you serve?
              </summary>
              <p className="mt-2 text-base-midtone">
                We are based in Grapevine, Texas and primarily serve the Dallas–Fort Worth area. For
                printed products like banners, signs, flags, and tents, we can ship anywhere in the
                U.S.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                What are your hours?
              </summary>
              <p className="mt-2 text-base-midtone">
                We are generally available every day from 8am–8pm Central. We&apos;re flexible, so
                if you need to talk outside those hours, just let us know and we&apos;ll find a
                time.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                How long does a typical project take?
              </summary>
              <p className="mt-2 text-base-midtone">
                Project timelines vary, but a typical project can take about 2 – 4 weeks depending on
                the complexity of the design and the quantity of revisions.
              </p>
            </details>
          </div>

          <h3 className="text-xl font-bold text-base mt-12 mb-8">
            Vehicle Wraps (Food Trucks, Food Trailers, &amp; Fleet Vehicles) FAQs
          </h3>
          <div className="space-y-4">
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                I&apos;m starting a food truck. Can you help with my wrap?
              </summary>
              <p className="mt-2 text-base-midtone">
                Yes—that&apos;s our specialty. We can help you from &quot;idea only&quot; all the
                way to a finished wrap on your truck or trailer. We&apos;ll clarify your brand,
                layout, menu placement, and key messaging, then we&apos;ll design the wrap and
                prepare files for our install partner (or your installer).
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                Do you handle printing and installation, or just design?
              </summary>
              <p className="mt-2 text-base-midtone">
                We handle the full process: design, print-ready files, and coordination with a
                trusted local wrap shop (Sigma Grafix) for printing and installation. If you already
                have an installer, we can also provide design + print-ready files only for a reduced
                cost.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                How much does a wrap cost?
              </summary>
              <p className="mt-2 text-base-midtone">
                Pricing depends on vehicle size and coverage. Food Trucks and Fleet Vehicles
                typically start at $14/square foot. Food Trailers typically start at $12/square
                foot. Once we know your vehicle type, rough measurements, and coverage (partial vs
                full wrap), we&apos;ll send a clear quote before we start.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                How long does the wrap process take?
              </summary>
              <p className="mt-2 text-base-midtone">
                A typical project takes about 14 business days from the time you pay the deposit and
                we lock in content (logo, menu, photos, copy). That includes design, revisions, and
                preparing files for print. Install scheduling depends on the wrap shop&apos;s
                calendar, but I&apos;ll coordinate that with you.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                What do you need from me to get started on a wrap?
              </summary>
              <ul className="mt-2 text-base-midtone list-disc list-inside space-y-1">
                <li>Photos and measurements of the vehicle</li>
                <li>Your Logo (if you have one)</li>
                <li>Any brand colors, fonts, and details as to desired outcome.</li>
              </ul>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                What if I already have a design?
              </summary>
              <p className="mt-2 text-base-midtone">
                We can help format your existing design to meet print specs, adjust sizing, and make
                sure everything will print cleanly at full scale. If needed, we can also refine or
                update your design.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                Is there a warranty on the wrap?
              </summary>
              <p className="mt-2 text-base-midtone">
                Yes. Wraps printed and installed through our partner Sigma Grafix include a 3‑year
                warranty on the material and installation. We&apos;ll walk you through care tips to
                help your wrap last as long as possible.
              </p>
            </details>
          </div>

          <h3 className="text-xl font-bold text-base mt-12 mb-8">
            Signs, Banners, Flags, and Event Tents FAQs
          </h3>
          <div className="space-y-4">
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                What kinds of signs and banners do you offer?
              </summary>
              <p className="mt-2 text-base-midtone">
                Vinyl banners (indoor/outdoor), yard signs and rigid signs, feather flags and pole
                flags, event tents and booth setups, and much more. These are great for storefronts,
                markets, pop‑ups, and events.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                Do you print in-house?
              </summary>
              <p className="mt-2 text-base-midtone">
                We don&apos;t print in-house. We work with wholesale print partners to produce
                high‑quality products at good prices, then pass that value on to you. We handle the
                design, print setup, and ordering so you don&apos;t have to deal with specs or
                vendors.
              </p>
            </details>
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                How much do flags, banners, and tents cost?
              </summary>
              <p className="mt-2 text-base-midtone">
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
            <details className="group border-b border-base-midtone pb-4">
              <summary className="cursor-pointer font-medium text-base list-none [&::-webkit-details-marker]:hidden">
                How long do signs and banners take?
              </summary>
              <p className="mt-2 text-base-midtone">
                Most sign and banner projects take about 10-14 business days from design approval to
                delivery, depending on shipping. If you&apos;re on a tight timeline, tell us your
                deadline and we&apos;ll let you know what&apos;s realistic.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
