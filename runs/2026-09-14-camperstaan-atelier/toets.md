# Toets — 2026-09-14-camperstaan-atelier

**Fase:** Toets 2 (preview) — hertoets na afkeur  
**Toetser-run:** bc-7631d291-0247-5d82-860d-2fe85e50019e · 2026-09-14  
**Maker-run:** bc-b7951f84-0cae-5056-8577-cc749a4b53ac · [PR #14](https://github.com/robincsnip/Sitewerk/pull/14) · `cursor/atelier-preview-templates-53ac` · **bb7a91d**  
**Vorige Toets 2:** afkeur (bc-256f8a88 · 156365d)  
**Preview:** `npm run atelier:preview -- 2026-09-14-camperstaan-atelier` → `http://127.0.0.1:4173/`

## Oordeel

- [x] akkoord
- [ ] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Preview dekt open packets | ja | T-D-1/2/3/4: drie huiden + generator + feiten + banner. `/redactie/` `/gids/` `/compact/` = 200. |
| Geen regressie t.o.v. Toets 1-scope | ja | Lab-preview; audit-run v3 ongemoeid; klant-Atelier blijft dicht. |
| Herstel getoond of n.v.t. | ja | Packets: revert PR / preview-map wissen. n.v.t. live. |
| Locked acties geblokkeerd | ja | Banner + `noindex,nofollow`; geen mail, geen `tel:`, geen GBP, geen deploy. |
| Drie huiden, zelfde feiten | ja | Redactie=terras, gids=keuken, compact=allday. 293 / Drenthe 19 / Kampen / «Dit is van mij» € 99 in alle drie; geen verzonnen tel/adres/uren. |
| Banner + noindex | ja | Elke HTML-pagina; zichtbare groene balk; `robots=noindex, nofollow`. |
| Nav klikbaar | ja | Chooser → `/redactie/` `/gids/` `/compact/` (200). Binnen-huid nav (Plekken / Home) landt op 200. |
| Geen `tel:` / GBP zonder dossier | ja | `telefoon`/`adres`/`uren` = null; geen `tel:` in preview-HTML. |
| Papier-tokens, geen TypeUI/shadcn/Inter/cards | ja | Libre Baskerville + Literata + Libre Franklin; `--ink/#1c1917` `--paper/#faf8f5` `--accent/#2d5a4a`; gids zonder kaarten en zonder zoek-UI. |
| website-craft hard rules | ja | Eén accent; geen WebGL; `prefers-reduced-motion`; geen card-soup; geen Inter/Roboto. |
| `test:atelier` | ja | `npm run test:atelier` → `test:atelier ok`. |
| Preview start | ja | `/` = scène 0 (200). `/redactie/` `/gids/` `/compact/` = 200 (directory-index). |
| Geen interne labels op klant-UI | ja | Vorige afkeur weg. Chooser mag lab-copy (scène/huid/`npm run`). Drie huiden: geen mal/specimen/dossier/hubbesluit/«Niet verzonnen»/filter-auditcopy; titels `Camperstaan` / `Plekken · Camperstaan` (geen variant-id). Alleen preview-banner intern. |

## Spot-check (browser + curl, 14 sep 2026, bb7a91d)

| URL | Resultaat |
| --- | --- |
| `http://127.0.0.1:4173/` | 200 — scène 0, typewriter, drie links, banner. Lab-copy OK. |
| `/redactie/` `/gids/` `/compact/` | **200** — homes, titel `Camperstaan` |
| `/redactie` `/gids` `/compact` (zonder slash) | 200 — zelfde index |
| `/redactie/index.html` | 200 — magazine-masthead, één CTA «Open de gids», 293 / Drenthe 19 / Kampen |
| `/gids/index.html` | 200 — rail + 01 Drenthe 19 / 02 Overijssel Kampen; geen kaarten, geen zoekveld |
| `/compact/index.html` | 200 — één header-CTA «Plekken bekijken», cijfer 293, stroken |
| `/redactie/plaatsen.html` | 293; Camperplaats Kampen; geen mal/specimen/dossier |
| `/gids/provincie-drenthe.html` | Drenthe · 19; geen «Type: Provincie-hub» / filter-auditcopy |
| `/gids/over.html` | dienstenlijst; geen «Niet verzonnen» / dossier-paden |
| `/gids/plek-kampen.html` | Kampen / Overijssel / «Dit is van mij» · € 99 |
| `/compact/plek-kampen.html` | zelfde feiten; header-CTA + tekstlink «Meer plekken» |
| `/compact/contact.html` | Geen `tel:`; «Telefoon en bezoekadres staan niet op deze pagina.» |

Zichtbare innerText van alle 18 huid-pagina’s gescand op denylist: 0 hits. `npm run test:atelier` groen (inclusief `resolvePreviewPath('/redactie/')` → `index.html`).

## Afkeurzin (verplicht bij afkeur)

>

Vorige afkeurzin (bc-256f8a88) is geadresseerd in bb7a91d: interne copy weg van de drie huiden; slash-routes 200.

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als het gekeurde artefact (`atelier/preview/`, generator, `feiten.json`, bb7a91d) geschreven. Previews zijn niet herschreven om te winnen.

## Volgende

`next.md` → Eigenaren mogen de lab-preview bekijken. **Geen Uitvoer, geen live, geen mail.** Klant-Atelier blijft dicht (bestaande Next.js-directory; geen redesign-gate).
