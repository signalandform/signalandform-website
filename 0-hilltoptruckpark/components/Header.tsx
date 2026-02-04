"use client";

import Link from "next/link";
import { useState } from "react";

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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-base border-b border-base-midtone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-xl font-semibold text-contrast hover:text-accent-2 transition-colors"
          >
            Hilltop Truck Park
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-contrast"
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
            className={`${mobileMenuOpen ? "block" : "hidden"} md:flex absolute md:relative top-[73px] md:top-0 left-0 right-0 md:left-auto md:right-auto bg-base md:bg-transparent border-b md:border-b-0 border-base-midtone md:border-0 py-4 md:py-0 px-4 md:px-0 z-10 max-h-[70vh] md:max-h-none overflow-y-auto md:overflow-visible`}
            aria-label="Main navigation"
          >
            <div className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-4 md:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-contrast-midtone hover:text-accent-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
