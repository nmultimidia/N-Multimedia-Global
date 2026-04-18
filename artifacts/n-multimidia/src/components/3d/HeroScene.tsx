import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      const orb = container.querySelector('.orb') as HTMLElement;
      if (orb) {
        orb.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(ellipse at 40% 40%, #7c3aed 0%, #4c1d95 40%, #1e1b4b 70%, transparent 100%)',
          filter: 'blur(1px)',
          opacity: 0.6,
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.65, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 60% 60%, #3b82f6 0%, #1d4ed8 40%, transparent 70%)',
          filter: 'blur(20px)',
          opacity: 0.3,
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            background: i % 2 === 0 ? '#7c3aed' : '#3b82f6',
            top: `${15 + (i * 10)}%`,
            left: `${10 + (i * 11)}%`,
            filter: 'blur(1px)',
            opacity: 0.4,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(124,58,237,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59,130,246,0.08) 0%, transparent 50%)
          `,
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="150" cy="300" r="80" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
        <circle cx="280" cy="300" r="100" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <circle cx="410" cy="300" r="120" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
        <circle cx="540" cy="300" r="140" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <circle cx="670" cy="300" r="160" fill="none" stroke="#7c3aed" strokeWidth="0.5" />
        <circle cx="800" cy="300" r="180" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
