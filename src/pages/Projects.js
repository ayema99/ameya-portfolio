import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Energy Bill Tracker",
      category: "API Integration • Data Visualization",
      description: "A web application that helps UK households track energy usage and compare tariffs, built with Octopus Energy API. Enables users to identify potential savings of £200+ annually.",
      problem: "UK energy bills are confusing, and consumers struggle to know if they're on the best tariff.",
      solution: "Real-time usage tracking, tariff comparison, and personalized savings recommendations.",
      impact: ["40% reduction in bill-checking time", "Average £180 annual savings identified", "Processed 10K+ API calls"],
      skills: ["API Integration", "Data Visualization", "User Research", "React"],
      status: "In Progress",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-10 transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-slate-900'
        }`}>Projects</h2>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
              darkMode 
                ? 'bg-gradient-to-br from-slate-900/50 to-black/50 backdrop-blur-xl border border-slate-800/50 hover:border-slate-700/50' 
                : 'bg-white/50 backdrop-blur-xl border border-slate-200/50 hover:border-orange-400/50 shadow-xl'
            }`}>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      darkMode 
                        ? 'bg-slate-800/50 text-slate-400' 
                        : 'bg-gradient-to-br from-orange-100 to-rose-100 text-orange-600'
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
                      darkMode ? 'text-slate-400' : 'text-orange-600'
                    }`}>Problem</h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>{project.problem}</p>
                  </div>
                  <div className={`p-4 rounded-xl ${
                    darkMode ? 'bg-slate-800/50' : 'bg-slate-50'
                  }`}>
                    <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-slate-400' : 'text-rose-600'
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
                          ? 'bg-slate-800/50 text-slate-400 border border-slate-700/30' 
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
  );
};

export default Projects;