import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, CheckCircle, AlertTriangle, Phone } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7
    }
  })
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/_/backend/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setFormStatus({ submitted: true, success: true, message: result.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorMessage = result.errors ? result.errors[0].msg : result.message;
        setFormStatus({ submitted: true, success: false, message: errorMessage });
      }
    } catch (error) {
      setFormStatus({ submitted: true, success: false, message: 'Could not connect to the server. Please try again.' });
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/muhammad-sohaib-5b894524a/', color: 'from-blue-500 to-blue-600', shadow: 'hover:shadow-blue-500/50' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/sohaib075', color: 'from-gray-700 to-gray-800', shadow: 'hover:shadow-gray-500/50' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:sohaibmuhammad429@gmail.com', color: 'from-purple-500 to-fuchsia-600', shadow: 'hover:shadow-purple-500/50' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 noise-bg relative overflow-hidden">
      {/* Animated background Orbs */}
      <div className="absolute top-20 -left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] animate-orb-1" />
      <div className="absolute bottom-20 -right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] animate-orb-2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} 
          className="text-center mb-20"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Let's Build Something {' '}
            <span className="text-shimmer">Great</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to collaborate? I'm always open to discussing web apps, data pipelines, ML systems, or creative design ideas.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }} 
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              
              <h2 className="text-2xl font-bold text-white mb-10 flex items-center">
                Contact Details
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="ml-4 h-px flex-grow bg-gradient-to-r from-cyan-400/50 to-transparent" 
                />
              </h2>
              <div className="space-y-10">
                <motion.div custom={0} variants={cardVariants} initial="hidden" animate="visible" className="flex items-start space-x-6 group/item">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-lg group-hover/item:bg-cyan-400/40 transition-colors" />
                    <div className="relative p-4 glass-panel bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:sohaibmuhammad429@gmail.com" className="text-sm sm:text-lg text-white group-hover/item:text-cyan-400 transition-colors break-all">sohaibmuhammad429@gmail.com</a>
                  </div>
                </motion.div>
                
                <motion.div custom={1} variants={cardVariants} initial="hidden" animate="visible" className="flex items-start space-x-6 group/item">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-400/20 rounded-2xl blur-lg group-hover/item:bg-purple-400/40 transition-colors" />
                    <div className="relative p-4 glass-panel bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl group-hover/item:scale-110 group-hover/item:-rotate-3 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+923094257950" className="text-lg text-white group-hover/item:text-purple-400 transition-colors">+92 309 4257950</a>
                  </div>
                </motion.div>

                <motion.div custom={2} variants={cardVariants} initial="hidden" animate="visible" className="flex items-start space-x-6 group/item">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-2xl blur-lg group-hover/item:bg-emerald-400/40 transition-colors" />
                    <div className="relative p-4 glass-panel bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg text-white group-hover/item:text-emerald-400 transition-colors">Faisalabad, Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-6 sm:p-10">
              <h3 className="text-xl font-bold text-white mb-8">Follow My Journey</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <motion.a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    whileHover={{ y: -5, scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                    className={`nav-item p-4 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${link.color} shadow-lg ${link.shadow} transition-shadow duration-300`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }} 
            className="lg:col-span-3 glass-card rounded-3xl p-6 sm:p-10 focus-within:border-cyan-400/30 transition-colors relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px]" />
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            
            <AnimatePresence mode="wait">
              {formStatus.submitted ? (
                <motion.div 
                  key="status"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="text-center py-20"
                >
                  {formStatus.success ? (
                    <>
                      <motion.div 
                        animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.2, 1] }} 
                        transition={{ duration: 0.6 }}
                      >
                        <CheckCircle className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                      <p className="text-gray-400">{formStatus.message}</p>
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ x: [0, -10, 10, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <AlertTriangle className="w-20 h-20 text-rose-400 mx-auto mb-6" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">Submission Failed</h3>
                      <p className="text-gray-400">{formStatus.message}</p>
                    </>
                  )}
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFormStatus({ ...formStatus, submitted: false })} 
                    className="mt-10 px-8 py-3 glass-panel rounded-xl text-gray-300 hover:text-white transition-colors hover:bg-white/10"
                  >
                    Try Again
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8 relative z-10"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div custom={0} variants={cardVariants} initial="hidden" animate="visible" className="space-y-3 group">
                      <label htmlFor="name" className="text-xs font-bold text-gray-400 group-focus-within:text-cyan-400 uppercase tracking-widest pl-1 transform transition-colors">Full Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-6 py-4 glass-panel bg-white/5 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all focus:bg-white/10 shadow-inner" placeholder="John Doe" />
                    </motion.div>
                    <motion.div custom={1} variants={cardVariants} initial="hidden" animate="visible" className="space-y-3 group">
                      <label htmlFor="email" className="text-xs font-bold text-gray-400 group-focus-within:text-cyan-400 uppercase tracking-widest pl-1 transform transition-colors">Email Address</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-6 py-4 glass-panel bg-white/5 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all focus:bg-white/10 shadow-inner" placeholder="john@example.com" />
                    </motion.div>
                  </div>
                  <motion.div custom={2} variants={cardVariants} initial="hidden" animate="visible" className="space-y-3 group">
                    <label htmlFor="message" className="text-xs font-bold text-gray-400 group-focus-within:text-cyan-400 uppercase tracking-widest pl-1 transform transition-colors">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-6 py-4 glass-panel bg-white/5 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all resize-none focus:bg-white/10 shadow-inner" placeholder="How can I help you?"></textarea>
                  </motion.div>
                  <motion.button 
                    type="submit" 
                    custom={3} 
                    variants={cardVariants} 
                    initial="hidden" 
                    animate="visible"
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    className="w-full py-5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-white font-bold rounded-2xl flex items-center justify-center space-x-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                    <span className="relative z-10">Blast Off</span>
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
