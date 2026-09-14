# Werklijst — Joost (Rugby Werkt + Nature Sports)

Run: 2026-09-14-rugby-werkt-v2 · Peildatum: 14 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Packet | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Nature Sports crawlbaar maken | 4 woorden HTML; deny-gate | jullie | ja | nee | T-1 | H1 + canonical + robots + body in HTML | view-source | F-001 |
| 2 | P0 | Vier Rugby Werkt dienst-URL's | sitemap alleen home | wij | ja | nee | T-2 | 4 URLs in pagina-overzicht | sitemap check | F-002 |
| 3 | P1 | H1 + meta + koppen home Rugby | 0 H1, geen meta | wij | ja | nee | T-3 | 1 H1 + meta description | view-source | F-003 |
| 4 | P1 | Klikbaar contact Rugby Werkt | geen tel/mailto | wij | ja | nee | T-4 | tel: + mailto: live | view-source | F-004 |
| 5 | P1 | Scrum College één verkooppad | twee domeinen | jullie | ja | nee | T-5 | besluit + één primaire URL | sitemap + linkcheck | F-006 |
| 6 | P2 | Alt-teksten + Organization schema | 3 zonder alt; geen JSON-LD | wij | ja | nee | T-6 | 0 lege alt; schema test | view-source + RRT | F-005, F-008 |
| 7 | P2 | APG-case slug opruimen | voorbeeld-artikel-2 | jullie | deels | nee | T-7 | 301 naar /cases/apg/ | curl -I | F-007 |
| 8 | P2 | Zoeksteekproef herhalen | aug-dossier verouderd | gedeeld | deels | nee | — | hersteekproef na crawl-fix | handmatig | F-009 |
| 9 | P3 | Linkdata verzamelen | onbekend | stop | nee | ja | — | geen zonder baseline | — | F-010 |

## Buiten scope

- Live deploy zonder eigenaren-ja
- GBP-wijzigingen Nature Sports
- Paid / spend
- Mail naar prospects
- %-trafficbelofte
- GSC-grafieken zonder export

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**, **packet compleet**.
