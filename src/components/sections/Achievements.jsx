import React from 'react';
import SectionWrapper from '../global/SectionWrapper';
import GlassCard from '../global/GlassCard';
import { achievements } from '../../data';
import { SiLeetcode } from 'react-icons/si';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconMap = {
  SiLeetcode: { Icon: SiLeetcode, color: '#FFA116' },
  HiOutlineAcademicCap: { Icon: HiOutlineAcademicCap, color: '#00f0ff' },
  FaShieldAlt: { Icon: FaShieldAlt, color: '#ff4444' }
};

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" title="Key Achievements">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => {
          const config = iconMap[achievement.icon] || iconMap.HiOutlineAcademicCap;
          const { Icon, color } = config;
          
          return (
            <GlassCard 
              key={index} 
              delay={index * 0.1}
              className="group relative overflow-hidden p-8 border-white/5 hover:border-[var(--color-neon-blue)]/50 transition-all duration-500"
            >
              {/* Background Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-neon-blue)]/5 blur-[50px] group-hover:bg-[var(--color-neon-blue)]/10 transition-colors"></div>
              
              <div className="relative z-10 flex flex-col gap-6">
                <div className="w-fit p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-[var(--color-neon-blue)]/30 group-hover:bg-[var(--color-neon-blue)]/5 transition-all duration-500">
                  <Icon className="text-4xl group-hover:scale-110 transition-transform text-white/90" style={{ color }} />
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-[var(--color-neon-blue)] tracking-widest uppercase opacity-70">
                    {achievement.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[var(--color-neon-blue)] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Subtle Progress Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-transparent via-[var(--color-neon-blue)] to-transparent opacity-30"
                ></motion.div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
