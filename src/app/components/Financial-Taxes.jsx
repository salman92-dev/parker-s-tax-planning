"use client";
import React from "react";
import Image from "next/image";
import { FaSignInAlt, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    description:
      "Enter your incomes, deductions, and dependents line by line with guided prompts",
    icon: <FaSignInAlt className="text-orange-500 w-5 h-5" />,
  },
  {
    description:
      "Toggle S-Corp, family payroll, foundations, and defined benefit alternatives to compare outcomes.",
    icon: <FaBalanceScale className="text-orange-500 w-5 h-5" />,
  },
];

const FinancialTax = () => {
  return (
    <div className="bg-[#EFEEEB] text-white px-6 py-16 rounded-3xl mb-3">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0,filter :'blur(12px)',  y: 40 }}
        whileInView={{ opacity: 1, filter :'blur(0px)', y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="satoshi-m text-black text-3xl md:text-5xl mb-4 !leading-[120%]">
          Empowering and strengthening your financial taxes
        </h2>
        <p className="text-black satoshi-r text-lg md:px-8">
          Our platform provides advanced tools and insights to help you manage,
          grow, and secure your taxes.
        </p>
      </motion.div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#FAFAFA] rounded-3xl py-20 px-8 md:px-14 text-center hover:shadow-lg transition"
        >
          <Image
            src="/f-1.png"
            alt="f-1"
            width={1138}
            height={929}
            className="mb-10"
          />
          <p className="satoshi-m text-black text-2xl">
            Personalized insight{" "}
            <span className="text-[#111]/50">
              See your potential tax savings in real time.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-[#FAFAFA] rounded-3xl py-20 px-8 md:px-14 text-center hover:shadow-lg transition relative"
        >
          <Image
            src="/f-2.png"
            alt="f-2"
            width={1138}
            height={929}
            className="mb-10"
          />
          <p className="satoshi-m text-black text-2xl mt-[-6rem]">
            Personalized insight{" "}
            <span className="text-[#111]/50">
              See your potential tax savings in real time.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FinancialTax;
