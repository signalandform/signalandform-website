import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/our-food-trucks", label: "Our Food Trucks" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/online-store", label: "Online Store" },
  { href: "/crawfish-pre-orders", label: "Crawfish Pre-orders" },
  { href: "/photo-fun", label: "Photo Fun" },
  { href: "/vendor-requests", label: "Vendor Requests" },
  { href: "/contact-us", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-base border-t border-base-midtone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="text-lg font-semibold text-contrast hover:text-accent-2">
              Hilltop Truck Park
            </Link>
            <p className="mt-2 text-contrast-midtone text-sm">
              8356 Thompson Road, Justin, TX 76247
              <br />
              <a href="mailto:info@hilltoptruckpark.com" className="text-accent-2 hover:underline">
                info@hilltoptruckpark.com
              </a>
            </p>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-contrast-midtone hover:text-accent-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
