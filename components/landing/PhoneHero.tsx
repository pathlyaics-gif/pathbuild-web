"use client";

import { useEffect, useRef } from "react";
import { FitRing } from "./FitRing";

const MAX_TILT_Y = 5; // deg, cursor left/right
const MAX_TILT_X = 3; // deg, cursor up/down
const PARALLAX = 0.05; // phone lags the scroll slightly

/**
 * Floating iPhone mockup of the Jobs card. Tilts a few degrees toward the
 * cursor (fine pointers only) and drifts gently with scroll. One rAF loop,
 * transform-only, paused when the hero leaves the viewport.
 */
export function PhoneHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const phone = phoneRef.current;
    if (!wrap || !phone) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let raf = 0;
    let running = false;
    let tx = 0; // target rotateY
    let ty = 0; // target rotateX
    let cx = 0; // current rotateY
    let cy = 0; // current rotateX

    const onPointer = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2 * MAX_TILT_Y;
      ty = -(e.clientY / window.innerHeight - 0.5) * 2 * MAX_TILT_X;
    };

    const frame = () => {
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      const drift = Math.min(window.scrollY, 600) * PARALLAX;
      phone.style.transform = `translate3d(0, ${drift}px, 0) rotateX(${cy.toFixed(2)}deg) rotateY(${cx.toFixed(2)}deg)`;
      if (running) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(frame);
      } else if (!entry.isIntersecting && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(wrap);
    if (finePointer) {
      window.addEventListener("pointermove", onPointer, { passive: true });
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      if (finePointer) window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-fit"
      style={{ perspective: "1400px" }}
    >
      {/* Warm light behind the device */}
      <div
        className="glow-orb left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />

      <div
        ref={phoneRef}
        aria-hidden
        className="relative w-[300px] rounded-[52px] border border-white/10 bg-[#1C1C1F] p-[10px] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85),0_0_0_1px_rgba(0,0,0,0.6)] sm:w-[320px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative overflow-hidden rounded-[42px] bg-night-panel">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-3 z-10 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />

          <div className="flex flex-col gap-4 px-4 pb-5 pt-14">
            {/* App header */}
            <div className="flex items-center justify-between px-1">
              <span className="font-serif text-[22px] tracking-[-0.01em] text-bone">
                Jobs
              </span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-bone-dim">
                Design · Austin
              </span>
            </div>

            {/* Job card */}
            <div className="rounded-4xl border border-white/[0.06] bg-night-raise p-5">
              <div className="flex items-center gap-4">
                <FitRing value={98} size={108} strokeWidth={9} startDelay={350} />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ember-bright">
                    Strong fit
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-bone-dim">
                    Top of your deck today
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[18px] font-semibold leading-tight text-bone">
                Senior Product Designer
              </p>
              <p className="mt-1 text-[13px] text-bone-dim">
                Northwind · Austin, TX
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {["$120–145k", "Hybrid", "Full-time"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-bone-dim"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3.5">
                <span className="text-[12px] font-semibold text-ember-bright">
                  Why this fits
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-bone-mute">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Skip / apply actions */}
            <div className="flex items-center justify-center gap-7 pb-1 pt-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-bone-mute">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember text-white shadow-[0_10px_30px_rgba(193,80,42,0.45)]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            <p className="pb-1 text-center text-[11px] text-bone-mute">
              Swipe right to apply
            </p>
          </div>
        </div>
      </div>

      <p className="sr-only">
        Preview of the PathBuild Jobs screen: a job card for a Senior Product
        Designer role showing a 98 percent fit score ring, with skip and apply
        buttons beneath it.
      </p>
    </div>
  );
}
