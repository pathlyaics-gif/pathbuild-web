import type { ReactNode } from "react";

type PhoneFrameSize = "sm" | "md" | "lg";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  size?: PhoneFrameSize;
};

const WIDTHS: Record<PhoneFrameSize, string> = {
  sm: "w-[220px]",
  md: "w-[300px]",
  lg: "w-[360px]",
};

/**
 * Pure-CSS iPhone bezel — no image asset. Holds `children` at a 9:19.5 screen
 * ratio behind a warm-black bezel, a soft shadow, and a dynamic-island pill.
 */
export function PhoneFrame({
  children,
  className = "",
  size = "md",
}: PhoneFrameProps) {
  return (
    <div className={`relative ${WIDTHS[size]} ${className}`.trim()}>
      <div className="rounded-[44px] bg-ink p-[10px] shadow-pb-xl ring-1 ring-black/5">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-ink">
          {children}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[10px] h-[24px] w-[84px] -translate-x-1/2 rounded-pill bg-black"
          />
        </div>
      </div>
    </div>
  );
}
