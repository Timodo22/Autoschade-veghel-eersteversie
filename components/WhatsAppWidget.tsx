import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_DETAILS } from '../types';

const WhatsAppWidget: React.FC = () => {
  return (
    <motion.a
      href={`https://wa.me/31${COMPANY_DETAILS.phoneClean.substring(1)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.7)",
            "0 0 0 20px rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute w-full h-full rounded-full"
      />
      <MessageCircle className="w-8 h-8 text-white z-10" />
    </motion.a>
  );
};

export default WhatsAppWidget;