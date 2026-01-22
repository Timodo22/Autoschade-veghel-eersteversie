import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_DETAILS, OPENING_HOURS } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#ff0d00] inline-block pb-2">
              Autoschade Veghel
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Wij zijn gespecialiseerd in alle voorkomende reparatietechnieken. 
              Kwaliteit, service en klanttevredenheid staan bij ons voorop.
            </p>
            <div className="space-y-4">
               <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_DETAILS.address} ${COMPANY_DETAILS.zipCity}`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-300 hover:text-[#ff0d00] transition-colors"
              >
                <MapPin className="shrink-0 mt-1 text-[#ff0d00]" size={20} />
                <span>{COMPANY_DETAILS.address}<br/>{COMPANY_DETAILS.zipCity}</span>
              </a>
              <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="flex items-center gap-3 text-gray-300 hover:text-[#ff0d00] transition-colors">
                <Phone className="shrink-0 text-[#ff0d00]" size={20} />
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
                <Link to="/" className="text-gray-300 hover:text-[#ff0d00] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/diensten" className="text-gray-300 hover:text-[#ff0d00] transition-colors">Onze Diensten</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#ff0d00] transition-colors">Contact & Route</Link>
              </li>
              <li>
                <Link to="/#schadeformulier" className="text-gray-300 hover:text-[#ff0d00] transition-colors">Schade Melden</Link>
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
                <li key={index} className="flex justify-between text-gray-300 border-b border-gray-800 pb-2 last:border-0">
                  <span className="w-24 font-medium">{item.day}</span>
                  <span className="text-gray-400">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;