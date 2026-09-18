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
      promotion: 'promoted from associate, jul 2026',
      wash: 'cherry',
      highlights: [
        'built an ai knowledge layer over composable etl models, answering natural-language questions on model behavior, lineage, and dependencies with cited documentation',
        'integrated s3-backed data sources with vector stores for semantic retrieval over internal documentation and model metadata',
        'integrated datadog, snowflake, and scoped azure repos access',
        'designed and implemented restful apis and data models for internal developer tools',
        'built reusable react component systems used across teams and products',
      ],
    },
    {
      company: 'virginia tech',
      role: 'undergraduate researcher',
      period: 'jan 2023 – may 2025',
      location: 'blacksburg, va',
      wash: 'olive',
      highlights: [
        'reverse-engineered and restored a legacy kinetic sculpture system, migrating a non-functional 2014 mac mini installation to raspberry pi',
        'built javascript visualizations and contributed to a python/flask backend for hidden figures in hpc',
        'selected as 1 of 5 students to present at sc23, a conference of 13,000+ attendees',
        'mentored new contributors in an open-source environment',
      ],
    },
    {
      company: 'costar group',
      role: 'software engineer intern',
      period: 'jun 2024 – aug 2024',
      location: 'richmond, va',
      wash: 'marigold',
      highlights: [
        'designed and shipped a production dashboard for monitoring aws cloudwatch sqs queues, used daily by multiple teams for operations and incident response',
        'owned end-to-end product development: identified user needs, designed for information density and speed, implemented with react and highcharts',
        'built filtering and customization features with keyboard-first interaction',
        'shipped iteratively, refining based on real usage patterns',
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
            {/* Optional: only the roles that were a step up carry this. */}
            {exp.promotion ? (
              <p className="entry__promo">
                <span className="tag">↑ {exp.promotion}</span>
              </p>
            ) : null}
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
