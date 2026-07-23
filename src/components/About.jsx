import { skillGroups } from '../data/portfolio';
import useReveal, { useSectionReveal } from '../hooks/useReveal';

export default function About() {
  const sectionRef = useSectionReveal();
  const aboutRef = useReveal('left');
  const skillsRef = useReveal('right', 0.08);

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__layout" ref={aboutRef}>
          <div className="about__aside">
            <p className="section-label">Who I Am</p>
            <h2 className="about__headline">
              From <em>concept</em> to <em>live deployment</em>
            </h2>
            <div className="about__role-badge">
              <span className="about__role-dot" />
              Systems Integration Engineer · Oracle
            </div>
          </div>

          <div className="about__text">
            <p className="about__lead">
              Electronic Systems Engineering Technology graduate with hands-on experience in
              embedded systems and electrical validation. My background spans SolidWorks product
              design, embedded Python/I2C development, PLC verification, and Linux-based systems
              integration across enterprise utility infrastructure.
            </p>
            <p>
              Most recently a Systems Integration Engineer at Oracle, working on NMS deployments
              for major utility clients. I also build independent products — Altus, a fitness app
              with nearly 3,000 users, and Kinetiq Science, a computer-vision platform for athletic
              injury prevention.
            </p>
          </div>
        </div>

        <div className="skills-section">
          <div className="skills__layout" ref={skillsRef} id="skills">
            <div className="skills__intro">
              <h3 className="skills__aside-title">
                Core
                <br />
                Skills
              </h3>
              <p className="skills__aside-note">
                Languages, lab equipment, and protocols from my degree and professional work.
              </p>
            </div>
            <div className="skills__groups">
              {skillGroups.map((group, i) => (
                <div key={group.label} className="skills__group" style={{ '--stagger': i }}>
                  <p className="skills__group-label">
                    <span className="skills__group-num">{String(i + 1).padStart(2, '0')}</span>
                    {group.label}
                  </p>
                  <div className="skills__pills">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skills__pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
