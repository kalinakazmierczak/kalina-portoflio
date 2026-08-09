import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomeTab from './components/HomeTab';
import WorkTab from './components/WorkTab';
import ProjectsTab from './components/ProjectsTab';
import WritingTab from './components/WritingTab';
import ContactTab from './components/ContactTab';
import SiteClose from './components/SiteClose';
import './styles/globals.css';

const TABS = {
  home: HomeTab,
  work: WorkTab,
  projects: ProjectsTab,
  writing: WritingTab,
  contact: ContactTab,
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 150);
  };

  // Reduced-motion users skip the spatial half of the transition entirely.
  useEffect(() => {
    document.title =
      activeTab === 'home'
        ? 'kalina kazmierczak'
        : `${activeTab} — kalina kazmierczak`;
  }, [activeTab]);

  const Active = TABS[activeTab] ?? HomeTab;

  return (
    <>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="main" id="main">
        <div className="tabview" data-transitioning={transitioning}>
          <Active onNavigate={handleTabChange} />
        </div>
      </main>
      <SiteClose />
    </>
  );
}

export default App;
