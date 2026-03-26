import React, { useState, useEffect } from 'react';
import SectionWrapper from '../global/SectionWrapper';
import { certifications } from '../../data';
import CertificationCard from './CertificationCard';
import CertificationModal from './CertificationModal';
import AllCertificationsModal from './AllCertificationsModal';
import { motion } from 'framer-motion';
import Button from '../global/Button';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Featured certifications (Top 3)
  const featuredCerts = certifications.slice(0, 3);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSelectedCert(null);
        setIsGalleryOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="flex flex-col items-center gap-12">
        
        {/* Featured Teaser Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {featuredCerts.map((cert, index) => (
            <CertificationCard 
              key={cert.id} 
              {...cert} 
              index={index} 
              onOpen={() => setSelectedCert(cert)} 
            />
          ))}
        </div>

        {/* Centered CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative pt-4 flex flex-col items-center gap-4"
        >
          <div className="text-gray-400 text-sm font-light text-center max-w-md">
            I have earned {certifications.length} professional certifications across Cyber Security, Networking, and Software Development.
          </div>
          
          <Button 
            onClick={() => setIsGalleryOpen(true)}
            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--color-neon-blue)] hover:text-[var(--color-neon-blue)] transition-all group"
          >
            <span className="flex items-center gap-2">
              View All Certificates 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Button>

          {/* Sublte indicator of more */}
          <div className="flex gap-2 opacity-30 mt-2">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Full Gallery Modal */}
      <AllCertificationsModal 
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        certifications={certifications}
        onSelectCert={(cert) => setSelectedCert(cert)}
      />

      {/* Single Zoom Modal (Works for both featured cards and gallery cards) */}
      <CertificationModal 
        isOpen={!!selectedCert}
        cert={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </SectionWrapper>
  );
};

export default Certifications;
