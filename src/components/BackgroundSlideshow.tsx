import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import './BackgroundSlideshow.css';

const images = [
  'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1500674425229-f692875392b1?auto=format&fit=crop&q=80&w=1920',
  'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1920',
];

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="background-slideshow">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="slideshow-image-container"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <img
            src={images[index]}
            alt="Supernatural background"
            className="slideshow-image"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>
      <div className="vignette" />
      <div className="red-overlay" />
    </div>
  );
}
