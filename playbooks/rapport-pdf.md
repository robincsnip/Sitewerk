# Playbook — Rapport & PDF

## Bron

`rapport-klant.md` is de inhoudsbron. HTML/PDF zijn afgeleiden.

## Pipeline

```bash
npm run audit:finish -- <run-id>
# intern: md-to-html → html-to-pdf → check-pagination (gate)
```

Handmatig:

```bash
node scripts/md-to-html.js runs/<id>/rapport-klant.md
node scripts/html-to-pdf.js runs/<id>/print/rapport.html
node scripts/check-pagination.js runs/<id>/print/rapport.html
```

Theme: [assets/rapport-theme.css](../assets/rapport-theme.css) (richting **C — Papier**).  
Tokens: [tokens/](../tokens/) (`colors`, `typography`, `spacing`, `components`).  
Print-skelet: [templates/rapport-print.html](../templates/rapport-print.html).

## Vormregels

- Cover p.1: merk, klant, datum, belofte (italic), KPI-tabel — geen interne termen  
- Display-font + body-font (geen Inter/Roboto/Arial als face)  
- Geen paarse AI-gradients / glow  
- “In het kort” + top 3 zwaarder dan bijlagen  
- A4 print-first  

## Taal

Nederlands, korte zinnen, conclusiekoppen.  
Verboden: leverage, unlock, visibility boost, game-changer, synergie, “Google houdt van…”.

Zie [skills/klanttaal/SKILL.md](../skills/klanttaal/SKILL.md) voor klanttaal en single-telling.

## Amend — Uitnodigende print (sep 2026)

Het PDF moet **leesbaar** zijn, niet een blok zwarte tekst.

| Element | Regel |
| --- | --- |
| Cover + “In het kort” | Meeste witruimte; lead-tekst korter dan body |
| Top 3 prioriteiten | Visueel afgebakend (kaart/lijst), niet lange alinea's |
| Bevindingen | Eén subkop per thema; korte alinea's; lijsten waar kan |
| Tabellen | Compact; lange uitleg in proza, niet in elke cel |
| Bijlagen | Achteraan; kleiner of lichter dan hoofdtekst |
| Typografie | Display + body-font (theme); hiërarchie h1 > h2 > h3 > body |
| Pagina | A4 print-first; secties niet midden in een kop afbreken |

Na CSS-wijziging: altijd `npm run audit:finish -- <run-id>` en visueel controleren vóór Toetser.

## Amend — Paginering (sep 2026)

- Hoofdstuk-secties (`report-section--chapter`, bijlagen) starten op nieuwe pagina; “In het kort” + scope mogen samen doorlopen.
- Atomische blokken (`finding-shell`, `werklijst-block`, `prio-shell`, `good-shell`, `decision-card`, `measure-card`, `table-shell`): `break-inside: avoid`; geen grid-split in print (grids → block/columns).
- Meerdere bevindingen in één hoofdstuk mogen op dezelfde pagina doorlopen zolang het blok niet splitst.
- Besluitkaarten na elkaar: `break-before: page` op `decision-card + decision-card`.
- Koppen: `break-after: avoid` + direct volgend blok `break-before: avoid`.
- Tabellen: rijniveau `break-inside: avoid` (scope, bijlage, werklijst); werklijst h3 + tabel in één `werklijst-block`.
- `hr.section-break` verborgen in print; `preferCSSPageSize: true` in html-to-pdf.

## Paginatie-gate (hard — sep 2026)

`npm run audit:finish` roept **`scripts/check-pagination.js`** aan ná PDF-build. **Faalt de check → geen geslaagde finish** (exit 1).

| Code | Wat |
| --- | --- |
| `split-block` | Atomair blok (finding-shell, prio-shell, decision-card, …) over 2+ pagina's |
| `split-table-row` | Tabelrij over 2+ pagina's |
| `orphan-heading` | h2/h3 op andere pagina dan direct volgend blok (start/end-snippet op verschillende pagina's) |

Werking: Playwright rendert print-HTML naar PDF (`media: print`, zelfde marges als `html-to-pdf.js`); `pdf-parse` leest per-pagina tekst; start- en eind-snippet van elk atomair blok, tabelrij en kop+volgblok moeten op één pagina vallen. Bij mismatch: exit 1, geen “Audit print ready”. Geen stille success bij slechte paginering.

## Amend — Grafische modules (sep 2026)

Inspiratie (patronen, geen assets gekopieerd): SE Ranking modulaire rapporten, CrawlRaven severity-kaarten, dashboard KPI-scorecards.

Markdown-fences in `rapport-klant.md` → HTML via `scripts/md-to-html.js`:

| Fence | Gebruik |
| --- | --- |
| `::: kpi` | KPI-rij bovenaan (value\|label\|note per regel) |
| `::: prio-cards` | Top-3 prioriteiten als kaarten |
| `::: good-grid` | “Wat goed staat” als checklist-grid |
| `::: finding p0/p1/p2` | Bevinding met severity-badge; optioneel `@kpi`…`@end` |
| `::: decisions` | Besluitkaarten |
| `::: measure` | Meetplan als tijdlijn-kaarten |
| `::: lead` / `::: callout-decision` | Samenvatting + besluitvraag |

Kleuren en typografie: Sitewerk-groen (`assets/rapport-theme.css`). Geen SE Ranking-logo's, geen copyrighted templates.
