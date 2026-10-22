# Zeltranet website

Static company website for Zeltranet, an independent software engineering company based in Mexico and Laos. Built with Astro, strict TypeScript, and Tailwind CSS v4. No frontend framework, database, CMS, analytics, remote fonts, or external contact service.

## Quick start (if you already have Node.js 24)

```sh
npm ci
npm run dev
```

Then open <http://localhost:4321> in your browser. Press `Ctrl + C` in the terminal to stop the server.

If any of that failed, or you're on a new computer, follow the full setup below.

---

## Full setup, step by step

You need two programs: **Git**, to download the code, and **Node.js**, to run it. You do **not** need NVM or any other Node version manager. A regular Node.js install works.

### Which Node.js version?

| Requirement | Version                                                    |
| ----------- | ---------------------------------------------------------- |
| Recommended | **Node.js 24 LTS** (same as CI; pinned in `.nvmrc`)        |
| Minimum     | Node.js 22.23.4 (Astro refuses to start on anything older) |

Check what you have:

```sh
node -v
```

If it prints `v24.something`, skip to [Step 3](#step-3--get-the-code). If it prints something older, says "not recognized", or says "command not found", do Step 2.

### Step 1 — Install Git

- **Windows:** in PowerShell, run `winget install --id Git.Git -e`
- **macOS:** run `xcode-select --install` or `brew install git`
- **Linux (Debian/Ubuntu):** run `sudo apt install git`

Check it worked: `git --version`

### Step 2 — Install (or upgrade) Node.js 24 LTS

**Windows (recommended):** open PowerShell and run:

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

This also replaces an older Node.js you installed the same way. Windows will show an admin prompt; click **Yes**.

Alternatively, download the **LTS** `.msi` installer from <https://nodejs.org> and click through it with the default options.

**macOS:** `brew install node@24`, or the LTS installer from <https://nodejs.org>.

**Linux:** use the LTS instructions at <https://nodejs.org/en/download>.

> **Important:** close and reopen your terminal (and VS Code, if it's open) after installing. Terminals that were already open still see the old version.

Check it worked:

```sh
node -v   # should print v24.x.x
npm -v    # should print a version number
```

<details>
<summary>Prefer a version manager (nvm / nvm-windows / fnm)? Optional.</summary>

The repo includes an `.nvmrc` file containing `24`. From the project folder:

```sh
nvm install   # macOS/Linux nvm reads .nvmrc
nvm use
```

`nvm-windows` doesn't read `.nvmrc`, so use `nvm install 24` and then `nvm use 24`. Uninstall any standalone Node.js first so the two don't conflict.

</details>

### Step 3 — Get the code

```sh
git clone https://github.com/maxontorres/zeltranet-website.git
cd zeltranet-website
```

If you already have the folder, just `cd` into it. Every command below must be run **inside the project folder**, the one that contains `package.json`.

### Step 4 — Install the project's dependencies

```sh
npm ci
```

This downloads everything listed in `package-lock.json` into `node_modules/`. It takes about 20–60 seconds. Run it again whenever you pull new changes that touch `package.json` or `package-lock.json`.

You may see `npm warn` lines. Those are normal; see [Troubleshooting](#troubleshooting). Lines that say `npm error` are not normal.

### Step 5 — Run the site

```sh
npm run dev
```

When it prints a `Local  http://localhost:4321/` line, open that address in your browser. Saving a file reloads the page automatically. Press `Ctrl + C` in the terminal to stop.

### Step 6 — Before you commit, check your work

```sh
npm run format     # auto-fixes code style
npm run validate   # type checks, lint, style check, and a production build
```

If `validate` finishes without an error, your change passes the same checks GitHub runs.

---

## Command reference

| Command                | What it does                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| `npm ci`               | Clean install of dependencies from the lockfile                   |
| `npm run dev`          | Dev server with live reload at <http://localhost:4321>            |
| `npm run build`        | Production build into `dist/`                                     |
| `npm run preview`      | Serve the built `dist/` folder (run `build` first)                |
| `npm run format`       | Rewrite files with Prettier                                       |
| `npm run format:check` | Check formatting without changing files                           |
| `npm run lint`         | ESLint                                                            |
| `npm run check`        | Astro + TypeScript type checking                                  |
| `npm run validate`     | `check` + `lint` + `format:check` + `build` (the pre-commit gate) |

`dev` and `preview` listen on all network interfaces (`--host 0.0.0.0`), so other devices on your network, such as your phone, can open `http://<your-computer's-IP>:4321` for mobile testing.

## Troubleshooting

**`Node.js vXX is not supported by Astro! Please upgrade Node.js`**
Your Node is too old. Do [Step 2](#step-2--install-or-upgrade-nodejs-24-lts), **reopen the terminal**, then run `npm ci` again.

**`node -v` still shows the old version after installing**
Close every terminal and VS Code window, then reopen. If it's still wrong on Windows, run `where.exe node`. More than one path means several Node installs are fighting; uninstall the extras from _Settings → Apps_.

**`'node' / 'npm' is not recognized` or `command not found`**
Node isn't installed or isn't on your PATH. Reinstall it (Step 2) and reopen the terminal.

**`npm run dev` says the port is in use**
Another dev server is probably still running. Close that terminal or press `Ctrl + C` there. Astro will otherwise pick the next free port and print it, so use the URL it shows.

**`npm run validate` fails with `[warn] Code style issues found` on every file (Windows)**
This is a line-ending problem: Git converted files to Windows (CRLF) endings, but Prettier expects LF. The repo's `.gitattributes` prevents this on fresh clones. To fix an existing checkout, run `npm run format`. Git may then list every file as modified even though the contents are identical; `git add -A` clears that.

**`npm warn EBADENGINE`**
A package wants a newer Node. Upgrade to Node 24 (Step 2).

**`npm warn install-scripts ... esbuild / workerd ... not yet covered by allowScripts`**
Harmless for development. `npm run dev` and `npm run build` work without approving them. `workerd` is only used by `npx wrangler dev`.

**PowerShell says `running scripts is disabled on this system`**
Run this once: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, then reopen PowerShell.

**Something is weird and nothing above helped**
Reinstall dependencies from scratch:

```sh
# macOS / Linux / Git Bash
rm -rf node_modules .astro dist
npm ci
```

```powershell
# PowerShell
Remove-Item -Recurse -Force node_modules, .astro, dist -ErrorAction SilentlyContinue
npm ci
```

---

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

The visual language uses dark navy, graphite, blue accents, technical linework, a single soft glow in the homepage hero, and display typography adapted from MaxonTorres.com. The accent matches the owner’s MaxonTorres.com palette, checked on 2026-10-22.

| Role                   | Color     |
| ---------------------- | --------- |
| Background / navy      | `#0B1019` |
| Graphite panels        | `#101722` |
| Millennium Blue accent | `#628DFF` |
| Primary text           | `#E8E9EC` |
| Secondary text         | `#A3A8B6` |
| Text on blue buttons   | `#050608` |

Shared CSS tokens in `src/styles/global.css` control page and Earth colors. Animated canvas colors read the same tokens as the static SVG. Blue buttons use dark text to preserve contrast. Type uses Michroma (headings), Manrope (body), and Space Mono (labels), self-hosted from `public/fonts` under the SIL Open Font License. No remote font requests or decorative image dependencies.

Project conventions for contributors (and AI agents) are in [`AGENTS.md`](AGENTS.md).

## SEO and domain configuration

No public domain has been supplied. Builds without `SITE_URL` intentionally omit canonical URLs and sitemap, emit `noindex, nofollow`, and disallow crawling. This keeps an unconfigured preview from advertising an invented domain.

Once a domain is confirmed, set the environment variable **during the build**:

```sh
# macOS / Linux / Git Bash
SITE_URL=https://your-confirmed-domain.com npm run build
```

```powershell
# PowerShell
$env:SITE_URL = "https://your-confirmed-domain.com"; npm run build; Remove-Item Env:SITE_URL
```

Use an HTTPS origin without a path. Astro's sitemap integration generates `dist/sitemap-index.xml` and its linked sitemap; `robots.txt` references it. Canonical and Open Graph URLs use the same origin. The custom 404 should remain unindexed. No browser secrets or environment variables are needed.

A local `.env.example` documents the setting. `astro.config.mjs` reads the process environment, so export the value in your shell or build provider. Copying it to `.env` does **not** configure this build.

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
