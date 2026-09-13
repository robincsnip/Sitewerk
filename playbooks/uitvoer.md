# Playbook — Uitvoer

Alleen ná **Toets 1 akkoord** van een geïsoleerde Toetser.  
Bron: `werklijst.md` + `taken/T-<n>.md`. De PDF is geen opdracht.

## Mag

- Alleen rijen: **code = ja**, **blokker = nee**, **Toets 1 = akkoord**.  
- Eén PR per taak waar mogelijk.  
- Preview voor Toets 2.  
- Hersteltest (terugdraaien of revert) vóór Toets 2.

## Mag niet

- Scope buiten het packet (`taken/T-<n>.md`)  
- Toets 1 of 2 overslaan  
- Live zonder Eigenaren-gate  
- Platform wisselen (WP→custom, Canva→Next) als stille “uitvoer”

## Packet (verplicht per taak)

Zie [templates/taak.md](../templates/taak.md). Zonder huidige/gewenste staat en herstel: niet starten, terug naar Bouwer (afkeurzin: packet incompleet).

## Platformroute (eerste bewezen paden)

| Platform | Route | Eerste werk |
| --- | --- | --- |
| Code (Next e.d.) | branch → tests → afgeschermde preview | titels, copy, links, afgesproken pagina’s |
| WordPress | testkopie → CMS/API → browsercheck | tekst, meta via bestaande SEO-plugin, links |
| Elementor | testkopie + ondersteunde editor | geen ongeteste builder-data |
| Shopify | ongepubliceerd thema | geen catalogus zonder apart ja |
| Canva/Wix e.d. | eerst: wat is veilig | kant-en-klare copy/instructie; geen stille migratie |

Werkspiegel ≠ productiebron. Dat onderscheid staat in het packet.

## Na preview

`next.md` → Toetser Toets 2. Bij akkoord: Eigenaren voor live, daarna Nameting. Bij afkeur: `feedback.md` → deze playbook opnieuw.
