import snorlaxImage from '../assets/snorlax.png';
import gengarImage from '../assets/gengar.png';

export default function WorkTab() {
  const experiences = [
    {
      company: 'costar group',
      role: 'full-stack software engineer',
      period: 'jul 2025 – present',
      location: 'arlington, va',
      highlights: [
        'full-stack development with react, c#, and .net',
        'building reusable ui component libraries',
        'taking features from figma to production',
      ],
    },
    {
      company: 'costar group',
      role: 'software engineer intern',
      period: 'jun 2024 – aug 2024',
      location: 'richmond, va',
      highlights: [
        'built a react dashboard for real-time aws sqs monitoring',
        'integrated cloudwatch apis with highcharts visualizations',
        'added filtering and drag-and-drop layout customization',
      ],
    },
    {
      company: 'virginia tech',
      role: 'undergraduate researcher',
      period: 'jan 2023 – may 2025',
      location: 'blacksburg, va',
      highlights: [
        'led projects on kinetic sculpture revival and hpc diversity visualizations',
        'presented at sc23 and sc24 supercomputing conferences',
        'mentored students on open-source workflows',
      ],
    },
  ];

  return (
    <div className="page">
      <p className="section-subheader">experience</p>
      <h1 className="section-header">work</h1>
      <p className="section-desc">
        places i've built things that mattered.
      </p>
      <div className="work-list">
        {experiences.map((exp, i) => (
          <div key={i} className="work-entry">
            <div className="work-top">
              <span className="work-company">{exp.company}</span>
              <span className="work-role-date">
                {exp.role} · {exp.period}
              </span>
            </div>
            <p className="work-location">{exp.location}</p>
            <div className="work-description">
              {exp.highlights.map((h, j) => (
                <p key={j} className="work-highlight">{h}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tag-row">
        {['react', 'typescript', 'c#', '.net', 'node.js', 'python', 'tailwind', 'figma', 'aws', 'git', 'next.js', 'framer motion'].map((tag) => (
          <span key={tag} className="tag-pill">{tag}</span>
        ))}
      </div>
    </div>
  );
}
