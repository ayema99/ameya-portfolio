import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const location = useLocation(); // now safe because BrowserRouter is in index.js

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-black via-slate-950 to-black' 
        : 'bg-white'
    }`}>

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
            darkMode ? 'bg-slate-700 opacity-30' : 'bg-orange-300 opacity-25'
          }`}
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        />
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
            darkMode ? 'bg-slate-600 opacity-30' : 'bg-rose-300 opacity-25'
          }`}
          style={{
            right: `${mousePosition.x / 30}px`,
            bottom: `${mousePosition.y / 30}px`,
          }}
        />
        <div 
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
            darkMode ? 'bg-slate-800 opacity-20' : 'bg-amber-200 opacity-20'
          }`}
          style={{
            left: `50%`,
            top: `${mousePosition.y / 40}px`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode 
          ? 'bg-black/80 backdrop-blur-xl border-b border-slate-800/50' 
          : 'bg-white/90 backdrop-blur-xl border-b border-orange-100/50 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={`transition-all duration-300 font-medium ${
                darkMode 
                  ? 'text-slate-300 hover:text-white' 
                  : 'text-slate-600 hover:text-orange-600'
              }`}>Home</Link>

              <Link to="/about" className={`transition-all duration-300 font-medium ${
                darkMode 
                  ? 'text-slate-300 hover:text-white' 
                  : 'text-slate-600 hover:text-orange-600'
              }`}>About</Link>

              <Link to="/projects" className={`transition-all duration-300 font-medium ${
                darkMode 
                  ? 'text-slate-300 hover:text-white' 
                  : 'text-slate-600 hover:text-orange-600'
              }`}>Projects</Link>

              <Link to="/contact" className={`transition-all duration-300 font-medium ${
                darkMode 
                  ? 'text-slate-300 hover:text-white' 
                  : 'text-slate-600 hover:text-orange-600'
              }`}>Contact</Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-800/50 text-yellow-400 hover:scale-110 border border-slate-700/30' 
                  : 'bg-gradient-to-br from-orange-100 to-rose-100 text-slate-700 hover:scale-110 border border-orange-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`block transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-orange-600'}`}>Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`block transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-orange-600'}`}>About</Link>
              <Link to="/projects" onClick={() => setMobileMenuOpen(false)} className={`block transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-orange-600'}`}>Projects</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`block transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-orange-600'}`}>Contact</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <footer className={`py-8 px-4 transition-colors duration-300 ${
        darkMode ? 'bg-black/50 text-slate-400 border-t border-slate-900/50' : 'bg-slate-50/50 text-slate-600 border-t border-slate-200/50'
      }`}>
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Ameya. Built with React and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
