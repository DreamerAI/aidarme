'use client';

import { motion } from 'framer-motion';

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, transition: { duration: 0.2, ease: 'easeOut', delay: 3 } }}
      whileHover={{ opacity: 1, transition: { duration: 0.2, ease: 'easeIn' } }}
      className="flex items-center justify-between w-full fixed p-4 h-20 top-0 z-50 bg-transparent">
      <h1 className="text-2xl font-bold uppercase">AIDAR.</h1>
      <div>
        <p className="text-xs text-gray-500">PORTFOLIO</p>
        <p className="text-xs text-gray-400">DESIGNER & DEVELOPER</p>
      </div>
    </motion.div>
  );
};
