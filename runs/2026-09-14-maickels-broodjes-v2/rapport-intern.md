# Rapport intern — Maickels Broodjes

Peildatum: 14 september 2026  
Run: 2026-09-14-maickels-broodjes-v2

## Evidence-index

| ID | Bron | Extract |
| --- | --- | --- |
| E-01 | curl www 14 sep 15:59 UTC | 200, 21521 B, Vercel, HSTS, prerender, cache HIT age 2028161 |
| E-02 | view-source home | title merk; meta bio; H1 verse broodjes; “Schema laden…”; 0 tel/mailto; 0 ld+json; 0 canonical |
| E-03 | curl robots/sitemap | 404 + Next 404 HTML + noindex |
| E-04 | `/api/weekschema-version` | 200 `{"v":1789401747777}` no-store |
| E-05 | blob weekschema.jpg | 1619469 B, 4500×5625; visueel 8–12 sep 2026 |
| E-06 | extra paden | /menu /locaties /contact /boekingen = 404 |
| E-07 | Land van de Peel | Auwerstraat 4a; +31 6 55 80 07 31; info@mbfoodpassion.nl |
| E-08 | zoeksteekproef 14 sep | Broodjes enzo vs “broodjes Beek en Donk”; boek-queries → directories |
| E-09 | PR #2 13 sep | citaat: zelfde title/bio/robots/Schema laden — hermeten 14 sep, geen nieuwe SERP verzonnen |

## Conflicten (mix)

| Conflict | Keuze | Regel |
| --- | --- | --- |
| JPEG-rooster vs crawler-tekst | HTML-tekst eerst; beeld optioneel | feit > vorm |
| Directory-NAP vs weekschema-adressen | niet overnemen tot klantbesluit | feit > wens |
| Extra locatie-URL’s vs dunne home | deny tot F-001 groen | kader |

## Finding-detail

### F-001

- Laag: 2 Rendering + 4 Content
- Observatie: Weekschema niet in eerste HTML (“Schema laden…”); JPEG vorige week (8–12 sep) op peildatum 14 sep; 1,62 MB
- Bewijs: E-02, E-04, E-05
- Label: gemeten
- Gevolg zaak: zoeker en Google zien geen actuele standplaats
- Actie: week als HTML-lijst; beeld mag blijven
- Eigenaar: gedeeld
- Effort: M
- Prio: P0
- Meetpunt: view-source toont huidige week als tekst
- Afhankelijk van: []

### F-002

- Laag: 4 Content
- Observatie: title alleen merk; meta bio; H1 zonder plaatsnaam
- Bewijs: E-02
- Label: gemeten
- Gevolg zaak: lokale query matcht Broodjes enzo harder
- Actie: title/meta/H1 broodjes + regio
- Eigenaar: wij
- Effort: S
- Prio: P0
- Meetpunt: title + H1 bevatten broodjes én plaats/regio
- Afhankelijk van: []

### F-003

- Laag: 3 Architectuur / 7 Local
- Observatie: geen tel/mailto; directories wel
- Bewijs: E-02, E-07
- Label: gemeten (directory-NAP zelf: niet bevestigd als zaakadres)
- Gevolg zaak: handelen (bellen) verlaat de eigen site
- Actie: tel+mailto na beslissing 1
- Eigenaar: wij
- Effort: S
- Prio: P1
- Meetpunt: view-source tel: en mailto:
- Afhankelijk van: []

### F-004

- Laag: 1 Crawl & indexatie
- Observatie: robots/sitemap 404; geen canonical; extra paden 404
- Bewijs: E-03, E-06
- Label: gemeten
- Gevolg zaak: één URL, geen signaal welke de echte is
- Actie: robots+sitemap (1 URL) + canonical www home
- Eigenaar: wij
- Effort: S
- Prio: P1
- Meetpunt: curl 200 + link rel canonical
- Afhankelijk van: []

### F-005

- Laag: 4 Content (rewrite)
- Observatie: eigen HTML alleen sauzen; derden hebben broodjesnamen
- Bewijs: home vs Foodtruckbooking/Intents
- Label: gemeten (menu-inhoud derden kan verouderd zijn)
- Gevolg zaak: aanbod-intentie niet op eigen URL
- Actie: kernmenu in HTML
- Eigenaar: wij
- Effort: S
- Prio: P1
- Meetpunt: namen in view-source
- Afhankelijk van: []

### F-006

- Laag: 3 Architectuur + 4 Content
- Observatie: boek-zoek → foodtruckbooking/FestiFood
- Bewijs: E-08
- Label: gemeten
- Gevolg zaak: boekingsintentie niet van jullie
- Actie: eigen boekingsblok of /boekingen ná F-001
- Eigenaar: wij
- Effort: M
- Prio: P1
- Meetpunt: eigen URL/blok met hoe-boeken
- Afhankelijk van: [F-001]

### F-007

- Laag: 6 Structured data
- Observatie: 0 JSON-LD; hero alt Slide 0–2
- Bewijs: E-02
- Label: gemeten
- Gevolg zaak: LocalBusiness/FoodEstablishment niet machineleesbaar
- Actie: Extra gegevens ná NAP-besluit; geen AggregateRating
- Eigenaar: wij
- Effort: S
- Prio: P2
- Meetpunt: testhulpmiddel extra gegevens
- Afhankelijk van: [F-003]

### F-008–F-012

Zie bijlage A klantrapport. F-009/010/011 = onbekend, niet als feit in top-3.

## Diepte

- Architectuur: one-pager + client-fetch blob i.p.v. SSR-rooster; 404-paden geen informatie-architectuur.
- Content-besluit: rewrite home; geen hub tot deny F-001; prune van lege paden (niet aanmaken).

## Naslag-kandidaten

- Playbook-regel “zichtbaarheid Camperstaan/klant” was merklek in de mal — deze run geamendeerd naar “van de klant”.
- Image-only NAP/opening hours: lokale foodtruck-patroon; nog geen skill (één run).
