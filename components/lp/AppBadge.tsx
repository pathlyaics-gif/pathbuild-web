import Image from "next/image";

/**
 * TODO(launch): swap APP_STORE_HREF for the live "Download on the App Store"
 * URL before launch. Kept as a clearly-marked placeholder so nothing ships
 * pointing at a guessed link.
 */
export const APP_STORE_HREF = "#"; // TODO(launch): real App Store URL

/**
 * Official Apple "Download on the App Store" badge — unmodified black artwork,
 * served from /app-store-badge.svg. The wrapping padding preserves Apple's
 * required clear space (≈1/10 of the badge height on every side).
 */
export function AppBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_HREF}
      aria-label="Download PathBuild on the App Store"
      className={`pointer-events-auto inline-block p-1.5 transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
    >
      <Image
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={168}
        height={56}
        className="h-[52px] w-auto"
        priority
      />
    </a>
  );
}
