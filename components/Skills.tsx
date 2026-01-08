
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Engineering', 'Development', 'Management'];

  return (
    <section id="skills" className="py-24 bg-[#000d1a] blueprint-grid">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Technical Arsenal</h2>
          <h3 className="text-4xl font-bold">Skills & Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-8">
              <div className="flex items-center gap-4">
                <h4 className="text-xl font-bold uppercase tracking-wider text-white">{cat}</h4>
                <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-1"></div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div 
                    key={skill.name} 
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 glass rounded-2xl border-dashed border-white/10 text-center">
            <h5 className="text-lg font-mono text-gray-400">Software Suite</h5>
            <div className="flex flex-wrap justify-center gap-10 mt-6 opacity-60">
                <span className="text-2xl font-bold">AutoCAD</span>
                <span className="text-2xl font-bold">SAP2000</span>
                <span className="text-2xl font-bold">ETABS</span>
                <span className="text-2xl font-bold">REVIT</span>
                <span className="text-2xl font-bold">NODE.JS</span>
                <span className="text-2xl font-bold">REACT</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
