# Camperstaan — wat er speelt online, en wat we eerst doen

**Peildatum:** 13 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

Camperstaan is al een echte directory: honderden plekpagina's, stadspagina's en provinciepagina's, met een bronlink per plek. Dat is sterker dan een brochure-site. De zaak hapert op drie meetbare punten die we vandaag opnieuw hebben gemeten.

De homepage zegt **306 plekken**. De zoekpagina toont **293** unieke Nederlandse listings. Het verschil zit in dertien Belgische en Duitse URL's die wél in de sitemap staan en live zijn, terwijl de Nederlandse lijst ze weglaat. Jullie eigen copy zegt nog "later België en Duitsland".

Wie "camperplaats Kampen" of "camperplaatsen in Drenthe" zoekt, landt in onze steekproef bij de gemeente, Visit-sites of Campercontact — niet op jullie listing of provinciepagina. Op de plekpagina zelf is het claimformulier (€ 99) het grootste blok; de reiziger krijgt één alinea plus chips (~132 woorden in het hoofdblok).

Technisch: elke HTML-pagina komt als `private, no-store` van de origin. De zoekindex weegt **1,41 MB**. Dat is onnodig zwaar voor een openbare catalogus.

**Eerste besluit dat we vragen:** akkoord op de drie acties hieronder (scope/telling, plekpagina voor de gast, cache + lichtere zoekpagina). Daarna Toets, dan pas bouwen op een preview.

### Drie dingen die het meeste opleveren

1. **Eén telling, één land in de NL-sitemap** — gast en crawler zien nu twee waarheden (306 vs 293, plus live BE/DE) — klaar als home, `/plaatsen` en sitemap-NL hetzelfde aantal NL-plekken tonen en BE/DE niet in de NL-sitemap staan (of achter een land-hub).
2. **Plekpagina eerst voor de reiziger** — claimformulier staat nu boven het nut van de pagina — klaar als prijs, max nachten, voorzieningen, bron en kaart boven de claim staan, en JSON-LD coördinaten + prijsrange uit bestaande velden heeft.
3. **HTML cachebaar, zoekpagina lichter** — nu no-store + 1,41 MB `/plaatsen` — klaar als anonieme HTML `public` is (CDN-hit) en `/plaatsen` onder een afgesproken gewicht zit zonder listings uit de sitemap te halen.

### Wat al goed staat (niet kapotmaken)

- Apex redirect naar `www`
- `robots.txt` houdt dashboard, login, api en betalen buiten de index
- 404 is `noindex`
- Canonicals op hubs en listings (behalve regio-filter op `/plaatsen`)
- Bronlink + `sameAs` naar gemeente of eigenaar
- Provincie- en stadshubs met echte aantallen (voorbeeld Drenthe: 19 plekken)
- Server-HTML: de plektekst staat in de bron, niet alleen in JavaScript
- Merkquery "Camperstaan" toont home en zoekpagina

---

## Wat we hebben bekeken

Openbare HTML, headers, `robots.txt`, `sitemap.xml`, drie listings, een provincie, een stad, `/over`, en een zoeksteekproef. Geen Search Console-export. Geen betaalde linkdata.

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & indexatie | bekeken | Sitemap 577 URL's; telling botst; HTML no-store |
| Pagina-opbouw & links | bekeken | IA klopt; listing-template is eigenaar-eerst |
| Teksten & zoekintentie | bekeken | Hubs bestaan; listings dun t.o.v. de bronpagina |
| Snelheid op kernpagina's | deels | Geen Lighthouse; lab: `/plaatsen` 1,41 MB, TTFB ~0,3–0,5 s |
| Google-bedrijfsprofiel | n.v.t. | Landelijke directory, geen lokale zaak |
| Reviews & reputatie | n.v.t. hier | Geen sterren verzinnen; Campercontact wint reviews |
| Concurrenten in zoekresultaten | steekproef | Gemeente, Visit, Campercontact, Park4Night |
| AI-vindbaarheid | steekproef | Categorie-bronnen noemen Camperstaan niet |

---

## Het verhaal op één lijn

### De sitemap is al internationaal, de winkel nog Nederlands

Dertien plekken in België en Duitsland zijn live en staan in dezelfde sitemap als Kampen en Groningen. De Nederlandse zoekpagina toont ze niet. De homepage telt ze wél. Gevolg: Google mag BE/DE indexeren alsof het bij "camperplaatsen in Nederland" hoort, terwijl de gast een andere catalogus ziet. Keuze: NL zuiver houden tot er land-hubs zijn, of die hubs nu serieus nemen. Niet "later" blijven zeggen.

### De plek-URL vecht met de gemeente — en met jullie eigen claimformulier

De gemeente Kampen en Visit Kampen winnen "camperplaats Kampen". Dat is logisch: zij zijn de bron. Jullie listing moet de vergelijking zijn (prijs 2026, max 72 uur, voorzieningen, bronlink), niet een inschrijfformulier. Zolang het wachtwoordveld het scherm deelt met de enige alinea, is er weinig reden om jullie URL te kiezen boven kampen.nl.

### Techniek remt wat al goed staat

De site is snel genoeg in TTFB (~0,16–0,33 s op kernpagina's), maar `/plaatsen` dwingt 1,41 MB door de lijn. Combineer dat met `no-store` en elke hit gaat opnieuw naar origin. Voor een catalogus die grotendeels statisch is, is dat vermijdbaar.

---

## Keuzes (wij geven een voorkeur)

### Keuze 1 — BE/DE in de NL-sitemap laten, of eruit tot er land-hubs zijn?

**Voorstel:** uit de NL-sitemap tot `/belgie` en `/duitsland` (of gelijk) bestaan en de homepage per land telt.  
**Waarom:** 13 URL's zijn geen markt, wel ruis.  
**Alternatief:** nu land-hubs + filter, en 306 uitleggen als "NL+BE+DE".  
**Opnieuw bekijken als:** jullie BE/DE deze maand actief willen claimen.

### Keuze 2 — claimen op de plekpagina of op een eigen URL?

**Voorstel:** gastfeiten bovenaan; claim onderaan of `/plaatsen/{slug}/claim`.  
**Waarom:** dezelfde URL kan niet én reiziger én KvK-upgrade als eerste taak hebben.  
**Alternatief:** claim blijft, maar ingeklapt tot "Beheer je deze plek?"  
**Opnieuw bekijken als:** conversie claim > bezoekers per listing gemeten is.

### Keuze 3 — regio-filter op `/plaatsen` of doorverwijzen naar provincie-hub?

**Voorstel:** filter op provincie leidt naar `/provincie/{slug}` (301 of canonical).  
**Waarom:** "camperplaatsen in Drenthe" hoort op de hub, niet op een querystring die canonical `/plaatsen` blijft.  
**Alternatief:** filter alleen op `/plaatsen` houden, maar dan canonical mee laten variëren.  
**Opnieuw bekijken als:** jullie filter UX belangrijker vinden dan hub-ranking.

---

## Werklijst — eerste 90 dagen

Zie `werklijst.md` in deze run. Samenvatting:

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | NL-telling + BE/DE uit NL-sitemap | jullie besluit, wij bouwen | home = /plaatsen = sitemap-NL |
| 2 | Listing-template gast-eerst | wij + jullie copy | Kampen-template herhaald |
| 3 | Cache headers + /plaatsen verlichten | wij | public cache + < 500 kB of paginering |

### Maand twee / drie

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 4 | JSON-LD geo + priceRange | wij | Rich Results Test groen |
| 5 | Provincie-hub intern linken | gedeeld | steekproef Drenthe herhaald |
| 6 | Nameting baseline | aparte run | GSC of steekproef vastgelegd |

**Buiten scope deze ronde:** linkdisavow, GBP, live deploy, mail naar eigenaren, %-trafficbelofte.

---

## Hoe we weten of het werkt

- **Nu bekend:** tellingen, headers, sitemap-structuur, steekproef Kampen/Drenthe, lab-gewichten.
- **Nog niet bekend:** GSC-impressies per template, inkomende links, claim-conversie.
- **Over 30 dagen:** steekproef Kampen opnieuw; `/plaatsen` gewicht; cache-hit ratio op listing.
- **Over 90 dagen:** provincie-intent steekproef; Nameting-run met baseline.

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
