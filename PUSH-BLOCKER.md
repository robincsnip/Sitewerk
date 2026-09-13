# Push / PR-blocker

**Doelremote:** [`robincsnip/Sitewerk`](https://github.com/robincsnip/Sitewerk) (persoonlijk, leeg aangemaakt 2026-09-13).  
**Branch:** `cursor/sitewerk-7f21`

## Wat al klaar is lokaal

Volledige fase 0–1 scaffold + demo-PDF in deze clone (`/home/ubuntu/repos/sitewerk`).

## Wat blokkeert push

De Cloud Agent `gh`-integratie is `cursor[bot]` en heeft alleen schrijfrechten op `Visionairs/*`.  
Op `robincsnip/Sitewerk`: `permissions.push=false`.  
`gh repo create` / Contents API → 403 *Resource not accessible by integration*.

## Wat Robin moet doen (één van)

1. **Cursor GitHub App** installeren/uitbreiden op account `robincsnip` en repo `Sitewerk` selecteren, **of**
2. Collaborator / fine-grained PAT met `contents:write` + `pull_requests:write` in de Cloud Agent secrets zetten, **of**
3. Lokaal: deze branch pushen en PR openen:

```bash
cd /home/ubuntu/repos/sitewerk   # of je lokale clone
git remote -v   # moet robincsnip/Sitewerk zijn — nooit Visionairs/*
git push -u origin cursor/sitewerk-7f21
gh pr create --repo robincsnip/Sitewerk --base main --head cursor/sitewerk-7f21 \
  --title "Sitewerk lab: fase 0–1 scaffold + demo PDF" \
  --body "Persoonlijk lab. Bouwer≠Toetser. Demo-PDF under runs/demo-2026-09-13/print/."
```

## Artifacts in deze cloud-run

- `sitewerk-cursor-sitewerk-7f21.bundle` — volledige git history + branch  
- `sitewerk-demo-rapport.pdf` — demo PDF  
- Lokaal pad: `/home/ubuntu/repos/sitewerk`
