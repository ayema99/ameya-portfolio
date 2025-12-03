import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Moon, Sun, Sparkles, Cpu, Zap } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  const projects = [
    {
      title: "Energy Bill Tracker",
      category: "API Integration • Data Visualization",
      description: "A web application that helps UK households track energy usage and compare tariffs, built with Octopus Energy API. Enables users to identify potential savings of £200+ annually.",
      problem: "UK energy bills are confusing, and consumers struggle to know if they're on the best tariff.",
      solution: "Real-time usage tracking, tariff comparison, and personalized savings recommendations.",
      impact: ["40% reduction in bill-checking time", "Average £180 annual savings identified", "Processed 10K+ API calls"],
      skills: ["API Integration", "Data Visualization", "User Research", "React"],
      links: {
        demo: "#",
        github: "#",
        caseStudy: "#"
      },
      status: "In Progress",
      icon: <Zap className="w-6 h-6" />
    }
  ];

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

      {/* Navigation with glassmorphism */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        darkMode 
          ? 'bg-black/80 backdrop-blur-xl border-b border-slate-800/50' 
          : 'bg-white/90 backdrop-blur-xl border-b border-orange-100/50 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation - Left Side */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className={`transition-all duration-300 font-medium ${
                darkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}>About</a>
              <a href="#projects" className={`transition-all duration-300 font-medium ${
                darkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}>Projects</a>
              <a href="#contact" className={`transition-all duration-300 font-medium ${
                darkMode 
                  ? 'text-slate-300 hover:text-blue-400' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}>Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Dark Mode Toggle - Right Side */}
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-yellow-400 hover:scale-110 border border-blue-500/30' 
                  : 'bg-gradient-to-br from-blue-100 to-purple-100 text-slate-700 hover:scale-110 border border-blue-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#about" className={`block transition ${darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}>About</a>
              <a href="#projects" className={`block transition ${darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}>Projects</a>
              <a href="#contact" className={`block transition ${darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative">
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
                 darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
               }`}>
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/ameya" target="_blank" rel="noopener noreferrer"
               className={`transition-all duration-300 hover:scale-110 ${
                 darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
               }`}>
              <Linkedin size={28} />
            </a>
            <a href="mailto:ameya@example.com"
               className={`transition-all duration-300 hover:scale-110 ${
                 darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
               }`}>
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 relative`}>
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-2xl transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-xl border border-slate-800/50' 
              : 'bg-white/50 backdrop-blur-xl border border-slate-200/50 shadow-xl'
          }`}>
            <div className="flex items-center space-x-3 mb-6">
              <Cpu className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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

            {/* Skills */}
            <div className="mt-8">
              <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Product Strategy', 'User Research', 'Data Analysis', 'Wireframing', 'API Integration', 
                  'SQL', 'A/B Testing', 'Stakeholder Management', 'Agile/Scrum', 'React'].map(skill => (
                  <span key={skill} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30' 
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

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-10 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>Projects</h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50' 
                  : 'bg-white/50 backdrop-blur-xl border border-slate-200/50 hover:border-blue-400/50 shadow-xl'
              }`}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        darkMode 
                          ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400' 
                          : 'bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600'
                      }`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}>{project.title}</h3>
                        <p className={`text-sm uppercase tracking-wide transition-colors duration-300 ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>{project.category}</p>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>

                  <p className={`mb-6 transition-colors duration-300 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className={`p-4 rounded-xl ${
                      darkMode ? 'bg-slate-800/50' : 'bg-slate-50'
                    }`}>
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        darkMode ? 'text-blue-400' : 'text-orange-600'
                      }`}>Problem</h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>{project.problem}</p>
                    </div>
                    <div className={`p-4 rounded-xl ${
                      darkMode ? 'bg-slate-800/50' : 'bg-slate-50'
                    }`}>
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                        darkMode ? 'text-purple-400' : 'text-rose-600'
                      }`}>Solution</h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>Target Impact & Metrics</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.impact.map((metric, idx) => (
                        <div key={idx} className={`p-4 rounded-xl transition-colors duration-300 ${
                          darkMode ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-slate-50 border border-slate-200'
                        }`}>
                          <p className={`text-sm font-medium transition-colors duration-300 ${
                            darkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}>{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                          darkMode 
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' 
                            : 'bg-orange-50 text-orange-700 border border-orange-200'
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      darkMode 
                        ? 'bg-slate-800/50 text-slate-400 border border-slate-700/50' 
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>
                      <ExternalLink size={16} />
                      <span>Coming Soon</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 px-4 relative`}>
        <div className="max-w-4xl mx-auto">
          <div className={`p-12 rounded-2xl text-center transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-xl border border-slate-800/50' 
              : 'bg-white/50 backdrop-blur-xl border border-slate-200/50 shadow-xl'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>Let's Connect</h2>
            <p className={`text-lg mb-8 transition-colors duration-300 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I'm actively seeking Associate Product Manager roles in the UK. 
              Let's chat about how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:ameya@example.com" 
                 className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                   darkMode 
                     ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:shadow-lg hover:shadow-slate-700/50' 
                     : 'bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:shadow-lg hover:shadow-orange-400/50'
                 }`}>
                Email Me
              </a>
              <a href="https://linkedin.com/in/ameya" 
                 className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                   darkMode 
                     ? 'border-2 border-slate-600 text-slate-300 hover:bg-slate-800' 
                     : 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50'
                 }`}>
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

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

export default Portfolio;