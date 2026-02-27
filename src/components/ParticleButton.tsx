import { useRef, useState } from 'react';
import gsap from 'gsap';
import './ParticleButton.css';

interface ParticleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ParticleButton({ children, onClick, className = '' }: ParticleButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isExploding, setIsExploding] = useState(false);

  const createParticles = (x: number, y: number) => {
    const container = document.body;
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'magic-particle';
      container.appendChild(particle);

      const size = Math.random() * 6 + 2;
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 150 + 50;
      const destinationX = x + Math.cos(angle) * velocity;
      const destinationY = y + Math.sin(angle) * velocity;

      gsap.set(particle, {
        x,
        y,
        width: size,
        height: size,
        backgroundColor: i % 2 === 0 ? '#ff0000' : '#8b0000',
        boxShadow: '0 0 10px #ff0000',
      });

      gsap.to(particle, {
        x: destinationX,
        y: destinationY,
        opacity: 0,
        scale: 0,
        duration: Math.random() * 0.5 + 0.5,
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isExploding) return;
    setIsExploding(true);
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    createParticles(x, y);

    // Lightning spark ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'lightning-ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    setTimeout(() => setIsExploding(false), 1000);
    onClick?.();
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = buttonRef.current;
    if (!btn) return;
    
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <button
      ref={buttonRef}
      className={`particle-button ${className}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="button-content">{children}</span>
      <div className="button-glow" />
    </button>
  );
}
