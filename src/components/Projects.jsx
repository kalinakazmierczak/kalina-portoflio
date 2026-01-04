import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer, elegantEase, slowReveal } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'Bun Appétit',
      category: 'AI / HCI RESEARCH',
      year: '2025',
      highlights: [
        'Built AI-powered recipe recommendation system for college students with limited kitchen resources',
        'Developed smart ingredient substitution engine using GPT-4 and nutritional APIs',
        'Designed conversational UI for dietary restrictions and budget-conscious meal planning',
      ],
      link: null,
    },
    {
      id: 2,
      title: 'SeeMore Kinetic Sculpture',
      category: 'RESEARCH • SC24',
      year: '2024',
      highlights: [
        'Presented research poster at SC24 Supercomputing Conference in Atlanta',
        'Revitalized 10-year-old kinetic sculpture, migrating legacy codebase to Raspberry Pi 4B',
        'Bridged decade of technological advancement in iSeeMore interactive display design',
      ],
      link: 'https://sc24.supercomputing.org/proceedings/poster/poster_files/post214s2-file3.pdf',
    },
    {
      id: 3,
      title: 'Hidden Figures in HPC',
      category: 'RESEARCH • SC23',
      year: '2023',
      highlights: [
        'Built front-end visualizations highlighting underrepresented individuals in high-performance computing',
        'Selected as 1 of 5 students to present at SC23 International Conference (13,000+ attendees)',
        'Contributed to open-source "I am HPC" diversity initiative, featured as 35th anniversary exhibit',
      ],
      link: 'https://news.vt.edu/articles/2024/02/eng-cs-students-find-hidden-figures-in-computing.html',
    },
    {
      id: 4,
      title: 'Mabawa Tech Education',
      category: 'VOLUNTEER • RWANDA',
      year: '2024',
      highlights: [
        'Designed and delivered computer literacy curriculum for women and children in Nyamyumba',
        'Taught programming fundamentals through creative storytelling with Scratch coding',
        'Awarded Emily Specchio Foundation Scholarship for community impact',
      ],
      link: null,
    },
  ];

  return (
    <section
      ref={ref}
      id="projects-section"
      style={{
        padding: 'var(--spacing-2xl) var(--spacing-md)',
        background: 'var(--color-background)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={elegantEase}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'var(--spacing-lg)',
            paddingBottom: 'var(--spacing-sm)',
            borderBottom: '1px solid var(--color-border)',
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
              02
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
              Projects & Research
            </h2>
          </div>
          <p
            style={{
              fontSize: 'var(--size-sm)',
              color: 'var(--color-text-tertiary)',
              fontFamily: 'var(--font-accent)',
              fontStyle: 'italic',
            }}
          >
            other cool things i've done!
          </p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariants}
              transition={{ ...slowReveal, delay: index * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md) 0',
                borderTop: '1px solid var(--color-border)',
              }}
            >
              {/* Left - Year & Category */}
              <div>
                <p
                  style={{
                    fontSize: 'var(--size-sm)',
                    color: 'var(--color-text-tertiary)',
                    marginBottom: '4px',
                  }}
                >
                  {project.year}
                </p>
                <span
                  style={{
                    fontSize: 'var(--size-xs)',
                    color: 'var(--color-text-tertiary)',
                    letterSpacing: 'var(--letter-spacing-normal)',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Right - Content */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3
                    style={{
                      fontSize: 'var(--size-lg)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 500,
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--spacing-xs)',
                    }}
                  >
                    {project.title}
                  </h3>
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3, y: -3 }}
                      style={{
                        fontSize: 'var(--size-xs)',
                        color: 'var(--color-text-tertiary)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      VIEW ↗
                    </motion.a>
                  )}
                </div>

                {/* Highlights */}
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
                  {project.highlights.map((highlight, idx) => (
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
