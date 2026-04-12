import { useState, useRef } from 'react';
import Navigation from './components/Navigation';
import HomeTab from './components/HomeTab';
import WorkTab from './components/WorkTab';
import ProjectsTab from './components/ProjectsTab';
import WritingTab from './components/WritingTab';
import ContactTab from './components/ContactTab';
import './styles/globals.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [transitioning, setTransitioning] = useState(false);
  const contentRef = useRef(null);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTransitioning(false);
    }, 150);
  };

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab onNavigate={handleTabChange} />;
      case 'work':
        return <WorkTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'writing':
        return <WritingTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab onNavigate={handleTabChange} />;
    }
  };

  return (
    <>
      <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="main-content" ref={contentRef}>
        <div
          className="tab-content"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'translateY(8px)' : 'translateY(0)',
            transition: 'opacity 200ms ease, transform 200ms ease',
          }}
        >
          {renderTab()}
        </div>
      </main>
    </>
  );
}

export default App;
