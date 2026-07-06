// Merges the org's repo list into projects.json: any repo not yet listed gets
// a stub entry to curate; existing entries are never modified. Uses the gh CLI,
// so private repos are included (curate before pushing — the page is public).
// Run, polish the new stubs, then render:
//   node scripts/sync-projects.mjs && node scripts/render-projects.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const ORG = 'worldofpasa'
const root = fileURLToPath(new URL('..', import.meta.url))
const projectsPath = `${root}/projects.json`
const projects = JSON.parse(readFileSync(projectsPath, 'utf8'))

const repos = JSON.parse(execFileSync('gh', [
  'repo', 'list', ORG, '--limit', '200',
  '--json', 'name,description,visibility,isArchived,homepageUrl',
], { encoding: 'utf8' }))

// printpasa -> PrintPasa; anything off-pattern keeps its raw name
const displayName = slug => /^.+pasa$/i.test(slug)
  ? slug[0].toUpperCase() + slug.slice(1, -4) + 'Pasa'
  : slug

const listed = new Set(projects.map(p => p.slug))
const added = []

for (const r of repos) {
  if (r.isArchived || r.name.endsWith('.github.io') || listed.has(r.name)) continue
  const isPublic = r.visibility === 'PUBLIC'
  projects.push({
    slug: r.name,
    name: displayName(r.name),
    tagline: r.description || 'TODO: add a tagline',
    description: null,
    repo: isPublic ? `https://github.com/${ORG}/${r.name}` : null,
    docs: r.homepageUrl || null,
    demo: null,
    status: isPublic ? 'in-development' : 'coming-soon',
  })
  added.push(`${r.name} (${isPublic ? 'public' : 'private'})`)
}

const orgRepos = new Set(repos.map(r => r.name))
for (const p of projects) {
  if (!orgRepos.has(p.slug)) {
    console.warn(`warning: ${p.slug} is in projects.json but has no repo in the org`)
  }
}

if (added.length) {
  writeFileSync(projectsPath, JSON.stringify(projects, null, 2) + '\n')
  console.log(`added ${added.length} stub(s): ${added.join(', ')}`)
  console.log('curate the new entries in projects.json, then run scripts/render-projects.mjs')
} else {
  console.log('projects.json already covers every org repo')
}
