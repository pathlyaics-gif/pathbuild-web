"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "p" | "h2" | "section";
};

/**
 * Section reveal: rises + fades children the first time they enter the
 * viewport. Reduced-motion users get a plain fade with no movement.
 * Motion spec: y 24 -> 0, opacity 0 -> 1, ease [0.25, 0, 0, 1], once.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0, 0, 1] }}
    >
      {children}
    </MotionTag>
  );
}
