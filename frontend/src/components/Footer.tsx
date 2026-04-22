import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/sohaib075',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/muhammad-sohaib-5b894524a/',
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:sohaibmuhammad429@gmail.com',
    }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1, delayChildren: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative z-10 mt-20 glass-panel border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-10">
          
          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div whileHover={{ rotate: 180, scale: 1.1 }} transition={{ duration: 0.5 }}>
                <Code2 className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </motion.div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">Muhammad Sohaib</span>
            </Link>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              Bridging design, development, and data science to deliver seamless experiences and intelligent solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs relative">
              Sitemap
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-cyan-500 rounded-full md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2" />
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 mt-2">
              {navItems.map((item, index) => (
                <motion.li key={item.name} custom={index} whileHover={{ x: 5 }}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs relative">
              Social Presence
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-purple-500 rounded-full md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2" />
            </h3>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass-panel rounded-xl text-gray-400 transition-all duration-300 hover:text-white"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        <motion.div variants={itemVariants} className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            &copy; {currentYear} MS. Redefined with AI Precision.
          </p>
          <div className="flex items-center space-x-6 text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <span className="hover:text-cyan-400 transition-colors cursor-default">Built with React</span>
            <span className="w-1 h-1 bg-cyan-500/50 rounded-full" />
            <span className="hover:text-blue-400 transition-colors cursor-default">Styled with Tailwind</span>
          </div>
        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;