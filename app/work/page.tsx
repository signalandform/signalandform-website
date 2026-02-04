import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | Signal & Form",
  description: "Project showcase: vehicle wraps, signage, ads, and product mockups from Signal & Form.",
};

const adImages = [
  "IMG_0293.PNG",
  "IMG_0294.PNG",
  "IMG_0295.PNG",
  "IMG_0296.PNG",
  "IMG_0297.PNG",
  "IMG_0298.PNG",
  "IMG_0300.PNG",
  "IMG_0301.PNG",
  "IMG_0303.PNG",
  "ad 02 Artboard 2.png",
];

const productCategories = [
  {
    name: "Notebooks",
    images: [
      "spiral-notebook-dotted-back-6923142b6d0c9.jpg",
      "spiral-notebook-dotted-front-6923142b6cb41.jpg",
      "spiral-notebook-dotted-front-6923142b6ddef.jpg",
      "spiral-notebook-dotted-product-detail-2-6923142b6d97f.jpg",
      "spiral-notebook-dotted-product-detail-6923142b6d523.jpg",
    ],
  },
  {
    name: "Hats",
    images: [
      "classic-dad-hat-black-back-6923149b3ee13.png",
      "classic-dad-hat-black-front-6923149b3e77e.png",
      "classic-dad-hat-black-left-front-6923149b40422.png",
      "classic-dad-hat-black-left-side-6923149b3f9f9.png",
      "classic-dad-hat-black-right-front-6923149b3ff05.png",
      "classic-dad-hat-black-right-side-6923149b3f44d.png",
    ],
  },
  {
    name: "Tees",
    images: [
      "unisex-sports-tee-black-back-6923151c4bec5.png",
      "unisex-sports-tee-black-front-6923151c4b713.png",
      "unisex-sports-tee-black-left-6923151c4c4e3.png",
      "unisex-sports-tee-black-right-6923151c4cad1.png",
    ],
  },
  {
    name: "Polos",
    images: [
      "premium-polo-shirt-black-back-6923157c14b1c.png",
      "premium-polo-shirt-black-front-6923157c1332d.png",
      "premium-polo-shirt-black-front-6923157c13a81.png",
      "premium-polo-shirt-black-front-6923157c145a7.png",
      "premium-polo-shirt-black-left-6923157c15085.png",
      "premium-polo-shirt-black-right-6923157c155f3.png",
      "premium-polo-shirt-black-zoomed-in-6923157c14036.png",
    ],
  },
  {
    name: "Aprons",
    images: [
      "embroidered-apron-black-front-692315c8e9a02.png",
      "embroidered-apron-black-front-692315c8ea114.png",
      "embroidered-apron-black-zoomed-in-692315c8ea636.png",
    ],
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 bg-warm-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-base mb-6">
            Work
          </h1>
          <p className="text-contrast-midtone text-lg max-w-2xl mx-auto">
            A selection of design work, ads, and product mockups from Signal & Form.
          </p>
        </div>
      </section>

      {/* Ads grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl font-medium text-base mb-12">
            Ads & Campaigns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {adImages.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/5] border border-warm-border bg-warm-bg-alt overflow-hidden"
              >
                <Image
                  src={`/brand/work/${src}`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product mockups by category */}
      {productCategories.map((cat) => (
        <section
          key={cat.name}
          className="py-24 px-4 bg-warm-bg even:bg-warm-bg-alt"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-2xl font-medium text-base mb-12">
              {cat.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {cat.images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square border border-warm-border bg-white overflow-hidden"
                >
                  <Image
                    src={`/brand/work/${src}`}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
