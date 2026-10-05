import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items array including Home, Education, and Achievements, without Experience
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo with NB Icon and Lalita Bhoi name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform text-sm tracking-wider">
            LB
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Lalita <span className="text-purple-400">Bhoi</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-semibold tracking-wide text-slate-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            </a>
          ))}
        </div>

        {/* Desktop Connect Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold tracking-wide shadow-lg shadow-purple-600/25 hover:opacity-95 hover:scale-105 transition-all duration-300"
          >
            LET'S CONNECT
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold tracking-wide text-slate-300 hover:text-purple-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold tracking-wide shadow-md"
          >
            LET'S CONNECT
          </a>
        </div>
      )}
    </nav>
  );
}