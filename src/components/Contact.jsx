import {
  SECTION_WITH_TOP_BORDER,
  SECTION_CONTAINER,
  LABEL_STYLE,
  LINK_STYLE,
  FLEX_COL_GAP,
} from '../styles/sharedStyles';

export default function Contact() {
  const contactLinks = [
    {
      label: 'EMAIL',
      href: 'mailto:kalinakazmie@gmail.com',
      text: 'kalinakazmie@gmail.com',
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/kalinakazmierczak/',
      text: 'linkedin.com/in/kalinakazmierczak',
      external: true,
    },
    {
      label: 'GITHUB',
      href: 'https://github.com/kalinakazmierczak',
      text: 'github.com/kalinakazmierczak',
      external: true,
    },
  ];

  return (
    <footer id="contact-section" style={SECTION_WITH_TOP_BORDER}>
      <div style={SECTION_CONTAINER}>
        {/* Closing message */}
        <div style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '700px' }}>
          <p
            style={{
              fontSize: 'var(--size-xl)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              lineHeight: 1.6,
              color: 'var(--color-text-secondary)',
              margin: 0,
            }}
          >
            Let's make this official!
          </p>
        </div>

        {/* Contact Links */}
        <div
          style={{
            ...FLEX_COL_GAP,
            marginBottom: 'var(--spacing-lg)',
            maxWidth: '400px',
          }}
        >
          {contactLinks.map((link) => (
            <div key={link.label}>
              <p style={LABEL_STYLE}>{link.label}</p>
              <a
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                style={LINK_STYLE}
                onMouseEnter={(e) => (e.target.style.opacity = '0.6')}
                onMouseLeave={(e) => (e.target.style.opacity = '1')}
              >
                {link.text}
              </a>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: '1px solid var(--color-border)',
            marginBottom: 'var(--spacing-md)',
            paddingTop: 'var(--spacing-md)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--size-base)',
              color: 'var(--color-text-tertiary)',
              margin: 0,
            }}
          >
            Made with ☕ and code
          </p>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 'var(--size-sm)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          <div>
            <p style={{ margin: '0 0 4px 0', fontWeight: 500, color: 'var(--color-text-primary)' }}>KALINA KAZMIERCZAK</p>
            <p style={{ margin: 0 }}>© 2024 All rights reserved.</p>
          </div>
          <p style={{ margin: 0 }}>Designed & Built with React + Vite</p>
        </div>
      </div>
    </footer>
  );
}
