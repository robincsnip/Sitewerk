# Toets — 2026-09-13-camperstaan-v2

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-0013d2b0-0f0e-562d-a862-a893c0365dea · 2026-09-14  
**Bouwer-run:** cursor/klanttaal-camperstaan-2ee8 (PR #8, commit 0614d00 layout-flow)

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
| Print / paginering (T1) | ja | `check-pagination.js` OK — 8 pag.; 0 split failures |
| Layout-tweaks (focus) | ja | Zie spot-check hieronder |
| Bijlage B | ja | Vier afgewezen tips met reden |
| Werklijst = klantrapport | ja | Rij 1–6: zelfde #, Wat, Wie, Klaar als |

## Layout-tweaks (spot-check 14 sep 2026)

| Punt | Verwacht | Gecontroleerd |
| --- | --- | --- |
| Beslissingen niet op eigen pagina | Sectie mag doorlopen; geen `page-break-before` op chapter/kaarten | p6: bevinding 6 + alle 3 besluitkaarten + werklijst-tabellen; geen `--chapter` op Beslissingen |
| Bijlage A + B delen pagina | Beide bijlagen op één pagina starten | p7: koppen Bijlage A én Bijlage B; F-001 t/m F-008 op p7 |
| Geen vinkjes “Wat al goed staat” | Geen `good-icon` in HTML | `good-item` alleen tekst; geen checkmark-CSS in output |
| Paginatie-gate | 0 failures | `node scripts/check-pagination.js` → OK (8 pages) |

## Naslag-lesson (PR #6)

| Vorig punt | Status |
| --- | --- |
| Werklijst #3 ≠ rapport | niet herhaald — beide: regio-filter → provincie-hub |
| `taken/T-5.md` ontbrak | niet herhaald — packet compleet |

## Spot-check

- Werklijst-sync: 6/6 rijen identiek (#, Wat, Wie, Klaar als)
- Cover HTML: geen Bouwer/Toets/SKU/klanttaal/werklijst.md
- Packets T-1..T-5: alle aanwezig
- Pagination gate: 0 failures op 8 pagina's

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / layout-tweaks geschreven.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
