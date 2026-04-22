import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Palette, Cpu, Database } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      title: "Data Science & ML",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Scikit-learn", level: 90 },
        { name: "TensorFlow & PyTorch", level: 85 },
        { name: "Pandas & NumPy", level: 95 },
        { name: "EDA & Feature Engineering", level: 90 },
      ]
    },
    {
      title: "Computer Vision",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "OpenCV & Image Processing", level: 95 },
        { name: "YOLOv8 & Deep SORT", level: 90 },
        { name: "Histogram & Spatial Filtering", level: 85 },
        { name: "OCR (Tesseract)", level: 88 },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-sky-500 to-blue-600",
      skills: [
        { name: "React.js & TypeScript", level: 90 },
        { name: "Tailwind CSS & Bootstrap", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      color: "from-rose-400 to-pink-600",
      skills: [
        { name: "Figma & Wireframing", level: 88 },
        { name: "Prototyping & Design Systems", level: 85 },
        { name: "User Research", level: 80 },
        { name: "Responsive Design", level: 92 },
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600",
      skills: [
        { name: "Web Scraping (REST, GraphQL)", level: 92 },
        { name: "Playwright & BeautifulSoup", level: 88 },
        { name: "RapidFuzz & Entity Resolution", level: 85 },
        { name: "Parquet & Data Pipelines", level: 82 },
      ]
    },
    {
      title: "Backend & Tools",
      icon: <Server className="w-6 h-6" />,
      color: "from-amber-500 to-orange-600",
      skills: [
        { name: "Node.js & Express.js", level: 75 },
        { name: "MySQL & MongoDB", level: 70 },
        { name: "Git & GitHub", level: 90 },
        { name: "Python", level: 95 },
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 noise-bg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-orb-2" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Technical{' '}
            <span className="text-shimmer">
              Proficiency
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive overview of my expertise across Data Science, Web Development, and Computer Vision
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              custom={categoryIndex}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-3xl p-6 sm:p-8 group"
            >
              <div className="flex items-center mb-10">
                <motion.div
                  className={`p-4 bg-gradient-to-br ${category.color} rounded-2xl text-white shadow-lg`}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  animate={{ boxShadow: ["0 0 15px rgba(34,211,238,0.1)", "0 0 30px rgba(34,211,238,0.3)", "0 0 15px rgba(34,211,238,0.1)"] }}
                  transition={{ boxShadow: { duration: 3, repeat: Infinity }, scale: { duration: 0.3 } }}
                >
                  {category.icon}
                </motion.div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{category.title}</h3>
                  <p className="text-sm text-cyan-400 font-medium">Professional Level</p>
                </div>
              </div>

              <div className="space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.08 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-end">
                      <span className="text-gray-200 font-semibold tracking-wide text-sm">{skill.name}</span>
                      <motion.span
                        className="text-cyan-400 font-bold text-xs"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 + 1 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden border border-white/5">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                        viewport={{ once: true }}
                        style={{ boxShadow: "0 0 12px rgba(34,211,238,0.4)" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-panel rounded-3xl p-10 flex flex-col items-center max-w-4xl mx-auto animate-border-glow relative overflow-hidden">
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-[80px]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cpu className="w-12 h-12 text-cyan-400 mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">The Learning Loop</h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              In the rapidly evolving world of AI and Web, I stay ahead by continuously 
              integrating new technologies into my workflow. Currently exploring advanced 
              Large Language Model integration and real-time edge computing.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;