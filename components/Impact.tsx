
import React from 'react';
import { Trophy, Globe, Award, TrendingUp } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-[#001021] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Recognition</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Global Impact & Recognition</h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              My journey has taken me from the lecture halls of Wollo University to global stages in China and Algeria, representing the innovative potential of Ethiopian youth.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
             <div className="p-6 bg-blue-600/10 border border-blue-600/20 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">1st</div>
                <div className="text-xs text-gray-400 uppercase tracking-tighter">WYD Forum Place</div>
             </div>
             <div className="p-6 bg-blue-600/10 border border-blue-600/20 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">16K+</div>
                <div className="text-xs text-gray-400 uppercase tracking-tighter">LinkedIn Network</div>
             </div>
             <div className="p-6 bg-blue-600/10 border border-blue-600/20 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                <div className="text-xs text-gray-400 uppercase tracking-tighter">National Events Led</div>
             </div>
             <div className="p-6 bg-blue-600/10 border border-blue-600/20 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">2025</div>
                <div className="text-xs text-gray-400 uppercase tracking-tighter">World Stage Rep</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((award, idx) => (
            <div key={idx} className="p-8 glass rounded-3xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-20 h-20 text-white" />
              </div>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-mono rounded-full mb-6 inline-block">
                {award.highlight}
              </span>
              <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{award.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Branding Section */}
        <div className="mt-20 p-12 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 text-center md:text-left">
                <h4 className="text-2xl font-bold">Featured In National Media</h4>
                <p className="text-gray-400">Collaborating with H.E. Muferihat Kamil and Fana Broadcasting Corporate.</p>
            </div>
            <div className="flex gap-8 opacity-40 grayscale">
                <span className="text-xl font-black italic">FANA NEWS</span>
                <span className="text-xl font-black italic">EYEA</span>
                <span className="text-xl font-black italic">WYDF</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
