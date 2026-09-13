# Playbook — Rapport & PDF

## Bron

`rapport-klant.md` is de inhoudsbron. HTML/PDF zijn afgeleiden.

## Pipeline

```bash
# Voorkeur: één run-id (md → html → pdf)
npm run pdf:run -- <run-id>

# Of handmatig
node scripts/md-to-html.js runs/<id>/rapport-klant.md
node scripts/html-to-pdf.js runs/<id>/print/rapport.html
```

`npm run pdf:demo` is alleen de seed-run `demo-2026-09-13`. Andere runs (bv. `2026-09-13-camperstaan`) vereisen `pdf:run` met die id — anders lees je per ongeluk dezelfde demo-PDF.

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
