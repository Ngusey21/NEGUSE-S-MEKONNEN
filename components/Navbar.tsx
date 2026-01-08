
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#001021]/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-mono text-xs">NS</span>
          </div>
          <span className="hidden sm:inline-block">NEGUSE SOLOMON</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#001021] border-b border-white/5 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-white block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
