import resumePDF from '../assets/Kalina_Kazmierczak_Resume_Website.pdf';
import Sticker from './Sticker';

/**
 * The hero pin.
 *
 * No eyebrow: this page is a Bento Grid, not a numbered document, and an
 * uppercase kicker above every section head is the tic that turns a page into
 * a list of labelled lists.
 *
 * The sticker cluster is composed, not scattered — the note is the anchor, the
 * eyes sit above the name so they read as watching the reader, and the patch
 * and unicorn balance the corner the name leaves empty.
 */
export default function Intro() {
  return (
    <section className="band band--hero" id="hello">
      <div className="hero">
        <div className="hero__text">
          <Sticker of="eyes" className="hero__eyes" width="7.5rem" eager />

          <h1 className="hero__name">
            kalina
            <br />
            kazmierczak<span className="dot">.</span>
          </h1>

          <p className="hero__standfirst">
            <strong>software engineer</strong> &amp; <strong>design engineer</strong> —
            crafting interfaces that are as thoughtful as they are functional. virginia
            tech cs &rsquo;25, based in dc.
          </p>

          <p className="prose">
            i&rsquo;m a full-stack engineer with a deep appreciation for the intersection
            of design and engineering. i studied computer science at virginia tech with an
            hci minor, which shaped my focus on the details that make software feel
            intentional and polished.
          </p>
          <p className="prose">
            i&rsquo;ve presented research at supercomputing conferences, taught coding in
            rwanda, placed first in undergraduate competitions, and built component
            libraries from figma to production. outside of work, i enjoy vintage shopping,
            going to festivals, and being outside on a 70 degree day!
          </p>

          <div className="chips">
            <a className="chip" href={resumePDF} download="Kalina_Kazmierczak_Resume.pdf">
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

        {/* Sizes come from CSS, not from the `width` prop — the prop writes an
            inline custom property, which would outrank the responsive rules. */}
        <div className="hero__cluster" aria-hidden="true">
          <Sticker of="sticky" className="hero__note" eager />
          <Sticker of="catPatch" className="hero__patch" eager />
          <Sticker of="unicorn" className="hero__unicorn" eager />
        </div>
      </div>
    </section>
  );
}
