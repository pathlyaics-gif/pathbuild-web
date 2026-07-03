import type { NextConfig } from "next";

// Security headers applied to every route.
//
// PathBuild Web is a static marketing site — no auth, no API routes, no user
// input, no third-party scripts — so the Content-Security-Policy can be tight.
// `script-src`/`style-src` still allow 'unsafe-inline' because Next.js injects
// un-nonced inline hydration/RSC bootstrap scripts and next/font + framer-motion
// emit inline styles. Moving script-src to a nonce (removing 'unsafe-inline') is
// a tracked hardening follow-up that needs end-to-end testing before shipping.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Matches the max-age Vercel already serves; kept in-repo so the policy is
  // portable. includeSubDomains/preload deliberately omitted — domain-wide
  // commitments are a founder decision (see security remediation docs).
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
];

const nextConfig: NextConfig = {
  // Don't advertise the framework.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
