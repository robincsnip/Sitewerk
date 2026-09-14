# Reflect — 2026-09-14-camperstaan-atelier

**Trigger:** Toets 2 afkeur (bc-256f8a88) · nog niet hersteld  
**Naslag-run:** bc-beca582a · 2026-09-14  
**PR:** #14 · branch `cursor/atelier-preview-templates-53ac` (Bouwer — preview niet aangepast in deze naslag)  
**Bron:** project-store `docs/atelier-toets-2.md` + `runs/2026-09-14-camperstaan-atelier/feedback.md`

## Wat ging mis (afkeur)

1. **Interne woorden op klant-UI**  
   Op de drie Camperstaan-huiden (niet de chooser) stond atelier-/audit-taal in zichtbare copy en in `<title>`: mal, specimen, dossier, hubbesluit, «Niet verzonnen», filter-auditcopy («Filter: Hoort hier te landen, niet op /plaatsen»), titels `Camperstaan — redactie|gids|compact`.  
   Oorzaak: generator schreef lab-/dossier-proza in de huid-HTML. Playbook zei al “geen audit-proza in de mal”; de **gerenderde huid** is klant-UI. Alleen de preview-banner mag intern merkteken zijn.

2. **Directory-URL’s 404**  
   `/redactie/`, `/gids/`, `/compact/` → 404 platte tekst `niet gevonden`. Alleen `…/index.html` is 200.  
   Oorzaak: preview-server mapt `/` → `index.html`, maar niet `/huid/` → `/huid/index.html`.

`npm run test:atelier` was groen: self-test dekt geen huid-copy-denylist en geen slash-routes.

## Wat níet de les is

- Chooser (scène 0) mag lab-taal.  
- Feiten 293 / Drenthe 19 / Kampen / claim € 99 waren gelijk; geen verzonnen tel/adres/uren.  
- Banner + `noindex`; locked acties dicht. Geen live, mail, Uitvoer.  
- Dit is **niet** de werklijst↔klantrapport-les van PR #7.

## Les (occurrence 1)

- **Huid ≠ mal.** Zichtbare copy en `<title>` van redactie/gids/compact: klanttaal. Denylist: mal, specimen, dossier, hubbesluit, «Niet verzonnen», filter-auditcopy, variantnamen in titels.  
- **Trailing slash = index.** Preview moet `/redactie/` (enz.) als 200 serveren.  
- Groene `test:atelier` is geen Toets 2-akkoord.

## Naslag-acties

| Actie | Bestand | Status |
| --- | --- | --- |
| Reflect | `reflect.md` | dit bestand |
| Outcome | `lessons/outcomes.md` | append |
| Kandidaat-code | `lessons/kandidaten-code.md` | 1× signal (count 1) |
| Playbook | `playbooks/atelier.md`, `playbooks/toets.md` | amend |
| Skill | — | **niet** (occurrence 1; ≥3 + test vereist) |

## Herhaling_count

1 (eerste echte Toets 2 op Atelier-preview)
