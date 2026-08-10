import { useState } from 'react';

/**
 * Marginalia — ambient images in the right rail.
 *
 * Purely decorative: no captions, no links. A different pick every reload.
 *
 * `alt=""` is deliberate, not an oversight. These carry no information the page
 * depends on, so announcing "grid of Snoopy demonstrating nine yoga poses" mid-bio
 * would be noise. WCAG treats decorative images as empty-alt.
 *
 * Intrinsic dimensions are declared per image so the rail reserves the right
 * height before the file loads — otherwise a random pick would shift the layout
 * differently on every visit.
 */

const POOL = [
  { src: '/plates/snoopy.jpg', width: 900, height: 900 },
  { src: '/plates/records.jpg', width: 900, height: 881 },
  { src: '/plates/keys.jpg', width: 675, height: 900 },
  { src: '/plates/mouse.jpg', width: 700, height: 700 },
  { src: '/plates/flowers.jpg', width: 648, height: 800 },
  { src: '/plates/newyork.jpg', width: 595, height: 900 },
  { src: '/plates/dog-nails.jpg', width: 567, height: 760 },
  { src: '/plates/keep-creating.jpg', width: 736, height: 606 },
];

/** Fisher–Yates, then take the first `count`. Guarantees no repeat in one load. */
function pick(count) {
  const deck = [...POOL];
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck.slice(0, count);
}

export default function Marginalia({ count = 1 }) {
  // Lazy initialiser, so the pick happens once per mount rather than on every
  // render — otherwise the images would swap on unrelated state changes.
  const [chosen] = useState(() => pick(count));

  return (
    <div className="marginalia" aria-hidden="true">
      {chosen.map((img, i) => (
        <img
          key={img.src}
          className={`marginalia__img marginalia__img--${i % 2 ? 'b' : 'a'}`}
          src={img.src}
          alt=""
          width={img.width}
          height={img.height}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}
