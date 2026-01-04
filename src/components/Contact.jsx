import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, elegantEase, slowReveal } from '../hooks/useScrollAnimation';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();

  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:kalinakazmie@gmail.com',
      text: 'kalinakazmie@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kalinakazmierczak/',
      text: 'in/kalinakazmierczak',
      icon: Linkedin,
      external: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/kalinakazmierczak',
      text: 'kalinakazmierczak',
      icon: Github,
      external: true,
    },
  ];

  return (
    <footer
      ref={ref}
      id="contact-section"
      style={{
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        background: 'var(--color-text-primary)',
        color: 'var(--color-background)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, rgba(250, 249, 247, 0.03), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={slowReveal}
          style={{
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--size-xs)',
              fontWeight: 500,
              color: 'rgba(250, 249, 247, 0.5)',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: 'var(--spacing-sm)',
            }}
          >
            LET'S CONNECT
          </p>
          <h2
            style={{
              fontSize: 'var(--size-3xl)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              color: 'var(--color-background)',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: 0,
              maxWidth: '800px',
            }}
          >
            Looking for someone who can{' '}
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontWeight: 400,
              }}
            >
              design & build?
            </span>{' '}
            Let's talk!
          </h2>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...elegantEase, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--spacing-sm)',
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...elegantEase, delay: 0.3 + index * 0.1 }}
              whileHover="hover"
              style={{
                padding: 'var(--spacing-md)',
                border: '1px solid rgba(250, 249, 247, 0.1)',
                textDecoration: 'none',
                color: 'var(--color-background)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-sm)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Hover background */}
              <motion.div
                variants={{
                  hover: { scaleY: 1, originY: 1 },
                }}
                initial={{ scaleY: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(250, 249, 247, 0.05)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                <link.icon size={20} strokeWidth={1.5} />
                <motion.div
                  variants={{ hover: { x: 3, y: -3 } }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight size={16} style={{ opacity: 0.5 }} />
                </motion.div>
              </div>

              <div style={{ position: 'relative' }}>
                <p
                  style={{
                    fontSize: 'var(--size-xs)',
                    color: 'rgba(250, 249, 247, 0.5)',
                    letterSpacing: 'var(--letter-spacing-normal)',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: 'var(--size-sm)',
                    color: 'var(--color-background)',
                  }}
                >
                  {link.text}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ ...elegantEase, delay: 0.6 }}
          style={{
            paddingTop: 'var(--spacing-md)',
            borderTop: '1px solid rgba(250, 249, 247, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 'var(--size-sm)',
                fontWeight: 500,
                color: 'var(--color-background)',
                marginBottom: '4px',
              }}
            >
              KALINA KAZMIERCZAK
            </p>
            <p
              style={{
                fontSize: 'var(--size-xs)',
                color: 'rgba(250, 249, 247, 0.5)',
              }}
            >
              © 2025 • Designed & built with care by me!
            </p>
          </div>

          
        </motion.div>
      </div>
    </footer>
  );
}
