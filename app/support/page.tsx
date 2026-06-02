import type { Metadata } from "next";
import { Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_MAILTO,
  MONTHLY_PRICE,
  ANNUAL_PRICE,
  ANNUAL_TRIAL_DAYS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Support — PathBuild",
  description:
    "FAQs and support for PathBuild — the AI career discovery app for iOS.",
};

const FAQ = [
  {
    question: "What is PathBuild?",
    answer:
      "PathBuild is an AI career discovery app for iOS. Answer a five-minute quiz and we'll match you to careers that genuinely fit, then surface real companies actively hiring for those roles.",
  },
  {
    question: "How is it different from a career quiz online?",
    answer:
      "Most quizzes spit out a vague archetype like 'creative explorer.' PathBuild gives you ranked, specific careers with fit scores — and then shows the real companies hiring for each one. Discovery to action, in one app.",
  },
  {
    question: "How long does the quiz take?",
    answer:
      "About five minutes. Twelve thoughtful questions about how you think, what you value, and what you're naturally good at. No résumé required.",
  },
  {
    question: "How accurate are the career matches?",
    answer:
      "The matches improve the longer you use PathBuild. Your initial profile is built from the quiz, then refined based on which careers and companies you save, dismiss, or explore.",
  },
  {
    question: "What is the Job Posting Fit Analyzer?",
    answer:
      "Paste any job posting and PathBuild instantly tells you how well it matches your profile — what you meet, what you're missing, and whether it's worth applying.",
  },
  {
    question: "How much does PathBuild cost?",
    answer: `The core experience — career quiz, AI matching, company discovery, unlimited saves, and application tracking — is completely free. PathBuild Pro unlocks salary intel, AI resume tailoring, interview prep, job-fit analysis, and side-by-side comparisons. Pro is ${MONTHLY_PRICE}/month or ${ANNUAL_PRICE}/year. Both plans include a ${ANNUAL_TRIAL_DAYS}-day free trial.`,
  },
  {
    question: "How do I cancel a Pro subscription?",
    answer:
      "Go to Settings → Apple ID → Subscriptions → PathBuild on your iPhone. Cancellation takes effect at the end of your current billing period. You keep Pro access until it expires.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your quiz answers and profile are encrypted at rest. We never sell your data, never share it with recruiters or employers, and you can delete everything anytime from inside the app.",
  },
  {
    question: "Can I update my profile or retake the quiz?",
    answer:
      "Yes. Retake the quiz, tweak your preferences, or update your direction anytime. Your matches will refresh based on your new answers.",
  },
  {
    question: "What platforms is PathBuild available on?",
    answer:
      "PathBuild is currently available on iOS (iPhone and iPad). More platforms are on the roadmap.",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-cream pt-36 pb-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-coral">
            Support
          </p>
          <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
            How can we <em className="not-italic text-coral">help</em>?
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[1rem] leading-[1.75] text-ink-secondary">
            Quick answers below, or reach our team directly.
          </p>
        </div>

        <div className="mb-16 space-y-3">
          {FAQ.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-[rgba(44,34,24,0.06)] bg-white p-7 lg:p-8"
            >
              <h3 className="mb-2.5 text-[0.95rem] font-bold text-ink">
                {item.question}
              </h3>
              <p className="text-[0.88rem] leading-[1.75] text-ink-secondary">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#FDEADF] via-[#FCD5C4] to-[#F9C2AC] p-10 text-center lg:p-14">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-coral/[0.12]">
            <Mail size={20} className="text-coral" strokeWidth={1.8} />
          </div>
          <h2 className="mb-3 font-serif text-[clamp(1.4rem,2.8vw,1.9rem)] tracking-[-0.02em] text-ink">
            Still have questions?
          </h2>
          <p className="mx-auto mb-6 max-w-md text-[0.92rem] leading-[1.65] text-wood-mid">
            Email us and we&apos;ll get back to you quickly.
          </p>
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center rounded-pill bg-ebony px-6 py-3 text-[0.88rem] font-semibold text-white shadow-pb-md transition-all hover:-translate-y-0.5 hover:bg-coral hover:shadow-glow"
          >
            Email {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
