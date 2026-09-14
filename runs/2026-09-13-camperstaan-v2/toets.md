# Toets — 2026-09-13-camperstaan-v2

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-9f3f8324-eb8a-5a48-b13d-697977b61f0f · 2026-09-14  
**Bouwer-run:** cursor/klanttaal-camperstaan-2ee8 (PR #8, commit ad362f6 paginering + 9dea00d Papier)

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-008 in `rapport-intern.md`; bevindingen 1–6 met observatie/gevolg/voorstel |
| Bewijslabels eerlijk | ja | F-007 onbekend; F-006/F-008 afgeleid; top-3 op gemeten bevindingen |
| Packets compleet (T1) | ja | T-1 t/m T-5 voor alle code=ja-rijen (1–5) |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope; meetpunten zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | n.v.t. + afgewezen in Bijlage B |
| Dieptenorm (T1) | ja | Pagina-overzicht/canonical-architectuur; gast-eerst listing + BE/DE-besluit |
| Conflict Feiten↔Strategie | ja | `mix.md` expliciet; vier conflicten met besluit |
| Taal / denylist | ja | Geen denylist-trefwoorden |
| Klanttaal / single-telling | ja | 306/293/13 in mini-KPI binnen bevinding 1; lead zonder herhaalde metingen |
| Print / paginering (T1) | ja | 11 pag.; hoofdstukken op nieuwe pag.; finding-titels niet gesplitst; kaarten intact |
| Bijlage B | ja | Vier afgewezen tips met reden |
| Werklijst = klantrapport | ja | Rij 1–6: zelfde #, Wat, Wie, Klaar als |

## Paginering (commit ad362f6)

| Punt | Status |
| --- | --- |
| Cover p.1: merk + klant + datum + KPI; geen interne termen | akkoord |
| Hoofdstukken (Bevindingen, Beslissingen, Werklijst, Bijlagen) start op pagina-top | akkoord (PDF char-pos 0) |
| Finding-kaarten niet midden in titel/card gesplitst | akkoord (6/6 titels op één pagina) |
| Prio-/decision-/measure-cards leesbaar | akkoord |
| Print = bron `rapport-klant.md` | akkoord |
| PDF aanwezig (502 kB, 11 pag.) | akkoord |

## Naslag-lesson (PR #6)

| Vorig punt | Status |
| --- | --- |
| Werklijst #3 ≠ rapport | niet herhaald — beide: regio-filter → provincie-hub |
| `taken/T-5.md` ontbrak | niet herhaald — packet compleet |

## Spot-check (14 sep 2026)

- PDF tekstextractie: cover zonder Bouwer/Toets/SKU/klanttaal/werklijst.md
- Werklijst-sync: 6/6 rijen identiek (#, Wat, Wie, Klaar als)
- Pagina's 5–7: bevindingen 1–6 zonder titel-split over pagina's
- `print/rapport.html`: report-section--chapter/appendix + break-inside avoid op kaarten

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / paginering-fix geschreven.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
