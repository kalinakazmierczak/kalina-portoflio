import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';
import { useScrollAnimation, elegantEase, slowReveal } from '../hooks/useScrollAnimation';

function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  const languages = ['C#', 'C', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'];
  const technologies = ['React', '.NET', 'Node.js', 'Flask', 'Git', 'Linux', 'AWS', 'Figma', 'Highcharts'];
  const concepts = ['Full-Stack Dev', 'UI/UX Design', 'Data Viz', 'REST APIs'];

  const SkillTag = ({ skill, delay }) => (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay }}
      style={{
        display: 'inline-block',
        padding: '6px 14px',
        fontSize: 'var(--size-xs)',
        fontWeight: 500,
        color: 'var(--color-text-secondary)',
        backgroundColor: 'var(--color-accent-subtle)',
        borderRadius: '20px',
        whiteSpace: 'nowrap',
        letterSpacing: '0.01em',
      }}
    >
      {skill}
    </motion.span>
  );

  return (
    <section
      ref={ref}
      id="about-section"
      style={{
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        background: 'var(--color-background-alt)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-xl)',
            alignItems: 'start',
          }}
        >
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={elegantEase}
          >
            <p
              style={{
                fontSize: 'var(--size-xs)',
                fontWeight: 500,
                color: 'var(--color-text-tertiary)',
                letterSpacing: 'var(--letter-spacing-wide)',
                marginBottom: '8px',
              }}
            >
              03
            </p>
            <h2
              style={{
                fontSize: 'var(--size-2xl)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--spacing-md)',
              }}
            >
              About Me
            </h2>

            {/* Skills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <div>
                <p style={{ fontSize: 'var(--size-xs)', color: 'var(--color-text-tertiary)', letterSpacing: 'var(--letter-spacing-normal)', marginBottom: '8px' }}>
                  LANGUAGES
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {languages.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} delay={0.3 + index * 0.03} />
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: 'var(--size-xs)', color: 'var(--color-text-tertiary)', letterSpacing: 'var(--letter-spacing-normal)', marginBottom: '8px' }}>
                  TECHNOLOGIES
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {technologies.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} delay={0.4 + index * 0.03} />
                  ))}
                </div>
              </div>

              <div>
                <p style={{ fontSize: 'var(--size-xs)', color: 'var(--color-text-tertiary)', letterSpacing: 'var(--letter-spacing-normal)', marginBottom: '8px' }}>
                  OTHER
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {concepts.map((skill, index) => (
                    <SkillTag key={skill} skill={skill} delay={0.5 + index * 0.03} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...slowReveal, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
            }}
          >
            <p
              style={{
                fontSize: 'var(--size-lg)',
                lineHeight: 1.8,
                color: 'var(--color-text-secondary)',
              }}
            >
             Nice to meet you! I'm a full-stack software engineer, and I love combining design and code. 
            </p>

            <p
              style={{
                fontSize: 'var(--size-base)',
                lineHeight: 1.8,
                color: 'var(--color-text-tertiary)',
              }}
            >
             I'm a Virginia Tech CS grad with an HCI minor. I've presented research at supercomputing conferences, taught coding in Rwanda, and won undergraduate competitions. Now I'm at CoStar Group in Arlington!
            </p>

            <p
              style={{
                fontSize: 'var(--size-base)',
                lineHeight: 1.8,
                color: 'var(--color-text-tertiary)',
              }}
            >
              Outside of coding, you can find me at a hot yoga class, going to concerts, and traveling the world!
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

export default function HomePage() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '0' }}
    >
      <Hero />
      <WorkExperience />
      <Projects />
      <AboutSection />
      <Contact />
    </motion.main>
  );
}
