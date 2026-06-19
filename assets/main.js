async function loadProjects() {
  const res = await fetch('/projects.json')
  const projects = await res.json()
  const container = document.getElementById('projects')

  for (const p of projects) {
    const card = document.createElement('article')
    card.className = 'card'
    card.innerHTML = `
      <h2>${p.name}</h2>
      <p class="tagline">${p.tagline}</p>
      <div class="links">
        <a href="${p.docs}" target="_blank" rel="noopener">Docs</a>
        <a href="${p.demo}" target="_blank" rel="noopener">Demo</a>
        <a href="${p.repo}" target="_blank" rel="noopener">GitHub</a>
      </div>
    `
    container.appendChild(card)
  }
}

loadProjects().catch(console.error)
