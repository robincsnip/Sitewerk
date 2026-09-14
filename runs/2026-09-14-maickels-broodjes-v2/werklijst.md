# Werklijst — Maickels Broodjes

Run: 2026-09-14-maickels-broodjes-v2 · Peildatum: 14 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Packet | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Weekschema als tekst in de HTML | “Schema laden…” + JPEG week 8–12 sep | gedeeld | ja | nee | T-1 | view-source toont deze week plekken en tijden als tekst, niet alleen "Schema laden…" | view-source | F-001 |
| 2 | P0 | Titel, meta en H1 met broodjes + regio | title alleen merk; meta = bio | wij | ja | nee | T-2 | title en H1 noemen broodjes én een plaats of regio | view-source | F-002 |
| 3 | P1 | Klikbaar telefoonnummer en zichtbaar mailadres | geen tel:/mailto:; directories wel | wij | ja | nee | T-3 | tel: en mailto: in de broncode | view-source | F-003 |
| 4 | P1 | Pagina-overzicht en hoofdadres voor Google | robots/sitemap 404; geen canonical | wij | ja | nee | T-4 | overzicht van pagina-adressen geeft 200; homepage heeft één vast hoofdadres | curl 200 + view-source | F-004 |
| 5 | P1 | Menu en aanbod in tekst op de homepage | eigen site alleen sauzen; derden hebben namen | wij | ja | nee | T-5 | kernbroodjes met naam in de HTML | view-source | F-005 |
| 6 | P1 | Boekingen op de eigen site | foodtruckbooking/FestiFood winnen boek-zoek | wij | ja | nee | T-6 | eigen blok of pagina met hoe je de truck boekt | URL + view-source | F-006 |
| 7 | P2 | Extra gegevens voor Google (naam, adres, telefoon) | geen JSON-LD; ná NAP-besluit | wij | ja | nee | T-7 | naam, adres en telefoon staan in de extra gegevens die Google leest | testhulpmiddel extra gegevens | F-007 |

## Buiten scope

- Live deploy zonder eigenaren-ja
- Google-bedrijfsprofiel wijzigen of sterren verzinnen
- Paid / ads
- Mail naar gasten
- %-trafficbelofte
- GSC-grafieken zonder export
- Lege extra paden (`/locaties`, `/menu`) tot #1 groen is

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**, **packet compleet**.
