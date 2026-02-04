"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
  { href: "https://www.etsy.com/shop/SignalandFormLLC", label: "Shop", external: true },
  { href: "https://www.typestrip.com", label: "TypeStrip", external: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-semibold text-base hover:text-accent-3 transition-colors">
            Signal &amp; Form LLC
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-base"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav
            className={`${mobileMenuOpen ? "block" : "hidden"} md:flex absolute md:relative top-[73px] md:top-0 left-0 right-0 md:left-auto md:right-auto bg-white md:bg-transparent border-b md:border-b-0 border-gray-200 md:border-0 py-4 md:py-0 px-4 md:px-0 z-10`}
            aria-label="Main navigation"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base hover:text-accent-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-base hover:text-accent-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
