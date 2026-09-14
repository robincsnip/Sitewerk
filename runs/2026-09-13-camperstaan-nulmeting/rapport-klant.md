# Camperstaan — nulmeting (baseline)

**Peildatum:** 13 september 2026  
**Status:** nulmeting — GSC-voorbeeld **fictief / voorbeeld**; technische baseline uit audit **gemeten**  
**Opgesteld door:** Sitewerk

---

## In het kort

:::lead
De **nulmeting** legt vast waar we later verandering meten: Search Console (hier een fictief exportvoorbeeld in GSC-vorm) plus de technische meetpunten uit audit `2026-09-13-camperstaan-v2`. Geen belofte over resultaten.
:::

:::kpi
2.847|Klikken (28d)|fictief / voorbeeld
48.130|Vertoningen|fictief / voorbeeld
5,9%|CTR|fictief / voorbeeld
24,4|Gem. positie|fictief / voorbeeld
:::

---

## Search Console — nulmeting (fictief / voorbeeld)

:::callout-fictief
**FICTIEF / VOORBEELD** — Geen echte GSC-export in de baseline-audit. Onderstaande grafieken en tabellen tonen hoe we Search Console **zouden** presenteren na koppeling. Cijfers zijn verzonnen ter illustratie.
:::

:::gsc-trend
W1 16–22 aug|650|11.200
W2 23–29 aug|698|11.850
W3 30 aug–5 sep|720|12.100
W4 6–13 sep|779|13.080
:::

:::gsc-metrics
W1|5,7|25,1
W2|5,8|24,9
W3|5,9|24,6
W4|6,0|24,4
:::

:::gsc
**Periode:** 16 augustus – 13 september 2026 (28 dagen) · **Property:** `https://www.camperstaan.nl/` · **Label:** fictief / voorbeeld

### Prestaties (totaal)

| Meting | Waarde | Label |
| --- | --- | --- |
| Klikken | 2.847 | fictief / voorbeeld |
| Vertoningen | 48.130 | fictief / voorbeeld |
| CTR | 5,91% | fictief / voorbeeld |
| Gemiddelde positie | 24,4 | fictief / voorbeeld |

### Top zoekopdrachten

| Zoekopdracht | Klikken | Vertoningen | CTR | Gem. positie | Label |
| --- | --- | --- | --- | --- | --- |
| camperstaan | 412 | 890 | 46,3% | 1,2 | fictief / voorbeeld |
| camperplaatsen nederland | 186 | 4.210 | 4,4% | 18,6 | fictief / voorbeeld |
| gratis camperplaats nederland | 94 | 2.140 | 4,4% | 22,1 | fictief / voorbeeld |
| camperplaats kampen | 0 | 320 | 0,0% | 41,2 | fictief / voorbeeld |
| camperplaatsen in drenthe | 2 | 980 | 0,2% | 34,8 | fictief / voorbeeld |

### Top pagina's

| Pagina | Klikken | Vertoningen | CTR | Gem. positie | Label |
| --- | --- | --- | --- | --- | --- |
| `/` | 892 | 3.400 | 26,2% | 8,4 | fictief / voorbeeld |
| `/plaatsen` | 624 | 8.900 | 7,0% | 15,2 | fictief / voorbeeld |
| `/plaats/kampen` | 28 | 410 | 6,8% | 19,4 | fictief / voorbeeld |
| `/plaatsen/kampen-burgemeester-berghuisplein` | 0 | 310 | 0,0% | 38,5 | fictief / voorbeeld |
| `/provincie/drenthe` | 3 | 620 | 0,5% | 31,2 | fictief / voorbeeld |
:::

**Leeswijzer:** listing Kampen en provincie Drenthe hebben in dit fictieve beeld weinig of geen klikken — in lijn met de audit-steekproef (F-003, F-006).

---

## Technische baseline (uit audit — gemeten)

:::section-intro
Openbare metingen uit `2026-09-13-camperstaan-v2`. Geen GSC nodig voor deze rijen.
:::

| Meetpunt | Baseline (13 sep 2026) | Methode | Label |
| --- | --- | --- | --- |
| Homepage vs zoekpagina vs sitemap-NL | 306 / 293 / 306 listings (13 BE/DE) | HTTP + sitemap.xml | gemeten |
| Pagina-overzicht totaal | 577 URL's | sitemap.xml | gemeten |
| Gewicht zoekpagina | 1,41 MB | curl size | gemeten |
| Cache listing | `no-store` op alle HTML | response headers | gemeten |
| Listing Kampen (gasttekst) | ~132 woorden in hoofdblok | HTML-telling | gemeten |
| `google-site-verification` | aanwezig | HTML | gemeten |

---

## Koppeling naar findings

| ID | Meetpunt | Nulmeting |
| --- | --- | --- |
| F-001 | Tellingen NL vs BE/DE | 306 / 293 / 13 (gemeten) |
| F-003 | Kampen in GSC (fictief) | 0 klikken op listing-URL |
| F-006 | Drenthe in GSC (fictief) | 3 klikken; positie 31,2 |
| F-004 | Gewicht /plaatsen | 1,41 MB (gemeten) |

---

## Volgende meetmomenten (uit audit)

:::measure
30 dagen|Hercontrole GSC|zelfde tabellen; vergelijk met nulmeting — steekproef Kampen, gewicht zoekpagina, cache
90 dagen|Nameting GSC|provincie-zoekopdracht; finding-status + GSC-delta
:::

Zie audit `2026-09-13-camperstaan-v2` voor werklijst en beslissingen.
