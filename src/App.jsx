import React from 'react';
import Navbar from './components/global/Navbar';
import PremiumParticles from './components/global/PremiumParticles';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/global/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-dark-bg)] text-white font-sans antialiased overflow-x-hidden scroll-smooth selection:bg-[var(--color-neon-blue)] selection:text-black">
      <PremiumParticles />
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
