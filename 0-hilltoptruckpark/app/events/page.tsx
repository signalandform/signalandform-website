import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Hilltop Truck Park",
  description: "Upcoming events, farmers markets, and special occasions at Hilltop Truck Park in Justin, TX.",
};

export default function EventsPage() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-content mx-auto">
        <h1 className="font-display text-htp-h1 md:text-5xl text-htp-navy uppercase tracking-[0.04em] mb-8">
          This Week on the Hill
        </h1>
        <p className="text-lg text-htp-ink leading-[1.55] mb-10 max-w-2xl">
          Hilltop Truck Park hosts farmers markets, live music, themed nights, crawfish boils, foam
          parties, and more throughout the year.
        </p>

        <div className="bg-htp-cream border border-htp-line rounded-card shadow-sm p-8 mb-12">
          <h2 className="font-display text-htp-h3 text-htp-navy uppercase tracking-[0.04em] mb-4">
            Event Calendar (Coming Soon)
          </h2>
          <p className="mb-4 text-htp-ink leading-[1.55]">
            Our full event calendar and registration links will be available here soon.
          </p>
          <p className="text-htp-ink leading-[1.55]">
            For now, follow us on social media or contact{" "}
            <a href="mailto:info@hilltoptruckpark.com" className="text-htp-red hover:underline font-medium">
              info@hilltoptruckpark.com
            </a>{" "}
            for the latest event information.
          </p>
        </div>

        <div className="border-t border-htp-line pt-8">
          <h2 className="font-display text-htp-h3 text-htp-navy uppercase tracking-[0.04em] mb-6">
            Regular Offerings
          </h2>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-htp-navy text-htp-bg rounded-full text-xs font-medium tracking-wider uppercase">
              FOOD
            </span>
            <span className="px-3 py-1 bg-htp-navy text-htp-bg rounded-full text-xs font-medium tracking-wider uppercase">
              DRINKS
            </span>
            <span className="px-3 py-1 bg-htp-red text-htp-bg rounded-full text-xs font-medium tracking-wider uppercase">
              LIVE MUSIC
            </span>
            <span className="px-3 py-1 bg-htp-red text-htp-bg rounded-full text-xs font-medium tracking-wider uppercase">
              KIDS
            </span>
            <span className="px-3 py-1 bg-htp-navy text-htp-bg rounded-full text-xs font-medium tracking-wider uppercase">
              VENDOR
            </span>
          </div>
          <ul className="space-y-2 text-htp-ink leading-[1.55]">
            <li>• Farmers markets (seasonal)</li>
            <li>• Twilight markets</li>
            <li>• Live music</li>
            <li>• Crawfish pre-orders — see <Link href="/crawfish-pre-orders" className="text-htp-red hover:underline font-medium">Crawfish Pre-Orders</Link></li>
            <li>• Foam parties (summer)</li>
            <li>• Themed events (Vegas Night, Galentine&apos;s, Halloween, etc.)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
