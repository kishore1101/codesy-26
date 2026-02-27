import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import './Navbar.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Events', path: '/events' },
  { name: 'Team', path: '/team' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="glitch-effect">codesy'26</Link>
      </div>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path} 
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div 
                  className="nav-underline" 
                  layoutId="underline"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
