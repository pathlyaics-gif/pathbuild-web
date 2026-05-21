import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support — PathBuild",
  description:
    "Frequently asked questions and support for PathBuild. Get help with application tracking, Gmail integration, role matching, and more.",
};

const FAQ = [
  {
    question: "What is PathBuild?",
    answer:
      "PathBuild is a smart job application tracker for iOS. Connect Gmail and it auto-detects recruiter emails — interview invites, offers, rejections — and logs them to your pipeline. Plus AI-matched roles and companies that actually fit your profile.",
  },
  {
    question: "How is PathBuild different from a spreadsheet or generic job board?",
    answer:
      "Spreadsheets don't watch your inbox. Job boards don't track your applications. PathBuild does both — auto-importing recruiter emails via Gmail, organizing everything in a visual pipeline, and surfacing AI-matched roles and companies you'd never find on your own.",
  },
  {
    question: "How does the Gmail integration work?",
    answer:
      "You connect Gmail via read-only OAuth (gmail.readonly scope). PathBuild scans for emails from recruiters and hiring platforms, parses the sender and subject line to detect status changes (interview, offer, rejection), and auto-tags them to the matching application in your tracker. We never store full email bodies.",
  },
  {
    question: "Is my Gmail data safe?",
    answer:
      "Yes. We use read-only Gmail access — we can read but never send or modify emails. We parse sender and subject metadata only; full email bodies are never stored. All data is encrypted in transit and at rest. You can disconnect Gmail or delete your account at any time from the app settings.",
  },
  {
    question: "What notifications does PathBuild send?",
    answer:
      "Push notifications for interview invites, offer letters, rejections, and follow-up reminders. You'll also get a weekly digest summarizing your pipeline activity and new role/company matches. You can customize notification preferences in the app settings.",
  },
  {
    question: "How does role and company matching work?",
    answer:
      "During onboarding, you share your skills, experience, preferences, and constraints. Our AI cross-references your profile against thousands of open roles and companies — each match comes with a fit score, skill-gap breakdown, and salary range. New matches surface daily.",
  },
  {
    question: "What is the Job Posting Fit Analyzer?",
    answer:
      "Paste any job posting into PathBuild and instantly see how well it matches your profile. Get a breakdown of requirements you meet, gaps to close, and whether it's worth applying. It helps you apply smarter — not just more.",
  },
  {
    question: "Can I track applications manually without Gmail?",
    answer:
      "Yes. You can add applications manually at any time — company name, role, status, notes, and follow-up dates. Gmail integration is optional but recommended for automatic status updates when companies respond.",
  },
  {
    question: "How much does PathBuild cost?",
    answer:
      "PathBuild is completely free right now during early access. Download from the App Store and get full access to every feature — application tracking, Gmail inbox watcher, role match, company match, and more. No credit card or subscription required.",
  },
  {
    question: "Will PathBuild always be free?",
    answer:
      "We're focused on building the best job tracker first. Paid plans may be introduced in the future, but we'll always give plenty of notice before anything changes. Early users who join now get full access at no cost.",
  },
  {
    question: "Can I disconnect Gmail?",
    answer:
      "Yes. You can disconnect Gmail at any time from the app settings. PathBuild will stop scanning your inbox immediately. Previously imported application data remains in your pipeline unless you delete it.",
  },
  {
    question: "Can I update my profile or change my target roles?",
    answer:
      "Yes. You can retake the questionnaire, update your profile, or adjust your role and company preferences at any time. Your matches will update based on your new direction.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We never sell your personal information. We do not track you across apps (no IDFA). We use encryption to protect your data both in transit and at rest. We do not send your name or email to AI services. You can delete your account and all associated data at any time from the app settings. See our Privacy Policy for full details.",
  },
  {
    question: "What platforms is PathBuild available on?",
    answer:
      "PathBuild is currently available on iOS (iPhone and iPad). We are actively working on expanding to additional platforms in the future.",
  },
  {
    question: "Who is PathBuild for?",
    answer:
      "PathBuild is for anyone actively job searching or exploring new opportunities — students, recent graduates, career-switchers, and professionals juggling multiple applications. If you need one organized place to track applications, catch recruiter emails, and discover roles that fit, PathBuild is for you.",
  },
];

export default function SupportPage() {
  return (
    <div className="pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.15em] mb-4">
            Support
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-tight text-navy-900 leading-[1.15]">
            How can we help?
          </h1>
          <p className="mt-6 text-[16px] text-navy-500 max-w-xl mx-auto leading-relaxed">
            Find answers to common questions below, or reach out to our team
            directly. We are here to help you make the most of PathBuild.
          </p>
        </div>

        <div className="space-y-3 mb-16">
          {FAQ.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-warm-200/80 bg-card p-7 lg:p-8"
            >
              <h3 className="text-[15px] font-bold text-navy-900 mb-2.5">
                {item.question}
              </h3>
              <p className="text-[13px] leading-[1.75] text-navy-500">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center rounded-2xl bg-gradient-to-br from-sunrise-from to-sunrise-to p-10 lg:p-14">
          <div className="w-12 h-12 rounded-xl bg-accent/[0.12] flex items-center justify-center mx-auto mb-5">
            <Mail size={20} className="text-accent" strokeWidth={1.8} />
          </div>
          <h2 className="text-xl font-extrabold text-navy-900 mb-3">
            Still have questions?
          </h2>
          <p className="text-navy-500 max-w-md mx-auto mb-6 text-[14px] leading-relaxed">
            Our team is here to help. Send us an email and we will get back to
            you as soon as possible.
          </p>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center rounded-full bg-navy-900 text-white px-6 py-3 text-[13px] font-bold hover:bg-navy-800 transition-colors shadow-warm-lg"
          >
            Email us at {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
