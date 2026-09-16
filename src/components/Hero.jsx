import { stats } from '../data/portfolio';
import useReveal from '../hooks/useReveal';
import { NavLink } from '../lib/router';

function FloatingTile() {
  return (
    <a
      href="https://altus.fit"
      target="_blank"
      rel="noopener noreferrer"
      className="hero__float-tile"
      aria-label="Altus fitness app — nearly 3,000 users"
    >
      <img src="/assets/altus-icon.png" alt="" className="hero__float-tile-logo" />
      <div className="hero__float-tile-body">
        <p className="hero__float-tile-label">Altus · Live Product</p>
        <p className="hero__float-tile-title">Nearly 3,000 users</p>
        <div className="hero__float-tile-bar" aria-hidden="true">
          <span style={{ width: '78%' }} />
        </div>
      </div>
      <span className="hero__float-tile-arrow">↗</span>
    </a>
  );
}

export default function Hero() {
  const headlineRef = useReveal('left');
  const portraitRef = useReveal('scale', 0.15);
  const statsRef = useReveal('right');
  const subtitleRef = useReveal('up');

  return (
    <section className="hero" id="hero">
      <FloatingTile />

      <div className="container hero__stage">
        <div className="hero__headline" ref={headlineRef}>
          <p className="hero__eyebrow">Systems Integration Engineer</p>
          <h1 className="hero__title">
            Building
            <br />
            <span className="hero__title-accent">Awesome</span>
            <br />
            Projects
          </h1>
        </div>

        <div className="hero__portrait-stack" ref={portraitRef}>
          <div className="hero__portrait">
            <img
              src="/assets/hero-portrait.png"
              alt="Andrei Roman — portrait"
              width={380}
              height={520}
            />
          </div>
        </div>

        <div className="hero__stats" ref={statsRef}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="hero__stat"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className={`hero__stat-value${stat.accent ? ' hero__stat-value--accent' : ''}`}>
                {stat.value}
              </div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="hero__subtitle" ref={subtitleRef}>
          <p>
            Embedded systems, electrical validation, and Linux-based integration — from SolidWorks
            CAD and Python/I2C firmware to NMS deployments and product development.
          </p>
          <NavLink to="/links" className="btn btn-primary hero__links-btn">
            Links
          </NavLink>
        </div>
      </div>
    </section>
  );
}
