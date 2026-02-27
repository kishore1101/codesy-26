import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1920', // Dark red sky
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1920', // Stormy clouds
  'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?auto=format&fit=crop&q=80&w=1920', // Red moon
  'https://images.unsplash.com/photo-1500674425229-f692875392b1?auto=format&fit=crop&q=80&w=1920', // Dark forest
];

export default function Background() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[index]}
            alt="Supernatural background"
            className="w-full h-full object-cover filter grayscale brightness-50 sepia-[0.5] hue-rotate-[320deg]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Red Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />

      {/* Lightning Flash */}
      <div className="lightning-flash absolute inset-0 pointer-events-none z-20" />

      {/* Fog Layers */}
      <div className="fog-container">
        <div className="fog-layer opacity-30" style={{ animationDuration: '40s' }} />
        <div className="fog-layer opacity-20" style={{ animationDuration: '70s', animationDirection: 'reverse' }} />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)] pointer-events-none" />
    </div>
  );
}
