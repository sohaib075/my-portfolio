import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain, Palette, Database, Code, Server, Cpu, Maximize } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Science & Analytics",
      description: "Building reproducible EDA pipelines, performing statistical analysis, and delivering actionable insights from complex datasets.",
      features: ["Pandas & NumPy", "Seaborn & Matplotlib", "Feature Engineering", "Statistical Analysis"],
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "Building production-ready, scalable, and responsive web applications with modern tech stacks.",
      features: ["React.js & TypeScript", "Node.js & Express.js", "MySQL & MongoDB", "Tailwind CSS"],
      gradient: "from-sky-500 to-blue-700"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Implementing real-time detection, tracking, and medical image analysis systems using state-of-the-art models.",
      features: ["YOLOv8 & Deep SORT", "OpenCV & Tesseract", "Image Segmentation", "Medical Image Enhancement"],
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing user-centric interfaces and high-fidelity prototypes that drive engagement and delight users.",
      features: ["Figma & Wireframing", "Design Systems", "Interactive Prototypes", "Responsive Layouts"],
      gradient: "from-rose-400 to-pink-600"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Designing end-to-end data pipelines with multi-source scraping, fuzzy matching, and automated ETL workflows.",
      features: ["REST & GraphQL Scraping", "Playwright Automation", "RapidFuzz Entity Resolution", "Parquet Storage"],
      gradient: "from-cyan-400 to-emerald-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "ML Engineering",
      description: "Training, optimizing, and deploying machine learning models from prototype to production-ready systems.",
      features: ["Scikit-learn Models", "TensorFlow & PyTorch", "Model Training Pipelines", "Production Workflows"],
      gradient: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="py-24 border-t border-white/5 noise-bg relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-[200px] animate-scale-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core{' '}
            <span className="text-shimmer">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Specialized solutions at the intersection of web technology and artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-6 sm:p-10 h-full relative overflow-hidden">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
                  whileHover={{ scale: 2 }}
                  transition={{ duration: 0.8 }}
                />
                
                <motion.div
                  className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-xl`}
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-y-3">
                  {service.features.map((feature, fi) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + fi * 0.06 + 0.3, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                        animate={{ boxShadow: ["0 0 3px rgba(34,211,238,0.3)", "0 0 8px rgba(34,211,238,0.8)", "0 0 3px rgba(34,211,238,0.3)"] }}
                        transition={{ duration: 2, repeat: Infinity, delay: fi * 0.2 }}
                      />
                      <span className="text-gray-500 text-xs font-medium uppercase tracking-wider group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;