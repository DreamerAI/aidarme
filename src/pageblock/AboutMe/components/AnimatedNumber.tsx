"use client";

import { animate } from "motion/react";
import { useEffect, useRef } from "react";

type Props = {
  value: string;
  inView: boolean;
};

export const AnimatedNumber = ({ value, inView }: Props) => {
  const numMatch = value.match(/\d+/);
  const suffix = value.replace(/\d+/, '');
  const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView && targetNumber > 0) {
      const controls = animate(0, targetNumber, {
        duration: 2.5,
        ease: [0.2, 0.8, 0.2, 1],
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, targetNumber, suffix]);

  return <span ref={nodeRef}>{targetNumber === 0 ? value : `0${suffix}`}</span>;
};
