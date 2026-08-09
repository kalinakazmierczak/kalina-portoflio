# Design — kalina kazmierczak portfolio

A locked design system for this site. Every page redesign reads this file before
emitting code. Do not regenerate per tab — extend or amend this file when the
system needs to grow.

Built by `hallmark redesign` (multi-page flow) on 2026-08-08.

## Genre

**editorial** — content-led, hairlines over card borders, asymmetric, quiet motion.

## Brief context

- **Audience** · recruiters and hiring managers at design-forward companies, Pinterest specifically.
- **Use case** · one action — read enough to reach out (email / résumé / LinkedIn).
- **Tone** · soft editorial moodboard. Pinterest-native, curated, personal. Competent
  engineer first, aesthetic second — the craft has to be legible under the softness.

## Macrostructure families

Pages share the system; they vary only in macrostructure and component archetype.

- **Index page (home)** · `20 · Ecosystem Index` — several discovery surfaces stacked
  as titled rails: intro → currently → pin masonry → ask-me. Browsing *is* the value.
- **Work pages (projects)** · `18 · Portfolio Grid` — masonry cards with size variation.
- **List pages (work, writing)** · `11 · Catalogue` — hairline-ruled indexed rows.
- **Close page (contact)** · `12 · Letter` — first-person, no buttons in the fold.

## Theme

Custom (tuned), **two modes**. Anchor hue **44° burnt orange**. Full token set in
[`tokens.css`](tokens.css), which is the only place colour is defined.

Palette sourced from [pinterest.com/kalinakazmie](https://www.pinterest.com/kalinakazmie/):
olive, rust, cherry and slate read off nail-art and mid-century interiors; warm
cream grounds; true black carrying graphic weight. Muted but **saturated** — not pastel.

| Token | Light | Dark |
| --- | --- | --- |
| `--color-paper` | `oklch(96% 0.014 72)` | `oklch(16% 0.012 50)` |
| `--color-paper-2` | `oklch(92.5% 0.016 70)` | `oklch(20% 0.013 50)` |
| `--color-paper-3` | `oklch(98.5% 0.010 74)` | `oklch(24% 0.013 52)` |
| `--color-ink` | `oklch(19% 0.014 48)` | `oklch(93% 0.012 74)` |
| `--color-ink-2` | `oklch(38% 0.013 46)` | `oklch(76% 0.011 70)` |
| `--color-muted` | `oklch(50% 0.012 50)` | `oklch(62% 0.010 60)` |
| `--color-rule` | `oklch(84% 0.014 64)` | `oklch(32% 0.012 54)` |
| `--color-rule-strong` | `oklch(60% 0.014 54)` | `oklch(55% 0.013 54)` |
| `--color-graphite` | `oklch(16% 0.010 50)` | `oklch(93% 0.012 74)` |
| `--color-accent` | `oklch(56% 0.145 44)` | `oklch(68% 0.125 46)` |
| `--color-accent-deep` | `oklch(44% 0.135 42)` | `oklch(76% 0.115 48)` |
| `--color-focus` | `oklch(54% 0.19 44)` | `oklch(72% 0.16 46)` |

**Axes** · light+dark / roman-serif / chromatic-burnt-orange

### Dark mode rules

- Hue anchors never move between modes. Only lightness and chroma shift.
- Elevation is **lighter**, never darker — `paper → paper-2 → paper-3` climbs in L.
- Accent loses ~0.02 chroma and gains ~12% L so it doesn't vibrate on a dark ground.
- `--color-graphite` **inverts**: near-black on light, cream on dark. It is a surface
  colour for the footer band and section rules, never a text colour. Text on it is
  always `--color-on-graphite`.
- Grain drops from 0.035 to 0.022 — noise reads louder on a dark ground.
- Resolution order: explicit `[data-theme]` wins, else `prefers-color-scheme`, else light.
  An inline script in `index.html` applies the stored choice before first paint.
- Contrast is verified in **both** modes. Every value in the table above clears
  WCAG AA against its surfaces (body 4.5, large/UI 3.0).

### The one-accent rule, and the washes

Burnt orange is the **only** accent. It marks the active tab, the focus ring, link
hover, the wordmark period, and nothing else. Budget: ≤3% of any viewport.

The four **washes** (`--wash-olive`, `--wash-rust`, `--wash-cherry`, `--wash-slate`)
are **surface tints only**: pin cards, project cards. Never text, never borders, never
state. They cycle in a fixed order keyed to item index, so the rhythm is deterministic.
`--color-muted` must never sit on a wash — it only clears 4.24:1. Use `--color-ink-2`.

### Editorial register

Four moves carry it, and they replace decoration rather than adding to it:

- **Thick graphite rule above every section head** — the ordinal device, which is why
  section heads ship no eyebrows.
- **Standfirst** — the intro tagline set in the display face at reading size with a
  rule beneath, then body drops to the sans. This is the lede.
  *(A drop cap was tried and removed: the copy opens on a lowercase "i" plus an
  apostrophe, which `::first-letter` swallows as one unit.)*
- **Graphite footer band** — the page closes on a hard tonal flip, not another hairline.
- **Double rule under the masthead** — thick over hair.

## Typography

- **Display** · Fraunces, weight 600, style **normal** (roman — italic headers are banned),
  variable axes `"SOFT" 32, "WONK" 1`
- **Body** · Switzer, weight 400 (Fontshare)
- **Outlier** · IBM Plex Mono, weight 400/500 — **meta/label role only**: eyebrow labels,
  dates, tags, terminal. Never body, never headings.
- **Display tracking** · −0.025em
- **Type scale anchor** · major third (1.25); `--text-display: clamp(2.75rem, 5vw + 1rem, 5.25rem)`
- **Measure** · 65ch on prose

Three families is the ceiling. Do not add a fourth.

## Spacing

4-point named scale, values in [`tokens.css`](tokens.css). Pages use named tokens
(`var(--space-md)`), never raw values. Section rhythm is deliberately uneven — the
intro band is tighter than the pin rail, which is tighter than the close.

## Motion

- Easings · `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)`, plus `--ease-in`, `--ease-in-out`.
  Never the bare `ease` keyword, never overshoot on UI state.
- **One orchestrated entrance** — the tab-change crossfade. Nothing else animates on
  scroll. No stagger, no reveal-on-intersection.
- Hover carries **one** signal per element, not four.
- Reduced-motion · all spatial motion collapses to a ≤150ms opacity crossfade.
- Animate `transform` and `opacity` only.

## Microinteractions stance

- Silent success. No celebratory toasts.
- Focus rings appear **instantly** — never transitioned.
- Every hover affordance has a focus equivalent and works on coarse pointers.
- Hover tooltips delay 800ms; focus tooltips delay 0ms.

## CTA voice

- **Primary** · typographic link with a drawn underline that thickens on hover
  (`C3 Typographic link CTA`). No filled pill buttons in prose.
- **Secondary** · outlined chip, rectangular with `--radius-input`, mono label.
- Copy pattern · lowercase, verb-first, short. "read the paper", not "Click here to
  learn more about this research".

## Per-page allowances

- Home MAY carry imagery (the pin masonry + real photography). It is the only page
  with a dense image surface.
- Projects MAY carry one image per card.
- Work, Writing, Contact are **typography only**. No enrichment.
- No page may use a fake browser bar, phone frame, or terminal window chrome.

## What pages MUST share

- The N6 masthead and the Ft6 letter-close footer.
- The burnt-orange accent and its ≤3% placement.
- Fraunces / Switzer / IBM Plex Mono, in their assigned roles.
- The eyebrow → heading vertical stack (never tag-left / heading-right).
- Section rhythm: mono eyebrow, Fraunces heading directly beneath, one-line description.

## What pages MAY differ on

- Macrostructure within the family declared above.
- Which wash tints appear.
- Vertical rhythm between sections.

## Preserved, do not redesign

- `netlify/functions/now-playing.js` and `src/components/SpotifyNowPlaying.jsx` —
  logic untouched by explicit request. Only its container styling participates in the system.
- All project, work, and writing copy and case-study content.
- The five-tab information architecture.

## Exports

### tokens.css

Canonical. See [`tokens.css`](tokens.css) at the project root.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper:       oklch(96.5% 0.012 68);
  --color-paper-2:     oklch(93.5% 0.014 66);
  --color-paper-3:     oklch(98.4% 0.008 70);
  --color-ink:         oklch(23% 0.016 42);
  --color-ink-2:       oklch(41% 0.014 44);
  --color-muted:       oklch(52% 0.012 48);
  --color-rule:        oklch(86% 0.012 60);
  --color-rule-strong: oklch(62% 0.014 52);
  --color-accent:      oklch(56% 0.125 34);
  --color-accent-deep: oklch(44% 0.115 32);
  --color-focus:       oklch(54% 0.19 34);
  --font-display:      "Fraunces", ui-serif, Georgia, serif;
  --font-body:         "Switzer", ui-sans-serif, system-ui, sans-serif;
  --font-outlier:      "IBM Plex Mono", ui-monospace, monospace;
  --spacing-sm:        1rem;
  --spacing-md:        1.5rem;
  --spacing-lg:        2rem;
  --text-md:           1.125rem;
  --ease-out:          cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper":       { "$value": "oklch(96.5% 0.012 68)", "$type": "color" },
    "ink":         { "$value": "oklch(23% 0.016 42)",   "$type": "color" },
    "accent":      { "$value": "oklch(56% 0.125 34)",   "$type": "color" },
    "accent-deep": { "$value": "oklch(44% 0.115 32)",   "$type": "color" }
  },
  "font": {
    "display": { "$value": "Fraunces", "$type": "fontFamily" },
    "body":    { "$value": "Switzer",  "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1.5rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background:         96.5% 0.012 68;
  --foreground:         23%   0.016 42;
  --primary:            44%   0.115 32;
  --primary-foreground: 97%   0.010 68;
  --muted:              93.5% 0.014 66;
  --muted-foreground:   52%   0.012 48;
  --border:             86%   0.012 60;
  --input:              62%   0.014 52;
  --ring:               54%   0.19  34;
  --radius:             10px;
}
```
