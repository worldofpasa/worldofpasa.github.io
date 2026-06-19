# World of Pasa — project template

Every org project ships three surfaces:

| Surface | CF Pages project | URL pattern |
|---------|------------------|-------------|
| Docs + marketing | `{slug}-docs` | `{slug}-docs.pages.dev` → `{slug}.worldofpasa.com` |
| Read-only demo | `{slug}-demo` | `{slug}-demo.pages.dev` → `demo.{slug}.worldofpasa.com` |

## Repo layout

```
{project}/
  app/                    # application
  docs/                   # VitePress (index.md + developers/ + users/)
  cloudflare/
    docs.wrangler.toml
    demo.wrangler.toml
  scripts/seed-demo.mjs
  .github/workflows/
    deploy-docs.yml
    deploy-demo.yml
```

## Checklist

- [ ] MIT LICENSE, CONTRIBUTING.md, SECURITY.md
- [ ] `pnpm secrets:scan` clean
- [ ] `.env.example` documented
- [ ] Demo mode read-only (`NUXT_DEMO_MODE` or equivalent)
- [ ] Add entry to `worldofpasa-web/projects.json`
- [ ] GitHub org secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
