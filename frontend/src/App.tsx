import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import AnimatedBackground from './components/AnimatedBackground';

// Lazy load page components for better code splitting
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

// Fallback component for lazy loaded pages
const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full"
    />
  </div>
);

// A wrapper component to apply page transitions correctly using useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/about" 
          element={
            <Suspense fallback={<PageFallback />}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <About />
              </motion.div>
            </Suspense>
          } 
        />
        <Route 
          path="/skills" 
          element={
            <Suspense fallback={<PageFallback />}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <Skills />
              </motion.div>
            </Suspense>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <Suspense fallback={<PageFallback />}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <Projects />
              </motion.div>
            </Suspense>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Suspense fallback={<PageFallback />}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                <Contact />
              </motion.div>
            </Suspense>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatedBackground />
      
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <Router>
          <ScrollToTop /> 
          
          <div className="min-h-screen relative flex flex-col text-white">
            <Navigation />
            <main className="flex-grow pt-8">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;