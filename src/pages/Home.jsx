import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('home-lock');
    document.body.classList.add('home-lock');
    return () => {
      document.documentElement.classList.remove('home-lock');
      document.body.classList.remove('home-lock');
    };
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
