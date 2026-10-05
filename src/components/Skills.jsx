import React from 'react';
import { 
  Code2, Layout, Server, Database, Wrench, 
  Atom, Zap, Palette, FileCode, Cpu, Terminal, 
  Layers, GitBranch, Code, Box
} from 'lucide-react';

export default function Skills() {
  // Structured categorization of technical skills and tools
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-indigo-400" size={20} />,
      skills: [
        { name: "React.js", icon: <Atom size={13} className="text-cyan-400" /> },
        { name: "Vite", icon: <Zap size={13} className="text-amber-400" /> },
        { name: "Tailwind CSS", icon: <Palette size={13} className="text-sky-400" /> },
        { name: "HTML5", icon: <FileCode size={13} className="text-orange-400" /> },
        { name: "CSS3", icon: <FileCode size={13} className="text-blue-400" /> },
        { name: "JavaScript", icon: <Code size={13} className="text-yellow-400" /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-purple-400" size={20} />,
      skills: [
        { name: "Node.js", icon: <Server size={13} className="text-emerald-400" /> },
        { name: "Express.js", icon: <Layers size={13} className="text-slate-300" /> },
        { name: "Python", icon: <Terminal size={13} className="text-yellow-300" /> },
        { name: "Flask", icon: <Box size={13} className="text-indigo-300" /> }
      ]
    },
    {
      title: "Databases & ML",
      icon: <Database className="text-cyan-400" size5={20} />,
      skills: [
        { name: "MongoDB", icon: <Database size={13} className="text-emerald-500" /> },
        { name: "SQL", icon: <Database size={13} className="text-blue-400" /> },
        { name: "Scikit-learn", icon: <Cpu size={13} className="text-amber-500" /> },
        { name: "Numpy", icon: <Cpu size={13} className="text-blue-300" /> },
        { name: "Pandas", icon: <Cpu size={13} className="text-purple-300" /> }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="text-emerald-400" size={20} />,
      skills: [
        { name: "Git & GitHub", icon: <GitBranch size={13} className="text-orange-500" /> },
        { name: "VS Code", icon: <Code2 size={13} className="text-sky-400" /> },
        { name: "Jupyter", icon: <Terminal size={13} className="text-orange-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glowing lights */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-30">
        {/* Section Header Tag */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-indigo-400 font-mono text-sm tracking-wider">02 . Expertise</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-3 tracking-tight text-white">Technical Skills</h2>
        
        {/* Simple & Sweet sub-heading added below the main title */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
          A comprehensive toolkit of modern technologies and frameworks I use to build robust applications.
        </p>

        {/* Skills Categories Grid with enhanced dark border effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-900/80 border-2 border-slate-700/80 rounded-3xl p-6 min-h-[300px] backdrop-blur-md shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-indigo-500/20 hover:shadow-2xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-2xl bg-slate-950 border border-slate-700 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300 shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-wide">{category.title}</h3>
                </div>

                {/* Individual Skill Badges list */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-700/80 text-slate-300 text-xs font-medium transition-all duration-300 hover:border-indigo-400 hover:text-white hover:bg-indigo-950/40 hover:scale-105 shadow-sm"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
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