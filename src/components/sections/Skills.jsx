import React from 'react';
import SectionWrapper from '../global/SectionWrapper';
import { skills } from '../../data';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Skills & Technologies">
      <div className="space-y-12">
        {skills.map((category, catIndex) => (
          <div key={category.category} className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <h3 className="text-xl font-bold text-white whitespace-nowrap">
                {category.category}
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-[var(--color-neon-blue)]/50 to-transparent"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {category.items.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  {...skill} 
                  index={index + catIndex * 4} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
