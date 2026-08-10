import Sticker from './Sticker';
import Scatter from './Scatter';
import { SCATTER } from '../stickers';

/** Experience, as pinned cards. Copy unchanged from the tabbed build. */
export default function Work() {
  const experiences = [
    {
      company: 'costar group',
      role: 'software engineer 1',
      period: 'jul 2025 – present',
      location: 'arlington, va',
      wash: 'cherry',
      highlights: [
        'full-stack development with react, c#, and .net',
        'implemented REST and data models for internal tools',
        'building reusable ui component libraries',
        'built an ai-powered developer knowledge layer using aws bedrock',
      ],
    },
    {
      company: 'costar group',
      role: 'software engineer intern',
      period: 'jun 2024 – aug 2024',
      location: 'richmond, va',
      wash: 'marigold',
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
      wash: 'olive',
      highlights: [
        'led projects on kinetic sculpture revival and hpc diversity visualizations',
        'presented at sc23 and sc24 supercomputing conferences',
        'mentored students on open-source workflows',
      ],
    },
  ];

  const toolkit = [
    'react', 'typescript', 'c#', '.net', 'node.js', 'python',
    'tailwind', 'figma', 'aws', 'git', 'next.js', 'framer motion',
  ];

  return (
    <section className="band" id="work">
      <div className="band__head">
        <h2 className="band__title">work</h2>
        <p className="band__desc">places i have worked and created at.</p>
        <Sticker of="bee" className="band__mark" width="4rem" />
        <Sticker of="grlPwr" className="band__mark band__mark--b" width="3.5rem" />
      </div>

      <div className="stack">
        {experiences.map((exp, i) => (
          <article key={i} className={`pin pin--${exp.wash} entry`}>
            <div className="entry__top">
              <h3 className="entry__title">{exp.company}</h3>
              <p className="entry__meta">{exp.period}</p>
            </div>
            <p className="entry__role">
              {exp.role} · {exp.location}
            </p>
            <ul className="entry__points">
              {exp.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="toolkit">
        <p className="pin__label">toolkit</p>
        <div className="tags">
          {toolkit.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Scatter items={SCATTER.work} />
    </section>
  );
}
