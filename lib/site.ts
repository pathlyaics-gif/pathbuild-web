/**
 * Single source of truth for PathBuild Web copy, links, and pricing.
 *
 * Product (honest positioning, confirmed 2026-07): PathBuild is an iPhone
 * job-search + application assistant. It scores every job 0–100, prepares each
 * application, fills SUPPORTED employer forms, and submits AFTER the user
 * approves. Some roles are external-apply or need one secure action (e.g.
 * verification/CAPTCHA). Employer replies are collected back in the app.
 *
 * TODO(founder review): confirm before production —
 *  - support@pathbuild.app / privacy@pathbuild.app mailboxes are live
 *  - exact Free vs Pro boundaries match the live App Store listing
 *  - App Store id 6743108030 resolves to the published app
 */

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT_EMAIL = "support@pathbuild.app";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const PRIVACY_EMAIL = "privacy@pathbuild.app";
export const PRIVACY_MAILTO = `mailto:${PRIVACY_EMAIL}`;

// ─── App identity ────────────────────────────────────────────────────────────
export const APP_STORE_URL =
  "https://apps.apple.com/app/pathbuild/id6743108030";
export const APP_NAME = "PathBuild";

export const APP_TAGLINE =
  "The iPhone job search that finds your fit, prepares each application, and applies after you approve.";

// Kept for back-compat with existing pages (values updated to new positioning).
export const APP_HERO_TITLE = "Your whole job search. One app.";
export const APP_HERO_SUB =
  "PathBuild scores every job 0–100, prepares each application, and fills supported employer forms — then submits after you approve. Employer replies come back to one place.";

// ─── Hero / conversion copy ──────────────────────────────────────────────────
export const HERO_EYEBROW = "Built for your next move";
export const HERO_HEADLINE_LINES = ["Your whole job search.", "One app."];
export const HERO_SUB = APP_HERO_SUB;
export const HERO_TRUST_LINE = "You approve every application.";
export const HERO_QUALIFIER =
  "Some roles are external-apply or need one quick secure step from you.";
export const CTA_PRIMARY = "Download for iPhone";
export const CTA_SECONDARY = "See how it works";
export const APP_STORE_A11Y_LABEL = "Download PathBuild on the App Store";

// ─── Pricing ─────────────────────────────────────────────────────────────────
export const MONTHLY_PRICE = "$14.99";
export const ANNUAL_PRICE = "$34.99";
export const TRIAL_DAYS = 3;
export const MONTHLY_TRIAL_DAYS = TRIAL_DAYS;
export const ANNUAL_TRIAL_DAYS = TRIAL_DAYS;

export const PRICING_HEADLINE = "Start free. Go Pro when you're moving fast.";
export const PRICING_SUB =
  "Score jobs, prepare applications, and track replies for free. Upgrade to PathBuild Pro when you want to apply at volume with AI-tailored materials.";
export const PRICING_FOOTNOTE = `Both plans include a ${TRIAL_DAYS}-day free trial. Payment is charged to your Apple ID. Cancel anytime in Settings → Apple ID → Subscriptions.`;

// Near-CTA subscription disclosure (App Store compliant).
export const SUBSCRIPTION_DISCLOSURE = `${TRIAL_DAYS}-day free trial, then ${MONTHLY_PRICE}/month or ${ANNUAL_PRICE}/year. Subscription auto-renews until cancelled. Cancel anytime in Settings → Apple ID → Subscriptions → PathBuild.`;

// ─── Free vs Pro ─────────────────────────────────────────────────────────────
// TODO(founder review): verify exact limits/features against the live app.
export const FREE_FEATURES = [
  "0–100 fit score on every job, before you spend time applying",
  "Swipe to build your application list",
  "PathBuild prepares each application from your profile",
  "Track every application and its status in one place",
  "Employer replies collected in the app",
  "You review and approve before anything is sent",
];

export const PRO_FEATURES = [
  "Everything in Free",
  "Apply at volume — a much higher monthly application limit",
  "AI-tailored résumé and application materials for each role",
  "Priority preparation for supported employer forms",
  "Every future update, included",
];

// ─── Feature cards (product, not a quiz) ─────────────────────────────────────
export const FEATURE_CARDS = [
  {
    title: "See the fit first",
    body: "Every job gets a 0–100 fit score against your skills, goals, and preferences — with the reasons behind it — so you spend time only where it counts.",
  },
  {
    title: "Swipe to apply",
    body: "Swipe right to add a role to your applications; swipe left to skip. PathBuild starts preparing the moment you swipe. Nothing is sent yet.",
  },
  {
    title: "Prepared for you",
    body: "PathBuild fills each application from your profile and résumé, tailors your materials, and asks only for what's genuinely missing.",
  },
  {
    title: "Submitted after approval",
    body: "You review exactly what will be shared, then approve. PathBuild submits supported employer forms for you. Some roles are external-apply or need one secure step.",
  },
  {
    title: "Replies in one place",
    body: "Employer responses come back into PathBuild, linked to the application — so your whole search lives in one app instead of a scattered inbox.",
  },
  {
    title: "You stay in control",
    body: "Your documents stay attached to your account, sensitive questions are never guessed, and you can delete your account and data from the app anytime.",
  },
];

// ─── How it works ────────────────────────────────────────────────────────────
export const HOW_IT_WORKS_STEPS = [
  {
    title: "See your fit",
    body: "PathBuild scores each job 0–100 against your skills, goals, and preferences, and shows you why — before you spend time applying.",
  },
  {
    title: "Swipe to apply",
    body: "Swipe right to add a role to your applications. PathBuild starts preparing it right away. Nothing is submitted yet.",
  },
  {
    title: "PathBuild prepares it",
    body: "Your profile and résumé fill the application. PathBuild tailors your materials and highlights anything that's missing.",
  },
  {
    title: "Review once, approve",
    body: "See exactly what will be shared with the employer, then approve. You're always in control of what gets sent.",
  },
  {
    title: "Applied — and tracked",
    body: "PathBuild submits supported employer forms after your approval, tracks the application, and brings employer replies back into the app.",
  },
];

// Scroll-story scenes ("From swipe to sent").
export const STORY_SCENES = [
  {
    key: "fit",
    title: "Find a stronger match",
    body: "See the fit before spending time applying — a 0–100 score with the reasons behind it.",
  },
  {
    key: "swipe",
    title: "Swipe right",
    body: "One swipe adds the role to Applications. PathBuild starts preparing it. Nothing is submitted yet.",
  },
  {
    key: "prepare",
    title: "PathBuild prepares it",
    body: "It fills what it knows from your profile and résumé, and asks only for what's missing.",
  },
  {
    key: "review",
    title: "Review once",
    body: "You always see what will be shared with the employer before anything is sent.",
  },
  {
    key: "applied",
    title: "Applied",
    body: "PathBuild submits supported applications after your approval. Some roles are external-apply or need one secure step.",
  },
  {
    key: "replies",
    title: "The company replies",
    body: "Real employer replies come back into one place, linked to the application.",
  },
];

// ─── Trust / control ─────────────────────────────────────────────────────────
export const TRUST_POINTS = [
  "You review before anything is submitted.",
  "Your documents stay attached to your account.",
  "Sensitive questions are never guessed — PathBuild asks you.",
  "Verification or CAPTCHA pauses for your action.",
  "Employer replies stay linked to the application.",
  "Delete your account and data from the app anytime.",
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS = [
  {
    q: "What is PathBuild?",
    a: "PathBuild is an iPhone job-search and application assistant. It scores every job 0–100 for fit, prepares each application from your profile, fills supported employer forms, and submits after you approve — then keeps employer replies in one place.",
  },
  {
    q: "Does PathBuild apply to jobs for me?",
    a: "Yes — for supported employer forms, PathBuild submits your application after you review and approve it. Some roles are external-apply (you finish on the employer's site) or need one secure step from you, such as a verification or CAPTCHA. You approve every application before anything is sent.",
  },
  {
    q: "Is anything submitted without my approval?",
    a: "No. PathBuild prepares applications, but nothing is sent until you review exactly what will be shared and approve it.",
  },
  {
    q: "What's free?",
    a: "Fit scores on every job, swiping to build your application list, application preparation and tracking, and employer replies in the app are free. Upgrade to Pro to apply at higher volume with AI-tailored materials.",
  },
  {
    q: "How much does PathBuild Pro cost?",
    a: `PathBuild Pro is ${MONTHLY_PRICE}/month or ${ANNUAL_PRICE}/year. Both plans include a ${TRIAL_DAYS}-day free trial — no charge until the trial ends.`,
  },
  {
    q: "How do I cancel?",
    a: "Cancel anytime in Settings → Apple ID → Subscriptions → PathBuild. Cancellation takes effect at the end of the current billing period, and you keep Pro access until it expires.",
  },
  {
    q: "How is my data handled?",
    a: "Your profile and documents stay attached to your account. PathBuild shares application information with an employer only when you review and approve that specific application. You can delete your account and data from inside the app at any time.",
  },
  {
    q: "What devices does PathBuild support?",
    a: "PathBuild is built for iPhone. More platforms may follow.",
  },
];
