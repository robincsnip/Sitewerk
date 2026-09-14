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

Harvest van voorbeelden (`atelier-voorbeelden.md` in de projectstore) mag leeg zijn. Niet blokkeren; later bijsturen. Geen nieuwe skill tot **≥3 echte herhalingen én een test**.

## Drie varianten (hard)

Patroon: **Floryn drie skins** — dezelfde feiten, andere huid. Tokens blijven Papier (`--ink`, `--paper`, `--accent`, Libre Baskerville / Literata / Libre Franklin). Geen Camperstaan-product-UI nabootsen (dat is een Next-directory, geen merk-atelier).

| Id | Huid | Layout / IA | Toon |
| --- | --- | --- | --- |
| `redactie` | terras | Magazine: masthead, gids als inhoudsopgave | Lucht, typewriter, één primaire CTA op home |
| `gids` | keuken | Hub-eerst: rail + provinciekaarten | Werkende gids |
| `compact` | allday | Landingsstroken, één CTA | Conversie; geen WebGL; geen `tel:` zonder dossier |

Chooser = scène 0 (Gavelia: atelier, typewriter). Geen R3F/WebGL (Biolune blijft referentie, niet dit spoor). Tap-to-call alleen als het dossier een telefoon heeft (Garage Tanis). Craft-skill `website-craft` leeft op de Mac mini-vault, niet in deze VM — niet kopiëren, geen nieuwe skill tot ≥3 echte herhalingen + test.

## Flow

1. `runs/<id>/design-brief.md` — stijl + rationale + gate-checkboxes  
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

Mac mini, niet Notion (pad ontoegankelijk in cloud-VM). Volledige harvest-doc volgt later; tot die tijd:

- `website-craft` (style-route + craft-brief) — vault, geen repo-skill
- Gavelia: scène 0 = atelier + typewriter + één CTA-richting
- Floryn: drie skins (terras / keuken / allday) = dit patroon
- Biolune-web: layered craft; **geen** Next+R3F in deze mal
- Daniëls Timmerwerken: brief + HTML als complete set (wij: design-brief + preview)
- Garage Tanis: conversie, geen WebGL; tap-to-call alleen met dossier-tel
- Camperstaan-repo: product-UI, niet nabootsen als Sitewerk Papier
- Makers (Immersive Garden, Obys, Lusion, Build in Amsterdam): craft-lat, geen kopie
