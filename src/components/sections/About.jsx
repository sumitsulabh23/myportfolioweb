import React from 'react';
import SectionWrapper from '../global/SectionWrapper';
import GlassCard from '../global/GlassCard';
import { aboutMe, personalInfo } from '../../data';
import { HiOutlineLightBulb, HiOutlineStar, HiOutlineShieldCheck } from 'react-icons/hi';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
          <p>{aboutMe.intro}</p>
          <p>{aboutMe.background}</p>
          <p>{aboutMe.passion}</p>
          
          <div className="flex gap-6 pt-4">
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 group text-gray-400 hover:text-white transition-all transition-colors"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-[var(--color-neon-blue)]/20 transition-all border border-white/10 group-hover:border-[var(--color-neon-blue)]/50 shadow-lg">
                <FiGithub className="text-xl group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
            </a>

            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 group text-gray-400 hover:text-white transition-all transition-colors"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#0077B5]/20 transition-all border border-white/10 group-hover:border-[#0077B5]/50 shadow-lg">
                <FiLinkedin className="text-xl group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>

            <a 
              href={personalInfo.socials.leetcode} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-2 group text-gray-400 hover:text-white transition-all transition-colors"
            >
              <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#FFA116]/20 transition-all border border-white/10 group-hover:border-[#FFA116]/50 shadow-lg">
                <SiLeetcode className="text-xl group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">LeetCode</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {personalInfo.metrics.map((metric, index) => (
            <GlassCard 
              key={index} 
              delay={0.1 * (index + 1)} 
              className="flex flex-col items-center justify-center p-6 text-center border-white/5 hover:border-[var(--color-neon-blue)]/30 group transition-all"
            >
              <span className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-[var(--color-neon-blue)] transition-colors">
                {metric.value}
              </span>
              <span className="text-[10px] lg:text-xs font-mono tracking-[0.2em] text-gray-500 uppercase leading-tight">
                {metric.label}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
