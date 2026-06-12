"use client";

import { useEffect, useState } from "react";
import { NavLogo } from "../NavLogo";
import { APP_STORE_URL } from "@/lib/site";

/** Minimal fixed nav for the dark landing page: wordmark, two quiet anchors, one CTA. */
export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-[rgba(11,11,12,0.78)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-5 sm:px-8"
      >
        <NavLogo variant="light" />

        <div className="flex items-center gap-7">
          <a
            href="#features"
            className="hidden text-[13.5px] font-medium text-bone-dim transition-colors hover:text-bone md:block"
          >
            The fit score
          </a>
          <a
            href="#how-it-works"
            className="hidden text-[13.5px] font-medium text-bone-dim transition-colors hover:text-bone md:block"
          >
            How it works
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-pill bg-ember px-5 py-2 text-[13.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-px hover:bg-ember-bright"
          >
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
