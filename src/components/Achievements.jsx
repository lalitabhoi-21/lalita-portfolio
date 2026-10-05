import React from 'react';
import { Award, Trophy, Star, Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react';

// Import certificate images from the assets folder
import avishkar23Img from '../assets/avishkar-24.jpeg';
import avishkar24Img from '../assets/avishkar-25.jpeg';
import scienceDayImg from '../assets/science-day.jpeg';

export default function Achievements() {
  // Array containing detailed data for each achievement card
  const achievements = [
    {
      id: "01",
      title: "Aavishkar 2023-24 Research Convention",
      category: "District Level — Pure Sciences (UG)",
      description: "Presented research work in Pure Sciences at the District Level Research Convention organized at R. C. Patel Institute, Shirpur.",
      date: "18th October 2023",
      location: "Shirpur, Dhule",
      icon: <Trophy className="text-amber-400" size={24} />,
      badge: "University Convention",
      imagePath: avishkar23Img,
      accentColor: "from-amber-500/20 via-indigo-500/10 to-transparent",
      borderColor: "border-2 border-indigo-500/50 group-hover:border-amber-400"
    },
    {
      id: "02",
      title: "Aavishkar 2024-25 Research Convention",
      category: "District Level — Pure Sciences (UG)",
      description: "Successfully presented research work at the Dhule District Level Research Convention held at VVM's S.G. Patil College, Sakri.",
      date: "5th December 2024",
      location: "Sakri, Dhule",
      icon: <Award className="text-indigo-400" size={24} />,
      badge: "Research Presentation",
      imagePath: avishkar24Img,
      accentColor: "from-indigo-500/20 via-purple-500/10 to-transparent",
      borderColor: "border-2 border-indigo-500/50 group-hover:border-indigo-400"
    },
    {
      id: "03",
      title: "National Science Day Poster Presentation",
      category: "Science Association Competition",
      description: "Actively participated in the poster presentation competition organized on the occasion of National Science Day at Shindkheda.",
      date: "Science Day Event",
      location: "Shindkheda",
      icon: <Star className="text-purple-400" size={24} />,
      badge: "Active Participation",
      imagePath: scienceDayImg,
      accentColor: "from-purple-500/20 via-pink-500/10 to-transparent",
      borderColor: "border-2 border-indigo-500/50 group-hover:border-purple-400"
    }
  ];

  // Function to open the respective certificate image in a new browser tab
  const handleViewCertificate = (path) => {
    window.open(path, '_blank');
  };

  return (
    <section id="achievements" className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden z-20">
      {/* Background ambient glowing gradient effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-30">
        {/* Section Header Tag */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-indigo-400 font-mono text-sm tracking-wider"> 06 . RECOGNITION & CERTIFICATES </span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white leading-tight">
          Milestones & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Achievements</span>.
        </h2>
        
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mb-16 leading-relaxed">
          A proud showcase of my research work, university-level Avishkar conventions, and science competitions.
        </p>

        {/* Grid Container for displaying achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className={`group relative bg-slate-950/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between backdrop-blur-xl ${item.borderColor} transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:-translate-y-2 overflow-hidden`}
            >
              {/* Dynamic internal background accent glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.accentColor} opacity-40 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none`}></div>

              <div className="relative z-10">
                {/* Top bar featuring custom icon and item sequence number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-indigo-500/40 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  <span className="text-indigo-400/80 font-mono text-xl font-black">{item.id}</span>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Achievement Title and Subtitle Category */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-indigo-300/80 text-xs font-mono mb-4 tracking-wide">{item.category}</p>

                {/* Detailed Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer containing Date, Location, and Action Button */}
              <div className="relative z-10">
                <div className="pt-4 border-t border-indigo-500/30 flex items-center justify-between text-xs font-mono text-slate-400 mb-5">
                  <div className="flex items-center space-x-1.5">
                    <Calendar size={13} className="text-indigo-400" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-indigo-300">
                    <MapPin size={13} className="text-indigo-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Button to view the certificate in a new tab */}
                <button 
                  onClick={() => handleViewCertificate(item.imagePath)}
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border border-indigo-400/60 rounded-xl text-white text-xs font-bold tracking-wide uppercase flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-indigo-600/30 group/btn cursor-pointer"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}