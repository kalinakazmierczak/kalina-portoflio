import { useState, useEffect, useRef, useCallback } from 'react';
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
        return <HomeTab />;
      case 'work':
        return <WorkTab />;
      case 'projects':
        return <ProjectsTab />;
      case 'writing':
        return <WritingTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab />;
    }
  };

  const lastSpeckTime = useRef(0);

  const handleMouseMove = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastSpeckTime.current < 40) return;
      lastSpeckTime.current = now;

      const speck = document.createElement('div');
      const size = 5;
      const duration = 600;

      speck.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background-color: rgba(196, 145, 124, 0.6);
        pointer-events: none;
        z-index: 9999;
        opacity: 0.6;
      `;

      document.body.appendChild(speck);

      requestAnimationFrame(() => {
        speck.style.transition = `opacity ${duration}ms ease-out`;
        speck.style.opacity = '0';
      });

      setTimeout(() => speck.remove(), duration + 50);
    },
    [],
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

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
