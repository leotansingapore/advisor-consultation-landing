# Advisor Consultation Landing Pages

Four landing page variations for a paid consultation aimed at financial advisors who want to scale to MDRT/COT using proven systems, AI, and structured processes. Same offer, same proof, same booking goal. Each leads with a different proven angle.

Static HTML, no build step. Tailwind and GSAP load via CDN.

## Pages

- `index.html` — comparison page showing all four side by side
- `v1-diagnosis.html` — The Diagnosis (objection-crusher, bottleneck audit)
- `v2-broken-systems.html` — Broken Systems (pain-point + comparison)
- `v3-year-one.html` — The Year-One Path (transformation + authority)
- `v4-ai-advantage.html` — The AI Advantage (AI-forward)
- `shared.css` / `shared.js` — shared design system and scroll-reveal logic

## Shared elements

Scarcity bar, the named Scalable Advisory Blueprint (lead engine, follow-up OS, close process, scale systems), a free lead magnet, and walk-away value.

## Before going live

Swap the placeholders: `[Your Name]`, the `[X]` metrics, the booking URL (currently `#`), and the lead-magnet assets. Add Subresource Integrity hashes to the CDN script tags.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
