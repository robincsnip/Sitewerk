# Camperstaan — wat er speelt online, en wat we eerst doen

**Peildatum:** 13 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

Camperstaan is al een echte plekkengids: honderden plekpagina's, stadspagina's en provinciepagina's, elk met een bronlink. Dat is sterker dan een simpele brochure-site.

We zien **vier punten** die bezoekers en vindbaarheid in Google nu remmen, plus twee verbeteringen die minder urgent zijn. De drie acties hieronder pakken het grootste winstpunt aan.

**Besluit dat we vragen:** akkoord op de drie prioriteiten in de volgende sectie. Daarna Toets, dan pas bouwen op een preview — nog niets live.

### Drie prioriteiten

1. **Eén aantal plekken, één land in het Nederlandse overzicht** — klaar als homepage, zoekpagina en het Nederlandse pagina-overzicht voor Google hetzelfde aantal Nederlandse plekken tonen, en Belgische/Duitse plekken daar niet tussen staan (of pas als er landpagina's zijn).
2. **Plekpagina eerst voor de reiziger** — klaar als prijs, maximaal aantal nachten, voorzieningen, bron en kaart boven het claimformulier staan.
3. **Provincie-keuze leidt naar de provinciepagina** — klaar als iemand op Drenthe filtert en op de Drenthe-overzichtspagina landt (niet op een algemene zoekpagina die Google als hoofdpagina ziet).

### Wat al goed staat (niet kapotmaken)

- Bezoekers komen automatisch op `www` terecht
- Inloggen, betalen en het dashboard staan buiten Google
- Pagina's die niet bestaan worden niet geïndexeerd
- Plekpagina's hebben een vaste hoofdadres in Google
- Bronlink naar gemeente of eigenaar staat op de plekpagina
- Provincie- en stadspagina's tonen echte aantallen
- De plektekst staat in de pagina zelf (niet alleen via JavaScript)
- Zoeken op "Camperstaan" toont jullie homepage en zoekpagina

---

## Wat we hebben bekeken

Openbare pagina's, technische koppen, het robots-bestand, het pagina-overzicht voor Google, drie plekpagina's, een provincie, een stad, de over-pagina en een steekproef in Google. Geen Search Console-export. Geen betaalde linkdata.

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & vindbaarheid | bekeken | Pagina-overzicht met 577 adressen; tellingen botsen; pagina's niet tussen opgeslagen |
| Pagina-opbouw & links | bekeken | Structuur klopt; plekpagina richt zich nu op de eigenaar |
| Teksten & zoekintentie | bekeken | Overzichtspagina's bestaan; plekpagina's zijn dun t.o.v. de bron |
| Snelheid | deels | Geen Lighthouse; zoekpagina weegt 1,41 MB |
| Google-bedrijfsprofiel | n.v.t. | Landelijke gids, geen lokale winkel |
| Reviews & reputatie | n.v.t. hier | Geen sterren verzinnen; Campercontact wint reviews |
| Concurrenten in zoekresultaten | steekproef | Gemeente, Visit, Campercontact, Park4Night |
| AI-vindbaarheid | steekproef | Categorie-bronnen noemen Camperstaan niet |

---

## Bevindingen

### 1. Homepage en zoekpagina tellen verschillend — en er staan buitenlandse plekken tussen

Op de homepage staat **306 plekken**. Op de zoekpagina staan **293** unieke Nederlandse plekken. Het verschil: dertien plekken in België en Duitsland staan live en in het pagina-overzicht voor Google, maar niet op de Nederlandse zoekpagina. Jullie copy zegt nog dat België en Duitsland "later" komen.

**Gevolg:** bezoekers en Google zien niet hetzelfde aanbod. Google kan buitenlandse plekken tonen alsof ze bij "camperplaatsen in Nederland" horen.

**Voorstel:** één telling voor Nederland; buitenlandse plekken uit het Nederlandse overzicht tot er landpagina's zijn — of die landpagina's nu serieus maken.

### 2. De plekpagina helpt de reiziger te weinig

Wie "camperplaats Kampen" zoekt, vindt vooral de gemeente, Visit Kampen of Campercontact — niet jullie plekpagina. Logisch: zij zijn de bron.

Op jullie Kampen-pagina is het claimformulier (€ 99) het grootste blok. De reiziger krijgt één korte alinea met chips — ongeveer 132 woorden in het hoofdblok.

**Gevolg:** weinig reden om jullie pagina te openen in plaats van kampen.nl.

**Voorstel:** prijs (2026), max 72 uur, voorzieningen, bronlink en kaart bovenaan; claim onderaan of op een aparte URL.

### 3. Provincie-filter wijst Google naar de verkeerde pagina

Filter je op Drenthe op de zoekpagina, dan heet de pagina "Camperplaatsen in Drenthe". Google ziet als hoofdadres nog steeds de algemene zoekpagina — niet `/provincie/drenthe`.

**Gevolg:** bij "camperplaatsen in Drenthe" verschijnt jullie Drenthe-overzichtspagina niet in onze steekproef.

**Voorstel:** provincie-filter stuurt door naar de provinciepagina (bijv. `/provincie/drenthe`).

### 4. Zoekpagina is zwaar; pagina's worden niet tussen opgeslagen

Elke HTML-pagina wordt met "niet opslaan" geleverd: elke bezoeker haalt alles opnieuw van de server. De zoekpagina weegt **1,41 MB** omdat alle 293 kaarten in één pagina staan.

**Gevolg:** onnodig zwaar voor een catalogus die grotendeels hetzelfde blijft.

**Voorstel:** anonieme pagina's mogen tussen opgeslagen worden; zoekpagina verlichten (bijv. paginering) zonder plekken uit het overzicht te halen.

### 5. Google mist locatie en prijs op de plekpagina

Op Kampen staan coördinaten en prijs in de pagina, maar niet in de extra gegevens die Google leest (gestructureerde data).

**Voorstel:** locatie, prijsklasse en voorzieningen toevoegen aan die gegevens — velden bestaan al in jullie systeem.

### 6. Drenthe-overzichtspagina wint nog niet op zoekintentie

De Drenthe-hub bestaat (19 plekken) maar verscheen niet in onze steekproef op "camperplaatsen in Drenthe".

**Voorstel:** intern versterken (tekst, links) en steekproef herhalen — gedeeld jullie en wij.

---

## Beslissingen die we van jullie nodig hebben

### Beslissing 1 — Buitenlandse plekken in het Nederlandse overzicht?

**Voorstel:** eruit tot `/belgie` en `/duitsland` (of gelijkwaardig) bestaan en de homepage per land telt.  
**Alternatief:** nu landpagina's maken en 306 uitleggen als NL+BE+DE.  
**Opnieuw bekijken als:** jullie BE/DE deze maand actief willen claimen.

### Beslissing 2 — Claimen op de plekpagina of apart?

**Voorstel:** gastinformatie bovenaan; claim onderaan of op `/plaatsen/{slug}/claim`.  
**Alternatief:** claim blijft, maar ingeklapt tot "Beheer je deze plek?"  
**Opnieuw bekijken als:** claim-conversie vs. bezoekers per plek gemeten is.

### Beslissing 3 — Provincie-filter of direct naar provinciepagina?

**Voorstel:** filter op provincie leidt naar `/provincie/{slug}`.  
**Alternatief:** filter op zoekpagina houden, maar dan moet Google de juiste URL zien per provincie.  
**Opnieuw bekijken als:** filter-ervaring belangrijker is dan provincie-ranking.

---

## Werklijst — eerste 90 dagen

Zie `werklijst.md` in deze run. Zelfde lijst, geen tweede waarheid.

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | NL-telling harmoniseren; BE/DE uit NL-sitemap | jullie | home = /plaatsen = sitemap-NL count |
| 2 | Listing-template gast-eerst | wij | prijs/voorzieningen/bron boven claim |
| 3 | Regio-filter → provincie-hub | wij | Drenthe-filter op /provincie/drenthe |

### Maand twee / drie

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 4 | Cache public + /plaatsen verlichten | wij | public cache listing; /plaatsen paginering |
| 5 | JSON-LD geo + priceRange + amenities | wij | Rich Results Test |
| 6 | Hub Drenthe intern versterken | gedeeld | steekproef herhalen |

**Buiten scope deze ronde:** linkdisavow, Google-bedrijfsprofiel, live deploy, mail naar eigenaren, %-trafficbelofte.

---

## Hoe we weten of het werkt

- **Nu bekend:** tellingen, technische koppen, pagina-overzicht, steekproef Kampen/Drenthe, gewicht zoekpagina.
- **Nog niet bekend:** Search Console per paginatype, inkomende links, claim-conversie.
- **Over 30 dagen:** steekproef Kampen opnieuw; gewicht zoekpagina; of plekpagina's uit cache komen.
- **Over 90 dagen:** provincie-zoekopdracht opnieuw; nameting-run met baseline.

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | 306 vs 293 vs 13 BE/DE | home, /plaatsen, sitemap | gemeten |
| F-002 | Filter canonical /plaatsen | /plaatsen?regio=Drenthe | gemeten |
| F-003 | Listing dun + claim dominant | Kampen listing + zoeksteekproef | gemeten |
| F-004 | no-store + 1,41 MB | curl headers + size | gemeten |
| F-005 | Schema zonder geo/prijs | Kampen JSON-LD | gemeten |
| F-006 | Drenthe-hub niet in SERP | zoeksteekproef | afgeleid |
| F-007 | Links onbekend | — | onbekend |
| F-008 | AI categorie gap | steekproef | afgeleid |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| FAQ schema op elke listing | Geen echte FAQ-content |
| LocalBusiness voor Camperstaan | Geen fysieke zaak |
| 2000 woorden per provincie | Bulk zonder unieke info |
| Disavow zonder linkdata | Geen export deze run |
