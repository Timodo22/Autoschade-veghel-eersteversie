import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_DETAILS, OPENING_HOURS } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#ff0d00] inline-block pb-2">
              Autoschade Veghel
            </h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Wij zijn gespecialiseerd in alle voorkomende reparatietechnieken. 
              Kwaliteit, service en klanttevredenheid staan bij ons voorop.
            </p>
            <div className="space-y-4">
               <a 
                href={`https://www.google.com/maps?q=${encodeURIComponent(`${COMPANY_DETAILS.address} ${COMPANY_DETAILS.zipCity}`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-zinc-300 hover:text-[#ff0d00] transition-colors group"
              >
                <MapPin className="shrink-0 mt-1 text-[#ff0d00] group-hover:scale-110 transition-transform" size={20} />
                <span>{COMPANY_DETAILS.address}<br/>{COMPANY_DETAILS.zipCity}</span>
              </a>
              <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="flex items-center gap-3 text-zinc-300 hover:text-[#ff0d00] transition-colors group">
                <Phone className="shrink-0 text-[#ff0d00] group-hover:scale-110 transition-transform" size={20} />
                <span>{COMPANY_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#ff0d00] inline-block pb-2">
              Snelle Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-[#ff0d00] transition-colors hover:pl-1 duration-200">Home</Link>
              </li>
              <li>
                <Link to="/diensten" className="text-zinc-400 hover:text-[#ff0d00] transition-colors hover:pl-1 duration-200">Onze Diensten</Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-400 hover:text-[#ff0d00] transition-colors hover:pl-1 duration-200">Contact & Route</Link>
              </li>
              <li>
                <Link to="/#schadeformulier" className="text-zinc-400 hover:text-[#ff0d00] transition-colors hover:pl-1 duration-200">Schade Melden</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#ff0d00] inline-block pb-2">
              Openingstijden
            </h3>
            <ul className="space-y-2">
              {OPENING_HOURS.map((item, index) => (
                <li key={index} className="flex justify-between text-zinc-300 border-b border-zinc-800 pb-2 last:border-0 hover:bg-zinc-900/50 transition-colors px-2 -mx-2 rounded">
                  <span className="w-24 font-medium">{item.day}</span>
                  <span className="text-zinc-500">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} {COMPANY_DETAILS.name}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;