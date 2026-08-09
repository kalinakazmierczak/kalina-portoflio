import Sticker from './Sticker';

/**
 * Ft8 · Marquee scroll.
 *
 * The animated track is `aria-hidden` and duplicated — the duplicate is what
 * makes a -50% translate loop seamlessly. The real sentence is exposed once,
 * visually hidden, so assistive tech reads it a single time instead of
 * announcing the repetition.
 *
 * `prefers-reduced-motion: reduce` stops the track in CSS; an infinite
 * horizontal scroll is exactly the kind of motion that pulls the eye and never
 * lets go.
 */

const LINE = 'kalina kazmierczak · software engineer · lover of the creative and whimsical · ';

export default function SiteClose() {
  const run = (
    <span className="marquee__run">
      {LINE}
      <Sticker of="snoopy" className="marquee__sticker" width="1.6rem" />
      {LINE}
      <Sticker of="bee" className="marquee__sticker" width="1.6rem" />
    </span>
  );

  return (
    <footer className="close">
      <div className="marquee">
        <div className="marquee__track" aria-hidden="true">
          {run}
          {run}
        </div>
        <p className="visually-hidden">
          kalina kazmierczak · software engineer · dc · nyc
        </p>
      </div>

      <div className="close__inner">
        <p className="close__signoff">thanks for scrolling this far!</p>
        <p className="close__ps">
          let's take this to the next step, <a href="mailto:kalinakazmie@gmail.com">let's talk :)</a>
        </p>
        <p className="close__meta">
          <a href="mailto:kalinakazmie@gmail.com">email</a>
          <a
            href="https://github.com/kalinakazmierczak"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/kalinakazmierczak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </p>
      </div>
    </footer>
  );
}
