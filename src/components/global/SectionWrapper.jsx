import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen py-24 relative z-10 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 flex items-center gap-4"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white capitalize">{title}</h2>
        <div className="h-[2px] w-24 md:w-48 bg-gradient-to-r from-[var(--color-neon-blue)] to-transparent"></div>
      </motion.div>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
