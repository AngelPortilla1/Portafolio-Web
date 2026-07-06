import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechGraph from './components/TechGraph';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Skip navigation for keyboard users */}
      <a href="#about" className="skip-nav">
        Saltar al contenido
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
