# Rapport intern — Maickels Broodjes

Peildatum: 13 september 2026  
Run: `2026-09-13-maickelsbroodjes`  
Bouwer-run. Toets 1: open (deze run schrijft geen akkoord).

Lokale zaak (Beek en Donk). GBP is relevant. Niet ingelogd nagemeten deze run.

## Evidence-index

| ID | Bron | Extract |
| --- | --- | --- |
| E-01 | https://www.maickelsbroodjes.nl/robots.txt | 404 |
| E-02 | https://www.maickelsbroodjes.nl/sitemap.xml | 404 |
| E-03 | https://www.maickelsbroodjes.nl/ | Title = merknaam. Meta = bio. H1 aanwezig. Geen canonical. Geen `tel:`. Geen JSON-LD. “Schema laden…” |
| E-04 | https://www.maickelsbroodjes.nl/menu , `/locaties`, `/contact` | 404 |
| E-05 | Apex https://maickelsbroodjes.nl/ | → www; HSTS |
| E-06 | GSC / GBP-dashboard | Niet in deze run |

## Conflicten (mix)

| Conflict | Keuze | Regel |
| --- | --- | --- |
| GBP relevant vs niet gemeten in Maps | GBP op werklijst als P0-onderzoek; geen sterren verzinnen | feit > wens |
| Schema via JS vs crawler “Schema laden…” | Openingstijden/plek in HTML (server-render) | feit > vorm |
| Bio-meta vs intentie broodjes + plaats | Titel/meta naar aanbod + Beek en Donk | strategie + feit |
| 404 op `/menu` vs één sterke home | Eerst home compleet; extra URL’s alleen bij echte extra zoekvraag | feit > wens “meer pagina’s” |

## Finding-detail

### F-001

- Laag: 1
- Observatie: Geen robots.txt, geen sitemap (beide 404).
- Bewijs: E-01, E-02, 13 sep 2026.
- Label: gemeten
- Gevolg zaak: Kleine site, maar crawl-hygiëne ontbreekt. Ontdekking hangt alleen van links/home af.
- Actie: robots Allow `/` + Sitemap-regel. sitemap.xml met alleen 200-URL’s (nu: home; later extra als ze bestaan).
- Eigenaar: wij
- Effort: S
- Prio: P0
- Meetpunt: `/robots.txt` en `/sitemap.xml` 200. Sitemap-URL’s = live 200.
- Afhankelijk van: []

### F-002

- Laag: 1
- Observatie: Geen `<link rel="canonical">` op home. Host in de praktijk wel www (apex → www).
- Bewijs: E-03, E-05.
- Label: gemeten
- Gevolg zaak: Host is al één. Tag ontbreekt. Hygiëne, geen crisis.
- Actie: Self-canonical `https://www.maickelsbroodjes.nl/` (en op nieuwe pagina’s hun eigen www-URL).
- Eigenaar: wij
- Effort: S
- Prio: P0 (samen met F-001)
- Meetpunt: Home + nieuwe 200-pagina’s: canonical = www self.
- Afhankelijk van: []

### F-003

- Laag: 4
- Observatie: Title is alleen merknaam. Meta is persoonlijke bio (Beek en Donk als woonplaats-verhaal, niet als standplaats-snippet). H1 over verse broodjes is wél goed.
- Bewijs: E-03.
- Label: gemeten
- Gevolg zaak: Wie het merk kent herkent de tab. Wie “broodje Beek en Donk” typt krijgt geen titelmatch. Content-besluit: rewrite title/meta, geen blogreeks.
- Actie: Title: merk + broodjes + Beek en Donk. Meta: wat je koopt + waar + hoe (halen/catering), geen superlatief. Bio mag in de body.
- Eigenaar: wij + jullie (akkoord formulering)
- Effort: S
- Prio: P0
- Meetpunt: view-source: title bevat merk + plaats + aanbod. Meta ≤ ~160, plaats + aanbod, geen “beste van”.
- Afhankelijk van: []

### F-004

- Laag: 2
- Observatie: `/menu`, `/locaties`, `/contact` zijn 404. Alleen home is een pagina.
- Bewijs: E-04.
- Label: gemeten
- Gevolg zaak: Extra paden zijn geen indexeerbare diensten. Dat is geen ramp als home NAP/tel/rooster draagt. Wel een valkuil als we die 404’s gaan “vullen” zonder extra intentie.
- Actie: Eerst home compleet (F-003, F-005, F-006). Locatie- of menu-URL alleen als er meerdere vaste plekken of een echte menukaart-zoekvraag is. Geen fake multi-location.
- Eigenaar: wij (routes ná besluit) + jullie (zijn er 2+ standplaatsen?)
- Effort: M als URL’s nodig zijn; S als home genoeg is
- Prio: P2 (URL’s); P0 blijft home
- Meetpunt: Of home draagt NAP+menu-kern, of extra 200-URL’s met eigen H1. Geen 404-links vanaf home.
- Afhankelijk van: F-003, F-005, F-006

### F-005

- Laag: 1 / 3
- Observatie: Schemasectie toont “Schema laden…” in de eerste HTML. Rooster zit in client-JS.
- Bewijs: E-03.
- Label: gemeten
- Gevolg zaak: Crawler en previews zonder JS zien geen openingstijden. Voor een lokale zaak is dat de praktische info.
- Actie: Openingstijden en plek(ken) als HTML (tabel of lijst). Zelfde tekst als JSON-LD. Geen “laden…” als enige bron.
- Eigenaar: wij + jullie (echte tijden/plekken)
- Effort: M (server-render in huidige stack)
- Prio: P0
- Meetpunt: view-source toont tijden/plek. Geen “Schema laden…” als enige inhoud van die sectie.
- Afhankelijk van: [] (jullie leveren de feiten)

### F-006

- Laag: 1
- Observatie: Geen `tel:`-link in de HTML.
- Bewijs: E-03.
- Label: gemeten
- Gevolg zaak: Bel-conversie ontbreekt. Local pack zonder klikbaar nummer op de site is inconsistent.
- Actie: Belknop/link `tel:` boven de vouw (mobiel). Nummer = GBP-NAP (ná F-008-check).
- Eigenaar: wij + jullie (nummer)
- Effort: S
- Prio: P0
- Meetpunt: view-source 1 tel:-link; zichtbaar @390px.
- Afhankelijk van: F-008 voor NAP-gelijkheid; implementatie mag met bevestigd nummer.

### F-007

- Laag: 6
- Observatie: Geen JSON-LD. LocalBusiness/FoodEstablishment ontbreekt.
- Bewijs: E-03.
- Label: gemeten
- Gevolg zaak: Dit ís een lokale zaak. Camperstaan-les (geen LocalBusiness) geldt hier niet. Wel: geen AggregateRating zonder dossier. Type met eigenaar (Bakery / FoodEstablishment / FoodTruck — niet gokken).
- Actie: JSON-LD in eerste HTML: name, address, telephone, openingHoursSpecification = zichtbare tekst. Geen sterren.
- Eigenaar: wij + jullie (type + NAP)
- Effort: S
- Prio: P1
- Meetpunt: JSON-LD in eerste HTML (niet alleen ná JS). Velden = zichtbare NAP.
- Afhankelijk van: F-005, F-006

### F-008

- Laag: 7
- Observatie: GBP niet ingezien. Geen reviews/cijfers. Local is relevant.
- Bewijs: E-06.
- Label: onbekend (profielcijfers, categorie, NAP-match)
- Gevolg zaak: Lokale zoekers komen via kaart. Zonder GBP-status geen “klaar voor local pack”. Geen sterren of posities verzinnen.
- Actie: GSC property www.maickelsbroodjes.nl. GBP: claim, categorie, NAP = site, foto’s. Screenshots of “nog niet geclaimd”. Geen live Maps-wijziging zonder eigenaren.
- Eigenaar: jullie + gedeeld (diff opschrijven)
- Effort: S
- Prio: P0 (onderzoek)
- Meetpunt: GSC-export of “nieuw”. GBP URL/screenshot categorie + NAP. Schriftelijke diff vs site.
- Afhankelijk van: []

## Naslag-kandidaten

- Lokale zaak vs directory: LocalBusiness/GBP hier wél; Camperstaan-reflex afwijzen (bijlage B).
- JS-only “schema laden” telt niet als NAP.
- 404-paden zijn geen automatische bouwopdracht; home-compleetheid eerst.

## Toets 1

Open. Bouwer schrijft geen `toets.md` met akkoord.
