# Werklijst — Camperstaan

Run: 2026-09-13-camperstaan-v2 · Peildatum: 13 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | NL-telling harmoniseren; BE/DE uit NL-sitemap | 306 vs 293 + live BE/DE | jullie | ja | nee | home = /plaatsen = sitemap-NL count | telling op live site | F-001 |
| 2 | P0 | Listing-template gast-eerst | claim domineert; SERP verliest | wij | ja | nee | prijs/voorzieningen/bron boven claim | steekproef Kampen | F-003 |
| 3 | P1 | Regio-filter → provincie-hub | canonical conflict | wij | ja | nee | Drenthe-filter op /provincie/drenthe | URL + canonical check | F-002 |
| 4 | P1 | Cache public + /plaatsen verlichten | no-store + 1,41 MB | wij | ja | nee | public cache listing; /plaatsen paginering | curl size + cache header | F-004 |
| 5 | P2 | JSON-LD geo + priceRange + amenities | velden bestaan al | wij | ja | nee | Rich Results Test | schema test | F-005 |
| 6 | P1 | Hub Drenthe intern versterken | intent SERP gap | gedeeld | deels | nee | steekproef herhalen | zoeksteekproef | F-006 |
| 7 | P3 | Linkdata verzamelen | onbekend | stop | nee | ja | geen zonder baseline | — | F-007 |

## Buiten scope

- Live deploy zonder eigenaren-ja
- Mail naar plek-eigenaren
- GBP / LocalBusiness
- %-trafficbelofte

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**.
