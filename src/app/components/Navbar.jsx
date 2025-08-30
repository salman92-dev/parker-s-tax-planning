"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" },
    { href: "#what-we-do", label: "What we Do" },
  ];

  return (
    <nav className="w-full bg-[#EFEEEB] z-50 rounded-3xl mt-3">
      <div className="md:px-8 px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl satoshi-b text-black">
          Parker’s tax planning
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16 satoshi-m">
          {navLinks.map((link) => (
           <Link
                key={link.href}
                href={link.href}
                className="relative block py-1 text-[#131313] hover:text-primary transition group"
                onClick={() => setOpen(false)}
                >
                {link.label}
                {/* underline effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
            <button className="py-3 px-6 bg-white rounded-full text-black">Sign In</button>
            <button className="py-3 px-6 bg-[#FB4D17] rounded-full text-white">Sign Up</button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden flex flex-col justify-between h-[16px] transition ${open ? '-rotate-180' : 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        >
          <span className={`h-[2px] w-6 bg-gray-800 transition ${open ? "rotate-45 translate-y-[7px]" : ""}`}></span>
          <span className={`h-[2px] w-6 bg-gray-800 transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-[2px] w-6 bg-gray-800 transition ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "50vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#083630] flex flex-col justify-center rounded-b-2xl shadow-md"
          >
            <div className="flex flex-col px-4 py-2 space-y-8">
              {navLinks.map((link) => (
                <Link
                key={link.href}
                href={link.href}
                className="block satoshi-m text-xl py-2 text-white hover:text-primary transition group"
                onClick={() => setOpen(false)}
                >
                {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
