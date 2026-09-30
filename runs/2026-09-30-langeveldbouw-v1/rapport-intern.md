# Rapport intern — Langeveld Bouw

Peildatum: 30 september 2026  
Run: 2026-09-30-langeveldbouw-v1

## Evidence-index

| ID | Bron | Extract |
| --- | --- | --- |
| E-01 | curl -sI https://www.langeveldbouw.nl/ | 200, Vercel, HSTS, last-modified 2026-09-29 |
| E-02 | curl -sI https://langeveldbouw.nl/ | 308 → www |
| E-03 | https://www.langeveldbouw.nl/robots.txt | Allow /; Sitemap /sitemap.xml |
| E-04 | https://www.langeveldbouw.nl/sitemap.xml | 2 URL’s, lastmod 2026-09-29 |
| E-05 | home.html (46 752 B) | title, 0× Alkmaar, 0 canonical, 0 JSON-LD, tel:+31636514700, KvK 83911847 |
| E-06 | POST /api/aanvraag | 503 `{"ok":false,"fout":"niet-ingesteld"}`; W3F_KEY='' |
| E-07 | /aanbouw /interieurbouw /dakkapel /privacy | 404 Vercel-plaintekst |
| E-08 | /contact | 308 /#contact |
| E-09 | openbare search 30 sep | oude titel “Bouwbedrijf Langeveld”; dienst+plaats zonder Langeveld |
| E-10 | Compadex KvK 83911847 | Van Houtenkade 27, 1814HM Alkmaar (afgeleid, 12 feb 2026) |

## Conflicten (mix)

| Conflict | Keuze | Regel |
| --- | --- | --- |
| Merksite zonder plaats vs lokale intentie | Plaats op home | feit > vorm |
| Formulier-UI vs 503 | Inbox laten werken | feit > vorm |
| Nieuwe site vs oude snippets | Canonical + titel, hercontrole | feit > wens “klaar” |
| Atelier vs bestaande site | Uitvoer | feit/vorm > wens Nieuw |
| Directory-adres vs privacy | Plaats nu; straat ná ja | restant Toets |

## Finding-detail

### F-001

- Laag: 7 / 4
- Observatie: 0× Alkmaar/straat/postcode in live HTML; N+P aanwezig (naam, tel)
- Bewijs: E-05
- Label: gemeten
- Gevolg zaak: lokale queries kunnen de zaak niet geografisch binden; naamcollision met andere Langeveld-bouwers
- Actie: plaats + werkgebied; straat ná bevestiging
- Eigenaar: wij
- Effort: S
- Prio: P0
- Meetpunt: “Alkmaar” in zichtbare home-copy + titel of description
- Afhankelijk van: beslissing 1 (straat)

### F-002

- Laag: 3 / 4
- Observatie: acht diensten in SVG/lijst; 0 dienst-URL’s (404)
- Bewijs: E-05, E-07
- Label: gemeten
- Gevolg zaak: intentie “aanbouw Alkmaar” heeft geen landings-URL
- Actie: drie dienstpagina’s + sitemap
- Eigenaar: wij
- Effort: M
- Prio: P0
- Meetpunt: 200 op drie URL’s + interne link + sitemap ≥ 5
- Afhankelijk van: beslissing 2

### F-003

- Laag: 3 (lead)
- Observatie: form backend niet ingesteld
- Bewijs: E-06
- Label: gemeten
- Gevolg zaak: leads via formulier verdwijnen of hangen op mailto
- Actie: Web3Forms-key of /api/aanvraag env
- Eigenaar: gedeeld
- Effort: S
- Prio: P0
- Meetpunt: test POST → ok + inbox
- Afhankelijk van: []

### F-004

- Laag: 1
- Observatie: live title ≠ indexed snippet title; geen canonical
- Bewijs: E-05, E-09
- Label: gemeten
- Gevolg zaak: merkszoekers zien vorige site
- Actie: canonical www + titles/og gelijk aan live
- Eigenaar: wij
- Effort: S
- Prio: P1
- Meetpunt: view-source canonical; 30-d merkssteekproef
- Afhankelijk van: []

### F-005

- Laag: 6
- Observatie: 0 LocalBusiness/JSON-LD
- Bewijs: E-05
- Label: gemeten
- Gevolg zaak: NAP in footer niet machine-leesbaar
- Actie: LocalBusiness ná F-001 (zelfde velden)
- Eigenaar: wij
- Effort: S
- Prio: P1
- Meetpunt: Rich Results Test
- Afhankelijk van: [F-001]

### F-006

- Laag: 1
- Observatie: default Vercel 404; /privacy 404
- Bewijs: E-07
- Label: gemeten
- Gevolg zaak: dode paden, geen privacy-URL
- Actie: branded 404 + /privacy
- Eigenaar: wij
- Effort: S
- Prio: P2
- Meetpunt: 404 HTML in huisstijl; /privacy 200
- Afhankelijk van: []

### F-007

- Laag: 7
- Observatie: geen GBP/Maps-URL in steekproef
- Bewijs: E-09
- Label: onbekend
- Gevolg zaak: mogelijk geen local pack; niet als feit “jullie hebben geen profiel”
- Actie: Chris checkt/maakt; geen reviewtheater
- Eigenaar: jullie
- Effort: S
- Prio: P1
- Meetpunt: URL of schriftelijk “bestaat niet”
- Afhankelijk van: [F-001]

### F-008

- Laag: 8
- Observatie: backlinks onbekend
- Bewijs: —
- Label: onbekend
- Gevolg zaak: geen autoriteitsclaim
- Actie: geen (geen baseline)
- Eigenaar: stop
- Effort: —
- Prio: P3
- Meetpunt: geen zonder export
- Afhankelijk van: []

### F-009

- Laag: 4
- Observatie: naamgenoten Spijkenisse + Middenbeemster
- Bewijs: E-09
- Label: gemeten
- Gevolg zaak: merkszoekers kunnen verkeerd bedrijf kiezen
- Actie: gedekt door F-001 (plaats)
- Eigenaar: wij
- Effort: S
- Prio: P0
- Meetpunt: zelfde als F-001
- Afhankelijk van: [F-001]

### F-010

- Laag: 7
- Observatie: Compadex-adres bij KvK 83911847
- Bewijs: E-10
- Label: afgeleid
- Gevolg zaak: bron voor beslissing 1, geen publicatieplicht
- Actie: niet publiceren zonder ja
- Eigenaar: jullie
- Effort: S
- Prio: P0
- Meetpunt: schriftelijk ja/nee straat
- Afhankelijk van: []

## Prio-telling

| Prio | Findings | Werklijst-rijen |
| --- | --- | --- |
| P0 | F-001, F-002, F-003, F-009, F-010 | 3 (#1–#3) |
| P1 | F-004, F-005, F-007 | 3 (#4–#6) |
| P2 | F-006 | 2 (#7–#8) |
| P3 | F-008 | 0 |

Top-3 (gemeten, niet onbekend): #1 plaats, #3 dienst-URL’s, #2 formulier.

## Naslag-kandidaten

- Nieuwe Vercel-statische merksite: sitemap 2 URL’s + interne `.html` die 308’en — checken of clean URLs in nav beter zijn dan `.html`-hrefs (werkt, lage prio).
- Formulier-503 als P0 bij “mooie” leadforms: herhaalpatroon t.o.v. andere runs? (count later, geen skill).
- Eenmanszaak-adres: standaard “plaats eerst, straat ná ja”.
