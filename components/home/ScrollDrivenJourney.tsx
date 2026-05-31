"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { Sparkles, Compass, Building2, type LucideIcon } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/site";

type StepVisual = {
  icon: LucideIcon;
  category: string;
  accent: string;
};

const VISUALS: StepVisual[] = [
  { icon: Sparkles, category: "Step 01 — Quiz", accent: "#E8734A" },
  { icon: Compass, category: "Step 02 — Match", accent: "#A064FF" },
  { icon: Building2, category: "Step 03 — Discover", accent: "#3CC878" },
];

const STEPS = HOW_IT_WORKS_STEPS.map((s, i) => ({ ...s, ...VISUALS[i] }));

// #region agent log
if (typeof window !== "undefined") {
  fetch('http://127.0.0.1:7486/ingest/fb289329-0b63-43aa-a220-1d3931b4e10f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'a8b9a8'},body:JSON.stringify({sessionId:'a8b9a8',runId:'pre-fix',hypothesisId:'H1',location:'ScrollDrivenJourney.tsx:27',message:'STEPS/VISUALS construction',data:{stepsLen:STEPS.length,visualsLen:VISUALS.length,missingIcon:STEPS.map((s,i)=>({i,hasIcon:!!(s as {icon?:unknown}).icon,accent:(s as {accent?:string}).accent})).filter(x=>!x.hasIcon)},timestamp:Date.now()})}).catch(()=>{});
}
// #endregion

// Each step renders its own light-themed graphic on the right
function StepGraphic({ index, accent }: { index: number; accent: string }) {
  switch (index) {
    case 0:
      return (
        <div className="w-full max-w-[340px] space-y-3">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
            Question 3 of 12
          </div>
          <p className="font-serif text-[1.3rem] leading-snug tracking-[-0.01em] text-ink">
            When you&apos;re solving a hard problem, you&apos;d rather...
          </p>
          <div className="space-y-2 pt-2">
            {[
              { text: "Dig into the data alone", selected: false },
              { text: "Whiteboard it with a team", selected: true },
              { text: "Sketch it visually first", selected: false },
              { text: "Ship a quick test and iterate", selected: false },
            ].map((opt) => (
              <motion.div
                key={opt.text}
                animate={{
                  backgroundColor: opt.selected ? `${accent}12` : "#FFFFFF",
                  borderColor: opt.selected ? accent : "rgba(44,34,24,0.08)",
                }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 rounded-xl border px-4 py-3"
              >
                <div
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
                  style={{
                    borderColor: opt.selected ? accent : "rgba(44,34,24,0.18)",
                  }}
                >
                  {opt.selected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.25, delay: 0.15 }}
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: accent }}
                    />
                  )}
                </div>
                <span className="text-[0.92rem] text-ink">{opt.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      );

    case 1:
      return (
        <div className="w-full max-w-[360px] space-y-3">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
            Your top career matches
          </div>
          {[
            { role: "Product Designer", fit: 94, tag: "Strong fit" },
            { role: "UX Researcher", fit: 89, tag: "Great fit" },
            { role: "Design Engineer", fit: 86, tag: "Great fit" },
            { role: "Brand Strategist", fit: 78, tag: "Good fit" },
          ].map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center justify-between rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white px-4 py-3 shadow-pb-sm"
            >
              <div>
                <p className="text-[0.95rem] font-semibold text-ink">{m.role}</p>
                <p className="text-[0.74rem] text-ink-muted">{m.tag}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative h-9 w-9">
                  <svg viewBox="0 0 36 36" className="h-9 w-9 -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke="rgba(44,34,24,0.08)"
                      strokeWidth="3.5"
                    />
                    <motion.circle
                      cx="18"
                      cy="18"
                      r="14"
                      fill="none"
                      stroke={accent}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray={`${(m.fit / 100) * 2 * Math.PI * 14} ${2 * Math.PI * 14}`}
                      initial={{ strokeDasharray: `0 ${2 * Math.PI * 14}` }}
                      animate={{
                        strokeDasharray: `${(m.fit / 100) * 2 * Math.PI * 14} ${2 * Math.PI * 14}`,
                      }}
                      transition={{ duration: 0.8, delay: 0.15 + i * 0.08 }}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[0.7rem] font-bold text-ink">
                    {m.fit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      );

    case 2:
      return (
        <div className="w-full max-w-[360px] space-y-3">
          <div className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-ink-muted">
            Hiring for Product Designer
          </div>
          {[
            { name: "Linear", logo: "/logos/linear.svg", tag: "Productivity · Series B", match: "96" },
            { name: "Vercel", logo: "/logos/vercel.svg", tag: "DevTools · Series D", match: "92" },
            { name: "Notion", logo: "/logos/notion.svg", tag: "Productivity · Late stage", match: "89" },
            { name: "Stripe", logo: "/logos/stripe.svg", tag: "Fintech · Late stage", match: "86" },
          ].map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex items-center gap-3 rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white px-4 py-3 shadow-pb-sm"
            >
              <div
                className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(44,34,24,0.08)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.95rem] font-semibold text-ink">
                  {c.name}
                </p>
                <p className="truncate text-[0.74rem] text-ink-muted">{c.tag}</p>
              </div>
              <div
                className="rounded-full px-2.5 py-1 text-[0.7rem] font-bold"
                style={{ backgroundColor: `${accent}18`, color: accent }}
              >
                {c.match}%
              </div>
            </motion.div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export function ScrollDrivenJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Subtle parallax for the graphic on the right
  const rawGraphicY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const graphicY = useSpring(rawGraphicY, { stiffness: 60, damping: 18 });

  // Background gradient color shifts subtly per step
  const bgTint = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#FDF6F0", "#FAF1FB", "#F0FAF3", "#FFFFFF"]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newActive = Math.min(STEPS.length - 1, Math.floor(latest * STEPS.length));
    // #region agent log
    fetch('http://127.0.0.1:7486/ingest/fb289329-0b63-43aa-a220-1d3931b4e10f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'a8b9a8'},body:JSON.stringify({sessionId:'a8b9a8',runId:'pre-fix',hypothesisId:'H1,H3',location:'ScrollDrivenJourney.tsx:212',message:'scroll change -> activeStep',data:{latest,newActive,hasIcon:!!STEPS[newActive]?.icon,accent:STEPS[newActive]?.accent},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    setActiveStep(newActive);
  });

  const step = STEPS[activeStep];
  const Icon = step.icon;
  // #region agent log
  if (typeof window !== "undefined") {
    fetch('http://127.0.0.1:7486/ingest/fb289329-0b63-43aa-a220-1d3931b4e10f',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'a8b9a8'},body:JSON.stringify({sessionId:'a8b9a8',runId:'pre-fix',hypothesisId:'H2',location:'ScrollDrivenJourney.tsx:216',message:'render body',data:{activeStep,iconType:typeof Icon,iconDefined:!!Icon,accent:step?.accent},timestamp:Date.now()})}).catch(()=>{});
  }
  // #endregion

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "300vh" }}
      aria-label="How it works — scroll to advance"
    >
      <motion.div
        className="sticky top-0 flex h-screen w-full items-center overflow-hidden"
        style={{ backgroundColor: bgTint }}
      >
        {/* Soft ambient orb that shifts color per step */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] -top-[10%] rounded-full"
          animate={{ backgroundColor: `${step.accent}1A` }}
          transition={{ duration: 0.7 }}
          style={{
            width: "min(50vw, 600px)",
            height: "min(50vw, 600px)",
            filter: "blur(120px)",
          }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-[10%] bottom-[-10%] rounded-full"
          animate={{ backgroundColor: `${step.accent}14` }}
          transition={{ duration: 0.7 }}
          style={{
            width: "min(40vw, 480px)",
            height: "min(40vw, 480px)",
            filter: "blur(120px)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
          {/* Left: copy */}
          <div className="flex flex-col">
            {/* Step rail */}
            <div className="mb-10 flex items-center gap-3">
              {STEPS.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      backgroundColor:
                        i === activeStep
                          ? s.accent
                          : i < activeStep
                          ? `${s.accent}55`
                          : "rgba(44,34,24,0.12)",
                      scale: i === activeStep ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-[0.7rem] font-bold text-white"
                  >
                    {i + 1}
                  </motion.div>
                  {i < STEPS.length - 1 && (
                    <motion.div
                      animate={{
                        backgroundColor:
                          i < activeStep
                            ? `${STEPS[i + 1].accent}55`
                            : "rgba(44,34,24,0.1)",
                      }}
                      className="h-[2px] w-10 rounded-full"
                    />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`cat-${activeStep}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
                style={{ color: step.accent }}
              >
                {step.category}
              </motion.p>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 28 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{
                    backgroundColor: `${step.accent}1A`,
                    border: `1.5px solid ${step.accent}40`,
                  }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    style={{ color: step.accent }}
                  />
                </div>
                <h2 className="mb-5 font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-ink">
                  {step.title}
                </h2>
                <p className="max-w-[420px] text-[1rem] leading-[1.75] text-ink-secondary">
                  {step.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: animated graphic */}
          <motion.div
            style={{ y: graphicY }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] rounded-3xl border border-[rgba(44,34,24,0.06)] bg-white/85 p-6 shadow-[0_20px_60px_rgba(44,34,24,0.08)] backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`g-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -12 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex w-full justify-center"
                >
                  <StepGraphic index={activeStep} accent={step.accent} />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
