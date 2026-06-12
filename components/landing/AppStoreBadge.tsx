import { APP_STORE_URL } from "@/lib/site";

/**
 * Official Apple "Download on the App Store" badge (black), unmodified
 * artwork from Apple's marketing resources, rendered with its native
 * 119.66:40 ratio and the required clear space left to parent gaps.
 *
 * TODO(launch): APP_STORE_URL in lib/site.ts points at app id 6743108030 —
 * verify it resolves once the app is live, or paste the final link from
 * App Store Connect there.
 */
export function AppStoreBadge({
  className = "",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-transform duration-300 hover:-translate-y-px ${className}`}
    >
      <img
        src="/app-store-badge.svg"
        alt="Download on the App Store"
        width={132}
        height={44}
        loading={eager ? "eager" : "lazy"}
        className="h-11 w-auto"
      />
    </a>
  );
}
