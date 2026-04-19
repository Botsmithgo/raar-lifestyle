# RAAR Lifestyle

> Luxury meets convenience.

A cinematic, editorial rebuild of [raarlifestyle.com](https://raarlifestyle.com) — a tailored luxury lifestyle & events management house. Dubai · Marrakech · Paris · worldwide.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + TypeScript
- **Tailwind CSS v4** with custom brand tokens
- **Framer Motion** for component motion
- **Lenis** for smooth scroll
- **GSAP** (available for advanced scroll choreography)
- Fonts: **Fraunces** (editorial serif) + **Inter Tight** (sans)

## Design language

- **Dark cinematic hero** → cream editorial mid → dark contact footer
- **Mirrored "RA | AR" wordmark** animated on load
- **Horizontal pinned services strip** — ten verticals scroll sideways as you scroll down
- Custom cursor, magnetic buttons, scroll-triggered text reveals
- Signature equestrian experiences triptych (Meydan · Desert · Polo)
- Parallax imagery and dual-direction quote marquees

## Sections

1. Hero (cinematic Ken Burns)
2. Welcome / intro
3. Manifesto ("Why RAAR")
4. Services — horizontal pinned scroll
5. Signature Experiences — Polo & Racing
6. Founder — Asmaa Hanine
7. Quotes marquee
8. Destination image marquee
9. Contact (mailto form)
10. Footer

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint
```

## Notes

- Imagery uses remote Unsplash URLs with `images.unsplash.com` whitelisted in `next.config.ts`. `unoptimized: true` keeps the image loader from proxying.
- The custom cursor auto-disables on touch / coarse-pointer devices.
- `prefers-reduced-motion: reduce` short-circuits non-essential animation.
