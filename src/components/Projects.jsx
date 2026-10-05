import React from 'react';
import { Code, Sparkles, CheckCircle2, Clock, FolderGit2 } from 'lucide-react';

export default function Projects() {
  // List of featured projects showcasing technical stack and completion status
  const projects = [
    {
      title: "Agro-Smart Portal",
      description: "A Machine Learning-based agricultural ecosystem designed to optimize crop selection and soil health analysis.",
      tags: ["Python", "Flask", "PostgreSQL", "HTML/CSS", "JavaScript", "Machine Learning"],
      githubLink: "https://github.com/lalitabhoi-21",
      status: "Completed (June 2026)",
      statusStyle: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      statusIcon: <CheckCircle2 size={13} className="text-emerald-400" />
    },
    {
      title: "Career Guard AI",
      description: "An AI-powered career assistant built to streamline job preparation and professional resume evaluation.",
      tags: ["Python", "Flask", "NLP", "Machine Learning", "PostgreSQL", "HTML/CSS"],
      githubLink: "https://github.com/lalitabhoi-21",
      status: "Ongoing",
      statusStyle: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      statusIcon: <Clock size={13} className="text-amber-400" />
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden z-20">
      {/* Background ambient glowing lights */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-30">
        {/* Section Header Tag */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-indigo-400 font-mono text-sm tracking-wider">04 . SELECTED WORK</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 tracking-tight text-white">Projects</h2>
        
        {/* Simple & sweet subtitle added below the main heading */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
          A showcase of innovative web applications and machine learning projects I have built.
        </p>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-slate-900/90 via-indigo-950/30 to-slate-900/90 border-2 border-indigo-500/30 hover:border-indigo-400 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)] hover:-translate-y-1 overflow-hidden"
            >
              <div>
                {/* Top Bar: Status Badge & GitHub Repository Link with Interactive Icons */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border flex items-center space-x-1.5 backdrop-blur-md ${project.statusStyle}`}>
                    {project.statusIcon}
                    <span>{project.status}</span>
                  </span>

                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group/btn text-slate-300 hover:text-white px-3.5 py-1.5 bg-slate-950 border border-indigo-500/30 hover:border-indigo-400 rounded-xl transition-all duration-300 shadow-inner flex items-center space-x-1.5"
                    title="Source Code"
                  >
                    <Code size={16} className="text-indigo-400 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-medium">Code</span>
                  </a>
                </div>

                {/* Project Title with Icon */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-indigo-500/30 group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <FolderGit2 className="text-indigo-400" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Description with improved visibility */}
                <p className="text-slate-200 text-sm sm:text-base mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies / Tags Footer */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-indigo-500/20">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-slate-950 text-indigo-300 text-xs font-medium rounded-xl border border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-950/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}