import { motion } from 'motion/react';
import Scene3D from '../components/Scene3D';
import './Events.css';

const events = [
  { id: 1, title: 'CODE BREAKER', desc: 'Intense competitive coding battle in the dark.', prize: '$2000', icon: '⚡' },
  { id: 2, title: 'VOID GAMING', desc: 'Esports tournament in the upside down.', prize: '$1500', icon: '🎮' },
  { id: 3, title: 'SHADOW AI', desc: 'Machine learning workshop for the unknown.', prize: '$3000', icon: '👁️' },
  { id: 4, title: 'CYBER GHOST', desc: 'Capture the flag security challenge.', prize: '$2500', icon: '💀' },
];

export default function Events() {
  return (
    <div className="events-page">
      <Scene3D />
      
      <div className="events-container">
        <motion.h2 
          className="page-title text-glow"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          MANIFESTATIONS
        </motion.h2>

        <div className="events-grid">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="event-card"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: -10 }}
            >
              <div className="card-glass" />
              <div className="card-content">
                <span className="event-icon">{event.icon}</span>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.desc}</p>
                <div className="event-footer">
                  <span className="prize-label">PRIZE POOL</span>
                  <span className="prize-amount">{event.prize}</span>
                </div>
              </div>
              <div className="card-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
