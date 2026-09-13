# Werklijst — Rugby Werkt / Nature Sports (Joost)

Run: 2026-09-13-joost-rugby-werkt · Peildatum: 13 september 2026  
Toets 1: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Klaar als | Meten | Bron-finding |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Nature Sports: H1, canonical, robots.txt, zichtbare tekst in de eerste HTML | crawler ziet nu een lege Canva-schil | wij / jullie CMS | ja | nee | eerste fetch toont H1 + canonical + bodytekst | indexstatus NS-home | F-005 F-006 F-007 |
| 2 | P0 | Nature Sports: geen extra landings tot #1 klaar is (deny-gate) | landings op lege HTML zijn weggegooid werk | wij | nee | nee | schriftelijk: geen NS-URL’s tot fetch-check | — | F-005 F-007 |
| 3 | P0 | Rugby Werkt: H1 + meta description + self-canonical op home | 0 H1, geen meta | wij | ja | nee | view-source toont beide + canonical | snippet in GSC later | F-001 |
| 4 | P0 | Rugby Werkt: vier dienst-URL’s + interne links + offerte (`/rugbyclinic`, `/haka-workshop`, `/scrum-college`, `/bedrijfsuitje` of TOPrugby) | pages-sitemap = alleen home | wij / jullie | ja | nee | 4 URL’s 200 in pages-sitemap, H1+titel, link vanaf home | GSC URL’s + impressies later | F-002 |
| 5 | P1 | GSC beide domeinen + editor-toegang | geen verse query’s; aug-SERP is snapshot | jullie | nee | nee | property + uitnodiging of “nieuw / geen data” | GSC 28/90 dagen | F-009 |
| 6 | P1 | `tel:+31615890644` + Organization JSON-LD (geen LocalBusiness-winkel) | nummer staat in tekst, niet als link/markup | wij / jullie | ja | nee | 1 tel:-link; JSON-LD name+url+telephone | Rich Results type OK | F-004 |
| 7 | P1 | 301 `/voorbeeld-artikel-2/` → nette APG-slug; Nsecure als case houden | demo-slug op echte case | wij | ja | nee | oude slug 301; titel = H1 | post-sitemap | F-003 |
| 8 | P1 | ScrumCollege: één primary-URL (besluit + canonical/301) | twee hosts, één workshop | jullie / wij ná besluit | ja | ja (wacht op besluit) | kaderzin: scrum-primary = {url} | GSC overlap later | F-008 |
| 9 | P1 | NS GBP-audit (categorie, uren, foto’s, NAP) — geen live zonder eigenaren | lokale zaak; paneel niet gezien | gedeeld | nee | ja (wacht op #1 crawl-fix) | schriftelijke diff of “niet geclaimd” | Maps vs site | F-010 |
| 10 | P2 | Als Canva binnen twee weken geen server-HTML kan: eigenaren-gate CMS-wissel of 301 NS → RW | stack is de muur | jullie | nee | nee | besluit gedocumenteerd | — | F-007 |

## Buiten scope

- MRC, Monkey Moves
- Paid / ads
- Canva-landings vóór deny-gate
- LocalBusiness-winkel op Rugby Werkt
- Tien blogs “rugby tips”
- Rankings/volumes als feit (geen GSC)

## Dispatcher-filter

Uitvoer pakt alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**.
