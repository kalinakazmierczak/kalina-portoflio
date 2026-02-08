import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, fadeUpVariants, staggerContainer, elegantEase, slowReveal } from '../hooks/useScrollAnimation';
import sc23Image from '../assets/sc23.jpg';
import bunapetitImage from '../assets/bunapetit.jpeg';
import scratchCodingImage from '../assets/scratch_coding_rwanda.jpeg';
import researchImage from '../assets/research.jpeg';
import bunapetitPaper from '../assets/annotated-HCI Capstone Final Paper.pdf';
import bunapetitPresentation from '../assets/Copy of Capstone Project .pptx.pdf';
import scratchCodingDeck from '../assets/scratch_coding_deck.pdf';
import SpinningVinylPreview from './SpinningVinylPreview';

const spindleDemo = '/spindle-demo.mp4';

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();
  const [showDemoModal, setShowDemoModal] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Spindle',
      category: 'NEXT.JS • SPOTIFY API',
      year: '2026',
      highlights: [
        'Designed and deployed a vinyl-inspired UI to visualize Spotify listening data',
        'Integrated NextAuth for OAuth and Canvas API for exportable story images',
        'Built responsive interactions with smooth hover-to-spin animations that link you directly to Spotify',
        'Mobile friendly design with optimized performance for all devices',
      ],
      links: [
        { label: 'GITHUB', url: 'https://github.com/kalinakazmierczak/SpotifyAlbumCollage' },
      ],
      customPreview: 'vinyl',
      demoGif: spindleDemo,
    },
    {
      id: 2,
      title: 'Bun Appétit',
      category: 'AI • HCI',
      year: '2025',
      highlights: [
        'Gamified food journaling app for families using AI meal recognition',
        'Computer vision for food identification and nutrition tracking',
        '1st Place, VTURCS',
      ],
      links: [
        { label: 'CASE STUDY', url: bunapetitPaper },
        { label: 'OVERVIEW', url: bunapetitPresentation },
      ],
      image: bunapetitImage,
    },
    {
      id: 3,
      title: 'SeeMore Kinetic Sculpture',
      category: 'RESEARCH • SC24',
      year: '2024',
      highlights: [
        'Revived a 10-year-old kinetic art installation, migrated to Raspberry Pi',
        'Reverse-engineered 2014 servo motor controls',
        'Presented at SC24 in Atlanta',
      ],
      links: [{ label: 'VIEW', url: 'https://sc24.supercomputing.org/proceedings/poster/poster_files/post214s2-file3.pdf' }],
      image: researchImage,
    },
    {
      id: 4,
      title: 'Mabawa Scratch Coding',
      category: 'VOLUNTEER • RWANDA',
      year: '2024',
      highlights: [
        'Taught coding in Nyamyumba using Scratch and creative storytelling',
        'Designed curriculum for women and 3rd graders',
        'Emily Specchio Foundation Scholarship recipient',
      ],
      links: [{ label: 'SLIDES', url: scratchCodingDeck }],
      image: scratchCodingImage,
    },
    {
      id: 5,
      title: 'Hidden Figures in HPC',
      category: 'RESEARCH • SC23',
      year: '2023',
      highlights: [
        'Interactive visualizations for underrepresented voices in HPC',
        'Built database of 300+ profiles for "I am HPC" initiative',
        'Full scholarship to present at SC23 (13,000+ attendees)',
      ],
      links: [
        { label: 'DEMO', url: 'https://csgenome.org/hidden_figures/contribution_network' },
        { label: 'ARTICLE', url: 'https://news.vt.edu/articles/2024/02/eng-cs-students-find-hidden-figures-in-computing.html' },
      ],
      image: sc23Image,
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
            marginBottom: 'var(--spacing-lg)',
          }}
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
              margin: 0,
            }}
          >
            Projects & Research
          </h2>
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
              className="project-card"
              variants={fadeUpVariants}
              transition={{ ...slowReveal, delay: index * 0.1 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md) 0',
                borderTop: '1px solid var(--color-border)',
                alignItems: 'start',
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
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
                    <h3
                      style={{
                        fontSize: 'var(--size-lg)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                        color: 'var(--color-text-primary)',
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    {project.links && project.links.length > 0 && (
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {project.links.map((link, linkIdx) => (
                          <motion.a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 2, y: -2 }}
                            style={{
                              fontSize: 'var(--size-xs)',
                              color: 'var(--color-text-tertiary)',
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                            }}
                          >
                            {link.label} ↗
                          </motion.a>
                        ))}
                      </div>
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

                {/* Project Image or Custom Preview */}
                {project.customPreview === 'vinyl' ? (
                  <div 
                    style={{ width: '220px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}
                    onClick={() => setShowDemoModal(true)}
                  >
                    <SpinningVinylPreview />
                  </div>
                ) : project.demoGif ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '220px',
                        height: '150px',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      }}
                    >
                      <img
                        src={project.demoGif}
                        alt={`${project.title} demo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </motion.div>
                    {project.note && (
                      <p
                        style={{
                          fontSize: '10px',
                          color: 'var(--color-text-tertiary)',
                          textAlign: 'center',
                          margin: 0,
                          opacity: 0.7,
                          maxWidth: '220px',
                        }}
                      >
                        {project.note}
                      </p>
                    )}
                  </div>
                ) : project.image && (
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '220px',
                      height: '150px',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(15%)',
                        transition: 'filter 0.3s ease',
                      }}
                      onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                      onMouseOut={(e) => e.target.style.filter = 'grayscale(15%)'}
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDemoModal(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              cursor: 'pointer',
              padding: 'var(--spacing-md)',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
              }}
            >
              <video
                src={spindleDemo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
              />
              <button
                onClick={() => setShowDemoModal(false)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(0, 0, 0, 0.6)',
                  color: 'white',
                  fontSize: '18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
