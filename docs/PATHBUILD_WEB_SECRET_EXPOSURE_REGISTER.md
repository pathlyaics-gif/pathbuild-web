# PathBuild Web — Secret Exposure Register

**Date:** 2026-07-03 · **Repo:** `pathlyaics-gif/pathbuild-web` @ `93ffcfe`

Every configuration/identifier value found in the web repo, classified. **No real secret values are printed here** (and none were found).

**Classes:** A = public identifier allowed by design · B = public-but-restricted key (needs verification) · C = sensitive secret exposed publicly · D = unknown (needs provider docs).

| Item | Location | Class | Notes |
|---|---|---|---|
| `CONTACT_EMAIL` (support gmail) | `lib/site.ts` | **A** | Public support address, already shown on legal pages. Not a secret. |
| App Store URL / `pathbuild.app` URLs | `lib/site.ts`, `app/layout.tsx` | **A** | Public marketing URLs. |
| Pricing strings, feature copy | `lib/site.ts` | **A** | Marketing copy. |
| JSON-LD structured data | `app/page.tsx` | **A** | Static schema.org markup, no secrets. |
| `pathbuild_seen_intro_v1` (localStorage key) | `app/intro/page.tsx` | **A** | Non-sensitive UI flag. |
| `gh` device-flow login | `push-to-github.sh` | **A** | Interactive auth; **no token embedded**. |

**Class B (public-but-restricted keys):** none — the site uses **no** `NEXT_PUBLIC_*` variables or client keys of any kind.

**Class C (sensitive secret exposed):** **none found.**
- Source secret scan (keys, tokens, JWTs, private keys, cloud creds): 0 hits.
- Full git-history scan across all 82 commits (text files): **0** secret-pattern hits; no `.env`/`.pem`/`.key`/credential file ever added.
- Live API responses: N/A (no API in this repo).

**Class D (unknown / needs verification):** none — every item above is resolved.

## Where the real secret surface lives (out of scope here)
Service-role keys, OpenAI/AI keys, database URLs, OAuth secrets, and uploaded-CV storage belong to the **PathBuild iOS app and its backend**, not this marketing repo. Recommend a **separate** audit of that backend — this register covers the web repo only.
