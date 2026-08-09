/** 11 · Catalogue — hairline-ruled index of experience. */
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

  const toolkit = [
    'react', 'typescript', 'c#', '.net', 'node.js', 'python',
    'tailwind', 'figma', 'aws', 'git', 'next.js', 'framer motion',
  ];

  return (
    <div className="shell page">
      <section className="band band--tight">
        <div className="band__head">
          <p className="eyebrow">experience</p>
          <h1 className="band__title">work</h1>
          <p className="band__desc">places i&rsquo;ve built things that mattered.</p>
        </div>

        <div className="entries">
          {experiences.map((exp, i) => (
            <article key={i} className="entry">
              <div className="entry__top">
                <h2 className="entry__title">{exp.company}</h2>
                <p className="entry__meta">
                  {exp.role} · {exp.period}
                </p>
              </div>
              <p className="entry__where">{exp.location}</p>
              <div className="entry__points">
                {exp.highlights.map((h, j) => (
                  <p key={j} className="entry__point">
                    {h}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band band--tight toolkit">
        <p className="eyebrow">toolkit</p>
        <div className="tags">
          {toolkit.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
