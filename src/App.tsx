import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import IntroLoader from './components/IntroLoader';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

// Pages
import Home from './pages/Home';
import Events from './pages/Events';
import Team from './pages/Team';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/events" 
          element={
            <PageWrapper>
              <Events />
            </PageWrapper>
          } 
        />
        <Route 
          path="/team" 
          element={
            <PageWrapper>
              <Team />
            </PageWrapper>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="page-transition-wrapper"
      initial={{ opacity: 0, filter: 'blur(10px) brightness(0)' }}
      animate={{ opacity: 1, filter: 'blur(0px) brightness(1)' }}
      exit={{ opacity: 0, filter: 'blur(20px) brightness(0) skewX(10deg)' }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading ? (
        <IntroLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <BackgroundSlideshow />
          <Navbar />
          <AnimatedRoutes />
          
          {/* Random Lightning Flash Component */}
          <LightningManager />
        </>
      )}
    </Router>
  );
}

function LightningManager() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const triggerFlash = () => {
      const delay = Math.random() * 10000 + 5000;
      setTimeout(() => {
        setFlash(true);
        setTimeout(() => setFlash(false), 100 + Math.random() * 200);
        triggerFlash();
      }, delay);
    };

    triggerFlash();
  }, []);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          className="lightning-flash-overlay"
        />
      )}
    </AnimatePresence>
  );
}
