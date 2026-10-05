import React from 'react';
import { Code2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand / Logo section */}
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-indigo-600 text-white">
            <Code2 size={18} />
          </div>
          <span className="text-base font-bold text-white">
            Lalita<span className="text-indigo-400">.dev</span>
          </span>
        </div>

        {/* Copyright and signature text */}
        <p className="text-xs text-slate-400 flex items-center space-x-1">
          <span>Made with</span>
          <Heart size={14} className="text-rose-500 fill-rose-500" />
          <span>by Lalita Bhoi &copy; 2026</span>
        </p>
      </div>
    </footer>
  );
}