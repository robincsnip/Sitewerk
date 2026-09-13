# Push naar GitHub (Robin)

De Cursor-agent (`cursor[bot]`) heeft **geen schrijfrechten** op [`robincsnip/Sitewerk`](https://github.com/robincsnip/Sitewerk).
Lokaal staat alles klaar op branch `cursor/sitewerk-7f21` in `/home/ubuntu/repos/sitewerk`.

Zie ook [PUSH-BLOCKER.md](PUSH-BLOCKER.md).

## Optie A — jij pusht (snelst)

```bash
# Van git-bundle artifact (volledige history + branch):
git clone sitewerk-cursor-sitewerk-7f21.bundle sitewerk
cd sitewerk
git checkout cursor/sitewerk-7f21
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/robincsnip/Sitewerk.git
# Eerste push: empty remote → push branch, en zet main
git push -u origin cursor/sitewerk-7f21
git push origin cursor/sitewerk-7f21:main
gh pr create --repo robincsnip/Sitewerk --base main --head cursor/sitewerk-7f21 \
  --title "Sitewerk lab: fase 0–1 scaffold + demo PDF" \
  --body "Persoonlijk lab. Bouwer≠Toetser. Demo: runs/demo-2026-09-13/print/rapport.pdf"
```

Of kopieer de werkmap en push met jouw login.

## Optie B — geef Cursor schrijfrecht

Installeer/breid de **Cursor GitHub App** uit op account `robincsnip` en selecteer repo `Sitewerk` (Write).  
Daarna opnieuw push vragen in de agent.

**Nooit** pushen naar `Visionairs/*` voor deze lab-build.
