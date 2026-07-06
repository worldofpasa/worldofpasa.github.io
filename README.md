# worldofpasa.github.io

The org hub site for [World of Pasa](https://github.com/worldofpasa), served by GitHub Pages at [worldofpasa.github.io](https://worldofpasa.github.io/). Static HTML/CSS, no build step, no client-side JavaScript.

Pasa, written पासा in Nepali and 𑐥𑐵𑐳𑐵 in Nepal Bhasa, means friend.

## How it works

- `index.html` is the whole site. Project cards are static HTML generated from `projects.json` so the page works without JavaScript and is fully crawlable.
- `projects.json` is the source of truth for the project list.
- `scripts/render-projects.mjs` regenerates the cards between the `projects:start` / `projects:end` markers in `index.html`. CI also runs it before every deploy.

## Adding or updating a project

1. Run `node scripts/sync-projects.mjs`. It lists the org's repos with the `gh` CLI (private ones included) and appends a stub entry to `projects.json` for any repo not yet listed. Existing entries are never touched, and it warns about entries whose repo no longer exists.
2. Curate the new stub in `projects.json` (see `PROJECT_TEMPLATE.md` for the org-wide checklist): tagline, description, links, `status` (`active`, `in-development`, `coming-soon`). Use `null` for links that do not exist yet. Set `"hidden": true` to keep an entry off the page without the sync script re-adding it.
3. Run `node scripts/render-projects.mjs`.
4. Commit and push. The deploy workflow re-renders and publishes.

Manual edits to `projects.json` without the sync script work the same as before; the script is just the shortcut when a new repo appears in the org.

## Deploy

Every push to `main` deploys via GitHub Actions (`.github/workflows/deploy.yml`) using the official Pages actions. No secrets required. The repo must keep the name `worldofpasa.github.io` for the site to serve at the org root URL.

## Domain

Canonical URLs currently point at `worldofpasa.github.io`. When `worldofpasa.com` is registered: set it as the custom domain in the repo's Pages settings (which commits a `CNAME` file), point DNS at GitHub Pages, then update the URLs in `index.html` (canonical + Open Graph tags), `robots.txt`, and `sitemap.xml`.
