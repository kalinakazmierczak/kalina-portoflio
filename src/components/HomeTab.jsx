import resumePDF from '../assets/Kalina_Kazmierczak_Resume_Website.pdf';
import spriteImage from '../assets/jrtrainerf.png';
import vaporeonImage from '../assets/vaporeon.png';
import SpotifyNowPlaying from './SpotifyNowPlaying';

export default function HomeTab() {
  return (
    <div className="page">
      <div className="page-with-sprites">
        <div className="page-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <img src={spriteImage} alt="" className="pokemon-sprite" style={{ width: '84px', height: '84px' }} />
            <div>
              <h1 className="home-name" style={{ marginBottom: '8px' }}>kalina kazmierczak</h1>
              <p className="home-tagline" style={{ marginBottom: 0 }}>
                full-stack engineer · virginia tech '25 · washington, dc
              </p>
            </div>
          </div>

          <hr className="home-rule" />

          <div className="now-section">
            <p className="now-label">at this current moment i am,</p>
            <div className="now-items">
              <p className="now-item">at costar group in arlington, va</p>
              <p className="now-item">really into hot yoga </p>
              <p className="now-item">working with react, c#, and .net</p>
              <SpotifyNowPlaying />
            </div>
          </div>

          <hr className="home-rule" />

          <p className="home-bio">
            hi i'm a full-stack software engineer who loves combining design and code. i studied cs at virginia tech with an hci minor. I've spent my career so far all over the place, i've presented research at supercomputing conferences, taught coding in rwanda, been in coorporate software engineering internships, and won undergraduate competitions, but i'm always looking for new challenges and opportunities to learn and grow.
          </p>
          <p className="home-bio">
            outside of coding, you can find me at the gym or on a long walk with friends, going to concerts, and traveling as much as i can.
          </p>
          <div className="home-links" style={{ alignItems: 'center' }}>
            <a className="home-link" href={resumePDF} download="Kalina_Kazmierczak_Resume.pdf">
              résumé ↓
            </a>
            <a className="home-link" href="mailto:kalinakazmie@gmail.com">email</a>
            <a className="home-link" href="https://github.com/kalinakazmierczak" target="_blank" rel="noopener noreferrer">github</a>
            <a className="home-link" href="https://www.linkedin.com/in/kalinakazmierczak/" target="_blank" rel="noopener noreferrer">linkedin</a>
          </div>
        </div>
        <div className="sprite-col">
          <img src={vaporeonImage} alt="" className="pokemon-sprite delay-1" />
        </div>
      </div>
    </div>
  );
}
