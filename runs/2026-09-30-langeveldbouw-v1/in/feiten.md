# Feiten — Langeveld Bouw

Peildatum: 30 september 2026 · Meetmethode: HTTP-headers + HTML-bron + robots/sitemap + padsteekproef + openbare zoeksteekproef. Geen GSC-export. Geen Lighthouse. Geen betaalde linkdata.

## Domein / HTTPS

- `https://www.langeveldbouw.nl/` → **200**, `text/html`, host **Vercel**, `strict-transport-security: max-age=63072000`.
- `https://langeveldbouw.nl/` → **308** → `https://www.langeveldbouw.nl/`.
- `http://www.langeveldbouw.nl/` → **308** → https-www.
- `http://langeveldbouw.nl/` → **308** → https-apex → **308** → https-www.
- Home `last-modified: Tue, 29 Sep 2026 09:00:10 GMT` (gisteren t.o.v. peildatum).
- `x-vercel-cache: HIT` op HTML. Geen `x-robots-tag`. Geen `link: canonical` in headers.

## Functies van de site (local-service)

Wat de site **doet** (geen Atelier-bouw):

- **Home** (`/`): merksite + leadvangst. Hero, intro, projectcarrousel (17 stuks), interactieve woningdoorsnede met 8 onderdelen, 4-stappen aanpak, portret Chris, belknop, e-mail, contactformulier.
- **Projecten** (`/projecten`): galerij van dezelfde 17 werken, filters Alles / Bouw (8) / Interieur (9), lightbox, belknop, terug naar home/#contact.
- **Contact:** geen aparte contactpagina. `/contact` → **308** `/#contact`. Formulier velden: naam, e-mail, projectkeuze (aanbouw/verbouw, interieurbouw, timmerwerk, anders), telefoon optioneel, bericht, honeypot `website`.
- **Bellen:** `tel:+31636514700` in de mast (zichtbaar als `06 36 51 47 00`) en in het contactblok. Meerdere keren in de HTML.
- **E-mail:** `info@langeveldbouw.nl`.
- **Identiteit in footer:** `Langeveld Bouw & Interieurbouw · KvK 83911847 · BTW NL003888588B90`. Credit: scivo.nl.
- **Diensten in de tekening (geen eigen URL):** 01 Fundering · 02 Aanbouw · 03 Opbouw & dakkapel · 04 Verbouw & renovatie · 05 Timmerwerk & kozijnen · 06 Kasten, keukens & meubels · 07 Binnenafwerking · 08 Verduurzaming & klein werk. Klik vult het formulier-onderwerp.
- **Niet aanwezig:** account, winkel, blog, agenda, privacytekst, beoordelingen, kaart, plaatsnaam, straatadres.

## NAP (lokaal)

| Onderdeel | Op de site 30 sep 2026 | Bron elders |
| --- | --- | --- |
| Naam | Langeveld / Langeveld Bouw & Interieur(bouw) | zelfde in footer + KvK-directory |
| Adres | **ontbreekt** (0× `Alkmaar`, 0× postcode, 0× straat) | Compadex (KvK 83911847, geactualiseerd 12 feb 2026): Van Houtenkade 27, 1814HM Alkmaar — **niet** als feit op de site zetten zonder bevestiging |
| Telefoon | +31 6 36 51 47 00 | alleen op de site gemeten |
| E-mail | info@langeveldbouw.nl | alleen op de site gemeten |

## Indexatie

- `robots.txt`: `User-agent: *` / `Allow: /` / `Sitemap: https://www.langeveldbouw.nl/sitemap.xml`.
- `sitemap.xml` (285 B, lastmod 2026-09-29): **2** URL’s — `/` en `/projecten`.
- Geen `<link rel="canonical">`, geen Open Graph, geen robots-meta.
- Interne links gebruiken `projecten.html` / `index.html`; die **308**’en naar `/projecten` en `/`.
- `/privacy` → **404** (Vercel-plaintekst). `/reviews` → **308** `/`.
- Verzonnen pad `/aanbouw` en `/bestaat-niet-xyz` → **404** body `The page could not be found` (geen huisstijl).

## Rendering

Skip CSR-only: H1, dienstenlabels, telefoon, KvK en projecttitels staan in de eerste HTML. Eén inline script (carrousel, formulier, tekening). Geen Next/`__NEXT_DATA__`, geen WordPress.

## Architectuur

- Twee templates: home-onepager, projectengalerij. Geen dienst-URL, geen project-URL per werk, geen over-pagina.
- Titel home (live): `Langeveld — Ruimte om thuis te zijn`. H1: `Ruimte om thuis te zijn.`
- Titel projecten: `Projecten — Langeveld Bouw & Interieurbouw`.
- Meta description home: “Bouwbedrijf Langeveld bouwt aan woningen…” (geen plaats).

## Formulier (gemeten)

- Inline: `W3F_KEY=''` (Web3Forms-sleutel leeg). Fallback `POST /api/aanvraag`.
- `GET /api/aanvraag` → **405** `Allow: POST`.
- `POST /api/aanvraag` (dummy JSON, geen echte klantmail) → **503** `{"ok":false,"fout":"niet-ingesteld"}`.
- Script opent dan `mailto:info@langeveldbouw.nl` of toont fout + bel-link. Het formulier **komt niet server-side aan**.

## Structured data

0× `application/ld+json`. 0× `schema.org`. Geen LocalBusiness.

## Performance (lab, geen CrUX)

- Home HTML 46 752 B. Projecten HTML 31 195 B.
- Hero `assets/aanbouw-ceder.webp` **333 558 B** (twee keer in de home-HTML).
- Thumbs + portret + logo: extra honderden kB. Google Fonts (DM Sans + Manrope) extern.
- Geen Lighthouse deze run.

## Local / GBP / reviews

- Geen Google-bedrijfsprofiel of Maps-URL gevonden in steekproef “Langeveld Bouw Interieurbouw Alkmaar” / “Google Maps”.
- Geen Werkspot/Trustoo/Bouwnu-profiel van **deze** zaak in de steekproef.
- Andere “Langeveld”-hits zijn andere bedrijven (Installatie Rijkevoort; Bouw Spijkenisse; Bouw en Timmerwerken Middenbeemster KvK 67229433).

## Zoeksteekproef (30 sep 2026, openbaar — geen GSC)

- Domein verschijnt; snippets/titels tonen nog **“Bouwbedrijf Langeveld”** en oude dienstcopy (niet de live H1).
- `aanbouw Alkmaar` → Prefabriek, Prefast, De Aanbouw Expert, Tekenpunt. **Geen** langeveldbouw.nl.
- `aannemer Alkmaar` → Schaaf, Kuilboer en de Boer, Boersma. **Geen** langeveldbouw.nl.
- `interieurbouw Alkmaar` / `kasten op maat Alkmaar` → Rubens, HiRas. **Geen** langeveldbouw.nl.
- `dakkapel Alkmaar` → Dakkapellen.nu, Ard Bruin, Montis. **Geen** langeveldbouw.nl.
- Eerste `site:langeveldbouw.nl` in deze tool gaf geen hits; latere merkszoeken wel het domein (oude titel). Label: indexatie **onzeker/vers**, snippets **achter**.

## Autoriteit

Inkomende links: **onbekend**. Uitgaand gemeten: scivo.nl in de footer.

## AI-vindbaarheid

Steekproef beperkt tot openbare zoekhits. Bij dienst+plaats geen vermelding van Langeveld. Geen aparte chat-run; geen claim over ChatGPT-marktaandeel.
