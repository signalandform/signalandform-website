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
    image: getImageUrl("https://signalandformllc.com/wp-content/uploads/2025/11/SD-Retractable.webp"),
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
      <section className="py-24 px-4 bg-base">
        <div className="max-w-6xl mx-auto">
          <p className="text-contrast-midtone mb-4">
            Our custom graphic design and printing services ensure your brand stands out.
          </p>
          <h1 className="font-serif text-4xl font-medium text-contrast mb-12">Full Product List</h1>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {productSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 bg-accent-2 text-base rounded-full text-sm font-medium hover:bg-accent-1 transition-colors"
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* CTA card */}
          <div className="bg-warm-bg border border-warm-border p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <div>
              <p className="font-semibold text-base">Ready to roll?</p>
              <p className="text-base-midtone">Head over to the contact page, and get a quote within 24 hours.</p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-accent-3 text-accent-3 rounded-full font-medium hover:bg-accent-3 hover:text-contrast transition-colors shrink-0"
            >
              contact us
            </Link>
          </div>

          {/* Featured products */}
          <div className="space-y-16">
            <h2
              id="retractablebannerstands"
              className="text-2xl font-semibold text-contrast border-b border-contrast-midtone pb-4"
            >
              Retractable Banner Stands
            </h2>

            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="flex flex-col md:flex-row gap-8 items-start border-b border-contrast-midtone pb-12"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-contrast mb-2">{product.name}</h3>
                  <p className="text-contrast-midtone mb-4">{product.description}</p>
                  <p className="text-accent-3 font-medium">{product.price}</p>
                </div>
                <div className="w-64 h-64 shrink-0 relative rounded overflow-hidden bg-base-midtone">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-contrast-midtone">
            For the complete product catalog with sizing, options, and individual pricing, please{" "}
            <Link href="/contact" className="text-accent-2 hover:underline">
              contact us
            </Link>{" "}
            for a detailed quote.
          </p>
        </div>
      </section>
    </div>
  );
}
