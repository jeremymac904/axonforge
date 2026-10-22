# AxonForge AI Website

Production company website for AxonForge AI, built with Next.js, TypeScript, and Tailwind CSS. The site is static export friendly for Netlify and includes public verification pages for future Apple Developer, Google Play Console, and Microsoft Store app listings.

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

- Configure role inboxes for `contact@axonforgeai.com`, `support@axonforgeai.com`, `privacy@axonforgeai.com`, and `security@axonforgeai.com`.
- Connect the custom domain `axonforgeai.com` in Netlify DNS or the domain registrar.
- Review legal pages with counsel before relying on them for regulated, paid, or high-risk products.
- Replace portfolio placeholders with approved public product details as apps become available.
- Add platform-specific app IDs and support references when Apple, Google, or Microsoft listings are created.

## Approved design direction: October 22, 2026

[Axon Forge Labs design gallery and website plan](docs/design/2026-10-22/README.md) records the selected navy, charcoal and silver homepage, original exploration, and proposed implementation tokens. These are design references, not a deployed website change. The AxonBotOS platform has its own [repository](https://github.com/jeremymac904/AxonBotOS).
