import React from 'react';
import { personalInfo } from '../../data';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--color-glass-border)] bg-[#0a0a0a]/80 backdrop-blur-md py-8 mt-10 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        <div className="flex gap-6 mb-2">
          {Object.entries(personalInfo.socials).map(([key, url]) => {
            const Icon = key === 'github' ? FiGithub : key === 'linkedin' ? FiLinkedin : FiInstagram;
            return (
              <a key={key} href={url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        <div className="text-gray-500 font-mono text-sm tracking-wide text-center">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-1 text-xs">Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
