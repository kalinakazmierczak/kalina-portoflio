import kalinaImage from '../assets/kalina.jpg';
import chanseyImage from '../assets/chansey.png';
import squirtleImage from '../assets/squirtle.png';

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
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <div className="sprite-col">
          <img src={chanseyImage} alt="" className="pokemon-sprite" />
        </div>
        <div style={{ flex: 1 }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
          <div style={{ width: '180px', height: '220px', overflow: 'hidden' }}>
            <img
              src={kalinaImage}
              alt="kalina kazmierczak"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                filter: 'grayscale(20%)',
              }}
            />
          </div>
          <img src={squirtleImage} alt="" className="pokemon-sprite delay-2" />
        </div>
      </div>
    </div>
  );
}
