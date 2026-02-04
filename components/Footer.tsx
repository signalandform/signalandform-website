import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
  { href: "https://www.etsy.com/shop/SignalandFormLLC", label: "Shop", external: true },
  { href: "https://www.typestrip.com", label: "TypeStrip", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-base border-t border-base-midtone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logos/IMG_0088.PNG"
                alt="Signal & Form LLC"
                width={140}
                height={40}
                className="h-10 w-auto opacity-90 hover:opacity-100"
              />
            </Link>
            <p className="mt-2 text-contrast-midtone text-sm">
              Grapevine, Texas
              <br />
              <a href="mailto:jack@signalandformllc.com" className="text-accent-2 hover:underline">
                jack@signalandformllc.com
              </a>
            </p>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-contrast-midtone hover:text-accent-2 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-contrast-midtone hover:text-accent-2 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </footer>
  );
}
