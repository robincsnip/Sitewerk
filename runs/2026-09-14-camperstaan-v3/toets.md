# Toets — 2026-09-14-camperstaan-v3

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-b5096606-0cca-5b1a-864b-6142f754a2e4 · 2026-09-14  
**Bouwer-run:** cursor/audit-depth-camperstaan-816d (PR #10, commit cc4e0c5 P-badge bevinding 6 p2→p1)

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-011 in `rapport-intern.md`; bevindingen 1–7 met observatie/voorstel; 1–4 en 7 ook gevolg |
| Bewijslabels eerlijk | ja | F-007 onbekend (stop-rij #8); zoekrij “gratis…” onbekend; top-3 op gemeten (F-001, F-003, F-002) |
| Packets compleet (T1) | ja | T-1 t/m T-5 voor code=ja (rijen 1–5); #6/#7 code=deels — geen packet vereist |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope; meetpunten zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | n.v.t. + afgewezen in Bijlage B |
| Dieptenorm (T1) | ja | Canonical/filter-architectuur; gast-eerst rewrite + thema-hubs (prune/hub) |
| Concurrent-gaps → werklijst | ja | Actie-kolom: elke gap → #n of “Geen actie:” + reden; KampeerHub → #7 |
| Conflict Feiten↔Strategie | ja | `mix.md` expliciet; vier conflicten met besluit |
| Taal / denylist | ja | Geen leverage/unlock/visibility boost/game-changer/synergie/“Google houdt van…” |
| Klanttaal / single-telling | ja | 306/293/13 alleen in mini-KPI bevinding 1 |
| P0/P1/P2 vs lead vs KPI | ja | Zie telling hieronder; badge #6 = werklijst = F-006 = P1 |
| Print / bijlagen (T1) | ja | `print/rapport.pdf` bestaat (PDF 1.4, cover Sitewerk + Camperstaan + 14 sep 2026); Bijlage A/B achteraan |
| Bijlage B | ja | Vier afgewezen tips met reden |
| Werklijst = klantrapport | ja | Rij 1–7: zelfde #, Wat, Wie, Klaar als; prio via finding-badge = werklijst-Prio |
| Fictieve follow-up runs | ja | 30d/90d apart gelabeld; geen live meting |

## P-telling (cc4e0c5)

| Bron | P0 | P1 | P2 |
| --- | ---: | ---: | ---: |
| Finding-badges rapport | 2 (1, 2) | 3 (3, 4, **6**) | 2 (5, 7) |
| Werklijst #1–7 | 2 | 3 (#3, #4, **#6**) | 2 (#5, #7) |
| Intern | F-001/F-003 | F-002/F-004/**F-006** | F-005/F-011 |

Lead “twee verbeteringen die minder urgent” = P2-bevindingen **5 en 7**.  
KPI: 3 prioriteiten = prio-kaarten; 7 acties = werklijstrijen 1–7; 577 pagina’s = sitemap; **4 urgent** = lead “vier punten” = bevindingen 1–4 (2×P0 + 2×P1, code=ja). Bevinding 6 is extra P1 (code=deels, hub-versterking) en zit niet in die cover-4 — zelfde definitie als Bouwer-commit; geen tweede waarheid op P2.

Triple-check bevinding 6: `:::finding p1` = werklijst #6 P1 = intern F-006 P1.

## Naslag-lesson (PR #6)

| Vorig punt | Status |
| --- | --- |
| Werklijst #3 ≠ rapport | niet herhaald |
| `taken/T-5.md` ontbrak | niet herhaald — packet compleet |
| P2-badge op Drenthe-hub vs werklijst P1 | niet herhaald — badge P1 |

## Spot-check

- Werklijst-sync: 7/7 actierijen identiek (#, Wat, Wie, Klaar als)
- Packets T-1..T-5: URL, huidige/gewenste staat, herstel, acceptatie
- Denylist / GBP / %-belofte: schoon
- PDF: aanwezig

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / de P-badge-fix (cc4e0c5) geschreven.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
