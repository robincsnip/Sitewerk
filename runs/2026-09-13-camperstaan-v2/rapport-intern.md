# Rapport intern — Camperstaan

Run: 2026-09-13-camperstaan-v2 · Peildatum: 13 september 2026

## Findings

```text
id: F-001
laag: 1
observatie: Homepage telt 306 plekken; /plaatsen toont 293 unieke NL-listings; sitemap heeft 306 /plaatsen/ waarvan 13 BE/DE live maar niet in NL-index.
bewijs: https://www.camperstaan.nl/ | https://www.camperstaan.nl/plaatsen | sitemap.xml (577 URL's)
bewijs_label: gemeten
gevolg_zaak: Gast en crawler zien verschillende catalogusgroottes; BE/DE indexeerbaar onder NL-positionering.
actie: Eén NL-telling; BE/DE uit NL-sitemap of achter land-hub.
eigenaar: jullie
effort: M
prio: P0
meetpunt: home, /plaatsen en sitemap-NL tonen hetzelfde aantal NL-plekken
afhankelijk_van: []
```

```text
id: F-002
laag: 3
observatie: Filter /plaatsen?regio=Drenthe heeft titel "Camperplaatsen in Drenthe" maar canonical blijft /plaatsen; echte hub is /provincie/drenthe.
bewijs: https://www.camperstaan.nl/plaatsen?country=NL&regio=Drenthe
bewijs_label: gemeten
gevolg_zaak: Provincie-intentie kan op verkeerde URL landen; hub /provincie/drenthe krijgt geen signaal.
actie: 301 of canonical naar /provincie/{slug}; filter alleen op hub of paginering.
eigenaar: wij
effort: S
prio: P1
meetpunt: regio-filter leidt naar provincie-URL
afhankelijk_van: []
```

```text
id: F-003
laag: 4
observatie: Listing Kampen ~132 woorden in main; claimformulier + € 99 dominant; zoeksteekproef "camperplaats Kampen" toont gemeente/Visit/Campercontact, geen Camperstaan-listing.
bewijs: /plaatsen/kampen-burgemeester-berghuisplein | zoeksteekproef 13 sep 2026
bewijs_label: gemeten
gevolg_zaak: Plek-URL concurreert niet met bron; pagina dient eigenaar vóór reiziger.
actie: Gastblok bovenaan (prijs, max nachten, voorzieningen, bron); claim onderaan; optioneel unieke copy per plek.
eigenaar: gedeeld
effort: M
prio: P0
meetpunt: listing-template: gastcontent boven claim; steekproef Kampen herhalen na wijziging
afhankelijk_van: []
```

```text
id: F-004
laag: 5
observatie: Alle HTML `private, no-store`; /plaatsen 1,41 MB en ~0,48 s download in lab.
bewijs: curl headers home + /plaatsen | size 1411613 bytes
bewijs_label: gemeten
gevolg_zaak: CDN cachet niet; zware zoekindex kost elke bezoeker data.
actie: public cache voor anonieme plek/hub HTML; /plaatsen pagineren of lazy cards.
eigenaar: wij
effort: M
prio: P1
meetpunt: cache-control public op listing; /plaatsen < 500 kB of gepagineerd
afhankelijk_van: []
```

```text
id: F-005
laag: 6
observatie: Listing JSON-LD Campground zonder geo, priceRange, amenityFeature; lat/lon en prijs staan wel in HTML/OSM.
bewijs: /plaatsen/kampen-burgemeester-berghuisplein HTML
bewijs_label: gemeten
gevolg_zaak: Structured data benut bestaande velden niet.
actie: geo + priceRange + amenityFeature uit databasevelden.
eigenaar: wij
effort: S
prio: P2
meetpunt: Rich Results Test toont geo en priceRange
afhankelijk_van: [F-003]
```

```text
id: F-006
laag: 4
observatie: "camperplaatsen in Drenthe" steekproef: campings/Campercontact; geen /provincie/drenthe.
bewijs: zoeksteekproef 13 sep 2026
bewijs_label: afgeleid
gevolg_zaak: Hub bestaat maar wint intentie niet.
actie: Interne links + copy op hub; sluit aan F-002.
eigenaar: gedeeld
effort: M
prio: P1
meetpunt: steekproef herhalen; provincie-URL in top 20 of duidelijke reden waarom niet
afhankelijk_van: [F-002]
```

```text
id: F-007
laag: 8
observatie: Inkomende links / DR: onbekend (geen export).
bewijs: —
bewijs_label: onbekend
gevolg_zaak: Geen linkstrategie zonder data.
actie: Geen cijfers verzinnen; optioneel later Ahrefs/Majestic na eigenaren-ja.
eigenaar: stop
effort: L
prio: P3
meetpunt: geen zonder baseline
afhankelijk_van: []
```

```text
id: F-008
laag: 9
observatie: AI-steekproef categorie: Campercontact/NKC genoemd; Camperstaan alleen bij merkquery.
bewijs: zoeksteekproef merk + categorie 13 sep 2026
bewijs_label: afgeleid
gevolg_zaak: Geen AI-trafficbelofte; wel content/autoriteit gap t.o.v. etablissement.
actie: Geen apart AI-project; volg F-003/F-006.
eigenaar: stop
effort: S
prio: P3
meetpunt: geen zonder baseline
afhankelijk_van: [F-003]
```

## Afgewezen scanner-tips (Bijlage B bron)

| Tip | Waarom niet |
| --- | --- |
| "Voeg FAQ schema toe op elke listing" | Geen echte FAQ-content; thin markup. |
| "Maak LocalBusiness voor Camperstaan" | Directory, geen fysieke zaak; kader zegt n.v.t. |
| "Schrijf 2000 woorden per provincie" | Hub heeft al ItemList; kwaliteit > bulk zonder unieke info. |
| "Disavow bad links" | Geen linkdata in deze run. |
