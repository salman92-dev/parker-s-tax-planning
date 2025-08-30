'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 overflow-hidden my-3 overflow-hidden">
      {/* Left Section */}
      <div className="lg:w-[55%] space-y-6 bg-[#EFEEEB] flex flex-col justify-center p-8 md:pl-34 rounded-3xl md:rounded-4xl relative">
        <motion.img 
          initial={{ opacity :0, scale: 0.7 }}
          animate={{ opacity:1,scale :1 }}
          transition={{ duration: 1, delay: 0.6 }}
        src="/wing.svg" alt='wing' width={50} height={50} className='absolute md:top-[11%] md:left-[11%] md:w-12 w-8 top-3 left-2' />
        {/* Animated Title */}
        <motion.h1
          className="text-4xl md:text-6xl !leading-[120%] satoshi-m text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Tax Planning in <br /> <span className="text-black">under 5 Minutes</span>
        </motion.h1>

        {/* Animated Description Text */}
        <motion.p
          className="satoshi-r text-[#111111]/50 md:pr-30"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Instantly model S-Corp elections, family payroll, defined benefit plans, and more.
          See your personalized tax savings with one click.
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.button
            className="bg-[#FB4D17] text-white px-6 py-3 rounded-full satoshi-m hover:bg-orange-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started &nbsp; →
          </motion.button>
          <motion.button
            className="border border-[#FB4D17] text-[#FB4D17] px-6 py-3 rounded-full satoshi-m hover:bg-orange-50 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start your free plan
          </motion.button>
        </motion.div>

        {/* Avatars */}
        <motion.div
          className="flex flex-col gap-4 space-x-3 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="flex -space-x-3 mt-2">
            <Image src="/avatars.png" alt="avatars" width={353} height={97} className="w-40" />
          </div>
          <span className="text-[#111]/50 satoshi-r mt-2">
            10,000+ people already joined Parker’s Tax Planning
          </span>
        </motion.div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[45%] relative flex justify-center items-center">
        {/* Animated Image */}
        <motion.div
          initial={{ opacity: 0,rotate : 10, scale: 0.7 }}
          animate={{ opacity: 1, rotate:0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/hero-img.png"
            alt="Smiling Man"
            width={1278}
            height={1328}
            className="rounded-xl object-cover w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
