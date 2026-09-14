# Feiten — Camperstaan

Peildatum: 13 september 2026 · Meetmethode: HTTP-headers + HTML-bron + sitemap.xml + openbare zoeksteekproef (20:39 UTC). Geen GSC-export.

## Stack

- Host: Vercel · framework: Next.js (`x-powered-by`, `x-matched-path`).
- Apex `https://camperstaan.nl/` → 308 naar `https://www.camperstaan.nl/`.
- `robots.txt`: Allow `/`; Disallow `/dashboard`, `/inloggen`, `/api/`, `/betalen`. Sitemap-URL aanwezig.
- HTML-response: `cache-control: private, no-cache, no-store, max-age=0, must-revalidate`. `x-vercel-cache: MISS` op home, `/plaatsen`, listing, provincie (herhaalde GET, 13 sep 2026).
- TTFB/lab (curl, deze sessie): home ~0,33 s / 99 kB; `/plaatsen` ~0,48 s / **1,41 MB**; listing Kampen ~0,16 s / 29 kB; `/plaats/kampen` ~0,19 s / 23 kB; `/provincie/drenthe` ~0,25 s / 50 kB.

## Indexatie / sitemap

- `sitemap.xml`: **577** URL's. Geen `<lastmod>`.
- Prefix: 306 `/plaatsen/{slug}` · 253 `/plaats/{stad}` · 12 `/provincie/{provincie}` · plus home, over, contact, privacy, voorwaarden, `/plaatsen`.
- Home-H1-zone: **"306 plekken"**.
- `/plaatsen` (zonder filter): **293 unieke** hrefs `/plaatsen/{slug}` (geen "293 resultaten"-label zichtbaar in HTML; wel 293 unieke links).
- 13 listing-URL's in de sitemap **niet** op `/plaatsen`: o.a. Brugge, Gent, Kortrijk, Mechelen, Aachen, Gerolstein, Mannheim, Norddeich. Die pagina's geven **200** (voorbeeld `/plaatsen/brugge-kanaaleiland`).
- 306 sitemap-listings = 293 NL-index + 13 BE/DE.
- 404-pagina: `robots noindex`, titel "Pagina niet gevonden · Camperstaan". Gemeten op verzonnen slug.

## Rendering

Skip CSR-only: kerncopy (H1, prijs, voorzieningen, bronlink) staat in de eerste HTML. Geen aparte JS-app voor de listingtekst.

## Architectuur

- Templates: `/` · `/plaatsen` · `/plaatsen/[slug]` · `/plaats/[stad]` · `/provincie/[slug]`.
- Home linkt **2** unieke listings (uitgelicht) + 12 provincies (footer, dubbel in markup).
- `/plaatsen` is één HTML met alle 293 kaarten (1,41 MB).
- Filter: GET `/plaatsen?country=NL&regio=Drenthe` → titel "Camperplaatsen in Drenthe", **canonical blijft `/plaatsen`**. Hub voor die query hoort `/provincie/drenthe` te zijn.
- Listing Kampen: kruimel `/plaatsen` · `/plaats/kampen` · `/provincie/overijssel`. Daarna H1, één alinea, chips, OSM-iframe, voorzieningen, bronlink, daarna **claimformulier met wachtwoord** ("Dit is van mij").
- Zichtbare woorden listing Kampen (main-blok, gemeten): **~132**. Dominant blok op de pagina: claim + € 99.

## Structured data

- Home: `WebSite` (naam + url). Geen `SearchAction`. Geen `og:image` (wel og:title/description).
- Provincie/plaats: `CollectionPage` + `ItemList` (aantallen kloppen op Drenthe: 19).
- Listing: `Campground` met name, url, PostalAddress (plaats/provincie/NL), `sameAs` naar bron. **Geen** `geo`, geen `priceRange`, geen `amenityFeature`, terwijl lat/lon in de OSM-link staan en prijs in de copy staat.
- `google-site-verification` aanwezig. GSC-dekking zelf: onbekend.

## Local/GBP

n.v.t. (directory). Geen Maps-profiel van "Camperstaan" gevonden in deze zoeksteekproef; niet verder nagejaagd als local pack.

## Autoriteit / links

Inkomende links en Domain-metrics: **onbekend** (geen crawler-export). Uitgaand: `sameAs`/bron naar gemeente of eigen site — gemeten op Kampen.

## Zoeksteekproef (dezelfde dag, openbare search — geen GSC)

- Merk: "Camperstaan" → home en `/plaatsen` in de hits.
- `camperplaats Kampen` → gemeente Kampen, Visit Kampen, Campercontact, Park4Night, Camping Seveningen. **Geen** Camperstaan-listing in de getoonde hits.
- `site:www.camperstaan.nl camperplaats Kampen` → `/plaatsen` en home (listing-URL niet als aparte hit).
- `camperplaatsen in Drenthe` → Meistershof, Campercontact, Bospark Aagjeshoeve, individuele campings. **Geen** `/provincie/drenthe`.
- `gratis camperplaats Nederland Vlaardingen` → niet nagekeken in deze run (focus op Kampen/Drenthe).

## AI-vindbaarheid (steekproef)

Query in de trant van "beste site/app camperplaatsen Nederland": Campercontact/NKC genoemd in merk-zoekcontext; Camperstaan alleen bij merkquery, niet als categorie-autoriteit.
