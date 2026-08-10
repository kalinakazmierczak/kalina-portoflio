import bunapetitPaper from '../assets/annotated-HCI Capstone Final Paper.pdf';
import scratchCodingDeck from '../assets/scratch_coding_deck.pdf';
import Sticker from './Sticker';
import Scatter from './Scatter';
import { SCATTER } from '../stickers';

/** Published work, as a hairline-ruled index. Copy unchanged. */
export default function Writing() {
  const entries = [
    {
      title: 'hci capstone — bun appétit',
      meta: '2025 · research paper',
      url: bunapetitPaper,
    },
    {
      title: 'seemore kinetic sculpture — sc24 poster',
      meta: '2024 · conference poster',
      url: 'https://sc24.supercomputing.org/proceedings/poster/poster_files/post214s2-file3.pdf',
    },
    {
      title: 'scratch coding in rwanda — curriculum deck',
      meta: '2024 · teaching materials',
      url: scratchCodingDeck,
    },
    {
      title: 'hidden figures in hpc — virginia tech news',
      meta: '2023 · feature article',
      url: 'https://news.vt.edu/articles/2024/02/eng-cs-students-find-hidden-figures-in-computing.html',
    },
  ];

  return (
    <section className="band" id="writing">
      <div className="band__head">
        <h2 className="band__title">writing</h2>
        <p className="band__desc">
          papers, presentations, and cool things i&rsquo;ve done about along the way.
        </p>
        <Sticker of="reader" className="band__mark" width="3rem" />
        <Sticker of="libra" className="band__mark band__mark--b" width="3.5rem" />
      </div>

      <ul className="index">
        {entries.map((entry) => (
          <li key={entry.title}>
            <a
              className="index__row"
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="index__title">{entry.title} ↗</span>
              <span className="index__meta">{entry.meta}</span>
            </a>
          </li>
        ))}
      </ul>
      <Scatter items={SCATTER.writing} />
    </section>
  );
}
