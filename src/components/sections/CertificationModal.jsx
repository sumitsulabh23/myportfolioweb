import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const CertificationModal = ({ isOpen, cert, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
      window.addEventListener('keydown', handleEsc);
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
    
    return () => {
      document.documentElement.classList.remove('no-scroll');
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!cert) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full max-h-[85vh] bg-transparent rounded-lg overflow-hidden flex flex-col items-center justify-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:text-[var(--color-neon-blue)] rounded-full backdrop-blur-md transition-colors border border-white/10"
            >
              <HiX size={24} />
            </button>

            <div className="flex flex-col h-full">
              <div className="overflow-auto flex-grow flex items-center justify-center p-2 bg-[#000]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/800x600?text=Certificate+Preview';
                  }}
                />
              </div>
              
              <div className="p-6 bg-[var(--color-dark-bg)] border-t border-[var(--color-glass-border)]">
                <h2 className="text-2xl font-bold text-white mb-1">{cert.title}</h2>
                <div className="flex items-center justify-between text-gray-400">
                  <p>{cert.issuer}</p>
                  <p className="font-mono text-[var(--color-neon-purple)]">{cert.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertificationModal;
