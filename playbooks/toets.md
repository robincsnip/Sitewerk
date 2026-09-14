# Playbook — Toets

Parent lanceert **Toetser** ([agents/toetser.md](../agents/toetser.md)) in een **nieuwe** agent-run.  
Maker ≠ Toetser. Zelfde-run `akkoord` is ongeldig.  
Orchestratie: [orchestratie.md](orchestratie.md).

## Ongeldig

- `toets.md` met oordeel `akkoord` in dezelfde run als het gekeurde artefact (`scout.md`, `rapport-klant.md`, `werklijst.md`, `taken/`, `nameting.md`)
- Afkeur zonder verplichte zin in `feedback.md`
- Her-run zonder die afkeurzin te adresseren
- Toetser die het artefact herschrijft om alsnog te “winnen”
- Oplevering “pijplijn klaar” na alleen Toets 1 terwijl brief SKU Uitvoer/Nameting/Nieuw heeft

## Checklist Toets 0 (scout)

- [ ] KEEP ja/nee met gastgat of expliciete nee
- [ ] Geen mail/live

## Checklist Toets 1 (rapport)

- [ ] Finding-contract compleet op topbevindingen (observatie, bewijs, label, gevolg, actie, eigenaar, effort, prio, meetpunt)
- [ ] Geen `bewijs_label=onbekend` als feit geformuleerd
- [ ] Top-3 niet uitsluitend op `onbekend` gebouwd
- [ ] Elke code=ja-rij heeft packet `taken/T-<n>.md`
- [ ] Klantrapport bevat de opdracht (geen “zie intern” als enige taak)
- [ ] Geen %-traffic/rank-belofte zonder baseline
- [ ] Geen LocalBusiness/GBP-theater op directory/platform zonder kader-reden
- [ ] Diepte: ≥1 architectuur/template-insight; ≥1 content-besluit (prune/merge/rewrite/hub)
- [ ] Conflict Feiten↔Strategie zichtbaar in `mix.md` of expliciet “geen conflict”
- [ ] Taal: geen AI-frasen (leverage, unlock, visibility boost, game-changer, synergie, “Google houdt van…”)
- [ ] PDF/print: cover Sitewerk + klant + datum; leesbare tabellen; conclusiekoppen
- [ ] Bijlage B: afgewezen automatische tips met reden (indien scan-input)

## Checklist Toets 2 (preview)

- [ ] Preview dekt open packets, niet extra scope
- [ ] Geen regressie t.o.v. Toets 1-scope
- [ ] Herstel getoond of n.v.t. met reden
- [ ] Locked acties nog steeds geblokkeerd
- [ ] Geen interne labels op klant-UI (mal, specimen, dossier, hubbesluit, «Niet verzonnen», variant-id in `<title>`); banner mag
- [ ] Huid-directory-URL’s (`/redactie/` `/gids/` `/compact/`) 200, niet 404 `niet gevonden`

## Checklist Toets 3 (nameting)

- [ ] Zelfde finding-IDs als audit
- [ ] Zelfde methode als baseline
- [ ] Geen %-winst zonder twee metingen

## Uitkomst

Schrijf [templates/toets.md](../templates/toets.md) en `next.md`:

- `akkoord` — volgende SKU (Uitvoer / Atelier / Nameting / Eigenaren / stop volgens brief)
- `afkeur` — **verplichte zin** in `feedback.md`; maker mag niet opnieuw zonder die zin
