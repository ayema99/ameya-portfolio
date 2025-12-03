import React from 'react';

const Contact = ({ darkMode }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto w-full">
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
  );
};

export default Contact;