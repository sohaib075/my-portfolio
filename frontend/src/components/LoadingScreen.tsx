import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Generate floating particles - reduced for performance
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-[#030712] flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Simplified Aurora Background - reduced from 2 to 1 */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-cyan-500/15 via-purple-500/15 to-blue-500/15 blur-[100px]"
      />

      {/* Floating Particles - reduced count */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            y: [0, -80, 0],
            x: [0, 30, 0],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-cyan-400/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      <div className="text-center space-y-8 p-4 relative z-10">
        {/* Single Animated Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mx-auto w-16 h-16"
        >
          <div className="absolute inset-0 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Title */}
          <div className="flex items-center justify-center space-x-2">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Muhammad Sohaib
            </h1>
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 space-y-2">
            <div className="w-full h-1 bg-cyan-400/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-gray-400 text-xs text-center">
              Loading <span className="text-cyan-400">{progress}%</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;