import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Contact from '../components/Contact';
import { useScrollAnimation, elegantEase, slowReveal } from '../hooks/useScrollAnimation';

function AboutSection() {
  const { ref, isInView } = useScrollAnimation();

  const skills = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 
    'Tailwind', 'Figma', 'Python', 'AWS'
  ];

  return (
    <section
      ref={ref}
      id="about-section"
      style={{
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        background: 'var(--color-background)',
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
              02
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
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: 'var(--spacing-md)',
              }}
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ ...elegantEase, delay: 0.4 + index * 0.05 }}
                  style={{
                    fontSize: 'var(--size-xs)',
                    padding: '8px 16px',
                    background: 'var(--color-accent-subtle)',
                    color: 'var(--color-text-secondary)',
                    letterSpacing: 'var(--letter-spacing-tight)',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
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
              I'm a software engineer who lives at the intersection of{' '}
              <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic' }}>
                design and code
              </span>
              . I build digital products that feel intuitive, perform smoothly, and look beautiful.
            </p>

            <p
              style={{
                fontSize: 'var(--size-base)',
                lineHeight: 1.8,
                color: 'var(--color-text-tertiary)',
              }}
            >
              My journey started with curiosity about how things work. That curiosity evolved into an obsession with creating elegant solutions to complex problems. I think about the user first, then the developer experience—because good code should be beautiful from every angle.
            </p>

            <p
              style={{
                fontSize: 'var(--size-base)',
                lineHeight: 1.8,
                color: 'var(--color-text-tertiary)',
              }}
            >
              When I'm not coding, you'll find me exploring DC's best coffee shops, getting lost in design Twitter, or perfecting my mechanical keyboard setup.
            </p>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ ...elegantEase, delay: 0.5 }}
              style={{
                marginTop: 'var(--spacing-sm)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span
                style={{
                  fontSize: 'var(--size-sm)',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                Based in DC • Open to opportunities
              </span>
            </motion.div>
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
