import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data';
import Button from '../global/Button';
import HeroIllustration from './HeroIllustration';
import ResumeModal from './ResumeModal';

const Hero = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a premium feel
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 z-10 w-full overflow-hidden">
      {/* Background Illustration (Centered behind text) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 scale-125 lg:scale-110 pointer-events-none">
        <HeroIllustration />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span 
            variants={itemVariants} 
            className="text-[var(--color-neon-blue)] font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
          >
            Hi, my name is
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-4xl font-light tracking-tight text-gray-300 mb-8 max-w-3xl leading-tight"
          >
            {personalInfo.role}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 max-w-2xl text-lg md:text-xl mb-12 leading-relaxed font-light italic opacity-80"
          >
            "{personalInfo.summary}"
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          >
            <Button 
              href="#projects" 
              variant="primary" 
              className="w-full sm:w-auto px-12 py-4 rounded-full bg-white text-black border-none hover:bg-gray-200 shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => setIsResumeOpen(true)} 
              variant="secondary" 
              className="w-full sm:w-auto px-12 py-4 rounded-full border-white/20 hover:border-white/40 text-white"
            >
              View Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] text-white tracking-widest uppercase opacity-50">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
