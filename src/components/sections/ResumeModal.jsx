import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiDownload } from 'react-icons/hi';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
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
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-2xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full h-full max-h-[90vh] bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-3xl overflow-hidden flex flex-col pointer-events-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-[var(--color-glass-border)] bg-black/40 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center font-bold text-xs text-white">PDF</div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight leading-none">Sumit_Sulabh_Resume.pdf</h2>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">High-Fidelity Document Viewer</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="/resume.png" 
                target="_blank"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-lg transition-all border border-white/10"
              >
                Open High-Res
              </a>
              <a 
                href="/resume.png" 
                download="Sumit_Sulabh_Resume.png"
                className="flex items-center gap-2 px-6 py-2 bg-[var(--color-neon-blue)] text-black font-bold text-sm rounded-lg hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
              >
                <HiDownload size={18} />
                Download
              </a>
              <div className="w-[1px] h-6 bg-white/10 mx-1"></div>
              <button 
                onClick={onClose}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10"
              >
                <HiX size={20} />
              </button>
            </div>
          </div>

          {/* Scrollable Document Area */}
          <div className="flex-grow overflow-y-auto p-4 md:p-8 bg-[#1a1a1a] custom-scrollbar flex justify-center">
            <div className="max-w-4xl w-full shadow-[0_30px_60px_rgba(0,0,0,0.5)] bg-white rounded-sm overflow-hidden border border-white/10">
              <img 
                src="/resume.png" 
                alt="Sumit Sulabh Resume" 
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x1100?text=Resume+Preview+Not+Available';
                }}
              />
            </div>
          </div>

          {/* Footer Info */}
          <div className="p-4 text-center text-xs text-gray-400 border-t border-[var(--color-glass-border)] bg-black/40">
            Scroll to view the full document
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
