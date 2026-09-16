import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollFillText from '../components/ScrollFillText';
import { connectLinks, intent, madeLinks } from '../data/portfolio';

function LinkMark({ mark }) {
  if (mark === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" className="links-card__mark-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.48h4.56V24H.22V8.48zM8.64 8.48h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.78h-4.56v-7.78c0-1.86-.03-4.24-2.58-4.24-2.58 0-2.98 2.02-2.98 4.1V24H8.64V8.48z"
        />
      </svg>
    );
  }

  return <span className="links-card__mark-letter">S</span>;
}

function LinkCard({ item }) {
  return (
    <a
      href={item.href}
      className="links-card"
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noopener noreferrer' : undefined}
    >
      <span
        className={`links-card__mark${item.logoFit === 'contain' ? ' links-card__mark--contain' : ''}`}
        style={item.markBg ? { background: item.markBg } : undefined}
      >
        {item.logo ? <img src={item.logo} alt="" /> : <LinkMark mark={item.mark} />}
      </span>
      <span className="links-card__text">
        <span className="links-card__title">{item.title}</span>
        {item.description && <span className="links-card__desc">{item.description}</span>}
      </span>
      <span className="links-card__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function Links() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'Andrei Roman — Links';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Header />
      <main className="links-page">
        <section className="intent">
          <div className="container intent__intro">
            <p className="section-label">What drives the work</p>
            <h1 className="intent__title">{intent.title}</h1>
            <p className="intent__hint">
              <span>Scroll to read</span>
              <a href="#made" className="intent__skip">
                See what I’ve made
              </a>
            </p>
          </div>

          <ScrollFillText paragraphs={intent.paragraphs} attribution={intent.attribution} />
        </section>

        <section className="links-made" id="made">
          <div className="container links-made__inner">
            <p className="section-label">What I’ve made</p>
            <h2 className="links-made__title">Everything live</h2>

            <nav className="links-stack" aria-label="Products">
              {madeLinks.map((item) => (
                <LinkCard key={item.href} item={item} />
              ))}
            </nav>

            <p className="links-made__divider">Connect</p>

            <nav className="links-stack" aria-label="Connect">
              {connectLinks.map((item) => (
                <LinkCard key={item.href} item={item} />
              ))}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
