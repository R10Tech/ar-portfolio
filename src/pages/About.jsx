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
        <div className="page-intro container">
          <p className="section-label">About</p>
          <h1 className="page-intro__title">Who I am and what I do</h1>
          <p className="page-intro__lede">
            Builder, systems engineer, and the person behind Altus, Kinetiq, and Shad.
          </p>
        </div>
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
