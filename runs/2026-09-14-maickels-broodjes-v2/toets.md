# Toets — 2026-09-14-maickels-broodjes-v2

**Fase:** Toets 1 (rapport)  
**Toetser-run:** bc-f1d34560-f522-5523-aa1e-d67e53d3fbf3 · 2026-09-14  
**Bouwer-run:** cursor/maickels-broodjes-audit-b2a7 (PR #12, commit bae07c6)  
**Base:** PR #11 (`cursor/harden-pagination-gate-6dd1`) — print-pipeline; deze run keurt het verse Maickels-dossier

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Finding-contract / KEEP-gat | ja | F-001–F-007 intern compleet; F-008–F-012 in bijlage A; top-3 observatie/gevolg/voorstel |
| Bewijslabels eerlijk | ja | Top-3 gemeten (F-001/002/003); F-009/010/011 onbekend, niet als feit; zoekrij Gate 54 = onbekend |
| Packets compleet (T1) | ja | T-1 t/m T-7 voor alle code=ja-rijen (7/7); URL, huidige/gewenste staat, herstel, acceptatie |
| Geen %-belofte zonder baseline | ja | Expliciet buiten scope; meetpunten zonder %-winst |
| Geen GBP/LocalBusiness-theater | ja | Lokale zaak; Maps niet ingezien; GBP-eerst afgewezen in Bijlage B; schema ná NAP-besluit |
| Dieptenorm (T1) | ja | One-pager + client-JPEG i.p.v. tekst-rooster; rewrite home; geen hub tot F-001 groen |
| Concurrent-gaps → werklijst | ja | Elke speler `#n` of `Geen actie:` + reden |
| Conflict Feiten↔Strategie | ja | `mix.md` vier conflicten; Feiten↔Kader = “geen conflict” |
| Taal / denylist | ja | Geen leverage/unlock/visibility boost/game-changer/synergie/“Google houdt van…” |
| P0/P1/P2 vs lead vs KPI | ja | Badges P0/P0/P1/P1/P1/P1/P2; KPI 3/7/1/2 = prioriteiten / acties / site:-home / 2×P0; lead zonder herhaalde telling |
| Print / bijlagen (T1) | ja | PDF 12 pag.; cover Sitewerk + Maickels Broodjes + 14 sep 2026; A p.11, B p.12 |
| Wees-koppen | ja | Gate OK (12 pag.); Markt p.4 + tabel; Zoektermen p.5 + tabel; werklijst-h3 + tabellen p.9 |
| Werklijst = klantrapport | ja | Rij 1–7: zelfde #, Wat, Wie, Klaar als; prio 1:1 via badges + `werklijst.md` |
| PR #2 | ja | Alleen citaat (feiten E-09 / intern); cijfers deze run = 14 sep live |

## Telling (spot-check)

| Bron | Getal |
| --- | --- |
| Werklijst | 7 rijen · P0 2 · P1 4 · P2 1 |
| Bevinding-badges | P0, P0, P1, P1, P1, P1, P2 |
| Cover-KPI | 3 prioriteiten · 7 acties · 1 pagina · 2 urgent |
| Top-3 | #1 weekschema-tekst · #2 titel/H1 regio · #3 tel/mail |
| Packets | T-1 … T-7 |

## Wees-koppen (PDF geopend)

Gecommitte PDF: 12 pagina's. `node scripts/check-pagination.js` → OK.

| Punt | Verwacht | Gecontroleerd |
| --- | --- | --- |
| Markt-kop + tabel | zelfde pagina | p.4 kop + intro + alle 7 rijen (incl. Wendy's / eigen site) |
| Zoektermen-kop + tabel | zelfde pagina | p.5 kop + intro + tabel + Bevindingen + P0-kaart 1 |
| Finding-kaarten | niet gesplitst | p.6: 2–4; p.7: 5–7 (P2) |
| Beslissingen doorlopend | drie kaarten, geen eigen pagina | p.8 alle drie + Keuze Uitvoer/Nieuw |
| Werklijst h3 + tabel | samen | p.9 Deze maand + Maand twee/drie |
| Bijlagen achteraan | A daarna B | p.11 A · p.12 B |
| Gate | 0 failures | `check-pagination.js` → OK (12 pages) |

## Live-steekproef (Toets, 14 sep ~16:18 UTC)

Niet hermeten als nieuwe waarheid; check of Bouwer-claims nog staan:

- Home 200, 21 521 B, title alleen merk, H1 zonder plaats, “Schema laden…”, geen `tel:`/`mailto:`/`ld+json`/canonical
- `robots.txt` / `sitemap.xml` / `/menu` = 404
- JPEG 1 619 469 B, 4500×5625; beeld nog **8–12 september** (Gate 54, Karwei, Unibrew, …)
- Apex 307 → www

`/api/weekschema-version` `v` is sindsdien gewijzigd (cache-bust); bestandsgrootte en week op het beeld gelijk aan E-05.

## Spot-check (standaard T1)

- Werklijst-sync: 7/7 identiek (#, Wat, Wie, Klaar als)
- Packets T-1..T-7: aanwezig en compleet
- Denylist / GBP / %-belofte: schoon
- Rapport niet herschreven om te winnen

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als `rapport-klant.md` / `werklijst.md` / `taken/` geschreven. Rapport, werklijst en packets zijn niet herschreven om te winnen.

## Volgende

Zie `next.md` → Robin (Eigenaren) ter beoordeling. Geen Uitvoer, geen live, geen mail.
