import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Cpu } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { icon: <Code className="w-6 h-6" />, delay: 0, x: '10%', y: '20%' },
    { icon: <Database className="w-5 h-5" />, delay: 1, x: '80%', y: '30%' },
    { icon: <Palette className="w-5 h-5" />, delay: 2, x: '15%', y: '70%' },
    { icon: <Cpu className="w-6 h-6" />, delay: 3, x: '85%', y: '80%' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-cyan-400/20"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;