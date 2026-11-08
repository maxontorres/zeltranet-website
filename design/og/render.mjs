// Renders design/og/og.html to public/og-en.png and public/og-es.png
// with a locally installed Chrome or Edge (headless). No packages needed.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '../..');
const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const browser = browsers.find((path) => existsSync(path));
if (!browser) throw new Error('No Chrome found. Set CHROME_PATH.');

for (const lang of ['en', 'es']) {
  const page = pathToFileURL(resolve(here, 'og.html')).href + `?lang=${lang}`;
  const out = resolve(root, `public/og-${lang}.png`);
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${out}`,
    page,
  ]);
  console.log('wrote', out);
}
