import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DamageForm from './DamageForm';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900 pt-20 lg:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/111/1920/1080" 
          alt="Autoschade werkplaats" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30 lg:to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded bg-[#ff0d00] text-white text-sm font-bold tracking-wider mb-6 uppercase shadow-lg">
                Erkend Schadeherstel
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Schade aan uw auto?<br />
                <span className="text-[#ff0d00]">Wij lossen het op.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
                Professioneel herstel voor alle merken. Van krassen en deuken tot complex plaatwerk. 
                Wij regelen alles, inclusief de afhandeling met uw verzekeraar.
              </p>
              
              <div className="flex flex-col gap-3 mb-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#ff0d00]" size={20} />
                  <span>Gratis vervangend vervoer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#ff0d00]" size={20} />
                  <span>4 jaar garantie op herstel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#ff0d00]" size={20} />
                  <span>Directe afhandeling met verzekering</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:0625366218"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  Bel direct 06-25366218
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form Content */}
          <div className="w-full max-w-md mx-auto lg:ml-auto">
            <DamageForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;