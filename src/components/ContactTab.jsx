import { useEffect, useRef, useCallback } from 'react';

export default function ContactTab() {
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const count = Math.floor(Math.random() * 2) + 2;
    for (let i = 0; i < count; i++) {
      const speck = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const offsetX = (Math.random() - 0.5) * 24;
      const offsetY = (Math.random() - 0.5) * 24;
      const duration = Math.random() * 800 + 600;
      const hue = Math.random() > 0.5 ? '16, 48%, 63%' : '30, 30%, 60%';

      Object.assign(speck.style, {
        position: 'absolute',
        left: `${x + offsetX}px`,
        top: `${y + offsetY}px`,
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: `hsla(${hue}, 0.7)`,
        pointerEvents: 'none',
        zIndex: '0',
        transition: `all ${duration}ms ease-out`,
        opacity: '0.7',
        transform: 'scale(1)',
      });

      container.appendChild(speck);

      requestAnimationFrame(() => {
        speck.style.opacity = '0';
        speck.style.transform = `scale(0) translate(${(Math.random() - 0.5) * 40}px, ${(Math.random() - 0.5) * 40}px)`;
      });

      setTimeout(() => {
        speck.remove();
      }, duration + 50);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

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
    <div className="page" ref={containerRef} style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 60px)' }}>
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
