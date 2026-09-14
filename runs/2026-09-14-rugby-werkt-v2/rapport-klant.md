# Joost — Rugby Werkt & Nature Sports

**Peildatum:** 14 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

:::lead
Joost runt twee merken: **Rugby Werkt** (landelijke B2B-clinics) en **Nature Sports** (outdoor in Maastricht). Beide sites staan live, maar Google ziet ze nog niet als volwaardige aanbodpagina's. Rugby Werkt heeft inhoud op één lange homepage; Nature Sports levert in de broncode vrijwel geen leesbare tekst.
:::

:::kpi
3|Prioriteiten|deze maand
7|Acties|90 dagen
2|Domeinen|in scope
4|Diensten|zonder eigen URL
:::

:::callout-decision
**Besluit dat we vragen:** akkoord op de drie prioriteiten hieronder — eerst Nature Sports crawlbaar, dan vier Rugby-dienstpagina's, dan basis op de homepage. Daarna Toets, dan pas bouwen op een preview.
:::

### Drie prioriteiten

:::prio-cards
1|Nature Sports leesbaar voor Google|Klaar als: de homepage in de broncode een kop (H1), een korte intro, een vaste hoofdadres voor Google (canonical) en een robots-bestand heeft — niet vier losse woorden.
2|Vier Rugby-diensten elk een eigen pagina|Klaar als: rugbyclinic, haka workshop, TOP rugby en Scrum College elk een eigen adres in het pagina-overzicht voor Google staan, met eigen titel en kop.
3|Homepage Rugby Werkt op orde|Klaar als: één duidelijke hoofdkop, een korte samenvatting voor Google, klikbaar telefoonnummer en e-mail, en geen dubbele tussenkoppen voor dezelfde dienst.
:::

### Wat al goed staat (niet kapotmaken)

:::good-grid
Rugby Werkt home is bereikbaar en laadt stabiel
Pagina-overzicht voor Google bestaat (WordPress)
Twee cases staan als blogposts (APG, Nsecure)
Social links naar Instagram en Facebook
Canonical op Rugby Werkt home is correct
Nature Sports heeft meta description en Cloudflare
Sitemap Nature Sports meldt ten minste de homepage
:::

---

## Wat we hebben bekeken

:::section-intro
Openbare HTML van beide domeinen, technische koppen, robots-bestanden, pagina-overzichten, navigatie, contactgegevens en blogposts. Geen Search Console-export. Geen betaalde linkdata. Zoekposities uit augustus zijn dossier-citaat, geen nieuwe meting op 14 september.
:::

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & vindbaarheid | bekeken | Nature Sports ~4 woorden HTML; Rugby sitemap = home + 2 posts |
| Pagina-opbouw & links | bekeken | Rugby: ankerlinks only; ScrumCollege apart domein |
| Teksten & zoekintentie | bekeken | Vier diensten zonder eigen URL; aug-dossier: clinic/haka gap |
| Snelheid | deels | Geen Lighthouse; Rugby TTFB ~1,4 s lab |
| Google-bedrijfsprofiel | deels | Nature Sports lokaal relevant; geen wijzigingen deze run |
| Reviews & reputatie | n.v.t. | Geen sterren verzinnen |
| Concurrenten in zoekresultaten | dossier aug | Bus Sports, hakaworkshop.nl; geen hermeting sep |
| AI-vindbaarheid | niet | Geen steekproef; geen AI-belofte |

---

## Bevindingen

:::finding p0
@kpi
4|Woorden|Nature Sports HTML
0|H1|beide sites
404|robots.txt|Nature Sports
@end
### 1. Nature Sports is voor Google vrijwel leeg

Wie de broncode van nature-sports.nl opent, ziet ongeveer **vier woorden**. Er is geen hoofdkop (H1), geen vaste hoofdadres voor Google (canonical), en het robots-bestand geeft een foutmelding (404). De meta description belooft bootcamp en personal training in Maastricht — maar die tekst staat niet in de pagina zelf.

**Gevolg:** alles wat je later bouwt op deze site (landings, diensten) is weggegooid werk zolang Google geen echte inhoud ziet. Jullie kader noemt dit de deny-gate: geen nieuwe landings tot dit fixed is.

**Voorstel:** vervang of vul de Canva-export aan met server-HTML: H1, intro, diensten in tekst, canonical, werkend robots.txt.
:::

:::finding p0
@kpi
1|Pagina|in Rugby-sitemap (diensten)
4|Diensten|alleen ankerlinks
2|Cases|als blogposts
@end
### 2. Rugby Werkt verkoopt vier diensten zonder eigen pagina

Op rugbywerkt.nl staan rugbyclinic, haka workshop, TOP rugby en Scrum College als blokken op één homepage. Het menu linkt alleen naar ankers (`#Activiteiten`). Het pagina-overzicht voor Google bevat **alleen de homepage** — plus twee blogposts. Concurrenten hebben wél aparte pagina's per dienst.

**Gevolg:** bij "rugby clinic bedrijfsuitje" of "haka workshop bedrijven" (dossier augustus: Rugby Werkt niet in top 20) heeft Google geen sterke URL om te tonen.

**Voorstel:** vier dienstpagina's met eigen titel, kop en offerte-knop; opnemen in het pagina-overzicht.
:::

:::finding p1
### 3. De homepage mist een hoofdkop en een korte samenvatting voor Google

Rugby Werkt heeft **geen H1** en **geen meta description**. Er staan 29 tussenkoppen (H2), waaronder "top rugby" en "Rugby school" meerdere keren. Dat maakt de pagina onduidelijk — voor bezoeker én voor Google.

**Gevolg:** geen heldere paginatopic; moeilijker om te ranken op merk+dienst.

**Voorstel:** één H1 ("Rugby clinics & teambuilding"), meta description in plain Dutch, H2's per dienst zonder duplicaten.
:::

:::finding p1
### 4. Contact staat in tekst maar is niet klikbaar

Telefoon (+31 6 15 89 06 44) en Info@rugbywerkt.nl staan op de pagina, maar niet als klikbare links. Op mobiel moet je kopiëren in plaats van bellen of mailen.

**Voorstel:** `tel:` en `mailto:` op het contactblok en in de footer.
:::

:::finding p1
### 5. Scrum College splitst over twee websites

Rugby Werkt linkt naar http://www.scrumcollege.nl. Dat domein verkoopt dezelfde Scrum-workshop apart. Google en bezoekers zien twee verkooppaden voor één dienst.

**Voorstel:** kies één primair pad — subpagina op rugbywerkt.nl, doorlink met duidelijke rol, of samenvoegen. Niet beide laten concurreren.
:::

:::finding p2
### 6. Cases en afbeeldingen missen polish

De APG-case staat nog op de URL `/voorbeeld-artikel-2/` terwijl de titel "Clinic APG" is. Drie afbeeldingen op de homepage hebben geen alt-tekst. Er staan geen extra gegevens in de pagina die Google helpen (gestructureerde data).

**Voorstel:** case-URL netjes maken (redirect), alt-teksten invullen, Organization-schema na dienstpagina's.
:::

:::finding p2
### 7. Augustus-dossier bevestigt de gap — geen nieuwe ranking-belofte

In het dossier (25–27 augustus, handmatige steekproef): Nature Sports rond positie 7–8 op "bootcamp maastricht"; Rugby Werkt niet in top 20 op clinic/haka-queries. **Geen volumes, geen Search Console.** We herhalen dit pas na de crawl-fix.

**Gevolg:** bevestigt waarom F-001 en F-002 eerst; geen procentbelofte zonder baseline.
:::

---

## Beslissingen die we van jullie nodig hebben

:::decisions
### Beslissing 1 — Nature Sports: Canva vervangen of HTML-laag toevoegen?

**Voorstel:** nieuwe HTML-laag of platform met echte server-HTML vóór extra landings.  
**Alternatief:** Canva behouden maar statische HTML-export met volledige tekst deployen.  
**Opnieuw bekijken als:** jullie binnen 30 dagen een ander platform kiezen.

### Beslissing 2 — Scrum College: één site of twee?

**Voorstel:** Scrum College als dienstpagina op rugbywerkt.nl; scrumcollege.nl doorlinken of parkeren.  
**Alternatief:** scrumcollege.nl primair houden; Rugby Werkt alleen teaser + link.  
**Opnieuw bekijken als:** Scrum los van Rugby Werkt verkocht wordt.

### Beslissing 3 — Vier dienst-URL's: welke slug-structuur?

**Voorstel:** `/rugby-clinic/`, `/haka-workshop/`, `/top-rugby/`, `/scrum-college/` (of gelijkwaardig).  
**Alternatief:** onder `/diensten/` met korte slugs.  
**Opnieuw bekijken als:** jullie bestaande offline folders andere namen gebruiken.
:::

---

## Keuze — bestaande site of nieuw

**Voorstel:** Uitvoer op beide bestaande domeinen.  
**Waarom:** merk en cases bestaan; geen redesign-gate. Nature Sports needs crawl-fix, geen greenfield.  
**Alternatief:** Nature Sports later op nieuw platform — alleen na deny-gate opgelost.

---

## Werklijst — eerste 90 dagen

:::section-intro
Zie `werklijst.md` in deze run. Zelfde lijst, geen tweede waarheid.
:::

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | Nature Sports crawlbaar maken | jullie | H1 + canonical + robots + body in HTML |
| 2 | Vier Rugby Werkt dienst-URL's | wij | 4 URLs in pagina-overzicht |
| 3 | H1 + meta + koppen home Rugby | wij | 1 H1 + meta description |
| 4 | Klikbaar contact Rugby Werkt | wij | tel: + mailto: live |

### Maand twee / drie

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 5 | Scrum College één verkooppad | jullie | besluit + één primaire URL |
| 6 | Alt-teksten + Organization schema | wij | 0 lege alt; schema test |
| 7 | APG-case slug opruimen | jullie | 301 naar /cases/apg/ |

**Buiten scope deze ronde:** GBP-wijzigingen, live deploy, paid, mail, linkdisavow, GSC-grafieken zonder export.

---

## Hoe we weten of het werkt

:::measure
Nu bekend|Baseline|HTML-fetch beide domeinen, sitemaps, aug-dossier posities (citaat)
Nog niet bekend|Open|Search Console, inkomende links, offerte-conversie
30 dagen|Hercontrole|view-source Nature Sports; sitemap Rugby 4 diensten
90 dagen|Nameting|hersteekproef clinic/haka/bootcamp; nameting-run
:::

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | Nature Sports 4 woorden HTML | nature-sports.nl view-source | gemeten |
| F-002 | Sitemap Rugby alleen home | wp-sitemap-posts-page-1.xml | gemeten |
| F-003 | 0 H1, geen meta | rugbywerkt.nl view-source | gemeten |
| F-004 | Geen tel/mailto | rugbywerkt.nl HTML | gemeten |
| F-005 | 3 img zonder alt | rugbywerkt.nl | gemeten |
| F-006 | scrumcollege.nl split | link + scrumcollege.nl | gemeten |
| F-007 | slug voorbeeld-artikel-2 | APG post URL | gemeten |
| F-008 | Geen JSON-LD | beide domeinen | gemeten |
| F-009 | Aug posities clinic/haka | dossier 25-27 aug | afgeleid |
| F-010 | Links onbekend | — | onbekend |
| F-011 | AI niet gemeten | — | onbekend |
| F-012 | Geen HSTS Rugby | curl -I | gemeten |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| FAQ schema zonder FAQ-secties | Geen echte FAQ-content |
| LocalBusiness Rugby Werkt corporate | Geen fysieke winkel op één adres |
| 2000 woorden bulk per dienst | Geen unieke cases per pagina |
| Disavow zonder linkdata | Geen export deze run |
| GSC-grafieken zonder export | Geen cijfers verzinnen |
