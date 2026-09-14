# Toets — 2026-09-13-camperstaan-v2

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-7b99c357-fbe4-548d-a1eb-14297ea74f2f · 2026-09-14  
**Bouwer-run:** cursor/klanttaal-camperstaan-2ee8 (PR #8, commit 248feaf pagination gate + ad362f6 print breaks)

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-008 in `rapport-intern.md`; bevindingen 1–6 met observatie/gevolg/voorstel |
| Bewijslabels eerlijk | ja | F-007 onbekend (werklijst #7 code=nee); top-3 op gemeten bevindingen |
| Packets compleet (T1) | ja | T-1 t/m T-5 voor alle code=ja-rijen (1–5) |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope; meetpunten zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | n.v.t. + afgewezen in Bijlage B |
| Dieptenorm (T1) | ja | Pagina-overzicht/canonical-architectuur; gast-eerst listing + BE/DE-besluit |
| Conflict Feiten↔Strategie | ja | `mix.md` expliciet; vier conflicten met besluit |
| Taal / denylist | ja | Geen denylist-trefwoorden |
| Klanttaal / single-telling | ja | 306/293/13 in mini-KPI binnen bevinding 1; lead zonder herhaalde metingen |
| Print / paginering (T1) | ja | `audit:finish` + `check-pagination.js` OK — 11 pag.; geen split blocks |
| Bijlage B | ja | Vier afgewezen tips met reden |
| Werklijst = klantrapport | ja | Rij 1–6: zelfde #, Wat, Wie, Klaar als |

## Paginering-gate (audit:finish)

| Punt | Status |
| --- | --- |
| `npm run audit:finish -- 2026-09-13-camperstaan-v2` | geslaagd |
| `check-pagination.js` | OK (11 pages) |
| Cover p.1: Sitewerk + Camperstaan + datum + KPI; geen interne termen | akkoord |
| Hoofdstukken / kaarten niet gesplitst over pagina's | akkoord |
| Print = bron `rapport-klant.md` | akkoord |

## Naslag-lesson (PR #6)

| Vorig punt | Status |
| --- | --- |
| Werklijst #3 ≠ rapport | niet herhaald — beide: regio-filter → provincie-hub |
| `taken/T-5.md` ontbrak | niet herhaald — packet compleet |

## Spot-check (14 sep 2026)

- Werklijst-sync script: 6/6 rijen identiek (#, Wat, Wie, Klaar als)
- Cover HTML: geen Bouwer/Toets/SKU/klanttaal/werklijst.md
- Packets T-1..T-5: alle aanwezig
- Pagination gate: 0 failures op 11 pagina's

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / paginering-fix geschreven.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
