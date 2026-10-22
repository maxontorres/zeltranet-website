# Zeltranet website

Static company website for Zeltranet, an independent software engineering company based in Vientiane, Laos. Built with Astro, strict TypeScript, and Tailwind CSS v4. No frontend framework, database, CMS, analytics, remote fonts, or external contact service.

## Local setup

Use Node.js 24 LTS and npm (minimum supported Node version: 22.12).

```sh
cd ~/dev/zeltranet-website
npm ci
npm run dev
```

Open http://localhost:4321. `npm run preview` serves a production build.

```sh
npm run format        # Format sources
npm run validate      # Astro/TypeScript, ESLint, formatting, static build
```

GitHub Actions runs the same checks plus a domain-configured build. Source repository: [maxontorres/zeltranet-website](https://github.com/maxontorres/zeltranet-website).

## Architecture

- `src/pages/`: Home, Services, Experience, About, Contact, a custom 404, and generated `robots.txt`.
- `src/layouts/Base.astro`: document metadata, accessible navigation, footer.
- `src/components/`: reusable brand mark, decorative engineering drawing, services grid, and contact invitation.
- `src/data/company.ts`: service and founder-experience copy.
- `src/data/earth-coastlines.json`: simplified geographic linework from the owner-supplied MaxonTorres.com globe (retrieved 2026-10-22).
- `src/lib/earth.ts`: shared projection geometry for the static SVG and animated canvas.
- `src/styles/global.css`: Tailwind import, design tokens, responsive styling, reduced-motion handling.
- `public/`: favicon and Cloudflare security/cache headers.
- `wrangler.jsonc`: Cloudflare Workers Static Assets configuration; no Worker runtime or paid binding required.

All pages are static HTML. Contact loads client JavaScript for downloading a plain-text enquiry draft. The homepage also loads a small standalone canvas Earth animation, adapted from the owner’s MaxonTorres.com globe without React or a rendering dependency. It has a server-rendered SVG fallback, a pause control, reduced-motion support, a 24 fps limit, capped pixel density, and suspends animation when offscreen or the tab is hidden. No information is sent or stored by the website. The form is clearly labelled and the download control stays disabled without JavaScript. CSP allows same-origin assets only and blocks form submission. Update headers deliberately if an approved delivery mechanism is added.

The visual language uses dark navy, graphite, blue accents, technical linework, and system typography. The accent matches the owner’s MaxonTorres.com palette, checked on 2026-10-22.

| Role                   | Color     |
| ---------------------- | --------- |
| Background / navy      | `#0B1019` |
| Graphite panels        | `#101722` |
| Millennium Blue accent | `#628DFF` |
| Primary text           | `#E8E9EC` |
| Secondary text         | `#A3A8B6` |
| Text on blue buttons   | `#050608` |

Shared CSS tokens in `src/styles/global.css` control page and Earth colors. Animated canvas colors read the same tokens as the static SVG. Blue buttons use dark text to preserve contrast. No remote font requests or decorative image dependencies.

## SEO and domain configuration

No public domain has been supplied. Builds without `SITE_URL` intentionally omit canonical URLs and sitemap, emit `noindex, nofollow`, and disallow crawling. This keeps an unconfigured preview from advertising an invented domain.

Once a domain is confirmed, set the environment variable **during the build**:

```sh
SITE_URL=https://your-confirmed-domain.com npm run build
```

Use an HTTPS origin without a path. Astro's sitemap integration generates `dist/sitemap-index.xml` and its linked sitemap; `robots.txt` references it. Canonical and Open Graph URLs use the same origin. The custom 404 should remain unindexed. No browser secrets or environment variables are needed.

A local `.env.example` documents the setting. `astro.config.mjs` reads the process environment, so export the value in your shell or build provider; merely copying it to `.env` does not configure this build.

## Cloudflare Workers Static Assets

Deployment has **not** been performed. These are instructions for a later approved release. This static architecture needs no paid services; check current Cloudflare free-tier quotas before launch.

1. Confirm the public domain and contact channel; review company copy and founder attribution.
2. Run `npm ci` and `npm run validate`.
3. Build with the confirmed `SITE_URL` as shown above.
4. Optionally inspect locally with `npx wrangler dev` (serves `dist` with Cloudflare asset handling).
5. After deployment approval and Cloudflare authentication, run `npx wrangler deploy` from this directory. Wrangler uses `./dist` and the Worker name `zeltranet-website`.
6. Configure the approved custom domain in Cloudflare. Check all five routes, an unknown route, headers, mobile layout, enquiry download, robots, and sitemap on the live origin.

For Cloudflare Git builds, use `npm run build`, supply `SITE_URL` as a build variable, and use `npx wrangler deploy` as the deployment command. There is no automatic deployment workflow here. Keep API tokens out of the repository.

## Content and launch limitations

- Contact delivery awaits a confirmed business address or an approved service. The draft download works locally but cannot contact Zeltranet.
- Experience is explicitly the founder's prior professional experience, not a Zeltranet client portfolio. No client names, metrics, endorsements, or unprovided history are asserted.
- English only for this iteration. Translations and locale-specific metadata can follow when approved copy is available.
- Source is hosted in `maxontorres/zeltranet-website`. The website has not been deployed; deployment requires separate approval.
- Before launch, confirm domain/contact details, review factual copy, and check the deployed Cloudflare headers and 404 behavior.
