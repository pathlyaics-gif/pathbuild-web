"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLogo } from "./NavLogo";
import { Menu, X } from "lucide-react";

const APP_STORE =
  "https://apps.apple.com/app/pathbuild/id6743108030";

const PRIMARY_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "Support" },
];

const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy", fullLabel: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms", fullLabel: "Terms of Service" },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/intro") || pathname?.startsWith("/onboarding")) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] px-8 transition-all duration-[400ms] ease-smooth ${
        scrolled
          ? "border-b border-[rgba(44,34,24,0.06)] bg-[rgba(251,247,240,0.85)] backdrop-blur-xl backdrop-saturate-[180%]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between"
        aria-label="Main navigation"
      >
        <NavLogo />

        <ul className="hidden list-none items-center gap-8 md:flex">
          {PRIMARY_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.9rem] font-medium tracking-[0.01em] text-ink-secondary transition-colors hover:text-coral"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className="hidden h-[18px] w-px bg-cream-mid lg:block"
            aria-hidden
          />
          {LEGAL_LINKS.map((link) => (
            <li key={link.href} className="hidden lg:block">
              <Link
                href={link.href}
                title={link.fullLabel}
                className="text-[0.85rem] font-medium text-ink-secondary transition-colors hover:text-coral"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li aria-hidden className="hidden lg:block">
            <div className="h-[18px] w-px bg-cream-mid" />
          </li>
          <li>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-ebony px-[22px] py-2.5 text-[0.85rem] font-semibold text-white shadow-pb-sm transition-all hover:-translate-y-px hover:bg-coral hover:shadow-[0_4px_16px_rgba(232,115,74,0.3)]"
            >
              Download App
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-ink" />
          ) : (
            <div className="flex w-[22px] flex-col gap-1.5">
              <span className="block h-0.5 rounded-sm bg-ink" />
              <span className="block h-0.5 rounded-sm bg-ink" />
              <span className="block h-0.5 rounded-sm bg-ink" />
            </div>
          )}
        </button>
      </nav>

      <div className="hidden md:flex lg:hidden">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-5 gap-y-2 border-b border-[rgba(44,34,24,0.06)] pb-3">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              title={link.fullLabel}
              className="text-xs font-semibold text-ink-muted underline-offset-2 hover:text-coral hover:underline"
            >
              {link.fullLabel}
            </Link>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-menu"
          className="mx-auto mb-4 max-w-[1200px] rounded-xl border border-cream-mid bg-white p-4 shadow-pb-md md:hidden"
        >
          <ul className="list-none space-y-1">
            {PRIMARY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-[15px] font-semibold text-ink-secondary transition-colors hover:bg-cream hover:text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="mt-2 border-t border-cream-mid pt-3"
            role="navigation"
            aria-label="Legal"
          >
            <p className="mb-2 px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-muted">
              Legal & subscriptions
            </p>
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-ink-muted transition-colors hover:bg-cream hover:text-coral"
                onClick={() => setMobileOpen(false)}
              >
                {link.fullLabel}
              </Link>
            ))}
          </div>
          <a
            href={APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-pill bg-ebony py-3 text-center text-[15px] font-semibold text-white transition-colors hover:bg-coral"
            onClick={() => setMobileOpen(false)}
          >
            Download App
          </a>
        </div>
      )}
    </header>
  );
}
