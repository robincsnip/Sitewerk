# Playbook — Atelier (SKU Nieuw)

Gelijkwaardig aanbod naast Uitvoer, geen bijlage achter de audit.

## Twee sporen (niet verwarren)

| Spoor | Wat | Live? |
| --- | --- | --- |
| **Mal / preview** | Drie templates + generator + lokale preview in de repo | Nee. Lab. Geen mail, geen publiceren, geen GBP. |
| **Klant-Atelier** | Nieuwe site ná redesign-gate | Alleen na Eigenaren-ja, ná Toets 2 |

Een sterke bestaande site (bijv. Next.js-directory met honderden URL's) houdt **klant-Atelier dicht**. De mal mag wél een demo-preview vullen met dossierfeiten — dat is geen stilte-upgrade en geen vervanging van de live site.

## Start alleen als alles waar is (klant-Atelier)

1. Toets 1 akkoord (we weten wat de site moet doen) **of** brief zegt `nieuw: zonder-audit` + eigenaren-ja (alleen coming-soon / geen site).  
2. Eigenaren redesign-gate ja (+ klantja indien extern).  
3. Bestaande site ontbreekt / coming-soon / aantoonbaar geen drager (geen dunnere mock over een sterke live site).  
4. Feitenvloer: naam, adres, tel, uren/diensten uit dossier — geen verzinsels. Ontbreekt een veld: leeg laten, niet verzinnen.

## Start mal / preview-spoor

1. Brief noemt SKU Nieuw als **lab-preview** of de opdracht is de mal bouwen.  
2. Feitenvloer uit dossier (zelfde regel: geen verzinsels).  
3. Elke pagina: `noindex` + zichtbare preview-banner.  
4. `next.md` → Toetser **Toets 2** (niet Toets 1). Maker schrijft geen `toets.md` met akkoord.

Harvest: project-store `docs/atelier-voorbeelden.md` + `internal/website-craft-extract.md`. Skill niet kopiëren. Geen nieuwe skill tot **≥3 echte herhalingen én een test**.

## Drie varianten (hard)

Patroon: **Floryn drie skins** — dezelfde feiten, andere huid. Per huid **één** maker-richting, niet mashen. Tokens blijven Papier. Geen Camperstaan-product-UI nabootsen.

Hard (website-craft): één primary style, max één accent; content → static → motion → (optioneel) WebGL; geen WebGL vóór CTA; brand first, full-bleed; geen card-soup; geen Inter/Roboto; `prefers-reduced-motion`.

| Id | Huid | Maker (één) | Layout |
| --- | --- | --- | --- |
| `redactie` | terras | Immersive Garden (sfeer) | Full-bleed masthead, typewriter, één CTA |
| `gids` | keuken | Obys (type/grid) | Rail + typografische index + zoekveld — geen kaarten |
| `compact` | allday | Build in Amsterdam | Stroken + één CTA; geen WebGL; geen `tel:` zonder dossier |

Chooser = scène 0 (Gavelia: atelier, typewriter). Lab-copy mag op de chooser. **Klant-UI van de drie huiden:** geen mal, specimen, dossier, hubbesluit, «Niet verzonnen», audit-filtercopy, variantnamen in `<title>`. Enige interne merkteken op die pagina’s: de preview-banner. Preview-server: `/redactie/`, `/gids/`, `/compact/` (trailing slash) = 200.

## Flow

1. `runs/<id>/design-brief.md` — **eerst functies** (type + jobs), dan stijl + rationale + gate-checkboxes  
2. IA volgt hubbesluiten uit het rapport (of brief als geen audit)  
3. `runs/<id>/werklijst-design.md` — dezelfde packetvelden als Uitvoer (`templates/taak.md`)  
4. Feiten in `runs/<id>/atelier/feiten.json` (geen audit-proza in de mal)  
5. `npm run atelier:build -- <run-id>` → `runs/<id>/atelier/preview/`  
6. `npm run atelier:preview -- <run-id>` — lokaal, niet publiceren  
7. Toets 2 op de **gecombineerde** preview (alle drie de varianten)  
8. Eigenaren live → Nameting (Toets 3) — alleen klant-Atelier

## Generator

```bash
npm run atelier:build -- <run-id>
npm run atelier:preview -- <run-id>
# self-test van de mal (geen Camperstaan-audit-asserties):
npm run test:atelier
```

Mal: `templates/atelier/` + `assets/atelier/`. Specimen-inhoud blijft in de run. Rapport-tokens niet vermengen met klant-auditcopy.

## In klantrapport

Atelier als **keuze** (Uitvoer vs Nieuw), niet als losse marketingzin. Weglaten als redesign-gate dicht is. Lab-preview hoort niet in het klantrapport alsof de live site wordt vervangen.

## Amend — preview-spoor (sep 2026)

Eerste echte mal in repo. Camperstaan: Toets 1 akkoord, SKU Nieuw **dicht** (bestaande directory). Specimen = demo-preview uit audit-feiten (naam, diensten, hubs), geen live, geen mail. Notion had geen sitetemplates.

## Amend — second-brain refs (sep 2026)

Mac mini, niet Notion. Harvest in de project-store (`docs/atelier-voorbeelden.md`, `internal/website-craft-extract.md`):

- `website-craft` (style-route + craft-brief) — vault, geen repo-skill
- Gavelia: scène 0 = atelier + typewriter + één CTA-richting
- Floryn: drie skins (terras / keuken / allday) = dit patroon
- Biolune-web: layered craft; **geen** Next+R3F in deze mal
- Daniëls Timmerwerken: brief + HTML als complete set (wij: design-brief + preview)
- Garage Tanis: conversie, geen WebGL; tap-to-call alleen met dossier-tel
- Camperstaan-repo: product-UI, niet nabootsen als Sitewerk Papier
- Makers (Immersive Garden, Obys, Lusion, Build in Amsterdam): craft-lat, geen kopie
- TypeUI MCP / betaald design-MCP: **niet**. Robin: website-craft + Floryn-skins + gratis HTML.

## Amend — Toets 2 afkeur (sep 2026)

Afkeurzin: interne atelier-/audit-taal uit de drie huiden; `/redactie/`, `/gids/`, `/compact/` als directory-index (200). Chooser mag lab-copy. Geen skill; herhaling_count 1.

## Amend — job-first directory (sep 2026)

Directory-job (zoeken/vinden) is **niet optioneel**. Elke huid heeft een zichtbaar zoekveld + resultaten. Een huid mag die job niet weglaten — ook niet om card-soup of website-craft te volgen. Eén sterke huid eerst; varianten houden dezelfde jobs. Geen skill (occurrence 1).
