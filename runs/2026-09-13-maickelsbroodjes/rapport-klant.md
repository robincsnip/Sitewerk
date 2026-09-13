# Maickels Broodjes — wat er speelt online, en wat we eerst doen

**Peildatum:** 13 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

Maickels Broodjes heeft één nette Next-pagina: hero, sauzen, een schemasectie en contact. Apex wijst naar www, HTTPS/HSTS staat. Dat is een basis.

Google krijgt desondanks weinig om te matchen. De title tag is alleen de merknaam. De meta is een persoonlijke bio, geen “broodjes in Beek en Donk, hier staan we, zo boek je”. Er is geen canonical, geen robots.txt, geen sitemap. Schema-tijden laden in de browser (“Schema laden…”); een eerste fetch ziet geen rooster. Bellen kan niet via een `tel:`-link. Extra paden zoals `/locaties` of `/menu` bestaan niet.

Dit is een lokale zaak. Een Google-bedrijfsprofiel hoort erbij — we hebben het in deze run niet ingelogd nagemeten, dus we verzinnen geen reviews of posities.

**Eerste besluit dat we vragen:** eerst handelen en plaats in de HTML (NAP, bel, rooster), daarna pas extra URL’s.

### Drie dingen die het meeste opleveren

1. **Plaats + aanbod in titel, H1 en meta** — de bio mag op de pagina, niet als enige snippet — klaar als title/H1 “broodjes” én “Beek en Donk” (of de echte standplaats) noemen.
2. **Rooster, adres en belnummer in de HTML** — nu is het schema JS en ontbreekt `tel:` — klaar als view-source tijden/plek en een klikbaar nummer toont.
3. **GBP-check + GSC + robots/sitemap** — lokale zoekers komen via kaart en Google, niet via `/menu` — klaar als NAP op site en profiel gelijk lopen, GSC property bestaat, `/robots.txt` en `/sitemap.xml` 200 zijn.

### Wat al goed staat (niet kapotmaken)

- HTTPS, www-canonical host in de praktijk, HSTS
- Duidelijke H1 over verse broodjes
- OG-beeld aanwezig
- Eén merk, geen wirwar aan domeinen

---

## Wat we hebben bekeken

Openbare HTML van www. Geen GSC. Geen Maps-dashboard.

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & indexatie | bekeken | Geen robots/sitemap; geen canonical-tag |
| Pagina-opbouw & links | bekeken | Alleen home; overige paden 404 |
| Teksten & zoekintentie | bekeken | Bio in meta; aanbod in H1 |
| Snelheid op kernpagina’s | niet gemeten | Kleine HTML (~21 kB); schema via JS |
| Google-bedrijfsprofiel | relevant, niet ingezien | Geen sterren/cijfers |
| Reviews & reputatie | niet gemeten | Alleen social links gezien |
| Concurrenten in zoekresultaten | niet gemeten | — |
| AI-vindbaarheid | niet gedaan | Eerst lokale basis |

---

## Het verhaal op één lijn

### Een kar zonder plaats in de zoeksnippet

Beek en Donk staat in de meta als woonplaats van Maickel, niet als waar je een broodje haalt. De H1 is goed (“vaste plekken in de stad”) maar de title tag helpt Google niet. Gevolg: de pagina is te herkennen voor wie het merk al kent, te zwak voor wie “broodje Beek en Donk” typt.

### De praktische info hangt in JavaScript

“Schema laden…” betekent: de crawler en een deel van de previews zien geen rooster. Zonder bel-link en zonder tweede URL is de site een poster. Voor een lokale zaak is de poster het begin; de kaart en het nummer doen de rest.

---

## Keuzes (wij geven een voorkeur)

### Keuze 1 — Eén sterke home of meteen locatie-URL’s?

**Voorstel:** eerst home compleet (NAP, tel, rooster in HTML, titel). Locatie-URL’s alleen als er meerdere vaste plekken met eigen zoekvraag zijn.  
**Waarom:** 404 op `/locaties` is nu geen gemis als home de feiten draagt.  
**Alternatief:** meteen `/beek-en-donk` + catering-URL.  
**Opnieuw bekijken als:** er twee+ wekelijkse standplaatsen zijn met eigen namen.

### Keuze 2 — Atelier (nieuwe site) nu?

**Voorstel:** nee. Eerst vindbaarheid.  
**Waarom:** de vorm is al een productpagina; de gaten zijn inhoud en local.  
**Alternatief:** redesign als jullie merkwijziging willen (eigenaren-gate).  
**Opnieuw bekijken als:** de huidige stack het rooster niet server-side kan tonen.

---

## Werklijst — eerste 90 dagen

Zie `werklijst.md` in deze run.

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | Titel/meta/H1 met broodjes + plaats | wij | view-source |
| 2 | `tel:` + NAP + rooster in HTML | wij / jullie | view-source, geen “laden…” als enige |
| 3 | robots.txt + sitemap.xml + canonical | wij | 200 + 1 URL |
| 4 | GBP-NAP-check (geen live wijziging zonder ja) | gedeeld | schriftelijke diff site vs Maps |

### Maand twee / drie

- GSC queries 28 dagen
- Eventueel catering/boekings-URL als dat een echte dienst is
- Food-schema alleen met echte naam, adres, opening (geen sterren)

**Buiten scope:** ads, review-aankoop, extra vestigingen, blogreeks.

---

## Hoe we weten of het werkt

- **Nu bekend:** één indexeerbare home, zonder sitemap/robots
- **Nog niet bekend:** Maps-positie, GSC, of het rooster geïndexeerd wordt
- **Over 30 dagen:** GSC op home; tel-taps als analytics aan staat
- **Over 90 dagen:** impressies op merk + plaatsnamen (geen %-doel zonder baseline)

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | Geen robots.txt, geen sitemap | fetch 404 13 sep | gemeten |
| F-002 | Geen canonical-tag | HTML head | gemeten |
| F-003 | Title alleen merknaam; meta = bio | `<title>` + description | gemeten |
| F-004 | Extra paden 404 | `/menu` `/locaties` `/contact` | gemeten |
| F-005 | Schema-sectie “Schema laden…” | HTML/H2 + WebFetch-tekst | gemeten |
| F-006 | Geen `tel:` | HTML-links | gemeten |
| F-007 | Geen JSON-LD | HTML | gemeten |
| F-008 | GBP niet ingezien | deze run | onbekend (profielcijfers) |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| AggregateRating / sterren op de site | Geen dossier |
| Tien blogposts over broodjes | Lost NAP/tel/rooster niet op |
| Tweede vestiging in schema | Eén zaak in dit dossier |
| LocalBusiness weglaten “want Camperstaan ook niet” | Dit ís een lokale zaak; Camperstaan is een directory |
