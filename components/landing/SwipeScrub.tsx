"use client";

import { useEffect, useRef } from "react";

/** Normalized sub-progress with clamping. */
const seg = (p: number, a: number, b: number) =>
  Math.min(1, Math.max(0, (p - a) / (b - a)));
const smooth = (t: number) => t * t * (3 - 2 * t);

type CardSpec = {
  role: string;
  company: string;
  chips: string[];
  fit: number;
};

const CARDS: CardSpec[] = [
  {
    role: "Motion Designer",
    company: "Arcadia Labs · Remote (US)",
    chips: ["$105–130k", "Remote", "Senior"],
    fit: 94,
  },
  {
    role: "UX Researcher",
    company: "Meridian Health · Denver, CO",
    chips: ["$98–118k", "Hybrid", "Mid–Senior"],
    fit: 89,
  },
  {
    role: "Brand Designer",
    company: "Foundry & Co · New York, NY",
    chips: ["$92–110k", "On-site", "Mid-level"],
    fit: 86,
  },
];

function MiniRing({ pct }: { pct: number }) {
  const r = 15.5;
  const C = 2 * Math.PI * r;
  return (
    <span className="flex items-center gap-2">
      <svg width="38" height="38" viewBox="0 0 38 38" aria-hidden>
        <circle cx="19" cy="19" r={r} fill="none" stroke="rgba(242,239,234,0.09)" strokeWidth="4" />
        <circle
          cx="19"
          cy="19"
          r={r}
          fill="none"
          stroke="#E68A52"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - pct / 100)}
          transform="rotate(-90 19 19)"
        />
      </svg>
      <span className="text-[15px] font-semibold text-bone">
        {pct}
        <span className="text-[11px] text-bone-dim">%</span>
      </span>
    </span>
  );
}

function Card({
  spec,
  className,
  style,
  withStamp,
  cardRef,
  stampRef,
}: {
  spec: CardSpec;
  className?: string;
  style?: React.CSSProperties;
  withStamp?: boolean;
  cardRef?: React.Ref<HTMLDivElement>;
  stampRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={cardRef}
      style={style}
      className={`swipe-card absolute left-1/2 top-1/2 w-[min(360px,88vw)] rounded-4xl border border-white/[0.07] bg-night-panel p-6 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] ${className ?? ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[19px] font-semibold leading-tight text-bone">
            {spec.role}
          </p>
          <p className="mt-1.5 truncate text-[13px] text-bone-dim">
            {spec.company}
          </p>
        </div>
        <MiniRing pct={spec.fit} />
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {spec.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-bone-dim"
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="mt-5 border-t border-white/[0.06] pt-4 text-[12px] text-bone-mute">
        Drafted application ready for your review
      </div>

      {withStamp ? (
        <div
          ref={stampRef}
          className="absolute left-5 top-5 rounded-xl border-[3px] border-ember-bright px-3.5 py-1 text-[24px] font-extrabold uppercase tracking-[0.2em] text-ember-bright"
          style={{ opacity: 0, transform: "rotate(-12deg) scale(1.6)" }}
        >
          Apply
        </div>
      ) : null}
    </div>
  );
}

/**
 * The scroll-scrubbed swipe. A 240vh track pins a card deck; scrolling
 * "performs" the swipe — the APPLY stamp lands, the top card exits right,
 * and the next card scales up underneath. Reduced motion collapses the
 * theater into a static fanned deck.
 */
export function SwipeScrub() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardA = useRef<HTMLDivElement>(null);
  const cardB = useRef<HTMLDivElement>(null);
  const cardC = useRef<HTMLDivElement>(null);
  const stamp = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const a = cardA.current;
    const b = cardB.current;
    const c = cardC.current;
    const st = stamp.current;
    if (!track || !a || !b || !c || !st) return;

    // Centering is shared by every transform we write below.
    const base = "translate(-50%, -50%)";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      track.classList.add("is-static");
      a.style.transform = `${base} translateX(12%) rotate(6deg)`;
      st.style.opacity = "1";
      st.style.transform = "rotate(-12deg) scale(1)";
      b.style.transform = `${base} translateY(10px) scale(0.95)`;
      b.style.opacity = "1";
      c.style.transform = `${base} translateY(22px) scale(0.9)`;
      c.style.opacity = "0.7";
      return;
    }

    let raf = 0;
    let lastP = -1;

    const apply = (p: number) => {
      // APPLY stamp lands first…
      const s = smooth(seg(p, 0.06, 0.34));
      st.style.opacity = `${s}`;
      st.style.transform = `rotate(-12deg) scale(${(1.6 - 0.6 * s).toFixed(3)})`;

      // …then the visitor swipes the card off to the right…
      const m = smooth(seg(p, 0.3, 0.68));
      a.style.transform = `${base} translateX(${(m * 135).toFixed(2)}%) rotate(${(m * 16).toFixed(2)}deg)`;
      a.style.opacity = `${1 - seg(p, 0.58, 0.7)}`;

      // …and the deck steps forward.
      const n = smooth(seg(p, 0.5, 0.82));
      b.style.transform = `${base} translateY(${(16 - 16 * n).toFixed(2)}px) scale(${(0.93 + 0.07 * n).toFixed(4)})`;
      b.style.opacity = `${0.85 + 0.15 * n}`;

      const k = smooth(seg(p, 0.64, 0.92));
      c.style.transform = `${base} translateY(${(30 - 14 * k).toFixed(2)}px) scale(${(0.87 + 0.06 * k).toFixed(4)})`;
      c.style.opacity = `${0.55 + 0.3 * k}`;
    };

    const frame = () => {
      const rect = track.getBoundingClientRect();
      const range = rect.height - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -rect.top / range)) : 1;
      if (Math.abs(p - lastP) > 0.0005) {
        lastP = p;
        apply(p);
      }
      raf = requestAnimationFrame(frame);
    };

    // Only run the loop while the track is on screen.
    const io = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) raf = requestAnimationFrame(frame);
    });
    io.observe(track);
    apply(0);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={trackRef} className="swipe-track relative h-[240vh]">
      <div className="swipe-stage flex flex-col items-center justify-center overflow-hidden px-5">
        <div className="mb-12 max-w-[620px] text-center sm:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-ember-bright">
            The deck
          </p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-[-0.02em] text-bone">
            Apply with a swipe.
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-relaxed text-bone-dim sm:text-base">
            Right sends it to your drafts. Left lets it go. Keep scrolling —
            you&apos;re doing it now.
          </p>
        </div>

        <div className="relative h-[240px] w-full max-w-[420px]" aria-hidden>
          <Card spec={CARDS[2]} cardRef={cardC} style={{ opacity: 0.55, transform: "translate(-50%, -50%) translateY(30px) scale(0.87)" }} />
          <Card spec={CARDS[1]} cardRef={cardB} style={{ opacity: 0.85, transform: "translate(-50%, -50%) translateY(16px) scale(0.93)" }} />
          <Card spec={CARDS[0]} cardRef={cardA} withStamp stampRef={stamp} style={{ transform: "translate(-50%, -50%)" }} />
        </div>

        <p className="mt-14 flex items-center gap-5 text-[13px] text-bone-mute sm:mt-16">
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M19 12H5m6-6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Left to skip
          </span>
          <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden />
          <span className="flex items-center gap-1.5 text-ember-bright">
            Right to apply
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </p>

        <p className="sr-only">
          Animation of the PathBuild job deck: a card stamped APPLY swipes off
          to the right and the next highest-fit job rises to the top.
        </p>
      </div>
    </div>
  );
}
