import { STICKERS } from '../stickers';

/**
 * A decorative cut-out.
 *
 * Always `alt=""` + `aria-hidden`: these carry no information the page depends
 * on, so announcing "grid of Snoopy demonstrating nine yoga poses" mid-bio
 * would be noise. WCAG treats decorative images as empty-alt.
 *
 * Intrinsic width/height come from the manifest so the box is reserved before
 * the file loads; `width` here is the *rendered* width and is passed as a
 * custom property so placement stays in CSS.
 */
export default function Sticker({ of, className = '', width, eager = false }) {
  const s = STICKERS[of];
  if (!s) return null;

  return (
    <img
      className={`sticker ${className}`.trim()}
      src={s.src}
      alt=""
      aria-hidden="true"
      width={s.w}
      height={s.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={width ? { '--sticker-w': width } : undefined}
    />
  );
}
