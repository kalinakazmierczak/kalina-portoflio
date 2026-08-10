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
  // --- first set ---
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

  // --- second set ---
  blackCat: { src: '/stickers/black-cat.webp', w: 334, h: 431 },
  blueFlower: { src: '/stickers/blue-flower.webp', w: 548, h: 560 },
  cat13: { src: '/stickers/cat13.webp', w: 513, h: 399 },
  clover: { src: '/stickers/clover.webp', w: 453, h: 402 },
  coffee: { src: '/stickers/coffee.webp', w: 500, h: 411 },
  cool: { src: '/stickers/cool.webp', w: 461, h: 530 },
  goldfish: { src: '/stickers/goldfish.webp', w: 353, h: 560 },
  grlPwr: { src: '/stickers/grl-pwr.webp', w: 426, h: 422 },
  kittyRecords: { src: '/stickers/kitty-records.webp', w: 533, h: 534 },
  koi: { src: '/stickers/koi.webp', w: 442, h: 560 },
  ladybug: { src: '/stickers/ladybug.webp', w: 329, h: 351 },
  libra: { src: '/stickers/libra.webp', w: 496, h: 551 },
  luck777: { src: '/stickers/luck777.webp', w: 515, h: 560 },
  mermaid: { src: '/stickers/mermaid.webp', w: 296, h: 560 },
  nyc: { src: '/stickers/nyc.webp', w: 361, h: 360 },
  seagull: { src: '/stickers/seagull.webp', w: 420, h: 560 },
  skippy: { src: '/stickers/skippy.webp', w: 400, h: 560 },
  star: { src: '/stickers/star.webp', w: 383, h: 560 },
};

/**
 * What the cursor trail is allowed to drop.
 *
 * Trail stickers render at 18–30px, so this pool is deliberately restricted to
 * cut-outs that still read as *something* at that size. The finely detailed
 * ones — the libra tarot card, the Kitty Records label, the eyes — turn to
 * mush and are left out.
 */
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
  STICKERS.clover,
  STICKERS.ladybug,
  STICKERS.star,
  STICKERS.coffee,
  STICKERS.nyc,
  STICKERS.grlPwr,
  STICKERS.luck777,
  STICKERS.cat13,
  STICKERS.blackCat,
  STICKERS.goldfish,
  STICKERS.koi,
  STICKERS.blueFlower,
  STICKERS.skippy,
];

/**
 * Loose cut-outs, scattered by section.
 *
 * Each pin sits in the *gap below* its section (`dy` is a negative offset into
 * the band's bottom padding), which is the only space guaranteed to be empty at
 * every viewport width. `inset` is the distance from the named `side`.
 *
 * `sm: true` marks the pins that still have room on a phone; the rest only
 * appear once there is margin to park them in.
 */
export const SCATTER = {
  now: [
    { of: 'ladybug', size: 's', tilt: 14, side: 'l', inset: '6%', dy: '-1.5rem', sm: true },
    { of: 'mermaid', size: 'm', tilt: -8, side: 'r', inset: '3%', dy: '-2.5rem' },
  ],
  work: [
    { of: 'skippy', size: 'm', tilt: -6, side: 'l', inset: '9%', dy: '-3rem' },
    { of: 'goldfish', size: 's', tilt: 11, side: 'r', inset: '5%', dy: '-1.75rem', sm: true },
  ],
  projects: [
    { of: 'blackCat', size: 'm', tilt: 7, side: 'l', inset: '13%', dy: '-2.75rem' },
    { of: 'seagull', size: 'm', tilt: -10, side: 'r', inset: '4%', dy: '-3.25rem' },
  ],
  writing: [
    { of: 'cat13', size: 'm', tilt: -5, side: 'l', inset: '7%', dy: '-2.5rem' },
    { of: 'blueFlower', size: 's', tilt: 13, side: 'r', inset: '9%', dy: '-1.5rem', sm: true },
  ],
  ask: [
    { of: 'luck777', size: 'm', tilt: 9, side: 'l', inset: '5%', dy: '-3rem' },
    { of: 'star', size: 's', tilt: -12, side: 'r', inset: '7%', dy: '-1.5rem', sm: true },
  ],
};
