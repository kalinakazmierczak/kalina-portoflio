import resumePDF from '../assets/Kalina_Kazmierczak_Resume_Website.pdf';
import SpotifyNowPlaying from './SpotifyNowPlaying';
import PinBoard from './PinBoard';
import Ask from './Terminal';

/** 20 · Ecosystem Index — intro, then titled discovery rails. */
export default function HomeTab() {
  return (
    <div className="shell page">
      <section className="band intro">
        <div>
          <p className="eyebrow">hello world</p>
          <h1 className="intro__name">
            kalina
            <br />
            kazmierczak<span className="dot">.</span>
          </h1>

          <p className="intro__tagline">
            <strong>software engineer</strong> &amp; <strong>design engineer</strong> —
            crafting interfaces that are as thoughtful as they are functional. virginia
            tech cs &rsquo;25, based in dc.
          </p>

          <p className="intro__bio">
            i&rsquo;m a full-stack engineer with a deep appreciation for the intersection
            of design and engineering. i studied computer science at virginia tech with an
            hci minor, which shaped my focus on the details that make software feel
            intentional and polished.
          </p>
          <p className="intro__bio">
            i&rsquo;ve presented research at supercomputing conferences, taught coding in
            rwanda, placed first in undergraduate competitions, and built component
            libraries from figma to production. outside of work, i enjoy vintage shopping,
            going to festivals, and being outside on a 70 degree day!
          </p>

          <div className="intro__links">
            <a
              className="chip"
              href={resumePDF}
              download="Kalina_Kazmierczak_Resume.pdf"
            >
              résumé ↓
            </a>
            <a className="chip" href="mailto:kalinakazmie@gmail.com">
              email
            </a>
            <a
              className="chip"
              href="https://github.com/kalinakazmierczak"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              className="chip"
              href="https://www.linkedin.com/in/kalinakazmierczak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </div>
        </div>

        <div className="currently">
          <p className="eyebrow">currently</p>
          <div className="currently__list">
            <p className="currently__item">full-stack engineer @ costar group</p>
            <p className="currently__item">working with react, c#, and .net</p>
            <SpotifyNowPlaying />
          </div>
        </div>
      </section>

      <section className="band">
        <div className="band__head">
          <h2 className="band__title">what i&rsquo;ve been pinning</h2>
          <p className="band__desc">
            the boards i actually keep — colour, rooms, and things i&rsquo;ve built.
          </p>
        </div>
        <PinBoard />
      </section>

      <section className="band">
        <div className="band__head">
          <h2 className="band__title">ask me things</h2>
          <p className="band__desc">
            type a command. it works exactly like you&rsquo;d expect.
          </p>
        </div>
        <Ask />
      </section>
    </div>
  );
}
