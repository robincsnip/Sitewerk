# Camperstaan — wat er speelt online, en wat we eerst doen

**Peildatum:** 13 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

Camperstaan is al een echte directory: honderden plekpagina’s, stadspagina’s en provinciepagina’s, met een bronlink per plek. Dat is sterker dan een brochure-site. De zaak hapert op drie meetbare punten.

De homepage zegt 306 plekken. De zoekpagina toont 293. Het verschil zit in dertien Belgische en Duitse URL’s die wél in de sitemap staan en live zijn, terwijl de Nederlandse lijst ze weglaat. De eigen copy zegt nog “later België en Duitsland”.

Wie “camperplaats Kampen” of “camperplaatsen in Drenthe” zoekt, landt in deze steekproef bij de gemeente, Visit-sites of Campercontact — niet op jullie listing of provinciepagina. Op de plekpagina zelf is het claimformulier (€ 99) het grootste blok; de reiziger krijgt één alinea plus chips.

Technisch: elke HTML-pagina komt als `private, no-store` van de origin. De zoekindex weegt 1,4 MB. Dat is onnodig voor een openbare catalogus.

**Eerste besluit dat we vragen:** akkoord op de drie acties hieronder (scope/telling, plekpagina voor de gast, cache + lichtere zoekpagina). Daarna Toets, dan pas bouwen op een preview.

### Drie dingen die het meeste opleveren

1. **Eén telling, één land in de NL-sitemap** — gast en crawler zien nu twee waarheden (306 vs 293, plus live BE/DE) — klaar als home, `/plaatsen` en sitemap-NL hetzelfde aantal NL-plekken tonen en BE/DE niet in de NL-sitemap staan (of achter een land-hub).
2. **Plekpagina eerst voor de reiziger** — claimformulier staat nu boven het nut van de pagina — klaar als prijs, max nachten, voorzieningen, bron en kaart boven de claim staan, en JSON-LD coördinaten + prijsrange uit bestaande velden heeft.
3. **HTML cachebaar, zoekpagina lichter** — nu no-store + 1,4 MB `/plaatsen` — klaar als anonieme HTML `public` is (CDN-hit) en `/plaatsen` onder een afgesproken gewicht zit zonder listings uit de sitemap te halen.

### Wat al goed staat (niet kapotmaken)

- Apex redirect naar `www`
- `robots.txt` houdt dashboard, login, api en betalen buiten de index
- 404 is `noindex`
- Canonicals op hubs en listings
- Bronlink + `sameAs` naar gemeente of eigenaar
- Provincie- en stadshubs met echte aantallen (voorbeeld Drenthe: 19 plekken, prijsrange in de beschrijving)
- Server-HTML: de plektekst staat in de bron, niet alleen in JavaScript

---

## Wat we hebben bekeken

Openbare HTML, headers, `robots.txt`, `sitemap.xml`, drie listings, een provincie, een stad, `/over`, `/contact`, en een zoeksteekproef. Geen Search Console-export. Geen betaalde linkdata.

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & indexatie | bekeken | Sitemap 577 URL’s; telling botst; HTML no-store |
| Pagina-opbouw & links | bekeken | IA klopt; listing-template is eigenaar-eerst |
| Teksten & zoekintentie | bekeken | Hubs bestaan; listings dun t.o.v. de bronpagina |
| Snelheid op kernpagina’s | deels | Geen Lighthouse; lab: `/plaatsen` 1,4 MB, TTFB ~0,3 s |
| Google-bedrijfsprofiel | n.v.t. | Landelijke directory, geen lokale zaak |
| Reviews & reputatie | n.v.t. hier | Geen sterren verzinnen; Campercontact wint reviews |
| Concurrenten in zoekresultaten | steekproef | Gemeente, Visit, Campercontact, Park4Night |
| AI-vindbaarheid | steekproef | Categorie-bronnen noemen Camperstaan niet |

---

## Het verhaal op één lijn

### De sitemap is al internationaal, de winkel nog Nederlands

Dertien plekken in België en Duitsland zijn live en staan in dezelfde sitemap als Kampen en Groningen. De Nederlandse zoekpagina toont ze niet. De homepage telt ze wél. Gevolg: Google mag BE/DE indexeren alsof het bij “camperplaatsen in Nederland” hoort, terwijl de gast een andere catalogus ziet. Keuze: NL zuiver houden tot er land-hubs zijn, of die hubs nu serieus nemen. Niet “later” blijven zeggen.

### De plek-URL vecht met de gemeente — en met jullie eigen claimformulier

De gemeente Kampen en Visit Kampen winnen “camperplaats Kampen”. Dat is logisch: zij zijn de bron. Jullie listing moet de vergelijking zijn (prijs 2026, max 72 uur, voorzieningen, bronlink), niet een inschrijfformulier. Zolang het wachtwoordveld het scherm deelt met de enige alinea, is er weinig reden om jullie URL te kiezen boven kampen.nl.

---

## Keuzes (wij geven een voorkeur)

### Keuze 1 — BE/DE in de NL-sitemap laten, of eruit tot er land-hubs zijn?

**Voorstel:** uit de NL-sitemap tot `/belgie` en `/duitsland` (of gelijk) bestaan en de homepage per land telt.  
**Waarom:** 13 URL’s zijn geen markt, wel ruis.  
**Alternatief:** nu land-hubs + filter, en 306 uitleggen als “NL+BE+DE”.  
**Opnieuw bekijken als:** jullie BE/DE deze maand actief willen claimen.

### Keuze 2 — claimen op de plekpagina of op een eigen URL?

**Voorstel:** gastfeiten bovenaan; claim onderaan of `/plaatsen/{slug}/claim`.  
**Waarom:** dezelfde URL kan niet én reiziger én KvK-upgrade als eerste taak hebben.  
**Alternatief:** claim boven, en accepteren dat listings de bronpagina blijven verliezen.  
**Opnieuw bekijken als:** de upgrade de enige KPI is en zoekverkeer bijzaak.

---

## Werklijst — eerste 90 dagen

Dit is de opdracht. Packets: `taken/T-1.md` t/m `T-4.md`. `werklijst.md` is dezelfde lijst.

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | NL-sitemap + telling gelijk trekken | wij | home, zoekpagina en sitemap-NL hetzelfde NL-aantal |
| 2 | Plekpagina: gast eerst, JSON-LD geo/prijs | wij | preview: claim onder gastfeiten; geo in JSON-LD |
| 3 | Publieke HTML cachen | wij | `cache-control` public op `/` en een listing |

### Maand twee / drie

- Zoekpagina lichter (gewicht), listings blijven in sitemap
- Provincie-hubs: gratis/betaald uit bestaande data, geen nieuwe verhalen
- KvK op `/over` zodra het nummer er is (jullie)

**Buiten scope deze ronde:** nieuwe site (Atelier), Google-bedrijfsprofiel, review-module, België/Duitsland als marketingcampagne, mail naar plek-eigenaren.

---

## Hoe we weten of het werkt

- **Nu bekend:** 306 vs 293; 13 BE/DE in sitemap; `/plaatsen` 1,41 MB; HTML no-store; listing Kampen ~één alinea + claimformulier; zoeksteekproef zonder jullie listing in de hits.
- **Nog niet bekend:** GSC-dekking per listing; CrUX/Lighthouse; inkomende links.
- **Over 30 dagen:** dezelfde tellingen en headers op preview; geen live tot eigenaren-ja.
- **Over 90 dagen:** nameting met dezelfde finding-IDs (F-001 t/m F-004). Geen %-winst zonder twee metingen.

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | 306 vs 293; 13 BE/DE in sitemap | sitemap.xml + HTML home/`/plaatsen` | gemeten |
| F-002 | HTML no-store, CDN MISS | response headers | gemeten |
| F-003 | `/plaatsen` 1,41 MB | Content-Length / curl size | gemeten |
| F-004 | Claimformulier + dunne gastcopy; JSON-LD zonder geo | listing Kampen HTML | gemeten |
| F-005 | Geen listing in Kampen/Drenthe/Vlaardingen-hits | zoeksteekproef 13 sep 2026 | gemeten |
| F-006 | GBP n.v.t. | sitetype directory | afgeleid |
| F-007 | Inkomende links | geen export | onbekend |
| F-008 | Categorie-bronnen zonder Camperstaan | zoeksteekproef | gemeten |
| F-009 | KvK ontbreekt bij € 99-copy | `/over`, listingfooter | gemeten |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| Google-bedrijfsprofiel “optimaliseren” | Geen lokale zaak; Maps-theater |
| LocalBusiness-schema op home | Directory, geen vestiging |
| Blog/AI-artikelen “camperplaatsen Nederland” | Lost telling, template en cache niet op |
| Reviews/sterren op listings verzinnen | Bronmodel; geen eigen reviews in de HTML |
| WebSite SearchAction als eerste klus | Nice-to-have; niet de telling of de plekpagina |
| `% meer verkeer` | Geen GSC-baseline |
