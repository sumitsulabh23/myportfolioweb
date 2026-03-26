import React from 'react';
import { motion } from 'framer-motion';

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--color-neon-blue)] opacity-10 blur-[100px] rounded-full"></div>
      
      {/* Floating Glass Shapes */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      ></motion.div>

      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
      ></motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-[var(--color-neon-blue)]/20 rounded-full"
      ></motion.div>

      {/* Main Focal Shape */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-40 h-40 md:w-60 md:h-60 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border border-white/20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center"
      >
        <div className="w-1/2 h-1/2 border-2 border-[var(--color-neon-blue)] opacity-20 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default HeroIllustration;
