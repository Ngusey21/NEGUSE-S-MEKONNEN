
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30">
         <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Engineering Background"
            className="object-cover w-full h-full mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001021]"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-[#001021] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-8">
            <div className="inline-block px-3 py-1 bg-blue-600/10 border border-blue-600/30 rounded text-blue-400 text-xs font-mono uppercase tracking-widest animate-pulse">
              Engineering & Innovation 2025
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Sustainable</span> Futures
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl font-light">
              25-year-old multidisciplinary professional blending <span className="text-white font-medium">Civil Engineering</span> expertise with <span className="text-white font-medium">Software Development</span> to create next-gen sustainable infrastructure solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-blue-900/20 group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#journey" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-semibold transition-all"
              >
                View Journey
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-2 border border-white/10 bg-[#001021]/50 backdrop-blur-sm shadow-2xl overflow-hidden group">
               <img 
                src="https://picsum.photos/400/400" 
                alt="Neguse Solomon Mekonnen" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 border-[10px] border-blue-600/20 rounded-full animate-spin-slow"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
