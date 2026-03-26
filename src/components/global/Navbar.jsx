import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[var(--color-glass-border)] shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-white">Sumit</span>
            <span className="text-[var(--color-neon-blue)]">.</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[var(--color-neon-blue)] border-b-2 border-[var(--color-neon-blue)]"
              className="text-gray-300 hover:text-white cursor-pointer font-medium text-sm tracking-wide transition-colors py-1 border-b-2 border-transparent"
            >
              <span className="text-[var(--color-neon-blue)] mr-1 opacity-70">0{navLinks.indexOf(link) + 1}.</span> {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-[var(--color-glass-border)] flex flex-col items-center gap-6 overflow-hidden"
          >
            <div className="py-8 flex flex-col gap-6 w-full items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  activeClass="text-[var(--color-neon-blue)] font-bold"
                  className="text-gray-300 text-lg hover:text-[var(--color-neon-blue)] cursor-pointer"
                >
                  <span className="text-[var(--color-neon-blue)] mr-2 opacity-70">0{navLinks.indexOf(link) + 1}.</span>{link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
