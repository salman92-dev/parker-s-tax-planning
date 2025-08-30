"use client";

import { motion, useScroll, useTransform,useMotionTemplate } from "framer-motion";
import { useRef } from "react";


const  MotionCard =  ({ children, className = "" })  =>{
  const ref = useRef(null);

 const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Animations
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.75], [6, 0]);
  const scale = useTransform(scrollYProgress, [0,0.75],[0.85,1])
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, filter,scale }}
      className={`p-2 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default MotionCard;