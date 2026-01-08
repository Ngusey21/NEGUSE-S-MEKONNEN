
import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { JOURNEY } from '../constants';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-24 bg-[#001021]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest">Professional & Educational</h2>
            <h3 className="text-4xl font-bold">Career Timeline</h3>
          </div>
          <div className="flex gap-4">
             <span className="flex items-center gap-2 text-sm text-gray-400">
               <div className="w-3 h-3 bg-blue-500 rounded-full"></div> Work
             </span>
             <span className="flex items-center gap-2 text-sm text-gray-400">
               <div className="w-3 h-3 bg-indigo-500 rounded-full"></div> Education
             </span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-white/10 to-transparent md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {JOURNEY.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative flex flex-col md:flex-row items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-10 h-10 -translate-x-1/2 rounded-full border-4 border-[#001021] z-20 flex items-center justify-center transition-all ${item.type === 'Work' ? 'bg-blue-600' : 'bg-indigo-600'} group-hover:scale-125`}>
                  {item.type === 'Work' ? <Briefcase className="w-4 h-4 text-white" /> : <GraduationCap className="w-4 h-4 text-white" />}
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ml-16 md:ml-0 p-8 glass rounded-2xl hover:bg-white/5 transition-all`}>
                  <span className="text-xs font-mono text-gray-500 mb-2 block">{item.date}</span>
                  <h4 className="text-xl font-bold mb-1 text-white">{item.title}</h4>
                  <p className="text-blue-400 font-medium mb-4">{item.organization}</p>
                  <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer for MD */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
