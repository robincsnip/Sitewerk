# Toets — 2026-09-14-camperstaan-atelier

**Fase:** Toets 2 (preview) — hertoets zoeken (job-first)  
**Toetser-run:** bc-4001e500-fda7-5dba-a3c5-2be27a89e628 · 2026-09-14  
**Maker-run:** bc-b7951f84-0cae-5056-8577-cc749a4b53ac · [PR #14](https://github.com/robincsnip/Sitewerk/pull/14) · `cursor/atelier-preview-templates-53ac` · **84db2f8**  
**Vorige Toets 2:** akkoord op jargon/404 (bc-7631d291 · dde7e90 / bb7a91d); deze run keurt T-D-5 zoeken  
**Preview:** `npm run atelier:preview -- 2026-09-14-camperstaan-atelier` → `http://127.0.0.1:4173/`

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Preview dekt open packets | ja | T-D-1/2/3/4/5. Chooser + drie huiden; zoekveld op elke huid-pagina. |
| Geen regressie t.o.v. Toets 1-scope | ja | Lab-preview; audit-run v3 ongemoeid; klant-Atelier blijft dicht. |
| Herstel getoond of n.v.t. | ja | Packets: revert / `search.js` terugdraaien / preview-map wissen. n.v.t. live. |
| Locked acties geblokkeerd | ja | Banner + `noindex,nofollow`; geen mail, geen `tel:`, geen GBP, geen deploy. |
| Job: zoeken en een plek vinden | ja | Op **redactie, gids én compact**: zichtbaar veld «Zoek een plek» + Zoeken. Typ `kampen` → Camperplaats Kampen → `plek-kampen.html`. Typ `drenthe` → Camperplaatsen in Drenthe · 19 plekken → `provincie-drenthe.html`. Submit bij 1 hit navigeert. Lege query: 0 extra listings. |
| Huid haalt job niet weg | ja | Gids heeft zoek-UI (niet weg om “geen kaarten”). Functies → stijl. |
| Drie huiden, zelfde feiten | ja | Index alleen dossier: Kampen, Drenthe 19, Nederland 293. «Dit is van mij» € 99 op plekpagina in alle drie. Geen verzonnen tel/adres/uren. |
| Banner + noindex | ja | Elke HTML-pagina; groene balk; `robots=noindex, nofollow`. |
| Nav klikbaar / slash-routes | ja | `/` chooser; `/redactie/` `/gids/` `/compact/` = **200**. Zonder slash ook 200. |
| Geen `tel:` / GBP zonder dossier | ja | Contact: «Telefoon en bezoekadres staan niet op deze pagina.» Geen `tel:`. |
| Papier-tokens, geen TypeUI/shadcn/Inter | ja | Libre Baskerville + Literata + Libre Franklin; `--ink/#1c1917` `--paper/#faf8f5` `--accent/#2d5a4a`. Zoek = statische HTML + `search.js`. |
| website-craft ná job | ja | Eén accent; geen WebGL; `prefers-reduced-motion`; geen Inter/Roboto; zoeken blijft. |
| `test:atelier` | ja | `npm run test:atelier` → `test:atelier ok`. |
| Geen interne labels op klant-UI | ja | 18 huid-pagina’s innerText: 0 denylist (mal/specimen/dossier/hubbesluit/«Niet verzonnen»/TypeUI/filter-audit). Titels `Camperstaan` / `Plekken · Camperstaan` (geen variant-id). Chooser mag lab-copy. |

## Spot-check (Chrome + curl, 14 sep 2026, 84db2f8)

| URL | Resultaat |
| --- | --- |
| `http://127.0.0.1:4173/` | 200 — scène 0, drie links (`redactie/` `gids/` `compact/`), banner. Geen zoekveld (lab-chooser). |
| `/redactie/` `/gids/` `/compact/` | **200** — homes, titel `Camperstaan`, zoek in viewport (desktop 1280 én mobile 390). |
| `/redactie` `/gids` `/compact` | 200 |
| Typ `kampen` op elke huid | 1 hit Camperplaats Kampen → `plek-kampen.html`; claim «Dit is van mij» € 99 |
| Typ `drenthe` op elke huid | 1 hit · 19 plekken → `provincie-drenthe.html` · Drenthe 19 |
| `/redactie/plaatsen.html` e.d. | 293; specimen Kampen; geen 293 verzonnen listings |
| `/…/contact.html` | Geen `tel:`; disclaimer |

`npm run test:atelier` groen. Curl: alle 18 huid-HTML + slash-routes 200.

## Afkeurzin (verplicht bij afkeur)

>

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als het gekeurde artefact (`atelier/preview/`, generator, `search.js`, `feiten.json`, 6d3c52a / 84db2f8) geschreven. Previews zijn niet herschreven om te winnen.

## Volgende

`next.md` → Eigenaren mogen de lab-preview bekijken. **Geen Uitvoer, geen live, geen mail.** Klant-Atelier blijft dicht (bestaande Next.js-directory; geen redesign-gate).
