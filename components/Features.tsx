"use client";

import { motion } from "framer-motion";
import { Brain, Map, ListChecks, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Brain,
    title: "AI Career Discovery",
    description:
      "Answer questions about your goals, interests, and strengths. Our AI analyzes your unique profile to surface career paths you may never have considered.",
  },
  {
    icon: Map,
    title: "Personalized Roadmap",
    description:
      "Receive a tailored career roadmap with clear milestones, skill requirements, and actionable next steps designed specifically for your situation.",
  },
  {
    icon: ListChecks,
    title: "Step-by-Step Action Plan",
    description:
      "Break down your career transition into daily and weekly micro-steps. Each task is designed to move you forward without overwhelm.",
  },
  {
    icon: TrendingUp,
    title: "Goal Tracking & Progress",
    description:
      "Track your progress, maintain streaks, and adjust your plan as you grow. See how far you have come and what is next on your journey.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            Everything you need to
            <br />
            design your career
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            PathBuild combines AI analysis with actionable planning to help you
            move from uncertainty to clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="group rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-10 transition-all duration-300 hover:shadow-warm hover:border-warm-200">
                <div className="w-12 h-12 rounded-xl bg-accent/[0.1] flex items-center justify-center mb-6 group-hover:bg-accent/[0.15] transition-colors duration-300">
                  <feature.icon
                    size={22}
                    className="text-accent"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-[18px] font-bold text-navy-900 mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-navy-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
