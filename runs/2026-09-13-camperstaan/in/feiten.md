# Feitenlaag — Camperstaan

Bron: openbare fetch 13 september 2026. Geen GSC/GA. Geen inlog.

- Home: `https://www.camperstaan.nl/` 200, Next.js op Vercel, HSTS `max-age=63072000`.
- Apex `https://camperstaan.nl/` landt op www.
- Titel: `Camperstaan — camperplaatsen in Nederland`. Meta beschrijft zoeken op plaats/voorziening + bronpagina.
- H1: “Camperplaatsen in Nederland”. JSON-LD: `WebSite` (geen LocalBusiness).
- `robots.txt`: Allow `/`; Disallow `/dashboard`, `/inloggen`, `/api/`, `/betalen`. Sitemap genoemd.
- Sitemap: 577 URL’s: 306 plek-URL’s onder `/plaatsen/…`, plus index `/plaatsen`; 253 stadshubs `/plaats/{stad}`; 12 `/provincie/…`; plus over/contact/privacy/voorwaarden.
- Plektemplate (steekproef Kampen): titel “Camperplaats … in Kampen · Camperstaan”, H1 pleknaam, JSON-LD `@type: Campground` + `sameAs` naar bron (gemeente). Geen LocalBusiness.
- Stadshub (steekproef Kampen/Drachten): titel “Camperplaatsen in {stad} · Camperstaan”, ItemList/CollectionPage.
- Claim op home: 306 plekken — komt overeen met aantal `/plaatsen/{slug}` in sitemap.
