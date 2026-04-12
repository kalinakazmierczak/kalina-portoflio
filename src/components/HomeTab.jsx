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
        <strong>software engineer</strong> & <strong>design engineer</strong> — building
        things that feel as good as they work. virginia tech cs '25, currently in dc,
        manifesting my move to <strong>nyc</strong>.
      </p>

      <hr className="home-rule" />

      <div className="now-section">
        <p className="now-label">currently</p>
        <div className="now-items">
          <p className="now-item">full-stack engineer @ costar group</p>
          <p className="now-item">working with react, c#, and .net</p>
          <p className="now-item">really into hot yoga</p>
          <p className="now-item">looking for my next role in nyc</p>
          <SpotifyNowPlaying />
        </div>
      </div>

      <p className="home-bio">
        i'm a full-stack engineer who cares deeply about the intersection of design
        and code. i studied cs at virginia tech with an hci minor — which basically
        means i obsess over the little details that make software feel intentional.
      </p>
      <p className="home-bio">
        i've presented research at supercomputing conferences, taught coding in
        rwanda, won undergraduate competitions, and built component libraries from
        figma to production. when i'm not coding, you'll find me thrifting, making
        spotify playlists that go unreasonably hard, or deep in a wikipedia rabbit hole.
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
