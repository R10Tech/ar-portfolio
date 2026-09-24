import { useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Racing from '../components/Racing';
import Footer from '../components/Footer';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Andrei Roman — About';
    return () => {
      document.title = 'Andrei Roman — Portfolio';
    };
  }, []);

  return (
    <>
      <Header />
      <main className="page page--about">
        <About />
        <Services />
        <Experience />
        <Contact />
        <Racing />
      </main>
      <Footer />
    </>
  );
}
