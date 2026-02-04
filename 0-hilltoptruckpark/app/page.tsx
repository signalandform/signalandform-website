import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/imageMap";

export default function HomePage() {
  const heroImg = getImageUrl(
    "https://static.wixstatic.com/media/51d5cc_dfd6534550a14e14af0cc44b5a2c7825~mv2.png"
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[400px] flex items-center justify-center bg-gradient-to-b from-base to-base-midtone px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-contrast mb-6">
            Hilltop Truck Park
          </h1>
          <p className="text-lg md:text-xl text-contrast-midtone mb-8">
            Your local food truck court for great eats, events, and family fun in Justin, TX.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/events"
              className="px-6 py-3 border-2 border-accent-2 text-accent-2 rounded-full font-medium hover:bg-accent-2 hover:text-base transition-colors"
            >
              Upcoming Events
            </Link>
            <Link
              href="/our-food-trucks"
              className="px-6 py-3 border-2 border-accent-2 text-accent-2 rounded-full font-medium hover:bg-accent-2 hover:text-base transition-colors"
            >
              Our Food Trucks
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 border-2 border-accent-2 text-accent-2 rounded-full font-medium hover:bg-accent-2 hover:text-base transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 px-4 bg-base-midtone">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-contrast mb-4">Visit Us</h2>
          <p className="text-lg text-contrast-midtone mb-2">8356 Thompson Road, Justin, TX 76247</p>
          <a
            href="mailto:info@hilltoptruckpark.com"
            className="text-accent-2 hover:underline text-lg"
          >
            info@hilltoptruckpark.com
          </a>
        </div>
      </section>

      {/* Food Truck CTA */}
      <section className="py-16 px-4 bg-base">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-contrast mb-4">
            Are you a Food Truck interested in scheduling with us?
          </h2>
          <Link
            href="/vendor-requests"
            className="inline-block px-6 py-3 bg-accent-1 text-contrast rounded-full font-medium hover:bg-accent-2 transition-colors"
          >
            Click Here
          </Link>
        </div>
      </section>

      {/* Image section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={heroImg}
              alt="Hilltop Truck Park"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
