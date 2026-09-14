# Toets — 2026-09-13-camperstaan-v2

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-c13ba213-019d-542a-b377-647acb0f5e7b · 2026-09-14  
**Bouwer-run:** cursor/klanttaal-camperstaan-2ee8 (PR #8, commit 2f4d3ae grafische print)

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
| Klanttaal / single-telling | ja | 306/293/13 in mini-KPI binnen bevinding 1; lead + KPI-rij zonder herhaalde metingen |
| Print (T1) | ja | Cover Sitewerk + klant + datum; KPI-kaarten, prio-cards, severity-badges; HTML/PDF = `rapport-klant.md` |
| Bijlage B | ja | Vier afgewezen tips met reden |
| Werklijst = klantrapport | ja | Rij 1–6: zelfde #, Wat, Wie, Klaar als (script-check) |

## Grafische print-laag (her-run na 2f4d3ae)

| Punt | Status |
| --- | --- |
| KPI-rij (3/6/577/4) consistent met dossier | akkoord |
| Prio-cards, good-grid, decision-cards, measure-cards | akkoord |
| Severity-badges P0/P1/P2 op bevindingen | akkoord |
| Mini-KPI @kpi in bevinding 1 (306/293/13) | akkoord — cijfers binnen bevinding, niet in lead |
| Print geen tweede waarheid t.o.v. markdown | akkoord |
| PDF aanwezig en gegenereerd (862 kB) | akkoord |

## Naslag-lesson (PR #6)

| Vorig punt | Status |
| --- | --- |
| Werklijst #3 ≠ rapport | niet herhaald — beide: regio-filter → provincie-hub |
| `taken/T-5.md` ontbrak | niet herhaald — packet compleet |

## Spot-check (14 sep 2026)

- `print/rapport.html`: kpi-row, prio-grid, finding-badge P0/P1/P2, mini-kpi, measure-grid aanwezig
- Werklijst-sync: 6/6 rijen identiek (Python-vergelijking)
- Geen wijziging in `werklijst.md` of `taken/` bij grafische commit

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / grafische print geschreven.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
