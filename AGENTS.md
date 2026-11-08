# Development conventions

- Use Astro with strict TypeScript. Keep the site statically generated. The only server code is the Cloudflare Worker in `worker/index.ts`, which handles `POST /api/contact`; keep it small and dependency-free.
- Never use em or en dashes in copy, docs, or commit messages; use a plain hyphen.
- Use Tailwind CSS and shared tokens in `src/styles/global.css`; shared components belong in `src/components`.
- Do not introduce React, other client frameworks, databases, CMSs, or unnecessary packages.
- Ship no client JavaScript unless a feature needs it. The contact form (send to `/api/contact` plus the Cloudflare Turnstile spam check, the one approved third-party script), homepage Earth animation, and the AI Automator app in `public/ai-automator/` are the current exceptions. The app is presented as a Zeltranet product, but its workspace data is fictional: keep the one-line "example workspace" note on the Work page and in the app footer, and never present its companies or figures as real clients or results. It keeps its script and styles in separate files so the CSP needs no `unsafe-inline`; regenerate it from `zeltranet-demos` rather than editing it by hand. The Earth must keep a static fallback, a pause control, reduced-motion support, and suspend rendering offscreen or in hidden tabs. On the homepage it also grows into a faded background as you scroll, using CSS scroll-driven animation (no scroll listeners); write the animation as longhand properties, because the minifier folds a shorthand with `animation-timeline` into a form Chromium rejects.
- Preserve semantic HTML, visible focus, keyboard navigation, responsive layouts, and reduced-motion support.
- Use navy, graphite, and Millennium Blue. The homepage hero glow (text glow and soft orb behind the Earth) is the only approved glow; avoid other gradients, glow effects, dashboard layouts, and stock startup illustrations.
- Typography: Michroma for headings and the wordmark, Manrope for body text, Space Mono for labels. Fonts are self-hosted in `public/fonts`; no remote font requests.
- Company copy must describe Zeltranet as an independent engineering company based in Mexico and Laos. Attribute prior work to the founder; never imply previous employers’ work was a Zeltranet engagement.
- Do not invent addresses, clients, results, testimonials, certifications, or company history.
- No analytics, external contact services, deployment, purchases, or external accounts without user approval.
- Contact form enquiries are emailed by the Worker through Cloudflare Email Service to the `CONTACT_TO` secret. Show success only after the Worker confirms sending, and always offer hello@zeltranet.com and WhatsApp (from `src/data/company.ts`) as alternatives. Never put personal addresses or secrets in the repository; it is public.
- Set `SITE_URL` in the production build environment for canonical URLs, indexing, and sitemap generation. No configured domain means a deliberately unindexed preview.
- Run `npm run format` after edits, then `npm run validate`. For UI changes inspect desktop and mobile, keyboard use, and overflow. Verify the configured-domain SEO build when changing metadata.
- Repository name: `zeltranet-website`. Do not commit generated output, credentials, or `.env` files.
