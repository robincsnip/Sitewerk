# Camperstaan — nulmeting (baseline audit)

**Peildatum:** 13 september 2026  
**Status:** baseline — cijfers uit audit-run `2026-09-13-camperstaan-v2`  
**Opgesteld door:** Sitewerk

---

## In het kort

:::lead
Dit is de **nulmeting**: de meetpunten uit de audit, één keer op een rij. Geen Search Console-export beschikbaar in de baseline-run — alleen wat we openbaar en in de sitemap hebben gemeten. Dit rapport is geen fictie en geen belofte over resultaten.
:::

:::kpi
306|Homepage plekken|baseline
293|Zoekpagina NL|baseline
577|Pagina's sitemap|baseline
13|BE/DE extra|baseline
:::

---

## Wat we meten (uit het meetplan)

:::section-intro
Zelfde meetpunten als in de audit: tellingen, technische koppen, pagina-overzicht, steekproef Kampen/Drenthe, gewicht zoekpagina. Search Console per paginatype, inkomende links en claim-conversie staan op **nog niet bekend**.
:::

| Meetpunt | Baseline (13 sep 2026) | Methode | Label |
| --- | --- | --- | --- |
| Homepage vs zoekpagina vs sitemap-NL | 306 / 293 / 306 listings (13 BE/DE) | HTTP + sitemap.xml | gemeten |
| Pagina-overzicht totaal | 577 URL's | sitemap.xml | gemeten |
| Gewicht zoekpagina | 1,41 MB | curl size | gemeten |
| Cache listing | `no-store` op alle HTML | response headers | gemeten |
| Listing Kampen (gasttekst) | ~132 woorden in hoofdblok | HTML-telling | gemeten |
| Steekproef `camperplaats Kampen` | geen Camperstaan-listing in hits | openbare zoeksteekproef | gemeten |
| Steekproef `camperplaatsen in Drenthe` | geen `/provincie/drenthe` in hits | openbare zoeksteekproef | afgeleid |
| JSON-LD geo/prijs Kampen | afwezig | HTML bron | gemeten |
| GSC dekking | niet geëxporteerd | google-site-verification aanwezig | onbekend |
| Inkomende links | niet gemeten | — | onbekend |

---

## Tellingen (grafiek)

:::chart
306|Homepage plekken|577
293|Zoekpagina NL (uniek)|577
13|BE/DE niet op /plaatsen|577
577|Sitemap URL's totaal|577
:::

:::section-intro
Schaal: 577 = 100% (totaal sitemap). Waarden zijn **gemeten** op peildatum audit — geen trend, geen doelstelling.
:::

---

## GSC en gerelateerde signalen (baseline)

| Signaal | Baseline | Label |
| --- | --- | --- |
| `google-site-verification` | aanwezig in HTML | gemeten |
| GSC-export klikken/impressies | niet beschikbaar deze run | onbekend |
| Indexeerbaarheid robots | Allow `/`; dashboard/api uitgesloten | gemeten |
| Canonical listing Kampen | vaste URL `/plaatsen/{slug}` | gemeten |
| Canonical filter Drenthe | blijft `/plaatsen` (conflict) | gemeten |

**Geen GSC-cijfers verzonnen.** Na koppeling GSC kan dezelfde nulmeting-tabellen met echte export worden gevuld.

---

## Koppeling naar findings

| ID | Meetpunt baseline | Waarde |
| --- | --- | --- |
| F-001 | Tellingen NL vs BE/DE | 306 / 293 / 13 |
| F-002 | Filter canonical | `/plaatsen` bij Drenthe-filter |
| F-003 | Kampen SERP + gasttekst | niet in steekproef; ~132 woorden |
| F-004 | Cache + gewicht /plaatsen | no-store; 1,41 MB |
| F-005 | Schema Kampen | geen geo/priceRange |
| F-006 | Drenthe-hub SERP | niet in steekproef |
| F-007 | Links | onbekend |
| F-008 | AI-categorie | gap in steekproef |

---

## Volgende stappen (uit audit, geen fictie)

:::measure
30 dagen|Hercontrole|steekproef Kampen; gewicht zoekpagina; cache op plekpagina's
90 dagen|Nameting|provincie-zoekopdracht; nameting-run met baseline
:::

Zie audit `2026-09-13-camperstaan-v2` voor werklijst en beslissingen.
