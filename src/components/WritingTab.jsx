import bunapetitPaper from '../assets/annotated-HCI Capstone Final Paper.pdf';
import scratchCodingDeck from '../assets/scratch_coding_deck.pdf';

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
    <div className="page">
      <p className="section-subheader">publications & talks</p>
      <h1 className="section-header">writing</h1>
      <p className="section-desc">
        papers, presentations, and things i've written about along the way.
      </p>
      <div className="writing-list">
        {entries.map((entry, i) => (
          <a
            key={i}
            className="writing-entry"
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="writing-title">{entry.title} ↗</p>
            <p className="writing-meta">{entry.meta}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
