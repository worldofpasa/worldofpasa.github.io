# worldofpasa.github.io

The org hub site for [World of Pasa](https://github.com/worldofpasa), served by GitHub Pages at [worldofpasa.github.io](https://worldofpasa.github.io/). Static HTML/CSS, no build step, no client-side JavaScript.

Pasa, written पासा in Nepali and 𑐥𑐵𑐳𑐵 in Nepal Bhasa, means friend.

## How it works

- `index.html` is the whole site. Project cards are static HTML generated from `projects.json` so the page works without JavaScript and is fully crawlable.
- `projects.json` is the source of truth for the project list.
- `scripts/render-projects.mjs` regenerates the cards between the `projects:start` / `projects:end` markers in `index.html`. CI also runs it before every deploy.

## Adding or updating a project

1. Edit `projects.json` (see `PROJECT_TEMPLATE.md` for the org-wide checklist). Use `null` for links that do not exist yet. Valid `status` values: `active`, `in-development`, `coming-soon`.
2. Run `node scripts/render-projects.mjs`.
3. Commit both files and push. The deploy workflow re-renders and publishes.

## Deploy

Every push to `main` deploys via GitHub Actions (`.github/workflows/deploy.yml`) using the official Pages actions. No secrets required. The repo must keep the name `worldofpasa.github.io` for the site to serve at the org root URL.

## Domain

Canonical URLs currently point at `worldofpasa.github.io`. When `worldofpasa.com` is registered: set it as the custom domain in the repo's Pages settings (which commits a `CNAME` file), point DNS at GitHub Pages, then update the URLs in `index.html` (canonical + Open Graph tags), `robots.txt`, and `sitemap.xml`.
