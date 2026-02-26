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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
            Everything you need to
            <br />
            design your career
          </h2>
          <p className="mt-5 text-lg text-navy-500 max-w-2xl mx-auto">
            PathBuild combines AI analysis with actionable planning to help you
            move from uncertainty to clarity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="group rounded-3xl border border-warm-200 bg-card p-8 lg:p-10 transition-all hover:shadow-warm-lg hover:border-warm-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-5 group-hover:from-accent/15 group-hover:to-accent/10 transition-colors">
                  <feature.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-navy-500">
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
