// Renders projects.json into the static cards in index.html, between the
// `projects:start` / `projects:end` markers. Run after editing projects.json:
//   node scripts/render-projects.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const projects = JSON.parse(readFileSync(`${root}/projects.json`, 'utf8'))

const STATUS = {
  'active': { label: 'Active', cls: 'live' },
  'in-development': { label: 'In development', cls: 'early' },
  'coming-soon': { label: 'Coming soon', cls: 'soon' },
}

const esc = s => String(s)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;')

function card(p) {
  const status = STATUS[p.status] ?? { label: p.status, cls: 'soon' }
  const links = []
  if (p.docs) links.push(`<a href="${esc(p.docs)}">Docs</a>`)
  if (p.demo) links.push(`<a href="${esc(p.demo)}">Demo</a>`)
  if (p.repo) links.push(`<a href="${esc(p.repo)}">GitHub</a>`)
  if (!links.length) links.push('<span class="off">In private development</span>')
  else if (!p.docs) links.push('<span class="off">Docs soon</span>')

  const body = p.description ? `${p.tagline}. ${p.description}` : `${p.tagline}.`
  return `        <article class="card">
          <span class="status ${status.cls}">${esc(status.label)}</span>
          <h3>${esc(p.name)}</h3>
          <p>${esc(body)}</p>
          <div class="links">
            ${links.join('\n            ')}
          </div>
        </article>`
}

const START = '<!-- projects:start — generated from projects.json by scripts/render-projects.mjs; do not edit by hand -->'
const END = '<!-- projects:end -->'

const indexPath = `${root}/index.html`
const html = readFileSync(indexPath, 'utf8')
const startIdx = html.indexOf(START)
const endIdx = html.indexOf(END)
if (startIdx === -1 || endIdx === -1) {
  console.error('projects markers not found in index.html')
  process.exit(1)
}

const rendered = html.slice(0, startIdx + START.length) + '\n'
  + projects.map(card).join('\n') + '\n        '
  + html.slice(endIdx)

writeFileSync(indexPath, rendered)
console.log(`rendered ${projects.length} project cards into index.html`)
