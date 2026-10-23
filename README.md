# AxonForge AI Website

Company website source for AxonForge AI, built with Next.js, TypeScript, and Tailwind CSS. The site is static export friendly for Netlify and includes public verification pages for future Apple Developer, Google Play Console, and Microsoft Store app listings.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export with `output: "export"`
- Netlify-ready `netlify.toml`

## Local setup

```bash
npm install
npm run dev
```

Development URL:

```text
http://localhost:3000
```

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

Combined check:

```bash
npm run validate
```

## Build command

```bash
npm run build
```

## Publish directory

```text
out
```

Next.js writes the static export to `out/` during `npm run build`.

## Netlify setup notes

Use these settings in Netlify:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `22`
- Base directory: repository root

The included `netlify.toml` configures the same build settings and basic static-site headers. Contact forms use Netlify Forms markup; enable forms in the Netlify project if message capture is needed.

## Required public URLs

- `/`
- `/about`
- `/apps`
- `/apps/[slug]`
- `/products`
- `/services`
- `/portfolio`
- `/case-studies`
- `/ai-systems`
- `/contact`
- `/support`
- `/privacy`
- `/terms`
- `/data-deletion`
- `/security`
- `/accessibility`

## Remaining business setup

- Verify delivery for the existing role inboxes `contact@axonforgeai.com`, `support@axonforgeai.com`, `privacy@axonforgeai.com`, and `security@axonforgeai.com`.
- Reconcile the existing GoDaddy-served `axonforgeai.com` domain with the intended hosting project before an explicitly authorized cutover.
- Review legal pages with counsel before relying on them for regulated, paid, or high-risk products.
- Replace portfolio placeholders with approved public product details as apps become available.
- Add platform-specific app IDs and support references when Apple, Google, or Microsoft listings are created.

## Approved design direction: October 22, 2026

[Axon Forge Labs design gallery and website plan](docs/design/2026-10-22/README.md) records the selected navy, charcoal and silver homepage, original exploration, and proposed implementation tokens. The selected design is implemented on the local review branch; no production release is claimed. The AxonBotOS platform has its own [repository](https://github.com/jeremymac904/AxonBotOS).


## Current integration and release boundaries

The existing public domain currently serves GoDaddy Website Builder, not this source export. On October 23, public HTTP returned DPS/2.0.0 and the generator identified Go Daddy Website Builder 8; the connected Netlify account had no AxonForge project. Do not assume a merge deploys axonforgeai.com or change DNS without a reviewed target and explicit release approval.

The exported Contact form is statically detectable Netlify Forms markup. Form capture, notifications and the listed role inboxes are unverified; no message was sent. Static local hosting does not process POST submissions. The target host/form service must be reconciled and actual receipt/failure behavior tested before calling Contact operational. Do not create a form backend or enable a paid feature implicitly.

Set NEXT_PUBLIC_AXONBOT_URL only to the verified existing secured app origin before building. If absent, the platform page honestly shows pending access instead of a fake signup link. Website pages never mint app sessions. No exact app subdomain is established yet.

Tutorials provide original summaries and verified outbound links to AI Realtor Pro's published ChatGPT, Claude and HeyGen guides; courses/accounts/progress stay on that existing platform. News articles remain manual AI-assisted editorial drafts, noindex and excluded from sitemap pending human editorial acceptance. No publishing automation is enabled. Older app/policy/support paths remain compatible.

See design-qa.md and WEBSITE_COMPLETION_AUDIT.md for source verification and remaining acceptance items.
