"use client";
import React from "react";
import { motion } from "framer-motion";

const OptimizeTax = () => {
  return (
    <section
      className="bg-[#1F514A] text-white px-6 py-8 md:py-16 rounded-3xl mb-3"
    id="pricing">
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="satoshi-m text-3xl md:text-5xl mb-4 text-white md:px-6 !leading-[120%]"
        >
          Ready to Optimize Your Taxes?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/50 satoshi-r text-lg md:px-32"
        >
          Build your customized tax plan in minutes. No credit card required.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FB4D17] text-white px-8 py-3 mt-12 rounded-full satoshi-m hover:bg-orange-600 transition"
        >
          Start your free plan &nbsp; →
        </motion.button>
      </div>
    </section>
  );
};

export default OptimizeTax;
