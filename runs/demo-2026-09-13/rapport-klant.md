# Demo Bakkerij Noord — wat er speelt online, en wat we eerst doen

**Peildatum:** 13 september 2026  
**Status:** concept — er is nog niets live gezet  
**Opgesteld door:** Sitewerk

---

## In het kort

Bakkerij Noord heeft een nette one-pager, maar Google ziet vooral een adrespagina zonder duidelijke dienstenstructuur. Wie zoekt op “desembrood Utrecht” landt sneller bij concurrenten met aparte productpagina’s. Op mobiel is bellen begraven onder een lang verhaal. Reviews staan wel op Maps, maar de site verwijst er niet naar — vertrouwen blijft op Maps hangen.

**Eerste besluit dat we vragen:** akkoord op drie acties hieronder (hubpagina’s, belbaar boven de vouw, reviewbrug), daarna bouwen we week 1.

### Drie dingen die het meeste opleveren

1. **Drie dienstpagina’s** (desembrood, taarten, lunch) — zoekers en Google krijgen een duidelijke plek per intentie — klaar als elke pagina unieke titel, H1 en interne link vanaf home heeft.
2. **Belknop boven de vouw op mobiel** — belletjes gaan nu via Maps of niet — klaar als `tel:`-knop zichtbaar is zonder scrollen op een iPhone-breedte.
3. **Reviewbrug naar Maps** — sociale bewijskracht blijft nu buiten de site — klaar als home én contact een duidelijke link naar het Google-profiel tonen (zonder sterren te verzinnen).

### Wat al goed staat (niet kapotmaken)

- NAP op de site komt overeen met Maps
- HTTPS en canonical op home zijn in orde
- Openingstijden op de site kloppen met het profiel

---

## Wat we hebben bekeken

Openbare site + Maps-profiel. Geen Search Console-export in deze demo. Geen crawler-login.

| Onderwerp | Status | Opmerking |
| --- | --- | --- |
| Techniek & indexatie | bekeken | Home indexeerbaar; geen sitemap gevonden |
| Pagina-opbouw & links | bekeken | Bijna alles op één URL |
| Teksten & zoekintentie | bekeken | Breed verhaal, weinig intentie-pagina’s |
| Snelheid op kernpagina’s | deels | Geen CrUX; lab-steekproef OK |
| Google-bedrijfsprofiel | relevant | Sterk; site koppelt zwak terug |
| Reviews & reputatie | bekeken | Reviews op Maps, niet op site |
| Concurrenten in zoekresultaten | steekproef | Concurrenten met dienst-URL’s |
| AI-vindbaarheid | steekproef | Merk genoemd bij generieke prompt; diensten zwak |

---

## Het verhaal op één lijn

### Eén pagina probeert drie zoekintenties tegelijk

Home mengt brood, taarten en lunch. Concurrenten ranken met aparte URL’s per dienst. Gevolg: jullie verhaal is warm, maar moeilijk te matchen op een specifieke zoekvraag. Keuze: drie dunne maar eerlijke dienstpagina’s, geen blogfabriek.

### Vertrouwen leeft op Maps, niet op de site

Het profiel heeft recente reviews. De site noemt dat niet. Bezoekers die via Google de site openen, missen het bewijs dat op Maps wél staat. Geen nepreviews op de site — wel een brug.

---

## Keuzes (wij geven een voorkeur)

### Keuze 1 — Eerst dienstenstructuur of eerst visuele redesign?

**Voorstel:** structuur en belbaarheid eerst; redesign alleen als jullie de hele site willen vernieuwen (apart Atelier-besluit).  
**Waarom:** zonder URL-structuur blijft een mooiere homepage dezelfde zoekmatch missen.  
**Alternatief:** alleen GBP-posts en reviewvragen, site laten.  
**Opnieuw bekijken als:** jullie binnen 30 dagen sowieso een nieuwe site willen.

---

## Werklijst — eerste 90 dagen

Zie `werklijst.md` in deze run.

### Deze maand

| # | Wat | Wie | Klaar als |
| --- | --- | --- | --- |
| 1 | Drie dienstpagina’s + interne links | wij | live op preview |
| 2 | Belknop boven de vouw | wij | getest op 390px breed |
| 3 | Maps-reviewbrug | wij | links op home + contact |

### Maand twee / drie

- Titel/meta per dienstpagina aanscherpen met echte zoektermen uit Search Console (zodra toegang)
- Eén seizoenslandingspagina (kerst/taart) alleen met echte productiecapaciteit

**Buiten scope deze ronde:** complete rebrand, betaalde ads, review-aankoop, LocalBusiness-spam op niet-bestaande locaties.

---

## Hoe we weten of het werkt

- **Nu bekend:** home staat in de index; Maps-profiel actief
- **Nog niet bekend:** zoekverkeer per dienst (geen GSC)
- **Over 30 dagen:** impressies op de drie nieuwe URL’s (GSC) + bel-taps indien analytics
- **Over 90 dagen:** organische landingen op dienstpagina’s t.o.v. alleen home

---

## Bijlage A — Bewijs

| ID | Observatie | Bewijs | Label |
| --- | --- | --- | --- |
| F-001 | Geen aparte dienst-URL’s | steekproef site-navigatie 13 sep | gemeten |
| F-002 | Geen `tel:` boven de vouw op smalle viewport | manuele check 390px | gemeten |
| F-003 | Reviews op Maps, geen brug op site | Maps-profiel + site-footer | gemeten |
| F-004 | Geen XML-sitemap bereikbaar | `/sitemap.xml` 404 | gemeten |

## Bijlage B — Afgewezen automatische tips

| Tip | Waarom niet |
| --- | --- |
| AggregateRating met verzonnen sterren op de site | Geen dossierbewijs; misleidend |
| Tien blogposts “voor SEO” | Geen capaciteit; lost intentie-match niet op |
| Extra vestiging in schema | Er is één winkel |
