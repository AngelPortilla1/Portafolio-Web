import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechGraph from './components/TechGraph';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="portfolio-app">
      {/* Skip navigation for keyboard users */}
      <a href="#about" className="skip-nav">
        {t('skipNav')}
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <TechGraph />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

