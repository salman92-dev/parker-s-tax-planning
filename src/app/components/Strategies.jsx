'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Strategies = () => {
  return (
    <section className="py-12 md:py-18 bg-[#EFEEEB] rounded-3xl md:rounded-4xl mb-3 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Heading with scroll-triggered animation */}
      <motion.h2
        className="text-center text-black inter-m text-2xl md:text-5xl md:px-28 !leading-[120%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // triggers when 50% is in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Turn complex tax rules into simple strategies — model elections, payroll,
        <span className="text-[#111]/50"> and benefits in minutes to see your real savings</span>
      </motion.h2>

      {/* Button with scroll-triggered animation */}
      <motion.button
        className="bg-[#FB4D17] text-white px-8 py-3 mt-12 rounded-full satoshi-m hover:bg-orange-600 transition"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See More &nbsp; →
      </motion.button>
    </section>
  );
};

export default Strategies;
