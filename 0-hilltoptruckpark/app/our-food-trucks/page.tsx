import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Food Trucks | Hilltop Truck Park",
  description: "Discover the rotating lineup of food trucks at Hilltop Truck Park in Justin, TX.",
};

export default function OurFoodTrucksPage() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-content mx-auto">
        <h1 className="font-display text-htp-h1 md:text-5xl text-htp-navy uppercase tracking-[0.04em] mb-8">
          Our Food Trucks
        </h1>
        <div className="space-y-6 text-htp-ink leading-[1.55] mb-12">
          <p className="text-lg max-w-2xl">
            Hilltop Truck Park features a rotating lineup of local food trucks, bringing variety and
            great eats to Justin, TX every week.
          </p>
          <p>
            Our schedule changes regularly, so check our{" "}
            <Link href="/events" className="text-htp-red hover:underline font-medium">
              Events
            </Link>{" "}
            page for the latest lineup, farmers markets, and special events.
          </p>
        </div>

        <div className="bg-htp-cream border border-htp-line rounded-card shadow-sm p-8">
          <h2 className="font-display text-htp-h3 text-htp-navy uppercase tracking-[0.04em] mb-4">
            Interested in Joining Us?
          </h2>
          <p className="text-htp-ink leading-[1.55]">
            Food truck owners: if you&apos;d like to schedule with Hilltop Truck Park, please
            fill out our{" "}
            <Link href="/vendor-requests" className="text-htp-red hover:underline font-medium">
              Vendor Request
            </Link>{" "}
            form or email{" "}
            <a href="mailto:info@hilltoptruckpark.com" className="text-htp-red hover:underline font-medium">
              info@hilltoptruckpark.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
