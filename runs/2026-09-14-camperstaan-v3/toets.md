# Toets — 2026-09-14-camperstaan-v3

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-b6c01b38-2bef-51bf-8d22-b2adc413178f · 2026-09-14  
**Bouwer-run:** cursor/audit-depth-camperstaan-816d (PR #10, commit 80af24d markt & zoektermen)

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-010 in `rapport-intern.md`; bevindingen 1–6 met observatie/gevolg/voorstel |
| Bewijslabels eerlijk | ja | F-007 onbekend (werklijst #7 code=nee); F-010 afgeleid expliciet; top-3 op gemeten (F-001, F-003, F-002) |
| Packets compleet (T1) | ja | T-1 t/m T-5 voor alle code=ja-rijen (1–5); rij 6 code=deels — geen packet vereist |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope; meetpunten zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | n.v.t. + afgewezen in Bijlage B |
| Dieptenorm (T1) | ja | Canonical/architectuur; gast-eerst + BE/DE-besluit; markt + zoekintentie-tabellen |
| Markt & zoektermen (v3-focus) | ja | Concurrententabel (7 spelers) + zoektermenmatrix (5 queries); labels + disclaimer GSC |
| Conflict Feiten↔Strategie | ja | `mix.md` expliciet; vier conflicten met besluit |
| Taal / denylist | ja | Geen denylist-trefwoorden |
| Klanttaal / single-telling | ja | 306/293/13 in mini-KPI bevinding 1; markt/zoektermen in eigen secties |
| Print / bijlagen (T1) | ja* | PDF aanwezig (~9 pag. vs v2 8); paginatie-gate niet herhaald (geen Playwright in Toetser-omgeving) |
| Bijlage B | ja | Vier afgewezen tips met reden |
| Werklijst = klantrapport | ja | Rij 1–6: zelfde #, Wat, Wie, Klaar als (naslag-lesson PR #6 niet herhaald) |
| Fictieve follow-up runs | ja | 30d/90d runs apart gelabeld; niet meegenomen als live meting |

## Markt & zoektermen (v3 spot-check)

| Punt | Verwacht (brief amend v3) | Gecontroleerd |
| --- | --- | --- |
| Concurrententabel | Webregie-breedte, Sitewerk-klanttaal | Sectie “Markt & concurrenten”: 7 spelers, rol, sterkte, label |
| Zoektermenmatrix | Intentie + zichtbaarheid + label | 5 queries; “gratis camperplaats Nederland” = onbekend (eerlijk) |
| Geen posities zonder GSC | Disclaimer in sectie | “Geen posities of verkeercijfers zonder Search Console” |
| Afgeleide marktcontext | Niet als gemeten | ANWB/KampeerHub label afgeleid; F-010 in Bijlage A |
| Koppeling bevindingen | Markt niet los van acties | F-009 steekproef Kampen/Drenthe; besluiten/werklijst ongewijzigd coherent |

## Naslag-lesson (PR #6)

| Vorig punt | Status |
| --- | --- |
| Werklijst #3 ≠ rapport | niet herhaald — beide: regio-filter → provincie-hub |
| `taken/T-5.md` ontbrak | niet herhaald — packet compleet |

## Spot-check

- Werklijst-sync: 6/6 rijen identiek (#, Wat, Wie, Klaar als)
- Cover HTML: Sitewerk + Camperstaan + peildatum; geen Bouwer/SKU op cover
- Packets T-1..T-5: alle aanwezig
- PDF: `print/rapport.pdf` aanwezig; `/Count` ≈ 9 (v2 was 8 — verwacht door nieuwe tabellen)

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / markt-tabellen geschreven.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
