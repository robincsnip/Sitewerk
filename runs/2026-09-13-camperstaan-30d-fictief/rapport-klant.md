# Camperstaan — hercontrole na 30 dagen (fictief voorbeeld)

**Peildatum:** 13 oktober 2026  
**Status:** **FICTIEF / VOORBEELD** — geen echte meting, geen live resultaten  
**Opgesteld door:** Sitewerk

---

:::callout-fictief
**FICTIEF / VOORBEELD** — Dit rapport laat zien hoe een 30-dagen hercontrole eruit kan zien **als** de acties uit de audit zijn uitgevoerd. Alle cijfers hieronder zijn verzonnen ter illustratie. Gebruik dit niet als bewijs of rapportage aan de klant.
:::

## In het kort

:::lead
Na één maand zou je vooral willen zien of de telling klopt, de plekpagina lichter is voor de reiziger, en of techniek (cache, gewicht) beweegt. Dit voorbeeld volgt het meetplan uit de audit — niet de werkelijkheid.
:::

:::kpi
293|NL-telling|fictief
890|kB /plaatsen|fictief
8|Kampen SERP|fictief positie
:::

---

## Wat het meetplan na 30 dagen vroeg

Uit audit `2026-09-13-camperstaan-v2`:

:::measure
30 dagen|Hercontrole|steekproef Kampen; gewicht zoekpagina; cache op plekpagina's
:::

---

## Fictieve stand t.o.v. baseline

| Meetpunt | Baseline (13 sep) | Fictief 30d (13 okt) | Label |
| --- | --- | --- | --- |
| NL-telling home = /plaatsen | 306 vs 293 | 293 = 293 = sitemap-NL | **fictief** |
| BE/DE in NL-overzicht | 13 live in sitemap | 0 in NL-index (achter land-hub) | **fictief** |
| Gewicht `/plaatsen` | 1,41 MB | 0,89 MB (paginering) | **fictief** |
| Cache listing Kampen | no-store | `public, max-age=3600` | **fictief** |
| Steekproef Kampen | niet in hits | listing op positie 8 (voorbeeld) | **fictief** |
| Gastblok Kampen | claim dominant | prijs/bron boven claim | **fictief** |
| GSC klikken | onbekend | niet ingevuld | onbekend |

---

## Fictieve voortgang werklijst (maand 1)

| # | Wat | Fictieve status | Label |
| --- | --- | --- | --- |
| 1 | NL-telling harmoniseren | afgerond in voorbeeld | **fictief** |
| 2 | Listing-template gast-eerst | live op preview in voorbeeld | **fictief** |
| 3 | Regio-filter → provincie-hub | in bouw in voorbeeld | **fictief** |

Werklijst blijft 1:1 met audit; status hier is alleen illustratie.

---

## Grafiek (fictief — gewicht zoekpagina)

:::chart
1410|Baseline /plaatsen (kB)|1410
890|Fictief na paginering (kB)|1410
:::

---

## Wat je hier niet mag concluderen

- Geen mail, geen live, geen %-trafficbelofte.
- Geen GSC-export — fictieve SERP-positie is geen Search Console-data.
- Volgende stap in het meetplan: **90 dagen** — provincie-zoekopdracht en nameting (zie fictief 90d-rapport).
