"use client";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Parker’s Tax Planning saved our clients over $50K last quarter and it took under 5 minutes to set up",
    name: "Michael Carter",
    title: "CPA Business Partner",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    quote:
      "Parker’s Tax Planning saved our clients over $50K last quarter and it took under 5 minutes to set up",
    name: "Morgan Taylor",
    title: "CPA Business Partner",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    quote:
      "As an independent consultant, I modeled multiple strategies in seconds and reclaimed thousands.",
    name: "Jordan Lee",
    title: "Management Consultant",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    quote:
      "Parker’s Tax Planning saved our clients over $50K last quarter and it took under 5 minutes to set up",
    name: "Michael Carter",
    title: "CPA Business Partner",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    quote:
      "Parker’s Tax Planning saved our clients over $50K last quarter and it took under 5 minutes to set up",
    name: "Morgan Taylor",
    title: "CPA Business Partner",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    quote:
      "As an independent consultant, I modeled multiple strategies in seconds and reclaimed thousands.",
    name: "Jordan Lee",
    title: "Management Consultant",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#EFEEEB] text-white py-16 rounded-3xl mb-3">
      {/* Heading + Subheading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="satoshi-m text-3xl md:text-5xl mb-4 text-black !leading-[120%]"
        >
          What Our Clients Are Saying
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[#111]/50 inter-r text-lg md:px-30"
        >
          Our users love how Advisora Template simplifies their processes and
          streamlines operations
        </motion.p>
      </div>

      {/* Marquee */}
      <Marquee
        pauseOnHover
        gradient={true}
        gradientWidth={50}
        gradientColor="#EFEEEB"
        speed={50}
      >
        <div className="flex gap-8 ml-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fafafa] rounded-3xl px-8 py-16 min-w-[300px] max-w-sm md:max-w-md flex-shrink-0"
            >
              <p className="satoshi-m text-[#111]/50 mb-8 text-lg">
                {item.quote}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="inter-m text-black text-lg">{item.name}</p>
                  <p className="text-[#111]/50 text-lg">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
