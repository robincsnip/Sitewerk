# Sitewerk

Persoonlijk lab voor de Sitewerk SEO-machine (Visionairs).  
**Dit is nog niet de productvoordeur van de Visionairs-org** — migratie volgt pas na eigenaren-akkoord.

## Wat dit is

Eén voordeur: brief in → rapport + werklijst + (optioneel) PDF uit.

| Rol | Taak |
| --- | --- |
| **Bouwer** | Schrijft rapport, werklijst, print |
| **Toetser** | Aparte QC-run; mag niet in dezelfde run als Bouwer “akkoord” zetten |
| **Uitvoer** | PRs/taken ná Toets 1 akkoord |
| **Naslag** | Leert van afkeur/metingen (append-only) |
| **Atelier** | Optioneel webdesign ná redesign-gate |
| **Eigenaren** | Live / mail / geld |

## Snel starten

```bash
# Demo-PDF (Chrome headless)
npm run pdf:demo

# Of handmatig
node scripts/md-to-html.js runs/demo-2026-09-13/rapport-klant.md
node scripts/html-to-pdf.js runs/demo-2026-09-13/print/rapport.html
```

Output: `runs/demo-2026-09-13/print/rapport.pdf`

## Structuur

```text
AGENTS.md                 # enige voordeur
docs/PIJPLIJN.md
agents/bouwer.md
agents/toetser.md
playbooks/                # audit, toets, naslag, uitvoer, atelier, rapport-pdf
templates/
assets/rapport-theme.css
scripts/                  # md→html→pdf
lessons/
runs/<id>/
```

## Isolatieregel (hard)

`toets.md` met oordeel `akkoord` is **ongeldig** als die in dezelfde agent-run is geschreven als `rapport-klant.md` of `werklijst.md`. Parent lanceert Toetser als aparte run.

## Locked acties

Zonder expliciet ja van de eigenaren: geen live, geen externe mail, geen geld, geen publiceren. Stilte ≠ ja.

## Remote

Persoonlijke repo: [`robincsnip/Sitewerk`](https://github.com/robincsnip/Sitewerk).  
Push/PR vanaf deze Cloud Agent kan geblokkeerd zijn door ontbrekende Cursor-app-rechten op het persoonlijke account — zie [`PUSH-BLOCKER.md`](PUSH-BLOCKER.md).
