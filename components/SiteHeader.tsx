"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AppStoreCTA } from "@/components/ui/AppStoreCTA";

type NavLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "/#product" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Security", href: "/#security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Support", href: "/support" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`.trim()}>
      <Image
        src="/star-summit-icon.png"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6"
        priority
      />
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        PathBuild
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Header material: transparent at the top, glass + hairline after ~8px.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape to close + a simple focus trap inside the open menu.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;

    const focusable = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      );

    focusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <header
      className={`sticky top-0 z-50 h-[var(--nav-height)] w-full transition-colors duration-standard ease-smooth ${
        scrolled || open
          ? "glass border-b border-divider"
          : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-md focus-visible:outline-none"
          aria-label="PathBuild home"
        >
          <Wordmark />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href.startsWith("/") &&
              !link.href.includes("#") &&
              pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-pill px-3 py-2 text-[15px] transition-colors duration-fast ${
                  isActive
                    ? "text-accent-strong"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <AppStoreCTA variant="button" size="md" />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <AppStoreCTA variant="button" size="md" />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-fast hover:bg-surface-peach"
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden />
            ) : (
              <Menu className="h-6 w-6" aria-hidden />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-bg md:hidden"
        >
          <Container className="flex h-[var(--nav-height)] items-center justify-between gap-4">
            <Wordmark />
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-fast hover:bg-surface-peach"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </Container>

          <Container className="flex flex-1 flex-col">
            <nav className="flex flex-col gap-1 pt-4" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-3 text-lg font-medium text-ink transition-colors duration-fast hover:bg-surface-peach"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6">
              <AppStoreCTA variant="button" size="lg" className="w-full" />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
