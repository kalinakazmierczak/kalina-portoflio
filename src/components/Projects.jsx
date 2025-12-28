import { SECTION_PADDING, SECTION_CONTAINER, LABEL_STYLE } from '../styles/sharedStyles';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Tonies Referral Program',
      category: 'UX & UI DESIGN',
      description: 'Designed an end-to-end "Refer a Friend" experience that achieved a 52% signup-to-conversion rate.',
      status: 'VIEW PROJECT',
    },
    {
      id: 2,
      title: 'Brella Shopify App',
      category: 'PRODUCT DESIGN',
      description: 'Designed an onboarding flow for merchants to setup shipping protection and order tracking.',
      status: 'UNDER CONSTRUCTION',
    },
    {
      id: 3,
      title: 'Govern Mobile App',
      category: 'PRODUCT DESIGN',
      description: 'Designed a solution for U.S. citizens to understand Congress and hold elected officials accountable.',
      status: 'VIEW PROJECT',
    },
  ];

  const projectTitleStyle = {
    fontSize: 'var(--size-2xl)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: 'var(--color-text-primary)',
    margin: '0 0 var(--spacing-sm) 0',
    maxWidth: '600px',
  };

  const descriptionStyle = {
    fontSize: 'var(--size-base)',
    lineHeight: 1.7,
    color: 'var(--color-text-secondary)',
    margin: '0 0 var(--spacing-md) 0',
    maxWidth: '600px',
  };

  const ctaStyle = {
    fontSize: 'var(--size-xs)',
    fontWeight: 500,
    color: 'var(--color-text-primary)',
    letterSpacing: 'var(--letter-spacing-tight)',
    textDecoration: 'none',
    borderBottom: '2px solid var(--color-text-primary)',
    paddingBottom: '2px',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  };

  return (
    <section id="work-section" style={SECTION_PADDING}>
      <div style={SECTION_CONTAINER}>
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={LABEL_STYLE}>FEATURED WORK</h2>
        </div>

        {/* Projects */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-lg)',
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                paddingBottom: 'var(--spacing-lg)',
                borderBottom: index !== projects.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <p style={LABEL_STYLE}>{project.category}</p>
              <h3 style={projectTitleStyle}>{project.title}</h3>
              <p style={descriptionStyle}>{project.description}</p>
              <a
                href="#"
                style={ctaStyle}
                onMouseEnter={(e) => (e.target.style.opacity = '0.6')}
                onMouseLeave={(e) => (e.target.style.opacity = '1')}
              >
                {project.status}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
