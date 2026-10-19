import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';

// Place your image inside 'src/assets/' and update the filename if needed
import profileImg from '../assets/profile-photo.jpeg'; 

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 max-w-7xl mx-auto flex flex-col items-start justify-center overflow-hidden">
      {/* Background glowing ambient light effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Smooth floating animation keyframe */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: floatSlow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 w-full grid md:grid-cols-12 gap-8 md:gap-8 items-center">
        
        {/* Left Section: Personal introduction and social links */}
        <div className="md:col-span-7">
          
          {/* Status badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium mb-5 shadow-md bg-slate-800/90 border-indigo-500/40 text-indigo-200 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            <span>MCA Student & Full-Stack Enthusiast</span>
          </div>
          
          {/* Main title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            <span className="block text-slate-300 mb-1 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-wide">
              Hi, I'm
            </span>
            <span className="block text-white uppercase drop-shadow-md mb-1 tracking-tight">
              LALITA
            </span>
            <span 
              className="block text-transparent uppercase tracking-wider text-5xl sm:text-7xl md:text-8xl font-black" 
              style={{ WebkitTextStroke: '2px #a855f7', textShadow: '0 0 25px rgba(168, 85, 247, 0.4)' }}
            >
              BHOI.
            </span>
          </h1>
          
          {/* Brief bio description */}
          <p className="text-base sm:text-lg max-w-xl mb-8 leading-relaxed text-slate-300 font-normal">
            MCA student with hands-on practice in React, Node.js, Python, and SQL. Deeply interested in software development and seeking internship opportunities to build scalable, full-stack applications.
          </p>

          {/* Action buttons with glow hover effects */}
          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-indigo-600/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:scale-105 text-sm sm:text-base border border-purple-500/30"
            >
              <span>Explore Projects</span>
              <ChevronRight size={18} />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/lalita-bhoi-baa484421/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 border font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 bg-slate-900 hover:bg-slate-800 border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white text-sm sm:text-base shadow-sm hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            <a 
              href="https://github.com/lalitabhoi214" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 border font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 bg-slate-900 hover:bg-slate-800 border-slate-700 hover:border-purple-500 text-slate-300 hover:text-white text-sm sm:text-base shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>

            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-3 border font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 bg-slate-900 hover:bg-slate-800 border-slate-700 hover:border-pink-500 text-slate-300 hover:text-white text-sm sm:text-base shadow-sm hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              <FileText size={18} className="text-pink-400" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Right Section: Profile Photo Display */}
        <div className="hidden md:flex md:col-span-5 justify-center md:justify-center lg:justify-end items-center relative group">
          
          {/* Subtle background glow effect behind image */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl group-hover:from-indigo-500/30 group-hover:to-purple-500/40 transition-all duration-500"></div>

          {/* Floating profile image container */}
          <div className="relative animate-float transition-all duration-500 group-hover:scale-105">
            <img 
              src={profileImg} 
              alt="Lalita Bhoi - Full Stack Developer" 
              className="w-full max-w-sm md:max-w-md aspect-square object-cover rounded-3xl shadow-2xl border-4 border-slate-800/80 group-hover:border-purple-500/60 backdrop-blur-sm transition-all duration-500 shadow-purple-900/20"
            />
            
            {/* Soft overlay on photo for better contrast */}
            <div className="absolute inset-0 rounded-3xl bg-slate-950/10 group-hover:bg-transparent transition-all duration-500"></div>
          
            {/* Status badge on bottom corner */}
            <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-medium backdrop-blur-lg animate-pulse shadow-lg">
              ✨ Open to Work
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}