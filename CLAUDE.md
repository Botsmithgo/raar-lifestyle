@AGENTS.md

---

# RAAR Lifestyle — Brand + Build Playbook

This file is a **reusable playbook** for high-end concierge / luxury brand sites. RAAR is the first brand to use it; copy this whole file into the next brand's project and adapt the tokens.

- **Live:** [raar-lifestyle.vercel.app](https://raar-lifestyle.vercel.app) · [/fr](https://raar-lifestyle.vercel.app/fr)
- **Repo:** `Botsmithgo/raar-lifestyle`
- **Reference sites:** [quintessentially.com](https://quintessentially.com), Le Collectionist, Chanel.com (for French voice)

---

## 1. Tech stack

| Layer | Pick | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) | SSG by default, fast, i18n-ready |
| Runtime | **React 19** | Latest concurrent features |
| Lang | **TypeScript** | Self-documenting JSON-backed content |
| Styling | **Tailwind CSS v4** | Brand tokens via `@theme inline` |
| Motion | **Framer Motion** (reveals, transitions) + **GSAP** (kept installed for scroll choreography) + **Lenis** (smooth scroll) | Luxe without WebGL weight |
| i18n | **next-intl v4** | URL-based (`/` = default, `/fr` = French), SSG-safe |
| Deploy | **Vercel** | Git integration, instant previews |
| Fonts | `next/font/google` → **Fraunces** (display serif) + **Inter Tight** (sans) | Free, editorial, deploy-safe |
| Images | `next/image` with `unoptimized: true` + Unsplash remote | Sidesteps proxy timeouts; Unsplash sizes via query params |

**Why no WebGL / canvas / 3D:** tempting for luxury sites but hurts performance, SEO, and accessibility. Framer Motion + Lenis + GSAP gets you 95% of the feel with 30% of the weight. Save 3D for case studies.

---

## 2. File structure

```
brand/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # fonts, cursor, smooth scroll, nav, NextIntlClientProvider
│   │   └── page.tsx            # composes all sections
│   └── globals.css             # tokens + tailwind layers + keyframes
├── components/
│   ├── Nav.tsx                 # sticky, surface-aware (dark/light auto)
│   ├── SmoothScroll.tsx        # Lenis wrapper
│   ├── CustomCursor.tsx        # ring + dot, disables on touch
│   ├── MagneticButton.tsx      # pulls toward cursor
│   ├── RevealText.tsx          # word/line staggered scroll reveal
│   ├── MirrorWordmark.tsx      # the animated logo mark
│   ├── LanguageToggle.tsx      # 🇬🇧/🇫🇷 switcher
│   └── sections/
│       ├── Hero.tsx
│       ├── Welcome.tsx
│       ├── Manifesto.tsx
│       ├── ServicesHorizontal.tsx      # pinned horizontal scroll — signature
│       ├── SignatureExperiences.tsx    # rotating seasonal itinerary
│       ├── Founder.tsx
│       ├── Quotes.tsx                  # single centerpiece quote
│       ├── Marquee.tsx                 # destination carousel
│       ├── Contact.tsx                 # mailto form + contact rail
│       └── Footer.tsx
├── i18n/
│   ├── routing.ts              # locales, defaultLocale, localePrefix: 'as-needed'
│   ├── request.ts              # loads messages/<locale>.json on server
│   └── navigation.ts           # locale-aware Link/useRouter/usePathname
├── lib/
│   ├── fonts.ts                # next/font definitions
│   └── services.ts             # IDs + image URLs (text is in messages)
├── messages/
│   ├── en.json                 # full source of truth for English copy
│   └── fr.json                 # hand-crafted French (not literal)
├── middleware.ts               # next-intl middleware (locale detection + rewrite)
├── next.config.ts              # next-intl plugin + image config
└── public/
```

**Rule of thumb:** every piece of user-facing text lives in `messages/*.json`. Components import translations via `useTranslations(namespace)`. The only things in `lib/services.ts` are IDs + image URLs (locale-agnostic data).

---

## 3. Design system

### Colors (RAAR tokens — adapt per brand)

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0E0E0C` | Near-black (warmer than pure). Dark surfaces. |
| `--ink-2` | `#1A1A17` | Secondary ink for layering |
| `--sand` | `#F3EDE3` | Primary light background — from the brand deck |
| `--bone` | `#E8DFD2` | Secondary cream surface (services section) |
| `--rose` | `#B07A7D` | Italic accent color — italic emphasis + micro-moments |
| `--gold` | `#C9A96E` | Hairline dividers only, never dominant |
| `--muted` | `#6B6B67` | Muted text / captions |

Background rhythm for the page: **dark hero → light welcome → dark manifesto → bone services → dark experiences → light founder → bone quotes → dark marquee → dark contact → dark footer.** Surface-aware Nav flips its own contrast based on `data-surface="dark"` attribute on sections.

### Type

- **Display (serif):** Fraunces — headlines, italic pull-quotes, dramatic moments
- **Sans:** Inter Tight — nav, UI, body, eyebrows, stats

Utility classes in `globals.css`:
- `.display` — serif, 400 weight, tight tracking (-0.02em), line-height 0.95
- `.display-italic` — same + italic
- `.overline` — 11px, tracking 0.22em, uppercase, 500 weight (eyebrows, captions)

**Rule:** one italic rose accent word per headline. Never two. Creates the Quintessentially-style poetic emphasis.

### Motion vocabulary (the signature)

| Effect | Component | Purpose |
|---|---|---|
| Smooth scroll | `SmoothScroll` (Lenis) | Makes the whole site feel film-like |
| Custom cursor | `CustomCursor` | Small dot + trailing ring; inflates on interactive elements. Auto-off on touch |
| Magnetic CTAs | `MagneticButton` | Buttons pull toward cursor — premium micro-moment |
| Text reveal | `RevealText`, `RevealLines` | Word/line staggered rise on scroll — applies to every headline |
| Parallax | `useScroll` + `useTransform` | Hero image, portrait images drift opposite to scroll |
| Pinned horizontal | `ServicesHorizontal` | Tall section + sticky child + scroll-driven X translate. Signature moment |
| Grain overlay | `.grain` class on body | Subtle film grain via inline SVG turbulence |
| Marquee | `.marquee-track` + CSS `@keyframes marquee-x` | Infinite image strip |
| Mirror wordmark | `MirrorWordmark` | Two halves slide together from opposite sides on load |
| Animated blob | Contact section | Slow-breathing rose blur — one on whole page |

**Always honor `prefers-reduced-motion: reduce`** (shortcut in `globals.css` kills heavy animations).

---

## 4. Copy voice principles

### English
- Editorial, confident, slightly understated. Never hype.
- One italic rose accent per headline (e.g. *"Ten worlds, one **atelier**."*).
- Three-beat rhythm: *"Sourced. Reserved. Delivered."*
- Concrete imagery > abstract claims. *"A villa in the South of France, a riad in Marrakech, a pied-à-terre in Paris."* beats *"global property network."*
- Closing beats that earn their period: *"Nous composons. Vous vivez."*

### French (critical — do NOT translate literally)
- Rewrite from English intent, not English wording.
- Shorter sentences than English. Comma → period.
- Canon luxury words used sparingly: *atelier, maison, orfèvre, sur-mesure, art de vivre, composer.*
- "Les mots justes" — the right word, not the closest word.
- Titles: inversions feel chic ("Adresses discrètes" not "Discrètes adresses").
- Jordan quote cadence: *"les autres font en sorte que cela arrive."*

### What NOT to write
- Superlatives: "world-class," "best in class," "luxurious." Show, don't claim.
- Corporate filler: "leveraging," "seamlessly," "solutions."
- "We at RAAR believe…" — starts too many concierge sites. Kill on sight.

---

## 5. i18n architecture

- Routing: `defineRouting({ locales: ['en', 'fr'], defaultLocale: 'en', localePrefix: 'as-needed' })` — English at `/`, French at `/fr`.
- Middleware auto-detects browser locale on first visit (can override by passing `localeDetection: false` if you want English-first always).
- All text lives in `messages/<locale>.json`. Shape mirrors section names (`hero`, `welcome`, `manifesto`, …).
- Access with `useTranslations('namespace')` in client or server components.
- `LanguageToggle` uses `useRouter` from `@/i18n/navigation` and `router.replace(pathname + hash, { locale, scroll: false })` to preserve position on switch.
- Italic-rose accents in headlines are split into three keys: `Before`, `Accent`, `After`. The component wraps `Accent` in `<span className="display-italic text-rose">`.

### Adding a third locale (example: Arabic)
1. Add `'ar'` to `routing.locales`
2. Add `messages/ar.json` (full translation)
3. Add `ar` to `LanguageToggle` FLAGS (`🇸🇦`) and the button list
4. Consider RTL: add `dir={locale === 'ar' ? 'rtl' : 'ltr'}` to `<html>` in `layout.tsx`, and audit components for `left-`/`right-` classes → `start-`/`end-`. Add `font-arabic` via next/font and swap at runtime.

---

## 6. Content model

### Services (10 verticals)
- IDs + images in `lib/services.ts` → `serviceIds` + `serviceImages`
- Text (title, eyebrow, description) in `messages/*.json` under `services.list.<id>`
- To add a service: add its ID to the array, add its image, add its three keys in both locale files, update `ServicesHorizontal` translate distance (`x` useTransform) if the card count changed

### Signature itinerary (rotates seasonally)
- Moment IDs in `lib/services.ts` → `itineraryMomentIds` + `itineraryImages`
- Text in `messages/*.json` under `itinerary` (eyebrow, headline, subtitle, outro, cta + `moments.<id>` with label/title/line/description)
- **Rotation:** swap the three image URLs + the 3 moment texts + the headline + eyebrow season label. ~5 minutes per new itinerary. Good cadence: quarterly. Good destinations: Marrakech (spring), Côte d'Azur (summer), Alps (winter), Bali (autumn).

### Destinations carousel (12 places)
- IDs + images in `lib/services.ts` → `destinationIds` + `destinationImages`
- Text in `messages/*.json` under `destinations.list.<id>` (place + country)
- Pause-on-hover built in via `group-hover/row:[animation-play-state:paused]`

---

## 7. Deploy

```bash
# local
npm install
npm run dev           # http://localhost:3000
npm run build         # SSG build
npm run lint

# ship
git push origin main  # or…
vercel deploy --prod  # via CLI
```

Vercel project: `raar-lifestyle` under `botsmithgos-projects`. Alias: `raar-lifestyle.vercel.app`. When wiring a real domain:
1. In Vercel → Project → Domains → Add `raarlifestyle.com`
2. Update DNS at registrar (CNAME or A records per Vercel instructions)
3. HTTPS certificate issues automatically

---

## 8. Starting a new brand from this template

1. `cp -r Adsmaa/ new-brand/` (or clone the repo and rename)
2. Update `package.json` name, `app/[locale]/layout.tsx` metadata, `public/favicon.ico`
3. Replace brand tokens in `app/globals.css` (colors, fonts if changing)
4. Replace wordmark in `components/MirrorWordmark.tsx` (or build a new one)
5. Replace all copy in `messages/en.json` + `messages/fr.json`
6. Swap hero video/image, service images, itinerary images, destination images in `lib/services.ts` and section files
7. Decide: same 10-service structure, or different? Same signature section (rotating itinerary), or different pattern? (The horizontal pinned scroll + italic rose accent + mirror wordmark moves are reusable — but the brand should feel distinct. Change at least the palette, fonts, and one signature moment.)

---

## 9. Known quirks / gotchas

- **Lenis vs programmatic `window.scrollTo`**: Lenis's RAF loop can fight `scrollTo()`. For automated testing, remove the `lenis` class from `<html>` before scripted scrolling. Real users with wheel/touch are unaffected.
- **`unoptimized: true` on images**: we opted out of Next's image proxy because remote Unsplash fetches timed out in dev. Unsplash serves sized variants via query params (`?w=1600&q=85`). If you host your own optimized images, flip this back to `false` and configure `remotePatterns` properly.
- **`react/jsx-key` in RevealLines arrays**: each JSX node passed into the `lines={[…]}` array needs an explicit `key="l1"` etc. Fragments (`<>…</>`) don't trigger the rule but also can't take keys.
- **Hero eyebrow crowding the wordmark pipe**: on tall headlines, the `|` reaches into the eyebrow space. Fix with `mb-14 md:mb-20` on the eyebrow + dial wordmark `xl` size down (we use `text-[15vw] md:text-[19vw]`).
- **Next.js 16 `middleware.ts` deprecation warning**: it works but the new convention is `proxy.ts`. Safe to ignore until next-intl officially migrates.

---

## 10. North stars

- If a client looks at it for 3 seconds and says *"this feels expensive"* — it's working.
- If a client reads one sentence and thinks *"they get me"* — the copy is working.
- If they forward the URL to a friend before finishing the page — the design is working.
- When in doubt: **more whitespace, fewer words, one italic rose accent.**
