"use client";

import { motion } from "framer-motion";
import {
  Target,
  Map,
  ListChecks,
  Flame,
  Briefcase,
  FileText,
  MessageCircle,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Target,
    title: "Daily Mission System",
    description:
      "Every day, PathBuild gives you one focused mission tailored to your target role and current progress. Complete it in 30–60 minutes. No guesswork, no overwhelm — just one meaningful task that moves you forward. Build streaks, earn momentum, and watch your readiness grow.",
  },
  {
    icon: Map,
    title: "Role-Specific Roadmap",
    description:
      "Your career path is broken into clear stages, requirement areas, and actionable steps. See exactly what your target role demands, what you have already covered, and what is still ahead. Each stage unlocks as you progress — like levels in a game, but for your career.",
  },
  {
    icon: BarChart3,
    title: "Readiness & Progress Tracking",
    description:
      "Track your readiness percentage, velocity, coverage, and streaks in real time. Weekly and monthly recaps show your growth, highlight strengths and blockers, and keep you accountable. You always know how close you are to being hire-ready.",
  },
  {
    icon: FileText,
    title: "Proof Builder (Resume & LinkedIn)",
    description:
      "Every completed mission and milestone becomes hire-ready proof. PathBuild turns your actual progress into polished resume bullet points and LinkedIn copy. No more making things up — your proof is built from real work you have done.",
  },
  {
    icon: Briefcase,
    title: "Job Posting Analyzer",
    description:
      "Paste any job posting and instantly see how well it matches your skills and roadmap. Get a breakdown of requirements you meet, gaps to close, and specific steps to become a stronger candidate. Apply smarter, not just more.",
  },
  {
    icon: ListChecks,
    title: "Application Tracker & Pipeline",
    description:
      "Track every application in one place — from target companies to interviews. See your pipeline at a glance, manage statuses, and keep your job search organized alongside your career-building progress.",
  },
  {
    icon: MessageCircle,
    title: "Weekly AI Coaching",
    description:
      "A personalized AI coach checks in weekly, adapts to your pace and blockers, and gives you targeted advice. Think of it as a career mentor who knows your full journey and always has something useful to say.",
  },
  {
    icon: Flame,
    title: "Interview Prep & Quick Wins",
    description:
      "Generate role-specific interview question banks to practice with. Plus, on days when time is short, Quick Win missions give you a lighter way to keep your streak alive and maintain momentum without the full session.",
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
            get hired
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-2xl mx-auto leading-relaxed">
            PathBuild is not another career quiz or generic to-do app. It is a
            complete career execution system — daily missions, readiness
            tracking, proof building, and real tools that take you from
            &ldquo;I don&rsquo;t know what to do&rdquo; to hired.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <div className="group rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-10 transition-all duration-300 hover:shadow-warm hover:border-warm-200 h-full">
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
