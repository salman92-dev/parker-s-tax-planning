"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    description:
      "<span class='text-white'>Guided Inputs</span> Enter income, deductions, and dependents step by step—no spreadsheets required.",
    icon: "/c-1.svg",
  },
  {
    description:
      "<span class='text-white'>Strategy Simulator</span> Toggle S-Corp, family payroll, foundations, and retirement plans to compare outcomes.",
    icon: "/c-2.svg",
  },
  {
    description:
      "<span class='text-white'>Instant Insights</span> View before and after tax savings in clear tables and charts within seconds.",
    icon: "/c-3.svg",
  },
  {
    description:
      "<span class='text-white'>Smart Scenarios</span> Run unlimited “what if” cases to find the best mix of strategies for you.",
    icon: "/c-4.svg",
  },
];

const CoreFeatures = () => {
  return (
    <div className="bg-[#083630] text-white px-6 py-16 rounded-3xl mb-3">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="satoshi-m text-3xl md:text-5xl mb-4 text-white md:px-6 !leading-[120%]">
          Core features that set us
          <br /> apart from the competition
        </h2>
        <p className="text-white/80 satoshi-r text-lg md:px-8">
          Explore our standout features designed to deliver exceptional
          performance and value, distinguishing us from the competition.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
        {/* First Column */}
        <div className="space-y-6">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              direction="left" // slide from left
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/smiling-women.png"
            alt="Smiling Woman"
            className="rounded-xl object-cover w-full"
          />
        </motion.div>

        {/* Third Column */}
        <div className="space-y-6">
          {features.slice(2).map((feature, index) => (
            <FeatureCard
              key={index + 2}
              {...feature}
              direction="right" // slide from right
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ description, icon, direction, delay }) => {
  const xValue = direction === "left" ? -80 : 80;

  return (
    <motion.div
      initial={{ opacity: 0, x: xValue }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0, 0.71, 0.2, 1.01], delay }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#1F514A] rounded-3xl p-6 flex flex-col items-start space-x-3 hover:shadow-lg transition"
    >
      <Image src={icon} alt="logo" width={50} height={50} className="mb-20" />
      <div>
        <p
          className="text-satoshi-m text-white/50 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
    </motion.div>
  );
};

export default CoreFeatures;
