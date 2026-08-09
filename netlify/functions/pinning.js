/**
 * "what i've been pinning" — recent Pinterest pins.
 *
 * Mirrors netlify/functions/now-playing.js: serverless, cached response,
 * graceful fallback. Never throws to the client — always 200 with a usable body.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PROVIDER CHAIN — first one that yields pins wins.
 *
 *   A. Board RSS   pinterest.com/<user>/<board>.rss   ← preferred, NO API ACCOUNT
 *                  Gives real board names via <channel><title>.
 *   B. Profile RSS pinterest.com/<user>/feed.rss      ← NO API ACCOUNT
 *                  All recent pins, but no per-pin board attribution.
 *   C. Mock data   ../../src/data/mockPins.js          ← always renders
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ★ TO GO LIVE — set these in Netlify → Site settings → Environment variables.
 *   No Pinterest developer account, no OAuth, no app review required.
 *
 *     PINTEREST_USERNAME  your handle, e.g. "kalinakazmierczak"
 *     PINTEREST_BOARDS    optional, comma-separated board slugs from your board
 *                         URLs, e.g. "interiors,outfits,studio-refs"
 *                         Omit to use the profile feed instead.
 *
 *   Set PINTEREST_USERNAME and provider A/B takes over automatically —
 *   no code change needed. Leave it unset and the module renders mock pins.
 *
 * ★ IF YOU LATER WANT THE OFFICIAL API (v5, needs a developer account):
 *   add a provider function with the same contract — async () => Pin[] — and
 *   put it at the front of PROVIDERS below. Everything downstream is unchanged.
 *
 * Pin contract:  { id, title, image, board, url }
 */

import { MOCK_PINS } from '../../src/data/mockPins.js';

const PIN_LIMIT = 12;
const FETCH_TIMEOUT_MS = 4000;

// Pinterest serves thumbnails at /236x/. The same path swaps to larger renditions.
const IMAGE_RENDITION = '736x';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const decodeEntities = (s) =>
  s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');

const stripCdata = (s) => s.replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1').trim();

const tag = (xml, name) => {
  const m = xml.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? stripCdata(m[1]) : '';
};

const fetchText = async (url) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': UA, Accept: 'application/rss+xml, text/xml, */*' },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`${url} → ${res.status}`);
    const body = await res.text();
    if (!body.includes('<item>')) throw new Error(`${url} → no <item> elements`);
    return body;
  } finally {
    clearTimeout(timer);
  }
};

/** Parse one Pinterest RSS document into pins. */
const parseFeed = (xml, boardOverride) => {
  const channel = xml.split('<item>')[0];
  const board = boardOverride || tag(channel, 'title') || 'saved';

  return xml
    .split('<item>')
    .slice(1)
    .map((chunk) => {
      const item = chunk.split('</item>')[0];
      const link = tag(item, 'link');
      const description = decodeEntities(tag(item, 'description'));
      const image = (description.match(/<img[^>]+src="([^"]+)"/) || [])[1];
      if (!image || !link) return null;

      return {
        id: tag(item, 'guid') || link,
        title: decodeEntities(tag(item, 'title')).trim() || 'untitled',
        // /236x/ thumbnails are too soft for a masonry card — take the 736 rendition.
        image: image.replace(/\/\d+x\//, `/${IMAGE_RENDITION}/`),
        board: board.toLowerCase(),
        url: link,
      };
    })
    .filter(Boolean);
};

/** A · one RSS document per named board, so each pin keeps its board name. */
const fromBoards = async (user, boards) => {
  const settled = await Promise.allSettled(
    boards.map(async (slug) => {
      const xml = await fetchText(`https://www.pinterest.com/${user}/${slug}.rss`);
      return parseFeed(xml);
    })
  );

  // Interleave boards so the grid alternates rather than showing one board then the next.
  const lists = settled.filter((r) => r.status === 'fulfilled').map((r) => r.value);
  const merged = [];
  for (let i = 0; merged.length < PIN_LIMIT; i += 1) {
    const before = merged.length;
    for (const list of lists) if (list[i]) merged.push(list[i]);
    if (merged.length === before) break; // every list exhausted
  }
  return merged;
};

/** B · the profile feed. No per-pin board attribution available. */
const fromProfile = async (user) =>
  parseFeed(await fetchText(`https://www.pinterest.com/${user}/feed.rss`), 'recently saved');

const json = (body, maxAge) => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': `public, s-maxage=${maxAge}, stale-while-revalidate=${maxAge * 2}`,
  },
  body: JSON.stringify(body),
});

export const handler = async () => {
  const user = process.env.PINTEREST_USERNAME;
  const boards = (process.env.PINTEREST_BOARDS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  const providers = [];
  if (user && boards.length) providers.push(['boards', () => fromBoards(user, boards)]);
  if (user) providers.push(['profile', () => fromProfile(user)]);

  for (const [name, run] of providers) {
    try {
      const pins = await run();
      if (pins.length) {
        return json({ source: name, pins: pins.slice(0, PIN_LIMIT) }, 1800);
      }
      console.warn(`pinning: provider "${name}" returned no pins, falling through`);
    } catch (error) {
      console.warn(`pinning: provider "${name}" failed —`, error.message);
    }
  }

  // C · graceful fallback. Short cache so a fixed env var takes effect quickly.
  return json({ source: 'mock', pins: MOCK_PINS.slice(0, PIN_LIMIT) }, 300);
};
