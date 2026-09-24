import { stats } from '../data/portfolio';
import { NavLink } from '../lib/router';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="hero__display">
        <span>Andrei</span>
        <span>Roman</span>
      </h1>
      <p className="hero__lede">
        A pixel-minded portfolio for products I actually care about.
      </p>

      <div className="browser">
        <div className="browser__chrome">
          <span className="browser__dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <p className="browser__url">andrei.roman — portfolio</p>
        </div>

        <div className="browser__stage">
          <div className="browser__copy">
            <p className="browser__hello">// hello, i&apos;m a</p>
            <h2 className="browser__role">
              Founder &amp; Developer<span className="browser__caret">_</span>
            </h2>
            <p className="browser__bio">
              I build things I believe will add value — products I&apos;m genuinely passionate
              about, one useful platform at a time.
            </p>
            <div className="browser__cta">
              <NavLink to="/projects" className="btn btn-primary">
                View my work
              </NavLink>
              <NavLink to="/about" className="btn btn-ghost">
                About me
              </NavLink>
            </div>
          </div>

          <div className="browser__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="browser__stat">
                <span className="browser__stat-value">{stat.value}</span>
                <span className="browser__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
