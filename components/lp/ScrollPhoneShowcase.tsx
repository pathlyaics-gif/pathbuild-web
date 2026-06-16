"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

type Shot = { src: string; alt: string; caption: string };

const SHOTS: Shot[] = [
  {
    src: "/screenshots/jobs-card.png",
    alt: "PathBuild Jobs screen: a swipeable job card with a fit-score ring.",
    caption: "Swipe through real jobs — each scored to your fit.",
  },
  {
    src: "/screenshots/should-you-apply.png",
    alt: "PathBuild 'Should you apply?' sheet: a fit score with its reasons and an honest warning.",
    caption: "Every score comes with its reasons — and honest warnings.",
  },
  {
    src: "/screenshots/profile-career.png",
    alt: "PathBuild career report: an 89 best-fit score for a role with a salary range.",
    caption: "Your best-fit career, scored.",
  },
  {
    src: "/screenshots/profile-menu.png",
    alt: "PathBuild profile: résumé, professional details, and documents.",
    caption: "Your résumé and profile power every tailored application.",
  },
];

/**
 * Pinned, scroll-scrubbed phone. As you scroll the tall track, the device
 * gently rotates and the screen crossfades through each real app page, with a
 * synced caption and progress dots. One rAF loop reading getBoundingClientRect
 * — no scroll listener. Reduced-motion users get a static stacked gallery.
 */
export function ScrollPhoneShowcase() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const screenRefs = useRef<Array<HTMLDivElement | null>>([]);
  const capRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const container = containerRef.current;
    if (!container) return;
    const n = SHOTS.length;
    let raf = 0;
    let lastActive = -1;

    const apply = (progress: number) => {
      const p = progress * (n - 1); // 0 .. n-1

      // Device sway — the "spin" as you scroll.
      const device = deviceRef.current;
      if (device) {
        const rotY = (progress - 0.5) * 22; // ~ -11deg .. +11deg
        const rotX = (0.5 - progress) * 5;
        device.style.transform = `rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg)`;
      }

      const activeIdx = Math.max(0, Math.min(n - 1, Math.round(p)));

      for (let i = 0; i < n; i++) {
        const x = p - i; // signed distance from this screen
        const ax = Math.abs(x);

        const screen = screenRefs.current[i];
        if (screen) {
          screen.style.opacity = `${Math.max(0, 1 - ax)}`;
          screen.style.transform = `translateY(${(x * -5).toFixed(2)}%) scale(${(1 - ax * 0.05).toFixed(3)})`;
          screen.style.zIndex = `${Math.round((2 - ax) * 10)}`;
        }
        const cap = capRefs.current[i];
        if (cap) {
          cap.style.opacity = `${Math.max(0, 1 - ax * 1.5)}`;
          cap.style.transform = `translateY(${(x * 12).toFixed(1)}px)`;
        }
        const dot = dotRefs.current[i];
        if (dot) {
          dot.style.background = i === activeIdx ? "#C1502A" : "rgba(255,255,255,0.18)";
          dot.style.transform = i === activeIdx ? "scale(1.5)" : "scale(1)";
        }
      }

      if (activeIdx !== lastActive) {
        lastActive = activeIdx;
        setActive(activeIdx);
      }
    };

    const frame = () => {
      const rect = container.getBoundingClientRect();
      const range = container.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / (range || 1)));
      apply(progress);
      raf = requestAnimationFrame(frame);
    };

    apply(0);
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  // ── Reduced motion: static stacked gallery ──────────────────────────────
  if (reduce) {
    return (
      <section className="px-6 py-24 sm:py-32" aria-labelledby="action-heading">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            See It In Action
          </p>
          <h2
            id="action-heading"
            className="font-light leading-[1.08] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            The real app, screen by screen.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {SHOTS.map((s) => (
              <figure key={s.src} className="flex flex-col items-center">
                <div
                  className="relative w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-[rgba(193,80,42,0.25)] bg-[#121214]"
                  style={{ aspectRatio: "1179 / 2556" }}
                >
                  <Image src={s.src} alt={s.alt} fill sizes="240px" className="object-cover" />
                </div>
                <figcaption className="mt-4 max-w-[240px] text-center text-[0.9rem] font-light text-[#E5E5E5]">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ── Scroll-scrubbed pinned phone ────────────────────────────────────────
  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${SHOTS.length * 95}vh` }}
      aria-labelledby="action-heading"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6"
      >
        {/* soft terracotta glow behind the device */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle, rgba(193,80,42,0.16), rgba(193,80,42,0.04) 40%, transparent 68%)",
          }}
        />

        <Reveal>
          <p className="mb-3 text-center text-[0.65rem] font-medium uppercase tracking-[0.25em] text-[#C1502A]">
            See It In Action
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            id="action-heading"
            className="mb-8 max-w-[18ch] text-center font-light leading-[1.1] tracking-[-0.02em] text-white"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)" }}
          >
            Watch the real app work.
          </h2>
        </Reveal>

        {/* Device */}
        <div className="relative" style={{ perspective: "1600px" }}>
          <div
            ref={deviceRef}
            className="relative rounded-[2.6rem] border border-white/10 bg-[#1b1b1e] p-2.5 shadow-[0_50px_120px_-30px_rgba(0,0,0,0.9)] will-change-transform"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="relative overflow-hidden rounded-[2.1rem] bg-[#0e0e10]"
              style={{ height: "min(50vh, 460px)", aspectRatio: "1179 / 2556" }}
            >
              {SHOTS.map((s, i) => (
                <div
                  key={s.src}
                  ref={(el) => {
                    screenRefs.current[i] = el;
                  }}
                  className="absolute inset-0 will-change-[transform,opacity]"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 70vw, 280px"
                    className="object-cover"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Captions (crossfade in sync with the screens) */}
        <div className="relative mt-8 h-12 w-full max-w-[440px]">
          {SHOTS.map((s, i) => (
            <p
              key={s.src}
              ref={(el) => {
                capRefs.current[i] = el;
              }}
              className="absolute inset-x-0 text-center text-[1rem] font-light leading-relaxed text-[#E5E5E5]"
              style={{ opacity: i === 0 ? 1 : 0 }}
            >
              {s.caption}
            </p>
          ))}
        </div>

        {/* Progress dots */}
        <div className="mt-5 flex items-center gap-2.5" aria-hidden>
          {SHOTS.map((s, i) => (
            <span
              key={s.src}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              className="h-1.5 w-1.5 rounded-full transition-transform duration-200"
              style={{ background: i === 0 ? "#C1502A" : "rgba(255,255,255,0.18)" }}
            />
          ))}
        </div>

        <span className="sr-only">Showing app screen {active + 1} of {SHOTS.length}</span>
      </div>
    </section>
  );
}
