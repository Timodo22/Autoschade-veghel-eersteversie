import React from 'react';
import { motion } from 'framer-motion';
import { COMPANY_DETAILS } from '../types';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    aria-hidden="true"
    focusable="false"
  >
    {/* WhatsApp logo (simplified) */}
    <path
      fill="currentColor"
      d="M19.11 17.47c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.6.07-.27-.14-1.16-.43-2.2-1.37-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.06-.11-.25-.18-.52-.32z"
    />
    <path
      fill="currentColor"
      d="M16.04 4C9.41 4 4.02 9.39 4.02 16.02c0 2.1.55 4.15 1.6 5.95L4 28l6.2-1.58c1.74.95 3.7 1.45 5.84 1.45 6.63 0 12.02-5.39 12.02-12.02C28.06 9.39 22.67 4 16.04 4zm0 21.7c-1.93 0-3.79-.52-5.39-1.5l-.38-.23-3.68.94.98-3.58-.25-.37a9.67 9.67 0 0 1-1.55-5.25c0-5.34 4.34-9.68 9.68-9.68s9.68 4.34 9.68 9.68-4.34 9.68-9.68 9.68z"
    />
  </svg>
);

const WhatsAppWidget: React.FC = () => {
  return (
    <motion.a
      href={`https://wa.me/31${COMPANY_DETAILS.phoneClean.substring(1)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse ring */}
      <motion.div
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(37, 211, 102, 0.7)',
            '0 0 0 20px rgba(37, 211, 102, 0)',
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute w-full h-full rounded-full"
      />

      {/* Animated "1" badge */}
      <motion.div
        className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow"
        initial={{ scale: 0, y: 2 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 18 }}
      >
        <motion.span
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          1
        </motion.span>
      </motion.div>

      {/* WhatsApp logo */}
      <WhatsAppIcon className="w-8 h-8 text-white z-10" />
    </motion.a>
  );
};

export default WhatsAppWidget;
