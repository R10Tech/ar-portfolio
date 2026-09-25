import { useEffect } from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Andrei Roman — Projects';
    return () => {
      document.title = 'Andrei Roman — Portfolio';
    };
  }, []);

  return (
    <>
      <Header />
      <main className="page page--projects">
        <div className="page-intro container">
          <p className="section-label">Projects</p>
          <h1 className="page-intro__title">What I&apos;ve built</h1>
          <p className="page-intro__lede">
            Live products and the work behind them — from first sketch to users.
          </p>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
