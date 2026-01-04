import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import kalinaImage from '../assets/kalina.jpg';
import resumePDF from '../assets/Kalina_Kazmierczak_2026_Resume_Final.pdf';
import { elegantEase, slowReveal } from '../hooks/useScrollAnimation';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: 'var(--spacing-xl) var(--spacing-md)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, var(--color-border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 'var(--spacing-sm)',
          alignItems: 'center',
        }}
      >
        {/* Text Content - Takes 7 columns */}
        <motion.div
          style={{
            gridColumn: '1 / 8',
            y: textY,
            opacity,
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...elegantEase, delay: 0.2 }}
            style={{
              fontSize: 'var(--size-sm)',
              fontWeight: 500,
              color: 'var(--color-text-tertiary)',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: 'var(--spacing-sm)',
              textTransform: 'uppercase',
            }}
          >
            Full-Stack Engineer · Virginia Tech '25
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...slowReveal, delay: 0.3 }}
            style={{
              fontSize: 'var(--size-4xl)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 500,
              lineHeight: 1,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-md)',
              letterSpacing: '-0.04em',
            }}
          >
            Kalina Kazmierczak
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...elegantEase, delay: 0.5 }}
            style={{
              fontSize: 'var(--size-lg)',
              lineHeight: 1.8,
              color: 'var(--color-text-secondary)',
              maxWidth: '540px',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            Building products that feel as good as they look.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...elegantEase, delay: 0.6 }}
            style={{
              fontSize: 'var(--size-lg)',
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            Where code meets aesthetics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...elegantEase, delay: 0.7 }}
            style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <motion.a
              href="#experience-section"
              whileHover={{ opacity: 0.7 }}
              style={{
                fontSize: 'var(--size-sm)',
                fontWeight: 500,
                color: 'var(--color-text-primary)',
                letterSpacing: 'var(--letter-spacing-normal)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                paddingBottom: '4px',
                borderBottom: '1px solid var(--color-text-primary)',
              }}
            >
              SEE MY WORK
            </motion.a>

            <motion.a
              href={resumePDF}
              download="Kalina_Kazmierczak_Resume.pdf"
              whileHover={{ opacity: 0.7 }}
              style={{
                fontSize: 'var(--size-sm)',
                fontWeight: 500,
                color: 'var(--color-text-tertiary)',
                letterSpacing: 'var(--letter-spacing-normal)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                paddingBottom: '4px',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              RÉSUMÉ
            </motion.a>

            <motion.a
              href="mailto:kalinakazmie@gmail.com"
              whileHover={{ opacity: 0.7 }}
              style={{
                fontSize: 'var(--size-sm)',
                fontWeight: 500,
                color: 'var(--color-text-tertiary)',
                letterSpacing: 'var(--letter-spacing-normal)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                paddingBottom: '4px',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              LET'S KEEP IN TOUCH!
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Section - Takes 4 columns with offset */}
        <motion.div
          style={{
            gridColumn: '9 / 13',
            y: imageY,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...slowReveal, delay: 0.4 }}
            style={{
              position: 'relative',
            }}
          >
            {/* Circle image container */}
            <div
              style={{
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={kalinaImage}
                alt="Kalina"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...elegantEase, delay: 0.9 }}
              style={{
                position: 'absolute',
                bottom: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: 'var(--size-xs)',
                letterSpacing: 'var(--letter-spacing-wide)',
                color: 'var(--color-text-tertiary)',
                whiteSpace: 'nowrap',
              }}
            >
              WASHINGTON, DC
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: 'var(--spacing-md)',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--color-text-tertiary), transparent)',
          }}
        />
      </motion.div>
    </section>
  );
}
