import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation items that scroll to sections on homepage
  const tabs = [
    { id: 'home', label: 'HOME', sectionId: 'hero-section' },
    { id: 'experience', label: 'EXPERIENCE', sectionId: 'experience-section' },
    { id: 'projects', label: 'PROJECTS', sectionId: 'projects-section' },
    { id: 'about', label: 'ABOUT', sectionId: 'about-section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background blur when scrolled
      setScrolled(currentScrollY > 50);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Detect which section is in view
      const sections = tabs.map(tab => document.getElementById(tab.sectionId));
      const scrollPosition = currentScrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // If not on homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: 'var(--spacing-sm) var(--spacing-md)',
        background: scrolled 
          ? 'rgba(250, 249, 247, 0.85)' 
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled 
          ? '1px solid var(--color-border)' 
          : '1px solid transparent',
        transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="#hero-section"
          onClick={(e) => handleNavClick(e, 'hero-section')}
          style={{
            fontSize: 'var(--size-sm)',
            fontWeight: 600,
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-text-primary)',
            letterSpacing: 'var(--letter-spacing-tight)',
            textDecoration: 'none',
          }}
        >
          KALINA K.
        </a>

        {/* Navigation Links */}
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            alignItems: 'center',
          }}
        >
          {tabs.map((tab) => {
            const isActive = activeSection === tab.id;
            
            return (
              <a
                key={tab.id}
                href={`#${tab.sectionId}`}
                onClick={(e) => handleNavClick(e, tab.sectionId)}
                style={{
                  fontSize: 'var(--size-xs)',
                  fontWeight: 500,
                  color: isActive 
                    ? 'var(--color-text-primary)' 
                    : 'var(--color-text-tertiary)',
                  letterSpacing: 'var(--letter-spacing-normal)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.3s',
                }}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background: 'var(--color-text-primary)',
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Contact CTA */}
          <motion.a
            href="#contact-section"
            onClick={(e) => handleNavClick(e, 'contact-section')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              fontSize: 'var(--size-xs)',
              fontWeight: 500,
              color: 'var(--color-background)',
              background: 'var(--color-text-primary)',
              padding: '10px 20px',
              letterSpacing: 'var(--letter-spacing-normal)',
              textDecoration: 'none',
              marginLeft: 'var(--spacing-sm)',
            }}
          >
            CONTACT
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
