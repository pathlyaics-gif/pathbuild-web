# PathBuild Web — Security Remediation Plan

**Date:** 2026-07-03 · **Repo:** `pathlyaics-gif/pathbuild-web` @ `93ffcfe`

## Applied (committed on `main`; pushed to production with founder approval)

| # | Change | File | Fixes | Risk of change |
|---|---|---|---|---|
| 1 | Add HTTP security headers (CSP, X-Frame-Options `DENY`, `X-Content-Type-Options: nosniff`, Referrer-Policy, Permissions-Policy, HSTS; `poweredByHeader:false`) | `next.config.ts` | F1 | Low — additive; content unchanged. CSP allows `'unsafe-inline'` scripts/styles so Next.js/framer-motion keep working. |
| 2 | Ignore `.env` / `.env.*` (keep `!.env.example`) | `.gitignore` | F2 | None — additive ignore rule. |

Both are safe, reversible, and touch no secrets, auth, payments, schema, or git remotes.

## Verification gate
See `PATHBUILD_WEB_SECURITY_RELEASE_GATE.md` — build green, five headers emitted, no CSP console violations, `npm audit`, no page regressions.

## Not auto-applied — founder decisions
- **F3 — HSTS `includeSubDomains`/`preload`:** domain-wide, hard to reverse. Confirm every `*.pathbuild.app` subdomain is HTTPS-only first, then add if desired.
- **CSP hardening (remove `'unsafe-inline'` via nonce):** needs middleware + end-to-end testing; tracked as a follow-up, not shipped blindly.
- **F4 — narrow `.claude/settings.local.json` git permissions:** optional local-tooling hygiene.

## Out of scope for this repo (recommend a separate audit)
The PathBuild **iOS app + backend** is where Supabase/RLS, service-role & AI keys, CV upload/storage, and auth/OAuth actually live. None of it exists in this marketing repo. That backend is the higher-value secret/PII surface and should be audited on its own.

## Explicitly NOT done (require your approval per project rules)
- No key rotation/revocation. No Vercel/production/billing changes. No git history rewrite. No RLS/schema changes. (Commit + push of the code/doc changes were explicitly approved by the founder.)
