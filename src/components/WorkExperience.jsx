import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer, elegantEase, slowReveal } from '../hooks/useScrollAnimation';

export default function WorkExperience() {
  const { ref, isInView } = useScrollAnimation();

  const experiences = [
    {
      id: 1,
      title: 'Associate Software Engineer',
      company: 'CoStar Group',
      period: 'Jul 2025 - Present',
      location: 'Arlington, VA',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'Software Engineer Intern',
      company: 'CoStar Group',
      period: 'Jun 2024 - Aug 2024',
      location: 'Richmond, VA',
      type: 'Internship',
      highlights: [
        'Built production-ready React dashboard for AWS SQS queue visualization',
        'Integrated CloudWatch APIs with Highcharts for real-time data',
        'Deployed to production, actively used by Case Management team',
      ],
    },
    {
      id: 3,
      title: 'Research Assistant — SeeMore',
      company: 'Virginia Tech',
      period: 'May 2024 - May 2025',
      location: 'Blacksburg, VA',
      type: 'Research',
      highlights: [
        'Revitalized kinetic sculpture, migrating legacy codebase to Raspberry Pi 4B',
        'Bridged 10+ years of tech advancement in iSeeMore design',
      ],
    },
    {
      id: 4,
      title: 'Research Assistant — Hidden Figures',
      company: 'Virginia Tech',
      period: 'Jan 2023 - May 2024',
      location: 'Blacksburg, VA',
      type: 'Research',
      highlights: [
        'Built front-end visualizations for underrepresented individuals in HPC',
        'Selected to present at SC23 International Conference (13,000+ attendees)',
        'Contributed to open-source project under "I am HPC" diversity initiative',
      ],
    },
  ];

  return (
    <section
      ref={ref}
      id="experience-section"
      style={{
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        background: 'var(--color-background-alt)',
        position: 'relative',
      }}
    >
      {/* Decorative element */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--color-border), transparent)',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={elegantEase}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-lg)',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 'var(--size-xs)',
                fontWeight: 500,
                color: 'var(--color-text-tertiary)',
                letterSpacing: 'var(--letter-spacing-wide)',
                marginBottom: '8px',
              }}
            >
              01
            </p>
            <h2
              style={{
                fontSize: 'var(--size-2xl)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Experience
            </h2>
          </div>
          <p
            style={{
              fontSize: 'var(--size-base)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.7,
              maxWidth: '400px',
              alignSelf: 'end',
            }}
          >
            Building at the intersection of design and engineering, 
            from research labs to production systems.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeUpVariants}
              transition={{ ...slowReveal, delay: index * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md) 0',
                borderTop: '1px solid var(--color-border)',
                position: 'relative',
              }}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                style={{
                  position: 'absolute',
                  left: '192px',
                  top: 'calc(var(--spacing-md) + 8px)',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: index === 0 ? 'var(--color-text-primary)' : 'var(--color-background)',
                  border: '2px solid var(--color-text-primary)',
                }}
              />

              {/* Period & Type */}
              <div>
                <p
                  style={{
                    fontSize: 'var(--size-sm)',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: '4px',
                  }}
                >
                  {exp.period}
                </p>
                <span
                  style={{
                    fontSize: 'var(--size-xs)',
                    color: 'var(--color-text-tertiary)',
                    letterSpacing: 'var(--letter-spacing-normal)',
                    textTransform: 'uppercase',
                    padding: '2px 8px',
                    background: 'var(--color-accent-subtle)',
                  }}
                >
                  {exp.type}
                </span>
              </div>

              {/* Content */}
              <div style={{ paddingLeft: 'var(--spacing-sm)' }}>
                <h3
                  style={{
                    fontSize: 'var(--size-lg)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 500,
                    color: 'var(--color-text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  style={{
                    fontSize: 'var(--size-base)',
                    color: 'var(--color-text-secondary)',
                    marginBottom: exp.highlights ? 'var(--spacing-xs)' : 0,
                  }}
                >
                  {exp.company} <span style={{ color: 'var(--color-text-tertiary)' }}>• {exp.location}</span>
                </p>

                {/* Highlights */}
                {exp.highlights && (
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: 'var(--size-sm)',
                          color: 'var(--color-text-tertiary)',
                          lineHeight: 1.6,
                          paddingLeft: '16px',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: 'var(--color-text-tertiary)',
                          }}
                        >
                          ↳
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ ...elegantEase, delay: 0.8 }}
          style={{
            marginTop: 'var(--spacing-md)',
            paddingTop: 'var(--spacing-md)',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontSize: 'var(--size-sm)',
              color: 'var(--color-text-tertiary)',
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
            }}
          >
            Always learning, always building
          </p>
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            style={{
              fontSize: 'var(--size-sm)',
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              letterSpacing: 'var(--letter-spacing-normal)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            DOWNLOAD RESUME
            <span>↓</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
