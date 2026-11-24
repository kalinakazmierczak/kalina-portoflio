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
            <strong>full stack engineer building AI tools people actually enjoy using.</strong>
          </p>

          <p className="prose">
            i&rsquo;m a software engineer at CoStar Group, where i built a RAG assistant
            covering 2,641 data models for hundreds of engineers. Virginia Tech CS + HCI
            &rsquo;25. 
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

          <p className="prose">
            i love the whimsical, and i care about the details that make software feel
            intentional and polished. along the way i&rsquo;ve presented research at
            supercomputing conferences, taught coding in Rwanda, and won a computing
            competition. i&rsquo;d love to chat about any of it ♥
          </p>
          <p className="prose">
            outside of work, i enjoy vintage shopping, going to music festivals, and taking
            the Amtrak to new cities!
          </p>
        </div>

        {/* Sizes come from CSS, not from the `width` prop — the prop writes an
            inline custom property, which would outrank the responsive rules. */}
        <div className="hero__cluster">
          {/* Not aria-hidden and not alt="" — unlike the cut-outs, this one
              carries information: it is who the page is about. */}
          <figure className="hero__portrait">
            <img
              src="/photos/kalina.webp"
              alt="kalina kazmierczak on graduation day, wearing a teal stole"
              width={640}
              height={853}
              loading="eager"
              decoding="async"
            />
          </figure>

          <Sticker of="sticky" className="hero__note" eager />
          <Sticker of="catPatch" className="hero__patch" />
          <Sticker of="unicorn" className="hero__unicorn" />
        </div>
      </div>
    </section>
  );
}
