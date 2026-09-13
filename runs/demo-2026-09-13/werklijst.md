# Werklijst — Demo Bakkerij Noord

Run: demo-2026-09-13 · Peildatum: 13 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Packet | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Drie dienstpagina’s + links vanaf home | intentie-match | wij | ja | nee | T-1 | preview met 3 URL’s | GSC impressies later | F-001 |
| 2 | P0 | Belknop boven de vouw (mobiel) | conversie | wij | ja | nee | T-2 | zichtbaar @390px | bel-taps | F-002 |
| 3 | P1 | Maps-reviewbrug home+contact | vertrouwen | wij | ja | nee | T-3 | zichtbare links | klik naar Maps | F-003 |
| 4 | P2 | XML-sitemap met nieuwe URL’s | ontdekking | wij | ja | nee | T-4 | /sitemap.xml 200 | index-dekking | F-004 |

Rijen **code = ja** hebben een bestand `taken/T-<n>.md`. Zonder packet pakt Uitvoer de rij niet.

## Buiten scope

- Rebrand / Atelier
- Review-incentives
- Ads

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**, **packet compleet**.
