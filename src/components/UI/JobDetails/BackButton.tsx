"use client";

import { useTransitionRouter } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

export const BackButton = () => {
  const router = useTransitionRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      className="group flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-[0px_0px_5px_2px_#cbd5e0] hover:bg-main-dark hover:text-white duration-300 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
    </motion.button>
  );
};
