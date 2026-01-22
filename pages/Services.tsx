import React from 'react';
import { Hammer, Paintbrush, Car, Layers, Zap, GlassWater } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: "Schadeherstel & Plaatwerk",
      description: "Van kleine deukjes tot zware structurele schade. Wij beschikken over richtbanken en moderne apparatuur om uw auto weer in fabrieksstaat te herstellen.",
      icon: Hammer
    },
    {
      title: "Professioneel Spuitwerk",
      description: "In onze moderne spuitcabines voorzien wij uw voertuig, meubels of industriële objecten van een strakke laklaag. Perfecte kleurmatch gegarandeerd.",
      icon: Paintbrush
    },
    {
      title: "Autoruit Service",
      description: "Sterretje in de voorruit of een ruit vervangen? Wij regelen het vakkundig. Vaak volledig gedekt door uw verzekering.",
      icon: GlassWater
    },
    {
      title: "Uitdeuken zonder spuiten",
      description: "Kleine parkeerdeukjes en hagelschade kunnen we vaak herstellen zonder dat er gespoten hoeft te worden. Dit is sneller, goedkoper en milieuvriendelijker.",
      icon: Layers
    },
    {
      title: "Spotrepair",
      description: "Voor kleine lakbeschadigingen op bumpers of hoeken is spotrepair de ideale oplossing. We herstellen plaatselijk zodat niet het hele deel gespoten hoeft te worden.",
      icon: Zap
    },
    {
      title: "Overige Voertuigen",
      description: "Naast auto's herstellen wij ook schade aan bedrijfswagens, motors, scooters. Ook voor koplamp-herstel bent u bij ons aan het juiste adres.",
      icon: Car
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Onze Diensten</h1>
          <p className="text-lg text-gray-600">
            Bij Autoschade Veghel combineren we ambachtelijk vakmanschap met de nieuwste technieken. 
            Of het nu gaat om een kleine kras of een grote aanrijding, wij zorgen dat u weer veilig en strak de weg op kunt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-t-4 border-[#ff0d00]"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-red-50 text-[#ff0d00] rounded-lg flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Gebruikte onderdelen?</h3>
            <p className="text-gray-600 max-w-xl">
              Op verzoek maken we gebruik van gebruikte kwaliteitsonderdelen. 
              Dit is niet alleen voordelig voor uw portemonnee, maar ook duurzamer voor het milieu.
            </p>
          </div>
          <a 
            href="/#schadeformulier"
            className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#ff0d00] rounded-full hover:bg-red-700 transition-colors"
          >
            Vraag offerte aan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;