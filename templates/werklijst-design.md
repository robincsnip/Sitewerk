# Werklijst-design — {{KLANT}}

Run: {{RUN_ID}} · Peildatum: {{DATUM}}  
Spoor: lab-preview / klant-Atelier  
Toets 2: open

Zelfde packetvelden als Uitvoer. Zonder huidige/gewenste staat en herstel pakt niemand de rij.

| # | Prio | Wat | Waarom | Wie | Code? | Blokker | Packet | Klaar als | Meten | Bron |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | P0 | | | wij | ja/nee | nee | T-D1 | | | design-brief |

## Packets

Elke **code = ja**-rij heeft `taken/T-D-<n>.md` **of** het packet hieronder in deze file (Atelier-lab mag packets in deze werklijst houden als er geen Uitvoer-map is).

### T-D-{{N}} — {{KORTE_NAAM}}

| Veld | Inhoud |
| --- | --- |
| URL(s) | lokale preview-paden |
| Platform | atelier-html (niet live) |
| Huidige staat | |
| Gewenste staat | |
| Buiten scope | live, mail, publiceren, GBP, bestaande productiesite |
| Herstel | revert branch / `atelier/preview/` wissen |
| Acceptatie | `npm run atelier:preview` + browser: nav tussen de drie varianten |
| Werkspiegel vs productie | preview ≠ productie; geen deploy |

## Buiten scope

- Live-vervanging van een bestaande site
- Mail naar de klant
- Google-bedrijfsprofiel

## Dispatcher-filter

Toets 2 pakt de gecombineerde preview. Live alleen na Eigenaren, en alleen als klant-Atelier open was.
