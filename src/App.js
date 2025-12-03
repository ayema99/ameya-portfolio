import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
      status: "In Progress"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-slate-50 to-slate-100'}`}>
      {/* Navigation */}
      <nav className={`shadow-sm sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Desktop Navigation - Left Side */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className={`transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>About</a>
              <a href="#projects" className={`transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Projects</a>
              <a href="#contact" className={`transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Contact</a>
            </div>

            {/* Mobile menu button - Left Side on Mobile */}
            <button 
              className={`md:hidden ${darkMode ? 'text-slate-300' : 'text-slate-800'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Dark Mode Toggle - Right Side */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                darkMode 
                  ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#about" className={`block transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>About</a>
              <a href="#projects" className={`block transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Projects</a>
              <a href="#contact" className={`block transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Ameya
          </h1>
          <p className={`text-xl md:text-2xl mb-8 transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Building products that solve real problems through user research, data-driven decisions, and cross-functional collaboration.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ayema99" target="_blank" rel="noopener noreferrer" 
               className={`transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/ameya" target="_blank" rel="noopener noreferrer"
               className={`transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Linkedin size={28} />
            </a>
            <a href="mailto:ameya@example.com"
               className={`transition ${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}>
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 transition-colors duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
          <div className="prose prose-lg">
            <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              I'm an aspiring Associate Product Manager passionate about creating user-centered products. 
              I combine technical skills with strategic thinking to deliver solutions that balance user needs, 
              business goals, and technical feasibility.
            </p>
            <p className={`transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              My approach focuses on deep user research, rapid prototyping, and data-driven iteration. 
              I'm particularly interested in fintech, energy tech, and products that make everyday life easier for UK consumers.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Product Strategy', 'User Research', 'Data Analysis', 'Wireframing', 'API Integration', 
                'SQL', 'A/B Testing', 'Stakeholder Management', 'Agile/Scrum', 'React'].map(skill => (
                <span key={skill} className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                  darkMode ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-700'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-10 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Projects</h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                darkMode ? 'bg-slate-800' : 'bg-white'
              }`}>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                      <p className={`text-sm uppercase tracking-wide transition-colors duration-300 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{project.category}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>

                  <p className={`mb-6 transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Problem</h4>
                      <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{project.problem}</p>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-2 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Solution</h4>
                      <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className={`font-semibold mb-3 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Target Impact & Metrics</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.impact.map((metric, idx) => (
                        <div key={idx} className={`p-3 rounded transition-colors duration-300 ${
                          darkMode ? 'bg-slate-700' : 'bg-slate-50'
                        }`}>
                          <p className={`text-sm transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button className={`flex items-center space-x-2 px-4 py-2 rounded cursor-not-allowed transition-colors duration-300 ${
                      darkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-300 text-slate-600'
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
      <section id="contact" className={`py-16 px-4 transition-colors duration-300 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-6 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Let's Connect</h2>
          <p className={`text-lg mb-8 transition-colors duration-300 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            I'm actively seeking Associate Product Manager roles in the UK. 
            Let's chat about how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:ameya@example.com" 
               className={`px-8 py-3 rounded-lg transition-colors duration-300 ${
                 darkMode 
                   ? 'bg-slate-700 text-white hover:bg-slate-600' 
                   : 'bg-slate-900 text-white hover:bg-slate-700'
               }`}>
              Email Me
            </a>
            <a href="https://linkedin.com/in/ameya" 
               className={`px-8 py-3 rounded-lg transition-colors duration-300 ${
                 darkMode 
                   ? 'border-2 border-slate-600 text-slate-300 hover:bg-slate-700' 
                   : 'border-2 border-slate-900 text-slate-900 hover:bg-slate-50'
               }`}>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-400' : 'bg-slate-900 text-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Ameya. Built with React and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;