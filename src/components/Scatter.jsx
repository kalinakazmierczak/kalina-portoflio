import { STICKERS } from '../stickers';

/**
 * Loose cut-outs scattered through the page.
 *
 * Every pin is positioned into the *gap* below its section rather than over the
 * content — the band's own bottom padding is the only reliably empty space at
 * every viewport width, so a sticker parked there can never land on a line of
 * text no matter how the copy reflows.
 *
 * The layer is inert (`pointer-events: none`, `aria-hidden`) and each pin's
 * placement is fixed in the manifest, so the page has the same shape on every
 * visit.
 *
 * Position goes inline; *size* does not. Size lives in CSS size buckets,
 * because an inline custom property would outrank the responsive rules.
 */
export default function Scatter({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="scatter" aria-hidden="true">
      {items.map((item, i) => {
        const s = STICKERS[item.of];
        if (!s) return null;

        const style = { '--tilt': `${item.tilt}deg`, bottom: item.dy };
        if (item.side === 'l') style.left = item.inset;
        else style.right = item.inset;

        return (
          <img
            key={`${item.of}-${i}`}
            className={`scatter__pin scatter__pin--${item.size}${
              item.sm ? ' scatter__pin--sm-ok' : ''
            }`}
            src={s.src}
            alt=""
            width={s.w}
            height={s.h}
            loading="lazy"
            decoding="async"
            style={style}
          />
        );
      })}
    </div>
  );
}
