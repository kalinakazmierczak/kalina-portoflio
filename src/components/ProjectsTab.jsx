import bunapetitPaper from '../assets/annotated-HCI Capstone Final Paper.pdf';
import bunapetitPresentation from '../assets/Copy of Capstone Project .pptx.pdf';
import scratchCodingDeck from '../assets/scratch_coding_deck.pdf';

/** 18 · Portfolio Grid — masonry-varied spans, wash-tinted surfaces. */
export default function ProjectsTab() {
  const projects = [
    {
      title: 'spindle',
      year: '2026',
      description:
        'vinyl-inspired ui to visualize spotify listening data. integrated nextauth for oauth, canvas api for exportable story images, and hover-to-spin animations.',
      tags: ['next.js', 'spotify api', 'canvas', 'oauth'],
      links: [
        {
          label: 'github',
          url: 'https://github.com/kalinakazmierczak/SpotifyAlbumCollage',
        },
      ],
      span: 'wide',
      wash: 'rust',
    },
    {
      title: 'bun appétit',
      year: '2025',
      description:
        'gamified food journaling app for families using ai meal recognition. computer vision for food identification and nutrition tracking. 1st place, vturcs.',
      tags: ['react', 'computer vision', 'hci', 'gamification'],
      links: [
        { label: 'case study', url: bunapetitPaper },
        { label: 'overview', url: bunapetitPresentation },
      ],
      wash: 'olive',
    },
    {
      title: 'seemore kinetic sculpture',
      year: '2024',
      description:
        'revived a 10-year-old kinetic art installation, migrated to raspberry pi. reverse-engineered 2014 servo motor controls. presented at sc24 in atlanta.',
      tags: ['raspberry pi', 'python', 'hardware', 'sc24'],
      links: [
        {
          label: 'poster',
          url: 'https://sc24.supercomputing.org/proceedings/poster/poster_files/post214s2-file3.pdf',
        },
      ],
      wash: 'slate',
    },
    {
      title: 'mabawa scratch coding',
      year: '2024',
      description:
        'taught coding in nyamyumba, rwanda using scratch and creative storytelling. designed curriculum for women and 3rd graders. emily specchio foundation scholarship recipient.',
      tags: ['education', 'scratch', 'curriculum design'],
      links: [{ label: 'slides', url: scratchCodingDeck }],
      wash: 'cherry',
    },
    {
      title: 'hidden figures in hpc',
      year: '2023',
      description:
        'interactive visualizations for underrepresented voices in hpc. built database of 300+ profiles for “i am hpc” initiative. full scholarship to present at sc23.',
      tags: ['d3.js', 'data viz', 'research', 'sc23'],
      links: [
        {
          label: 'demo',
          url: 'https://csgenome.org/hidden_figures/contribution_network',
        },
        {
          label: 'article',
          url: 'https://news.vt.edu/articles/2024/02/eng-cs-students-find-hidden-figures-in-computing.html',
        },
      ],
      // Spindle is the only wide card. A second one would leave a hole in the
      // row above it — five cards divide as 6 / 3+3 / 3+3.
      wash: 'rust',
    },
  ];

  return (
    <div className="shell page">
      <section className="band band--tight">
        <div className="band__head">
          <p className="eyebrow">selected work</p>
          <h1 className="band__title">projects</h1>
          <p className="band__desc">things i&rsquo;ve designed, built, and shipped.</p>
        </div>

        <div className="projects">
          {projects.map((project, i) => (
            <article
              key={i}
              className={`project wash-${project.wash}${
                project.span ? ` project--${project.span}` : ''
              }`}
            >
              <div className="project__top">
                <h2 className="project__title">{project.title}</h2>
                <p className="project__year">{project.year}</p>
              </div>

              <p className="project__desc">{project.description}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="project__link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
