import { motion } from 'motion/react';
import Scene3D from '../components/Scene3D';
import ParticleButton from '../components/ParticleButton';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Scene3D showPortal={true} />
      
      <div className="hero-content">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="hero-title text-glow-neon glitch-effect">codesy'26</h1>
          <p className="hero-tagline">Enter the Upside Down of Innovation</p>
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ParticleButton onClick={() => window.location.href = '#events'}>
            Explore Events
          </ParticleButton>
          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel" />
            </div>
            <span>Scroll to Enter</span>
          </div>
        </motion.div>
      </div>

      {/* Parallax Depth Elements */}
      <div className="parallax-layer layer-1" />
      <div className="parallax-layer layer-2" />
    </div>
  );
}
