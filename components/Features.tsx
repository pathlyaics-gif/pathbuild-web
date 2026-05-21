"use client";

import { motion } from "framer-motion";
import {
  LayoutList,
  Mail,
  Bell,
  Sparkles,
  Building2,
  Target,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: LayoutList,
    title: "Smart Application Tracker",
    description:
      "Manage every application in one pipeline — Saved, Applied, Interview, Offer, Rejected. Add notes, set follow-up reminders, and see your entire job search at a glance.",
  },
  {
    icon: Mail,
    title: "Gmail Inbox Watcher",
    description:
      "Connect Gmail with read-only access. PathBuild detects recruiter emails and auto-tags them to the right application — no manual logging required.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Get push alerts when companies respond — interview invites, offer letters, rejections, and follow-up nudges so nothing slips through the cracks.",
  },
  {
    icon: Target,
    title: "Role Match",
    description:
      "AI matches your profile against thousands of open roles with a fit score, skill-gap breakdown, and salary range. New matches surface daily.",
  },
  {
    icon: Building2,
    title: "Company Match",
    description:
      "Discover companies that fit your values, comp band, location, stage, and culture — and track them before they even post a job.",
  },
  {
    icon: Sparkles,
    title: "Job Posting Fit Analyzer",
    description:
      "Paste any job posting for instant fit analysis. See what you meet, what you're missing, and whether it's worth applying.",
  },
  {
    icon: LayoutList,
    title: "Pipeline Dashboard",
    description:
      "See your entire job search at a glance — active applications, upcoming interviews, pending follow-ups, and recent company responses.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description:
      "Read-only Gmail access. We parse sender and subject — never store full email bodies. Encrypted at rest. Delete your data anytime.",
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
            stay on top of your search
          </h2>
          <p className="mt-5 text-[16px] text-navy-500 max-w-2xl mx-auto leading-relaxed">
            PathBuild is not another spreadsheet or generic job board. It is a
            smart tracker that watches your inbox, organizes your pipeline, and
            surfaces roles and companies that fit.
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
