# Werklijst — Maickels Broodjes

Run: 2026-09-13-maickelsbroodjes · Peildatum: 13 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Title/meta (H1 nalopen): broodjes + Beek en Donk; bio mag in de body | title = merk; meta = bio | wij / jullie | ja | nee | view-source: title met merk + plaats + aanbod | GSC snippet later | F-003 |
| 2 | P0 | `tel:` + NAP + openingstijden/plekken in HTML (geen “Schema laden…” als enige) | crawler ziet geen rooster; geen bel-link | wij / jullie | ja | nee | view-source toont tijden/plek + klikbaar nummer @390px | tel-taps als analytics aan staat | F-005 F-006 |
| 3 | P0 | robots.txt + sitemap.xml + self-canonical www | robots/sitemap 404; geen canonical-tag | wij | ja | nee | beide 200; sitemap = live 200-URL’s; canonical www | index-dekking home | F-001 F-002 |
| 4 | P0 | GBP-NAP-check vs site (geen live wijziging zonder eigenaren-ja) | lokale zaak; profiel niet gezien | gedeeld | nee | nee | schriftelijke diff of “nog niet geclaimd” | Maps vs HTML | F-008 |
| 5 | P0 | GSC-property www.maickelsbroodjes.nl | geen queries/coverage | jullie | nee | nee | property of “nieuw / geen data” | GSC 28 dagen op home | F-008 |
| 6 | P1 | JSON-LD LocalBusiness/FoodEstablishment in eerste HTML = zichtbare NAP; geen sterren | lokale zaak; Camperstaan-reflex geldt niet | wij / jullie (type) | ja | ja (wacht op #2 feiten in HTML) | JSON-LD in eerste HTML; velden = tekst | Rich Results zonder rating-fout | F-007 |
| 7 | P2 | Extra URL (`/menu` of locatie) alleen bij echte extra zoekvraag / 2+ standplaatsen | 404 is geen automatische bouwopdracht | wij | ja | ja (wacht op besluit 2+ plekken of menukaart-intentie) | 200 + eigen H1, of bewust alleen home | geen 404-links vanaf home | F-004 |

## Buiten scope

- Ads, review-aankoop, blogreeks
- AggregateRating / sterren
- Tweede vestiging in schema
- Atelier-redesign (eerst vindbaarheid)
- %-doel zonder baseline

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**.
