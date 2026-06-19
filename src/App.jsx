import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Set mouse coordinate variables on the document root
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      
      // Also calculate relative offsets for cards with scroll offsets
      document.documentElement.style.setProperty('--mouse-page-x', `${e.pageX}px`);
      document.documentElement.style.setProperty('--mouse-page-y', `${e.pageY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Dynamic interactive cursor-following spotlight and background visual layers */}
      <div className="bg-glow-container" aria-hidden="true">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>
      <div className="interactive-glow" aria-hidden="true"></div>
      <div className="grid-overlay" aria-hidden="true"></div>

      {/* Main Layout Elements */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
