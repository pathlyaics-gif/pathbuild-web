"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "PathBuild gave me the clarity I was missing. I spent months overthinking my career change, and in 5 minutes I had a real plan.",
    initial: "S",
    name: "Sarah K.",
    role: "Career Changer",
  },
  {
    quote:
      "The step-by-step roadmap made everything feel achievable. I went from confused to confident in my direction within a week.",
    initial: "M",
    name: "Marcus T.",
    role: "Recent Graduate",
  },
  {
    quote:
      "I was skeptical about AI career advice, but PathBuild was genuinely insightful. The suitability breakdown helped me understand why certain paths fit me.",
    initial: "P",
    name: "Priya N.",
    role: "Mid-Career Professional",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-accent uppercase tracking-[0.15em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight text-navy-900 leading-[1.15]">
            Trusted by career builders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <div className="rounded-2xl border border-warm-200/80 bg-white p-8 lg:p-9 h-full flex flex-col">
                <svg
                  className="w-8 h-8 text-accent/15 mb-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-[14px] leading-[1.75] text-navy-600 mb-8 flex-1 font-light">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-warm-200/60">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center">
                    <span className="text-xs font-semibold text-accent">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-navy-900">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-navy-400 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
