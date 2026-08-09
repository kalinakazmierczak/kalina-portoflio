/**
 * The sticker pool.
 *
 * These are Kalina's own cut-outs, matted off their white/cream JPEG grounds
 * and shipped as WebP with real alpha. Real alpha rather than
 * `mix-blend-mode: multiply` because the site has a dark mode -- multiply on
 * near-black leaves the subject invisible, and screen leaves a grey plate.
 *
 * Intrinsic width/height are declared on every entry so the layout reserves
 * the right box before the file loads. Stickers are decorative; every consumer
 * renders them with `alt=""` and `aria-hidden`.
 */

export const STICKERS = {
  apple: { src: '/stickers/apple.webp', w: 504, h: 505 },
  bee: { src: '/stickers/bee.webp', w: 378, h: 366 },
  catPatch: { src: '/stickers/cat-patch.webp', w: 529, h: 510 },
  ctrl: { src: '/stickers/ctrl.webp', w: 293, h: 240 },
  eyes: { src: '/stickers/eyes.webp', w: 553, h: 143 },
  flower: { src: '/stickers/flower.webp', w: 491, h: 497 },
  horses: { src: '/stickers/horses.webp', w: 540, h: 346 },
  hummingbird: { src: '/stickers/hummingbird.webp', w: 434, h: 331 },
  kitty: { src: '/stickers/kitty.webp', w: 349, h: 407 },
  lotus: { src: '/stickers/lotus.webp', w: 560, h: 399 },
  reader: { src: '/stickers/reader.webp', w: 330, h: 560 },
  snoopy: { src: '/stickers/snoopy.webp', w: 148, h: 152 },
  sticky: { src: '/stickers/sticky.webp', w: 559, h: 560 },
  unicorn: { src: '/stickers/unicorn.webp', w: 506, h: 560 },
};

/** Everything the cursor trail is allowed to drop. */
export const TRAIL_POOL = [
  STICKERS.bee,
  STICKERS.lotus,
  STICKERS.hummingbird,
  STICKERS.flower,
  STICKERS.kitty,
  STICKERS.snoopy,
  STICKERS.horses,
  STICKERS.unicorn,
  STICKERS.apple,
  STICKERS.catPatch,
];
