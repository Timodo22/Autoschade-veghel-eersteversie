import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Car } from 'lucide-react';
import { COMPANY_DETAILS } from '../types';

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

  // Determine styles based on scroll position and page
  const isTransparent = isHome && !scrolled;
  
  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isTransparent 
      ? 'bg-transparent py-6' 
      : 'bg-white shadow-md py-3'
  }`;

  const textClass = isTransparent ? 'text-white' : 'text-gray-900';
  const hoverClass = isTransparent ? 'hover:text-[#ff0d00]' : 'hover:text-[#ff0d00]';
  
  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="bg-[#ff0d00] p-2 rounded text-white shadow-md">
                <Car size={24} />
              </div>
              <div className="flex flex-col">
                  <span className={`font-bold text-xl uppercase tracking-tighter transition-colors ${textClass}`}>
                    Autoschade
                  </span>
                  <span className="text-sm text-[#ff0d00] font-semibold uppercase tracking-widest -mt-1 shadow-black drop-shadow-sm">
                    Veghel
                  </span>
              </div>
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
              className="flex items-center gap-2 bg-[#ff0d00] text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors font-medium shadow-md"
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
        <div className="md:hidden bg-white absolute w-full shadow-lg top-full left-0 border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-bold uppercase ${
                  location.pathname === link.path
                    ? 'bg-red-50 text-[#ff0d00]'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-[#ff0d00]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="block w-full text-center mt-4 bg-[#ff0d00] text-white px-5 py-3 rounded-md font-medium"
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