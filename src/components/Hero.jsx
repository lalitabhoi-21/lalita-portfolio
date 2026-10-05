import React from 'react';
import { ChevronRight, Globe, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center overflow-hidden">
      {/* Background ambient glowing decorative lights */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 w-full">
        {/* Status Badge indicating role and current status */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium mb-6 shadow-md bg-slate-800/90 border-indigo-500/40 text-indigo-200 backdrop-blur-md shadow-indigo-500/10">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          <span>MCA Student & Full-Stack Enthusiast</span>
        </div>
        
        {/* Hero Headline / Name Display */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          <span className="block text-slate-300 mb-2 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-wide">
            Hi, I'm
          </span>
          <span className="block text-white uppercase drop-shadow-md mb-1 tracking-tight">
            LALITA
          </span>
          <span className="block text-transparent uppercase tracking-wider text-5xl sm:text-7xl md:text-8xl font-black" style={{ WebkitTextStroke: '2px #a855f7', textShadow: '0 0 25px rgba(168, 85, 247, 0.3)' }}>
            BHOI.
          </span>
        </h1>
        
        <p className="text-base sm:text-xl max-w-2xl mb-10 leading-relaxed text-slate-300 font-normal">
          MCA student with hands-on practice in React, Node.js, Python, and SQL. Deeply interested in software development and seeking internship opportunities to build scalable, full-stack applications.
        </p>

        {/* Action Buttons for Portfolio exploration & profile links */}
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-2xl transition-all flex items-center space-x-2 shadow-xl shadow-indigo-600/25 hover:scale-105"
          >
            <span>Explore Projects</span>
            <ChevronRight size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/lalita-bhoi-baa484421/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-7 py-3.5 border font-semibold rounded-2xl transition-all flex items-center space-x-2 hover:scale-105 bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 shadow-sm"
          >
            <Globe size={18} className="text-indigo-400" />
            <span>LinkedIn Profile</span>
          </a>
          <a 
            href="https://github.com/lalitabhoi214" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-7 py-3.5 border font-semibold rounded-2xl transition-all flex items-center space-x-2 hover:scale-105 bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 shadow-sm"
          >
            <ExternalLink size={18} className="text-cyan-400" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}