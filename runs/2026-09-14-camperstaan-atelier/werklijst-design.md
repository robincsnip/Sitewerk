# Werklijst-design — Camperstaan

Run: `2026-09-14-camperstaan-atelier` · Peildatum: 14 september 2026  
Spoor: lab-preview  
Toets 2: open

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Packet | Klaar als | Meten | Bron |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | Drie templates in de mal | Inventaris: 0 sitetemplates | wij | ja | nee | T-D-1 | redactie/gids/compact openen, andere IA | visueel + `test:atelier` | atelier-capability |
| 2 | P0 | Generator + lokale preview | Geen npm-pad voor sites | wij | ja | nee | T-D-2 | `atelier:build` + `atelier:preview` | scripts | playbook |
| 3 | P0 | Camperstaan-feiten vullen | Specimen, geen verzinsels | wij | ja | nee | T-D-3 | naam/diensten/hubs in alle drie | HTML bevat 293, Drenthe 19, Kampen; geen tel: | feiten v3 |
| 4 | P1 | Banner + noindex | Mag niet als live gelezen worden | wij | ja | nee | T-D-4 | elke pagina banner + robots noindex | view-source | gate |
| 5 | P2 | Toets 2-overdracht | Maker ≠ Toetser | wij | nee | nee | — | `next.md` → Toetser | aanwezig | isolatie |

## Packets

### T-D-1 — Drie templates

| Veld | Inhoud |
| --- | --- |
| URL(s) | `/` chooser; `/redactie/`; `/gids/`; `/compact/` |
| Platform | atelier-html (niet live) |
| Huidige staat | 0 HTML-templates in repo (inventaris 14 sep 2026) |
| Gewenste staat | Drie layouts: masthead-magazine, rail-gids, compact-stroken; Papier-tokens |
| Buiten scope | live camperstaan.nl, mail, GBP, audit-PDF-inhoud in de mal |
| Herstel | revert PR / `runs/2026-09-14-camperstaan-atelier/atelier/preview/` wissen |
| Acceptatie | Browser: drie homes zien er anders uit; dezelfde naam en 293 |
| Werkspiegel vs productie | preview ≠ productie; geen deploy |

### T-D-2 — Generator

| Veld | Inhoud |
| --- | --- |
| URL(s) | `npm run atelier:preview -- 2026-09-14-camperstaan-atelier` → `http://127.0.0.1:4173/` |
| Platform | node scripts, geen Vercel-publicatie |
| Huidige staat | alleen `audit:finish` / `pdf:run` |
| Gewenste staat | `atelier:build`, `atelier:preview`, `test:atelier` |
| Buiten scope | GitHub Pages, Vercel, custom domain |
| Herstel | scripts verwijderen via revert |
| Acceptatie | self-test groen; server geeft 200 op chooser |
| Werkspiegel vs productie | localhost alleen |

### T-D-3 — Specimen Camperstaan

| Veld | Inhoud |
| --- | --- |
| URL(s) | `atelier/feiten.json` + zes pagina's per variant |
| Platform | atelier-html |
| Huidige staat | feiten in v3-audit; geen site-preview |
| Gewenste staat | Home, plaatsen, Drenthe, Kampen, over, contact — alleen dossierfeiten |
| Buiten scope | 293 kaarten namaken; BE/DE-nav; tel/adres; prijs overnachting; OSM-coördinaten |
| Herstel | `feiten.json` + preview wissen |
| Acceptatie | Geen `tel:`; Kampen + Drenthe 19 + 293 in alle drie; claim onder reizigersinfo |
| Werkspiegel vs productie | demo-preview, geen vervanging |

### T-D-4 — Gate-banner

| Veld | Inhoud |
| --- | --- |
| URL(s) | alle preview-HTML |
| Platform | atelier-html |
| Huidige staat | n.v.t. |
| Gewenste staat | `noindex, nofollow` + bannertekst op elke pagina |
| Buiten scope | robots.txt van de live site |
| Herstel | revert |
| Acceptatie | view-source op chooser + één pagina per variant |
| Werkspiegel vs productie | preview |

## Buiten scope

- Live-vervanging van www.camperstaan.nl
- Mail naar de klant
- Google-bedrijfsprofiel
- `toets.md` met akkoord in deze run
