# Camperstaan — wat er speelt online, en wat we eerst doen

**Peildatum:** 14 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

:::lead
Camperstaan is al een echte plekkengids: honderden plekpagina's, stadspagina's en provinciepagina's, elk met een bronlink. Dat is sterker dan een simpele brochure-site. We zien vier punten die bezoekers en vindbaarheid in Google nu remmen, plus twee verbeteringen die minder urgent zijn.
:::

:::kpi
3|Prioriteiten|deze maand
6|Acties|90 dagen
577|Pagina's|in overzicht
4|Urgent|bevindingen
:::

:::callout-decision
**Besluit dat we vragen:** akkoord op de drie prioriteiten hieronder. Daarna Toets, dan pas bouwen op een preview — nog niets live.
:::

### Drie prioriteiten

:::prio-cards
1|Eén aantal plekken, één land in het Nederlandse overzicht|Klaar als: homepage, zoekpagina en het Nederlandse pagina-overzicht voor Google hetzelfde aantal Nederlandse plekken tonen, en Belgische/Duitse plekken daar niet tussen staan (of pas als er landpagina's zijn).
2|Plekpagina eerst voor de reiziger|Klaar als: prijs, maximaal aantal nachten, voorzieningen, bron en kaart boven het claimformulier staan.
3|Provincie-keuze leidt naar de provinciepagina|Klaar als: iemand op Drenthe filtert en op de Drenthe-overzichtspagina landt (niet op een algemene zoekpagina die Google als hoofdpagina ziet).
:::

### Wat al goed staat (niet kapotmaken)

:::good-grid
Bezoekers komen automatisch op www terecht
Inloggen, betalen en dashboard staan buiten Google
Pagina's die niet bestaan worden niet geïndexeerd
Plekpagina's hebben een vaste hoofdadres in Google
Bronlink naar gemeente of eigenaar op de plekpagina
Provincie- en stadspagina's tonen echte aantallen
Plektekst staat in de pagina zelf (niet alleen via JavaScript)
Zoeken op Camperstaan toont homepage en zoekpagina
:::

---

## Wat we hebben bekeken

:::section-intro
Openbare pagina's, technische koppen, robots-bestand, pagina-overzicht voor Google, drie plekpagina's, een provincie, een stad, de over-pagina en een steekproef in Google. Geen Search Console-export. Geen betaalde linkdata.
:::

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

## Markt & concurrenten

:::section-intro
Wie concurreert op dezelfde zoekintentie als Camperstaan — steekproef 13 september plus marktcontext uit eerdere vergelijkingen. Geen volledige crawl van alle 577 pagina's.
:::

| Speler | Rol | Waar zij sterk zijn t.o.v. jullie | Label |
| --- | --- | --- | --- |
| Campercontact | Community-gids en app | Reviews en merk; wint op "camperplaats Kampen" | afgeleid |
| ANWB | Routes en camperinformatie | Merkvertrouwen; landelijke dekking | afgeleid |
| KampeerHub | Thema-gids (water, gratis) | Themapagina's en SEO-breedte | afgeleid |
| Gemeente / bron | Officiële plekinfo | Autoriteit per plek; staat bovenaan bij plaats-zoek | gemeten |
| Visit / toerisme | Stad- of regiomarketing | Lokale vindbaarheid (bijv. Kampen) | gemeten |
| Park4Night | Internationale community-app | Buitenland en crowd-data | gemeten |
| Camperstaan | Jullie gids | 577 plekken, bronlinks, provincie-structuur | gemeten |

Geen posities of verkeercijfers zonder Search Console — zie zoektermen hieronder.

---

## Zoektermen die ertoe doen

:::section-intro
Openbare zoeksteekproef 13 september (zelfde dag als technische metingen). Geen Search Console — dus geen klikken of exacte posities.
:::

| Zoekopdracht | Wat de zoeker wil | Zichtbaar voor jullie? | Label |
| --- | --- | --- | --- |
| Camperstaan | Merk vinden | Ja — home en /plaatsen in de hits | gemeten |
| camperplaats Kampen | Concrete plek boeken | Nee — listing niet in de getoonde hits | gemeten |
| camperplaatsen in Drenthe | Regio-overzicht | Nee — /provincie/drenthe niet in steekproef | gemeten |
| site:www.camperstaan.nl camperplaats Kampen | Diagnostiek (wat Google indexeert) | Deels — home en /plaatsen, geen listing-URL | gemeten |
| gratis camperplaats Nederland | Thema / inspiratie | Niet nagekeken deze run | onbekend |

---

## Bevindingen

:::finding p0
@kpi
306|Homepage
293|Zoekpagina NL
13|BE/DE extra
@end
### 1. Homepage en zoekpagina tellen verschillend — en er staan buitenlandse plekken tussen

Het verschil zit in dertien plekken in België en Duitsland die live staan en in het pagina-overzicht voor Google, maar niet op de Nederlandse zoekpagina. Jullie copy zegt nog dat België en Duitsland "later" komen.

**Gevolg:** bezoekers en Google zien niet hetzelfde aanbod. Google kan buitenlandse plekken tonen alsof ze bij "camperplaatsen in Nederland" horen.

**Voorstel:** één telling voor Nederland; buitenlandse plekken uit het Nederlandse overzicht tot er landpagina's zijn — of die landpagina's nu serieus maken.
:::

:::finding p0
### 2. De plekpagina helpt de reiziger te weinig

Wie "camperplaats Kampen" zoekt, vindt vooral de gemeente, Visit Kampen of Campercontact — niet jullie plekpagina. Logisch: zij zijn de bron.

Op jullie Kampen-pagina is het claimformulier (€ 99) het grootste blok. De reiziger krijgt één korte alinea met chips — ongeveer 132 woorden in het hoofdblok.

**Gevolg:** weinig reden om jullie pagina te openen in plaats van kampen.nl.

**Voorstel:** prijs (2026), max 72 uur, voorzieningen, bronlink en kaart bovenaan; claim onderaan of op een aparte URL.
:::

:::finding p1
### 3. Provincie-filter wijst Google naar de verkeerde pagina

Filter je op Drenthe op de zoekpagina, dan heet de pagina "Camperplaatsen in Drenthe". Google ziet als hoofdadres nog steeds de algemene zoekpagina — niet `/provincie/drenthe`.

**Gevolg:** bij "camperplaatsen in Drenthe" verschijnt jullie Drenthe-overzichtspagina niet in onze steekproef.

**Voorstel:** provincie-filter stuurt door naar de provinciepagina (bijv. `/provincie/drenthe`).
:::

:::finding p1
### 4. Zoekpagina is zwaar; pagina's worden niet tussen opgeslagen

Elke HTML-pagina wordt met "niet opslaan" geleverd: elke bezoeker haalt alles opnieuw van de server. De zoekpagina weegt **1,41 MB** omdat alle 293 kaarten in één pagina staan.

**Gevolg:** onnodig zwaar voor een catalogus die grotendeels hetzelfde blijft.

**Voorstel:** anonieme pagina's mogen tussen opgeslagen worden; zoekpagina verlichten (bijv. paginering) zonder plekken uit het overzicht te halen.
:::

:::finding p2
### 5. Google mist locatie en prijs op de plekpagina

Op Kampen staan coördinaten en prijs in de pagina, maar niet in de extra gegevens die Google leest (gestructureerde data).

**Voorstel:** locatie, prijsklasse en voorzieningen toevoegen aan die gegevens — velden bestaan al in jullie systeem.
:::

:::finding p2
### 6. Drenthe-overzichtspagina wint nog niet op zoekintentie

De Drenthe-hub bestaat (19 plekken) maar verscheen niet in onze steekproef op "camperplaatsen in Drenthe".

**Voorstel:** intern versterken (tekst, links) en steekproef herhalen — gedeeld jullie en wij.
:::

---

## Beslissingen die we van jullie nodig hebben

:::decisions
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
:::

---

## Werklijst — eerste 90 dagen

:::section-intro
Zie `werklijst.md` in deze run. Zelfde lijst, geen tweede waarheid.
:::

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

:::measure
Nu bekend|Baseline|tellingen, technische koppen, pagina-overzicht, steekproef Kampen/Drenthe, gewicht zoekpagina
Nog niet bekend|Open|Search Console per paginatype, inkomende links, claim-conversie
30 dagen|Hercontrole|steekproef Kampen; gewicht zoekpagina; cache op plekpagina's
90 dagen|Nameting|provincie-zoekopdracht; nameting-run met baseline
:::

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
| F-009 | Concurrenten Kampen/Drenthe | zoeksteekproef 13 sep | gemeten |
| F-010 | ANWB/KampeerHub marktcontext | vergelijkingsdossier, geen eigen steekproef | afgeleid |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| FAQ schema op elke listing | Geen echte FAQ-content |
| LocalBusiness voor Camperstaan | Geen fysieke zaak |
| 2000 woorden per provincie | Bulk zonder unieke info |
| Disavow zonder linkdata | Geen export deze run |
