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
      <span className="nav-name">kalina k.</span>
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
