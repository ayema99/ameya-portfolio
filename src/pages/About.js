import React from 'react';
import { Cpu } from 'lucide-react';

const About = ({ darkMode }) => {
  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className={`p-8 rounded-2xl transition-all duration-300 ${
          darkMode 
            ? 'bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-xl border border-slate-800/50' 
            : 'bg-white/50 backdrop-blur-xl border border-slate-200/50 shadow-xl'
        }`}>
          <div className="flex items-center space-x-3 mb-6">
            <Cpu className={`w-6 h-6 ${darkMode ? 'text-slate-400' : 'text-orange-600'}`} />
            <h2 className={`text-3xl font-bold transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>About Me</h2>
          </div>
          
          <div className="prose prose-lg">
            <p className={`mb-4 transition-colors duration-300 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I'm an aspiring Associate Product Manager passionate about creating user-centered products. 
              I combine technical skills with strategic thinking to deliver solutions that balance user needs, 
              business goals, and technical feasibility.
            </p>
            <p className={`transition-colors duration-300 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              My approach focuses on deep user research, rapid prototyping, and data-driven iteration. 
              I'm particularly interested in fintech, energy tech, and products that make everyday life easier for UK consumers.
            </p>
          </div>

          <div className="mt-8">
            <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Product Strategy', 'User Research', 'Data Analysis', 'Wireframing', 'API Integration', 
                'SQL', 'A/B Testing', 'Stakeholder Management', 'Agile/Scrum', 'React'].map(skill => (
                <span key={skill} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode 
                    ? 'bg-slate-800/50 text-slate-300 border border-slate-700/50' 
                    : 'bg-gradient-to-r from-orange-50 to-rose-50 text-orange-700 border border-orange-200'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;