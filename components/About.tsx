
import React from 'react';
import { Ruler, ShieldCheck, Cpu, Leaf, Hammer } from 'lucide-react';

const About: React.FC = () => {
  const coreCompetencies = [
    { icon: <Ruler className="w-6 h-6 text-blue-400" />, title: 'Structural & Pavement Design' },
    { icon: <Cpu className="w-6 h-6 text-blue-400" />, title: 'Full-Stack Web Development' },
    { icon: <ShieldCheck className="w-6 h-6 text-blue-400" />, title: 'Project & Construction Management' },
    { icon: <Hammer className="w-6 h-6 text-blue-400" />, title: 'Digital Infrastructure & Innovation' },
    { icon: <Leaf className="w-6 h-6 text-blue-400" />, title: 'Sustainable Engineering Solutions' },
  ];

  return (
    <section id="about" className="py-24 bg-[#000d1a] relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Bridging Two Worlds</h3>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            "Engineering is about leaving a positive mark on the world. I'm a problem-solver passionate about building smarter, greener futures through technology and sustainable practices."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreCompetencies.map((comp, idx) => (
            <div 
              key={idx} 
              className="p-8 glass rounded-2xl hover:border-blue-500/50 transition-all group hover:-translate-y-2 cursor-default"
            >
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {comp.icon}
              </div>
              <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {comp.title}
              </h4>
            </div>
          ))}
          
          <div className="p-8 bg-blue-600 rounded-2xl flex flex-col justify-center items-center text-center">
            <h4 className="text-2xl font-bold mb-2">Multidisciplinary</h4>
            <p className="text-blue-100 text-sm">Combining physical engineering with digital logic for maximum societal impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
