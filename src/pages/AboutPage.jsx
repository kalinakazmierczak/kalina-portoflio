import Contact from '../components/Contact';

export default function AboutPage() {
  const aboutStyle = {
    backgroundColor: 'var(--color-background)',
    paddingTop: 'var(--spacing-xl)',
    paddingBottom: 'var(--spacing-xl)',
    paddingLeft: 'var(--spacing-md)',
    paddingRight: 'var(--spacing-md)',
  };

  const sectionHeaderStyle = {
    fontSize: 'var(--size-sm)',
    fontWeight: 500,
    fontFamily: 'var(--font-body)',
    color: 'var(--color-text-tertiary)',
    letterSpacing: 'var(--letter-spacing-normal)',
    margin: 0,
  };

  const contentStyle = {
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-sm)',
  };

  const paragraphStyle = {
    fontSize: 'var(--size-base)',
    fontFamily: 'var(--font-body)',
    lineHeight: 1.8,
    color: 'var(--color-text-secondary)',
    margin: 0,
  };

  return (
    <main style={{ paddingTop: '80px' }}>
      <section style={aboutStyle}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h2 style={sectionHeaderStyle}>ABOUT</h2>
          </div>

          <div style={contentStyle}>
            <p style={paragraphStyle}>
              I'm a software engineer deeply passionate about the intersection of design and engineering. I build digital products that feel intuitive, perform smoothly, and look beautiful.
            </p>

            <p style={paragraphStyle}>
              My journey started with curiosity about how things work. Over time, that curiosity evolved into an obsession with creating elegant solutions to complex problems. I think about the user first, then the developer experience, because good code should be beautiful from every angle.
            </p>

            <p style={paragraphStyle}>
              What drives me is solving hard problems with clean code. I'm particularly interested in web performance, accessible interfaces, and building tools that developers love to use. I believe the best solutions come from understanding both the technical constraints and the human needs.
            </p>

            {/* Skills */}
            <div
              style={{
                paddingTop: 'var(--spacing-sm)',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'var(--spacing-sm)',
              }}
            >
              <p
                style={{
                  fontSize: 'var(--size-xs)',
                  fontWeight: 500,
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: 'var(--letter-spacing-normal)',
                  margin: '0 0 var(--spacing-xs) 0',
                }}
              >
                SKILLS & TOOLS
              </p>
              <p
                style={{
                  fontSize: 'var(--size-base)',
                  lineHeight: 1.8,
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                }}
              >
                React, TypeScript, Tailwind CSS, Next.js, Vite, Node.js, Web Performance, Accessibility, Design Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
