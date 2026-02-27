import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import './IntroLoader.css';

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000);
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="lightning-flash" />
          <div className="fog-overlay" />
          
          <motion.div
            className="intro-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="intro-title glitch-effect">codesy'26</h1>
            <p className="intro-subtitle">The Upside Down is Calling</p>
          </motion.div>

          <div className="loader-bar">
            <motion.div
              className="loader-progress"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
