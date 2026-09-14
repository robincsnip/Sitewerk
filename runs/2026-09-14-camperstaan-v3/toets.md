# Toets — 2026-09-14-camperstaan-v3

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-86f077d2-f599-5d4f-9f95-ffbfa32ab5a9 · 2026-09-14  
**Bouwer-run:** cursor/harden-pagination-gate-6dd1 (PR #11, commit cb19e52 wees-header-gate)  
**Base:** PR #10 (`cursor/audit-depth-camperstaan-816d`) — inhoud al Toets-1-akkoord; deze run keurt print-gate + herprint

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-011 intern; bevindingen 1–7 met observatie/voorstel |
| Bewijslabels eerlijk | ja | F-007 onbekend (stop-rij); zoekrij “gratis…” onbekend; top-3 op gemeten |
| Packets compleet (T1) | ja | T-1 t/m T-5 voor code=ja (rijen 1–5); #6/#7 code=deels |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope |
| Geen GBP/LocalBusiness-theater | ja | n.v.t. + afgewezen in Bijlage B |
| Dieptenorm (T1) | ja | Canonical/filter-architectuur; gast-eerst + thema-hubs |
| Concurrent-gaps → werklijst | ja | Elke gap → #n of “Geen actie:” |
| Conflict Feiten↔Strategie | ja | `mix.md` vier conflicten met besluit |
| Taal / denylist | ja | Geen leverage/unlock/visibility boost/game-changer/synergie/“Google houdt van…” |
| P0/P1/P2 vs lead vs KPI | ja | Badges P0/P0/P1/P1/P2/P1/P2; #6 = P1 = werklijst = F-006 |
| Print / bijlagen (T1) | ja | PDF 10 pag.; cover Sitewerk + Camperstaan + 14 sep 2026; A+B p.10 |
| Wees-koppen (deze PR) | ja | Zie spot-check; gate fail-closed |
| Werklijst = klantrapport | ja | Rij 1–7: zelfde #, Wat, Wie, Klaar als; md ongewijzigd t.o.v. PR #10 |
| Inhoud 1:1 | ja | Alleen `print/rapport.html` + `print/rapport.pdf` in de run-diff |

## Wees-koppen (PDF geopend)

Gecommitte PDF (`pdfinfo`: 10 pagina's). Base-PDF (PR #10) had de wees-koppen; deze print niet.

| Punt | Verwacht | Gecontroleerd |
| --- | --- | --- |
| Markt-kop + tabel | zelfde pagina | p.4 kop + intro + hele tabel (base: kop p.3, tabel p.4) |
| Zoektermen-kop + tabel | zelfde pagina | p.5 kop + intro + tabel (base: kop p.4, tabel p.5) |
| Bevindingen H2 + eerste kaart | zelfde pagina | p.5 “Bevindingen” + P0-kaart 1 |
| Finding H3 2–7 | kop + body in dezelfde kaart | p.6: 2/3/4; p.7: 5=P2, 6=P1, 7=P2 — geen split |
| Geen hoofdstuk-per-pagina | secties mogen delen | p.3 twee secties; p.5 zoektermen+bevindingen; p.8 beslissingen+werklijst |
| Beslissingen doorlopend | drie kaarten, geen eigen pagina | p.8 alle drie + werklijst-h2 + “Deze maand” |
| “Maand twee / drie” | h3 + tabel samen | p.9 kop bovenaan mét tabel (niet wees onderaan p.8) |
| Bijlage A+B | samen, achteraan | p.10 beide tabellen |
| Gate op deze HTML | 0 failures | `check-pagination.js` → OK (10 pages) |
| Self-test fixture | moet blijven falen | `npm run test:pagination` → `selftest OK: checker fails closed on orphan heading` |

CSS/pipeline (gedeeld, niet Camperstaan-only): `.heading-keep` om h2/h3 + intro + eerste blok; `.table-shell`; pdf.js-geometrie; intro telt niet als body.

## Spot-check (standaard T1)

- Werklijst-sync: 7/7 actierijen identiek (#, Wat, Wie, Klaar als)
- Packets T-1..T-5: URL, huidige/gewenste staat, herstel, acceptatie
- Denylist / GBP / %-belofte: schoon
- PDF: aanwezig (A4, 10 pag.)

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / de paginatie-fix (cb19e52) geschreven. Rapport, werklijst en packets zijn niet herschreven om te winnen.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
