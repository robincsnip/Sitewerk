# Werklijst — Camperstaan.nl

Run: 2026-09-13-camperstaan · Peildatum: 13 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | GSC-property www.camperstaan.nl + export per pad (`/plaatsen/`, `/plaats/`, `/provincie/`) | zonder indexdekking is template-sturing giswerk | jullie / gedeeld | nee | nee | property + spreadsheet of “nieuw / geen data” | GSC geïndexeerd vs uitgesloten per pad | F-006 |
| 2 | P0 | Regel stadshubs: unieke keuzehulp, of prune/merge/noindex bij dunne één-plek-steden | 253 hubs + 12 provincies + 306 plekken zonder taak = kannibalisatie | wij | ja | nee | schriftelijke regel + 10 voorbeelden (houden vs merge) | later GSC impressies per template | F-003 F-007 |
| 3 | P1 | Steekproef 10 plekken: unieke H1, bronlink, Campground, geen LocalBusiness | directory-waarde is de plek-URL; schema moet plek blijven | wij | ja | nee | checklist 10 URL’s afgevinkt | Rich Results 5 URL’s | F-001 F-004 |
| 4 | P1 | Copy op de 20 stadshubs met de meeste plekken (ná regel + GSC-signaal) | dunne hubs herhalen plek-intentie | wij / jullie | ja | ja (wacht op #1 signaal + #2 regel) | 20 hubs met eigen intro + links naar plekken | GSC impressies `/plaats/*` | F-007 |
| 5 | P2 | Interne links home → provincie → stad → plek nalopen | gekozen primary moet de ankers krijgen | wij | ja | ja (wacht op #2) | anker-regel in docs; steekproef 5 paden | crawl interne links | F-003 |
| 6 | P3 | Host/HSTS/robots dashboard: niet wijzigen | al in orde | wij | nee | nee | geen regressie | apex → www; robots Disallow blijft | F-002 F-005 |

## Buiten scope

- GBP / LocalBusiness op Camperstaan als merk-SEO
- Ads, dashboard-SEO, Atelier-redesign
- 500 blogposts “over camperen”
- Sterren/aggregateRating op plekken
- %-traffic of rank-belofte zonder GSC-baseline

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**.
