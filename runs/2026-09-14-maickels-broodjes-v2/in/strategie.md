# Strategie — Maickels Broodjes

Peildatum: 14 september 2026 · Run: 2026-09-14-maickels-broodjes-v2

## Wat de site moet doen

Een buurtzoeker (of iemand die de truck volgt) moet in één keer zien: **wat** (broodjes), **waar deze week**, **hoe laat**, **hoe bellen of boeken**.

Twee intenties:

1. **Nu een broodje** — standplaats + tijd (weekschema).
2. **Truck boeken** — feest / event / catering.

## Keuze Uitvoer vs Nieuw

**Uitvoer** op de bestaande Next-pagina. De vorm is al een productpagina (hero, sauzen, schema-sectie, formulier). De gaten zijn tekst die Google en een eerste fetch kunnen lezen.

## Content-besluit

- **Rewrite** homepage: titel/meta/H1, weekschema als HTML, contact, kernmenu.
- **Geen prune** van bestaande secties (sauzen, formulier, socials blijven).
- **Hub later:** eigen boekingsblok of `/boekingen` — pas ná HTML-schema op home (deny: geen extra landings tot F-001 groen).
- **Niet:** lege `/locaties`, `/menu`, `/contact` (nu 404) als schijn-architectuur.

## Prioriteit

Feit (crawler ziet “Schema laden…”) wint van wens (mooie JPEG zoals op socials). Beeld mag blijven; tekst moet eerst.
