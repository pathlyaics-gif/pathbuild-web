"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
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
};

const VISUALS: StepVisual[] = [
  {
    icon: LayoutList,
    bgColor: "#1A1410",
    orb1: "rgba(232,115,74,0.55)",
    orb2: "rgba(255,160,100,0.3)",
    accent: "#E8734A",
    category: "Tracker",
  },
  {
    icon: Mail,
    bgColor: "#0D1B2A",
    orb1: "rgba(56,182,255,0.5)",
    orb2: "rgba(100,210,255,0.25)",
    accent: "#38B6FF",
    category: "Gmail",
  },
  {
    icon: Bell,
    bgColor: "#1A1200",
    orb1: "rgba(255,200,50,0.6)",
    orb2: "rgba(255,160,0,0.3)",
    accent: "#FFC832",
    category: "Notifications",
  },
  {
    icon: Sparkles,
    bgColor: "#0F0A1F",
    orb1: "rgba(160,100,255,0.55)",
    orb2: "rgba(200,150,255,0.28)",
    accent: "#A064FF",
    category: "Role Match",
  },
  {
    icon: Building2,
    bgColor: "#0A1A0F",
    orb1: "rgba(60,200,120,0.55)",
    orb2: "rgba(100,220,160,0.25)",
    accent: "#3CC878",
    category: "Company Match",
  },
  {
    icon: Zap,
    bgColor: "#001A1A",
    orb1: "rgba(0,220,200,0.55)",
    orb2: "rgba(50,240,220,0.25)",
    accent: "#00DCC8",
    category: "Fit Analyzer",
  },
  {
    icon: BarChart3,
    bgColor: "#1A0A00",
    orb1: "rgba(255,120,40,0.55)",
    orb2: "rgba(255,180,80,0.28)",
    accent: "#FF7828",
    category: "Pipeline",
  },
  {
    icon: Shield,
    bgColor: "#080808",
    orb1: "rgba(255,255,255,0.28)",
    orb2: "rgba(200,200,200,0.14)",
    accent: "#FFFFFF",
    category: "Privacy",
  },
];

const STEPS = FEATURE_CARDS.map((card, i) => ({ ...card, ...VISUALS[i] }));

export function ScrollDrivenFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Orb 1: large, starts top-right, drifts toward bottom-left
  const orb1X = useTransform(scrollYProgress, [0, 1], [60, -80]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-80, 140]);
  const orb1Scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1, 1.5, 1.2, 0.9]);

  // Orb 2: medium, starts bottom-left, drifts toward top-right
  const orb2X = useTransform(scrollYProgress, [0, 1], [-80, 140]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [120, -60]);

  // Orb 3: small center bloom, pulses
  const orb3Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.4, 0.8]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActiveStep(Math.min(STEPS.length - 1, Math.floor(latest * STEPS.length)));
  });

  const step = STEPS[activeStep];
  const Icon = step.icon;

  return (
    // Outer container creates the scroll height — inner panel is sticky
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "500vh" }}
      aria-label="Feature showcase — scroll to explore"
    >
      {/* Sticky full-viewport panel */}
      <motion.div
        className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden"
        animate={{ backgroundColor: step.bgColor }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Orb 1 — large, top-right */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          animate={{ backgroundColor: step.orb1 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            width: "min(55vw, 650px)",
            height: "min(55vw, 650px)",
            right: "-5%",
            top: "-5%",
            filter: "blur(140px)",
            x: orb1X,
            y: orb1Y,
            scale: orb1Scale,
          }}
        />

        {/* Orb 2 — medium, bottom-left */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          animate={{ backgroundColor: step.orb2 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            width: "min(40vw, 480px)",
            height: "min(40vw, 480px)",
            left: "-5%",
            bottom: "0%",
            filter: "blur(110px)",
            x: orb2X,
            y: orb2Y,
          }}
        />

        {/* Orb 3 — small central bloom, breathes */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            backgroundColor: step.orb1,
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            backgroundColor: { duration: 0.9 },
            opacity: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            width: "min(30vw, 360px)",
            height: "min(30vw, 360px)",
            filter: "blur(120px)",
            scale: orb3Scale,
          }}
        />

        {/* Main content */}
        <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-8 text-center">

          {/* Progress dots */}
          <div className="mb-10 flex items-center gap-[7px]">
            {STEPS.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === activeStep ? 28 : 6,
                  backgroundColor:
                    i === activeStep
                      ? step.accent
                      : i < activeStep
                      ? `${step.accent}55`
                      : "rgba(255,255,255,0.2)",
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: 6, borderRadius: 3 }}
              />
            ))}
          </div>

          {/* Category label — crossfades per step */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`cat-${activeStep}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.22em]"
              style={{ color: step.accent }}
            >
              {step.category}
            </motion.p>
          </AnimatePresence>

          {/* Icon + title + body — crossfade together */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -22, scale: 0.96 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Icon container */}
              <div
                className="mb-8 flex items-center justify-center rounded-[28px]"
                style={{
                  width: 96,
                  height: 96,
                  backgroundColor: `${step.accent}18`,
                  border: `1.5px solid ${step.accent}40`,
                  boxShadow: `0 0 52px ${step.accent}22`,
                }}
              >
                <Icon size={46} strokeWidth={1.5} style={{ color: step.accent }} />
              </div>

              {/* Title */}
              <h2 className="mb-5 font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.12] tracking-[-0.025em] text-white">
                {step.title}
              </h2>

              {/* Body */}
              <p className="max-w-[460px] text-[1rem] leading-[1.78] text-white/55">
                {step.body}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Scroll hint — only first step */}
          <motion.div
            className="mt-12 flex flex-col items-center gap-2"
            animate={{ opacity: activeStep === 0 ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden
          >
            <motion.span
              className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/30"
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll to explore
            </motion.span>
            <motion.div
              className="flex h-[22px] w-[14px] items-start justify-center rounded-full border border-white/20 pt-[4px]"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="h-[6px] w-[2px] rounded-full bg-white/40"
                animate={{ y: [0, 5, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Step counter — bottom right */}
        <div className="absolute bottom-8 right-8 font-mono text-[0.75rem] tabular-nums text-white/25">
          {String(activeStep + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(STEPS.length).padStart(2, "0")}
        </div>
      </motion.div>
    </div>
  );
}
