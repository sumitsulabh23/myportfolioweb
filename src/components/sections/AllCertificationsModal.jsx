import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import CertificationCard from './CertificationCard';

const AllCertificationsModal = ({ isOpen, onClose, certifications, onSelectCert }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10"
      >
        {/* Backdrop glass */}
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-2xl"
          onClick={onClose}
        ></div>

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-7xl h-full max-h-[90vh] bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-3xl overflow-hidden flex flex-col pointer-events-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-glass-border)] bg-black/20">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Full Certification Gallery</h2>
              <p className="text-gray-400 text-sm mt-1">Verified achievements and professional milestones</p>
            </div>
            <button 
              onClick={onClose}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard 
                  key={cert.id}
                  {...cert} 
                  index={index}
                  onOpen={() => onSelectCert(cert)}
                />
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="p-4 text-center text-xs text-gray-500 border-t border-[var(--color-glass-border)] bg-black/20">
             Scroll to explore all {certifications.length} certifications
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AllCertificationsModal;
