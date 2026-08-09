import Sticker from './Sticker';

/** The close — first-person, no buttons in the fold. Copy unchanged. */
export default function Contact() {
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
    <section className="band" id="contact">
      <div className="band__head">
        <h2 className="band__title">contact</h2>
        <p className="band__desc">
          i&rsquo;d love to chat, whether it&rsquo;s about a role, a project, or just to
          say hi. currently based in dc.
        </p>
      </div>

      <div className="letter">
        <dl className="letter__rows">
          {links.map((link) => (
            <div key={link.label} className="letter__row">
              <dt className="letter__label">{link.label}</dt>
              <dd className="letter__value">
                <a
                  className="link"
                  href={link.href}
                  {...(link.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {link.text}
                </a>
              </dd>
            </div>
          ))}
        </dl>

        <Sticker of="kitty" className="letter__mark" width="8rem" />
      </div>
    </section>
  );
}
