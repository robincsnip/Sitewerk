# Playbook — Toets

Parent lanceert **Toetser** ([agents/toetser.md](../agents/toetser.md)) in een **nieuwe** agent-run.  
Bouwer ≠ Toetser. Zelfde-run `akkoord` is ongeldig.

## Ongeldig

- `toets.md` met oordeel `akkoord` in dezelfde run als `rapport-klant.md` of `werklijst.md`
- Afkeur zonder verplichte zin in `feedback.md`
- Her-run Bouwer zonder die afkeurzin te adresseren
- Toetser die het rapport herschrijft om alsnog te “winnen”

## Checklist Toets 1 (rapport)

- [ ] Finding-contract compleet op topbevindingen (observatie, bewijs, label, gevolg, actie, eigenaar, effort, prio, meetpunt)
- [ ] Geen `bewijs_label=onbekend` als feit geformuleerd
- [ ] Geen %-traffic/rank-belofte zonder baseline
- [ ] Geen LocalBusiness/GBP-theater op directory/platform zonder kader-reden
- [ ] Diepte: ≥1 architectuur/template-insight; ≥1 content-besluit (prune/merge/rewrite/hub)
- [ ] Conflict Feiten↔Strategie zichtbaar in `mix.md` of expliciet “geen conflict”
- [ ] Taal: geen AI-frasen (leverage, unlock, visibility boost, game-changer, synergie, “Google houdt van…”)
- [ ] PDF/print: cover Sitewerk + klant + datum; leesbare tabellen; conclusiekoppen
- [ ] Bijlage B: afgewezen automatische tips met reden (indien scan-input)

## Checklist Toets 2 (preview)

- [ ] Preview dekt open werklijst-items die “code” zijn
- [ ] Geen regressie t.o.v. Toets 1-scope
- [ ] Locked acties nog steeds geblokkeerd

## Uitkomst

Schrijf [templates/toets.md](../templates/toets.md):

- `akkoord` — Uitvoer mag (Toets 1) of Eigenaren mogen live vragen (Toets 2)
- `afkeur` — **verplichte zin** in `feedback.md`; Bouwer mag niet opnieuw zonder die zin
