import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
const configuredUrl = process.env.SITE_URL;
if (configuredUrl) {
  const url = new URL(configuredUrl);
  if (
    url.protocol !== 'https:' ||
    url.pathname !== '/' ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      'SITE_URL must be an HTTPS origin, e.g. https://your-confirmed-domain.com',
    );
  }
}
export default defineConfig({
  site: configuredUrl,
  output: 'static',
  trailingSlash: 'always',
  integrations: configuredUrl
    ? [
        sitemap({
          filter: (page) =>
            !['/404/', '/404.html'].includes(new URL(page).pathname),
        }),
      ]
    : [],
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
});
