"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/intro") || pathname?.startsWith("/onboarding")) {
    return null;
  }

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(255,246,239,0.92)] backdrop-blur-2xl border-b border-warm-200/50 shadow-[0_1px_3px_rgba(212,169,138,0.08)]"
          : isHome
            ? "bg-transparent"
            : "bg-[rgba(255,246,239,0.92)] backdrop-blur-2xl"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo
              size={30}
              variant={isHome && !scrolled ? "light" : "default"}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors ${
                  isHome && !scrolled
                    ? "text-white/70 hover:text-white"
                    : "text-navy-500 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="#"
              className={`rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                isHome && !scrolled
                  ? "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  : "bg-navy-900 text-white hover:bg-navy-800"
              }`}
            >
              Download App
            </Link>
          </div>

          <button
            className={`md:hidden p-2 ${
              isHome && !scrolled ? "text-white" : "text-navy-700"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-warm-lg border border-warm-200/60 p-4 mb-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-medium text-navy-600 hover:text-navy-900 hover:bg-background-alt rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-1">
              <Link
                href="#"
                className="block text-center rounded-full bg-navy-900 text-white px-5 py-2.5 text-sm font-semibold hover:bg-navy-800 transition-colors"
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
