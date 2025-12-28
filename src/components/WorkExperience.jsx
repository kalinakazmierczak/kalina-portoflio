export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      title: 'Associate Software Engineer',
      company: 'CoStar Group',
      period: 'Jul 2025 - Present',
      location: 'Arlington, Virginia, United States',
    },
    {
      id: 2,
      title: 'Social Media Chair',
      company: 'Data Structures and Algorithms @ Virginia Tech',
      period: 'Aug 2024 - May 2025',
      location: 'Blacksburg, Virginia',
      highlights: [
        'Designed and published graphics to promote events and meetings, aligning visuals with club branding and student interests.',
        'Increased social media followers by 50% and doubled profile engagement through strategic posting and story content.',
        'Collaborated with executive board to streamline event marketing and boost turnout.',
      ],
    },
    {
      id: 3,
      title: 'Undergraduate Research Assistant - SeeMore',
      company: 'Virginia Tech',
      period: 'May 2024 - May 2025',
      location: 'Blacksburg, Virginia',
      highlights: [
        'Revitalized SeeMore kinetic sculpture from non-functional state on old Mac Mini system',
        'Migrated legacy codebase to modern Raspberry Pi 4B platform',
        'Restored Lil SeeMore functionality into new iSeeMore design, bridging 10+ years of technological advancement',
        'Repaired original servo motor control systems and mechanical components from 2014 installation',
        'Adapted legacy software drivers and hardware interfaces to work with current Linux distributions',
        'Documented original system architecture and created integration pathway for incorporating proven SeeMore features',
      ],
    },
    {
      id: 4,
      title: 'Software Engineer Intern',
      company: 'CoStar Group',
      period: 'Jun 2024 - Aug 2024',
      location: 'Richmond, Virginia, United States',
      highlights: [
        'Built production-ready React-based dashboard for Case Management team to visualize AWS SQS queues',
        'Integrated AWS CloudWatch APIs to fetch real-time queue metrics and implemented Highcharts for interactive data visualization',
        'Developed comprehensive user input functionality with dynamic filtering and customizable dashboard layouts',
        'Successfully deployed dashboard to production, actively used by Case Management team for daily operations',
        'Implemented error handling, loading states, and responsive design for reliable performance',
      ],
    },
    {
      id: 5,
      title: 'Undergraduate Research Assistant - Hidden Figures',
      company: 'Virginia Tech',
      period: 'Jan 2023 - May 2024',
      location: 'Blacksburg, Virginia',
      highlights: [
        'Developed front-end visualizations in JavaScript to highlight underrepresented individuals in HPC',
        'Contributed to Python backend development using Flask, SQLAlchemy, and RESTful API integration',
        'Conducted extensive data collection and cleanup to build database of 300+ "hidden figures" in HPC',
        'Selected as one of 5 students to receive full scholarship to present at SC23 International Conference (13,000+ attendees)',
        'Collaborated across multidisciplinary teams of 20+ students to build equity-focused tool',
        'Contributed to open-source project featured as 35th anniversary exhibit under "I am HPC" diversity initiative',
        'Mentored and trained new students on codebase contribution and development workflows',
      ],
    },
    {
      id: 6,
      title: 'Lead Technology Volunteer',
      company: 'Mabawa',
      period: 'Jan 2024 - Apr 2024',
      location: 'Rwanda',
      highlights: [
        'Designed and delivered computer literacy lessons for women and children, including storytelling through Scratch coding',
        'Taught P3 (3rd grade) students the fundamentals of programming and computational thinking',
        'Made technology accessible and empowered underserved communities through creative and inclusive learning',
        'Rewarded with the Emily Specchio Foundation Scholarship',
      ],
    },
  ];

  const jobTitleStyle = {
    fontSize: 'var(--size-lg)',
    fontWeight: 700,
    fontFamily: 'var(--font-heading)',
    color: 'var(--color-text-primary)',
    margin: '0 0 var(--spacing-xs) 0',
  };

  const companyStyle = {
    fontSize: 'var(--size-base)',
    fontWeight: 500,
    color: 'var(--color-text-secondary)',
    margin: '0 0 var(--spacing-xs) 0',
  };

  const metaStyle = {
    fontSize: 'var(--size-sm)',
    color: 'var(--color-text-tertiary)',
    margin: '0 0 var(--spacing-sm) 0',
  };

  const highlightStyle = {
    fontSize: 'var(--size-base)',
    lineHeight: 1.7,
    color: 'var(--color-text-secondary)',
    paddingLeft: 'var(--spacing-sm)',
    position: 'relative',
  };

  return (
    <section
      id="work-experience-section"
      style={{
        backgroundColor: 'var(--color-background)',
        paddingTop: 'var(--spacing-xl)',
        paddingBottom: 'var(--spacing-xl)',
        paddingLeft: 'var(--spacing-md)',
        paddingRight: 'var(--spacing-md)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2
            style={{
              fontSize: 'var(--size-sm)',
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              color: 'var(--color-text-tertiary)',
              letterSpacing: 'var(--letter-spacing-normal)',
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            EXPERIENCE
          </h2>
        </div>

        {/* Experiences */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-lg)',
            maxWidth: '800px',
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                paddingBottom: index !== experiences.length - 1 ? 'var(--spacing-lg)' : 0,
                borderBottom: index !== experiences.length - 1 ? '1px solid var(--color-border)' : 'none',
              }}
            >
              <h3 style={jobTitleStyle}>{exp.title}</h3>
              <p style={companyStyle}>{exp.company}</p>

              {/* Period and Location */}
              <div style={metaStyle}>
                <span>{exp.period}</span>
                {exp.location && <span> • {exp.location}</span>}
              </div>

              {/* Highlights */}
              {exp.highlights && (
                <ul
                  style={{
                    margin: '0 0 0 var(--spacing-sm)',
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-xs)',
                  }}
                >
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} style={highlightStyle}>
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--color-text-tertiary)',
                        }}
                      >
                        •
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
