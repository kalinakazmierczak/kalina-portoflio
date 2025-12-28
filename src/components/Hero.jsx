import kalinaImage from '../assets/kalina.jpg';
import { SECTION_PADDING, SECTION_CONTAINER, GRID_2_COLS, FLEX_CENTER, LABEL_STYLE } from '../styles/sharedStyles';

export default function Hero() {
  const imageContainerStyle = {
    width: '100%',
    aspectRatio: '1 / 1',
    backgroundColor: 'var(--color-border-light)',
    borderRadius: '50%',
    overflow: 'hidden',
    ...FLEX_CENTER,
  };

  const heroTitleStyle = {
    fontSize: 'var(--size-3xl)',
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    lineHeight: 1.2,
    color: 'var(--color-text-primary)',
    margin: 0,
  };

  const heroDescriptionStyle = {
    fontSize: 'var(--size-lg)',
    lineHeight: 1.8,
    color: 'var(--color-text-secondary)',
    margin: 0,
    maxWidth: '600px',
  };

  const ctaStyle = {
    fontSize: 'var(--size-xs)',
    fontWeight: 500,
    color: 'var(--color-text-primary)',
    letterSpacing: 'var(--letter-spacing-tight)',
    textDecoration: 'none',
    paddingBottom: '4px',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  };

  return (
    <section id="ux-design-section" style={SECTION_PADDING}>
      <div style={SECTION_CONTAINER}>
        <div style={GRID_2_COLS}>
          {/* Image Section */}
          <div style={imageContainerStyle}>
            <img
              src={kalinaImage}
              alt="Kalina"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Text Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              maxWidth: '700px',
            }}
          >
            <p style={LABEL_STYLE}>SOFTWARE ENGINEER</p>
            <h1 style={heroTitleStyle}>Hi, I'm Kalina!</h1>
            <p style={heroDescriptionStyle}>
              I'm a software engineer who designs, building products that look beautiful and feel right. I obsess over interaction design, live in Figma and VS Code, and believe great products are built at the intersection of aesthetics and code!
            </p>

            {/* CTA */}
            <div style={{ paddingTop: 'var(--spacing-sm)' }}>
              <a
                href="#contact-section"
                style={ctaStyle}
                onMouseEnter={(e) => (e.target.style.opacity = '0.6')}
                onMouseLeave={(e) => (e.target.style.opacity = '1')}
              >
                LETS CHAT!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
