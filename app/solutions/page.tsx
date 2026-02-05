import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Signal & Form",
  description:
    "Transform your brand with stunning signs, banners, and wraps. Design, print, and wrap solutions for small businesses in DFW.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero CTA */}
      <section className="relative py-28 px-4 bg-base overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, var(--accent-2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 scroll-reveal">
          <h2 className="font-display font-semibold text-display-lg text-contrast mb-6">
            Transform Your Brand with Stunning Signs, Banners, and Wraps Today!
          </h2>
          <div className="space-y-4 text-contrast-midtone mb-10">
            <p className="flex items-center gap-3">
              <span className="text-accent-2 font-bold">✓</span>
              Stand out from the competition with eye-catching graphics.
            </p>
            <p className="flex items-center gap-3">
              <span className="text-accent-2 font-bold">✓</span>
              Elevate your business visibility with custom designs.
            </p>
            <p className="flex items-center gap-3">
              <span className="text-accent-2 font-bold">✓</span>
              Full print catalog and Customer Support available 12 hours/day 7 days/week
            </p>
          </div>
          <a
            href="https://signalandformllc.bs.run"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105"
          >
            Full catalog
          </a>
        </div>
      </section>

      {/* What we do */}
      <section
        className="py-28 px-4"
        style={{ background: "var(--warm-gradient)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-semibold text-display-md text-base text-center mb-16 scroll-reveal">
            What we do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-xl bg-warm-bg p-8 border border-warm-border transition-all duration-300 hover:shadow-lg hover:border-accent-3/30 scroll-reveal">
              <p className="text-accent-3 text-2xl font-light tracking-wider mb-4">01</p>
              <h3 className="text-xl font-medium text-base mb-3">Design</h3>
              <p className="text-base-midtone leading-relaxed">
                Whether it is helping bring a new brand to life, giving an existing brand a fresh
                look, or optimizing a wonderful one, we can do it all.
              </p>
            </div>
            <div className="group rounded-xl bg-warm-bg p-8 border border-warm-border transition-all duration-300 hover:shadow-lg hover:border-accent-3/30 scroll-reveal">
              <p className="text-accent-3 text-2xl font-light tracking-wider mb-4">02</p>
              <h3 className="text-xl font-medium text-base mb-3">Print</h3>
              <p className="text-base-midtone leading-relaxed">
                We can print anything that we design on our entire print catalog, as well as help
                optimize and import your design, making ordering a banner a breeze.
              </p>
            </div>
            <div className="group rounded-xl bg-warm-bg p-8 border border-warm-border transition-all duration-300 hover:shadow-lg hover:border-accent-3/30 scroll-reveal">
              <p className="text-accent-3 text-2xl font-light tracking-wider mb-4">03</p>
              <h3 className="text-xl font-medium text-base mb-3">Wrap</h3>
              <p className="text-base-midtone leading-relaxed">
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

      {/* Print Catalog CTA */}
      <section className="py-20 px-4 bg-base">
        <div className="max-w-6xl mx-auto text-center scroll-reveal">
          <h2 className="font-display font-semibold text-display-md text-contrast mb-8">
            Print Catalog
          </h2>
          <a
            href="https://signalandformllc.bs.run"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105"
          >
            Full catalog
          </a>
        </div>
      </section>
    </div>
  );
}
