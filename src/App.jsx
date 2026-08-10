import Navigation from './components/Navigation';
import StickerTrail from './components/StickerTrail';
import Intro from './components/HomeTab';
import Currently from './components/Currently';
import Work from './components/WorkTab';
import Projects from './components/ProjectsTab';
import Writing from './components/WritingTab';
import Ask from './components/Terminal';
import Contact from './components/ContactTab';
import SiteClose from './components/SiteClose';
import Sticker from './components/Sticker';
import Scatter from './components/Scatter';
import { SCATTER } from './stickers';
import './styles/globals.css';

/**
 * One page, top to bottom.
 *
 * The five-tab SPA is gone: a recruiter reads a portfolio in one scroll, and
 * tabs hid four fifths of the work behind a click. Every former tab is now a
 * section with a stable `id`, so the side-rail links and any old deep-link
 * anchors still land somewhere real.
 */
export default function App() {
  return (
    <>
      <a className="skip" href="#hello">
        skip to content
      </a>

      <StickerTrail />
      <Navigation />

      <main className="main" id="main">
        <div className="shell">
          <Intro />
          <Currently />
          <Work />
          <Projects />
          <Writing />

          <section className="band" id="ask">
            <div className="band__head">
              <h2 className="band__title">ask me things</h2>
              <p className="band__desc">
                type a command. it works exactly like you&rsquo;d expect.
              </p>
              <Sticker of="snoopy" className="band__mark" width="2.75rem" />
            </div>
            <Ask />
            <Scatter items={SCATTER.ask} />
          </section>

          <Contact />
        </div>
      </main>

      <SiteClose />
    </>
  );
}
