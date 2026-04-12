import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export default function Home() {
  return (
    <main className={`${playfair.variable} ${inter.variable} ${jetbrains.variable} min-h-screen bg-cream`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-display text-xl text-soft-charcoal">kalina</span>
          <div className="flex gap-8 text-sm font-sans text-warm-gray">
            <a href="#about" className="hover:text-rose transition-colors duration-300">about</a>
            <a href="#experience" className="hover:text-rose transition-colors duration-300">experience</a>
            <a href="#projects" className="hover:text-rose transition-colors duration-300">projects</a>
            <a href="#contact" className="hover:text-rose transition-colors duration-300">contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-lavender-light rounded-full opacity-30 blur-3xl animate-float" />
        <div className="absolute bottom-32 left-16 w-64 h-64 bg-blush rounded-full opacity-25 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-lavender rounded-full opacity-15 blur-3xl animate-pulse-soft" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-rose font-mono text-sm mb-4 animate-fade-in">hi there, i&apos;m</p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-soft-charcoal mb-6 animate-slide-up">
            Kalina
          </h1>
          <h2 className="font-display text-2xl md:text-3xl text-warm-gray mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="gradient-text">Software Developer</span>
          </h2>
          <p className="font-sans text-warm-gray text-lg max-w-xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
            I&apos;m a software developer based in Toronto, hopefully relocating to 
            NYC. I enjoy building clean, user-centered digital experiences 
            and thoughtful applications.
          </p>
          <div className="mt-10 flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="px-6 py-3 bg-rose text-white rounded-full text-sm font-sans hover:bg-rose-deep transition-all duration-300 hover-lift">
              see my work
            </a>
            <a href="#contact" className="px-6 py-3 border border-lavender text-warm-gray rounded-full text-sm font-sans hover:bg-lavender-light transition-all duration-300">
              get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-rose font-mono text-sm">01.</span>
            <h2 className="font-display text-3xl text-soft-charcoal">about me</h2>
            <div className="flex-1 h-px bg-lavender-light" />
          </div>
          
          <div className="grid md:grid-cols-[3fr_2fr] gap-12">
            <div className="space-y-4 font-sans text-warm-gray leading-relaxed">
              <p>
                Hello! I&apos;m Kalina, a software developer who enjoys building 
                well-crafted applications. My interest in development started early 
                and has grown into a passion for creating things that are both 
                functional and intuitive.
              </p>
              <p>
                I&apos;m currently studying at the{" "}
                <span className="text-rose">University of Toronto</span>, where I focus 
                on software engineering. I care deeply about writing clean, 
                accessible code and designing thoughtful user experiences.
              </p>
              <p>
                Outside of work, I&apos;m always exploring new technologies, reading, 
                or working on side projects that keep me learning.
              </p>
              
              <div className="pt-6">
                <p className="text-sm text-rose mb-3">technologies I&apos;ve been working with:</p>
                <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                  {['TypeScript', 'React / Next.js', 'Python', 'Java', 'Node.js', 'Tailwind CSS'].map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <span className="text-rose text-xs">▹</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blush to-lavender opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-2xl border-2 border-lavender translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
                {/* Placeholder for photo */}
                <div className="relative rounded-2xl w-full h-full bg-gradient-to-br from-lavender-light to-blush flex items-center justify-center">
                  <span className="font-display text-4xl text-white/60">K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-soft-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-rose font-mono text-sm">02.</span>
            <h2 className="font-display text-3xl text-soft-charcoal">where I&apos;ve worked</h2>
            <div className="flex-1 h-px bg-lavender-light" />
          </div>

          <div className="space-y-12">
            {[
              {
                role: "Software Developer Intern",
                company: "Company Name",
                period: "May 2024 — Aug 2024",
                bullets: [
                  "Developed and maintained web applications using React and TypeScript",
                  "Collaborated with cross-functional teams to ship user-facing features",
                  "Improved application performance and wrote comprehensive unit tests",
                ],
              },
              {
                role: "Teaching Assistant",
                company: "University of Toronto",
                period: "Sep 2023 — Apr 2024",
                bullets: [
                  "Led weekly tutorial sessions for introductory computer science courses",
                  "Provided mentorship and guidance to students on programming assignments",
                  "Created supplementary learning materials and practice problems",
                ],
              },
            ].map((job, i) => (
              <div key={i} className="group relative pl-8 border-l-2 border-lavender hover:border-rose transition-colors duration-300">
                <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-lavender group-hover:bg-rose transition-colors duration-300" />
                <h3 className="font-sans font-semibold text-soft-charcoal">
                  {job.role}{" "}
                  <span className="text-rose">@ {job.company}</span>
                </h3>
                <p className="font-mono text-sm text-warm-gray mt-1">{job.period}</p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-warm-gray text-sm">
                      <span className="text-rose mt-1.5 text-xs">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-rose font-mono text-sm">03.</span>
            <h2 className="font-display text-3xl text-soft-charcoal">things I&apos;ve built</h2>
            <div className="flex-1 h-px bg-lavender-light" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Project One",
                description: "A full-stack web application with real-time features and a clean, intuitive interface. Built with modern technologies and a focus on user experience.",
                tech: ["React", "Node.js", "PostgreSQL", "Socket.io"],
              },
              {
                title: "Project Two",
                description: "A mobile-first application designed to help users stay organized and productive with a polished user experience.",
                tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
              },
              {
                title: "Project Three",
                description: "A tool that brings ideas to life through interactive visualizations and intuitive design.",
                tech: ["Python", "Flask", "D3.js", "AWS"],
              },
              {
                title: "Project Four",
                description: "A collaborative platform that connects people and makes sharing ideas simple and seamless.",
                tech: ["React Native", "Firebase", "TypeScript"],
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-soft-white border border-lavender-light hover:border-blush hover-lift cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-lavender-light flex items-center justify-center">
                    <span className="text-lavender-dark font-mono text-sm font-semibold">0{i + 1}</span>
                  </div>
                  <div className="flex gap-3 text-warm-gray">
                    <a href="#" className="hover:text-rose transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="hover:text-rose transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <h3 className="font-sans font-semibold text-lg text-soft-charcoal group-hover:text-rose transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-lavender-dark bg-lavender-light/50 px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-soft-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-rose font-mono text-sm mb-4">04. what&apos;s next?</p>
          <h2 className="font-display text-4xl md:text-5xl text-soft-charcoal mb-6">
            Get In Touch
          </h2>
          <p className="text-warm-gray font-sans leading-relaxed mb-10">
            I&apos;m always open to new opportunities and would love to connect. 
            Whether you have a question, a project idea, or just want to say hi — 
            feel free to reach out.
          </p>
          <a
            href="mailto:hello@kalina.dev"
            className="inline-block px-8 py-4 border-2 border-rose text-rose rounded-full font-sans text-sm hover:bg-rose hover:text-white transition-all duration-300 hover-lift"
          >
            say hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {[
            { label: "GitHub", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "mailto:hello@kalina.dev" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-warm-gray text-sm hover:text-rose transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-warm-gray/60 text-xs font-mono">
          designed &amp; built by kalina
        </p>
      </footer>
    </main>
  );
}
