import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card p-6 border-t border-l border-[var(--color-glass-border)] bg-[var(--color-glass)] rounded-2xl hover:border-[var(--color-neon-blue)]/50 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
