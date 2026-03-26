'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { CSSProperties, useRef } from 'react';
import StackIcon, { IconName } from 'tech-stack-icons';

const HighlightedTitle = ({
  text,
  progress,
  range,
}: {
  text: string;
  progress: MotionValue<number>;
  range: [number, number, number];
}) => {
  const opacity = useTransform(progress, range, [0.2, 1, 0.2]);

  return (
    <motion.p style={{ opacity }} className="py-2 transition-colors duration-300">
      {text}
    </motion.p>
  );
};

const ICONS_CONFIG: {
  name: string;
  left: string;
  size: string;
  yStart: string;
  yEnd: string;
  range: [number, number];
}[] = [
  // Frontend [0.3, 0.6] range
  { name: 'html5', left: '10%', size: 'w-16 h-16', yStart: '80vh', yEnd: '-20vh', range: [0.3, 0.6] },
  { name: 'css3', left: '25%', size: 'w-12 h-12', yStart: '90vh', yEnd: '-10vh', range: [0.3, 0.6] },
  { name: 'js', left: '45%', size: 'w-24 h-24', yStart: '85vh', yEnd: '-40vh', range: [0.3, 0.6] },
  { name: 'typescript', left: '65%', size: 'w-14 h-14', yStart: '95vh', yEnd: '-10vh', range: [0.3, 0.6] },
  { name: 'vuejs', left: '55%', size: 'w-14 h-14', yStart: '95vh', yEnd: '-10vh', range: [0.3, 0.6] },
  { name: 'tailwindcss', left: '80%', size: 'w-20 h-20', yStart: '75vh', yEnd: '-25vh', range: [0.3, 0.6] },
  { name: 'chakraui', left: '70%', size: 'w-14 h-14', yStart: '75vh', yEnd: '-25vh', range: [0.3, 0.6] },

  // Design [0.5, 0.8] range
  { name: 'luma', left: '10%', size: 'w-16 h-16', yStart: '80vh', yEnd: '-50vh', range: [0.5, 0.8] },
  { name: 'framer', left: '50%', size: 'w-16 h-16', yStart: '80vh', yEnd: '-20vh', range: [0.5, 0.8] },
  { name: 'photoshop', left: '70%', size: 'w-20 h-20', yStart: '85vh', yEnd: '-75vh', range: [0.5, 0.8] },
  { name: 'figma', left: '80%', size: 'w-24 h-24', yStart: '80vh', yEnd: '-20vh', range: [0.5, 0.8] },
  { name: 'premierepro', left: '30%', size: 'w-16 h-16', yStart: '80vh', yEnd: '-20vh', range: [0.5, 0.8] },

  // React [0.7, 1.0] range
  { name: 'react', left: '20%', size: 'w-24 h-24', yStart: '85vh', yEnd: '-25vh', range: [0.7, 1.0] },
  { name: 'nextjs', left: '55%', size: 'w-20 h-20', yStart: '95vh', yEnd: '-15vh', range: [0.7, 1.0] },
  { name: 'redux', left: '80%', size: 'w-16 h-16', yStart: '80vh', yEnd: '-10vh', range: [0.7, 1.0] },
  { name: 'zustand', left: '70%', size: 'w-16 h-16', yStart: '80vh', yEnd: '-60vh', range: [0.7, 1.0] },
  { name: 'jest', left: '5%', size: 'w-16 h-16', yStart: '80vh', yEnd: '-60vh', range: [0.7, 1.0] },
];

const FloatingIcon = ({
  name,
  progress,
  range,
  left,
  size,
  yStart,
  yEnd,
}: {
  name: string;
  progress: MotionValue<number>;
  range: [number, number];
  left: string;
  size: string;
  yStart: string;
  yEnd: string;
}) => {
  const y = useTransform(progress, range, [yStart, yEnd]);
  const opacity = useTransform(
    progress,
    [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
    [0, 0.6, 0.6, 0]
  );

  return (
    <motion.div
      style={{ y, opacity, left }}
      className={`absolute ${size} z-0 pointer-events-none opacity-50`}
    >
      <StackIcon name={name as any} variant="dark"  />
    </motion.div>
  );
};


export const WelcomePageV2 = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const nameXDesktop = useTransform(scrollYProgress, [0, 0.3], ['0%', '-25%']);
  const nameYMobile = useTransform(scrollYProgress, [0, 0.3], ['0%', '-35%']);

  const titlesOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const titlesDisplay = useTransform(scrollYProgress, (latest) =>
    latest >= 0.3 ? 'block' : 'none',
  );

  return (
    <div ref={containerRef} className="relative h-[250vh] bg-black w-full">
      {/* GRAIN EFFECT */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[5%] z-10 pointer-events-none"></div>
      
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
        
        {/* ANIMATED ICONS */}
        {ICONS_CONFIG.map((config, index) => (
          <FloatingIcon
            key={`${config.name}-${index}`}
            name={config.name}
            progress={scrollYProgress}
            range={config.range}
            left={config.left}
            size={config.size}
            yStart={config.yStart}
            yEnd={config.yEnd}
          />
        ))}

        {/* MAIN NAME */}
        <motion.h1
          style={
            {
              '--name-scale': nameScale,
              '--name-x': nameXDesktop,
              '--name-y': nameYMobile,
            } as CSSProperties
          }
          className="welcome-name text-white leading-none text-center font-bold text-[6rem] md:text-[10rem] lg:text-[20rem]">
          AIDAR.
        </motion.h1>

        <motion.div
          style={{
            opacity: titlesOpacity,
            display: titlesDisplay,
          }}
          className="text-white font-medium text-2xl md:text-4xl absolute bottom-[20%] md:bottom-auto md:right-24 text-center md:text-left space-y-2">
          <HighlightedTitle
            text="Frontend Developer"
            progress={scrollYProgress}
            range={[0.35, 0.45, 0.55]}
          />
          <HighlightedTitle
            text="UI Designer"
            progress={scrollYProgress}
            range={[0.55, 0.65, 0.75]}
          />
          <HighlightedTitle
            text="React Specialist"
            progress={scrollYProgress}
            range={[0.75, 0.85, 0.95]}
          />
        </motion.div>
      </div>
    </div>
  );
};
