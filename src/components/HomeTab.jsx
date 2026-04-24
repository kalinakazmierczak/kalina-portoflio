import resumePDF from '../assets/Kalina_Kazmierczak_Resume_Website.pdf';
import SpotifyNowPlaying from './SpotifyNowPlaying';
import Terminal from './Terminal';

export default function HomeTab() {
  return (
    <div className="page">
      <div className="home-greeting">
        hello world<span className="cursor-blink" />
      </div>

      <h1 className="home-name">
        kalina<br />
        kazmierczak<span className="accent">.</span>
      </h1>

      <p className="home-tagline">
        <strong>software engineer</strong> & <strong>design engineer</strong>  crafting
        interfaces that are as thoughtful as they are functional. virginia tech cs '25,
        based in dc.
      </p>

      <hr className="home-rule" />

      <div className="now-section">
        <p className="now-label">currently</p>
        <div className="now-items">
          <p className="now-item">full-stack engineer @ costar group</p>
          <p className="now-item">working with react, c#, and .net</p>
          <p className="now-item">building ai-powered developer tools with amazon bedrock</p>
          <SpotifyNowPlaying />
        </div>
      </div>

      <p className="home-bio">
        i'm a full-stack engineer with a deep appreciation for the intersection of
        design and engineering. i studied computer science at virginia tech with an
        hci minor, which shaped my focus on the details that make software feel
        intentional and polished.
      </p>
      <p className="home-bio">
        i've presented research at supercomputing conferences, taught coding in
        rwanda, placed first in undergraduate competitions, and built component
        libraries from figma to production. outside of work, i enjoy vintage shopping,
        going to festivals, and being outside on a 70 degree day!
      </p>

      <div className="home-links">
        <a className="home-link" href={resumePDF} download="Kalina_Kazmierczak_Resume.pdf">
          résumé ↓
        </a>
        <a className="home-link" href="mailto:kalinakazmie@gmail.com">email</a>
        <a className="home-link" href="https://github.com/kalinakazmierczak" target="_blank" rel="noopener noreferrer">
          github
        </a>
        <a className="home-link" href="https://www.linkedin.com/in/kalinakazmierczak/" target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
      </div>

      <Terminal />
    </div>
  );
}
