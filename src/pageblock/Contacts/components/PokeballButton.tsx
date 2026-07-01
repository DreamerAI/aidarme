"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import React from "react";

export const PokeballButton = () => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.5;
    const y = (clientY - (top + height / 2)) * 0.5;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href="mailto:abdykayimovaidar@gmail.com"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center overflow-hidden group hover:scale-105 transition-all duration-500 z-10 shadow-xl"
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-[filter] duration-500"
      >
        <circle cx="50" cy="50" r="47" fill="#ffffff" stroke="#111827" strokeWidth="6" />
        <path d="M 3 50 A 47 47 0 0 1 97 50 Z" fill="#ee1515" />
        <path d="M 3 50 A 47 47 0 0 1 97 50" fill="none" stroke="#111827" strokeWidth="6" />
        <line x1="3" y1="50" x2="97" y2="50" stroke="#111827" strokeWidth="6" />
        <circle cx="50" cy="50" r="14" fill="#ffffff" stroke="#111827" strokeWidth="6" />
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="#111827"
          className="group-hover:scale-125 transition-transform duration-300 origin-center"
        />
      </svg>
      <span className="absolute top-[22%] left-1/2 -translate-x-1/2 font-koulen text-xl md:text-2xl tracking-widest pointer-events-none text-main-white drop-shadow-md z-20 group-hover:-translate-y-1 transition-transform duration-300">
        SAY HI
      </span>
    </motion.a>
  );
};
