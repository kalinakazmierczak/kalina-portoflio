import bunapetitPaper from '../assets/annotated-HCI Capstone Final Paper.pdf';
import bunapetitPresentation from '../assets/Copy of Capstone Project .pptx.pdf';
import scratchCodingDeck from '../assets/scratch_coding_deck.pdf';
import Sticker from './Sticker';
import Scatter from './Scatter';
import { SCATTER } from '../stickers';

/**
 * The project board — masonry-varied pins, wash-tinted, each tagged with a
 * cut-out chosen for what the project *is* rather than at random: eyes on the
 * hidden-figures visualisation, an apple on the food-journaling app, a
 * hummingbird on the kinetic sculpture.
 */
export default function Projects() {
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
      wash: 'cherry',
      sticker: 'horses',
      markWidth: '5.5rem',
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
      sticker: 'apple',
      // Below ~4.5rem the star-shaped core stops resolving and the slice
      // reads as a plain disc.
      markWidth: '4.5rem',
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
      wash: 'blue',
      sticker: 'hummingbird',
    },
    {
      title: 'mabawa scratch coding',
      year: '2024',
      description:
        'taught coding in nyamyumba, rwanda using scratch and creative storytelling. designed curriculum for women and 3rd graders. emily specchio foundation scholarship recipient.',
      tags: ['education', 'scratch', 'curriculum design'],
      links: [{ label: 'slides', url: scratchCodingDeck }],
      wash: 'marigold',
      sticker: 'flower',
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
      wash: 'rose',
      sticker: 'eyes',
      // The eyes are 553x143 — at the default 3.5rem they shrink to a smudge.
      markWidth: '6rem',
    },
  ];

  return (
    <section className="band" id="projects">
      <div className="band__head">
        <h2 className="band__title">projects</h2>
        <p className="band__desc">projects i&rsquo;ve designed, and built.</p>
        <Sticker of="lotus" className="band__mark" width="5rem" />
        <Sticker of="koi" className="band__mark band__mark--b" width="3.25rem" />
      </div>

      <div className="board">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`pin pin--${project.wash} project${
              project.span ? ` project--${project.span}` : ''
            }`}
          >
            <Sticker
              of={project.sticker}
              className="project__mark"
              width={project.markWidth ?? '3.5rem'}
            />

            <div className="project__top">
              <h3 className="project__title">{project.title}</h3>
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
                  className="link"
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
      <Scatter items={SCATTER.projects} />
    </section>
  );
}
