import React from 'react';
import { Code, Sparkles, CheckCircle2, Clock } from 'lucide-react';

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
      statusIcon: <CheckCircle2 size={12} className="text-emerald-400" />
    },
    {
      title: "Career Guard AI",
      description: "An AI-powered career assistant built to streamline job preparation and professional resume evaluation.",
      tags: ["Python", "Flask", "NLP", "Machine Learning", "PostgreSQL", "HTML/CSS"],
      githubLink: "https://github.com/lalitabhoi-21",
      status: "Ongoing",
      statusStyle: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      statusIcon: <Clock size={12} className="text-amber-400" />
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glowing lights */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="text-indigo-400" size={20} />
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-12 tracking-tight text-white">Projects</h2>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-slate-900/70 border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-md hover:border-indigo-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/15 group overflow-hidden"
            >
              <div>
                {/* Top Bar: Status Badge & GitHub Repository Link */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full border flex items-center space-x-1.5 backdrop-blur-md ${project.statusStyle}`}>
                    {project.statusIcon}
                    <span>{project.status}</span>
                  </span>

                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 hover:text-white px-3 py-1.5 bg-slate-900/85 backdrop-blur-md border border-slate-700/80 rounded-xl hover:border-indigo-500 transition-all shadow-md flex items-center space-x-1.5"
                    title="Source Code"
                  >
                    <Code size={16} />
                    <span className="text-xs font-medium">Code</span>
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies / Tags Footer */}
              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-slate-950 text-indigo-300 text-xs font-medium rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all"
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