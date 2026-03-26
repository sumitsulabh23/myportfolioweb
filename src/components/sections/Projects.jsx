import React from 'react';
import SectionWrapper from '../global/SectionWrapper';
import GlassCard from '../global/GlassCard';
import { projects } from '../../data';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <GlassCard 
            key={project.id} 
            delay={index * 0.1} 
            className="flex flex-col h-full group p-0 overflow-hidden border-[var(--color-glass-border)] hover:border-[var(--color-neon-blue)]/50 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative h-48 w-full overflow-hidden bg-[#111]">
              <img 
                src={project.image || "https://via.placeholder.com/600x400?text=Project+Coming+Soon"} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
              
              {/* Overlay Links */}
              <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-[var(--color-neon-blue)] transition-colors border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiGithub size={18} />
                </a>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:text-[var(--color-neon-blue)] transition-colors border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-neon-blue)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-[var(--color-neon-blue)] bg-[var(--color-neon-blue)]/10 rounded border border-[var(--color-neon-blue)]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
