# Camperstaan — GSC na 30 dagen (fictief voorbeeld)

**Peildatum:** 13 oktober 2026  
**Status:** **FICTIEF / VOORBEELD** — geen echte meting  
**Opgesteld door:** Sitewerk

---

:::callout-fictief
**FICTIEF / VOORBEELD** — Illustratie van een 30-dagen GSC-hercontrole **als** de maand-1-acties uit de audit zijn uitgevoerd. Alle Search Console-cijfers zijn verzonnen. Vergelijk met nulmeting `2026-09-13-camperstaan-nulmeting`.
:::

## In het kort

:::lead
Na 30 dagen kijk je in GSC vooral of listing Kampen beweegt, of `/plaatsen` lichter indexeert, en of de NL-telling consistenter wordt. Dit voorbeeld volgt het meetplan uit de audit — niet de werkelijkheid.
:::

:::kpi
3.124|Klikken (28d)|fictief / voorbeeld
51.800|Vertoningen|fictief / voorbeeld
6,0%|CTR|fictief / voorbeeld
22,8|Gem. positie|fictief / voorbeeld
:::

---

## Wat het meetplan na 30 dagen vroeg

:::measure
30 dagen|Hercontrole|steekproef Kampen; gewicht zoekpagina; cache op plekpagina's
:::

In GSC zou je dat zien als: meer vertoningen op listing-URL's, stabielere merk-queries, minder ruis op BE/DE in NL-context.

---

## Search Console — 30 dagen vs nulmeting (fictief / voorbeeld)

:::gsc-trend
W1 15–21 sep|710|12.200
W2 22–28 sep|748|12.850
W3 29 sep–5 okt|782|13.400
W4 6–13 okt|884|14.350
:::

:::gsc-metrics
W1|5,9|23,8
W2|6,0|23,2
W3|6,0|23,0
W4|6,0|22,8
:::

:::gsc-compare-queries
# periods: Nulmeting|30 dagen
camperplaats kampen|0|14
camperplaatsen in drenthe|2|4
camperplaatsen nederland|186|198
gratis camperplaats nederland|94|102
:::

:::gsc-compare-pages
# periods: Nulmeting|30 dagen
/|892|910
/plaatsen|624|680
/provincie/drenthe|3|6
/listing Kampen|0|14
:::

:::gsc
**Periode:** 15 september – 13 oktober 2026 (28 dagen) · **Property:** `https://www.camperstaan.nl/` · **Label:** fictief / voorbeeld

### Prestaties (totaal) — vergelijking

| Meting | Nulmeting (fictief) | 30 dagen (fictief) | Verschil | Label |
| --- | --- | --- | --- | --- |
| Klikken | 2.847 | 3.124 | +277 | fictief / voorbeeld |
| Vertoningen | 48.130 | 51.800 | +3.670 | fictief / voorbeeld |
| CTR | 5,91% | 6,03% | +0,12 pp | fictief / voorbeeld |
| Gemiddelde positie | 24,4 | 22,8 | −1,6 | fictief / voorbeeld |

### Top zoekopdrachten — delta t.o.v. nulmeting

| Zoekopdracht | Klikken nul | Klikken 30d | Vertoningen 30d | CTR 30d | Pos. 30d | Label |
| --- | --- | --- | --- | --- | --- | --- |
| camperstaan | 412 | 428 | 910 | 47,0% | 1,1 | fictief / voorbeeld |
| camperplaatsen nederland | 186 | 198 | 4.380 | 4,5% | 17,9 | fictief / voorbeeld |
| camperplaats kampen | 0 | 14 | 410 | 3,4% | 28,6 | fictief / voorbeeld |
| camperplaatsen in drenthe | 2 | 4 | 1.020 | 0,4% | 32,1 | fictief / voorbeeld |
| gratis camperplaats nederland | 94 | 102 | 2.210 | 4,6% | 21,4 | fictief / voorbeeld |

### Top pagina's — delta t.o.v. nulmeting

| Pagina | Klikken nul | Klikken 30d | Vertoningen 30d | CTR 30d | Pos. 30d | Label |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 892 | 910 | 3.520 | 25,9% | 8,2 | fictief / voorbeeld |
| `/plaatsen` | 624 | 680 | 9.200 | 7,4% | 14,1 | fictief / voorbeeld |
| `/plaatsen/kampen-burgemeester-berghuisplein` | 0 | 14 | 380 | 3,7% | 27,4 | fictief / voorbeeld |
| `/provincie/drenthe` | 3 | 6 | 710 | 0,8% | 29,8 | fictief / voorbeeld |
| `/plaats/kampen` | 28 | 32 | 430 | 7,4% | 18,6 | fictief / voorbeeld |
:::

**Meetplan-koppeling (fictief):** eerste klikken op listing Kampen na gast-eerst-template; `/plaatsen` meer vertoningen na paginering (techniek F-004); NL-telling nog niet volledig zichtbaar in GSC op dag 30.

---

## Technische hercontrole (fictief / voorbeeld)

| Meetpunt | Nulmeting | 30d fictief | Label |
| --- | --- | --- | --- |
| Gewicht `/plaatsen` | 1,41 MB (gemeten) | 0,89 MB | fictief / voorbeeld |
| Cache listing Kampen | no-store (gemeten) | `public, max-age=3600` | fictief / voorbeeld |
| NL-telling home = /plaatsen | 306 vs 293 (gemeten) | 293 = 293 | fictief / voorbeeld |

---

## Werklijst maand 1 (fictief / voorbeeld)

| # | Wat | Status in voorbeeld | Label |
| --- | --- | --- | --- |
| 1 | NL-telling harmoniseren | afgerond | fictief / voorbeeld |
| 2 | Listing-template gast-eerst | op preview | fictief / voorbeeld |
| 3 | Regio-filter → provincie-hub | in bouw | fictief / voorbeeld |

Werklijst 1:1 met audit; status alleen illustratie.

---

## Wat je hier niet mag concluderen

Geen mail, geen live, geen %-trafficbelofte. Volgende stap in het meetplan: **90 dagen** — provincie-zoekopdracht en nameting (zie `2026-09-13-camperstaan-90d-fictief`).
