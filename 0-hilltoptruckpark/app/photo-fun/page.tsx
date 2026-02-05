import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/imageMap";

export const metadata: Metadata = {
  title: "Photo Fun! | Hilltop Truck Park",
  description: "Foam parties, photo ops, and family fun at Hilltop Truck Park in Justin, TX.",
};

export default function PhotoFunPage() {
  const img1 = getImageUrl(
    "https://static.wixstatic.com/media/51d5cc_dfd6534550a14e14af0cc44b5a2c7825~mv2.png"
  );

  return (
    <section className="py-24 px-4">
      <div className="max-w-content mx-auto">
        <h1 className="font-display text-htp-h1 md:text-5xl text-htp-navy uppercase tracking-[0.04em] mb-8">
          Photo Fun!
        </h1>
        <div className="space-y-8 text-htp-ink leading-[1.55] mb-12">
          <p className="text-lg max-w-2xl">
            Hilltop Truck Park is the perfect spot for family photos, group shots, and making
            memories. Enjoy our outdoor setup, colorful murals, and seasonal activities.
          </p>
          <div className="bg-htp-cream border border-htp-line rounded-card shadow-sm p-8">
            <h2 className="font-display text-htp-h3 text-htp-navy uppercase tracking-[0.04em] mb-2">
              Foam Parties
            </h2>
            <p>
              Foam parties are held weekly during the summer! Check our{" "}
              <Link href="/events" className="text-htp-red hover:underline font-medium">
                Events
              </Link>{" "}
              calendar for dates and times.
            </p>
          </div>
          <p>
            Bring the family, grab some food from our trucks, and capture the fun at Hilltop Truck
            Park.
          </p>
        </div>
        <div>
          <div className="relative w-full aspect-[4/3] rounded-card overflow-hidden">
            <Image
              src={img1}
              alt="Hilltop Truck Park"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
