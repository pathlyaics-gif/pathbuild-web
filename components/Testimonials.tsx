"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "I almost missed an interview invite buried in Gmail. PathBuild caught it automatically and pushed a notification. That alone saved my job search.",
    initial: "S",
    name: "Sarah K.",
    role: "Career Changer",
  },
  {
    quote:
      "I was tracking 30+ applications in a spreadsheet. PathBuild replaced it entirely — Gmail auto-imports everything and I finally know where I stand with every company.",
    initial: "M",
    name: "Marcus T.",
    role: "Recent Graduate",
  },
  {
    quote:
      "The role match feature surfaced a position I never would have found on LinkedIn. Fit score was 92% and I got the interview within a week.",
    initial: "P",
    name: "Priya N.",
    role: "Mid-Career Professional",
  },
  {
    quote:
      "As a single mom job searching, I can't afford to miss emails. PathBuild watches my inbox and tells me the moment a company responds. Game changer.",
    initial: "J",
    name: "Jessica L.",
    role: "Returning Professional",
  },
  {
    quote:
      "I tried Huntr and Teal but PathBuild's Gmail integration is on another level. Recruiter emails just appear in my pipeline — no manual entry at all.",
    initial: "D",
    name: "David R.",
    role: "Tech Industry Switcher",
  },
  {
    quote:
      "Company match showed me 5 startups I'd never heard of that fit my profile perfectly. I tracked them all and landed an offer from one within a month.",
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
            Real people, real results
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Hear from people who stopped losing applications in their inbox and
            started tracking smarter.
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
