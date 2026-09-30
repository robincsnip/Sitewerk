# Werklijst — Langeveld Bouw

Run: 2026-09-30-langeveldbouw-v1 · Peildatum: 30 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Packet | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Alkmaar (en na ja: adres) in titel of intro + contactblok | 0× plaats; lokale queries + naamgenoten | wij | ja | nee | T-1 | plaats zichtbaar op home; tel en mail blijven; straat alleen ná ja | view-source home bevat Alkmaar | F-001 |
| 2 | P0 | Contactformulier koppelen aan de inbox | POST 503 niet-ingesteld; W3F_KEY leeg | gedeeld | ja | nee | T-2 | testbericht in info@langeveldbouw.nl, zonder mailprogramma van de bezoeker | test POST ok + inbox | F-003 |
| 3 | P0 | Drie dienstpagina's + link vanaf home | 8 diensten, 0 URL’s; SERP-gap | wij | ja | nee | T-3 | drie adressen met eigen kop; overzicht voor Google bijgewerkt | 200 + sitemap | F-002 |
| 4 | P1 | Paginatitels en hoofdadres-tag van de nieuwe site | snippets tonen oude titel; geen canonical | wij | ja | nee | T-4 | live titel klopt; Google weet welk adres de echte pagina is | view-source canonical | F-004 |
| 5 | P1 | Zelfde bedrijfsgegevens in de pagina als in de voet | 0 LocalBusiness | wij | ja | nee | T-5 | testhulpmiddel van Google toont naam, plaats, telefoon | Rich Results Test | F-005 |
| 6 | P1 | Bedrijfsprofiel in Google controleren of aanmaken | geen Maps-hit; label onbekend | jullie | nee | nee | — | ja/nee + link; geen sterren verzinnen | URL of schriftelijk nee | F-007 |
| 7 | P2 | Eigen “niet gevonden”-pagina + korte privacytekst | Vercel-plain 404; /privacy 404 | wij | ja | nee | T-7 | verkeerde link toont jullie site; /privacy bestaat | 404 HTML + /privacy 200 | F-006 |
| 8 | P2 | Toegang tot Search Console delen | geen baseline | jullie | nee | nee | — | Sitewerk kan impressies per adres zien | GSC-toegang | F-004 |

Rijen **code = ja** hebben een bestand `taken/T-<n>.md`. Zonder packet pakt Uitvoer de rij niet.

## Buiten scope

- Live deploy zonder eigenaren-ja
- Mail naar eindklanten
- Nieuwe site / Atelier
- Reviews kopen of sterren verzinnen
- KvK-straat publiceren zonder ja
- %-trafficbelofte
- Linkdisavow (geen data)

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**, **packet compleet**.
