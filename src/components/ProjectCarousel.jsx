import { useState } from 'react';
import { projects } from '../data/portfolio';
import useReveal, { useSectionReveal } from '../hooks/useReveal';
import usePortfolioScrollLock from '../hooks/usePortfolioScrollLock';
import SystemDiagram from './SystemDiagram';

function TileVisual({ project }) {
  if (project.tileImage) {
    return (
      <div
        className={`case-tile__visual${project.logoTile ? ' case-tile__visual--logo' : ''}`}
        style={{
          background: project.tileBg,
          '--tile-image-padding': project.tileImagePadding || '0',
        }}
      >
        <img
          src={project.tileImage}
          alt={project.title}
          className={`case-tile__img case-tile__img--${project.tileImageFit || 'cover'}`}
        />
      </div>
    );
  }

  return (
    <div className="case-tile__visual case-tile__visual--text" style={{ background: project.tileBg }}>
      <span className="case-tile__icon-label">{project.tileIcon}</span>
    </div>
  );
}

function CaseSlide({ project, isActive }) {
  const brandLogo = project.logoSmall || project.logo;

  return (
    <article className={`case-slide${isActive ? ' case-slide--active' : ''}`} aria-hidden={!isActive}>
      <TileVisual project={project} />

      <div className="case-slide__content">
        <div className="case-slide__top">
          {brandLogo && (
            <img src={brandLogo} alt="" className="case-slide__brand" />
          )}
          <p className="case-slide__period">{project.period}</p>
          <h3 className="case-slide__title">{project.title}</h3>
          <p className="case-slide__subtitle">{project.subtitle}</p>
          <p className="case-slide__desc">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="case-slide__link"
            >
              Visit {project.linkLabel} ↗
            </a>
          )}
        </div>

        <div className="case-slide__metrics">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="case-slide__metric">
              <span className="case-slide__metric-value">{metric.value}</span>
              <span className="case-slide__metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function FeaturedDetail({ project }) {
  const ref = useReveal('up');
  if (!project?.featured) return null;

  return (
    <article className="featured-detail" ref={ref}>
      <div className="featured-detail__header">
        <p className="section-label">Featured Build</p>
        <h3 className="featured-detail__title">{project.title}</h3>
        <p className="featured-detail__subtitle">{project.subtitle}</p>
      </div>

      <div className="featured-detail__grid">
        <div className="featured-detail__phases">
          {project.phases.map((phase) => (
            <div key={phase.num} className="tile-panel">
              <p className="tile-panel__label">{phase.num}</p>
              <p className="tile-panel__title">{phase.title}</p>
              <ul className="tile-panel__list">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="featured-detail__diagram tile-panel tile-panel--dark">
          <SystemDiagram />
        </div>
      </div>

      <div className="tags">
        {project.tags.map((tag, i) => (
          <span key={tag} className={`tag${i < 4 ? ' tag--accent' : ''}`}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function ProjectCarousel() {
  const [active, setActive] = useState(0);
  const sectionRef = useSectionReveal();
  const headerRef = useReveal('up');
  const isScrollLocked = usePortfolioScrollLock(sectionRef, projects.length, setActive);
  const featured = projects.find((p) => p.featured);

  const prev = () => setActive((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setActive((i) => (i === projects.length - 1 ? 0 : i + 1));

  const carouselBody = (
    <>
      <div className="case-studies__header" ref={headerRef}>
        <p className="case-studies__eyebrow">004 · Selected Work</p>
        <h2 className="case-studies__title">What I&apos;ve Built</h2>
        {isScrollLocked && (
          <p className="case-studies__scroll-hint">
            Scroll to explore · {active + 1} / {projects.length}
          </p>
        )}
      </div>

      <div className="case-carousel">
        {!isScrollLocked && (
          <button
            type="button"
            className="case-carousel__nav case-carousel__nav--prev"
            onClick={prev}
            aria-label="Previous project"
          >
            ‹
          </button>
        )}

        <div className="case-carousel__track">
          {projects.map((project, i) => (
            <CaseSlide key={project.id} project={project} isActive={i === active} />
          ))}
        </div>

        {!isScrollLocked && (
          <button
            type="button"
            className="case-carousel__nav case-carousel__nav--next"
            onClick={next}
            aria-label="Next project"
          >
            ›
          </button>
        )}
      </div>

      <div className="case-carousel__footer">
        <div className="case-carousel__dots" role="tablist" aria-label="Projects">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={project.title}
              className={`case-carousel__dot${i === active ? ' case-carousel__dot--active' : ''}`}
              onClick={() => !isScrollLocked && setActive(i)}
              disabled={isScrollLocked}
            />
          ))}
        </div>

        {!isScrollLocked && projects[active]?.link && (
          <a
            href={projects[active].link}
            target="_blank"
            rel="noopener noreferrer"
            className="case-carousel__cta"
          >
            Explore {projects[active].title}
          </a>
        )}
      </div>
    </>
  );

  return (
    <section
      className={`section case-studies${isScrollLocked ? ' case-studies--scroll-lock' : ''}`}
      id="portfolio"
      ref={sectionRef}
    >
      {isScrollLocked ? (
        <div
          className="case-studies__scroll-track"
          data-portfolio-spacer
          style={{ height: `${projects.length * 100}vh` }}
        >
          <div className="case-studies__pin">
            <div className="case-studies__shell">
              <div className="case-studies__panel">{carouselBody}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="case-studies__shell">
          <div className="case-studies__panel">{carouselBody}</div>
        </div>
      )}

      <div className="container">
        <FeaturedDetail project={featured} />
      </div>
    </section>
  );
}
