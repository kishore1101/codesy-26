import { motion } from 'motion/react';
import Scene3D from '../components/Scene3D';
import './Team.css';

const team = [
  { id: 1, name: 'DR. BRENNER', role: 'CHIEF ARCHITECT', img: 'https://picsum.photos/seed/brenner/400/500' },
  { id: 2, name: 'ELEVEN', role: 'LEAD DEVELOPER', img: 'https://picsum.photos/seed/eleven/400/500' },
  { id: 3, name: 'DUSTIN', role: 'SYSTEMS ENGINEER', img: 'https://picsum.photos/seed/dustin/400/500' },
  { id: 4, name: 'HOPPER', role: 'SECURITY OPS', img: 'https://picsum.photos/seed/hopper/400/500' },
];

export default function Team() {
  return (
    <div className="team-page">
      <Scene3D />
      
      <div className="team-container">
        <motion.h2 
          className="page-title text-glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          THE SYNDICATE
        </motion.h2>

        <div className="team-grid">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              className="team-card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="member-image-container">
                <img src={member.img} alt={member.name} className="member-image" referrerPolicy="no-referrer" />
                <div className="spotlight" />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
