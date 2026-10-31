import { TECH_ICONS } from "./constants/techIcons";
import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <nav aria-label="Main navigation" className="nav">
          {/* Navigation links will go here*/}
          <a href="#home" className="nav-logo">
            ~/chelsea
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <p className="hero-prompt">~/portfolio $ whoami</p>

          <h1>
            Hi, I'm Chelsea<span className="accent">.</span>
          </h1>

          <p className="hero-role">Backend Engineer</p>

          <p className="hero-description">
            I build reliable backend systems, APIs, and developer tools.
          </p>
        </section>

        <section id="about" className="about">
          <p className="section-label">01 / ABOUT</p>
          <h2>A little about me.</h2>

          <div className="about-content">
            <p>
              I'm a software engineer with 7 years of experience building
              backend services, APIs, and integrations. My background spans
              payments, authentication, and developer tooling, with a focus on
              Go, Java, and cloud infrastructure.
            </p>

            <p>
              I enjoy solving problems where reliability, maintainability, and
              thoughtful system design matter.
            </p>
          </div>
        </section>

        <section id="experience" className="experience">
          <p className="section-label">02 / EXPERIENCE</p>
          <h2>Where I've worked.</h2>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-date">Most recent role</span>

              <h3>Software Development Engineer II</h3>
              <p className="timeline-company">Splice</p>
              <div className="tech-stack">
                <span className="tech-tag">
                  <img src={TECH_ICONS.go} alt="" />
                  Go
                </span>
                <span className="tech-tag">
                  <img src={TECH_ICONS.graphql} alt="" />
                  GraphQL
                </span>
                <span className="tech-tag">
                  <img src={TECH_ICONS.aws} alt="" />
                  AWS
                </span>
                <span className="tech-tag">
                  <img src={TECH_ICONS.auth0} alt="" />
                  Auth0
                </span>
              </div>

              <p>
                Built and maintained backend services and integrations across
                authentication, payments, and developer tooling.
              </p>
            </article>

            <article className="timeline-item">
              <span className="timeline-date">Previous role</span>

              <h3>Software Engineer</h3>
              <p className="timeline-company">FIS</p>
              <div className="tech-stack">
                <span className="tech-tag">
                  <img src={TECH_ICONS.java} alt="" />
                  Java
                </span>
                <span className="tech-tag">
                  <img src={TECH_ICONS.spring} alt="" />
                  Spring Boot
                </span>
                <span className="tech-tag">Rest APIs</span>
              </div>
              <p>
                Developed Java and Spring Boot services supporting financial
                technology systems and API integrations.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="projects">
          <p className="section-label">03 / PROJECTS</p>
          <h2>Things I've built.</h2>

          <div className="project-grid">
            <article className="project-card">
              <p className="project-type">BACKEND / INFRASTRUCTURE</p>
              <h3>Sift</h3>

              <p className="project-description">
                A Go-based API gateway exploring authentication, request
                handling, and token usage accounting.
              </p>

              <div className="tech-stack">
                <span className="tech-tag">
                  <img src={TECH_ICONS.go} alt="" />
                  Go
                </span>
                <span className="tech-tag">REST APIs</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/chbenony/sift"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source ↗
              </a>
            </article>

            <article className="project-card">
              <p className="project-type">FULL STACK / MUSIC</p>
              <h3>Écoute</h3>

              <p className="project-description">
                A music recommendation application built with React, Typescript,
                Express, and AI-powered recommendations.
              </p>

              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Typescript</span>
                <span className="tech-tag">Express</span>
              </div>

              <a
                className="project-link"
                href="https://github.com/chbenony/ecoute"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source ↗
              </a>
            </article>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">04 / CONTACT</p>

          <h2>Let's connect.</h2>
          <p className="contact-description">
            Interested in collaborating, discussing backend systems, or just
            saying hello? I'd love to hear from you.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/chbenony"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/chbenony"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TECH_ICONS.linkedin} alt="" />
              LinkedIn ↗
            </a>

            <a href="mailto:chelsea_benony@live.com">Email ↗</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
