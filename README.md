# Sitewerk

Persoonlijk lab voor de Sitewerk SEO-machine (Visionairs).  
**Dit is nog niet de productvoordeur van de Visionairs-org** — migratie volgt pas na eigenaren-akkoord.

## Wat dit is

Eén voordeur: brief in → rapport + werklijst + PDF uit.

| Rol | Taak |
| --- | --- |
| **Bouwer** | Schrijft rapport, werklijst, print |
| **Toetser** | Aparte QC-run; mag niet in dezelfde run als Bouwer “akkoord” zetten |
| **Uitvoer** | PRs/taken ná Toets 1 akkoord |
| **Naslag** | Leert van afkeur/metingen (append-only) |
| **Atelier** | Drie preview-huiden (lab) of nieuwe site ná redesign-gate |
| **Eigenaren** | Live / mail / geld |

## Snel starten

```bash
# Bouwer: verplicht na rapport-klant.md (md → html → pdf)
npm run audit:finish -- <run-id>

# Opnieuw bouwen na edits
npm run pdf:run -- <run-id>

# Atelier-preview (niet live)
npm run atelier:preview -- 2026-09-14-camperstaan-atelier
# http://127.0.0.1:4173/
```

Output: `runs/<run-id>/print/rapport.pdf` (automatisch via `audit:finish`)

Pijplijn- en run-wijzigingen staan op feature-branches tot merge. Een agent die vanaf `main` start ziet alleen `runs/demo-2026-09-13/` — niet de draft-PR’s (#2–#4).

## Structuur

```text
AGENTS.md                 # enige voordeur
docs/PIJPLIJN.md
agents/bouwer.md
agents/toetser.md
agents/atelier.md
playbooks/                # audit, toets, naslag, uitvoer, atelier, rapport-pdf
templates/
assets/rapport-theme.css
scripts/                  # md→html→pdf · atelier-preview
assets/atelier/           # screen-CSS drie huiden
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
