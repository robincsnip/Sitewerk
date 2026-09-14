# Playbook — Rapport & PDF

## Bron

`rapport-klant.md` is de inhoudsbron. HTML/PDF zijn afgeleiden.

## Pipeline

```bash
node scripts/md-to-html.js runs/<id>/rapport-klant.md
node scripts/html-to-pdf.js runs/<id>/print/rapport.html
```

Theme: [assets/rapport-theme.css](../assets/rapport-theme.css).  
Print-skelet: [templates/rapport-print.html](../templates/rapport-print.html).

## Vormregels

- Cover: merk Sitewerk + klant + peildatum  
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
