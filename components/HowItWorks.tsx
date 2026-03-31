"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: 1,
    title: "Tell us about yourself",
    description:
      "Answer a quick, tap-friendly questionnaire about your education, experience, interests, strengths, constraints, target income, working style, and daily pace. It takes less than 5 minutes — mostly tapping, not typing.",
    detail:
      "PathBuild collects what actually matters: what energizes you, what you are good at, your practical constraints (time, budget, location, family), and how much time you can commit each day (30 or 60 minutes). No right or wrong answers.",
  },
  {
    number: 2,
    title: "AI matches you to realistic career paths",
    description:
      "Our AI cross-references your profile against thousands of career paths, market data, salary trends, and success patterns to surface your best-fit matches — including options you may never have considered.",
    detail:
      "Each match comes with a suitability score, difficulty rating, salary range, and a clear breakdown of why it fits your profile. Compare paths side by side and explore what each role actually involves day-to-day.",
  },
  {
    number: 3,
    title: "Pick your target role and get your roadmap",
    description:
      "Choose the career path that excites you most. PathBuild creates a role-specific roadmap broken into stages, requirement areas, and actionable steps — so you always know what comes next.",
    detail:
      "Your roadmap shows every skill, credential, and experience your target role requires. See what you have already covered, what is in progress, and what is still ahead. Stages unlock as you progress, just like levels in a game.",
  },
  {
    number: 4,
    title: "Complete one daily mission",
    description:
      "Every day, PathBuild gives you one focused mission — a guided, step-by-step task designed to build real progress toward your target role. Open the app, do your mission, close the app. That is it.",
    detail:
      "Missions take 30–60 minutes depending on your pace setting. Each mission has a brief, micro-steps to check off, and a completion review. Short on time? Quick Win missions keep your streak alive with a lighter touch.",
  },
  {
    number: 5,
    title: "Build proof, track readiness, get hired",
    description:
      "As you complete missions, your readiness percentage grows. Completed work automatically becomes resume bullet points and LinkedIn copy. Track applications, analyze job postings, and get weekly AI coaching.",
    detail:
      "PathBuild is not a one-time assessment — it is your daily career companion. Weekly recaps, monthly reviews, blocker analysis, and an adaptive AI coach keep you on track until you land the role.",
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
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            Five steps from lost
            <br />
            to hire-ready
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Choose a role, do one mission a day, build proof, get hired.
            The process is simple, guided, and designed to fit into your life.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-[23px] md:left-[31px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/30 via-secondary/20 to-gold/15" />

          <div className="space-y-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 shrink-0 w-[48px] h-[48px] md:w-[64px] md:h-[64px] rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-[0_4px_16px_rgba(255,138,108,0.25)]">
                    <span className="text-white font-extrabold text-base md:text-lg">
                      {step.number}
                    </span>
                  </div>
                  <div className="pt-1 md:pt-3">
                    <h3 className="text-[17px] md:text-lg font-bold text-navy-900 mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-navy-500 mb-1.5">
                      {step.description}
                    </p>
                    <p className="text-[13px] leading-[1.7] text-navy-400">
                      {step.detail}
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
