# Rapport intern — Joost (Rugby Werkt + Nature Sports)

Run: 2026-09-14-rugby-werkt-v2 · Peildatum: 14 september 2026

## Findings

```text
id: F-001
laag: 1
observatie: Nature Sports home levert ~4 zichtbare woorden in server-HTML; geen H1, geen canonical; robots.txt 404; sitemap 1 URL.
bewijs: https://nature-sports.nl/ | robots.txt 404 | sitemap.xml (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Google ziet vrijwel lege pagina; lokale intent (bootcamp Maastricht) heeft geen tekstuele basis.
actie: Canva-export vervangen of SSR/HTML-laag met H1, bodycopy, canonical, robots.txt.
eigenaar: jullie
effort: M
prio: P0
meetpunt: view-source toont H1 + >200 woorden + canonical + robots 200
afhankelijk_van: []
```

```text
id: F-002
laag: 3
observatie: Rugby Werkt verkoopt vier diensten op één homepage via ankerlinks; pagina-overzicht bevat alleen home + 2 blogposts.
bewijs: rugbywerkt.nl nav #Activiteiten | wp-sitemap-posts-page-1.xml (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Geen URL per dienst voor Google; concurrenten met /rugby-clinic/ etc. winnen intentie.
actie: Vier dienstpagina's (clinic, haka, top rugby, scrum college) met unieke titel/H1; opnemen in sitemap.
eigenaar: wij
effort: M
prio: P0
meetpunt: sitemap bevat 4 dienst-URL's; elke pagina eigen H1
afhankelijk_van: []
```

```text
id: F-003
laag: 4
observatie: Rugby Werkt home: 0 H1, geen meta description, 29 H2's met duplicaten (top rugby, Rugby school).
bewijs: view-source rugbywerkt.nl (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Geen duidelijke paginatopic; koppenstructuur verwarrend voor lezer en crawler.
actie: Eén H1 op home; meta description; H2's dedupliceren per dienstblok.
eigenaar: wij
effort: S
prio: P1
meetpunt: view-source: 1 H1 + meta description aanwezig
afhankelijk_van: [F-002]
```

```text
id: F-004
laag: 4
observatie: Telefoon +31 6 15 89 06 44 en Info@rugbywerkt.nl in tekst; 0 tel:/mailto: links.
bewijs: rugbywerkt.nl HTML (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Mobiele bezoeker moet nummer kopiëren; minder offerte-aanvragen.
actie: tel: en mailto: op contactblok en header/footer.
eigenaar: wij
effort: S
prio: P1
meetpunt: view-source bevat tel: en mailto: naar rugbywerkt.nl-adres
afhankelijk_van: []
```

```text
id: F-005
laag: 4
observatie: 3 afbeeldingen op Rugby Werkt home, alle zonder alt-tekst.
bewijs: rugbywerkt.nl img tags (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Toegankelijkheid en beeldzoeken missen context.
actie: Alt per afbeelding (dienst/team/sfeer).
eigenaar: wij
effort: S
prio: P2
meetpunt: 0 img zonder alt op home
afhankelijk_van: []
```

```text
id: F-006
laag: 3
observatie: Rugby Werkt linkt naar http://www.scrumcollege.nl; apart domein verkoopt Scrum & Agile op het rugbyveld.
bewijs: rugbywerkt.nl button href | scrumcollege.nl title (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Twee verkooppaden voor één dienst; autoriteit splitst.
actie: Besluit één canonical pad: doorlinken, samenvoegen of scrum als subpagina op rugbywerkt.nl.
eigenaar: jullie
effort: M
prio: P1
meetpunt: één primaire URL voor Scrum-workshop in sitemap + interne links
afhankelijk_van: [F-002]
```

```text
id: F-007
laag: 4
observatie: APG-case staat op slug /2020/06/09/voorbeeld-artikel-2/ terwijl titel "Clinic APG" is.
bewijs: URL + title tag (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Case onprofessioneel in URL; minder vertrouwen bij B2B-lezer.
actie: Redirect naar /cases/apg/ of vergelijkbaar; slug opruimen.
eigenaar: jullie
effort: S
prio: P2
meetpunt: oude slug 301 naar leesbare case-URL
afhankelijk_van: []
```

```text
id: F-008
laag: 6
observatie: Geen JSON-LD op Rugby Werkt of Nature Sports.
bewijs: view-source beide domeinen (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Google mist gestructureerde organisatie/dienst-signalen.
actie: Organization + Service schema op dienstpagina's na F-002.
eigenaar: wij
effort: S
prio: P2
meetpunt: Rich Results Test toont Organization op home
afhankelijk_van: [F-002]
```

```text
id: F-009
laag: 4
observatie: Dossier aug 2026: Rugby Werkt niet top 20 op clinic/haka queries; Nature Sports ~7-8 op bootcamp maastricht.
bewijs: dossier 25-27 aug 2026 (citaat, geen hermeting 14 sep)
bewijs_label: afgeleid
gevolg_zaak: Intentie-gap bevestigt F-001/F-002; geen ranking-belofte.
actie: Steekproef herhalen na F-001/F-002; geen %-doel zonder GSC.
eigenaar: gedeeld
effort: M
prio: P2
meetpunt: hersteekproef na crawl-fix; geen harde KPI zonder baseline
afhankelijk_van: [F-001, F-002]
```

```text
id: F-010
laag: 8
observatie: Inkomende links / DR: onbekend (geen export).
bewijs: —
bewijs_label: onbekend
gevolg_zaak: Geen linkstrategie zonder data.
actie: Geen cijfers verzinnen; optioneel later na eigenaren-ja.
eigenaar: stop
effort: L
prio: P3
meetpunt: geen zonder baseline
afhankelijk_van: []
```

```text
id: F-011
laag: 9
observatie: AI-steekproef niet uitgevoerd deze run; geen vervanging van crawl-fix.
bewijs: —
bewijs_label: onbekend
gevolg_zaak: Geen AI-trafficbelofte.
actie: Geen apart AI-project; volg F-001/F-002.
eigenaar: stop
effort: S
prio: P3
meetpunt: —
afhankelijk_van: []
```

```text
id: F-012
laag: 1
observatie: Rugby Werkt geen HSTS-header; scrumcollege link gebruikt http.
bewijs: curl -I rugbywerkt.nl (14 sep 2026)
bewijs_label: gemeten
gevolg_zaak: Mixed-content risico op outbound links; geen direct ranking-issue.
actie: HSTS + https outbound links.
eigenaar: wij
effort: S
prio: P3
meetpunt: Strict-Transport-Security header aanwezig
afhankelijk_van: []
```

## Afgewezen scanner-tips (Bijlage B)

- FAQ schema zonder echte FAQ-secties
- LocalBusiness voor Rugby Werkt corporate (geen fysieke winkel op één adres)
- 2000 woorden bulk per dienst zonder unieke cases
- Disavow zonder linkdata
- GSC-grafieken zonder export (geen fictieve charts in dit rapport)
