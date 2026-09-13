# Werklijst — Camperstaan

Run: 2026-09-13-camperstaan · Peildatum: 13 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Packet | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | NL-sitemap en telling gelijk | twee waarheden 306/293 + BE/DE | wij | ja | nee | T-1 | home = `/plaatsen` = sitemap-NL | telling drie bronnen | F-001 |
| 2 | P0 | Plekpagina gast eerst + JSON-LD geo/prijs | listing verliest van de bron; claim eet de URL | wij | ja | nee | T-2 | claim ná gastfeiten; geo in JSON-LD | HTML-volgorde + JSON-LD | F-004 |
| 3 | P0 | Publieke HTML cachen | no-store, CDN MISS, 577 URL’s | wij | ja | nee | T-3 | `public` + s-maxage op `/` en listing | header `cache-control` | F-002 |
| 4 | P1 | `/plaatsen` lichter | 1,41 MB per hit | wij | ja | nee | T-4 | gewicht onder afgesproken grens; slugs blijven in sitemap | bytes `/plaatsen` | F-003 |
| 5 | P1 | KvK op `/over` | € 99 zonder nummer | jullie | nee | nee | — | nummer of zin “nog geen KvK” zonder doen alsof | view `/over` | F-009 |
| 6 | P1 | Provincie-hubs uit bestaande telling | hubs winnen de query nu niet | gedeeld | nee | nee | — | gratis/betaald in copy; geen nieuwe verhalen | zelfde Drenthe-query | F-005 |

Rijen **code = ja** hebben een bestand `taken/T-<n>.md`. Zonder packet pakt Uitvoer de rij niet.

## Buiten scope

- Atelier / nieuwe site
- Google-bedrijfsprofiel
- Review-module / sterren
- Mail naar plek-eigenaren
- Linkbuilding-programma (geen data)

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**, **packet compleet**.
