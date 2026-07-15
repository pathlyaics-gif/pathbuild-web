import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Render on the alternate warm background band. */
  alt?: boolean;
  /** Opt out of the built-in Container for full-bleed content. */
  bleed?: boolean;
  "aria-label"?: string;
};

/**
 * Semantic <section> carrying the site's vertical rhythm. Wraps children in a
 * Container by default; pass `bleed` to render edge-to-edge.
 */
export function Section({
  children,
  className = "",
  id,
  alt = false,
  bleed = false,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-20 sm:py-28 lg:py-36 ${alt ? "bg-bg-alt" : ""} ${className}`.trim()}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
