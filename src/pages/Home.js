import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className={`text-6xl md:text-7xl font-bold mb-6 pb-2 transition-colors duration-300 ${
          darkMode 
            ? 'text-white' 
            : 'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500'
        }`}>
          Ameya
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${
          darkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Building products that solve real problems through user research, data-driven decisions, and AI-powered innovation.
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/ayema99" target="_blank" rel="noopener noreferrer" 
             className={`transition-all duration-300 hover:scale-110 ${
               darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-orange-600'
             }`}>
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/ameya" target="_blank" rel="noopener noreferrer"
             className={`transition-all duration-300 hover:scale-110 ${
               darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-orange-600'
             }`}>
            <Linkedin size={28} />
          </a>
          <a href="mailto:ameya@example.com"
             className={`transition-all duration-300 hover:scale-110 ${
               darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-orange-600'
             }`}>
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;