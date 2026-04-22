import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, ArrowRight, User, Target, ScanText, Brain, Database, Code, Cpu, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServicesSection from '../components/ServicesSection';

const Home = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Data Scientist | Web Developer | Computer Vision Enthusiast";

  // --- ANIMATION LOGIC FOR THE MAIN TITLE ---
  const [titleIndex, setTitleIndex] = useState(0);
  const animatedTitles = [
    { text: "Data", highlight: "Scientist" },
    { text: "Full Stack", highlight: "Developer" },
    { text: "Machine Learning", highlight: "Engineer" },
    { text: "UI/UX", highlight: "Designer" },
    { text: "Computer Vision", highlight: "Enthusiast" },
  ];

  useEffect(() => {
    const titleTimer = setInterval(() => {
      setTitleIndex(prevIndex => (prevIndex + 1) % animatedTitles.length);
    }, 4000); // Change title every 4 seconds

    return () => clearInterval(titleTimer);
  }, []);
  // ------------------------------------------

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 80);

    const cursorEffect = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingEffect);
      clearInterval(cursorEffect);
    };
  }, []);

  const handleDownloadCV = () => {
    const pdfUrl = "/Muhammad_Sohaib_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Muhammad_Sohaib_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/sohaib075',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/muhammad-sohaib-5b894524a/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      url: 'mailto:sohaibmuhammad429@gmail.com',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden noise-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] animate-orb-1" />
        <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] animate-orb-2" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-500/5 rounded-[100%] blur-[120px] animate-pulse" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">
                    Muhammad Sohaib
                  </span>
                </h2>
                
                <div className="h-40 sm:h-44 md:h-48 lg:h-56 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={titleIndex}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                      {animatedTitles[titleIndex].text}{' '}
                      <span className="text-shimmer">
                        {animatedTitles[titleIndex].highlight}
                      </span>
                    </motion.h1>
                  </AnimatePresence>
                </div>

              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="min-h-[80px] sm:min-h-[100px]"
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                  {text}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-cyan-400`}>|</span>
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-lg text-gray-400 leading-relaxed max-w-xl"
              >
                Passionate about building full-stack applications, training ML models, designing
                user-friendly interfaces, and solving real-world problems through data-driven approaches.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={handleDownloadCV}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Download size={20} />
                    <span>Download CV</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <Link
                  to="/contact"
                  className="group px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-full transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex items-center space-x-6 pt-4"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    className={`p-3 glass-panel rounded-full text-gray-400 transition-all duration-300 hover:scale-110 hover:text-white ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end relative"
            >
              <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Outer Glow Layer */}
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 40px rgba(34, 211, 238, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)',
                      '0 0 60px rgba(34, 211, 238, 0.5), 0 0 100px rgba(147, 51, 234, 0.4)',
                      '0 0 40px rgba(34, 211, 238, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)',
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-2 border-transparent bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 absolute inset-0"
                />

                {/* Main Profile Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-purple-600 to-slate-900 p-1">
                    <div className="w-full h-full bg-slate-900 rounded-full p-2 relative overflow-hidden">
                      {/* Glass Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent z-10 rounded-full" />
                      
                      {/* Image Container */}
                      <div className="w-full h-full rounded-full overflow-hidden relative z-0">
                        <img
                          src="/profile-pic.png" 
                          alt="Muhammad Sohaib"
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Animated Ring Effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-cyan-400/30"
                  />
                  
                  {/* Second Ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border border-purple-400/20"
                  />
                </div>
              </motion.div>
            </motion.div>
            
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* About Me Preview Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              About{' '}
              <span className="text-shimmer">
                Me
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
              viewport={{ once: true, margin: "-50px" }} 
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <User className="w-6 h-6 mr-3 text-cyan-400" /> Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Enthusiastic Web Developer, UI/UX Designer, and aspiring Data Scientist at FAST National University. Skilled in React, TypeScript, Python, Pandas, Scikit-learn, TensorFlow, and OpenCV — bridging design, development, and data science to deliver seamless digital experiences.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} 
              viewport={{ once: true, margin: "-50px" }} 
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-400" /> My Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To bridge design and development while solving real-world problems through data-driven approaches — delivering seamless user experiences, intelligent systems, and innovative full-stack applications.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/about"
              className="inline-block group px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Learn More About Me
            </Link>
          </motion.div>

        </div>
      </motion.div>

      {/* Featured Skills Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What I{' '}
              <span className="text-shimmer">
                Specialize In
              </span>
            </h2>
            <p className="text-xl text-gray-300">My core areas of expertise and technical focus</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Data Science", color: "from-blue-400 to-cyan-400", level: "Pandas & Scikit-learn", icon: <Database className="w-8 h-8" /> },
              { name: "Computer Vision", color: "from-purple-400 to-pink-400", level: "OpenCV & YOLOv8", icon: <ScanText className="w-8 h-8" /> },
              { name: "ML Engineering", color: "from-green-400 to-teal-400", level: "TensorFlow & PyTorch", icon: <Brain className="w-8 h-8" /> },
              { name: "Full-Stack Dev", color: "from-sky-400 to-blue-500", level: "React & Node.js", icon: <Code className="w-8 h-8" /> },
              { name: "UI/UX Design", color: "from-rose-400 to-pink-500", level: "Figma & Prototyping", icon: <Palette className="w-8 h-8" /> },
              { name: "Data Engineering", color: "from-yellow-400 to-orange-400", level: "Scraping & Pipelines", icon: <Cpu className="w-8 h-8" /> }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }}
                className="group cursor-default"
              >
                <div className="glass-card rounded-xl p-6 hover:bg-white/10 text-center transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{skill.level}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/skills"
              className="inline-flex items-center space-x-2 px-6 py-3 text-cyan-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="font-medium">View All Skills</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Projects Preview */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured{' '}
              <span className="text-shimmer">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300">Recent work that showcases my capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Pakistan Price Intelligence Pipeline",
                description: "End-to-end data pipeline scraping 525K+ products from 5 supermarket chains with fuzzy entity resolution.",
                tech: ["Python", "Pandas", "RapidFuzz", "Playwright"],
                gradient: "from-cyan-500 to-blue-500",
                icon: <Database className="w-8 h-8" />
              },
              {
                title: "Real-Time Object Detection & Tracking",
                description: "YOLOv8 + Deep SORT multi-object detection with unique ID assignment and live FPS monitoring.",
                tech: ["YOLOv8", "Deep SORT", "OpenCV"],
                gradient: "from-purple-500 to-pink-500",
                icon: <Brain className="w-8 h-8" />
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-8 hover:bg-white/5 shadow-blue-500/10">
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 text-cyan-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="font-medium">View All Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <ServicesSection />

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's collaborate and bring your ideas to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Start a Conversation
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;