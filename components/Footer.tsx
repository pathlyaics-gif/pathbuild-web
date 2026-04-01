"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLogo } from "./NavLogo";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

const APP_STORE =
  "https://apps.apple.com/app/pathbuild/id6743108030";

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/intro") || pathname?.startsWith("/onboarding")) {
    return null;
  }

  return (
    <footer className="bg-ebony px-5 py-14 text-white/60 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 lg:col-auto">
            <div className="mb-2">
              <NavLogo variant="light" />
            </div>
            <p className="mt-3 max-w-[260px] text-[0.85rem] leading-[1.7] text-white/60">
              Premium career execution for iOS. One mission a day. Real
              progress.
            </p>
          </div>
          <div>
            <h5 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/40">
              Product
            </h5>
            <Link
              href="/#features"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Pricing
            </Link>
            <Link
              href="/#how-it-works"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              How It Works
            </Link>
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Download
            </a>
          </div>
          <div>
            <h5 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/40">
              Company
            </h5>
            <Link
              href="/#about"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              About
            </Link>
            <a
              href={CONTACT_MAILTO}
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Contact
            </a>
          </div>
          <div>
            <h5 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/40">
              Support
            </h5>
            <Link
              href="/#faq"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              FAQ
            </Link>
            <a
              href={CONTACT_MAILTO}
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Email Us
            </a>
          </div>
          <div>
            <h5 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white/40">
              Legal
            </h5>
            <Link
              href="/legal/privacy"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/legal/subscription"
              className="mb-3 block text-[0.88rem] text-white/65 transition-colors hover:text-coral-light"
            >
              Subscription Terms
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-[0.8rem] sm:flex-row sm:text-left">
          <span className="text-white/50">
            © {new Date().getFullYear()} PathBuild. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/pathbuildapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.12] text-[0.85rem] text-white/50 transition-all hover:border-coral hover:bg-coral/10 hover:text-coral-light"
              aria-label="X / Twitter"
            >
              𝕏
            </a>
            <a
              href="https://instagram.com/pathbuildapp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.12] text-[0.85rem] text-white/50 transition-all hover:border-coral hover:bg-coral/10 hover:text-coral-light"
              aria-label="Instagram"
            >
              ◉
            </a>
            <a
              href="https://linkedin.com/company/pathbuild"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/[0.12] text-[0.85rem] text-white/50 transition-all hover:border-coral hover:bg-coral/10 hover:text-coral-light"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
