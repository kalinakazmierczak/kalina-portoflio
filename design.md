# Design — kalina kazmierczak portfolio

A locked design system for this site. Every redesign reads this file before
emitting code. Do not regenerate per section — extend or amend this file when
the system needs to grow.

Rewritten by `hallmark redesign` on 2026-08-09, replacing the retro-editorial
system of the previous build at the user's explicit request ("blow it up —
new everything"). The only things carried across are the content, the Spotify
tracker, and the light/dark discipline.

## Genre

**playful** — scrapbook surfaces, tactile depth, hover-responsive motion,
warm-but-exact voice. Never childish; the craft has to stay legible to a
recruiter skimming for competence.

## Brief context

- **Audience** · recruiters and hiring managers at design-forward companies,
  Pinterest specifically.
- **Use case** · one action — read enough to reach out (email / résumé / LinkedIn).
- **Tone** · vintage scrapbook. Pinned paper, taped-down cards, cut-out stickers.
  **"Loud but legible"** is the governing dial, chosen explicitly: whimsy lives in
  the margins, rigor lives in the spine. A recruiter must still get the
  engineering credentials in ten seconds.

## Macrostructure

**One page, top to bottom.** The five-tab SPA is gone — tabs hid four fifths of
the work behind a click, and a recruiter reads a portfolio in one scroll.

`01 · Bento Grid` — a pinboard of mixed-span pins. Rhythm comes from **size
variation**, never from a row of matching cards. Sections, in DOM order, each
with a stable `id` so the rail and any old deep links resolve:

`#hello` → `#now` → `#work` → `#projects` → `#writing` → `#ask` → `#contact`

- **Nav** · `N3 Side-rail` — fixed vertical rail ≥64rem, one sticker per section.
  Below that, a sticky two-row top bar: brand + toggle above, a full-width
  horizontal link scroller below.
- **Footer** · **postcard close** — a cream postcard lying on the tonal-flip
  band: message left, address right, divided by a rule the way a real postcard
  back is. Stamp + postmark in the corner, one cut-out stuck on the card.

  **It replaced an Ft8 marquee, which was cut for reading as templated.** An
  infinite horizontal scroll is decoration doing a job the last thing on the
  page shouldn't be doing — it pulls the eye and never settles. The postcard
  earns the space because the *shape is the content*: the divided back is why
  the contact links are laid out the way they are, instead of being a row of
  links under a border.

  Two implementation notes worth keeping: the stamp's perforations are a dotted
  border drawn in the **postcard's** colour, so the dots read as holes punched
  through to the card beneath. A `mask-composite: intersect` recipe was tried
  first and erased the stamp entirely — `repeat-x`/`repeat-y` edge layers each
  cover only a single strip, so intersecting all five leaves nothing.

## Theme

Custom (tuned), **two modes**. Anchor hue **25° cherry**. Full token set in
[`tokens.css`](tokens.css), which is the only place colour is defined.

**The palette is sampled from Kalina's own stickers, not invented.** Dominant
chromatic values were extracted per cut-out and clustered into four families:

| Family | Hue | Read off |
| --- | --- | --- |
| marigold | ~74–80° | embroidered cat patch, kitty, apple, sticky note |
| cherry | ~25–29° | beaded horses, lotus |
| olive | ~107–112° | hummingbird, pressed flower, reader figurine |
| ink-blue | ~248° | the kitty's "Bonjour!" shirt, the Ctrl legend |

That sampling is why the page and the stickers sit together instead of arguing.
**If the sticker set changes materially, re-sample rather than guessing.**

| Token | Light | Dark |
| --- | --- | --- |
| `--color-paper` | `oklch(95.5% 0.016 78)` | `oklch(17% 0.016 56)` |
| `--color-paper-2` | `oklch(92.2% 0.020 76)` | `oklch(21% 0.017 56)` |
| `--color-paper-3` | `oklch(98.6% 0.009 80)` | `oklch(25.5% 0.018 58)` |
| `--color-ink` | `oklch(19% 0.018 42)` | `oklch(93% 0.014 78)` |
| `--color-ink-2` | `oklch(38% 0.016 44)` | `oklch(76% 0.013 74)` |
| `--color-muted` | `oklch(50% 0.014 50)` | `oklch(63% 0.012 62)` |
| `--color-rule` | `oklch(83% 0.018 74)` | `oklch(32% 0.016 58)` |
| `--color-accent` | `oklch(48% 0.175 25)` | `oklch(70% 0.145 27)` |
| `--color-flip` | `oklch(17% 0.014 50)` | `oklch(93% 0.014 78)` |

**Axes** · light+dark / geometric-sans / warm-cherry ~25°

### The accent is set by the washes, not by the paper

`--color-accent` is **L48, not L51**. Links sit on the wash-tinted pins, not on
paper, and the wash is the tighter constraint: at L51 the link cleared paper
easily but measured **4.43:1** against `--wash-cherry` — a fail. At L48 the
worst measured pair on the whole page is 5.08:1.

Any future accent change must be re-checked **against the washes**, not the paper.

### The washes

`--wash-marigold` `--wash-olive` `--wash-rose` `--wash-blue` `--wash-cherry`
are **surface tints only**: pin backgrounds. Never text, never borders, never
state. `--color-muted` must never sit on a wash — use `--color-ink-2`.

### Dark mode rules

- Hue anchors never move between modes. Only lightness and chroma shift.
- Elevation is **lighter**, never darker — `paper → paper-2 → paper-3` climbs in L.
- Shadows stay tight on dark; a soft halo around a card on a dark ground is the
  shadow-glow tell. Elevation is carried by lightness.
- **Tape must sit lighter than the card it holds down.** At the light-mode value
  it vanished into the dark washes entirely.
- Grain drops from 0.055 to 0.035 — noise reads louder on a dark ground.
- Resolution order: explicit `[data-theme]` wins, else `prefers-color-scheme`,
  else light. An inline script in `index.html` applies the stored choice before
  first paint.
- **Contrast is verified in both modes.** 133 text/background pairs per mode,
  266 total, zero failures, floor 4.5:1 (3:1 large). Re-run that audit after any
  colour change.

## Typography

Three families, which is the ceiling.

- **Display** · Bricolage Grotesque, weight 800 (600 on leads), style **normal**
  (roman — italic headers are banned). `wdth` 92 on the hero name.
- **Body** · Newsreader, weight 400. Runs small, so `--text-base` is `1.0625rem`.
- **Outlier** · Space Mono — **one role only**: machine/meta text. Labels, years,
  tags, the terminal, now-playing, nav, chips. Never body, never a heading.
- **Display tracking** · −0.035em · **scale anchor** · major third (1.25)
- `--text-display: clamp(2.35rem, 10.5vw, 5.75rem)` — the floor is set by what
  clears "kazmierczak." at 320px minus gutters, not by what looks big.

## Spacing & motion

4-point named scale in [`tokens.css`](tokens.css); pages use named tokens, never
raw values. Section rhythm is deliberately uneven — the hero breathes, `now`
sits tight beneath it, `projects` and `contact` open up again.

- Easings · `--ease-out` `cubic-bezier(0.16, 1, 0.3, 1)`, plus `--ease-in`,
  `--ease-in-out`. Never the bare `ease`, never overshoot on UI state.
- Hover carries **one** signal per element, and only under
  `(hover: hover) and (pointer: fine)`.
- Focus rings appear **instantly** — never transitioned.
- Reduced motion · the marquee and the now-playing pulse **stop outright**
  (infinite loops), spatial motion collapses to ≤150ms.
- Animate `transform` and `opacity` only.

## The stickers

The site's whole personality. **32 cut-outs** in `public/stickers/`, drawn from
Kalina's own collection.

- **Real alpha, not `mix-blend-mode`.** The sources are JPEGs on white/cream
  grounds. Multiply works on light paper but leaves the subject invisible on
  near-black, and screen leaves a grey plate. The mattes were flood-filled from
  the borders, feathered, and **decontaminated** (un-premultiplied against the
  matte) so no white fringe survives on dark. Shipped as WebP: 2.8 MB → 548 KB.
- **`alt=""` + `aria-hidden` always.** They carry no information the page
  depends on.
- **Sizing lives in CSS, not in the `width` prop.** The prop writes an inline
  custom property, which outranks the responsive rules.
- **Placement is meaningful, not scattered** — eyes on the hidden-figures
  visualisation, an apple on the food-journaling app, a hummingbird on the
  kinetic sculpture, a Ctrl keycap on the engineering role.
- Two assets need special handling: **snoopy** is a 148px sprite and carries
  `image-rendering: pixelated`; **eyes** is 553×143 and needs ≥6rem or it
  shrinks to a smudge.
- **`kitty-records`** doubles as the turntable's no-album-art label — it is
  literally a record label, so the fallback reads as intentional.
- Two source files in the intake folder — `cool_cat.png` and `horseshoe.png` —
  are **fully transparent** (alpha range 0–0). They are broken exports, not
  cut-out failures, and are excluded. Re-export them if they're wanted.

### Where they go — three placements, three rules

1. **Anchored marks** (`band__mark`, `pin__mark`, `project__mark`) — tied to
   meaning: eyes on hidden-figures, an apple on the food app, a Ctrl keycap on
   the engineering role, GRL PWR on the work history, coffee on the stack.
2. **Scatter** (`Scatter.jsx` + `SCATTER` in `stickers.js`) — loose pins in the
   *gap below* each section. **Never over content:** the band's own bottom
   padding is the only strip guaranteed empty at every width no matter how the
   copy reflows, so a pin parked there can't land on a line of text. Verified by
   rect-intersection against every text-bearing element — zero overlaps at 320 /
   375 / 414 / 768 / desktop. Pins flagged `sm: true` survive on phones; the
   rest appear from 46rem, where there's margin to park in.
3. **The trail** — see below.

There is deliberately **no collage/gallery section**. A wall of stickers was
tried and cut: the icons belong scattered through the page, not quarantined
into an exhibit.

### The sticker trail (cursor)

Cut-outs drop behind the pointer as it travels, sized **18–30px**. They were
34–58px and covered the body copy — at the ceiling a pin masked most of a line.
Alongside the size cut, each pin now starts fading at 35% of its life instead of
60%, so it spends less time opaque over text. The pool is also restricted to
cut-outs that still read at that size; the finely detailed ones (the libra tarot
card, the Kitty Records label, the eyes) turn to mush and are excluded.

Deliberately **not** a
cursor-follower dot: nothing lags the pointer and nothing replaces the native
cursor. Spawning is keyed to **distance travelled** (~90px), not to time or
event count, so density is identical whether you flick or drag, and a stationary
pointer emits nothing. Capped at 12 live, ~950ms life, never the same sticker
twice running. Off under `(pointer: coarse)` and `prefers-reduced-motion`.
Nodes are created and removed directly — at ~8 spawns/second, React state would
re-render the tree for a purely decorative layer.

## The turntable ("on repeat")

The Spotify pin is a CSS-built deck: platter, grooves, album-art label, spindle,
and a tonearm on a pivot post that sits **off** the disc, the way a real deck is
built. Tier A (pure CSS) — a disc, a label and an arm are three rounded boxes and
a gradient; a Lottie for that would be 50–500 KB for something CSS does in bytes.

**The motion is the status readout, which is the only reason an infinite
animation is allowed here.** The platter spins *only* while audio is actually
playing and stops on its own the moment it isn't — the same category as a
progress indicator, not decoration. The arm reports the same state by position,
so the information survives `prefers-reduced-motion`, where the spin and the
accent pip both stop outright.

Arm geometry is worked from the pivot, not eyeballed:

| State | Rotation | Where the tip lands |
| --- | --- | --- |
| playing | `32deg` | on the grooves, between label and rim |
| has a track, not playing | `10deg` | clear of the rim — lifted |
| nothing loaded | `2deg` | fully parked |

**Three states, all of which must render something.** `currently listening to` ·
`last listened to` (Kalina asked for this one specifically — it is the
`isPlaying: false` + `title` branch) · and a quiet "nothing on" fallback. The
widget can never return `null`: it has its own pin now, and an empty tile reads
as a broken card rather than as silence.

### Dark-mode rim — load-bearing, not decoration

A record has to be the darkest thing on the card, but the dark washes are
themselves `L 27–28`. At `L 31` the disc measured **1.13:1** against
`--wash-olive` and effectively disappeared. Two dark values cannot reach 3:1
against each other, so the *boundary* carries it: `--color-vinyl-rim` gives
**4.27:1** against the pin and **5.18:1** against the disc. The disc was also
dropped to `L 20` so it reads as darker than its card. **Do not remove the rim.**

## Preserved, do not redesign

- `netlify/functions/now-playing.js` — fetch/refresh/fallback logic untouched.
  **Additive change only:** the responses now also carry `albumArt` (Spotify's
  smallest image — it sorts largest-first), `album`, and `songUrl`. Field names
  and meanings of the originals are unchanged, so a stale deployed function
  degrades to a bare label and a search link instead of breaking.
- `src/components/SpotifyNowPlaying.jsx` — fetch/poll logic untouched.
- All project, work, and writing copy.

## Known inconsistency, not fixed

The console easter egg in `src/main.jsx` says **"dc → nyc"**, while the page copy
says "based in dc" throughout. It also hard-codes `#D4739A`, a pink from the
previous palette. Left alone because it is content, not design — flag to Kalina.

## Exports

### tokens.css

Canonical. See [`tokens.css`](tokens.css) at the project root.

### Tailwind v4 `@theme`

```css
@theme {
  --color-paper:       oklch(95.5% 0.016 78);
  --color-paper-2:     oklch(92.2% 0.020 76);
  --color-paper-3:     oklch(98.6% 0.009 80);
  --color-ink:         oklch(19% 0.018 42);
  --color-ink-2:       oklch(38% 0.016 44);
  --color-muted:       oklch(50% 0.014 50);
  --color-rule:        oklch(83% 0.018 74);
  --color-accent:      oklch(48% 0.175 25);
  --color-accent-deep: oklch(41% 0.150 24);
  --color-focus:       oklch(54% 0.200 25);
  --font-display:      "Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif;
  --font-body:         "Newsreader", ui-serif, Georgia, serif;
  --font-outlier:      "Space Mono", ui-monospace, monospace;
  --spacing-sm:        1rem;
  --spacing-md:        1.5rem;
  --spacing-lg:        2rem;
  --text-md:           1.25rem;
  --ease-out:          cubic-bezier(0.16, 1, 0.3, 1);
}
```

### DTCG `tokens.json`

```json
{
  "color": {
    "paper":       { "$value": "oklch(95.5% 0.016 78)", "$type": "color" },
    "ink":         { "$value": "oklch(19% 0.018 42)",   "$type": "color" },
    "accent":      { "$value": "oklch(48% 0.175 25)",   "$type": "color" },
    "accent-deep": { "$value": "oklch(41% 0.150 24)",   "$type": "color" }
  },
  "font": {
    "display": { "$value": "Bricolage Grotesque", "$type": "fontFamily" },
    "body":    { "$value": "Newsreader",          "$type": "fontFamily" }
  },
  "space": {
    "md": { "$value": "1.5rem", "$type": "dimension" }
  }
}
```

### shadcn/ui CSS variables

```css
:root {
  --background:         95.5% 0.016 78;
  --foreground:         19%   0.018 42;
  --primary:            48%   0.175 25;
  --primary-foreground: 97%   0.012 80;
  --muted:              92.2% 0.020 76;
  --muted-foreground:   50%   0.014 50;
  --border:             83%   0.018 74;
  --input:              56%   0.018 62;
  --ring:               54%   0.200 25;
  --radius:             10px;
}
```
