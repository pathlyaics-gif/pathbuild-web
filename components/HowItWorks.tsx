"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: 1,
    title: "Tell us about yourself",
    description:
      "Answer guided questions about your interests, skills, values, constraints, and career goals. It takes less than 5 minutes.",
  },
  {
    number: 2,
    title: "AI analyzes your profile",
    description:
      "Our AI engine cross-references your answers against thousands of career paths, market data, and success patterns to find your best matches.",
  },
  {
    number: 3,
    title: "Receive your career roadmap",
    description:
      "Get a personalized report with your top career matches, suitability scores, difficulty levels, and a clear path forward for each option.",
  },
  {
    number: 4,
    title: "Follow your step-by-step guide",
    description:
      "Each career path comes with a detailed action plan broken into weekly micro-steps. Start building toward your future today.",
  },
  {
    number: 5,
    title: "Track progress and adjust",
    description:
      "Monitor your streaks, completed steps, and milestones. Adjust your plan as you learn and grow. Your roadmap evolves with you.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
            Five steps to clarity
          </h2>
          <p className="mt-5 text-lg text-navy-500 max-w-2xl mx-auto">
            From answering a few questions to following your personalized roadmap
            — the process is simple and guided.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-lg shadow-accent/20">
                    <span className="text-white font-bold text-lg md:text-xl">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1 md:pt-3">
                    <h3 className="text-lg md:text-xl font-semibold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-navy-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
