"use client";

import { motion } from "motion/react";
import React from "react";
import { AnimatedNumber } from "./AnimatedNumber";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const fadeLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay, ease: EASE },
  }),
};

type Props = {
  value?: string;
  label: string;
  delay: number;
  inView: boolean;
  icon?: React.ReactNode;
};

export const StatBlock = ({ value, label, delay, inView, icon }: Props) => (
  <motion.div
    variants={fadeLeft}
    initial="hidden"
    animate={inView ? 'visible' : 'hidden'}
    custom={delay}
    className="flex flex-col gap-1"
  >
    {icon ?? (
      <span className="font-koulen text-[2.5rem] xl:text-[3rem] leading-none text-ink-900">
        <AnimatedNumber value={value!} inView={inView} />
      </span>
    )}
    <span className="font-inter text-[0.65rem] font-semibold tracking-widest uppercase text-wash-200 leading-snug whitespace-pre-line">
      {label}
    </span>
  </motion.div>
);
