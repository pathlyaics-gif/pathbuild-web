/** Public support / contact (site + legal). */
export const CONTACT_EMAIL = "pathly.ai.cs@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const APP_STORE_URL =
  "https://apps.apple.com/app/pathbuild/id6743108030";

export const APP_TAGLINE = "The smart job tracker for iOS. Gmail-aware. AI-matched.";

export const APP_HERO_TITLE =
  "The smart job tracker that watches your inbox.";

export const APP_HERO_SUB =
  "Connect Gmail and PathBuild auto-logs every recruiter email, interview, offer, and rejection. Plus AI-matched roles and companies that actually fit you.";

export const MONTHLY_FEATURES = [
  "Unlimited application tracking & pipeline management",
  "Gmail inbox watcher — auto-detect recruiter emails",
  "Push notifications for interviews, offers & rejections",
  "AI role match with fit scores & skill-gap analysis",
  "Company match — discover employers that fit you",
  "Job posting fit analyzer",
  "Follow-up reminders & notes per application",
  "Weekly search digest & activity recaps",
];

export const ANNUAL_FEATURES = [
  "Everything in Monthly",
  "Save ~$110/year vs monthly billing",
  "Priority access to new features",
  "Export your application pipeline",
  "Free trial included",
];

export const FEATURE_CARDS = [
  {
    title: "Smart Application Tracker",
    body: "Manage every application in one pipeline — Saved, Applied, Interview, Offer, Rejected. Add notes, set follow-up reminders, and never lose track of where you stand.",
  },
  {
    title: "Gmail Inbox Watcher",
    body: "Connect Gmail with read-only access. PathBuild detects recruiter emails and auto-tags them to the right application — no manual logging required.",
  },
  {
    title: "Smart Notifications",
    body: "Get push alerts when companies respond — interview invites, offer letters, rejections, and follow-up nudges so nothing slips through the cracks.",
  },
  {
    title: "Role Match",
    body: "AI matches your profile against thousands of open roles with a fit score, skill-gap breakdown, and salary range. New matches surface daily.",
  },
  {
    title: "Company Match",
    body: "Discover companies that fit your values, comp band, location, stage, and culture — and track them before they even post a job.",
  },
  {
    title: "Job Posting Fit Analyzer",
    body: "Paste any job posting for instant fit analysis. See what you meet, what you're missing, and whether it's worth applying.",
  },
  {
    title: "Pipeline Dashboard",
    body: "See your entire job search at a glance — active applications, upcoming interviews, pending follow-ups, and recent company responses.",
  },
  {
    title: "Privacy by Design",
    body: "Read-only Gmail access. We parse sender and subject — never store full email bodies. Encrypted at rest. Delete your data anytime.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Tell us what you're looking for",
    body: "Answer a quick questionnaire about your skills, experience, target roles, salary range, location, and preferences. Takes less than 5 minutes.",
  },
  {
    title: "Connect your Gmail",
    body: "Link Gmail with read-only OAuth. PathBuild scans for recruiter emails and auto-imports applications, interview invites, offers, and rejections into your pipeline.",
  },
  {
    title: "Your pipeline builds itself",
    body: "Every application lands in one organized tracker. Drag between stages, add notes, set follow-ups — and get notified the moment a company responds.",
  },
  {
    title: "Discover roles & companies that fit",
    body: "AI surfaces matched roles and companies daily based on your profile. Each match includes a fit score, skill-gap analysis, and salary range.",
  },
  {
    title: "Apply smarter, stay on top",
    body: "Use the fit analyzer before you apply. Track every response in one place. Get push notifications so you never miss an interview or offer again.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "What is PathBuild?",
    a: "PathBuild is a smart job application tracker for iOS. Connect Gmail and it auto-detects recruiter emails — interview invites, offers, rejections — and logs them to your pipeline. Plus AI-matched roles and companies that actually fit your profile.",
  },
  {
    q: "How is PathBuild different from a spreadsheet or generic job board?",
    a: "Spreadsheets don't watch your inbox. Job boards don't track your applications. PathBuild does both — auto-importing recruiter emails via Gmail, organizing everything in a visual pipeline, and surfacing AI-matched roles and companies you'd never find on your own.",
  },
  {
    q: "How does the Gmail integration work?",
    a: "You connect Gmail via read-only OAuth (gmail.readonly scope). PathBuild scans for emails from recruiters and hiring platforms, parses the sender and subject line to detect status changes (interview, offer, rejection), and auto-tags them to the matching application in your tracker. We never store full email bodies.",
  },
  {
    q: "Is my Gmail data safe?",
    a: "Yes. We use read-only Gmail access — we can read but never send or modify emails. We parse sender and subject metadata only; full email bodies are never stored. All data is encrypted in transit and at rest. You can disconnect Gmail or delete your account at any time.",
  },
  {
    q: "How does role and company matching work?",
    a: "During onboarding, you share your skills, experience, preferences, and constraints. Our AI cross-references your profile against thousands of open roles and companies — each match comes with a fit score, skill-gap breakdown, and salary range. New matches surface daily.",
  },
  {
    q: "Is there a free trial?",
    a: "The Monthly plan ($19.99/month) does not include a free trial. Apple may offer a free trial to eligible new subscribers who choose the Annual plan; if available, you get full access to every Pro feature during the trial, and you will not be charged if you cancel before it ends. Eligibility and duration are determined by Apple and are limited to one per Apple ID.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel anytime through your Apple ID settings: Settings → Apple ID → Subscriptions → PathBuild. Cancellation takes effect at the end of your current billing period. You keep full access until then. No penalties, no hassle.",
  },
  {
    q: "What platforms is PathBuild available on?",
    a: "PathBuild is currently available on iOS (iPhone and iPad). We are actively working on expanding to additional platforms in the future.",
  },
];
