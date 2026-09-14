# Maickels Broodjes — wat er speelt online, en wat we eerst doen

**Peildatum:** 14 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

:::lead
Maickels Broodjes heeft één nette pagina: hero, sauzen, een schemasectie en een boekingsformulier. Apex wijst naar www, de verbinding is in orde. Wat ontbreekt, is wat een zoeker nodig heeft om te handelen: waar de truck **deze week** staat, hoe je belt, en welke broodjes er zijn. Die feiten staan nu op een plaatje, in directories, of helemaal niet op de eigen site.
:::

:::kpi
3|Prioriteiten|deze maand
7|Acties|90 dagen
1|Pagina|in Google-overzicht
2|Urgent|eerst doen
:::

:::callout-decision
**Besluit dat we vragen:** akkoord op de drie prioriteiten hieronder — eerst het weekschema als tekst, dan titel en regio, dan bellen/mailen vanaf de site. Daarna een onafhankelijke check, dan pas bouwen op een preview.
:::

### Drie prioriteiten

:::prio-cards
1|Weekschema leesbaar zonder plaatje|Klaar als: de broncode de actuele standplaatsen en tijden als tekst bevat — zie bevinding 1
2|Zoeksnippet met broodjes en streek|Klaar als: titelbalk en hoofdkop de streek noemen — zie bevinding 2
3|Bellen en mailen vanaf de homepage|Klaar als: nummer en mail aanklikbaar zijn — zie bevinding 3
:::

### Wat al goed staat (niet kapotmaken)

:::good-grid
Bezoekers komen automatisch op www terecht
De verbinding is beveiligd (HTTPS)
Eén merk, één domein — geen wirwar
H1 zegt al “verse broodjes op vaste plekken”
Sauzen hebben naam, foto en korte tekst
Boekingsformulier (naam, mail, tel, bericht) staat klaar
Links naar Instagram, Facebook en TikTok
Deelbeeld voor socials aanwezig
:::

---

## Wat we hebben bekeken

:::section-intro
Openbare HTML van www.maickelsbroodjes.nl, technische koppen, ontbrekende overzichtsbestanden, extra paden, het weekschema-beeld ná laden, directories en een zoeksteekproef. Geen Search Console. Geen inlog in Google Maps. Geen verzonnen grafieken.
:::

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & vindbaarheid | bekeken | Geen pagina-overzicht, geen vast hoofdadres; extra paden bestaan niet |
| Pagina-opbouw & links | bekeken | Alleen de homepage; menu is ankers |
| Teksten & zoekintentie | bekeken | Bio in de samenvatting; aanbod in de H1; rooster niet als tekst |
| Snelheid | deels | Geen Lighthouse; het weekschema-beeld is zwaar |
| Google-bedrijfsprofiel | relevant, niet ingezien | Geen sterren of posities |
| Reviews & reputatie | niet gemeten | Alleen social-links op de eigen site |
| Concurrenten in zoekresultaten | steekproef | Broodjes enzo, boekingsdirectories, regiogids |
| AI-vindbaarheid | niet | Eerst lokale basis |

---

## Markt & concurrenten

:::section-intro
Wie concurreert op dezelfde zoekintentie — steekproef 14 september. Elke gap staat op de werklijst of heeft een reden waarom niet.
:::

| Speler | Rol | Gap t.o.v. jullie | Label | Actie |
| --- | --- | --- | --- | --- |
| Broodjes enzo | Vaste lunchzaak Beek en Donk | Plaats, telefoon en mail in de HTML; wint “broodjes Beek en Donk” in deze steekproef | gemeten | #2 — titel en regio |
| Foodtruckbooking | Boekingsdirectory | Menu, prijsindicatie en boekingsformulier voor events | gemeten | #5 + #6 — menu en boekingen |
| FestiFood Group | Event-boekingspartner | Catering-copy en een boektelefoon op hun domein | gemeten | #6 — eigen boekpad |
| Land van de Peel | Regiogids | Adres, belnummer en mail die de eigen site niet toont | gemeten | #3 — bel en mail |
| het-menu.nl / Bottin | Aggregators | Openingstijden (niet gecontroleerd tegen jullie rooster) | gemeten | Geen actie: aggregators niet bijhouden; eerst #1–#3 |
| Wendy's Broodjes / Loaded Flats | Andere foodtrucks in de regio | Ander aanbod; zelfde soort zoeker | afgeleid | Geen actie: buiten de eerste 90 dagen |
| Maickels Broodjes | Jullie site | — | gemeten | Geen actie: HTTPS, www, sauzen en socials behouden |

---

## Zoektermen die ertoe doen

:::section-intro
Openbare zoeksteekproef 14 september (zelfde dag als de technische metingen). Geen Search Console — dus geen klikken of exacte posities.
:::

| Zoekopdracht | Wat de zoeker wil | Zichtbaar voor jullie? | Label |
| --- | --- | --- | --- |
| Maickels Broodjes | Merk vinden | Ja — eigen site in de getoonde hits, naast directories | gemeten |
| broodjes Beek en Donk | Lunch in de buurt | Nee — Broodjes enzo en directories; eigen home niet als winnaar in deze steekproef | gemeten |
| Maickels Broodjes foodtruck boeken | Truck huren / event | Deels — boekingsdirectories; eigen site niet het sterke boekingspad | gemeten |
| site:maickelsbroodjes.nl | Wat Google van het domein toont | Alleen de homepage in de getoonde hits | gemeten |
| broodje Gate 54 / foodtruck Eindhoven | Standplaats deze week | Niet nagekeken deze run | onbekend |

---

## Bevindingen

:::finding p0
@kpi
Schema laden…|in de broncode
8–12 sep|op het weekbeeld
1,6 MB|alleen het roosterplaatje
@end
### 1. Het weekschema is een plaatje — en het is vorige week

Wie de broncode opent, ziet bij het rooster alleen “Schema laden…”. Daarna haalt de pagina een JPEG op (zoals op socials). Op 14 september toonde dat beeld nog de dagen **8 tot 12 september**.

**Gevolg:** Google en een deel van de previews lezen geen plekken of tijden. Een zoeker die “waar staat Maickel vandaag?” wil weten, krijgt op de eigen site geen tekstueel antwoord. Zie markttabel: dat is precies de intentie die een lunchzoeker heeft.

**Voorstel:** de week (dag, plek, adres, tijd) als gewone tekst in de pagina. Het plaatje mag eronder blijven. Jullie leveren de actuele week; wij zetten de HTML. Zie werklijst #1.
:::

:::finding p0
### 2. Titel en samenvatting vertellen wie Maickel is — niet waar je een broodje haalt

De titelbalk is alleen de merknaam. De korte tekst voor Google is een persoonlijke bio (woonachtig in Beek en Donk, horeca als passie). De hoofdkop is wél goed (“verse broodjes op vaste plekken in de stad”) maar noemt geen plaats of regio.

**Gevolg:** wie het merk al kent, herkent de pagina. Wie “broodjes Beek en Donk” typt, landt in onze steekproef eerder bij Broodjes enzo. Zie zoektermen-tabel.

**Voorstel:** titel, korte samenvatting en hoofdkop noemen broodjes én een plaats of regio. De bio mag op de pagina blijven, niet als enige tekst in de zoeksnippet. Zie werklijst #2.
:::

:::finding p1
### 3. Bellen en mailen kan niet vanaf de eigen site

Op de homepage staat een formulier, geen klikbaar nummer en geen zichtbaar mailadres. Regiogids Land van de Peel toont wél een 06-nummer en `info@mbfoodpassion.nl`. Die gegevens zijn **niet** bevestigd als jullie officiële zaakadres: het weekbeeld noemt andere standplaatsen dan Auwerstraat.

**Gevolg:** op mobiel moet je het nummer ergens anders vandaan halen. Directories vertellen meer dan de eigen site.

**Voorstel:** na jullie bevestiging (beslissing 1) een klikbaar nummer en een zichtbaar mailadres op de pagina. Geen wijziging in Google Maps in deze ronde. Zie werklijst #3.
:::

:::finding p1
### 4. Google krijgt geen overzicht van jullie pagina’s

Er is geen bestand met pagina-adressen voor Google, en de homepage zegt niet welk adres de echte is. Paden als `/menu` of `/locaties` bestaan niet (foutpagina). Dat is geen ramp zolang de home de feiten draagt — wél een gap t.o.v. Broodjes enzo, die wél een overzicht heeft.

**Voorstel:** een klein overzicht (nu: één homepage) en één vast hoofdadres op de home. Geen neppagina’s aanmaken om het overzicht voller te maken. Zie werklijst #4.
:::

:::finding p1
### 5. Het aanbod staat bij anderen, niet bij jullie

Op de eigen site staan drie sauzen. Op Foodtruckbooking en een festivalpagina staan broodjesnamen (onder meer Pulled Pork, Smokey Chicken, Chicken Truffle). Die lijsten kunnen verouderd zijn — we nemen ze niet over zonder jullie check.

**Gevolg:** wie wil weten wat erin zit, moet een directory geloven. De eigen site verkoopt sauzen, niet het broodje.

**Voorstel:** kernbroodjes met naam (en korte regel) in de HTML op de homepage. Zie werklijst #5.
:::

:::finding p1
### 6. Wie de truck wil boeken, landt bij een directory

Op “Maickels Broodjes foodtruck boeken” tonen de hits Foodtruckbooking en FestiFood. Jullie hebben een formulier zonder uitleg (geen prijsindicatie, geen regio, geen “zo werken boekingen”).

**Gevolg:** de boekingsintentie hoort bij jullie merk, maar het verhaal staat op andermans domein.

**Voorstel:** een eigen blok of pagina met hoe je boekt. Partnerlinks mogen blijven. Zie werklijst #6.
:::

:::finding p2
### 7. Extra gegevens voor Google ontbreken — ná het adres-besluit

In de pagina staan geen extra gegevens die Google helpen (naam, adres, telefoon als machineleesbare velden). Hero-foto’s heten in de code “Slide 0” tot “Slide 2”.

**Voorstel:** die extra gegevens pas zetten als beslissing 1 (welk adres) rond is. Geen sterren in die gegevens. Zie werklijst #7.
:::

---

## Beslissingen die we van jullie nodig hebben

:::decisions
### Beslissing 1 — Welk adres is de zaak?

**Voorstel:** niet blind Auwerstraat 4a van directories overnemen. Bevestig: thuis/base, serveerplek, of “geen vast adres, alleen het weekschema”.  
**Alternatief:** Auwerstraat wél als bezoekadres als dat klopt met hoe jullie Maps willen.  
**Opnieuw bekijken als:** het weekschema een vaste kernplek in Beek en Donk krijgt.

### Beslissing 2 — Extra URL’s voor standplaatsen of één sterke home?

**Voorstel:** eerst home compleet (#1–#5). Geen `/eindhoven` of `/locaties` tot het rooster als tekst staat.  
**Alternatief:** meteen stadspagina’s als jullie wekelijks dezelfde steden doen.  
**Opnieuw bekijken als:** twee of meer standplaatsen een eigen zoekvraag houden (bijv. elke week Gate 54).

### Beslissing 3 — Boeken via FestiFood, zelf, of allebei?

**Voorstel:** eigen tekst + formulier op jullie site; FestiFood als partnernoot als die afspraak loopt.  
**Alternatief:** FestiFood als enig boekingspad — dan op de eigen site duidelijk doorlinken, niet zwijgen.  
**Opnieuw bekijken als:** jullie de partnerovereenkomst wijzigen.
:::

---

## Keuze — bestaande site of nieuw

**Voorstel:** Uitvoer op de bestaande site.  
**Waarom:** de pagina is al een productpagina; de gaten zijn tekst en lokale feiten, geen nieuwe huisstijl.  
**Alternatief:** later een nieuw platform — alleen als het weekschema niet als tekst in deze stack kan.

---

## Werklijst — eerste 90 dagen

:::section-intro
Zie `werklijst.md` in deze run. Zelfde lijst, geen tweede waarheid.
:::

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | Weekschema als tekst in de HTML | gedeeld | view-source toont deze week plekken en tijden als tekst, niet alleen "Schema laden…" |
| 2 | Titel, meta en H1 met broodjes + regio | wij | title en H1 noemen broodjes én een plaats of regio |
| 3 | Klikbaar telefoonnummer en zichtbaar mailadres | wij | tel: en mailto: in de broncode |
| 4 | Pagina-overzicht en hoofdadres voor Google | wij | overzicht van pagina-adressen geeft 200; homepage heeft één vast hoofdadres |

### Maand twee / drie

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 5 | Menu en aanbod in tekst op de homepage | wij | kernbroodjes met naam in de HTML |
| 6 | Boekingen op de eigen site | wij | eigen blok of pagina met hoe je de truck boekt |
| 7 | Extra gegevens voor Google (naam, adres, telefoon) | wij | naam, adres en telefoon staan in de extra gegevens die Google leest |

**Buiten scope deze ronde:** live zetten, Google-bedrijfsprofiel wijzigen, ads, mail naar gasten, %-belofte, grafieken zonder Search Console.

---

## Hoe we weten of het werkt

:::measure
Nu bekend|Baseline|HTML-fetch home, ontbrekende overzichtsbestanden, weekschema-JPEG 8–12 sep, zoeksteekproef 14 sep
Nog niet bekend|Open|Search Console, Maps-positie, of het nieuwe rooster geïndexeerd wordt
30 dagen|Hercontrole|view-source: week als tekst; title/H1 met regio; tel: aanwezig
90 dagen|Nameting|hersteekproef “broodjes Beek en Donk” + merkquery; nameting-run
:::

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | Schema laden…; JPEG 8–12 sep; 1,6 MB | home HTML + /api/weekschema-version + blob JPEG 14 sep | gemeten |
| F-002 | Title alleen merk; meta = bio; H1 zonder plaats | view-source www 14 sep | gemeten |
| F-003 | Geen tel:/mailto:; directories wel nummer/mail | home HTML; Land van de Peel | gemeten |
| F-004 | geen pagina-overzicht, geen vast hoofdadres; extra paden 404 | curl 14 sep | gemeten |
| F-005 | Eigen site alleen sauzen; derden hebben broodjesnamen | home HTML; Foodtruckbooking; Intents | gemeten |
| F-006 | Boek-zoek toont directories | zoeksteekproef 14 sep | gemeten |
| F-007 | geen extra gegevens voor Google; hero-alt Slide 0–2 | view-source | gemeten |
| F-008 | Broodjes enzo wint lokale lunchquery in steekproef | zoeksteekproef “broodjes Beek en Donk” | gemeten |
| F-009 | Google-bedrijfsprofiel niet ingezien | deze run | onbekend |
| F-010 | Inkomende links niet geëxporteerd | — | onbekend |
| F-011 | AI-overzichten niet bemonsterd | — | onbekend |
| F-012 | HTML ~21 kB; CDN-HIT age ~23 dagen | curl headers | gemeten |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| Sterren / beoordelingen op de site | Geen dossier; geen Maps-login |
| Tien blogposts over broodjes | Lost rooster, titel en contact niet op |
| Google-bedrijfsprofiel “claim en posts” als eerste actie | Theater zonder hermeten Maps; eerst eigen HTML |
| Lege `/locaties` en `/menu` aanmaken | 404 is geen gemis tot home de feiten draagt |
| LocalBusiness weglaten “want directory-sites doen dat niet” | Dit ís een lokale zaak |
| GSC-grafieken | Geen export van Robin deze ronde |
