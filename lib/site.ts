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
 *  - App Store id 6743108030: checked 2026-07-15, NOT yet public (US/MY/SG/
 *    GB/AU/CA lookups empty). Flip APP_STORE_LIVE to true at launch.
 *
 * Pricing (THIS BRANCH — merge only when App Store Connect sells it):
 * founder-approved FINAL lineup 2026-07-24 — PathBuild Weekly $9.99/week and
 * PathBuild Monthly $29.99/month, both with a 3-day free trial for eligible
 * new subscribers; one subscription group; no annual or 3-month plan.
 */

// ─── Contact ─────────────────────────────────────────────────────────────────
export const CONTACT_EMAIL = "support@pathbuild.app";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const PRIVACY_EMAIL = "privacy@pathbuild.app";
export const PRIVACY_MAILTO = `mailto:${PRIVACY_EMAIL}`;

// ─── App identity ────────────────────────────────────────────────────────────
export const SITE_URL = "https://pathbuild.app";
export const APP_STORE_URL =
  "https://apps.apple.com/app/pathbuild/id6743108030";
// The app is not yet public on the App Store (verified 2026-07-15). While
// false, every download CTA renders an honest "coming soon" state instead of
// linking to a 404. Flip to true on launch day to restore all CTAs site-wide.
export const APP_STORE_LIVE = false;
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
export const CTA_COMING_SOON = "Coming soon to the App Store";
export const CTA_SECONDARY = "See how it works";
export const APP_STORE_A11Y_LABEL = "Download PathBuild on the App Store";

// ─── Pricing ─────────────────────────────────────────────────────────────────
// FINAL founder-approved lineup (2026-07-24): TWO purchasable subscriptions —
// PathBuild Weekly $9.99/week and PathBuild Monthly $29.99/month, both with a
// 3-day free trial for eligible new subscribers (Apple grants one
// introductory offer per Apple ID per subscription group). THIS BRANCH MUST
// MERGE ONLY once App Store Connect actually sells this lineup — until then
// main's one-plan/no-trial copy remains the live truth. Do not alter these
// claims unless the App Store products change again.
export const WEEKLY_PRICE = "$9.99";
export const MONTHLY_PRICE = "$29.99";
export const TRIAL_NOTE = "3-day free trial for eligible new subscribers";

export const PRICING_HEADLINE = "Start free. Go Pro when you're moving fast.";
export const PRICING_SUB =
  "Score jobs, prepare applications, and track replies for free. Upgrade to PathBuild Pro when you want to apply at volume with AI-tailored materials.";
export const PRICING_FOOTNOTE = `PathBuild Pro is ${WEEKLY_PRICE}/week or ${MONTHLY_PRICE}/month — both with a ${TRIAL_NOTE}. Billed through your Apple ID; prices may vary by region, and the exact plans, prices, and any offer that applies to you are always shown in the app before you subscribe. Cancel anytime in Settings → Apple ID → Subscriptions.`;

// Near-CTA subscription disclosure (App Store compliant).
export const SUBSCRIPTION_DISCLOSURE = `${WEEKLY_PRICE}/week or ${MONTHLY_PRICE}/month, each with a ${TRIAL_NOTE} — a trial converts to a paid subscription unless cancelled at least 24 hours before it ends. Auto-renews until cancelled; cancel anytime in Settings → Apple ID → Subscriptions → PathBuild. Prices may vary by region, and the exact price is shown in the app before purchase.`;

// ─── Free vs Pro ─────────────────────────────────────────────────────────────
// Boundaries verified 2026-07-23 against the shipping app. Exact limits are
// always shown in the app.
export const FREE_FEATURES = [
  "Job search with a fit explanation on every role",
  "Save jobs and build your application list",
  "A limited number of included in-app applications",
  "Track every application and its status in one place",
  "Employer replies collected in the PathBuild inbox",
  "You review and approve before anything is sent",
];

export const PRO_FEATURES = [
  "Everything in Free",
  "Unlimited in-app applications — each submitted only after you approve",
  "Application materials tailored to each job",
  "Notifications when employers reply",
  "Priority support",
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
    a: "Job search with fit explanations, saved jobs, application tracking, a limited number of included in-app applications, and employer replies in the PathBuild inbox are all free. Upgrade to Pro for unlimited in-app applications and application materials tailored to each job.",
  },
  {
    q: "How much does PathBuild Pro cost?",
    a: `PathBuild Pro is ${WEEKLY_PRICE}/week or ${MONTHLY_PRICE}/month — both with a ${TRIAL_NOTE}, billed through the Apple App Store. Prices may vary by region, and the exact plans, prices, and any offer that applies to you are always shown in the app before you subscribe.`,
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
