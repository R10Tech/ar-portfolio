import { services } from '../data/portfolio';
import useReveal, { useSectionReveal } from '../hooks/useReveal';

export default function Services() {
  const sectionRef = useSectionReveal();
  const headerRef = useReveal('up');
  const gridRef = useReveal('up', 0.06);

  return (
    <section className="section services" id="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <p className="section-label">What I Do</p>
          <h2 className="section-title">Services &amp; Skills</h2>
        </div>

        <div className="services__bento" ref={gridRef}>
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`service-tile service-tile--${service.accent}`}
              style={{ '--stagger': i }}
            >
              <span className="service-tile__num">{service.num}</span>
              <h3 className="service-tile__title">{service.title}</h3>
              <p className="service-tile__desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
