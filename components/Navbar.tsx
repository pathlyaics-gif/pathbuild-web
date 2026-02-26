"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/support", label: "Support" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  if (pathname?.startsWith("/intro") || pathname?.startsWith("/onboarding")) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(255,248,242,0.85)] backdrop-blur-xl border-b border-warm-200/60">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size={36} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-600 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-glow"
            >
              Download App
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-navy-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-warm-200 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-navy-600 hover:text-navy-900 hover:bg-warm-100 rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-3">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-dark px-5 py-2.5 text-sm font-semibold text-white w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Download App
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
