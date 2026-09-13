# Rapport intern — Camperstaan.nl

Peildatum: 13 september 2026  
Run: `2026-09-13-camperstaan`  
Bouwer-run. Toets 1: open (deze run schrijft geen akkoord).

## Evidence-index

| ID | Bron | Extract |
| --- | --- | --- |
| E-01 | https://www.camperstaan.nl/sitemap.xml | 577 URL’s: 306 `/plaatsen/{slug}`, 253 `/plaats/{stad}`, 12 `/provincie/…` |
| E-02 | https://camperstaan.nl/ | Apex → www; HSTS `max-age=63072000` |
| E-03 | https://www.camperstaan.nl/plaatsen/camping-zonneweelde-aarle-rixtel (en Kampen-steekproef) | JSON-LD `@type: Campground` + `sameAs` bron; geen LocalBusiness |
| E-04 | https://www.camperstaan.nl/robots.txt | Allow `/`; Disallow dashboard/inloggen/API/betalen; Sitemap-regel |
| E-05 | https://www.camperstaan.nl/plaats/aarle-rixtel | H1 “Campings in …”; template-achtige meta; interne links naar plek-URL’s |
| E-06 | GSC | Niet in deze run |

## Conflicten (mix)

| Conflict | Keuze | Regel |
| --- | --- | --- |
| Scanner “LocalBusiness/GBP op Camperstaan” vs directory | Geen GBP/LocalBusiness op het product; listings blijven Campground + bron | feit + kader > vorm |
| 253 stadshubs vs 12 provincies vs 306 plekken | Lagen houden; dunne stadshubs prune/merge of unieke keuzehulp | feit > wens “meer URL’s” |
| Geen GSC vs wens traffic te beloven | Geen %-belofte; eerste meetpunt = indexdekking per template | feit > wens |

## Finding-detail

### F-001

- Laag: 1
- Observatie: Sitemap bevat 577 URL’s; 306 plek-slugs onder `/plaatsen/`.
- Bewijs: E-01, 13 sep 2026.
- Label: gemeten
- Gevolg zaak: De directory heeft al schaal. Het product is de plek-URL, niet “meer blog”.
- Actie: Plektemplate als primary houden. Nieuwe landings buiten de drie templates tot cannibalisatie-regel vaststaat.
- Eigenaar: wij
- Effort: S (vastleggen; geen rebuild)
- Prio: P1
- Meetpunt: Sitemap-telling vs GSC geïndexeerd per pad (ná F-006).
- Afhankelijk van: F-006 voor sturing; niet voor de observatie.

### F-002

- Laag: 1
- Observatie: Apex landt op www. HSTS aan.
- Bewijs: E-02.
- Label: gemeten
- Gevolg zaak: Host-hygiëne is in orde. Geen host-split-actie.
- Actie: Niets. Niet kapotmaken.
- Eigenaar: wij
- Effort: S
- Prio: P3 (geen werk, wel vastgelegd)
- Meetpunt: Apex blijft 301/308 naar www.
- Afhankelijk van: []

### F-003

- Laag: 2
- Observatie: Drie publieke templates indexeren naast elkaar: 306 plekken, 253 stadshubs, 12 provincies. Titels lijken op elkaar (“Camperplaatsen in {naam}”).
- Bewijs: E-01, E-05.
- Label: gemeten (tellingen); afgeleid (kannibalisatie-risico zonder GSC-query’s).
- Gevolg zaak: Google moet kiezen tussen stad, provincie en plek. Dunne stadshubs voegen geen taak toe.
- Actie: Schriftelijke regel: object-URL = primary. Stad-hub: keuzehulp of prune/merge bij één-plek-steden. Geen canonical van stad naar eerste object. Geen tweede “beste camping in X”-H1 op de hub.
- Eigenaar: gedeeld (wij regel + 10 voorbeelden; jullie: welke steden houden)
- Effort: M
- Prio: P0
- Meetpunt: Regel in docs + 10 voorbeelden. Later GSC impressies `/plaatsen/*` vs `/plaats/*` vs `/provincie/*`.
- Afhankelijk van: F-006 voor welke hubs al impressies hebben.

### F-004

- Laag: 6
- Observatie: Plekpagina gebruikt Campground + sameAs naar bron. Home is WebSite. Geen LocalBusiness van Camperstaan op de listing.
- Bewijs: E-03.
- Label: gemeten (type); onbekend (volledigheid geo/address op alle 306).
- Gevolg zaak: Schema past bij directory. GBP/LocalBusiness-theater zou het product vervalsen.
- Actie: Type houden. Steekproef 10 plekken: H1 uniek, bronlink, geen winkel-schema. Rich Results op 5 URL’s.
- Eigenaar: wij
- Effort: S
- Prio: P1
- Meetpunt: Checklist 10 plekken afgevinkt. Geen Camperstaan-LocalBusiness op object-URL.
- Afhankelijk van: []

### F-005

- Laag: 1
- Observatie: robots.txt blokkeert dashboard, inloggen, API, betalen. Sitemap genoemd.
- Bewijs: E-04.
- Label: gemeten
- Gevolg zaak: Interne app zit buiten de index. Goed.
- Actie: Niets. Dashboard-SEO buiten scope.
- Eigenaar: wij
- Effort: S
- Prio: P3
- Meetpunt: robots blijft Disallow op die paden.
- Afhankelijk van: []

### F-006

- Laag: 4 (stuur; geen crawl-laag)
- Observatie: Geen Search Console-export in deze run. Index-telling komt uit sitemap, niet uit GSC.
- Bewijs: E-06 / brief.
- Label: onbekend (verkeer, coverage, query per template)
- Gevolg zaak: Zonder GSC geen uitspraak welke template Google toont. Architectuur sturen we wél.
- Actie: Property `www.camperstaan.nl`. Export 16 weken of “nieuw / geen data”. Query+page, plus geïndexeerd vs uitgesloten per pad.
- Eigenaar: jullie (toegang) / gedeeld (export in `in/`)
- Effort: S
- Prio: P0
- Meetpunt: CSV of schriftelijk “niet geleverd” in volgende brief. Geen %-traffic tot die baseline.
- Afhankelijk van: []

### F-007 (content-besluit stadshubs)

- Laag: 4
- Observatie: Stadshub-steekproef is template-achtig (H1 “Campings in {stad}”, korte meta, lijst). Weinig unieke lokale taak.
- Bewijs: E-05.
- Label: gemeten (steekproef); afgeleid (geldt waarschijnlijk voor veel van de 253).
- Gevolg zaak: Hub zonder keuzehulp is een tweede kopie van plek-intentie.
- Actie: Houden voor steden met meerdere plekken + eigen intro. Dunne één-plek-steden: redirect of noindex tot copy uniek is. Content-besluit: prune / merge / rewrite, geen 253 identieke herschrijfsprints in maand 1.
- Eigenaar: wij (template + 20 drukste steden ná GSC) + jullie (feiten per stad)
- Effort: L (copy), M (regel)
- Prio: P0 (regel), P1 (copy top-20)
- Meetpunt: Elke gehouden `/plaats/{stad}` legt uit waarom die stad, met links naar plekken — of is samengevoegd.
- Afhankelijk van: F-003, F-006

## Naslag-kandidaten

- Directory ≠ local shop: Campground + sameAs, geen GBP op platformniveau.
- Drie templatelagen: zonder unieke taak is “meer hubs” kannibalisatie.
- GSC per pad-prefix is het eerste meetpunt bij schaal-sitemaps.

## Toets 1

Open. Bouwer schrijft geen `toets.md` met akkoord.
