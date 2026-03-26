import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ name, Icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.1
        }
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="relative group bg-[var(--color-glass)] backdrop-blur-md border border-[var(--color-glass-border)] rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-transparent"
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[var(--color-neon-blue)] group-hover:via-[var(--color-neon-purple)] group-hover:to-[var(--color-neon-blue)] opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 animate-gradient-xy"></div>
      
      {/* Animated Background Glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: color }}
      ></div>

      {/* Icon Container */}
      <motion.div 
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative z-10 text-4xl"
        style={{ color: color }}
      >
        <Icon />
      </motion.div>

      {/* Skill Name */}
      <span className="relative z-10 text-gray-300 font-medium text-sm group-hover:text-white transition-colors">
        {name}
      </span>

      {/* Neon Border Glow (Bottom) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-full transition-all duration-300"
        style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
      ></div>
    </motion.div>
  );
};

export default SkillCard;
