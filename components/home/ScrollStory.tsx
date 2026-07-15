"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Section } from "@/components/ui/Section";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { STORY_SCENES } from "@/lib/site";

// One screenshot per scene (index-aligned with STORY_SCENES).
const SCENE_SHOTS = [
  "/screenshots/jobs-card.png", // fit
  "/screenshots/jobs-card.png", // swipe
  "/screenshots/profile-career.png", // prepare
  "/screenshots/should-you-apply.png", // review
  "/screenshots/should-you-apply.png", // applied
  "/screenshots/jobs-card.png", // replies
] as const;

// Descriptive alt per scene (used on the visible per-scene phones).
const SCENE_ALTS = [
  "A PathBuild job card showing a fit-score ring and a “mixed fit” summary for a marketing role.",
  "The same job card with skip (✕) and add (✓) buttons and the Jobs, Applications, Emails and Profile tab bar.",
  "The Profile screen with a best-fit career, an 89 score, and the résumé PathBuild tailors for each application.",
  "The “Should you apply?” sheet listing the reasons behind a role's fit score before anything is sent.",
  "The apply sheet with a terracotta “Apply with PathBuild” button that submits after you approve.",
  "The app's bottom tab bar with an Emails tab where employer replies come back, linked to the application.",
] as const;

const TOTAL = STORY_SCENES.length;
const pad = (n: number) => String(n).padStart(2, "0");

function SceneShot({ index }: { index: number }) {
  return (
    <PhoneFrame size="sm">
      <Image
        src={SCENE_SHOTS[index]}
        alt={SCENE_ALTS[index]}
        width={390}
        height={844}
        sizes="220px"
        className="h-full w-full object-cover"
      />
    </PhoneFrame>
  );
}

/**
 * "From swipe to sent" — the core loop.
 *
 * Sticky scroll story: on large screens a single phone frame pins (CSS
 * `position: sticky`) while the six scenes scroll past it; the pinned phone
 * cross-fades (opacity only) to the active scene's screenshot and a transform-
 * driven bar tracks progress. This is natural browser scroll — nothing is
 * hijacked or trapped, and back/forward behave normally.
 *
 * Fallback: with reduced motion, no JS, or before hydration, we render a simple
 * stacked list — each scene is screenshot + title + body, fully readable, no
 * pinning. The animated branch only mounts after hydration when motion is
 * allowed, so server output and reduced-motion users always get the static list.
 */
export function ScrollStory() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => setMounted(true), []);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(TOTAL - 1, Math.max(0, Math.floor(value * TOTAL)));
    setActive((prev) => (prev === index ? prev : index));
  });

  const animated = mounted && !reduced;

  return (
    <Section id="how-it-works" alt aria-label="From swipe to sent">
      <header className="max-w-prose">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-strong">
          The core loop
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          From swipe to sent
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-secondary">
          See the fit, swipe, and let PathBuild prepare each application. You review
          once and approve — then replies come back to one place.
        </p>
      </header>

      {animated ? (
        <div ref={containerRef} className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Sticky phone (desktop only) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex flex-col items-center">
              <div className="relative w-[300px]">
                <PhoneFrame size="md">
                  {SCENE_SHOTS.map((src, i) => (
                    <Image
                      key={`${src}-${i}`}
                      src={src}
                      alt=""
                      aria-hidden
                      width={390}
                      height={844}
                      sizes="300px"
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-slow ease-smooth ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                </PhoneFrame>
              </div>

              <div className="mt-6 w-[300px]">
                <div className="flex items-baseline justify-between text-sm font-semibold text-ink">
                  <span className="tabular-nums text-accent-strong">{pad(active + 1)}</span>
                  <span className="tabular-nums text-ink-muted">{pad(TOTAL)}</span>
                </div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-pill bg-divider">
                  <motion.div
                    style={{ scaleX: scrollYProgress }}
                    className="h-full w-full origin-left rounded-pill bg-accent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scenes */}
          <ol className="flex flex-col gap-12 lg:gap-0">
            {STORY_SCENES.map((scene, i) => (
              <li
                key={scene.key}
                className={`flex flex-col gap-6 transition-opacity duration-standard ease-smooth lg:min-h-[70vh] lg:justify-center ${
                  i === active ? "lg:opacity-100" : "lg:opacity-40"
                }`}
              >
                <div className="lg:hidden">
                  <SceneShot index={i} />
                </div>
                <div>
                  <span className="text-sm font-semibold tabular-nums text-accent-strong">
                    {pad(i + 1)} <span className="text-ink-muted">/ {pad(TOTAL)}</span>
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {scene.title}
                  </h3>
                  <p className="mt-3 max-w-prose text-lg leading-relaxed text-ink-secondary">
                    {scene.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        // Static fallback: readable stacked list, no pinning, no image swapping.
        <ol className="mt-14 flex flex-col gap-12 sm:gap-16">
          {STORY_SCENES.map((scene, i) => (
            <li
              key={scene.key}
              className="grid items-center gap-6 sm:grid-cols-[auto,1fr] sm:gap-10"
            >
              <div className="mx-auto sm:mx-0">
                <SceneShot index={i} />
              </div>
              <div>
                <span className="text-sm font-semibold tabular-nums text-accent-strong">
                  {pad(i + 1)} <span className="text-ink-muted">/ {pad(TOTAL)}</span>
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {scene.title}
                </h3>
                <p className="mt-3 max-w-prose text-lg leading-relaxed text-ink-secondary">
                  {scene.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Section>
  );
}
