import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-base border-t border-base-midtone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Link href="/" className="inline-block group">
              <Image
                src="/brand/logos/IMG_0122.PNG"
                alt="Signal & Form LLC"
                width={160}
                height={44}
                className="h-12 w-auto brightness-0 invert opacity-100 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="mt-4 text-contrast-midtone leading-relaxed max-w-sm">
              A Grapevine-based studio specializing in food truck wraps, custom signage, banners,
              and flags for small businesses in DFW.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-contrast-midtone text-sm">Grapevine, Texas</p>
              <a
                href="mailto:jack@signalandformllc.com"
                className="text-accent-2 font-medium hover:text-accent-1 transition-colors inline-block"
              >
                jack@signalandformllc.com
              </a>
              <br />
              <a
                href="tel:2144448889"
                className="text-accent-2 font-medium hover:text-accent-1 transition-colors inline-block"
              >
                214 444 8889
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-contrast mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-contrast-midtone hover:text-accent-2 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-base-midtone flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-contrast-midtone text-sm">
            &copy; {new Date().getFullYear()} Signal &amp; Form LLC. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-accent-2 font-medium hover:text-accent-1 transition-colors text-sm"
          >
            Get a quote
          </Link>
        </div>
      </div>
    </footer>
  );
}
