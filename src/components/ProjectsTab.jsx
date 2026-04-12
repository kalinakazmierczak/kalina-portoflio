import bunapetitPaper from '../assets/annotated-HCI Capstone Final Paper.pdf';
import bunapetitPresentation from '../assets/Copy of Capstone Project .pptx.pdf';
import scratchCodingDeck from '../assets/scratch_coding_deck.pdf';

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
      featured: true,
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
      featured: true,
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
    },
    {
      title: 'mabawa scratch coding',
      year: '2024',
      description:
        'taught coding in nyamyumba, rwanda using scratch and creative storytelling. designed curriculum for women and 3rd graders. emily specchio foundation scholarship recipient.',
      tags: ['education', 'scratch', 'curriculum design'],
      links: [{ label: 'slides', url: scratchCodingDeck }],
    },
    {
      title: 'hidden figures in hpc',
      year: '2023',
      description:
        'interactive visualizations for underrepresented voices in hpc. built database of 300+ profiles for "i am hpc" initiative. full scholarship to present at sc23.',
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
    },
  ];

  return (
    <div className="page">
      <p className="section-subheader">selected work</p>
      <h1 className="section-header">projects</h1>
      <p className="section-desc">
        things i've designed, built, and shipped.
      </p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className={`project-card${project.featured ? ' featured' : ''}`}>
            <div className="project-top">
              <span className="project-title">{project.title}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <p className="project-desc">{project.description}</p>
            {project.tags && (
              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="project-tag">{tag}</span>
                ))}
              </div>
            )}
            {project.links && project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    className="project-link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
