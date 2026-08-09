import bunapetitPaper from '../assets/annotated-HCI Capstone Final Paper.pdf';
import scratchCodingDeck from '../assets/scratch_coding_deck.pdf';

/** 11 · Catalogue — hairline-ruled index of published work. */
export default function WritingTab() {
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
    <div className="shell page">
      <section className="band band--tight">
        <div className="band__head">
          <p className="eyebrow">publications &amp; talks</p>
          <h1 className="band__title">writing</h1>
          <p className="band__desc">
            papers, presentations, and things i&rsquo;ve written about along the way.
          </p>
        </div>

        <div className="entries">
          {entries.map((entry, i) => (
            <a
              key={i}
              className="entry"
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="entry__top">
                <h2 className="entry__title">{entry.title} ↗</h2>
                <p className="entry__meta">{entry.meta}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
