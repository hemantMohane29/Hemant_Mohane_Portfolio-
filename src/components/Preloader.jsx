import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
        >
          <span className="bg-gradient-to-r from-brand-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
            HM
          </span>
          <motion.span 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-white"
          >
            .
          </motion.span>
        </motion.div>

        {/* Progress Container */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full relative overflow-hidden backdrop-blur-sm">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-500 to-yellow-500"
            animate={{ width: `${percent}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Counter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500"
        >
          Loading <span>{percent}%</span>
        </motion.div>
      </div>

      {/* Decorative background pulses */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"
      />
    </motion.div>
  );
};

export default Preloader;
