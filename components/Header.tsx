"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const linkClass =
    "text-sm font-medium text-contrast-midtone hover:text-accent-2 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-accent-2 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base/95 backdrop-blur-md border-b border-base-midtone shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center group">
            <Image
              src="/brand/logos/icon.png"
              alt="Signal & Form LLC"
              width={44}
              height={44}
              className="h-11 w-auto brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              priority
            />
          </Link>
          <button
            type="button"
            className="md:hidden p-2 text-contrast-midtone hover:text-accent-2 transition-colors"
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
            className={`${mobileMenuOpen ? "block" : "hidden"} md:flex absolute md:relative top-[73px] md:top-0 left-0 right-0 md:left-auto md:right-auto bg-base/98 backdrop-blur-md md:bg-transparent border-b md:border-b-0 border-base-midtone md:border-0 py-4 md:py-0 px-4 md:px-0 z-10`}
            aria-label="Main navigation"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass}
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