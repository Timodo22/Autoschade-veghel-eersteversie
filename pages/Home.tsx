import React from 'react';
import Hero from '../components/Hero';
import { CheckCircle2, Coffee, ShieldCheck, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Welkom bij Autoschade Veghel
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wij verzorgen de volledige, professionele schadeafhandeling voor zowel zakelijke als particuliere klanten. 
                Of het nu gaat om uw personenauto, bedrijfswagen, scooter of zelfs meubels en industrieel spuitwerk: 
                wij staan voor u klaar met de nieuwste reparatietechnieken.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                <span className="font-semibold text-[#ff0d00]">De klant is koning.</span> Wij nemen graag alle tijd voor u. 
                Service wordt bij ons met een hoofdletter geschreven. Van het invullen van het schadeformulier tot de 
                financiële afwikkeling met uw verzekeraar: wij ontzorgen u volledig.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-red-50 rounded-full text-[#ff0d00]"><ShieldCheck size={20} /></div>
                   <span className="font-medium text-gray-800">Volledige afhandeling</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-red-50 rounded-full text-[#ff0d00]"><Wrench size={20} /></div>
                   <span className="font-medium text-gray-800">Nieuwste technieken</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-red-50 rounded-full text-[#ff0d00]"><CheckCircle2 size={20} /></div>
                   <span className="font-medium text-gray-800">Ook gebruikte onderdelen</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="p-2 bg-red-50 rounded-full text-[#ff0d00]"><Coffee size={20} /></div>
                   <span className="font-medium text-gray-800">Koffie staat klaar</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
            >
              <img 
                src="https://picsum.photos/id/442/800/800" 
                alt="Werkplaats Autoschade Veghel" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-xl">Kom gerust langs!</p>
                  <p className="text-gray-200">Binnenveld 10 b, Veghel</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Onze Specialiteiten</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Plaatwerk & Richten', icon: '🚗' },
              { label: 'Spuitwerk', icon: '🎨' },
              { label: 'Ruitreparatie', icon: '🪟' },
              { label: 'Spotrepair', icon: '✨' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors border-b-4 border-[#ff0d00]">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;