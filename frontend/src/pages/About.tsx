import { motion } from 'framer-motion';
import { GraduationCap, Target, Award, MapPin, Briefcase, Users, CheckCircle2 } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
};

const About = () => {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "QuantumLogics",
      period: "Apr 2026 – Jul 2026",
      description: "Building ML-powered applications with hands-on experience in model development, training pipelines, and production software workflows.",
      skills: ["ML Pipelines", "Model Training", "Production ML"]
    },
    {
      role: "Data Science Intern",
      company: "Hex Softwares Pvt. Ltd.",
      period: "Apr 2026 – May 2026",
      description: "Applied data science techniques to real industry projects; performed data-driven analysis and delivered actionable insights to stakeholders.",
      skills: ["Data Analysis", "Python", "Visualization"]
    },
    {
      role: "Frontend Development Intern",
      company: "Nexus AI Digital",
      period: "2025",
      description: "Selected competitively for a 4-week remote internship. Built AI-integrated frontend applications using React.js and collaborated with cross-functional teams on product delivery.",
      skills: ["React.js", "Vite", "AI Integration"]
    },
    {
      role: "Web Development Intern",
      company: "Team Paxis Pro",
      period: "2025",
      description: "Contributed to frontend development and product hunting tasks in a fast-paced startup environment. Developed and maintained e-commerce features using modern JavaScript frameworks.",
      skills: ["JavaScript", "Responsive Design", "E-commerce"]
    }
  ];

  const leadership = [
    {
      role: "Logistics Co-Head",
      organization: "YPDC (Youth Peace and Development Corps)",
      period: "2025 – Present",
      description: "Co-lead logistics operations for a university youth development society; oversaw vendor coordination, resource allocation, and budget planning for multiple large-scale campus events. Managed and motivated a team of volunteers to ensure timely, high-quality execution of society-wide initiatives.",
      location: "FAST NUCES Faisalabad, Pakistan"
    }
  ];

  const achievements = [
    "8th Semester CS @ FAST NUCES",
    "ML & Data Science Pipeline Expert",
    "Computer Vision (OpenCV, YOLOv8, Deep SORT)",
    "Full-Stack Web Development (React, Node.js)",
    "UI/UX Design (Figma, Prototyping)",
    "Data Engineering & Web Scraping"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 noise-bg relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-orb-2" />

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
            My{' '}
            <span className="text-shimmer">
              Journey
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Data science, web development, and computer vision — my path to impact
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Education & Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div variants={fadeInLeft} className="glass-card rounded-2xl p-6 sm:p-8 animate-border-glow">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  <GraduationCap className="w-6 h-6 mr-3 text-cyan-400" />
                </motion.div>
                Education
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400 mt-1" />
                  <div>
                    <p className="text-white font-semibold">FAST National University</p>
                    <p className="text-gray-400 text-sm">Faisalabad, Pakistan</p>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="pl-8 border-l-2 border-cyan-400/30"
                >
                  <p className="text-gray-200">BS Computer Science</p>
                  <p className="text-cyan-400 text-sm font-medium">8th Semester • 2026</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeInLeft} className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Award className="w-6 h-6 mr-3 text-cyan-400" />
                </motion.div>
                Highlights
              </h2>
              <div className="space-y-4">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.4 }}>
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:text-green-400 transition-colors" />
                    </motion.div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Experience & Leadership */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Experience Section */}
            <motion.div variants={fadeInRight} className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />
                </motion.div>
                Professional Experience
              </h2>
              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:to-transparent"
                  >
                    <motion.div
                      className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-cyan-400"
                      animate={{ boxShadow: ["0 0 5px rgba(34,211,238,0.3)", "0 0 20px rgba(34,211,238,0.8)", "0 0 5px rgba(34,211,238,0.3)"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                    <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs font-semibold"
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    <p className="text-cyan-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((s, si) => (
                        <motion.span
                          key={si}
                          whileHover={{ scale: 1.1, borderColor: "rgba(34, 211, 238, 0.5)" }}
                          className="text-[10px] uppercase tracking-wider font-bold text-gray-400 border border-gray-700 px-2 py-0.5 rounded cursor-default"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Leadership Section */}
            <motion.div variants={fadeInRight} className="glass-card rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Users className="w-6 h-6 mr-3 text-cyan-400" />
                </motion.div>
                Leadership & Activities
              </h2>
              {leadership.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full text-xs font-semibold"
                    >
                      {item.period}
                    </motion.span>
                  </div>
                  <p className="text-purple-400 font-medium">{item.organization}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  <p className="text-gray-500 text-xs italic">{item.location}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden animate-border-glow">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px]"
              animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Target className="w-12 h-12 text-cyan-400" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-6">Personal Mission</h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto"
            >
              To bridge design and development while solving real-world problems through data-driven 
              approaches — building intelligent systems, seamless user experiences, and innovative 
              full-stack applications. I believe in creating technology that is both powerful and accessible.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;