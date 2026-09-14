# Design-brief — Camperstaan

**Status:** lab-preview — geen klant-Atelier, geen live  
**Peildatum:** 14 september 2026  
**Spoor:** lab-preview

## Waarom Atelier open mag

Klant-Atelier (live later):

- [x] Toets 1 akkoord — Camperstaan v3, PR #11  
- [ ] Eigenaren redesign-gate ja  
- [ ] Site ontbreekt / coming-soon / aantoonbaar geen drager  
- [x] Feitenvloer uit dossier (geen verzinsels)

Lab-preview (geen live):

- [x] Opdracht is mal of demo-preview  
- [x] Bestaande sterke site wordt **niet** vervangen  
- [x] Feitenvloer uit dossier (geen verzinsels)

## Functies (vóór stijl)

Type: **directory**. Bezoeker-job (niet optioneel): een plek **zoeken en vinden**.

| Job | In de preview |
| --- | --- |
| Zoekveld | Zichtbaar op elke huid (redactie, gids, compact) |
| Resultaten | Filter uit dossierfeiten: Kampen, Drenthe (19), Nederland 293 |
| Plek-detail | Camperplaats Kampen; claim «Dit is van mij» € 99 onder de plekfeiten |
| Contact | Geen tel/adres/mail; geen live |

Geen verzinsels. Ontbreekt een veld: leeg. Skills ná deze jobs: statische HTML + `search.js` (geen TypeUI, geen cmdk-library).

## Feitenvloer

| Veld | Bron | Waarde of `onbekend` |
| --- | --- | --- |
| Naam | `in/feiten.md` v3 | Camperstaan |
| Adres | dossier | onbekend |
| Telefoon | dossier | onbekend |
| Uren | dossier | onbekend |
| Diensten | architectuur in feiten | overzicht camperplaatsen; 12 provincie-overzichten; 253 stadspagina's; plekpagina's met bronlink |
| NL-plekken | `/plaatsen` 13 sep 2026 | 293 unieke listing-links |
| Hub Drenthe | `/provincie/drenthe` | 19 plekken |
| Specimen | listing Kampen | Camperplaats Kampen, Overijssel; claim «Dit is van mij» + € 99 |
| GBP | feiten | n.v.t. (directory) |

## Stijlrichting

- Doelgevoel (één zin): redactionele gids op papier — rust, **zoeken blijft zichtbaar**, geen dashboard, geen listing-product-UI.
- Wat we níet willen: Inter/Roboto, card-soup, WebGL vóór CTA, stock, Camperstaan-app nabootsen, zoekveld weghalen “voor rust”.
- Typografie / kleur: Papier-tokens (Libre Baskerville, Literata, Libre Franklin). Eén primary, max één accent.

Second-brain (Mac mini, niet in deze VM): Floryn drie skins; Gavelia scène 0 typewriter; Tanis geen WebGL; Camperstaan-repo = product-UI, niet nabootsen. `website-craft` ná functies (job wint van craft). Geen TypeUI.

## Drie varianten

| Id | Huid | Maker (één) | IA-verschil | Zelfde feiten |
| --- | --- | --- | --- | --- |
| redactie | terras | Immersive Garden | Full-bleed, typewriter, **zoeken**, één CTA | ja |
| gids | keuken | Obys | Type/grid-index + **zoekveld**, geen kaarten | ja |
| compact | allday | Build in Amsterdam | Stroken + **zoeken** + één sticky CTA | ja |

## IA volgt SEO

Hubbesluiten uit Camperstaan-rapport (niet de live URL-structuur 1:1 kopiëren, wel de besluiten):

1. Home — Nederlandse gids, één telling (293), geen BE/DE in de NL-nav  
2. `/plaatsen` — Nederlandse index  
3. Provincie-hub (`/provincie/drenthe`) — filter landt hier  
4. Plekpagina gast-eerst (Kampen-specimen); claim onder de reizigersinfo  
5. Over / contact — alleen dossierfeiten; geen tel/adres

## Klaar als

- Preview dekt `werklijst-design.md`
- Zoekveld + resultaten op elke huid (Kampen / Drenthe te vinden)
- Toets 2 op gecombineerde preview (drie varianten)
- Geen publiceren, geen mail
