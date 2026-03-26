import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../global/GlassCard';
import { FiExternalLink } from 'react-icons/fi';

const CertificationCard = ({ id, title, issuer, date, image, onOpen, index }) => {
  return (
    <GlassCard 
      delay={index * 0.05} 
      className="group cursor-pointer flex flex-col h-full overflow-hidden p-0 rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-500"
      onClick={onOpen}
    >
      <div 
        className="relative h-48 w-full overflow-hidden bg-[#111]"
      >
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Certificate';
          }}
        />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
           <span className="px-5 py-2.5 bg-[var(--color-neon-blue)] text-black font-bold text-sm rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
             Click to View <FiExternalLink />
           </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow bg-[var(--color-glass)]">
        <h3 className="text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-[var(--color-neon-blue)] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm font-medium mb-3">{issuer}</p>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-[var(--color-neon-purple)] text-xs font-mono px-2 py-1 bg-[var(--color-neon-purple)]/10 rounded border border-[var(--color-neon-purple)]/20">
            {date}
          </span>
        </div>
      </div>
    </GlassCard>
  );
};

export default CertificationCard;
