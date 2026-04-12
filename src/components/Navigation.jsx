export default function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'home' },
    { id: 'work', label: 'work' },
    { id: 'projects', label: 'projects' },
    { id: 'writing', label: 'writing' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="nav-prompt">~/kalina</span>
        <span className="nav-name">$</span>
        <div className="nav-status" title="open to work" />
      </div>
      <div className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab${activeTab === tab.id ? ' active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
