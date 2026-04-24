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
│   │   ├── layout.tsx          # fonts, cursor, smooth scroll, nav, provider, metadata, hreflang <link>s, Analytics
│   │   ├── page.tsx            # composes all sections
│   │   ├── opengraph-image.tsx # per-locale 1200×630 branded OG card (ImageResponse)
│   │   └── twitter-image.tsx   # re-exports the OG
│   ├── sitemap.ts              # /, /fr with xhtml:link alternates
│   ├── robots.ts               # allow-all incl. AI bots explicitly
│   ├── manifest.ts             # PWA manifest
│   ├── icon.tsx                # 32×32 R monogram (ImageResponse)
│   ├── apple-icon.tsx          # 180×180 R monogram
│   ├── favicon.ico             # legacy fallback
│   └── globals.css             # tokens + tailwind layers + keyframes
├── components/
│   ├── Nav.tsx                 # sticky, surface-aware (dark/light auto)
│   ├── SmoothScroll.tsx        # Lenis wrapper
│   ├── CustomCursor.tsx        # ring + dot, disables on touch
│   ├── MagneticButton.tsx      # pulls toward cursor
│   ├── RevealText.tsx          # word/line staggered scroll reveal (accepts `as` prop)
│   ├── MirrorWordmark.tsx      # the animated logo mark
│   ├── LanguageToggle.tsx      # 🇬🇧/🇫🇷 switcher
│   ├── StructuredData.tsx      # JSON-LD @graph (Organization, Person, WebSite, Service)
│   └── sections/
│       ├── Hero.tsx            # contains the one <h1> (tagline)
│       ├── Welcome.tsx         # <h2>
│       ├── Manifesto.tsx       # <h2>
│       ├── ServicesHorizontal.tsx      # pinned horizontal scroll — signature. <h2>
│       ├── SignatureExperiences.tsx    # rotating seasonal itinerary. <h2>
│       ├── Founder.tsx         # <h2>
│       ├── Quotes.tsx          # single centerpiece quote (as <blockquote>)
│       ├── Marquee.tsx         # destination carousel. <h2>
│       ├── Contact.tsx         # mailto form + contact rail. <h2>
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
├── middleware.ts               # next-intl middleware + file-convention route exemptions
├── next.config.ts              # next-intl plugin + image config
└── public/
    ├── images/                 # client-supplied imagery (founder, itinerary moments, etc.)
    └── llms.txt                # brand brief for LLM crawlers
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
8. Run the SEO swap — see §10 for the file-by-file checklist (`SITE_URL`, org/person/founder fields, OG tokens, etc.).

---

## 9. Known quirks / gotchas

- **Lenis vs programmatic `window.scrollTo`**: Lenis's RAF loop can fight `scrollTo()`. For automated testing, remove the `lenis` class from `<html>` before scripted scrolling. Real users with wheel/touch are unaffected.
- **`unoptimized: true` on images**: we opted out of Next's image proxy because remote Unsplash fetches timed out in dev. Unsplash serves sized variants via query params (`?w=1600&q=85`). If you host your own optimized images, flip this back to `false` and configure `remotePatterns` properly.
- **`react/jsx-key` in RevealLines arrays**: each JSX node passed into the `lines={[…]}` array needs an explicit `key="l1"` etc. Fragments (`<>…</>`) don't trigger the rule but also can't take keys.
- **Hero eyebrow crowding the wordmark pipe**: on tall headlines, the `|` reaches into the eyebrow space. Fix with `mb-14 md:mb-20` on the eyebrow + dial wordmark `xl` size down (we use `text-[15vw] md:text-[19vw]`).
- **Next.js 16 `middleware.ts` deprecation warning**: it works but the new convention is `proxy.ts`. Safe to ignore until next-intl officially migrates.
- **Satori (`next/og`) does NOT accept WOFF2.** When loading Google Fonts inside `ImageResponse`, do NOT send a modern `User-Agent` header — Google returns `.woff2` and Satori throws `Unsupported OpenType signature wOF2`. Omit the header entirely; Google's default response is a direct `.ttf` URL that Satori can parse. See [`opengraph-image.tsx`](./app/[locale]/opengraph-image.tsx) for the working pattern.
- **Next 16's `alternates.languages` doesn't emit hreflang `<link>` tags reliably** when the app uses a `[locale]` dynamic segment — x-default gets dropped, and some runs duplicate en/fr. Render them explicitly in the layout body as `<link rel="alternate" hrefLang="…" href="…" />` (Next hoists server-component `<link>`s into `<head>`). React will serialize the attribute as `hrefLang` (camelCase), which HTML parsers are case-insensitive about — Google, Bing, etc. all accept it.
- **next-intl middleware redirects `/en/*` → `/*`** with `localePrefix: 'as-needed'`. That normally is what you want, but it breaks file-based metadata routes under `app/[locale]/` (e.g. `/en/opengraph-image` would 307 to `/opengraph-image` which 404s). Solution: extend the middleware matcher to skip any path containing `/opengraph-image`, `/twitter-image`, `/icon`, `/apple-icon` — see [`middleware.ts`](./middleware.ts).
- **Wix domains: DNS change alone isn't enough.** A domain can still be "assigned" to a Wix site at the platform level; Wix's CDN keeps serving the old Coming Soon page (or an "unclaimed domain" page) even after DNS points elsewhere. The fix is `Wix → Domains → [domain] → ⋯ → Unassign from this site`. Don't click "Try Again" on the "Your domain is set to point away from Wix" banner — that resets DNS back to Wix.
- **Local DNS cache vs global DNS.** After DNS changes, `dig @1.1.1.1` can return the new records while your local resolver (ISP + VPN + OS) still returns the old ones. Always verify via mobile data before assuming the site isn't live — and test with `curl --resolve host:443:NEW_IP https://host` to prove the origin is serving correctly.

---

## 10. SEO + AI-search scaffolding

The site's SEO pass assumes the three user decisions that were made for RAAR and are reasonable defaults for any luxury brand launch:

1. **AI crawlers: allow all.** Discovery upside is pure for a new brand nobody's heard of yet. `robots.ts` explicitly allows GPTBot, ClaudeBot, PerplexityBot, CCBot, Google-Extended, Applebot-Extended, etc. — wildcards alone aren't always honoured by UAs that special-case themselves.
2. **OG image: branded card via `ImageResponse`.** Dark ink bg + giant wordmark + italic-rose tagline, per-locale. Not a hero photo (no brand identity), not the founder portrait (too LinkedIn).
3. **Analytics: Vercel Analytics + Speed Insights only.** Free on Pro, zero-config, privacy-friendly, no cookie banner needed. GA4 layered on later if conversion funnels are needed.

### What lives where

| Concern | File | Output URL |
|---|---|---|
| Sitemap with hreflang alternates | [`app/sitemap.ts`](./app/sitemap.ts) | `/sitemap.xml` |
| Robots with allow-all AI policy | [`app/robots.ts`](./app/robots.ts) | `/robots.txt` |
| PWA manifest | [`app/manifest.ts`](./app/manifest.ts) | `/manifest.webmanifest` |
| Browser icon | [`app/icon.tsx`](./app/icon.tsx) | `/icon` |
| Apple touch icon | [`app/apple-icon.tsx`](./app/apple-icon.tsx) | `/apple-icon` |
| Per-locale OG image | [`app/[locale]/opengraph-image.tsx`](./app/[locale]/opengraph-image.tsx) | `/en/opengraph-image`, `/fr/opengraph-image` |
| Per-locale Twitter card | [`app/[locale]/twitter-image.tsx`](./app/[locale]/twitter-image.tsx) | `/en/twitter-image`, `/fr/twitter-image` |
| LLM crawler brief | `public/llms.txt` | `/llms.txt` |
| JSON-LD @graph | [`components/StructuredData.tsx`](./components/StructuredData.tsx) | inline `<script>` in `<head>` |
| Metadata API (titles, canonical, OG, Twitter, robots, …) | [`app/[locale]/layout.tsx#generateMetadata`](./app/[locale]/layout.tsx) | `<head>` tags |
| Hreflang `<link>`s (rendered manually — Next quirk) | [`app/[locale]/layout.tsx`](./app/[locale]/layout.tsx) `<body>` | `<head>` tags (hoisted) |

### Heading hierarchy contract

Exactly **one `<h1>`** on the page (the Hero tagline, prefixed with `sr-only` brand name for bots). Every major section gets one `<h2>`. `RevealLines` accepts an `as` prop (default `"div"`) so headlines keep their motion treatment while emitting real heading tags. The Quotes section uses `as="blockquote"` — semantically correct and Google gives weight to blockquoted content. `font-normal` is applied to every promoted h1/h2 because the browser-default bold fights `display`/`display-italic`.

### JSON-LD graph

The `StructuredData` component emits a single `<script type="application/ld+json">` with a `@graph` containing:
- **Organization** — name, url, logo (→ `/apple-icon`), description, foundingDate, founder `@id` ref, areaServed, sameAs (Instagram), contactPoint (email + languages).
- **Person** — founder bio with localized jobTitle.
- **WebSite** — with `inLanguage`.
- **Service** — single summary covering the 10 verticals, four `serviceType` values.

All four cross-reference via `@id` (`#organization`, `#founder`, `#website`, `#service`) so Google treats them as one connected graph.

### Starting SEO for a new brand using this template

1. In `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `public/llms.txt`, `components/StructuredData.tsx`, and `app/[locale]/opengraph-image.tsx`: swap `SITE_URL`, brand name, descriptions, founder name, Instagram handle, contact email, and the 10-service summary. Search for `raarlifestyle.com` and `RAAR` to find every reference.
2. Set brand tokens in the OG image file to match `globals.css` (ink, sand, rose, gold).
3. In `app/[locale]/layout.tsx#generateMetadata`, update localized titles, descriptions, keywords, and applicationName.
4. If the new brand isn't Dubai-based, update the `organization.areaServed` array in `StructuredData.tsx` and the `applicable regions` in robots.
5. Confirm `middleware.ts` still has the file-convention route exclusions — copy the matcher as-is.
6. Deploy. Run the verification checks below.

### Verification checklist (post-deploy)

```bash
SITE=https://www.<brand>.com
for path in /sitemap.xml /robots.txt /llms.txt /manifest.webmanifest /icon /apple-icon /en/opengraph-image /fr/opengraph-image; do
  printf "%-30s " "$path"; curl -sI "$SITE$path" | head -1
done

# Head signals
curl -s "$SITE/" | grep -oiE '(rel="alternate" [^>]*hreflang[^>]*>|rel="canonical"[^>]*>|og:image[^>]*|application/ld\+json)' | sort -u

# Heading audit
curl -s "$SITE/" | grep -oE '<h[1-2] [^>]{0,60}'
```

Then: Facebook Sharing Debugger, LinkedIn Post Inspector, Google Rich Results Test, Schema.org Validator, Lighthouse (mobile, SEO category → target 100). Submit sitemap to Google Search Console.

---

## 11. North stars

- If a client looks at it for 3 seconds and says *"this feels expensive"* — it's working.
- If a client reads one sentence and thinks *"they get me"* — the copy is working.
- If they forward the URL to a friend before finishing the page — the design is working.
- When in doubt: **more whitespace, fewer words, one italic rose accent.**
