import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Signal & Form",
  description:
    "TypeStrip and CountrTop — product brands from Signal & Form. Privacy-first text capture and a restaurant operations platform.",
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
            {/* TypeStrip - intro card */}
            <div className="group rounded-xl border border-base-midtone bg-base-midtone/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
              <h2 className="font-display font-semibold text-2xl text-contrast mb-4">
                TypeStrip
              </h2>
              <p className="text-contrast-midtone leading-relaxed mb-6">
                A privacy-first text capture tool that turns the real world into usable data—instantly,
                and entirely on-device.
              </p>
              <a
                href="https://typestrip.com"
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

            {/* CountrTop - intro card */}
            <div className="group rounded-xl border border-base-midtone bg-base-midtone/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal">
              <h2 className="font-display font-semibold text-2xl text-contrast mb-4">
                CountrTop
              </h2>
              <p className="text-contrast-midtone leading-relaxed mb-6">
                One platform to run your restaurant—front to back. A modern operations platform for
                growing restaurants.
              </p>
              <a
                href="https://countrtop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-2 font-medium hover:text-accent-1 transition-colors"
              >
                Visit CountrTop
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* TypeStrip - full section */}
          <div className="mt-24 scroll-reveal">
            <h2 className="font-display font-semibold text-display-md text-contrast mb-6">
              TypeStrip
            </h2>
            <p className="text-contrast-midtone leading-relaxed mb-6 max-w-3xl">
              TypeStrip is a privacy-first text capture tool that turns the real world into usable
              data—instantly, and entirely on-device.
            </p>
            <p className="text-contrast-midtone leading-relaxed mb-6 max-w-3xl">
              Built for moments when typing isn&apos;t practical, TypeStrip lets users point their camera
              at anything with text—receipts, labels, signs, documents—and extract clean, selectable text
              in seconds. No cloud processing. No data harvesting. No friction.
            </p>
            <p className="text-contrast-midtone leading-relaxed mb-6 max-w-3xl">
              Unlike traditional scanner apps, TypeStrip is designed around trust and speed. All text
              recognition runs locally using Apple&apos;s on-device Vision OCR, meaning images never leave
              the device unless the user explicitly chooses to save or sync them. This makes TypeStrip
              ideal for sensitive information, quick lookups, and everyday capture without surveillance.
            </p>
            <p className="text-contrast-midtone leading-relaxed mb-6 max-w-3xl">
              The interface is intentionally minimal: a fluid, camera-first experience with a soft
              &quot;liquid glass&quot; aesthetic that keeps the focus on what matters—the text itself.
              There&apos;s no forced account creation, no dark patterns, and no bloated feature set. Just
              fast extraction, smart detection, and user-controlled history.
            </p>
            <p className="text-contrast-midtone leading-relaxed mb-8 max-w-3xl">
              TypeStrip is free to use with daily scan limits, with optional accounts for cross-device
              sync and future advanced parsing features. It&apos;s a foundation for a larger vision: tools
              that respect users by default, and make powerful technology feel calm, invisible, and humane.
            </p>

            <h3 className="font-display font-semibold text-xl text-contrast mb-4">
              Core principles
            </h3>
            <ul className="space-y-2 text-contrast-midtone mb-8 max-w-3xl">
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Privacy-first by design (on-device OCR, no automatic image storage)
              </li>
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Instant text extraction from the camera
              </li>
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Lightweight, focused UX
              </li>
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Optional accounts and syncing—never required
              </li>
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Built to scale into smarter parsing without sacrificing trust
              </li>
            </ul>

            <p className="text-contrast-midtone leading-relaxed max-w-3xl mb-12 italic">
              TypeStrip is not about scanning more—it&apos;s about thinking less while capturing what matters.
            </p>

            <a
              href="https://typestrip.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300"
            >
              Visit TypeStrip
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* CountrTop - full section */}
          <div className="mt-24 scroll-reveal">
            <h2 className="font-display font-semibold text-display-md text-contrast mb-6">
              CountrTop
            </h2>
            <p className="text-xl text-accent-2 font-medium mb-6">
              One platform to run your restaurant—front to back.
            </p>
            <p className="text-contrast-midtone leading-relaxed mb-8 max-w-3xl">
              CountrTop is a modern restaurant operations platform designed to replace clunky systems,
              scattered tools, and manual work. From order flow to kitchen execution to back-of-house
              oversight, CountrTop keeps everything connected in real time—so your team can move
              faster and make fewer mistakes.
            </p>
            <p className="text-contrast-midtone leading-relaxed mb-12 max-w-3xl">
              Built for growing restaurants, CountrTop gives operators full visibility and control
              without slowing down the people on the floor.
            </p>

            <h3 className="font-display font-semibold text-xl text-contrast mb-4">
              How CountrTop Works
            </h3>
            <p className="text-contrast-midtone leading-relaxed mb-6 max-w-3xl">
              CountrTop connects every part of your operation into a single, reliable system:
            </p>
            <ul className="space-y-2 text-contrast-midtone mb-12 max-w-3xl">
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Orders flow cleanly from point of sale to the kitchen
              </li>
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Kitchen teams stay focused with clear, real-time ticket management
              </li>
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Managers get oversight through powerful admin and ops tools
              </li>
              <li className="flex gap-3">
                <span className="text-accent-2">•</span>
                Data stays consistent across locations, devices, and services
              </li>
            </ul>
            <p className="text-contrast-midtone leading-relaxed mb-16 max-w-3xl italic">
              No duct-taped integrations. No guessing what&apos;s happening in the kitchen. Everyone sees the same truth.
            </p>

            <h3 className="font-display font-semibold text-xl text-contrast mb-8">
              Products
            </h3>
            <div className="space-y-10 mb-16">
              <div className="border-l-2 border-accent-3 pl-6">
                <h4 className="font-medium text-contrast mb-2">Kitchen Display System (KDS)</h4>
                <p className="text-contrast-midtone leading-relaxed mb-4">
                  Replace paper tickets and chaos with a fast, reliable kitchen display. CountrTop KDS
                  shows orders exactly how your kitchen needs them—organized, timed, and easy to act on.
                  Tickets update instantly, reduce missed items, and help your team move in sync during rushes.
                </p>
                <ul className="text-contrast-midtone text-sm space-y-1">
                  <li>• Real-time order updates</li>
                  <li>• Clear ticket prioritization</li>
                  <li>• Built for speed, not clutter</li>
                  <li>• Designed to scale from one kitchen to many</li>
                </ul>
              </div>
              <div className="border-l-2 border-accent-3 pl-6">
                <h4 className="font-medium text-contrast mb-2">Operations Dashboard</h4>
                <p className="text-contrast-midtone leading-relaxed mb-4">
                  Know what&apos;s happening—without being on the line. The CountrTop Ops Dashboard gives
                  owners and operators a real-time view into performance across locations. Track order
                  flow, identify bottlenecks, and spot issues before they become problems.
                </p>
                <ul className="text-contrast-midtone text-sm space-y-1">
                  <li>• Live operational visibility</li>
                  <li>• Multi-location support</li>
                  <li>• Simple, actionable insights</li>
                  <li>• Built for decision-makers, not analysts</li>
                </ul>
              </div>
              <div className="border-l-2 border-accent-3 pl-6">
                <h4 className="font-medium text-contrast mb-2">Admin &amp; Configuration</h4>
                <p className="text-contrast-midtone leading-relaxed mb-4">
                  Powerful control, without the complexity. CountrTop&apos;s admin tools make it easy to
                  manage menus, workflows, devices, and permissions—without touching a terminal or
                  calling support.
                </p>
                <ul className="text-contrast-midtone text-sm space-y-1">
                  <li>• Centralized configuration</li>
                  <li>• Role-based access</li>
                  <li>• Fast updates across locations</li>
                  <li>• Designed for real restaurant workflows</li>
                </ul>
              </div>
            </div>

            <p className="text-contrast-midtone leading-relaxed max-w-3xl mb-12">
              CountrTop isn&apos;t a generic POS add-on or a patched-together software stack. It&apos;s
              purpose-built for modern restaurants that need speed, clarity, and reliability—whether
              you&apos;re running one location or scaling to many.
            </p>

            <a
              href="https://countrtop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300"
            >
              Visit CountrTop
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <p className="mt-20 text-contrast-midtone scroll-reveal">
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
