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

const LINE = 'kalina kazmierczak · software engineer · dc · nyc · lets talk · ';

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
        <p className="close__signoff">built with care by kalina, in dc.</p>
        <p className="close__ps">
          p.s. — if you got this far, we should probably talk.
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
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
