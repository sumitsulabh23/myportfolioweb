import React, { useState } from 'react';
import SectionWrapper from '../global/SectionWrapper';
import GlassCard from '../global/GlassCard';
import Button from '../global/Button';
import { personalInfo } from '../../data';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending
    alert("Message feature is not implemented yet. Please reach out via email directly!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8 flex flex-col justify-center">
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            I'm currently looking for new opportunities, and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors group w-max">
              <div className="p-3 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-full group-hover:border-[var(--color-neon-blue)] transition-colors">
                <FiMail size={20} />
              </div>
              <span className="text-lg font-mono">{personalInfo.email}</span>
            </a>
            
            <div className="flex gap-4 pt-2">
              {Object.entries(personalInfo.socials).map(([key, url]) => {
                let Icon;
                if (key === 'github') Icon = FiGithub;
                else if (key === 'linkedin') Icon = FiLinkedin;
                else if (key === 'leetcode') Icon = SiLeetcode;
                else Icon = FiInstagram;

                return (
                  <a key={key} href={url} target="_blank" rel="noreferrer" className="p-3 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-full text-gray-400 hover:text-[var(--color-neon-blue)] hover:border-[var(--color-neon-blue)] hover:-translate-y-1 transform transition-all duration-300">
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <GlassCard delay={0.2} className="p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono text-gray-400">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#0a0a0a]/50 border border-[var(--color-glass-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono text-gray-400">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#0a0a0a]/50 border border-[var(--color-glass-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono text-gray-400">Message</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="bg-[#0a0a0a]/50 border border-[var(--color-glass-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors resize-none"
              ></textarea>
            </div>

            <button type="submit" className="relative px-6 py-4 font-mono text-base font-bold rounded-md overflow-hidden transition-all duration-300 group bg-transparent text-[var(--color-neon-blue)] border border-[var(--color-neon-blue)] hover:bg-[var(--color-neon-blue)] hover:text-black shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] w-full mt-2">
              Send Message
            </button>
          </form>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
