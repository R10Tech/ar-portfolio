import { stats } from '../data/portfolio';
import { NavLink } from '../lib/router';
import SiteVideo from './SiteVideo';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <SiteVideo className="hero__tile" />

      <div className="hero__copy">
        <h1 className="hero__display">
          <span>Andrei</span>
          <span>Roman</span>
        </h1>
        <p className="hero__lede">
          A pixel-minded portfolio for products I actually care about.
        </p>
        <div className="hero__cta">
          <NavLink to="/projects" className="btn btn-primary">
            View my work
          </NavLink>
          <NavLink to="/about" className="btn btn-outline">
            About me
          </NavLink>
        </div>
        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
