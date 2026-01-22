import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react'; 
import { COMPANY_DETAILS } from '../types';

import logoImage from '../assets/LogoSchade.png'; 

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Diensten', path: '/diensten' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = isHome && !scrolled;
  
  // Container styling
  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isTransparent 
      ? 'bg-transparent py-6' 
      : 'bg-black shadow-lg py-3 border-b border-zinc-900' 
  }`;

  const textClass = isTransparent ? 'text-white' : 'text-zinc-300';
  const hoverClass = 'hover:text-[#ff0d00]';

  // LOGO GROOTTE LOGICA:
  const logoSizeClass = isTransparent ? 'h-20' : 'h-14'; // Iets aangepast voor balans
  
  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Area */}
          {/* AANGEPAST: -ml-3 (mobiel) en md:-ml-4 (desktop) toegevoegd om naar links te trekken */}
          <div className="flex items-center -ml-3 md:-ml-4">
            <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
              <img 
                src={logoImage} 
                alt="Autoschade Veghel Logo" 
                className={`${logoSizeClass} w-auto object-contain transition-all duration-300 ease-in-out`} 
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${textClass} ${hoverClass} ${
                  location.pathname === link.path && !isTransparent ? 'text-[#ff0d00]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center gap-2 bg-[#ff0d00] text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors font-medium shadow-md shadow-red-900/20"
            >
              <Phone size={18} />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textClass} hover:text-[#ff0d00] focus:outline-none transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black absolute w-full shadow-xl top-full left-0 border-t border-zinc-900 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-bold uppercase transition-colors ${
                  location.pathname === link.path
                    ? 'bg-zinc-900 text-[#ff0d00]'
                    : 'text-zinc-300 hover:bg-zinc-900 hover:text-[#ff0d00]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="block w-full text-center mt-4 bg-[#ff0d00] text-white px-5 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
            >
              Bel Direct
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;