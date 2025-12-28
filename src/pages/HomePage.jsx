import Hero from '../components/Hero';
import Contact from '../components/Contact';
import {
  SECTION_WITH_TOP_BORDER,
  SECTION_CONTAINER,
  SECTION_HEADER,
  SECTION_HEADER_CONTAINER,
  CONTENT_FLEX,
  PARAGRAPH,
  LABEL_STYLE,
  DIVIDER,
} from '../styles/sharedStyles';

export default function HomePage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <Hero />

      {/* About Section */}
      <section id="about-section" style={SECTION_WITH_TOP_BORDER}>
        <div style={SECTION_CONTAINER}>
          <div style={SECTION_HEADER_CONTAINER}>
            <h2 style={SECTION_HEADER}>ABOUT</h2>
          </div>

          <div style={CONTENT_FLEX}>
            <p style={PARAGRAPH}>
              I'm a software engineer deeply passionate about the intersection of design and engineering. I build digital products that feel intuitive, perform smoothly, and look beautiful.
            </p>

            <p style={PARAGRAPH}>
              My journey started with curiosity about how things work. Over time, that curiosity evolved into an obsession with creating elegant solutions to complex problems. I think about the user first, then the developer experience, because good code should be beautiful from every angle.
            </p>

            <p style={PARAGRAPH}>
              What drives me is solving hard problems with clean code. I'm particularly interested in web performance, accessible interfaces, and building tools that developers love to use. I believe the best solutions come from understanding both the technical constraints and the human needs.
            </p>

            {/* Skills */}
            <div style={DIVIDER}>
              <p style={LABEL_STYLE}>SKILLS & TOOLS</p>
              <p style={PARAGRAPH}>
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
