import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">Ameya Kulkarni</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 transition">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#about" className="block text-slate-600 hover:text-slate-900">About</a>
              <a href="#projects" className="block text-slate-600 hover:text-slate-900">Projects</a>
              <a href="#contact" className="block text-slate-600 hover:text-slate-900">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Associate Product Manager
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Building products that solve real problems through user research, data-driven decisions, and cross-functional collaboration.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/ayema99" target="_blank" rel="noopener noreferrer" 
               className="text-slate-600 hover:text-slate-900 transition">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ameya-kulkarni10/" target="_blank" rel="noopener noreferrer"
               className="text-slate-600 hover:text-slate-900 transition">
              <Linkedin size={28} />
            </a>
            <a href="mailto:ameya8478@gmail.com"
               className="text-slate-600 hover:text-slate-900 transition">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
          <div className="prose prose-lg text-slate-600">
            <p className="mb-4">
              I'm an aspiring Associate Product Manager passionate about creating user-centered products. 
              I combine technical skills with strategic thinking to deliver solutions that balance user needs, 
              business goals, and technical feasibility.
            </p>
            <p>
              My approach focuses on deep user research, rapid prototyping, and data-driven iteration. 
              I'm particularly interested in fintech, energy tech, and products that make everyday life easier for UK consumers.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['Product Strategy', 'User Research', 'Data Analysis', 'Wireframing', 'API Integration', 
                'SQL', 'A/B Testing', 'Stakeholder Management', 'Agile/Scrum', 'React'].map(skill => (
                <span key={skill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm">
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
          <h2 className="text-3xl font-bold text-slate-900 mb-10">Projects</h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-sm text-slate-500 uppercase tracking-wide">{project.category}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {project.status}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-6">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Problem</h4>
                      <p className="text-slate-600 text-sm">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Solution</h4>
                      <p className="text-slate-600 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Target Impact & Metrics</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {project.impact.map((metric, idx) => (
                        <div key={idx} className="bg-slate-50 p-3 rounded">
                          <p className="text-sm text-slate-700">{metric}</p>
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
                    <button className="flex items-center space-x-2 px-4 py-2 bg-slate-300 text-slate-600 rounded cursor-not-allowed">
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
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 mb-8">
            I'm actively seeking Associate Product Manager roles in the UK. 
            Let's chat about how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:ameya8478@gmail.com" 
               className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/ameya-kulkarni10/" 
               className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Ameya. Built with React and deployed on Vercel.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;