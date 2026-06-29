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
      <Navbar />
      <Hero />
      <div className="metal-divider"></div>
      <About />
      <div className="metal-divider"></div>
      <Projects />
      <div className="metal-divider"></div>
      <TechGraph />
      <div className="metal-divider"></div>
      <Contact />
      <Footer />
    </div>
  );
}
