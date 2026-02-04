import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Food Trucks | Hilltop Truck Park",
  description: "Discover the rotating lineup of food trucks at Hilltop Truck Park in Justin, TX.",
};

export default function OurFoodTrucksPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Our Food Trucks</h1>
        <div className="space-y-6 text-contrast-midtone">
          <p>
            Hilltop Truck Park features a rotating lineup of local food trucks, bringing variety and
            great eats to Justin, TX every week.
          </p>
          <p>
            Our schedule changes regularly, so check our{" "}
            <Link href="/events" className="text-accent-2 hover:underline">
              Events
            </Link>{" "}
            page for the latest lineup, farmers markets, and special events.
          </p>
          <div className="border-t border-base-midtone pt-8 mt-8">
            <h2 className="text-xl font-medium text-contrast mb-4">Interested in Joining Us?</h2>
            <p>
              Food truck owners: if you&apos;d like to schedule with Hilltop Truck Park, please
              fill out our{" "}
              <Link href="/vendor-requests" className="text-accent-2 hover:underline">
                Vendor Request
              </Link>{" "}
              form or email{" "}
              <a href="mailto:info@hilltoptruckpark.com" className="text-accent-2 hover:underline">
                info@hilltoptruckpark.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
