import type { Metadata } from "next";
import {
  UserCircle,
  Mail,
  LayoutList,
  Sparkles,
  Bell,
} from "lucide-react";
import { APP_STORE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works — PathBuild",
  description:
    "Five steps to an organized job search. Connect Gmail, auto-import applications, get AI-matched roles and companies, and never miss a recruiter reply.",
};

const STEPS = [
  {
    icon: UserCircle,
    number: 1,
    title: "Tell us what you're looking for",
    description:
      "Answer a quick questionnaire about your skills, experience, target roles, salary range, location, and preferences. Takes less than 5 minutes — mostly tapping and selecting.",
    detail:
      "PathBuild collects what matters for matching and tracking: your skills, experience level, target roles, salary expectations, location preferences, and work style. No right or wrong answers — just honest input about what you want.",
  },
  {
    icon: Mail,
    number: 2,
    title: "Connect your Gmail",
    description:
      "Link Gmail with read-only OAuth. PathBuild scans for recruiter emails and auto-imports applications, interview invites, offers, and rejections into your pipeline.",
    detail:
      "We use read-only Gmail access (gmail.readonly scope) — we can read but never send or modify emails. PathBuild detects emails from recruiters and hiring platforms, parses sender and subject to identify status changes, and auto-tags them to the matching application. Full email bodies are never stored.",
  },
  {
    icon: LayoutList,
    number: 3,
    title: "Your pipeline builds itself",
    description:
      "Every application lands in one organized tracker. Drag between stages — Saved, Applied, Interview, Offer, Rejected — add notes, set follow-ups, and see your entire search at a glance.",
    detail:
      "No more spreadsheets. Your pipeline updates automatically as recruiter emails arrive. Add manual applications too. Set follow-up reminders so you never forget to check in. See upcoming interviews, pending responses, and recent activity in one dashboard.",
  },
  {
    icon: Sparkles,
    number: 4,
    title: "Discover roles & companies that fit",
    description:
      "AI surfaces matched roles and companies daily based on your profile. Each match includes a fit score, skill-gap analysis, and salary range.",
    detail:
      "This is not a generic keyword search. PathBuild analyzes your unique profile against thousands of open roles and companies — including options you may never have considered. Compare matches side by side, save interesting ones, and track companies before they post.",
  },
  {
    icon: Bell,
    number: 5,
    title: "Apply smarter, stay on top",
    description:
      "Use the fit analyzer before you apply. Track every response in one place. Get push notifications so you never miss an interview invite or offer letter again.",
    detail:
      "Paste any job posting for instant fit analysis. When you apply, PathBuild tracks it. When the company responds, Gmail auto-updates your pipeline and you get a push notification. Follow-up reminders keep you proactive. Your entire job search, organized.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-36 pb-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            How It Works
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            From scattered to
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
              organized in 5 steps
            </span>
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Connect Gmail. Auto-import applications. Get matched to roles and
            companies. Never miss a recruiter reply again.
          </p>
        </div>

        <div className="space-y-5">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-10 transition-all duration-300 hover:shadow-warm hover:border-warm-200"
            >
              <div className="flex gap-6 md:gap-8">
                <div className="shrink-0 w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-[0_4px_16px_rgba(255,138,108,0.25)]">
                  <span className="text-white font-extrabold text-lg">
                    {step.number}
                  </span>
                </div>
                <div className="pt-0.5">
                  <div className="flex items-center gap-3 mb-2.5">
                    <step.icon
                      size={18}
                      className="text-accent"
                      strokeWidth={1.8}
                    />
                    <h3 className="text-[17px] font-bold text-navy-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-navy-500 mb-2">
                    {step.description}
                  </p>
                  <p className="text-[13px] leading-[1.7] text-navy-400">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-warm-200/80 bg-card p-8 lg:p-10">
          <h2 className="text-xl font-extrabold text-navy-900 mb-4">
            The core loop
          </h2>
          <div className="space-y-3 text-[14px] leading-[1.75] text-navy-500">
            <p>
              PathBuild runs in the background — watching your inbox, updating
              your pipeline, and surfacing new opportunities:
            </p>
            <div className="bg-gradient-to-r from-accent/[0.06] to-secondary/[0.04] rounded-xl p-5">
              <p className="text-[14px] font-bold text-navy-700 text-center">
                Connect Gmail → Auto-log emails → Track pipeline → Get notified →
                Discover matches → Land the role
              </p>
            </div>
            <p>Here is what a typical day looks like with PathBuild:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-navy-700">Morning:</strong> Check your
                pipeline. See any overnight recruiter emails that auto-imported.
                Review new role and company matches.
              </li>
              <li>
                <strong className="text-navy-700">During the day:</strong>{" "}
                Apply to a matched role. PathBuild tracks it. Get a push
                notification when the company responds.
              </li>
              <li>
                <strong className="text-navy-700">Evening:</strong> Follow-up
                reminders surface. Update notes. Your pipeline is always current
                — no manual logging required.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 rounded-2xl bg-gradient-to-br from-sunrise-from to-sunrise-to p-10 lg:p-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-4">
            Ready to organize your job search?
          </h2>
          <p className="text-navy-500 max-w-lg mx-auto mb-8 text-[15px] leading-relaxed">
            Download PathBuild, connect Gmail, and let every recruiter email
            auto-log to your pipeline.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-navy-900 text-white px-6 py-3 text-sm font-bold hover:bg-navy-800 transition-colors shadow-warm-lg"
          >
            Download PathBuild
          </a>
        </div>
      </div>
    </div>
  );
}
