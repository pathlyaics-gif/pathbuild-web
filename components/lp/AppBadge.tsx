import Image from "next/image";
import { APP_STORE_URL } from "@/lib/site";

/**
 * Live "Download on the App Store" link, sourced from lib/site.ts
 * (apps.apple.com/app/pathbuild/...). Verify it's the correct listing before launch.
 */
export const APP_STORE_HREF = APP_STORE_URL;

/**
 * Official Apple "Download on the App Store" badge — unmodified black artwork,
 * served from /app-store-badge.svg. The wrapping padding preserves Apple's
 * required clear space (≈1/10 of the badge height on every side).
 */
export function AppBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_HREF}
      target="_blank"
      rel="noopener noreferrer"
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
