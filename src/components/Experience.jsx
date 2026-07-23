import { experience } from '../data/portfolio';
import useReveal, { useSectionReveal } from '../hooks/useReveal';

export default function Experience() {
  const sectionRef = useSectionReveal();
  const headerRef = useReveal('up');
  const listRef = useReveal('up', 0.06);

  return (
    <section className="section experience" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="section-header section-header--split" ref={headerRef}>
          <div>
            <p className="section-label">Experience</p>
            <h2 className="section-title">Professional Work</h2>
          </div>
          <p className="section-header__note">
            Systems integration, embedded development, and electrical validation.
          </p>
        </div>

        <div className="experience__list" ref={listRef}>
          {experience.map((item, i) => (
            <article
              key={`${item.role}-${item.period}`}
              className={`exp-row${i === 0 ? ' exp-row--featured' : ''}`}
              style={{ '--stagger': i }}
            >
              <div className="exp-row__meta">
                <p className="exp-row__period">{item.period}</p>
                <p className="exp-row__company">{item.company}</p>
              </div>
              <div className="exp-row__body">
                <h3 className="exp-row__role">{item.role}</h3>
                <ul className="exp-row__bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
