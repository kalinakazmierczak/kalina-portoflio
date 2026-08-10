import Sticker from './Sticker';

/**
 * The close — the back of a postcard.
 *
 * Replaces an Ft8 marquee. An infinite horizontal scroll is decoration doing a
 * job the last thing on the page shouldn't be doing: it pulls the eye, never
 * settles, and by 2026 reads as a template flourish rather than as a voice.
 *
 * A postcard back earns the space instead, because the shape *is* the content:
 * a real one is divided message-left / address-right by a rule, with the stamp
 * and postmark in the corner. That gives the contact links a reason to be laid
 * out the way they are, rather than being a row of links with a border above.
 *
 * The card is paper on the flipped band, so it reads as an object lying on a
 * dark surface rather than as another section.
 */
export default function SiteClose() {
  const year = new Date().getFullYear();

  return (
    <footer className="close">
      <div className="postcard">
        {/* Stuck on the card, hanging off the corner, so it reads as applied
            to the postcard rather than as another floating page sticker. */}
        <Sticker of="seagull" className="postcard__applied" />

        <div className="postcard__note">
          <p className="postcard__hello">thanks for scrolling this far!</p>
          <p className="postcard__body">
            let&rsquo;s take this to the next step,{' '}
            <a className="link" href="mailto:kalinakazmie@gmail.com">
              let&rsquo;s talk :)
            </a>
          </p>
          <p className="postcard__sign">&mdash; kalina</p>
        </div>

        <div className="postcard__side">
          <div className="postcard__franking">
            {/* Stamp: a paper rectangle with punched perforations, one of
                Kalina's cut-outs as the engraving. */}
            <div className="postcard__stamp">
              <Sticker of="bee" className="postcard__stamp-art" width="2.5rem" />
              <span className="postcard__denom">nyc</span>
            </div>

            {/* Postmark: ring plus cancellation bars, struck at an angle the
                way a hand-cancel lands half off the stamp. */}
            <div className="postcard__postmark" aria-hidden="true">
              <span className="postcard__ring">
                <span className="postcard__ring-line">{year}</span>
              </span>
              <span className="postcard__bars" />
            </div>
          </div>

          <address className="postcard__address">
            <span className="postcard__to">to</span>
            <a href="mailto:kalinakazmie@gmail.com">kalinakazmie@gmail.com</a>
            <a
              href="https://github.com/kalinakazmierczak"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/kalinakazmierczak
            </a>
            <a
              href="https://www.linkedin.com/in/kalinakazmierczak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/kalinakazmierczak
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}
