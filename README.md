# Sitewerk

Persoonlijk lab voor de Sitewerk-zaaklijn (Visionairs).  
**Dit is nog niet de productvoordeur van de Visionairs-org** — migratie volgt pas na eigenaren-akkoord.

## Wat dit is

Eén zaak: brief (SKU’s) in → Scout (optioneel) → Audit → Toets-lus → Uitvoer **of** Nieuw → Nameting.

| Rol | Taak |
| --- | --- |
| **Scout** | Optioneel KEEP ja/nee |
| **Bouwer** | Rapport, werklijst, packets, print — sluit de lijn niet af |
| **Toetser** | Aparte run; Toets 0–3 |
| **Uitvoer** | Packets ná Toets 1 |
| **Nameting** | Zelfde finding-IDs, voor/na |
| **Naslag** | Afkeur / meting / orchestratie-breuk |
| **Atelier** | SKU Nieuw |
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
AGENTS.md
docs/PIJPLIJN.md
playbooks/orchestratie.md   # harde overdracht
agents/bouwer.md
agents/toetser.md
playbooks/                  # scout, audit, toets, uitvoer, nameting, naslag, atelier, rapport-pdf
templates/                  # o.a. brief, taak, next, scout, nameting
runs/<id>/
```

## Isolatieregel (hard)

`toets.md` met oordeel `akkoord` is **ongeldig** in dezelfde agent-run als het gekeurde artefact. Parent lanceert Toetser als aparte run. “Door de pijplijn” zonder die lus is ongeldig.

## Locked acties

Zonder expliciet ja van de eigenaren: geen live, geen externe mail, geen geld, geen publiceren. Stilte ≠ ja.
