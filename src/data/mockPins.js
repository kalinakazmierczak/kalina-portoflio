/**
 * ★ MOCK PIN DATA — the swap point.
 *
 * This file exists so the "what i've been pinning" module has a real UI before
 * Pinterest credentials are wired up. It is consumed in exactly one place:
 * `netlify/functions/pinning.js`, as provider C (the last fallback in the chain).
 *
 * ── HOW TO GO LIVE ───────────────────────────────────────────────────────────
 * You do NOT need to edit this file, and you do NOT need a Pinterest developer
 * account. Set two environment variables in Netlify and providers A/B take over:
 *
 *     PINTEREST_USERNAME = kalinakazmierczak
 *     PINTEREST_BOARDS   = board-slug-one,board-slug-two      (optional)
 *
 * The function keeps this file as its fallback forever, so the module still
 * renders if Pinterest is slow, rate-limits, or changes its feed format.
 *
 * ── CONTRACT ─────────────────────────────────────────────────────────────────
 * Every pin — mock or live — is the same shape. Live pins from RSS fill these
 * identical keys, so the component never learns which provider it got.
 *
 *     id     string   stable key
 *     title  string   pin caption, lowercase
 *     image  string   absolute path or URL; must be a plain string (this file is
 *                     imported by a Netlify function, so no Vite asset imports)
 *     board  string   board name, lowercase
 *     url    string   where clicking the pin goes
 *     width  number   intrinsic px — set width/height to avoid layout shift
 *     height number
 *
 * Images live in `public/pins/` and are served from the site root.
 */

export const MOCK_PINS = [
  {
    id: 'mock-01',
    title: 'undergrad research hours',
    image: '/pins/research.jpg',
    board: 'things i built',
    url: 'https://csgenome.org/hidden_figures/contribution_network',
    width: 900,
    height: 600,
  },
  {
    id: 'mock-02',
    title: 'purple rain',
    image: '/pins/purple-rain.jpg',
    board: 'colour studies',
    url: 'https://www.pinterest.com/',
    width: 600,
    height: 900,
  },
  {
    id: 'mock-03',
    title: 'sc23 — denver',
    image: '/pins/sc23.jpg',
    board: 'places this took me',
    url: 'https://news.vt.edu/articles/2024/02/eng-cs-students-find-hidden-figures-in-computing.html',
    width: 900,
    height: 706,
  },
  {
    id: 'mock-04',
    title: 'teaching scratch in nyamyumba',
    image: '/pins/rwanda.jpg',
    board: 'places this took me',
    url: 'https://www.pinterest.com/',
    width: 900,
    height: 660,
  },
  {
    id: 'mock-05',
    title: 'first place, vturcs',
    image: '/pins/bunapetit.jpg',
    board: 'things i built',
    url: 'https://www.pinterest.com/',
    width: 900,
    height: 578,
  },
  {
    id: 'mock-06',
    title: '70 degrees out',
    image: '/pins/studio.jpg',
    board: 'colour studies',
    url: 'https://www.pinterest.com/',
    width: 600,
    height: 900,
  },
];
