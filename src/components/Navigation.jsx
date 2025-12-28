import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'HOME', path: '/' },
    { id: 'work', label: 'WORK', path: '/work' },
    { id: 'projects', label: 'PROJECTS', path: '/projects' },
    { id: 'about', label: 'ABOUT', path: '/', sectionId: 'about-section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Detect which section is in view on home page
      if (location.pathname === '/') {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          const rect = aboutSection.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            setActiveSection('about');
          } else {
            setActiveSection('home');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, location.pathname]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--color-background)',
        zIndex: 50,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Main Nav Bar */}
      <div
        style={{
          padding: 'var(--spacing-sm) var(--spacing-md)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '100%',
          gap: 'var(--spacing-lg)',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: '14px',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text-primary)',
            letterSpacing: 'var(--letter-spacing-tight)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
          }}
        >
          KALINA KAZMIERCZAK
        </Link>

        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          {tabs.map((tab) => {
            const isActive = tab.id === 'about' 
              ? (location.pathname === '/' && activeSection === 'about')
              : location.pathname === tab.path;

            const handleAboutClick = (e) => {
              if (tab.id === 'about') {
                e.preventDefault();
                const aboutSection = document.getElementById('about-section');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            };

            return (
              <Link
                key={tab.id}
                to={tab.path}
                onClick={handleAboutClick}
                style={{
                  fontSize: 'var(--size-xs)',
                  fontWeight: 500,
                  fontFamily: 'var(--font-body)',
                  color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: 'var(--letter-spacing-tight)',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                  paddingBottom: '4px',
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.opacity = '0.6';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.opacity = '1';
                  }
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
