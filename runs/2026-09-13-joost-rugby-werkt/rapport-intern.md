# Rapport intern — Rugby Werkt / Joost (Nature Sports)

Peildatum: 13 september 2026 (live). Dossierposities: citaat 25–27 augustus 2026.  
Run: `2026-09-13-joost-rugby-werkt`  
Bouwer-run. Toets 1: open (deze run schrijft geen akkoord).

Twee sites, één opdracht. Nature Sports: deny-gate tot crawlbare HTML. GBP relevant voor NS (lokale zaak), niet als winkel-theater op Rugby Werkt.

## Evidence-index

| ID | Bron | Extract |
| --- | --- | --- |
| E-01 | https://rugbywerkt.nl/ | WP. 0× `<h1>`. Geen meta description. Telefoon in tekst, geen `tel:`/`mailto`. |
| E-02 | https://rugbywerkt.nl/wp-sitemap-posts-page-1.xml | Pages-sitemap = alleen home |
| E-03 | https://rugbywerkt.nl/wp-sitemap-posts-post-1.xml | `/voorbeeld-artikel-2/` (titel Clinic APG), `/clinic-nsecure/` |
| E-04 | https://nature-sports.nl/ | Canva `export_website`. ~4 zichtbare woorden. 0 H1. Geen canonical. Geen interne links. |
| E-05 | https://nature-sports.nl/robots.txt | 404 |
| E-06 | https://nature-sports.nl/sitemap.xml | 1 URL (home) |
| E-07 | https://www.scrumcollege.nl/ | Eigen site/titel (live fetch) |
| E-08 | Notion-dossier 27 aug 2026 | SERP-snapshot RW niet top-20 op clinic-termen; geen verse SERP deze run |
| E-09 | GSC / GBP-dashboard | Niet in deze run |

## Conflicten (mix)

| Conflict | Keuze | Regel |
| --- | --- | --- |
| Wens NS-landings vs HTML bijna leeg | Deny-gate: eerst H1/canonical/robots/bodytekst, dan landings | feit > wens |
| RW one-pager vs URL per dienst | Vier dienst-URL’s in WP; home = verhaal + doorverwijs | feit (1 page in sitemap) > vorm |
| ScrumCollege.nl vs RW-sectie | Eén verkoop-URL; geen twee hoofdpagina’s | kader + feit |
| Aug-SERP vs 13-sep-audit | Citeren als historisch, niet als verse meting | feit > vorm |

## Finding-detail

### F-001

- Laag: 1 / 4
- Observatie: Rugby Werkt-home heeft geen H1 en geen meta description.
- Bewijs: E-01, HTML 13 sep 2026.
- Label: gemeten
- Gevolg zaak: De voordeur is technisch een brochure zonder kop. Snippets en heading-hiërarchie ontbreken.
- Actie: Eén H1 (merk + kernaanbod). Meta description: wie, voor wie, waar (B2B, geen winkelzin). Self-canonical.
- Eigenaar: wij (thema) + jullie (akkoord zin)
- Effort: S
- Prio: P0
- Meetpunt: view-source home: 1 H1, meta description, self-canonical.
- Afhankelijk van: []

### F-002

- Laag: 2
- Observatie: Pages-sitemap bevat alleen home. Diensten (clinic, haka, Scrum College, TOPrugby) zijn secties, geen indexeerbare page-URL’s.
- Bewijs: E-02.
- Label: gemeten
- Gevolg zaak: Concurrenten hebben dienst-URL’s. RW heeft één adres voor vier producten. Extra blogs lossen dat niet op.
- Actie: Vier WP-pagina’s (niet posts): rugbyclinic, haka-workshop, scrum-college, bedrijfsuitje/TOPrugby — plus offerte. Interne links vanaf home. Daarna pages-sitemap ≥ 5 (home + 4).
- Eigenaar: wij (thema/links) + jullie (copy + WP-toegang)
- Effort: M
- Prio: P0
- Meetpunt: 4 URL’s 200, eigen H1/titel, in pages-sitemap, gelinkt vanaf home.
- Afhankelijk van: F-001 (home-hygiëne eerst of parallel)

### F-003

- Laag: 1 / 4
- Observatie: Twee posts. Slug `/voorbeeld-artikel-2/` hoort bij titel Clinic APG. Tweede: `/clinic-nsecure/`.
- Bewijs: E-03.
- Label: gemeten
- Gevolg zaak: Een echte case hangt aan een demo-slug. Dat is geen landingsstrategie.
- Actie: 301 `/voorbeeld-artikel-2/` → `/clinic-apg/` (of gelijk). Nsecure als case-template, niet wissen.
- Eigenaar: wij + jullie (slug-keuze)
- Effort: S
- Prio: P1
- Meetpunt: oude slug 301; nieuwe URL in post-sitemap; titel = H1.
- Afhankelijk van: []

### F-004

- Laag: 1
- Observatie: Geen `tel:` of `mailto` op RW-home. Nummer in body: `+31 (0)6 15 89 06 44`. Geen JSON-LD.
- Bewijs: E-01.
- Label: gemeten
- Gevolg zaak: Contact is conversie. Zonder bel-link geen tap-to-call. Geen Organization-entiteit.
- Actie: `tel:+31615890644`. Organization JSON-LD: name, url, telephone. Geen LocalBusiness tenzij er een bezoekadres is (niet gezien).
- Eigenaar: wij + jullie (nummer + of er een adres is)
- Effort: S
- Prio: P1
- Meetpunt: 1 tel:-link; Organization JSON-LD name+url+telephone; Rich Results zonder fout op type.
- Afhankelijk van: []

### F-005

- Laag: 1
- Observatie: Nature Sports: ~4 zichtbare woorden, 0 H1, 0 canonical, 0 interne links in de eerste HTML.
- Bewijs: E-04.
- Label: gemeten
- Gevolg zaak: Crawler ziet geen pagina. Nieuwe landings in Canva zijn weggegooid werk tot deze HTML inhoud heeft.
- Actie: Deny-gate. Eerst: H1, canonical, tekst in HTML (niet alleen meta). Geen extra URL’s tot eerste fetch dat toont.
- Eigenaar: wij / jullie CMS (Canva-limiet = eigenaren: HTML-stack of 301 naar RW)
- Effort: M (fix in huidige stack) / L (CMS-wissel)
- Prio: P0
- Meetpunt: Eerste fetch: H1 + canonical + meer dan een handvol woorden. Canva-export telt niet als klaar.
- Afhankelijk van: []

### F-006

- Laag: 1
- Observatie: NS `robots.txt` 404. Sitemap 1 URL (home).
- Bewijs: E-05, E-06.
- Label: gemeten
- Gevolg zaak: Geen crawl-instructie, geen ontdekking voorbij home (home is al leeg).
- Actie: robots Allow `/` + Sitemap-regel. Sitemap alleen 200-URL’s. Pas groeien ná F-005.
- Eigenaar: wij / hosting
- Effort: S
- Prio: P0 (samen met F-005)
- Meetpunt: robots 200; sitemap 200 met huidige indexeerbare URL’s.
- Afhankelijk van: F-005

### F-007

- Laag: 1
- Observatie: HTML bevat Canva `export_website`.
- Bewijs: E-04 meta app-name.
- Label: gemeten
- Gevolg zaak: Stack is de muur, niet “ontbrekende keywords”.
- Actie: Als Canva binnen twee weken geen server-HTML kan: CMS-wissel of 301 (eigenaren-gate). Tot die tijd geen landingskalender NS.
- Eigenaar: jullie (besluit) + wij (ná HTML-stack)
- Effort: L bij wissel
- Prio: P0 (besluit), geen code tot keuze
- Meetpunt: Schriftelijk: blijven + crawl-HTML, of 301/merk-als-sectie op RW.
- Afhankelijk van: F-005

### F-008

- Laag: 2
- Observatie: ScrumCollege.nl is een eigen site naast RW scrum-sectie.
- Bewijs: E-07.
- Label: gemeten (twee hosts); afgeleid (kannibalisatie) zonder GSC.
- Gevolg zaak: Twee merken kunnen dezelfde workshop-query claimen.
- Actie: Eén verkoop-URL op rugbywerkt.nl; scrumcollege.nl canonical of 301 naar die pagina — of ScrumCollege als enige agile-URL en RW linkt alleen. Eigenaar kiest.
- Eigenaar: jullie
- Effort: S (besluit) / M (redirects)
- Prio: P1
- Meetpunt: Eén zin in kader: scrum-primary = {url}.
- Afhankelijk van: F-002 (RW scrum-pagina) of omgekeerd

### F-009

- Laag: 8 (autoriteit/SERP)
- Observatie: Dossier augustus: RW niet in top-20 op clinic-termen in die snapshot.
- Bewijs: E-08. Niet herberekend 13 sep.
- Label: afgeleid (historisch citaat)
- Gevolg zaak: Mag niet als verse ranking worden gebracht. Verklaart wel waarom dienst-URL’s eerst moeten.
- Actie: Niet herhalen als feit. GSC beide hosts. Geen volumes verzinnen.
- Eigenaar: jullie (GSC) / wij (niet citeren als live)
- Effort: S
- Prio: P1 (GSC) — de SERP-claim zelf is geen actie
- Meetpunt: Property beide hosts; 16 weken of “nieuw, geen data”.
- Afhankelijk van: []

### F-010 (GBP NS)

- Laag: 7
- Observatie: Nature Sports is lokale zaak (Maastricht-outdoor in meta). GBP-paneel ontbrak in aug-dossier. Niet ingelogd deze run.
- Bewijs: E-09; dossier.
- Label: onbekend (profielcijfers); afgeleid (GBP relevant)
- Gevolg zaak: Local pack hoort bij NS, niet bij RW-als-winkel. Audit pas ná crawl-fix. Geen live Maps-wijziging zonder eigenaren.
- Actie: Ná F-005: GBP-check categorie, uren, foto’s, NAP vs site. RW: geen LocalBusiness-winkel.
- Eigenaar: gedeeld
- Effort: S
- Prio: P1 (ná deny-gate)
- Meetpunt: Schriftelijke diff of “nog niet geclaimd”. Geen sterren verzinnen.
- Afhankelijk van: F-005

## Naslag-kandidaten

- Deny-gate: geen landings op JS/Canva-schil tot eerste fetch H1+body heeft.
- One-pager WP met diensten als H2 ≠ dienst-URL in pages-sitemap.
- Demo-slug op een echte case (`voorbeeld-artikel-2`) is een vaste fail.
- Directory-les Camperstaan niet op NS plakken: NS ís lokaal; RW niet.

## Toets 1

Open. Bouwer schrijft geen `toets.md` met akkoord.
