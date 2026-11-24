import Sticker from './Sticker';
import Scatter from './Scatter';
import { SCATTER } from '../stickers';

/** Experience, as pinned cards. Figures mirror the résumé PDF: update both together. */
export default function Work() {
  const experiences = [
    {
      company: 'CoStar Group',
      role: 'software engineer 1',
      period: 'jul 2025 – present',
      location: 'Arlington, VA',
      promotion: 'promoted from associate, jul 2026',
      wash: 'cherry',
      highlights: [
        'designed, built, and deployed a RAG assistant covering 2,641 internal data models, answering hundreds of engineers’ questions on model behavior, lineage, and dependencies with cited sources',
        'grounded answers in Azure Repos code search, with Entra ID guardrails so it only reads repositories the person asking is authorized to access',
        'integrated live Snowflake and Datadog access, so answers carry current metrics instead of static documentation',
        'automated the documentation corpus with a Python parser and an LLM extraction pass running in Azure Pipelines',
        'shipped RESTful APIs and data models for internal developer tools, plus a reusable React component system that cut UI build time by 40%',
      ],
    },
    {
      company: 'CoStar Group',
      role: 'software engineer intern',
      period: 'jun 2024 – aug 2024',
      location: 'Richmond, VA',
      wash: 'marigold',
      highlights: [
        'designed and shipped a production dashboard over AWS CloudWatch and SQS that ten teams still use daily for operations and incident response',
        'cut time to spot a queue backlog by 60%',
        'owned it end to end in React and Highcharts, from user needs through filtering, customization, and keyboard-first interaction',
        'deployed weekly, refining it on feedback from 15 daily users',
      ],
    },
    {
      company: 'Virginia Tech',
      role: 'undergraduate researcher',
      period: 'jan 2023 – may 2025',
      location: 'Blacksburg, VA',
      wash: 'olive',
      highlights: [
        'built a Python/Flask backend and JavaScript visualizations for hidden figures in HPC, installed at the main entrance of SC23 (13,000+ attendees)',
        'selected as 1 of 5 students to present the work at SC23',
        'restored an undocumented kinetic sculpture system, reverse-engineering it and migrating it from a dead 2014 Mac mini to Raspberry Pi',
        'mentored new contributors in an open-source environment',
      ],
    },
  ];

  const toolkit = [
    'React', 'TypeScript', 'Python', 'C#', '.NET', 'Node.js', 'Next.js', 'SQL',
    'RAG', 'vector search', 'LLM tool calling', 'Snowflake', 'AWS', 'Datadog',
    'Figma', 'Tailwind', 'Git',
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
