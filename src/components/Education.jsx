import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, MapPin, Percent } from 'lucide-react';

export default function Education() {
  // Your academic credentials and details with specific breakdown as requested
  const educationData = [
    {
      id: "01",
      degree: "Master of Computer Applications (MCA)",
      institution: "SSVPS's Late Karmaveer Dr. P. R. Ghogrey Science College",
      location: "Dhule, Maharashtra",
      duration: "2025 — Present",
      status: "3rd Semester (Current)",
      highlight: "Focusing on Full-Stack Development, MERN Stack, Advanced Web Architectures, and AI/ML integrations.",
      icon: <GraduationCap className="text-indigo-400" size={24} />,
      isMaster: true // Flag to render Master specific layout
    },
    {
      id: "02",
      degree: "Bachelor of Science (Computer Science)",
      institution: "SSVPS College, Shindkheda",
      location: "Shindkheda",
      cgpa: "9.07 CGPA (76.48%)",
      duration: "Completed",
      status: "Graduated with Honors",
      highlight: "Strong foundation in core programming, data structures, database management, and Python programming.",
      icon: <BookOpen className="text-indigo-400" size={24} />,
      isMaster: false // Flag to render Bachelor specific 3 options layout
    }
  ];

  return (
    <section id="education" className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden z-20">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-30">
        {/* Section Header Tag */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-indigo-400 font-mono text-sm tracking-wider">05 . EDUCATION</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
          Academic foundation.
        </h2>
        
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mb-16 leading-relaxed">
          My academic journey has equipped me with strong analytical skills, theoretical computer science concepts, and practical coding experience.
        </p>

        {/* Grid layout for two education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/90 via-indigo-950/30 to-slate-900/90 border-2 border-indigo-500/30 hover:border-indigo-400 rounded-3xl p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)] hover:-translate-y-1"
            >
              <div>
                {/* Top bar with Icon and Number ID */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-indigo-500/30 group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    {item.icon}
                  </div>
                  <span className="text-indigo-400/80 font-mono text-lg font-bold">{item.id}</span>
                </div>

                {/* Degree Title */}
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                  {item.degree}
                </h3>

                {/* Institution Name */}
                <p className="text-indigo-200/90 text-sm sm:text-base font-medium mb-4 flex items-center">
                  {item.institution}
                </p>

                {/* Highlights / Details */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.highlight}
                </p>
              </div>

              {/* Conditional Options: Bachelor gets 3 options (Stream, Percentage, Location), Master gets Location & Status */}
              <div className="pt-6 border-t border-indigo-500/20">
                {item.isMaster ? (
                  // Master Box: Only Location & Status
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                      <MapPin size={14} className="text-indigo-400" />
                      <span>{item.location}</span>
                    </div>
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
                      <Award size={13} />
                      <span>{item.status}</span>
                    </div>
                  </div>
                ) : (
                  // Bachelor Box: 3 Options (Stream/Degree info, Percentage/CGPA, Location)
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-950/80 border border-indigo-500/30 rounded-xl p-2.5 flex flex-col justify-center items-center">
                      <span className="text-[10px] uppercase font-mono text-slate-400 mb-0.5">Stream</span>
                      <span className="text-indigo-300 text-xs font-bold">B.Sc. CS</span>
                    </div>
                    <div className="bg-slate-950/80 border border-indigo-500/30 rounded-xl p-2.5 flex flex-col justify-center items-center">
                      <span className="text-[10px] uppercase font-mono text-slate-400 mb-0.5">CGPA</span>
                      <span className="text-indigo-300 text-xs font-bold">9.07 / 76%</span>
                    </div>
                    <div className="bg-slate-950/80 border border-indigo-500/30 rounded-xl p-2.5 flex flex-col justify-center items-center">
                      <span className="text-[10px] uppercase font-mono text-slate-400 mb-0.5">Location</span>
                      <span className="text-indigo-300 text-xs font-bold">Shindkheda</span>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}