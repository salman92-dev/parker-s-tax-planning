"use client";
import React from "react";
import { FaSignInAlt, FaBalanceScale, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import MotionCard from "./animations/MotionCard";

const features = [
  {
    title: "Clear Inputs",
    description:
      "Enter your incomes, deductions, and dependents line by line with guided prompts",
    icon: <FaSignInAlt className="text-orange-500 w-5 h-5" />,
  },
  {
    title: "Strategy Simulator",
    description:
      "Toggle S-Corp, family payroll, foundations, and defined benefit alternatives to compare outcomes.",
    icon: <FaBalanceScale className="text-orange-500 w-5 h-5" />,
  },
  {
    title: "Instant Results",
    description:
      "View “Before vs. After” tables and charts in seconds—no spreadsheets required.",
    icon: <FaBolt className="text-orange-500 w-5 h-5" />,
  },
];

const SmartTaxSection = () => {
  return (
    <div className="bg-[#083630] text-white px-6 py-16 rounded-3xl mb-3">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="satoshi-m text-3xl md:text-5xl mb-4 text-white md:px-20 !leading-[120%]">
          Smart Tax Planning, Simplified
        </h2>
        <p className="text-white/80 satoshi-r text-lg md:px-8">
          Our platform provides advanced tools and insights to help you manage,
          grow, and secure your taxes.
        </p>
      </motion.div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <MotionCard key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#1F514A] rounded-xl py-20 px-8 md:px-14 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-10">
                <div className="bg-white p-4 rounded-2xl">{feature.icon}</div>
              </div>
              <h3 className="satoshi-m text-3xl mb-8">{feature.title}</h3>
              <p className="satoshi-r text-lg text-white/80">
                {feature.description}
              </p>
            </motion.div>
          </MotionCard>
        ))}
      </div>
    </div>
  );
};

export default SmartTaxSection;
