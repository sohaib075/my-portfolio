import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ScanText, Bot, ShoppingCart, Figma, X, Linkedin, Video, Brain, Activity, Maximize, Database, BarChart3 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  icon: JSX.Element;
  technologies: string[];
  gradient: string;
  features: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  linkedinPostUrl?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Pakistan Supermarket Price Intelligence Pipeline",
      description: "End-to-end data pipeline scraping 525,704 product records from 5 Pakistani supermarket chains with fuzzy entity resolution.",
      longDescription: "Engineered a comprehensive data pipeline scraping 525,704 product records from 5 Pakistani supermarket chains using REST, GraphQL, and HTML scraping with Playwright headless browser fallback. Implemented a 10-stage cleaning pipeline and 3-pass fuzzy entity resolution achieving 18,731 matched rows at avg. confidence 0.925, with full market analysis including price dispersion and cross-store correlation.",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Python", "Pandas", "RapidFuzz", "Playwright", "GraphQL", "Parquet"],
      gradient: "from-blue-600 to-cyan-500",
      features: ["525K+ Product Records Scraped", "10-Stage Cleaning Pipeline", "3-Pass Fuzzy Entity Resolution", "0.925 Avg. Match Confidence", "Cross-Store Price Correlation", "REST, GraphQL & HTML Scraping"],
      githubUrl: "https://github.com/sohaib075"
    },
    {
      title: "Real-Time Object Detection & Tracking",
      description: "YOLOv8 + Deep SORT multi-object detection and tracking system with unique ID assignment and live FPS monitoring.",
      longDescription: "Built a real-time multi-object detection and tracking application using YOLOv8 and Deep SORT with unique ID assignment, live FPS monitoring, and 5 configurable YOLO model sizes. The system processes live video streams with bounding box annotations and class labeling, suitable for surveillance and interactive applications.",
      icon: <Bot className="w-8 h-8" />,
      technologies: ["YOLOv8", "Deep SORT", "OpenCV", "Python", "PyTorch"],
      gradient: "from-green-500 to-emerald-700",
      features: ["Live Multi-Object Tracking", "Deep SORT Unique ID Assignment", "5 Configurable YOLO Models", "Live FPS Monitoring", "Bounding Box Annotations"],
      githubUrl: "https://github.com/sohaib075"
    },
    {
      title: "IntelliMeet: AI Video Conferencing",
      description: "AI-powered system enabling real-time multilingual communication with live translation and meeting summarization.",
      longDescription: "IntelliMeet is a cutting-edge AI video conferencing system designed for global collaboration. It features real-time speech-to-text transcription and live language translation, breaking down language barriers in remote work environments. The system also integrates NLP techniques for automatic meeting summarization and key action item extraction.",
      icon: <Video className="w-8 h-8" />,
      technologies: ["React.js", "Node.js", "WebRTC", "NLP", "Socket.io"],
      gradient: "from-sky-500 to-blue-700",
      features: ["Real-time Multilingual Communication", "Live Speech-to-Text Transcription", "Automatic Meeting Summarization", "Action Item Extraction"],
      githubUrl: "https://github.com/sohaib075/IntelliMeet"
    },
    {
      title: "Titanic Dataset Exploratory Data Analysis",
      description: "Reproducible 5-notebook EDA pipeline covering missing value imputation, feature engineering, and survival analysis.",
      longDescription: "Built a reproducible 5-notebook EDA pipeline covering missing value imputation, feature engineering, survival analysis, Pearson correlation study, and publication-quality visualizations. Performed comprehensive statistical analysis on the Titanic dataset to uncover survival patterns and demographic insights.",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["Pandas", "NumPy", "Seaborn", "Matplotlib", "Jupyter"],
      gradient: "from-indigo-500 to-purple-600",
      features: ["5-Notebook Reproducible Pipeline", "Missing Value Imputation", "Feature Engineering", "Pearson Correlation Study", "Publication-Quality Visualizations"],
      githubUrl: "https://github.com/sohaib075"
    },
    {
      title: "Chest X-ray Pneumonia Detection",
      description: "CV segmentation and image enhancement pipelines to detect and localize bacterial pneumonia regions in chest X-rays.",
      longDescription: "Applied computer vision segmentation and image enhancement pipelines to detect and localize bacterial pneumonia regions in chest X-rays; validated against Kaggle dataset. The system implements contour analysis and automated infection highlighting for diagnostic visualization.",
      icon: <Activity className="w-8 h-8" />,
      technologies: ["Python", "OpenCV", "Computer Vision", "Kaggle"],
      gradient: "from-red-500 to-rose-600",
      features: ["CV Segmentation", "Image Enhancement Pipeline", "Pneumonia Localization", "Kaggle Dataset Validation"],
      githubUrl: "https://github.com/sohaib075"
    },
    {
      title: "TextExtract: AI OCR Platform",
      description: "Full-stack platform for AI-powered text extraction from images and PDFs with multi-language translation.",
      longDescription: "TextExtract is a comprehensive OCR platform that allows users to extract text from images and PDFs with high precision. Integrated with the Google Translate API, it offers instant translation and allows users to download results in various formats including .docx and .pdf.",
      icon: <ScanText className="w-8 h-8" />,
      technologies: ["React.js", "Node.js", "MySQL", "Tesseract.js", "Google Translate API"],
      gradient: "from-cyan-400 to-blue-600",
      features: ["Drag & Drop Uploads", "PDF & Image OCR", "Multi-format Downloads", "Usage Analytics Dashboard"],
      githubUrl: "https://github.com/sohaib075/TextExtract"
    },
    {
      title: "Medical Image Enhancement Studio",
      description: "Interactive GUI tool for medical image enhancement using Histogram Equalization and Gamma Transformation.",
      longDescription: "An interactive GUI tool for medical image enhancement using Histogram Equalization and Gamma Transformation with real-time histogram analysis and batch export. Built with Tkinter, it provides specialized algorithms for enhancing the clarity of medical imagery.",
      icon: <Maximize className="w-8 h-8" />,
      technologies: ["Python", "OpenCV", "NumPy", "Tkinter"],
      gradient: "from-purple-500 to-blue-800",
      features: ["Histogram Equalization", "Gamma Transformation", "Real-time Histogram Analysis", "Batch Export"],
      githubUrl: "https://github.com/sohaib075"
    },
    {
      title: "Zero Lifestyle E-commerce",
      description: "Full-stack responsive e-commerce platform with secure checkout and payment gateway integration.",
      longDescription: "A modern shopping experience featuring a dynamic product catalog, secure payment gateway, and a streamlined user journey. Built with a focus on responsiveness and conversion optimization.",
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      gradient: "from-pink-500 to-rose-600",
      features: ["Secure Payment Integration", "Dynamic Product Catalog", "Responsive Shopping Cart", "Order Management"],
      githubUrl: "https://github.com/sohaib075/Zero-Lifestyle"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 noise-bg relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute bottom-40 -right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-[120px] animate-orb-2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Featured{' '}
            <span className="text-shimmer">
              Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Data pipelines, ML models, web apps, and computer vision systems — built from scratch
          </motion.p>
        </motion.div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
              className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col group cursor-pointer overflow-hidden relative ${index === 0 ? 'lg:col-span-2' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none"
                initial={{ scale: 1 }}
                whileHover={{ scale: 2.5 }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.div
                className={`w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg`}
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.icon}
              </motion.div>
              
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, ti) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 + ti * 0.05 + 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-2 sm:px-3 py-1 bg-white/5 text-gray-400 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 group-hover:border-cyan-400/30 group-hover:text-cyan-400/70 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="glass-panel rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pr-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 p-3 sm:p-4 flex-shrink-0 bg-gradient-to-r ${selectedProject.gradient} rounded-xl sm:rounded-2xl text-white shadow-xl`}>
                    {selectedProject.icon}
                  </div>
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">{selectedProject.title}</h2>
                </div>

                <p className="text-gray-300 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed italic border-l-4 border-cyan-400 pl-4 sm:pl-6">
                  {selectedProject.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                  <div>
                    <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Core Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/5 text-white rounded-lg text-sm border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-400 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-12">
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all text-center flex items-center justify-center gap-2">
                      <Github size={20} />
                      View Project Code
                    </a>
                  )}
                  {selectedProject.liveDemoUrl && (
                    <a href={selectedProject.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2">
                      <ExternalLink size={20} />
                      Live Preview
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CheckCircle2 = ({ className, size = 16 }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default Projects;