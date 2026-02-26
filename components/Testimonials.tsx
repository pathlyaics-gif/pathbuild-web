"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
            Trusted by career builders
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="rounded-3xl border border-warm-200 bg-card p-8 lg:p-10 h-full flex flex-col">
                <Quote
                  size={28}
                  className="text-accent/20 mb-4 shrink-0"
                />
                <blockquote className="text-[15px] leading-relaxed text-navy-600 mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-warm-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-navy-400">{t.role}</p>
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
