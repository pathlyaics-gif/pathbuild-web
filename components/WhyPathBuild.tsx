"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/pathbuild/id6743108030";

const WITHOUT = [
  "Feeling lost, stuck, or unfocused about your career direction",
  "Googling career advice for months without making real progress",
  "No clear target role — just vague ideas and wishful thinking",
  "No idea what your dream job actually requires or where you stand",
  "Writing generic resumes that do not reflect real accomplishments",
  "No daily structure — you keep meaning to work on your career but never do",
  "Paying $150–$300 per session for a career coach with limited follow-through",
  "Applying to jobs randomly without knowing if you are even qualified",
];

const WITH = [
  "A specific target role matched to your strengths, values, and goals",
  "One focused daily mission that takes 30–60 minutes — no overwhelm",
  "A clear roadmap with stages, requirements, and milestones to follow",
  "Readiness tracking that shows exactly how close you are to being hire-ready",
  "Proof built from real work — resume bullets and LinkedIn copy you actually earned",
  "Streaks and momentum that keep you accountable day after day",
  "AI coaching that adapts weekly to your pace, blockers, and progress",
  "A job posting analyzer that shows your fit before you apply",
];

export function WhyPathBuild() {
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
            Why PathBuild
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            The difference between
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              stuck and hired
            </span>
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-2xl mx-auto leading-relaxed">
            Without a plan, career progress feels impossible. With PathBuild,
            you know your target role, what to do today, what you have already
            proved, and how close you are to getting hired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-10 h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-navy-300/20 px-4 py-2 text-xs font-bold text-navy-600 uppercase tracking-wider mb-8">
                Without PathBuild
              </div>
              <ul className="space-y-4">
                {WITHOUT.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-navy-300/20 flex items-center justify-center">
                      <X size={11} className="text-navy-400" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] leading-[1.6] text-navy-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-sunrise-from/50 to-sunrise-to/30 p-8 lg:p-10 h-full shadow-warm">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-xs font-bold text-accent-dark uppercase tracking-wider mb-8">
                With PathBuild
              </div>
              <ul className="space-y-4">
                {WITH.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                      <Check
                        size={11}
                        className="text-accent-dark"
                        strokeWidth={3}
                      />
                    </div>
                    <span className="text-[14px] leading-[1.6] text-navy-700 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl bg-accent/[0.08] border border-accent/[0.12] px-6 py-5">
            <p className="text-[14px] font-semibold text-navy-700 text-center sm:text-left">
              Career coaching costs $150–$300 per session.
              <span className="text-accent-dark ml-1">
                PathBuild gives you daily guidance for less than $11/month.
              </span>
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 shrink-0 rounded-full bg-navy-900 text-white px-5 py-2.5 text-[13px] font-bold hover:bg-navy-800 transition-colors"
            >
              Try It Free
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
