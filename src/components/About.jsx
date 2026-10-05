import React, { useState } from 'react';
import { Sparkles, Trophy, Eye, X } from 'lucide-react';

// Importing certificate images from assets folder for the achievements section
import avishkar24Img from '../assets/avishkar-24.jpeg';
import avishkar25Img from '../assets/avishkar-25.jpeg';
import scienceDayImg from '../assets/science-day.jpeg';

export default function About() {
  // State to manage the currently selected certificate image for the modal view
  const [selectedImage, setSelectedImage] = useState(null);

  // List of professional certificates and research conventions
  const certificates = [
    {
      title: "Avishkar Research Convention (2023-24)",
      img: avishkar24Img
    },
    {
      title: "Avishkar Research Convention (2024-25)",
      img: avishkar25Img
    },
    {
      title: "National Science Day Poster Presentation",
      img: scienceDayImg
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Background ambient glowing gradient spheres */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Section Header Title */}
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="text-indigo-400" size={20} />
          <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm">Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-12 tracking-tight text-white">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Biography Card */}
          <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:shadow-2xl">
            <div>
              <p className="text-slate-200 text-lg sm:text-xl font-medium leading-relaxed mb-6">
                I am currently pursuing my Master of Computer Applications (MCA) at SSVPS College, Dhule (KBC North Maharashtra University).
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                My academic foundation includes a Bachelor of Science in Computer Science from SSVPS College, Shindkheda, where I achieved an outstanding CGPA of 9.07 (76.48%). I possess strong hands-on practice in <strong className="text-indigo-300">React, Node.js</strong>, Python, SQL, Machine Learning, and modern web development architectures.
              </p>
            </div>

            {/* Academic Metrics & Location Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60 transition-all duration-300 hover:border-indigo-500/40 hover:bg-slate-900/80">
                <span className="text-indigo-400 font-bold text-xl block">9.07</span>
                <span className="text-slate-400 text-xs font-medium">B.Sc. CS CGPA</span>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60 transition-all duration-300 hover:border-purple-500/40 hover:bg-slate-900/80">
                <span className="text-purple-400 font-bold text-xl block">MCA</span>
                <span className="text-slate-400 text-xs font-medium">Current Degree</span>
              </div>
              <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60 col-span-2 sm:col-span-1 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/80">
                <span className="text-cyan-400 font-bold text-xl block">Dhule</span>
                <span className="text-slate-400 text-xs font-medium">Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Professional Achievements & Certificates Card */}
          <div className="bg-slate-900/70 border border-slate-800/80 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md shadow-xl transition-all duration-300 hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:shadow-2xl group/card">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover/card:scale-110 transition-transform duration-300">
                  <Trophy size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">Achievements</h3>
              </div>

              {/* Timeline of events and presentations */}
              <div className="space-y-6 mb-6">
                <div className="relative pl-4 border-l-2 border-indigo-500/50">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-1">Research & Innovation</span>
                  <h4 className="text-white font-semibold text-sm mb-1">Avishkar Research Convention</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Participated at District Level (2023-24 & 2024-25) organized by KBCNMU.
                  </p>
                </div>

                <div className="relative pl-4 border-l-2 border-purple-500/50">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-1">Presentation</span>
                  <h4 className="text-white font-semibold text-sm mb-1">National Science Day</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Participated in college-level poster presentation celebration (Feb 2025).
                  </p>
                </div>
              </div>

              {/* Certificate Thumbnails Gallery */}
              <div className="space-y-3">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">Certificates Gallery</span>
                <div className="grid grid-cols-3 gap-2">
                  {certificates.map((cert, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedImage(cert)}
                      className="relative group/img overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950 cursor-pointer h-20 shadow-sm"
                    >
                      <img 
                        src={cert.img} 
                        alt={cert.title} 
                        className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300";
                        }}
                      />
                      <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <Eye size={16} className="text-indigo-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Popup Viewer for Selected Certificate */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors z-10"
              >
                <X size={20} />
              </button>
              <h3 className="text-base font-bold text-white mb-3 pr-8">{selectedImage.title}</h3>
              <div className="overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center max-h-[75vh]">
                <img 
                  src={selectedImage.img} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}