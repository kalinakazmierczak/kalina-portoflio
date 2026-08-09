import ThemeToggle from './ThemeToggle';

/** N6 · Newspaper masthead — wordmark row, issue line, tab row under a double rule. */
export default function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'home' },
    { id: 'work', label: 'work' },
    { id: 'projects', label: 'projects' },
    { id: 'writing', label: 'writing' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <header className="masthead">
      <div className="shell">
        <div className="masthead__top">
          <a
            className="masthead__wordmark"
            href="#main"
            onClick={(e) => {
              e.preventDefault();
              onTabChange('home');
            }}
          >
            kalina kazmierczak<span className="dot">.</span>
          </a>
          <div className="masthead__right">
            <p className="masthead__issue">
              <span className="masthead__status" aria-hidden="true" />
              <span className="masthead__issue-text">open to work · dc</span>
            </p>
            <ThemeToggle />
          </div>
        </div>

        <div className="masthead__rules">
          <nav className="masthead__tabs" aria-label="Sections">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className="tab"
                aria-current={activeTab === tab.id ? 'page' : undefined}
                onClick={() => onTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
