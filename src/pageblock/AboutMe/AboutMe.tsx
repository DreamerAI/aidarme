'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

export const AboutMe = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const bioY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageY = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const fadeOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      className="relative min-h-screen w-full flex flex-col justify-center gap-10 lg:gap-14 text-main-dark bg-main-white px-10 md:px-20 py-32 overflow-hidden"
      ref={containerRef}>
      {/* Decorative Parallax Blobs */}
      {/* <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 300]) }}
        className="absolute top-0 right-10 w-[30vw] h-[30vw] min-w-75 min-h-75 bg-gray-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 pointer-events-none z-0"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [300, -200]) }}
        className="absolute bottom-0 left-10 w-[40vw] h-[40vw] min-w-100 min-h-100 bg-gray-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none z-0"
      /> */}

      <motion.h2 style={{ y: titleY, opacity: fadeOpacity }} className="relative z-10">
        ABOUT ME //
      </motion.h2>

      <div className="w-full relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-center pt-10">
        <motion.div
          style={{ y: bioY, opacity: fadeOpacity }}
          className="flex flex-col gap-6 text-aboutme tracking-tight max-w-2xl w-full">
          <h3 className="text-4xl md:text-5xl font-semibold uppercase text-left">
            Aidar Abdykayimov
          </h3>
          <div className="flex flex-col gap-6 leading-paragraph text-lg md:text-xl font-inter font-light">
            <p>
              I am currently in my final year of studies at NUST MISIS University, where I am
              pursuing a degree in{' '}
              <span className="font-bold bg-main-dark text-main-white px-2 py-1 inline-block transform -rotate-1 hover:rotate-0 transition-transform">
                Mining and Geological Information Systems
              </span>
              .
            </p>
            <p>
              With a strong passion for frontend development and UI/UX design, I have dedicated
              myself to honing my skills in these areas. Over the years, I have gained valuable
              experience through various projects and internships, allowing me to develop a deep
              understanding of user-centered design principles and frontend technologies.
            </p>
            <p>
              I am eager to apply my knowledge and creativity to create engaging and intuitive
              digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y: imageY, rotate: imageRotate, scale: imageScale, opacity: fadeOpacity }}
          className="shrink-0 w-full max-w-75 md:max-w-100 relative">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/aidar.png"
              alt="Profile Picture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 300px, 400px"
              priority
              unoptimized
            />
          </div>
          <div className="absolute -inset-4 border-2 border-main-dark/10 rounded-2xl -z-10 transform translate-x-4 translate-y-4" />
        </motion.div>
      </div>
    </div>
  );
};
