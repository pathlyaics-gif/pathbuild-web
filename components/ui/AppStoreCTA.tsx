import Image from "next/image";
import {
  APP_STORE_LIVE,
  APP_STORE_URL,
  APP_STORE_A11Y_LABEL,
  CTA_COMING_SOON,
  CTA_PRIMARY,
} from "@/lib/site";
import { Button } from "./Button";

type AppStoreCTAProps = {
  variant?: "button" | "badge";
  size?: "md" | "lg";
  className?: string;
};

// Preserves the intrinsic ratio of public/app-store-badge.svg (119.66 × 40).
const BADGE_SIZES = {
  md: { width: 132, height: 44 },
  lg: { width: 156, height: 52 },
} as const;

function AppleGlyph() {
  return (
    <svg
      viewBox="0 0 384 512"
      width="14"
      height="17"
      fill="currentColor"
      aria-hidden="true"
      className="-mt-px shrink-0"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

/**
 * Primary download control. `button` renders the terracotta CTA with an Apple
 * glyph; `badge` renders the official App Store badge. Both open the App Store
 * in a new tab and expose the same accessible name.
 */
export function AppStoreCTA({
  variant = "button",
  size = "md",
  className = "",
}: AppStoreCTAProps) {
  // Until the App Store listing is public, every variant renders an honest,
  // non-interactive "coming soon" state instead of linking to a 404.
  if (!APP_STORE_LIVE) {
    const sizeClasses =
      size === "lg" ? "h-14 px-8 text-base" : "h-11 px-5 text-[15px]";
    return (
      <span
        className={`inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap bg-surface border border-divider text-ink/70 ${sizeClasses} ${className}`.trim()}
      >
        <AppleGlyph />
        {CTA_COMING_SOON}
      </span>
    );
  }

  if (variant === "badge") {
    const dim = BADGE_SIZES[size];
    return (
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener"
        aria-label={APP_STORE_A11Y_LABEL}
        className={`inline-flex ${className}`.trim()}
      >
        <Image
          src="/app-store-badge.svg"
          alt=""
          width={dim.width}
          height={dim.height}
          unoptimized
          priority={false}
        />
      </a>
    );
  }

  return (
    <Button
      variant="primary"
      size={size}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener"
      aria-label={APP_STORE_A11Y_LABEL}
      className={className}
    >
      <AppleGlyph />
      {CTA_PRIMARY}
    </Button>
  );
}
