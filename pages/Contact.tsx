import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { COMPANY_DETAILS, OPENING_HOURS } from '../types';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introductie Tekst (verplaatst vanuit de header) */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <div className="h-1 w-20 bg-[#ff0d00] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kom langs voor een kop koffie of bel ons direct. Wij staan klaar om u te helpen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-[#ff0d00] pl-4">
                Contactgegevens
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-red-50 text-[#ff0d00] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Adres</h3>
                    <p className="text-gray-600">{COMPANY_DETAILS.address}</p>
                    <p className="text-gray-600">{COMPANY_DETAILS.zipCity}</p>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_DETAILS.address} ${COMPANY_DETAILS.zipCity}`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#ff0d00] font-medium mt-2 hover:underline"
                    >
                      <Navigation size={16} /> Plan route
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-red-50 text-[#ff0d00] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Telefoon</h3>
                    <p className="text-gray-600">Mobiel: {COMPANY_DETAILS.phone}</p>
                    <a 
                      href={`tel:${COMPANY_DETAILS.phoneClean}`}
                      className="text-[#ff0d00] font-medium mt-2 block hover:underline"
                    >
                      Bel direct
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3 border-l-4 border-[#ff0d00] pl-4">
                 Openingstijden
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                <ul className="space-y-3">
                  {OPENING_HOURS.map((item, idx) => (
                    <li key={idx} className="flex justify-between border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                      <span className="font-medium text-gray-700 w-32">{item.day}</span>
                      <span className={item.time === 'Gesloten' ? 'text-red-500 font-medium' : 'text-gray-600'}>
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative group">
             <iframe 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               src={`https://maps.google.com/maps?q=${encodeURIComponent(`${COMPANY_DETAILS.address} ${COMPANY_DETAILS.zipCity}`)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
               title="Autoschade Veghel Locatie"
               className="grayscale group-hover:grayscale-0 transition-all duration-500"
             ></iframe>
             <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg flex items-center justify-between border-l-4 border-[#ff0d00]">
                <div>
                   <p className="font-bold text-gray-900">{COMPANY_DETAILS.name}</p>
                   <p className="text-sm text-gray-500">{COMPANY_DETAILS.address}</p>
                </div>
                <a 
                   href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${COMPANY_DETAILS.address} ${COMPANY_DETAILS.zipCity}`)}`}
                   target="_blank"
                   rel="noreferrer"
                   className="bg-[#ff0d00] text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-red-700 transition-colors shadow-md"
                >
                   Route
                </a>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;