# Camperstaan — nameting na 90 dagen (fictief voorbeeld)

**Peildatum:** 12 december 2026  
**Status:** **FICTIEF / VOORBEELD** — geen echte nameting, geen live resultaten  
**Opgesteld door:** Sitewerk

---

:::callout-fictief
**FICTIEF / VOORBEELD** — Dit rapport toont hoe een 90-dagen nameting eruit kan zien **als** de werklijst uit de audit is uitgevoerd. Alle uitkomsten zijn verzonnen. Vergelijk altijd met de echte nulmeting (`2026-09-13-camperstaan-nulmeting`) en echte metingen vóór je iets deelt.
:::

## In het kort

:::lead
Na 90 dagen zou je de provincie-intentie, schema en de zware zoekpagina opnieuw meten — dezelfde IDs als in de baseline. Dit voorbeeld vult die nameting in zonder dat er echt gemeten is.
:::

:::kpi
4|Findings opgelost|fictief
2|Deels|fictief
2|Open|fictief
:::

---

## Wat het meetplan na 90 dagen vroeg

:::measure
90 dagen|Nameting|provincie-zoekopdracht; nameting-run met baseline
:::

---

## Nameting per finding (fictief)

| ID | Baseline (13 sep) | Fictief 90d (12 dec) | Oordeel | Label |
| --- | --- | --- | --- | --- |
| F-001 | 306/293/13 | 293 overal NL; BE/DE apart | opgelost | **fictief** |
| F-002 | canonical /plaatsen | filter → `/provincie/drenthe` | opgelost | **fictief** |
| F-003 | SERP gap Kampen | listing positie 5 (voorbeeld) | deels | **fictief** |
| F-004 | 1,41 MB + no-store | 0,72 MB + public cache | opgelost | **fictief** |
| F-005 | geen geo/prijs JSON-LD | Rich Results OK (voorbeeld) | opgelost | **fictief** |
| F-006 | Drenthe niet in SERP | hub positie 4 (voorbeeld) | deels | **fictief** |
| F-007 | links onbekend | nog niet gemeten | niet | onbekend |
| F-008 | AI gap | nog niet herhaald | niet | **fictief** |

---

## Fictieve provincie-steekproef

| Zoekopdracht | Baseline | Fictief 90d | Label |
| --- | --- | --- | --- |
| `camperplaatsen in Drenthe` | geen `/provincie/drenthe` | hub op positie 4 | **fictief** |
| `camperplaats Kampen` | geen listing | listing positie 5 | **fictief** |

---

## Fictieve voortgang werklijst (90 dagen)

| # | Wat | Fictieve status | Label |
| --- | --- | --- | --- |
| 1 | NL-telling | afgerond | **fictief** |
| 2 | Listing gast-eerst | afgerond | **fictief** |
| 3 | Regio-filter → hub | afgerond | **fictief** |
| 4 | Cache + /plaatsen | afgerond | **fictief** |
| 5 | JSON-LD | afgerond | **fictief** |
| 6 | Hub Drenthe | deels; steekproef verbeterd | **fictief** |

---

## Grafiek (fictief — tellingen na harmonisatie)

:::chart
293|Homepage NL|306
293|Zoekpagina NL|306
293|Sitemap NL listings|306
0|BE/DE in NL-index|306
:::

Baseline homepage was 306; fictief voorbeeld toont één NL-telling — **niet gemeten in werkelijkheid**.

---

## Geen claims

Geen %-winst, geen GSC-cijfers, geen mail naar eigenaren. Dit document is een **vormvoorbeeld** voor Toets 3 / nameting-playbook — geen klantdelivery.
