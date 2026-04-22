import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring } from 'framer-motion';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Use spring physics for buttery smooth mouse following
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX - 250);
      springY.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY]);

  // Generate elegant floating dust particles (bokeh effect) - reduced count for performance
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030712]">
      {/* 1. Aurora Waves (Slow sweeping conic gradients) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-[100%] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-cyan-500/30 via-purple-500/30 to-blue-500/30 blur-[100px] md:blur-[120px]"
      />
      <motion.div
        animate={{
          rotate: [0, -360],
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[20%] w-[70vw] h-[70vw] rounded-[100%] bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-fuchsia-500/30 via-indigo-500/30 to-cyan-500/30 blur-[100px] md:blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] rounded-[100%] bg-blue-600/30 blur-[100px] md:blur-[150px]"
      />

      {/* 2. Interactive Mouse Spotlight (Only visible on desktop) */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none hidden md:block"
      />

      {/* 3. Floating Dust Particles (Bokeh Effect) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: "100vh", x: `${particle.x}vw`, opacity: 0 }}
          animate={{
            y: ["100vh", "-20vh"],
            x: [`${particle.x}vw`, `${particle.x + (Math.random() * 20 - 10)}vw`],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
          className="absolute rounded-full bg-cyan-100 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: `blur(${Math.random()}px)`,
          }}
        />
      ))}

      {/* 4. Minimal Dot Matrix Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

      {/* 5. Elegant Glass/Noise Blend */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
