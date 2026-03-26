import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, onClick, href, download, variant = 'primary', className = '' }) => {
  const baseClasses = "relative px-6 py-3 font-mono text-sm md:text-base font-medium rounded-md overflow-hidden transition-all duration-300 group inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-transparent text-[var(--color-neon-blue)] border border-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue)] hover:text-black shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]",
    secondary: "bg-[var(--color-glass)] text-white border border-[var(--color-glass-border)] hover:border-gray-400 backdrop-blur-md",
  };

  const Content = () => (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href} 
        download={download}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        target={href.startsWith('http') ? "_blank" : "_self"}
        rel="noreferrer"
      >
        <Content />
      </motion.a>
    );
  }

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <Content />
    </motion.button>
  );
};

export default Button;
