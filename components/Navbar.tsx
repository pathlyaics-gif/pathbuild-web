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

/** Paywall in the iOS app links to pathbuild.app/legal/* — keep these in the main bar for Apple compliance. */
const LEGAL_LINKS = [
  {
    href: "/legal/privacy",
    label: "Privacy",
    fullLabel: "Privacy Policy",
  },
  {
    href: "/legal/terms",
    label: "Terms",
    fullLabel: "Terms of Service",
  },
  {
    href: "/legal/subscription",
    label: "Subscriptions",
    fullLabel: "Subscription Terms",
  },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(253,248,237,0.92)] backdrop-blur-2xl border-b border-warm-200/50 shadow-[0_1px_3px_rgba(212,169,138,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-[80px] items-center justify-between gap-3">
          <Link href="/" className="flex items-center shrink-0">
            <Logo size={40} />
          </Link>

          {/* Tablet + desktop: primary links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5 flex-1 justify-center min-w-0 flex-wrap">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] font-semibold text-navy-600 hover:text-navy-900 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            {/* Large screens: legal inline on the same bar */}
            <span
              className="hidden lg:inline w-px h-4 bg-warm-200 shrink-0"
              aria-hidden
            />
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.fullLabel}
                className="hidden lg:inline text-[13px] font-semibold text-navy-500 hover:text-accent-dark transition-colors whitespace-nowrap underline-offset-2 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center shrink-0">
            <a
              href="https://apps.apple.com/app/pathbuild/id6743108030"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-navy-900 text-white px-5 py-2.5 text-[13px] font-bold hover:bg-navy-800 transition-colors"
            >
              Download App
            </a>
          </div>

          <button
            className="md:hidden p-2 text-navy-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* md–lg: second row so Privacy / Terms / Subscriptions stay on the main header bar */}
        <div className="hidden md:flex lg:hidden pb-3 -mt-1 flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-warm-200/50">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.fullLabel}
              className="text-[12px] font-semibold text-navy-500 hover:text-accent-dark transition-colors underline-offset-2 hover:underline"
            >
              {link.fullLabel}
            </Link>
          ))}
        </div>

        {mobileOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden bg-card rounded-2xl shadow-warm-lg border border-warm-200/60 p-4 mb-4 space-y-1"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[15px] font-semibold text-navy-600 hover:text-navy-900 hover:bg-background-alt rounded-xl transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="border-t border-warm-200/60 pt-3 mt-2"
              role="navigation"
              aria-label="Legal and subscription information"
            >
              <p className="px-4 text-[10px] font-bold text-navy-400 uppercase tracking-[0.12em] mb-2">
                Legal & subscriptions
              </p>
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-[14px] font-semibold text-navy-500 hover:text-accent-dark hover:bg-background-alt rounded-xl transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.fullLabel}
                </Link>
              ))}
            </div>
            <div className="pt-2 px-1">
              <a
                href="https://apps.apple.com/app/pathbuild/id6743108030"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center rounded-full bg-navy-900 text-white px-5 py-3 text-[15px] font-bold hover:bg-navy-800 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
