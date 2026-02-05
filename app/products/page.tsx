import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/imageMap";

export const metadata: Metadata = {
  title: "Products | Signal & Form",
  description:
    "Discover top-notch custom graphic design and printing services tailored to your needs at Signal & Form LLC. Retractable stands, flags, banners, tents, and more.",
};

const productSections = [
  { id: "retractablebannerstands", label: "Retractable banner stands" },
  { id: "backdrops", label: "Back drops" },
  { id: "aframesandposterstands", label: "A frames & Poster Stands" },
  { id: "flags", label: "Flags" },
  { id: "yardandrealestatesigns", label: "Yard & Real estate signs" },
  { id: "table-throws", label: "Table throws" },
  { id: "customeventtents", label: "Custom event tents" },
  { id: "banners", label: "Banners" },
  { id: "wallmuralsandart", label: "Wall Murals & Art" },
  { id: "adhesiveproducts", label: "Adhesive Products" },
  { id: "rigidsignsandmagnets", label: "Rigid signs & magnets" },
];

const featuredProducts = [
  {
    name: "SD Retractable",
    price: "starting at $169",
    description:
      "Top of the line model with wide base, adjustable support pole, and hard sided travel case. UV printed fabric with blockout backing.",
    image: getImageUrl(
      "https://signalandformllc.com/wp-content/uploads/2025/11/SD-Retractable.webp"
    ),
  },
  {
    name: "Deluxe Retractable",
    price: "starting at $149",
    description:
      "Sleek wide base design with chrome ends. Most popular stand with adjustable telescopic support pole and complimentary carry bag.",
    image: getImageUrl(
      "https://signalandformllc.com/wp-content/uploads/2025/11/Deluxe-Retractable.jpg"
    ),
  },
  {
    name: "Standard Retractable",
    price: "starting at $99",
    description:
      "Lightweight and economical. Compact aluminum hardware with folding feet. UV printed fabric or 13oz matte vinyl.",
    image: getImageUrl(
      "https://signalandformllc.com/wp-content/uploads/2025/11/Standard-Retractable.webp"
    ),
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-28 px-4 bg-base">
        <div className="max-w-6xl mx-auto">
          <p className="text-contrast-midtone mb-4 scroll-reveal">
            Our custom graphic design and printing services ensure your brand stands out.
          </p>
          <h1 className="font-display font-semibold text-display-lg text-contrast mb-12 scroll-reveal">
            Full Product List
          </h1>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 scroll-reveal">
            {productSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-5 py-2.5 bg-base-midtone border border-base-midtone text-contrast-midtone rounded-full text-sm font-medium hover:bg-accent-3 hover:border-accent-3 hover:text-contrast transition-all duration-300"
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* CTA card */}
          <div className="rounded-xl border border-base-midtone bg-base-midtone/50 p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-20 transition-all duration-300 hover:border-accent-3/50 scroll-reveal">
            <div>
              <p className="font-display font-semibold text-contrast mb-2">
                Ready to roll?
              </p>
              <p className="text-contrast-midtone">
                Head over to the contact page, and get a quote within 24 hours.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent-1 text-base font-medium rounded-full hover:bg-accent-2 transition-all duration-300 hover:scale-105 shrink-0"
            >
              Contact us
            </Link>
          </div>

          {/* Featured products - card layout */}
          <div className="space-y-16">
            <h2
              id="retractablebannerstands"
              className="font-display font-semibold text-display-md text-contrast scroll-reveal"
            >
              Retractable Banner Stands
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div
                  key={product.name}
                  className="group rounded-xl border border-base-midtone bg-base-midtone/30 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent-3/50 hover:shadow-xl hover:shadow-accent-3/10 scroll-reveal"
                >
                  <div className="aspect-square relative overflow-hidden bg-base-midtone">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-contrast mb-2">
                      {product.name}
                    </h3>
                    <p className="text-contrast-midtone mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-accent-2 font-semibold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-16 text-contrast-midtone scroll-reveal">
            For the complete product catalog with sizing, options, and individual pricing,
            please{" "}
            <Link href="/contact" className="text-accent-2 font-medium hover:text-accent-1 transition-colors">
              contact us
            </Link>{" "}
            for a detailed quote.
          </p>
        </div>
      </section>
    </div>
  );
}
