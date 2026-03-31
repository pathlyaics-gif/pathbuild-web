"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "I spent months overthinking my career change, and PathBuild gave me a clear target role in 5 minutes. The daily missions made it real — I actually started doing things instead of just thinking about them.",
    initial: "S",
    name: "Sarah K.",
    role: "Career Changer",
  },
  {
    quote:
      "As a recent grad, I had no idea what to do. PathBuild matched me to a role I had not even considered, broke it into stages, and gave me one task a day. I went from confused to confident within two weeks.",
    initial: "M",
    name: "Marcus T.",
    role: "Recent Graduate",
  },
  {
    quote:
      "The readiness tracking is what sold me. I can actually see my progress going up. And the proof builder turned my completed steps into resume bullets — my resume has never looked this strong.",
    initial: "P",
    name: "Priya N.",
    role: "Mid-Career Professional",
  },
  {
    quote:
      "As a single mom going back to work, I needed something realistic. PathBuild understood my constraints and gave me missions I could actually do in 30 minutes. The streaks keep me motivated every single day.",
    initial: "J",
    name: "Jessica L.",
    role: "Returning Professional",
  },
  {
    quote:
      "I tried career coaches at $200 a session. PathBuild's weekly AI coaching gives me better, more consistent guidance for a fraction of the cost. The job posting analyzer helped me stop applying to roles I was not ready for.",
    initial: "D",
    name: "David R.",
    role: "Tech Industry Switcher",
  },
  {
    quote:
      "The daily mission format is genius. Instead of a giant overwhelming to-do list, I just open the app, do my one thing, and close it. I have been on a 47-day streak and my readiness score keeps climbing.",
    initial: "A",
    name: "Aisha M.",
    role: "Graduate Student",
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
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            Real people, real progress
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Hear from people who stopped feeling stuck and started building
            toward their target roles — one mission at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <div className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-9 h-full flex flex-col">
                <svg
                  className="w-8 h-8 text-accent/20 mb-5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-[14px] leading-[1.75] text-navy-600 mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-warm-200/60">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-secondary/15 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-navy-900">
                      {t.name}
                    </p>
                    <p className="text-[12px] text-navy-400 font-semibold">
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
