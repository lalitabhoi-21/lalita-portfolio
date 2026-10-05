import React from 'react';
import { Code2, Laptop, Database, Brain, Rocket, ArrowUpRight } from 'lucide-react';

export default function About() {
  // Professional domains and core development focus areas
  const focusAreas = [
    {
      icon: <Code2 className="text-indigo-400" size={20} />,
      title: "Full-Stack Web Architectures",
      desc: "Developing end-to-end applications using MERN stack, Vite, and modern UI systems."
    },
    {
      icon: <Laptop className="text-indigo-400" size={20} />,
      title: "Frontend Engineering & UI/UX",
      desc: "Crafting responsive, dynamic, and clean component-driven user interfaces."
    },
    {
      icon: <Database className="text-indigo-400" size={20} />,
      title: "Backend & Database Integration",
      desc: "Building RESTful endpoints, secure server routes, and robust SQL/NoSQL schemas."
    },
    {
      icon: <Brain className="text-indigo-400" size={20} />,
      title: "Python & Machine Learning",
      desc: "Exploring smart utilities, crop recommendation models, and data-driven scripts."
    },
    {
      icon: <Rocket className="text-indigo-400" size={20} />,
      title: "Version Control & Deployment",
      desc: "Managing collaborative workflows using Git, GitHub, GitLab, and containerization."
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden z-20">
      {/* Background ambient glowing spheres */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-30">
        {/* Section Header Tag */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-indigo-400 font-mono text-sm tracking-wider">01 . ABOUT ME</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
          Passionate coder transforming <br className="hidden sm:inline" />
          logic into seamless digital experiences.
        </h2>
        
        <p className="text-slate-400 text-base sm:text-lg max-w-3xl mb-16 leading-relaxed">
          I am a dedicated MCA student bridging academic theory with practical full-stack development, always eager to tackle innovative programming challenges.
        </p>

        {/* Grid layout: Left Professional Philosophy & Right Domain Cards matching height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Professional Overview with a brighter, more visible background and broad border */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900/90 via-indigo-950/40 to-slate-900/90 border-2 border-indigo-500/40 rounded-3xl p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-mono mb-6 shadow-sm">
                <span>01</span>
                <span>My Professional Journey</span>
              </div>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  My core interest lies in building scalable web applications. I enjoy writing clean JavaScript and Python code, organizing database structures, and designing user-friendly interfaces.
                </p>
                <p>
                  Through continuous hands-on practice in academic projects and team collaborations, I have gained solid experience in component architecture, state management, and debugging.
                </p>
                <p>
                  I'm actively seeking internship opportunities where I can apply my technical skill set, learn from experienced developers, and contribute meaningfully to live production environments.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-500/20">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 text-indigo-300 hover:text-white font-semibold text-sm transition-colors group"
              >
                <span>Let's collaborate</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: Skill Domain Cards perfectly proportioned */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5">
            {focusAreas.map((item, index) => (
              <div 
                key={index}
                className="group bg-slate-900/60 hover:bg-slate-900 border-2 border-slate-800 hover:border-indigo-500/60 rounded-2xl p-4 transition-all duration-300 flex items-center justify-between cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-700/80 group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="p-1.5 text-slate-500 group-hover:text-indigo-400 transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}