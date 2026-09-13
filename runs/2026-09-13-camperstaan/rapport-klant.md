# Camperstaan — wat er speelt online, en wat we eerst doen

**Peildatum:** 13 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

Camperstaan is al een directory, geen visitekaartje. Apex verwijst naar www, robots en sitemap staan, en 306 plekpagina’s hebben een eigen URL plus een `Campground`-schema met bronlink naar gemeente of eigenaar. Dat moeten we niet ombouwen tot een “lokaal winkeltje”.

Het risico zit in de **drie lagen erbovenop**: plek, stad (`/plaats/…`, 253 URL’s) en provincie (12). Die titels lijken op elkaar (“Camperplaatsen in Kampen” naast “Camperplaatsen in Limburg”). Zonder unieke taak per laag gaan stadshubs elkaar en de provincie in de weg zitten.

We hebben geen Search Console. We beloven dus geen verkeer. Eerste besluit: architectuur helder maken en meten welke template Google echt opneemt.

**Eerste besluit dat we vragen:** akkoord op “platform blijven, geen GBP op Camperstaan” plus een plan voor stadshubs (unieke keuzehulp of dunne steden mergen/prunen).

### Drie dingen die het meeste opleveren

1. **Stadshubs een eigen job geven of dunne steden prunen** — anders concurreren 253 bijna-identieke titels met provincies en plekken — klaar als elke gehouden `/plaats/{stad}` uitlegt waarom jíj die stad kiest, met links naar de plekken, of is samengevoegd.
2. **Plektemplate laten zoals het is (Campground + bron), wel steekproef op dunne plekken** — de directory-waarde is de plek-URL — klaar als we 10 plekken hebben nagelopen op unieke H1, bronlink en geen winkel-schema.
3. **Search Console op het www-domein** — zonder indexdekking per template is de rest giswerk — klaar als er een property is en een export van geïndexeerde vs. uitgesloten URL’s per pad (`/plaatsen/`, `/plaats/`, `/provincie/`).

### Wat al goed staat (niet kapotmaken)

- 306 plek-URL’s, in lijn met de claim “306 plekken”
- `Campground` op de plek, `WebSite` op home — geen LocalBusiness-theater
- robots.txt houdt dashboard/inloggen/API buiten de index
- HSTS aan, canonieke host www

---

## Wat we hebben bekeken

Openbare HTML, robots, sitemap en steekproef van plek-, stads- en provinciepagina. Geen GSC. Geen CrUX-dataset in deze run.

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & indexatie | bekeken | Sitemap 577 URL’s; dashboard geblokkeerd |
| Pagina-opbouw & links | bekeken | Drie publieke templates + plekdetail |
| Teksten & zoekintentie | bekeken | Home en plek helder; stadshubs template-achtig |
| Snelheid op kernpagina’s | niet gemeten | Geen lab-run / CrUX |
| Google-bedrijfsprofiel | n.v.t. | Directory, geen winkel |
| Reviews & reputatie | n.v.t. op platformniveau | Plekken verwijzen naar bron |
| Concurrenten in zoekresultaten | niet opnieuw gemeten | Gemeente- en toerismepagina’s zijn de bron |
| AI-vindbaarheid | steekproef | Merk + “camperplaatsen Nederland” is uitlegbaar; stadslaag is ruis |

---

## Het verhaal op één lijn

### De directory staat. De hubs kunnen hem verzwakken.

Plekpagina’s zijn het product: één URL, één H1, een bron. Stadshubs herhalen het patroon “Camperplaatsen in {naam}”. Dat is een geldige hub als de stad iets toevoegt (welke plekken, voor wie, hoe kiezen). Als de pagina alleen de lijst herhaalt, is het een tweede kopie van dezelfde intentie. Gevolg: Google moet kiezen tussen stad, provincie en plek — en kiest vaak de verkeerde of geen.

### Dit is geen kapsalon. Schema moet dat blijven zeggen.

Een automatische scan zal LocalBusiness of GBP eisen. Dat botst met wat de site is. Listings zijn overnachtingsplekken van anderen. Wij houden `Campground` + `sameAs` naar de bron. Geen bedrijfsprofiel “Camperstaan Maastricht” verzinnen.

---

## Keuzes (wij geven een voorkeur)

### Keuze 1 — Stadshubs houden of saneren?

**Voorstel:** houden voor steden met meerdere plekken en eigen intro; dunne één-plek-steden laten redirecten of noindex tot de copy uniek is.  
**Waarom:** 253 extra URL’s zonder unieke taak is kannibalisatie, geen dekking.  
**Alternatief:** alle stadshubs noindex, alleen provincie + plek.  
**Opnieuw bekijken als:** GSC toont dat stadshubs al impressies trekken op stad+camperplaats.

### Keuze 2 — GBP voor Camperstaan als merk?

**Voorstel:** nee, niet als SEO-hoofdactie.  
**Waarom:** zoekers willen een plek, geen kantoor van de directory.  
**Alternatief:** één merkprofiel puur voor support, los van listings.  
**Opnieuw bekijken als:** jullie een fysiek kantoor met bezoek willen ranken.

---

## Werklijst — eerste 90 dagen

Zie `werklijst.md` in deze run.

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | GSC www.camperstaan.nl + export per template | gedeeld | property + spreadsheet paden |
| 2 | Regel stadshubs: uniek / merge / noindex | wij | schriftelijke regel + 10 voorbeelden |
| 3 | Steekproef 10 plekken: H1, bron, schema | wij | checklist afgevinkt |

### Maand twee / drie

- Copy op de 20 stadshubs met de meeste plekken
- Interne links home → provincie → stad → plek nalopen
- Pas daarna eventuele nieuwe filters/landings

**Buiten scope deze ronde:** ads, dashboard-SEO, LocalBusiness op listings, Atelier-redesign.

---

## Hoe we weten of het werkt

- **Nu bekend:** sitemap-aantallen, template-typen, schema-type op een plek
- **Nog niet bekend:** welke template Google indexeert of toont
- **Over 30 dagen:** GSC: geïndexeerd vs. uitgesloten per pad
- **Over 90 dagen:** impressies op `/plaatsen/*` vs `/plaats/*` vs `/provincie/*` (geen %-belofte vooraf)

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | Sitemap 577 URL’s; 306 plek-slugs | `https://www.camperstaan.nl/sitemap.xml` 13 sep | gemeten |
| F-002 | Apex naar www; HSTS aan | fetch `camperstaan.nl` → www; response header | gemeten |
| F-003 | 253 stadshubs naast 12 provincies en 306 plekken | sitemap-paden `/plaats/` vs `/plaatsen/` vs `/provincie/` | gemeten |
| F-004 | Plek = Campground + sameAs bron, geen LocalBusiness | JSON-LD Kampen-plek 13 sep | gemeten |
| F-005 | robots blokkeert dashboard/inloggen/API | `https://www.camperstaan.nl/robots.txt` | gemeten |
| F-006 | Geen GSC in deze run | geen export in dossier | onbekend (verkeer) |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| LocalBusiness / GBP verplicht op Camperstaan | Directory; kader + bestaande Campground-les |
| “Voeg 500 blogposts over camperen toe” | Lost template-kannibalisatie niet op |
| Sterren/aggregateRating op plekken | Geen reviews in dit dossier; misleidend |
| Alles noindex behalve home | 306 plekken zijn het product |
