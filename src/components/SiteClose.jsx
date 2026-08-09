/**
 * Ft6 · Letter close — knobs: signoff=roman, postscript=yes, width=60ch.
 *
 * Global footer. Carries the signoff that previously lived at the bottom of
 * ContactTab, so it closes every tab rather than only the last one.
 *
 * .shell and .close__inner must stay on separate elements — sharing one lets
 * the 60ch measure override the shell's width and re-centre the whole block.
 */
export default function SiteClose() {
  return (
    <footer className="close">
      <div className="shell">
        <div className="close__inner">
          <p className="close__signoff">built with care by kalina, in dc.</p>
          <p className="close__ps">
            p.s. — if you got this far, we should probably talk.
          </p>
          <p className="close__meta">
            <a href="mailto:kalinakazmie@gmail.com">email</a>
            <a
              href="https://github.com/kalinakazmierczak"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/kalinakazmierczak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <span>© {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
