# Werklijst — Camperstaan

Run: 2026-09-14-camperstaan-v3 · Peildatum: 14 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | NL-telling harmoniseren; BE/DE uit NL-sitemap | 306 vs 293 + live BE/DE; Park4Night-gap buitenland | jullie | ja | nee | home = /plaatsen = sitemap-NL count | telling op live site | F-001 |
| 2 | P0 | Listing-template gast-eerst | Campercontact/gemeente/Visit winnen Kampen | wij | ja | nee | prijs/voorzieningen/bron boven claim | steekproef Kampen | F-003 |
| 3 | P1 | Regio-filter → provincie-hub | canonical conflict | wij | ja | nee | Drenthe-filter op /provincie/drenthe | URL + canonical check | F-002 |
| 4 | P1 | Cache public + /plaatsen verlichten | no-store + 1,41 MB | wij | ja | nee | public cache listing; /plaatsen paginering | curl size + cache header | F-004 |
| 5 | P2 | JSON-LD geo + priceRange + amenities | velden bestaan al | wij | ja | nee | Rich Results Test | schema test | F-005 |
| 6 | P1 | Hub Drenthe intern versterken | intent SERP gap; ANWB-merk niet te evenaren zonder hub | gedeeld | deels | nee | steekproef herhalen | zoeksteekproef | F-006 |
| 7 | P2 | Thema-overzichten water + gratis | KampeerHub-gap op themazoek | gedeeld | deels | nee | /thema/water en /thema/gratis in sitemap; elk min. 3 interne links | steekproef thema-query | F-011 |
| 8 | P3 | Linkdata verzamelen | onbekend | stop | nee | ja | geen zonder baseline | — | F-007 |

## Buiten scope

- Live deploy zonder eigenaren-ja
- Mail naar plek-eigenaren
- GBP / LocalBusiness
- %-trafficbelofte
- ANWB-routes of community-app bouwen (Park4Night-pariteit)

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**.
