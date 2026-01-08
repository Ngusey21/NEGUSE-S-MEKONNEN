
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Impact from './components/Impact';
import Contact from './components/Contact';

const App: React.FC = () => {
  useEffect(() => {
    // Initial entrance animations can be triggered here if needed
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 opacity-10 blueprint-grid pointer-events-none"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Impact />
        <Contact />
      </main>

      <footer className="relative z-10 py-8 text-center text-sm text-gray-500 border-t border-white/5 bg-[#001021]">
        <p>&copy; {new Date().getFullYear()} Neguse Solomon Mekonnen. Built with precision.</p>
      </footer>
    </div>
  );
};

export default App;
