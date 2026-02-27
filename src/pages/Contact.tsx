import { motion } from 'motion/react';
import Scene3D from '../components/Scene3D';
import ParticleButton from '../components/ParticleButton';
import './Contact.css';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-page">
      <Scene3D />
      
      <div className="contact-container">
        <motion.h2 
          className="page-title text-glow"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          THE BREACH
        </motion.h2>

        <motion.div
          className="contact-form-wrapper"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" required placeholder=" " />
              <label htmlFor="name">IDENTIFIER</label>
              <div className="input-glow" />
            </div>

            <div className="form-group">
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">SIGNAL SOURCE</label>
              <div className="input-glow" />
            </div>

            <div className="form-group">
              <textarea id="message" required placeholder=" " rows={5} />
              <label htmlFor="message">TRANSMISSION</label>
              <div className="input-glow" />
            </div>

            <div className="form-actions">
              <ParticleButton className="submit-btn">
                SEND SIGNAL
              </ParticleButton>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
