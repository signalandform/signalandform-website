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
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Photo Fun!</h1>
        <div className="space-y-8 text-contrast-midtone">
          <p>
            Hilltop Truck Park is the perfect spot for family photos, group shots, and making
            memories. Enjoy our outdoor setup, colorful murals, and seasonal activities.
          </p>
          <div className="border-l-4 border-accent-1 pl-4">
            <h2 className="text-xl font-medium text-contrast mb-2">Foam Parties</h2>
            <p>
              Foam parties are held weekly during the summer! Check our{" "}
<Link href="/events" className="text-accent-2 hover:underline">
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
        <div className="mt-12">
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={img1}
              alt="Hilltop Truck Park"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
