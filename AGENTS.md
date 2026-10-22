# Development conventions

- Use Astro with strict TypeScript. Keep the site statically generated.
- Use Tailwind CSS and shared tokens in `src/styles/global.css`; shared components belong in `src/components`.
- Do not introduce React, other client frameworks, databases, CMSs, or unnecessary packages.
- Ship no client JavaScript unless a feature needs it. The contact draft download and homepage Earth animation are the current exceptions. The Earth must keep a static fallback, a pause control, reduced-motion support, and suspend rendering offscreen or in hidden tabs.
- Preserve semantic HTML, visible focus, keyboard navigation, responsive layouts, and reduced-motion support.
- Use navy, graphite, and Millennium Blue. The homepage hero glow (text glow and soft orb behind the Earth) is the only approved glow; avoid other gradients, glow effects, dashboard layouts, and stock startup illustrations.
- Typography: Michroma for headings and the wordmark, Manrope for body text, Space Mono for labels. Fonts are self-hosted in `public/fonts`; no remote font requests.
- Company copy must describe Zeltranet as an independent engineering company based in Mexico and Laos. Attribute prior work to the founder; never imply previous employers’ work was a Zeltranet engagement.
- Do not invent addresses, clients, results, testimonials, certifications, or company history.
- No analytics, external contact services, deployment, purchases, or external accounts without user approval.
- Contact enquiries remain local until an approved delivery channel exists. Never present a draft download as a sent message.
- Set `SITE_URL` in the production build environment for canonical URLs, indexing, and sitemap generation. No configured domain means a deliberately unindexed preview.
- Run `npm run format` after edits, then `npm run validate`. For UI changes inspect desktop and mobile, keyboard use, and overflow. Verify the configured-domain SEO build when changing metadata.
- Repository name: `zeltranet-website`. Do not commit generated output, credentials, or `.env` files.
