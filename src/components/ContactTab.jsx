/** 12 · Letter — first-person, no buttons in the fold. */
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
    <div className="shell page">
      <section className="band band--tight letter">
        <p className="eyebrow">get in touch</p>
        <h1 className="band__title">contact</h1>

        <p className="letter__body">
          i&rsquo;d love to chat, whether it&rsquo;s about a role, a project, or just to
          say hi. currently based in dc.
        </p>

        <div className="letter__rows">
          {links.map((link) => (
            <div key={link.label} className="letter__row">
              <span className="letter__label">{link.label}</span>
              <a
                className="letter__value link"
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
      </section>
    </div>
  );
}
