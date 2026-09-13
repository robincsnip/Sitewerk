# Rapport intern — Camperstaan

Peildatum: 13 september 2026  
Run: 2026-09-13-camperstaan

## Evidence-index

| ID | Bron | Extract |
| --- | --- | --- |
| E-01 | `https://www.camperstaan.nl/sitemap.xml` | 577 loc; 306 listing-slugs; 0 lastmod |
| E-02 | HTML `/` vs `/plaatsen` | “306 plekken” vs “293 resultaten” |
| E-03 | sitemap − `/plaatsen` hrefs | 13 BE/DE-slugs; 200 op Brugge |
| E-04 | response headers | `cache-control: private, no-store`; `x-vercel-cache: MISS` |
| E-05 | GET `/plaatsen` | 1 411 613 bytes |
| E-06 | `/plaatsen/kampen-burgemeester-berghuisplein` | Campground JSON-LD zonder geo; claimformulier in HTML |
| E-07 | GET `/plaatsen?country=NL&regio=Drenthe` | title Drenthe, canonical `/plaatsen` |
| E-08 | zoeksteekproef | Kampen/Drenthe/Vlaardingen: geen Camperstaan-listing in hits |
| E-09 | `/over` | “later België en Duitsland”; KvK volgt |

## Conflicten (mix)

Zie `mix.md`.

## Finding-detail

### F-001

- Laag: 1
- Observatie: Home en sitemap tellen 306 listings; de NL-zoekpagina toont 293. De 13 ontbrekende zijn live BE/DE-URL’s in dezelfde sitemap.
- Bewijs: E-01, E-02, E-03
- Label: gemeten
- Gevolg zaak: crawler ziet een NL-directory die al BE/DE indexeert; de gast ziet een andere telling. “Later” is geen planning meer.
- Actie: NL-sitemap alleen NL, of land-hubs + telling per land. Home-cijfer = zichtbare index.
- Eigenaar: wij
- Effort: S
- Prio: P0
- Meetpunt: telling home / `/plaatsen` / sitemap-prefix BE|DE|NL
- Afhankelijk van: []

### F-002

- Laag: 1 / 5
- Observatie: Publieke HTML is `private, no-store`. CDN-cache MISS op herhaalde GET.
- Bewijs: E-04
- Label: gemeten
- Gevolg zaak: 577 URL’s opnieuw van origin bij elke bot/bezoeker. `/plaatsen` is 1,4 MB per hit.
- Actie: anonieme HTML `public` + s-maxage (ISR/CDN). Auth-routes blijven private.
- Eigenaar: wij
- Effort: M
- Prio: P0
- Meetpunt: `cache-control` + `x-vercel-cache` op `/` en een listing
- Afhankelijk van: []

### F-003

- Laag: 3 / 5
- Observatie: `/plaatsen` dump alle 293 kaarten in één HTML van 1,41 MB.
- Bewijs: E-05
- Label: gemeten
- Gevolg zaak: zwaar voor gast én crawler. Sitemap heeft de listings al; deze pagina hoeft niet alle kaarten fully te servern.
- Actie: compacte rijen of paginatie; alle slugs blijven in sitemap + provincie/plaats-hubs.
- Eigenaar: wij
- Effort: M
- Prio: P1
- Meetpunt: `Content-Length` `/plaatsen` (anoniem)
- Afhankelijk van: [F-002]

### F-004

- Laag: 3 / 4
- Observatie: Listing-template is een claimpagina met een dunne gastalinea. JSON-LD mist geo/prijs terwijl die data in de pagina zit.
- Bewijs: E-06
- Label: gemeten
- Gevolg zaak: de URL die “camperplaats [plaats]” moet vangen, verliest van de bronpagina (gemeente) en van Campercontact. Eigenaarsformulier helpt de reiziger niet.
- Actie: gastblok (feiten, bron, kaart, voorzieningen) eerst; claim onderaan of eigen URL. JSON-LD `geo` + `priceRange` uit bestaande velden. Geen verzonnen reviews.
- Eigenaar: wij
- Effort: M
- Prio: P0
- Meetpunt: HTML-volgorde (claim ná gastfeiten); JSON-LD bevat geo; zelfde SERP-steekproef
- Afhankelijk van: []

### F-005

- Laag: 4
- Observatie: Provincie-hubs bestaan en hebben aggregatiecopy. In de zoeksteekproef winnen ze “camperplaatsen in Drenthe” niet. Filter-URL’s zijn gedupliceerd naar `/plaatsen`.
- Bewijs: E-07, E-08
- Label: gemeten (steekproef) / GSC onbekend
- Gevolg zaak: de enige landings die wél uniek mogen zijn (provincie/plaats) doen het werk niet in deze hits. Dat is geen reden voor een nieuwe site.
- Actie: provincie-copy aanscherpen uit bestaande telling (gratis vs betaald, prijsrange) — geen blogfabriek. Geen GBP.
- Eigenaar: gedeeld
- Effort: M
- Prio: P1
- Meetpunt: dezelfde drie queries; GSC-impressies als export komt
- Afhankelijk van: [F-004]

### F-006

- Laag: 7
- Observatie: Local/GBP past niet bij een landelijke directory.
- Bewijs: kader + `/over`
- Label: afgeleid (sitetype)
- Gevolg zaak: LocalBusiness-schema of Maps-profiel als “winkel” is theater.
- Actie: n.v.t. Niet doen.
- Eigenaar: wij
- Effort: S
- Prio: P3
- Meetpunt: geen LocalBusiness op home/listing
- Afhankelijk van: []

### F-007

- Laag: 8
- Observatie: Inkomende links niet gemeten.
- Bewijs: geen crawler-export
- Label: onbekend
- Gevolg zaak: geen autoriteitsclaim.
- Actie: geen.
- Eigenaar: jullie
- Effort: S
- Prio: P3
- Meetpunt: geen zonder bron
- Afhankelijk van: []

### F-008

- Laag: 9
- Observatie: In “beste camperplaats-app/site NL”-bronnen: Campercontact/NKC, Park4Night. Camperstaan afwezig.
- Bewijs: zoeksteekproef
- Label: gemeten (steekproef)
- Gevolg zaak: merk is nog geen synoniem voor de categorie. Eerst NL-index kloppend en listings bruikbaar voor gasten.
- Actie: geen AI-contentprogramma. Geen vervanging van F-001–F-004.
- Eigenaar: wij
- Effort: S
- Prio: P3
- Meetpunt: herhaalsteekproef, geen score
- Afhankelijk van: [F-001, F-004]

### F-009

- Laag: 4
- Observatie: € 99-upgrade in de openbare copy; KvK “volgt na inschrijving.”
- Bewijs: E-09, listingfooter
- Label: gemeten
- Gevolg zaak: vertrouwen bij claim/upgrade. Geen SEO-truc.
- Actie: KvK op over/contact zodra het nummer bestaat. Tot die tijd geen live-wijziging die doet alsof het er is.
- Eigenaar: jullie
- Effort: S
- Prio: P1
- Meetpunt: KvK zichtbaar op `/over` of skip tot nummer er is
- Afhankelijk van: []

## Naslag-kandidaten

- Telling in H1/hero moet de zichtbare index zijn, niet de sitemap-som.
- Claim-CTA op de reizigers-URL is een templatebesluit, geen “conversie-win”.
