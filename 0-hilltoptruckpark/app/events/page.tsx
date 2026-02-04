import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Hilltop Truck Park",
  description: "Upcoming events, farmers markets, and special occasions at Hilltop Truck Park in Justin, TX.",
};

export default function EventsPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Events</h1>
        <div className="space-y-8 text-contrast-midtone">
          <p>
            Hilltop Truck Park hosts farmers markets, live music, themed nights, crawfish boils, foam
            parties, and more throughout the year.
          </p>
          <div className="bg-base-midtone rounded-lg p-8">
            <h2 className="text-xl font-medium text-contrast mb-4">Event Calendar (Coming Soon)</h2>
            <p className="mb-4">
              Our full event calendar and registration links will be available here soon.
            </p>
            <p>
              For now, follow us on social media or contact{" "}
              <a href="mailto:info@hilltoptruckpark.com" className="text-accent-2 hover:underline">
                info@hilltoptruckpark.com
              </a>{" "}
              for the latest event information.
            </p>
          </div>
          <div className="border-t border-base-midtone pt-8">
            <h2 className="text-xl font-medium text-contrast mb-4">Regular Offerings</h2>
            <ul className="space-y-2">
              <li>• Farmers markets (seasonal)</li>
              <li>• Twilight markets</li>
              <li>• Live music</li>
              <li>• Crawfish pre-orders — see <Link href="/crawfish-pre-orders" className="text-accent-2 hover:underline">Crawfish Pre-Orders</Link></li>
              <li>• Foam parties (summer)</li>
              <li>• Themed events (Vegas Night, Galentine&apos;s, Halloween, etc.)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
