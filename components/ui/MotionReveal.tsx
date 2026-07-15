"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. Sets the `--reveal-delay` CSS variable. */
  delay?: number;
  as?: ElementType;
};

// One shared IntersectionObserver reveals every element on the page.
let sharedObserver: IntersectionObserver | null = null;

function getRevealObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );
  }
  return sharedObserver;
}

/**
 * Reveal-on-scroll wrapper. Adds `data-reveal` (styled in globals.css) and
 * flips it to `.is-in` once, when it scrolls into view. The transition itself
 * and all reduced-motion handling live in CSS — this only toggles the class.
 */
export function MotionReveal({
  children,
  className,
  delay,
  as,
}: MotionRevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = getRevealObserver();
    if (!observer) {
      // No IntersectionObserver support — show content immediately.
      node.classList.add("is-in");
      return;
    }
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);

  const style = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <Tag ref={ref} data-reveal className={className} style={style}>
      {children}
    </Tag>
  );
}
