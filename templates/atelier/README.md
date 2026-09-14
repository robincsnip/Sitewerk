# Atelier-mal

Drie huiden (Floryn-patroon: terras / keuken / allday), Papier-tokens, feiten uit de run. Geen audit-proza en geen product-UI in deze map.

```text
templates/atelier/
  facts.example.json     # schema; echte feiten in runs/<id>/atelier/feiten.json
  README.md
assets/atelier/
  screen.css             # pt/mm → rem (rapport-tokens blijven print)
  preview-banner.css
  redactie.css
  gids.css
  compact.css
```

```bash
npm run atelier:build -- <run-id>
npm run atelier:preview -- <run-id>
```

Opent lokaal (standaard `http://127.0.0.1:4173/`). Niet deployen.
