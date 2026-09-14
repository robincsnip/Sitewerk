# Skill — Klanttaal (draft)

**Status:** draft op basis van eigenaar-feedback (Camperstaan v2, sep 2026). Nog geen automatisering — volg [lessons/README.md](../lessons/README.md).

## Wanneer

Bij elk `rapport-klant.md`, vóór print/PDF. Combineer met [playbooks/audit.md](../playbooks/audit.md) en [playbooks/rapport-pdf.md](../playbooks/rapport-pdf.md).

## Lezer

Iemand die **niets** hoeft te weten van websites, SEO of techniek. Schrijf alsof je een ondernemer uitlegt wat er speelt en wat jij voorstelt — niet alsof je een collega-SEO brief.

## Drie regels (hard)

### 1. Klanttaal

- Actieve zinnen, korte alinea's (max. ~3 zinnen), één idee per alinea.
- Geen vakjargon zonder uitleg in gewone woorden. Vertaal of schrap:
  - sitemap → overzicht van pagina-adressen voor Google
  - canonical → welke URL Google als de echte pagina ziet
  - cache / no-store → pagina tussen opslaan zodat herhaalde bezoekers sneller laden
  - JSON-LD / structured data → extra gegevens in de pagina die Google helpt begrijpen wat er staat
  - SERP / index → zoekresultaten / vindbaar in Google
  - listing → plekpagina
  - hub → overzichtspagina (bijv. per provincie)
- Geen Engelse werkwoorden als vervanging voor Nederlands (leverage, unlock, visibility).
- Cijfers alleen met bron (URL, meting, peildatum). Geen verzonnen metrics.
- Geen legacy Sitewerk-productnamen in klantproza.

### 2. Eén keer vertellen (single-telling)

Elke bevinding krijgt **één** plek met de volledige uitleg (observatie → wat het betekent voor de zaak → wat we voorstellen).

| Onderdeel | Mag | Mag niet |
| --- | --- | --- |
| In het kort | Overzicht + besluitvraag, zonder details | Cijfers of techniek herhalen |
| Prioriteiten (top 3) | Actienaam + “klaar als” | Opnieuw uitleggen waarom (verwijs: “zie bevinding X”) |
| Bevindingen | Volledige uitleg per thema, één keer | Dezelfde meting in meerdere secties |
| Keuzes | Besluitopties, voorkeur, alternatief | Metingen opnieuw optellen |
| Werklijst | Zelfde rijen als `werklijst.md` | Afwijkende formulering of volgorde |
| Bijlage A | Bewijs-tabel | Nog een verhaal eromheen |

`werklijst.md` en het klantrapport delen dezelfde waarheid: zelfde #, Wat, Wie, Klaar als. Geen tweede tijdslijn die rijen verschuift.

### 3. Uitnodigende vorm

Het rapport moet **leesbaar** zijn, geen muur van zwarte tekst.

- “In het kort” en top 3 visueel zwaarder dan bijlagen (korte blokken, lijsten, witruimte).
- Conclusiekoppen in gewone taal (“De homepage en zoekpagina tellen verschillend”) — geen SEO-labels als kop.
- Tabellen kort; lange uitleg in proza erboven of eronder, niet in elke cel.
- Bijlagen achteraan; hoofdtekst ≤ ~6 pagina's waar mogelijk.

Zie [playbooks/rapport-pdf.md](../playbooks/rapport-pdf.md) voor print/CSS.

## Structuur (aanbevolen)

1. In het kort  
2. Drie prioriteiten (klaar-als, geen herhaling)  
3. Wat al goed staat  
4. Wat we hebben bekeken (scope-tabel)  
5. Bevindingen (één subkop per thema)  
6. Beslissingen (keuzes)  
7. Werklijst (1:1 met `werklijst.md`)  
8. Hoe we meten  
9. Bijlage A — Bewijs · Bijlage B — Afgewezen tips  

## Copywriter-skill (eigenaar)

Een geüploade copywriter-/seller-skill kan **toon** verfijnen (warmte, merkstem, CTA). Vervangt deze regels niet: klanttaal, single-telling en werklijst-sync blijven hard.

## Check vóór Toetser

- [ ] Leest een niet-technische lezer de eerste twee pagina's zonder jargon?
- [ ] Staat elke kernbevinding precies één keer uitgewerkt?
- [ ] Komen werklijst-rijen 1:1 overeen met het rapport?
- [ ] Zijn prioriteiten en bijlagen visueel lichter dan de bevindingen-sectie?
