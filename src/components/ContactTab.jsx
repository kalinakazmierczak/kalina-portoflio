export default function ContactTab() {
  const links = [
    {
      label: 'email',
      text: 'kalinakazmie@gmail.com',
      href: 'mailto:kalinakazmie@gmail.com',
    },
    {
      label: 'github',
      text: 'kalinakazmierczak',
      href: 'https://github.com/kalinakazmierczak',
      external: true,
    },
    {
      label: 'linkedin',
      text: 'in/kalinakazmierczak',
      href: 'https://www.linkedin.com/in/kalinakazmierczak/',
      external: true,
    },
  ];

  return (
    <div className="page" style={{ minHeight: 'calc(100vh - 60px)' }}>
      <h1 className="section-header">contact</h1>
      <p className="contact-note">i'd love to chat — feel free to reach out.</p>
      <div className="contact-links">
        {links.map((link, i) => (
          <div key={i} className="contact-item">
            <span className="contact-label">{link.label}</span>
            <a
              className="contact-value"
              href={link.href}
              {...(link.external && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {link.text}
            </a>
          </div>
        ))}
      </div>
      <div className="contact-footer">
        <p className="contact-footer-text">
          washington, dc · built with care by kalina
        </p>
      </div>
    </div>
  );
}
