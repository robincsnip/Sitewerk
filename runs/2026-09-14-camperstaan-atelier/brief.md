# Brief — 2026-09-14-camperstaan-atelier

**Klant / domein:** Camperstaan / www.camperstaan.nl  
**Peildatum:** 14 september 2026

## SKU’s (minstens één)

- [ ] Scout
- [ ] Audit
- [ ] Uitvoer          (na Toets 1; bestaande site)
- [ ] Nameting
- [x] Nieuw            (Atelier; **lab-preview**, geen live-vervanging)

Default pakket als niets is aangekruist: **Audit + Uitvoer + Nameting**.  
**Uitvoer** en **Nieuw** niet allebei zonder keuze in Kader. Nieuw is een alternatief, geen stille upgrade.

## Skip-met-reden

scout: skip — deze run is alleen het Atelier-preview-spoor.  
audit: skip — Toets 1 akkoord op Camperstaan v3 (PR #11); geen nieuw rapport.  
uitvoer: skip — deze run bouwt geen patches op de live Next.js-directory.  
nameting: skip — niets live.  
nieuw: **lab-preview**. Klant-Atelier blijft dicht: bestaande Next.js-directory (honderden URL's), geen redesign-gate. Geen dunnere mock als live-vervanging.

## Kader

Directory, geen lokale winkel. Locked: geen live, geen mail, geen geld, geen publiceren, geen GBP. Feiten alleen uit `runs/2026-09-14-camperstaan-v3/in/feiten.md`.
