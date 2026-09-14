# Toets — 2026-09-14-camperstaan-atelier

**Fase:** Toets 2 (preview)  
**Toetser-run:** bc-256f8a88-a16c-5dbe-877e-e116b6ff9390 · 2026-09-14  
**Maker-run:** bc-b7951f84-0cae-5056-8577-cc749a4b53ac · PR #14 · `cursor/atelier-preview-templates-53ac` · 96e8012  
**Preview:** `npm run atelier:preview -- 2026-09-14-camperstaan-atelier` → `http://127.0.0.1:4173/`

## Oordeel

- [ ] akkoord
- [x] afkeur

## Checklist

| Check | OK? | Notitie |
| --- | --- | --- |
| Preview dekt open packets | deels | T-D-1/2/3/4 bestaan; drie huiden + generator + feiten + banner. T-D-1-URL's `/redactie/`, `/gids/`, `/compact/` geven 404 (alleen `…/index.html` is 200). |
| Geen regressie t.o.v. Toets 1-scope | ja | Lab-preview; audit-run v3 ongemoeid; klant-Atelier blijft dicht. |
| Herstel getoond of n.v.t. | ja | Packets: revert PR / preview-map wissen. n.v.t. live. |
| Locked acties geblokkeerd | ja | Banner + `noindex,nofollow`; geen mail, geen `tel:`, geen GBP, geen deploy. |
| Drie huiden, zelfde feiten | ja | Redactie=terras (masthead/typewriter), gids=keuken (rail/type-index), compact=allday (stroken + 293). Feiten 293 / Drenthe 19 / Kampen / claim € 99 in alle drie; geen verzonnen tel/adres/uren. |
| Banner + noindex | ja | Elke HTML-pagina; `test:atelier` groen. |
| Nav klikbaar | ja | Chooser → `*/index.html`; nav binnen een huid werkt. Trailing-slash-paden niet. |
| Geen `tel:` / GBP zonder dossier | ja | `telefoon`/`adres`/`uren` = null; geen `tel:` in preview-HTML. |
| Papier-tokens, geen TypeUI/shadcn/Inter/cards | ja | Libre Baskerville + Literata + Libre Franklin; `--ink/#1c1917` `--paper/#faf8f5` `--accent/#2d5a4a`; geen TypeUI/shadcn; gids zonder kaarten en zonder zoek-UI. |
| website-craft hard rules | ja | Eén accent; geen WebGL; `prefers-reduced-motion` in screen.css; geen card-soup; geen Inter/Roboto; brand/full-bleed op redactie. |
| `test:atelier` | ja | `npm run test:atelier` → `test:atelier ok`. |
| Preview start | deels | `/` = scène 0 (200). `/redactie/`, `/gids/`, `/compact/` = 404 `niet gevonden`. Homes laden via `index.html`. |
| Geen interne labels op klant-UI | **nee** | Chooser (lab) mag scène/huid. Op de drie Camperstaan-huiden staat atelier-/audit-taal in zichtbare copy en in `<title>`. |

## Spot-check (browser + curl, 14 sep 2026)

| URL | Resultaat |
| --- | --- |
| `http://127.0.0.1:4173/` | 200 — scène 0, typewriter, drie links, banner, Papier. Lab-copy OK. |
| `/redactie/` `/gids/` `/compact/` | **404** platte tekst `niet gevonden` |
| `/redactie/index.html` | 200 — magazine-masthead, één CTA «Open de gids», 293 in typewriter |
| `/gids/index.html` | 200 — rail + 01 Drenthe / 02 Overijssel; geen kaarten, geen zoekveld |
| `/compact/index.html` | 200 — één header-CTA «Plekken bekijken», cijfer 293, stroken |
| `/redactie/plaatsen.html` | «specimen-plek» + «De mal somt niet alle 293 kaarten na» + footer «dossier» |
| `/gids/provincie-drenthe.html` | «Type: Provincie-hub»; «Filter: Hoort hier te landen, niet op /plaatsen» |
| `/gids/over.html` | «Pagina's in het dossier: / , /plaatsen, …»; «Niet verzonnen.» |
| `/gids/plek-kampen.html` | Kampen / Overijssel / «Dit is van mij» · € 99; «zonder dossierregel» |
| `/compact/plek-kampen.html` | Twee `.cta`: header «Plekken bekijken» + «Meer plekken» |
| `/compact/contact.html` | Geen `tel:`; wél «in het dossier» + «Niet verzonnen» |

Paginatitels op elke huid-pagina: `Camperstaan — redactie` / `gids` / `compact` (variant-id in het tabblad).

## Afkeurzin (verplicht bij afkeur)

> Haal interne atelier- en audit-taal uit de klant-UI van redactie, gids en compact (niet de chooser): geen mal, specimen, dossier, hubbesluit, Niet verzonnen, Filter-hoort-hier-niet-op-/plaatsen, variantnamen in `<title>`; alleen de verplichte preview-banner blijft het interne merkteken. Serveer `/redactie/`, `/gids/` en `/compact/` als 200 (directory-index), niet als 404 `niet gevonden`.

## Vrijgave

Toetser bevestigt: dit bestand is **niet** in dezelfde agent-run als het gekeurde artefact (`atelier/preview/`, generator, `feiten.json`) geschreven. Previews zijn niet herschreven om te winnen.

## Volgende

`feedback.md` + `next.md` → Bouwer her-run op dezelfde afkeurzin. Geen Uitvoer, geen live, geen mail. Klant-Atelier blijft dicht.
