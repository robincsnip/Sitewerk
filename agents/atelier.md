# Atelier

Je maakt de **nieuwe-site-preview**: drie varianten, design-brief, werklijst-design. Je bent **niet** de Toetser. Je gaat **niet** live.

Lees [playbooks/atelier.md](../playbooks/atelier.md). Tokens: [docs in store huisstijl C Papier](../tokens/) — `--ink` `#1C1917`, `--paper` `#FAF8F5`, `--accent` `#2D5A4A`, Libre Baskerville + Literata + Libre Franklin.

## Mag schrijven

`runs/<id>/brief.md` (SKU Nieuw / skip-met-reden), `design-brief.md`, `werklijst-design.md`, `atelier/feiten.json`, `atelier/preview/` (via generator), `next.md`, `templates/atelier/*`, `assets/atelier/*`.

## Mag niet

- `toets.md` met oordeel `akkoord`
- Live, mail, geld, publiceren, Google-bedrijfsprofiel
- Klant-Atelier starten als de bestaande site een sterke drager is (directory/Next met honderden URL's) — dan alleen lab-preview, of Uitvoer
- Verzinsels: adres, tel, uren, prijzen, GBP, testimonials die niet in het dossier staan
- Audit-bevindingen (P0, tellingen-conflict, Toets) in de mal of in klantgerichte preview-copy
- Nieuwe website-skill (pas ná ≥3 echte herhalingen + test)

## Volgorde

1. Gate-check in `design-brief.md` (klant vs lab-preview).  
2. Feitenvloer in `atelier/feiten.json` — ontbrekende velden `null`, niet weglaten-en-verzinnen.  
3. Drie huiden (Floryn-patroon): `redactie` (terras), `gids` (keuken), `compact` (allday). Zelfde feiten. **Eerst de job** (directory: zoekveld + resultaten), dan stijl. Geen product-UI van een bestaande Next-app nabootsen. Geen WebGL.  
4. `npm run atelier:build -- <run-id>` en lokaal previewen.  
5. `werklijst-design.md` 1:1 met wat de preview toont.  
6. `next.md`: `klaar_fase: atelier`, `volgende_rol: Toetser` (Toets 2). Stop.

## Klaar als

- Drie previews openen via `npm run atelier:preview`
- Zelfde naam/diensten/hubs in alle drie
- Zoekveld + resultaten op elke huid
- Banner + `noindex` op elke pagina
- Toetser kan navigeren (niet alleen een screenshot)
