import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support — PathBuild",
  description:
    "Frequently asked questions and support for PathBuild. Get help with daily missions, subscriptions, career tools, and more.",
};

const FAQ = [
  {
    question: "What is PathBuild?",
    answer:
      "PathBuild is a premium career execution app for iOS — think \"Duolingo for your career.\" It helps students, graduates, career-switchers, and job seekers choose a realistic target role, get a clear roadmap, and complete one focused daily mission that builds real proof toward getting hired. Instead of overwhelming you with options, PathBuild gives you one meaningful task each day and tracks your readiness until you are hire-ready.",
  },
  {
    question: "How is PathBuild different from a career quiz or generic career app?",
    answer:
      "Most career tools give you a list of job titles and stop there. PathBuild goes much further. It creates a role-specific roadmap broken into stages and requirements, gives you one guided mission each day, tracks your readiness percentage in real time, turns your completed work into resume bullets and LinkedIn copy, lets you analyze real job postings, and provides weekly AI coaching. It is an ongoing career execution system — not a one-time assessment.",
  },
  {
    question: "What does a daily mission look like?",
    answer:
      "Each daily mission is a focused, step-by-step task that takes 30–60 minutes (depending on your pace setting). Missions include a brief overview of what you will work on, micro-steps to check off, and a completion review. They are designed to build real skills, proof, or progress toward your target role. On busy days, Quick Win missions offer a lighter option to keep your streak alive.",
  },
  {
    question: "How does the AI career matching work?",
    answer:
      "During onboarding, you answer a quick questionnaire about your education, experience, interests, strengths, constraints, target income, working style, and daily pace. Our AI cross-references your unique profile against thousands of career paths, market data, salary trends, and success patterns to find your best-fit matches — each with a suitability score, difficulty rating, and salary range.",
  },
  {
    question: "What is the readiness percentage?",
    answer:
      "Your readiness percentage shows how close you are to being hire-ready for your target role. It updates in real time as you complete missions, cover requirement areas, and build proof. Along with readiness, you can track velocity (how fast you are progressing), coverage (which areas you have covered), and your streak (consecutive days of completing missions).",
  },
  {
    question: "What is the Proof Builder?",
    answer:
      "As you complete missions and milestones, PathBuild tracks your actual accomplishments and translates them into polished resume bullet points and LinkedIn copy. Instead of making up generic descriptions, your proof is built from real work you have done — so your resume reflects genuine experience and progress.",
  },
  {
    question: "What is the Job Posting Analyzer?",
    answer:
      "Paste any job posting into PathBuild and instantly see how well it matches your skills and roadmap. You get a breakdown of requirements you already meet, gaps you need to close, and specific steps to become a stronger candidate. It helps you apply smarter — not just more.",
  },
  {
    question: "What does Weekly AI Coaching do?",
    answer:
      "Every week, PathBuild provides personalized coaching based on your recent activity, progress, blockers, and goals. It adapts to your pace, gives you encouragement when you need it, course corrections when you are off track, and specific suggestions for what to focus on next. Think of it as a career mentor who knows your full journey.",
  },
  {
    question: "How much does PathBuild cost?",
    answer:
      "PathBuild Pro offers two subscription plans: Monthly at $19.99/month and Annual at $129.99/year (about $10.83/month — saving you over $100 per year vs monthly). Download and subscribe in the App Store; the Monthly plan does not include a free trial. Apple may offer a free trial to eligible new subscribers on the Annual plan only. All payments are processed through Apple.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "The Monthly plan has no free trial. Apple may offer a free trial to eligible new subscribers who choose the Annual plan. When a trial is available, you get full access to every Pro feature during the trial; if you cancel before it ends, you will not be charged. Eligibility and duration are determined by Apple and limited to one per Apple ID.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can manage and cancel your subscription at any time through your Apple ID Account Settings: Settings → Apple ID → Subscriptions → PathBuild. Cancellation takes effect at the end of your current billing period. You keep full access to Pro features until then.",
  },
  {
    question: "Can I change my target role or retake the questionnaire?",
    answer:
      "Yes. You can retake the questionnaire, update your profile, or switch to a different target role at any time. Your roadmap, missions, and progress will update based on your new direction.",
  },
  {
    question: "What is the difference between Standard and Accelerated pace?",
    answer:
      "Standard pace is designed for people who can commit about 30 minutes per day to their daily mission. Accelerated pace is for people who can commit about 60 minutes and want to progress faster. You can change your pace setting at any time.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. We never sell your personal information. We do not track you across apps (no IDFA). We use encryption to protect your data both in transit and at rest. We do not send your name or email to AI services. And you can delete your account and all associated data at any time from the app settings. See our Privacy Policy for full details.",
  },
  {
    question: "What platforms is PathBuild available on?",
    answer:
      "PathBuild is currently available on iOS (iPhone and iPad). We are actively working on expanding to additional platforms in the future.",
  },
  {
    question: "Who is PathBuild for?",
    answer:
      "PathBuild is for anyone who feels lost, stuck, behind, or unfocused about their career — students, recent graduates, career-switchers, job seekers, and people returning to the workforce. If you want to improve your career in 30–60 minutes a day with real guidance and structure, PathBuild is for you. It is not a social feed, not a generic to-do app, and not a huge messy career toolbox. It is focused, structured, and built for real progress.",
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
