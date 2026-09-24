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
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}
