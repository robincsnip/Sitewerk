# Playbook — Rapport & PDF

## Bron

`rapport-klant.md` is de inhoudsbron. HTML/PDF zijn afgeleiden.

## Pipeline

**Bouwer (standaard, verplicht na elke audit):**

```bash
npm run audit:finish -- <run-id>
```

`md-to-html.js` schrijft HTML en triggert daarna automatisch PDF. `audit:finish` controleert dat beide bestanden bestaan.

**Opnieuw bouwen** (na handmatige edits aan `rapport-klant.md`):

```bash
npm run pdf:run -- <run-id>
```

`pdf:run` roept dezelfde finish-hook aan. Alleen `--html-only` op `md-to-html.js` slaat PDF over (niet gebruiken in Bouwer-runs).

Theme: [assets/rapport-theme.css](../assets/rapport-theme.css).  
Print-skelet: [templates/rapport-print.html](../templates/rapport-print.html).

## Vormregels

- Cover: merk Sitewerk + klant + peildatum  
- Display-font + body-font (geen Inter/Roboto/Arial als face)  
- Geen paarse AI-gradients / glow  
- “In het kort” + top 3 zwaarder dan bijlagen  
- A4 print-first  

## Taal

Nederlands, korte zinnen, conclusiekoppen.  
Verboden: leverage, unlock, visibility boost, game-changer, synergie, “Google houdt van…”.
