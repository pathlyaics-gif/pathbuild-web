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
import {
  LayoutList,
  Mail,
  Bell,
  Sparkles,
  Building2,
  Zap,
  BarChart3,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { FEATURE_CARDS } from "@/lib/site";

type StepVisual = {
  icon: LucideIcon;
  bgColor: string;
  orb1: string;
  orb2: string;
  accent: string;
  category: string;
  badge1Label: string;
  badge1Value: string;
  badge2Label: string;
  badge2Value: string;
};

const VISUALS: StepVisual[] = [
  {
    icon: LayoutList,
    bgColor: "#0F0B08",
    orb1: "rgba(232,115,74,0.5)",
    orb2: "rgba(255,170,110,0.22)",
    accent: "#E8734A",
    category: "Tracker",
    badge1Label: "Applications",
    badge1Value: "12 Active",
    badge2Label: "Follow-ups",
    badge2Value: "3 Due",
  },
  {
    icon: Mail,
    bgColor: "#080E18",
    orb1: "rgba(56,182,255,0.45)",
    orb2: "rgba(100,210,255,0.18)",
    accent: "#38B6FF",
    category: "Gmail",
    badge1Label: "Inbox",
    badge1Value: "Watching",
    badge2Label: "Auto-tagged",
    badge2Value: "7 emails",
  },
  {
    icon: Bell,
    bgColor: "#110C00",
    orb1: "rgba(255,200,50,0.55)",
    orb2: "rgba(255,155,0,0.22)",
    accent: "#FFC832",
    category: "Notifications",
    badge1Label: "Unread",
    badge1Value: "2 Alerts",
    badge2Label: "Next",
    badge2Value: "Interview",
  },
  {
    icon: Sparkles,
    bgColor: "#0A0716",
    orb1: "rgba(155,95,255,0.5)",
    orb2: "rgba(200,150,255,0.2)",
    accent: "#A064FF",
    category: "Role Match",
    badge1Label: "Fit Score",
    badge1Value: "88%",
    badge2Label: "New matches",
    badge2Value: "14 today",
  },
  {
    icon: Building2,
    bgColor: "#07120A",
    orb1: "rgba(55,195,115,0.5)",
    orb2: "rgba(100,225,155,0.18)",
    accent: "#3CC878",
    category: "Company Match",
    badge1Label: "Top match",
    badge1Value: "97% Stripe",
    badge2Label: "Saved",
    badge2Value: "8 companies",
  },
  {
    icon: Zap,
    bgColor: "#001414",
    orb1: "rgba(0,215,195,0.5)",
    orb2: "rgba(50,240,215,0.18)",
    accent: "#00DCC8",
    category: "Fit Analyzer",
    badge1Label: "Requirements",
    badge1Value: "3 of 5 met",
    badge2Label: "Verdict",
    badge2Value: "Good fit",
  },
  {
    icon: BarChart3,
    bgColor: "#110700",
    orb1: "rgba(255,115,35,0.5)",
    orb2: "rgba(255,180,75,0.2)",
    accent: "#FF7828",
    category: "Pipeline",
    badge1Label: "This week",
    badge1Value: "4 Applied",
    badge2Label: "Pending",
    badge2Value: "6 Replies",
  },
  {
    icon: Shield,
    bgColor: "#060606",
    orb1: "rgba(255,255,255,0.22)",
    orb2: "rgba(210,210,210,0.1)",
    accent: "#FFFFFF",
    category: "Privacy",
    badge1Label: "Access",
    badge1Value: "Read-only",
    badge2Label: "Stored",
    badge2Value: "0 bodies",
  },
];

const STEPS = FEATURE_CARDS.map((card, i) => ({ ...card, ...VISUALS[i] }));

// Unique phone screen UI for each feature step
function ScreenMiniUI({ index, accent }: { index: number; accent: string }) {
  switch (index) {
    case 0:
      return (
        <div className="w-full space-y-[5px]">
          {[["Saved", "5"], ["Applied", "8"], ["Interview", "3"], ["Offer", "1"]].map(
            ([label, count]) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg px-3 py-2"
                style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-[6px] w-[6px] rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="text-[10px] text-white/55">{label}</span>
                </div>
                <span
                  className="font-mono text-[10px] font-bold"
                  style={{ color: accent }}
                >
                  {count}
                </span>
              </div>
            )
          )}
        </div>
      );

    case 1:
      return (
        <div
          className="w-full rounded-2xl p-3"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: `1px solid ${accent}30`,
          }}
        >
          <div className="flex items-start gap-2.5">
            <div
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px]"
              style={{ backgroundColor: `${accent}22` }}
            >
              ✉
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold text-white/80">
                Google Careers
              </p>
              <p className="truncate text-[9px] text-white/45">
                Interview invitation · Software Eng...
              </p>
              <div className="mt-1.5 flex items-center gap-1">
                <div
                  className="h-[5px] w-[5px] rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <span
                  className="text-[8px] font-bold uppercase tracking-wider"
                  style={{ color: accent }}
                >
                  Recruiter detected
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="w-full space-y-2">
          {[
            { title: "Interview Tomorrow", sub: "Google · 2:00 PM" },
            { title: "Offer Received 🎉", sub: "Stripe · View details" },
          ].map(({ title, sub }) => (
            <div
              key={title}
              className="flex items-center gap-2.5 rounded-2xl p-3"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-sm"
                style={{ backgroundColor: `${accent}22` }}
              >
                🔔
              </div>
              <div>
                <p className="text-[10px] font-semibold text-white/85">{title}</p>
                <p className="text-[9px] text-white/45">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case 3:
      return (
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg width="82" height="82" viewBox="0 0 82 82">
              <circle
                cx="41"
                cy="41"
                r="32"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="6"
              />
              <circle
                cx="41"
                cy="41"
                r="32"
                fill="none"
                stroke={accent}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${0.88 * 2 * Math.PI * 32} ${2 * Math.PI * 32}`}
                strokeDashoffset={`${0.25 * 2 * Math.PI * 32}`}
                transform="rotate(-90 41 41)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[18px] font-bold text-white">88</span>
              <span className="text-[8px] text-white/50">fit score</span>
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            {["Skills ✓", "Location ✓", "Salary ✓"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2 py-0.5 text-[8px] font-semibold"
                style={{ backgroundColor: `${accent}20`, color: accent }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className="w-full space-y-2">
          {[
            { name: "Stripe", match: "97%", tag: "Fintech" },
            { name: "Linear", match: "92%", tag: "Productivity" },
            { name: "Vercel", match: "89%", tag: "DevTools" },
          ].map(({ name, match, tag }) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-xl px-3 py-2.5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-7 w-7 rounded-lg"
                  style={{ backgroundColor: `${accent}22` }}
                />
                <div>
                  <p className="text-[10px] font-semibold text-white/80">{name}</p>
                  <p className="text-[9px] text-white/40">{tag}</p>
                </div>
              </div>
              <span className="text-[10px] font-bold" style={{ color: accent }}>
                {match}
              </span>
            </div>
          ))}
        </div>
      );

    case 5:
      return (
        <div
          className="w-full rounded-2xl p-3"
          style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
        >
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-white/40">
            Job Posting
          </p>
          <div className="space-y-1.5">
            {[
              { w: "100%", hit: true },
              { w: "80%", hit: true },
              { w: "95%", hit: false },
              { w: "70%", hit: true },
              { w: "88%", hit: false },
            ].map(({ w, hit }, i) => (
              <div
                key={i}
                className="h-[5px] rounded-full"
                style={{
                  width: w,
                  backgroundColor: hit ? `${accent}50` : "rgba(255,255,255,0.09)",
                }}
              />
            ))}
          </div>
          <div className="mt-2.5 flex items-center gap-1">
            <div
              className="h-[5px] w-[5px] rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span
              className="text-[8px] font-bold"
              style={{ color: accent }}
            >
              3 of 5 requirements met
            </span>
          </div>
        </div>
      );

    case 6:
      return (
        <div className="w-full">
          <div className="flex h-14 items-end gap-[5px]">
            {[65, 40, 85, 50, 75, 30, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  backgroundColor: i === 2 ? accent : `${accent}30`,
                }}
              />
            ))}
          </div>
          <div className="mb-2 mt-1 flex justify-between">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <span
                key={i}
                className="flex-1 text-center text-[8px] text-white/30"
              >
                {d}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {[
              ["Total", "47"],
              ["Active", "12"],
              ["Closed", "6"],
            ].map(([label, val]) => (
              <div key={label}>
                <p className="text-[8px] text-white/40">{label}</p>
                <p className="text-[13px] font-bold text-white">{val}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 7:
      return (
        <div className="w-full space-y-2.5">
          {[
            "Read-only Gmail access",
            "No email bodies stored",
            "Encrypted at rest",
            "Delete your data anytime",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <div
                className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: `${accent}22` }}
              >
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M1.5 4.5l2 2 4-4"
                    stroke={accent}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[10px] text-white/60">{item}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

export function ScrollDrivenFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phone continuously tilts from +18° → -18° as you scroll — the main visual WOW
  const rawRotateY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const phoneRotateY = useSpring(rawRotateY, { stiffness: 50, damping: 18 });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [-7, 7]);
  const phoneRotateX = useSpring(rawRotateX, { stiffness: 50, damping: 18 });

  // Gentle vertical float driven by scroll
  const rawPhoneY = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  const phoneY = useSpring(rawPhoneY, { stiffness: 40, damping: 14 });

  // Floating badge parallax — drift independently as user scrolls
  const badge1Y = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const badge1X = useTransform(scrollYProgress, [0, 1], [0, 14]);
  const badge2Y = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const badge2X = useTransform(scrollYProgress, [0, 1], [0, -12]);

  // Background orbs drift across viewport
  const orb1Left = useTransform(scrollYProgress, [0, 1], ["62%", "12%"]);
  const orb1Top = useTransform(scrollYProgress, [0, 1], ["-18%", "52%"]);
  const orb2Left = useTransform(scrollYProgress, [0, 1], ["-12%", "62%"]);
  const orb2Top = useTransform(scrollYProgress, [0, 1], ["58%", "-10%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveStep(Math.min(STEPS.length - 1, Math.floor(latest * STEPS.length)));
  });

  const step = STEPS[activeStep];
  const Icon = step.icon;

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "500vh" }}
      aria-label="Feature showcase — scroll to explore"
    >
      {/* Sticky viewport panel — stays locked while page scrolls */}
      <motion.div
        className="sticky top-0 flex h-screen w-full items-center overflow-hidden"
        animate={{ backgroundColor: step.bgColor }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Orb 1 */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          animate={{ backgroundColor: step.orb1 }}
          transition={{ duration: 0.9 }}
          style={{
            width: "min(52vw, 600px)",
            height: "min(52vw, 600px)",
            left: orb1Left,
            top: orb1Top,
            filter: "blur(130px)",
          }}
        />

        {/* Orb 2 */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          animate={{ backgroundColor: step.orb2 }}
          transition={{ duration: 0.9 }}
          style={{
            width: "min(36vw, 440px)",
            height: "min(36vw, 440px)",
            left: orb2Left,
            top: orb2Top,
            filter: "blur(110px)",
          }}
        />

        {/* Two-column layout: text left, phone right */}
        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-8 lg:grid-cols-2 lg:gap-16 lg:px-16">

          {/* ── Left: text content ── */}
          <div className="order-2 flex flex-col lg:order-1">

            {/* Progress dots */}
            <div className="mb-8 flex items-center gap-[7px]">
              {STEPS.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === activeStep ? 28 : 6,
                    backgroundColor:
                      i === activeStep
                        ? step.accent
                        : i < activeStep
                        ? `${step.accent}50`
                        : "rgba(255,255,255,0.2)",
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: 6, borderRadius: 3 }}
                />
              ))}
            </div>

            {/* Category label */}
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

            {/* Title + body — slide in from left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 28 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="mb-5 font-serif text-[clamp(1.75rem,3vw,2.8rem)] leading-[1.12] tracking-[-0.025em] text-white">
                  {step.title}
                </h2>
                <p className="max-w-[400px] text-[0.98rem] leading-[1.78] text-white/55">
                  {step.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Scroll hint — fades out after first step */}
            <motion.div
              className="mt-10 flex items-center gap-2.5"
              animate={{ opacity: activeStep === 0 ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              aria-hidden
            >
              <motion.div
                className="flex h-[22px] w-[14px] items-start justify-center rounded-full border border-white/20 pt-1"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  className="h-[6px] w-[2px] rounded-full bg-white/40"
                  animate={{ y: [0, 5, 0], opacity: [1, 0.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/28">
                Scroll to explore
              </span>
            </motion.div>
          </div>

          {/* ── Right: phone mockup ── */}
          <div
            className="order-1 flex justify-center lg:order-2"
            style={{ perspective: "1400px" }}
          >
            <div className="relative">

              {/* Floating badge 1 — top-left of phone */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`b1-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.82 }}
                  transition={{ duration: 0.38, delay: 0.12 }}
                  style={{
                    y: badge1Y,
                    x: badge1X,
                    position: "absolute",
                    left: "-64px",
                    top: "56px",
                    zIndex: 20,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.13)",
                    borderRadius: 16,
                    padding: "10px 14px",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    minWidth: 100,
                  }}
                >
                  <p className="text-[9px] text-white/45">{step.badge1Label}</p>
                  <p className="mt-0.5 text-[15px] font-bold text-white">{step.badge1Value}</p>
                </motion.div>
              </AnimatePresence>

              {/* Floating badge 2 — bottom-right of phone */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`b2-${activeStep}`}
                  initial={{ opacity: 0, scale: 0.82 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.82 }}
                  transition={{ duration: 0.38, delay: 0.2 }}
                  style={{
                    y: badge2Y,
                    x: badge2X,
                    position: "absolute",
                    right: "-56px",
                    bottom: "100px",
                    zIndex: 20,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.13)",
                    borderRadius: 16,
                    padding: "10px 14px",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                    minWidth: 100,
                  }}
                >
                  <p className="text-[9px] text-white/45">{step.badge2Label}</p>
                  <p
                    className="mt-0.5 text-[15px] font-bold"
                    style={{ color: step.accent }}
                  >
                    {step.badge2Value}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* ── Phone chassis with 3D rotation ── */}
              <motion.div
                style={{
                  rotateY: phoneRotateY,
                  rotateX: phoneRotateX,
                  y: phoneY,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Outer shell */}
                <motion.div
                  className="relative overflow-hidden"
                  style={{
                    width: 230,
                    height: 470,
                    borderRadius: 46,
                    border: "2px solid rgba(255,255,255,0.14)",
                    background:
                      "linear-gradient(150deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  }}
                  animate={{
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.05), 0 0 0 1px rgba(0,0,0,0.45), 0 48px 110px rgba(0,0,0,0.7), 0 0 90px ${step.accent}18`,
                  }}
                  transition={{ duration: 0.9 }}
                >
                  {/* Screen base */}
                  <div className="absolute inset-0" style={{ backgroundColor: "#080808" }} />

                  {/* Subtle screen tint per step */}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    animate={{ backgroundColor: step.accent }}
                    transition={{ duration: 0.9 }}
                    style={{ opacity: 0.035 }}
                  />

                  {/* Dynamic Island */}
                  <div
                    className="absolute left-1/2 top-3 z-10 flex -translate-x-1/2 items-center justify-center gap-1.5"
                    style={{
                      width: 96,
                      height: 28,
                      borderRadius: 14,
                      backgroundColor: "#000",
                    }}
                  >
                    <div className="h-[7px] w-[7px] rounded-full bg-[#1c1c1c]" />
                    <div className="h-[11px] w-[11px] rounded-full bg-[#1c1c1c]" />
                  </div>

                  {/* Status bar time */}
                  <div className="absolute left-0 right-0 top-3 flex items-center justify-between px-7 pt-0.5">
                    <span className="text-[9px] font-semibold text-white/40">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="h-[3px] w-[3px] rounded-full bg-white/35" />
                      <div className="h-[3px] w-[3px] rounded-full bg-white/35" />
                      <div className="h-[3px] w-[3px] rounded-full bg-white/35" />
                    </div>
                  </div>

                  {/* Screen content area */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pb-8 pt-14">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`screen-${activeStep}`}
                        initial={{ opacity: 0, scale: 0.88, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.88, y: -14 }}
                        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                        className="flex w-full flex-col items-center"
                      >
                        {/* Feature icon */}
                        <div
                          className="mb-4 flex items-center justify-center rounded-2xl"
                          style={{
                            width: 52,
                            height: 52,
                            backgroundColor: `${step.accent}20`,
                            border: `1.5px solid ${step.accent}40`,
                            boxShadow: `0 0 28px ${step.accent}28`,
                          }}
                        >
                          <Icon
                            size={24}
                            strokeWidth={1.5}
                            style={{ color: step.accent }}
                          />
                        </div>

                        {/* Per-step mini UI */}
                        <ScreenMiniUI index={activeStep} accent={step.accent} />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Home indicator */}
                  <div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                    style={{
                      width: 100,
                      height: 4,
                      backgroundColor: "rgba(255,255,255,0.25)",
                    }}
                  />

                  {/* Side button (power) */}
                  <div
                    className="absolute -right-[2px] top-28 rounded-r-sm"
                    style={{
                      width: 3,
                      height: 58,
                      backgroundColor: "rgba(255,255,255,0.12)",
                    }}
                  />

                  {/* Volume buttons */}
                  <div
                    className="absolute -left-[2px] top-[88px] rounded-l-sm"
                    style={{
                      width: 3,
                      height: 22,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  />
                  <div
                    className="absolute -left-[2px] top-[120px] rounded-l-sm"
                    style={{
                      width: 3,
                      height: 36,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  />
                  <div
                    className="absolute -left-[2px] top-[164px] rounded-l-sm"
                    style={{
                      width: 3,
                      height: 36,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                  />

                  {/* Screen edge highlight */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[44px]"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, transparent 100%)",
                    }}
                  />
                </motion.div>

                {/* Ground glow under the phone */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full"
                  animate={{ backgroundColor: step.accent }}
                  transition={{ duration: 0.9 }}
                  style={{
                    width: 160,
                    height: 24,
                    filter: "blur(18px)",
                    opacity: 0.28,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Step counter — bottom right */}
        <div className="absolute bottom-8 right-8 font-mono text-[0.75rem] tabular-nums text-white/22">
          {String(activeStep + 1).padStart(2, "0")}&thinsp;/&thinsp;
          {String(STEPS.length).padStart(2, "0")}
        </div>
      </motion.div>
    </div>
  );
}
