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
      <section className="py-16 px-4 bg-base relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-contrast mb-6">
            Transform Your Brand with Stunning Signs, Banners, and Wraps Today!
          </h2>
          <div className="space-y-3 text-contrast-midtone mb-8">
            <p className="flex items-center gap-2">
              <strong className="text-accent-2">✓</strong> Stand out from the competition with
              eye-catching graphics.
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-accent-2">✓</strong> Elevate your business visibility with
              custom designs.
            </p>
            <p className="flex items-center gap-2">
              <strong className="text-accent-2">✓</strong> Full print catalog and Customer Support
              available 12 hours/day 7 days/week
            </p>
          </div>
          <a
            href="https://signalandformllc.bs.run"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-accent-2 text-accent-2 rounded-full font-medium hover:bg-accent-2 hover:text-base transition-colors"
          >
            Full catalog
          </a>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-[#f3f4f6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-base text-center mb-12">
            What we do
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-tl-[20px] shadow-sm">
              <p className="text-accent-3 text-xl font-light tracking-wider mb-2">01</p>
              <h3 className="text-lg font-medium text-base mb-3">Design</h3>
              <p className="text-base-midtone">
                Whether it is helping bring a new brand to life, giving an existing brand a fresh
                look, or optimizing a wonderful one, we can do it all.
              </p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <p className="text-accent-3 text-xl font-light tracking-wider mb-2">02</p>
              <h3 className="text-lg font-medium text-base mb-3">Print</h3>
              <p className="text-base-midtone">
                We can print anything that we design on our entire print catalog, as well as help
                optimize and import your design, making ordering a banner a breeze.
              </p>
            </div>
            <div className="bg-white p-6 rounded-tr-[20px] shadow-sm">
              <p className="text-accent-3 text-xl font-light tracking-wider mb-2">03</p>
              <h3 className="text-lg font-medium text-base mb-3">Wrap</h3>
              <p className="text-base-midtone">
                We partner with{" "}
                <a
                  href="https://sigmawraps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-2 hover:underline"
                >
                  Sigma Grafix
                </a>
                , the best vehicle wrappers in DFW to bring your vision to 4 (or more) wheels. To
                date our work has been with food trucks and trailers, but we would love to help wrap
                anything they can.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Print Catalog CTA */}
      <section className="py-16 px-4 bg-base">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-contrast mb-8">Print Catalog</h2>
          <a
            href="https://signalandformllc.bs.run"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border-2 border-accent-2 text-accent-2 rounded-full font-medium hover:bg-accent-2 hover:text-base transition-colors"
          >
            Full catalog
          </a>
        </div>
      </section>
    </div>
  );
}
