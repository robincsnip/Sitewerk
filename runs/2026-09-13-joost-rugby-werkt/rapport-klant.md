# Rugby Werkt / Nature Sports — wat er speelt online, en wat we eerst doen

**Peildatum:** 13 september 2026 (live site) · dossierposities: citaat 25–27 augustus 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk  
**Voor:** Joost (en Frank) Kuppens — Rugby Werkt + Nature Sports

---

## In het kort

Joost heeft twee merken die offline werken. Online zijn het twee losse one-pagers die Google slecht kan verdelen.

**Rugby Werkt** is WordPress. De diensten (clinic, haka, Scrum College, TOPrugby) zijn koppen op één URL. De XML-sitemap voor pagina’s bevat alleen home. Er is geen H1 en geen meta description. Het telefoonnummer staat in tekst, niet als bel-link. Twee “nieuws”-stukken bestaan; één hangt nog aan de slug `voorbeeld-artikel-2` terwijl de titel “Clinic APG” is.

**Nature Sports** is een Canva-site. In de HTML die een crawler eerst ziet, zitten vrijwel geen woorden, geen H1, geen canonical, geen interne links. `robots.txt` ontbreekt. De sitemap is één URL. Nieuwe landingspagina’s hierop stapelen heeft geen zin tot die HTML crawlbaar is.

**Eerste besluit dat we vragen:** Nature Sports eerst crawl-vast maken; Rugby Werkt vier dienst-URL’s + H1/meta; geen derde merk (MRC) in deze ronde.

### Drie dingen die het meeste opleveren

1. **Nature Sports: H1, canonical, robots.txt, tekst in de HTML** — Google ziet nu bijna een lege schil — klaar als de eerste fetch een H1, canonical en meer dan een handvol woorden bevat (deny-gate voor extra URL’s).
2. **Rugby Werkt: vier dienstpagina’s + offerte** (`/rugbyclinic`, `/haka-workshop`, `/scrum-college`, `/bedrijfsuitje` of TOPrugby) — concurrenten hebben die URL’s, deze sitemap niet — klaar als elke dienst een eigen H1, titel en interne link vanaf home heeft.
3. **Search Console op beide domeinen + slug APG repareren** — zonder GSC blijven augustus-posities een snapshot; de APG-case is nu een “voorbeeld-artikel” — klaar als beide properties bestaan en `/clinic-apg/` (of gelijk) 301 is vanaf de oude slug.

### Wat al goed staat (niet kapotmaken)

- Rugby Werkt heeft echte cases (APG, Nsecure) — die niet wissen, wel netjes URL’en
- Nature Sports-meta noemt al Maastricht en diensten (die boodschap moet in de HTML, niet alleen in een tag)
- Twee merken hebben een logische splitsing: B2B landelijk vs. terrein Maastricht

---

## Wat we hebben bekeken

Live fetch beide domeinen + ScrumCollege-home + Notion-dossier 27 aug (geen nieuwe SERP, geen GSC).

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & indexatie | bekeken | RW: WP-sitemap. NS: robots 404, 1 sitemap-URL, JS-schil |
| Pagina-opbouw & links | bekeken | RW: één page-URL. NS: geen interne links in HTML |
| Teksten & zoekintentie | bekeken | Diensten als sectie, niet als pagina |
| Snelheid op kernpagina’s | deels | Geen CrUX; eerdere scans noemden zware hero-video (niet herberekend) |
| Google-bedrijfsprofiel | Nature Sports relevant; RW geen winkel | NS-paneel ontbrak in aug-dossier |
| Reviews & reputatie | niet gemeten | Cases wel; sterren niet |
| Concurrenten in zoekresultaten | citaat aug | RW afwezig op kernzinnen in die snapshot |
| AI-vindbaarheid | niet gedaan | Eerst 1–8 |

---

## Het verhaal op één lijn

### Rugby Werkt verkoopt vier producten op één adres

Wie “haka workshop” of “rugby clinic bedrijven” zoekt, krijgt bij concurrenten een URL. Bij jullie krijgt Google één homepage met herhaalde H2’s (onder meer drie keer “top rugby”). Gevolg: de site is een brochure, geen keuzemenu. Eén nette home mag blijven — als die naar vier echte dienstpagina’s wijst.

### Nature Sports is voor Google bijna onzichtbaar als pagina

Canva levert een schil. De eerste HTML heeft geen H1 en vier zichtbare woorden. Titel en meta beloven Maastricht-outdoor, de body in de fetch niet. Extra pagina’s in dat CMS zijn de tweede stap, niet de eerste. Local pack / GBP hoort hier wél (lokale zaak), anders dan bij Camperstaan.

---

## Keuzes (wij geven een voorkeur)

### Keuze 1 — Eerst Rugby Werkt-URL’s of eerst Nature Sports crawl-fix?

**Voorstel:** parallel, maar Nature Sports-landings blijven op slot tot de HTML crawlbaar is. Rugby Werkt mag wél dienst-URL’s in WordPress.  
**Waarom:** RW is technisch gewoon WP; NS is een render-muur.  
**Alternatief:** alleen RW deze 90 dagen.  
**Opnieuw bekijken als:** Canva binnen twee weken niet server-HTML kan leveren — dan CMS-wissel voor NS (eigenaren-gate).

### Keuze 2 — Scrum College eigen site houden?

**Voorstel:** één verkoop-URL op rugbywerkt.nl; `scrumcollege.nl` laat canonical of 301 naar die pagina, of wordt een dunne merkredirect.  
**Waarom:** twee domeinen, één workshop.  
**Alternatief:** ScrumCollege.nl als enige agile-URL, RW linkt alleen.  
**Opnieuw bekijken als:** Scrum een andere koper/merkclaim heeft dan clinics.

---

## Werklijst — eerste 90 dagen

Zie `werklijst.md` in deze run.

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | NS: H1 + canonical + robots + tekst in HTML | wij / jullie CMS | eerste fetch toont H1 + bodytekst |
| 2 | RW: H1 + meta description op home | wij | view-source toont beide |
| 3 | RW: vier dienst-URL’s + offerteformulier | wij | 4 URL’s in sitemap-pages |
| 4 | GSC beide domeinen, editor-toegang | jullie | property + uitnodiging |

### Maand twee / drie

- APG-slug 301, Nsecure-case als landings/case-template
- NS: GBP-audit (categorie, uren, foto’s) ná crawl-fix — geen live zonder eigenaren
- Dienstcopy RW (clinic, haka, scrum, TOP) zonder volumes te verzinnen

**Buiten scope:** MRC, Monkey Moves, paid, Canva-landings vóór deny-gate.

---

## Hoe we weten of het werkt

- **Nu bekend:** RW heeft 1 page-URL in de sitemap; NS HTML is vrijwel leeg
- **Nog niet bekend:** GSC-queries, GBP-inzichten, verse SERP
- **Over 30 dagen:** indexstatus NS-home; RW-dienst-URL’s in GSC
- **Over 90 dagen:** impressies op de vier RW-URL’s; NS alleen beoordelen als crawl-fix gedaan is

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | RW: 0 H1, geen meta description | HTML home 13 sep | gemeten |
| F-002 | RW sitemap pages = alleen home | `wp-sitemap-posts-page-1.xml` | gemeten |
| F-003 | RW posts: voorbeeld-artikel-2 (titel Clinic APG) + clinic-nsecure | post-sitemap + page titles | gemeten |
| F-004 | Geen tel:/mailto op RW | HTML-links home | gemeten |
| F-005 | NS: ~4 zichtbare woorden, 0 H1, 0 canonical, 0 interne links | HTML 13 sep | gemeten |
| F-006 | NS robots.txt 404; sitemap 1 URL | fetch 13 sep | gemeten |
| F-007 | Canva-export in HTML (`export_website`) | meta app-name | gemeten |
| F-008 | ScrumCollege.nl eigen titel/site | fetch www.scrumcollege.nl | gemeten |
| F-009 | Aug-SERP RW niet top-20 op clinic-termen | dossier 25–27 aug, citaat | afgeleid (niet herberekend) |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| Nature Sports nu zes landings in Canva | Deny-gate: HTML is niet crawlbaar |
| LocalBusiness op Rugby Werkt als winkel | Landelijke B2B-aanbieder, geen vestiging-shop |
| Tien blogs “rugby tips” | Lost ontbrekende dienst-URL’s niet op |
| Rankings of volumes noemen als feit | Geen GSC; aug-tabel is snapshot |
