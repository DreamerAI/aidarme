"use client";

import { motion, Variants } from "framer-motion";
import { Job } from "@/data/jobs";
import StackIcon from "tech-stack-icons";

interface Props {
  job: Job;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const AnimatedJobDetails = ({ job }: Props) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-4xl mx-auto rounded-3xl bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-[60px] opacity-70 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <motion.div variants={itemVariants} className="relative z-10 mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-main-dark mb-2">
          {job.role}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-500 font-inter text-lg">
          <span className="font-semibold text-main-dark">{job.company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{job.date}</span>
        </div>
      </motion.div>

      <div className="relative z-10 space-y-10">
        {/* Description Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-koulen tracking-widest text-gray-400">OVERVIEW //</h2>
          <div className="space-y-3">
            {job.description.map((desc, i) => (
              <p key={i} className="text-lg text-gray-700 font-inter leading-relaxed">
                {desc}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-koulen tracking-widest text-gray-400">IMPACT //</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 font-inter leading-relaxed marker:text-main-dark">
            {job.achievements.map((achieve, i) => (
              <li key={i} className="pl-2">{achieve}</li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div variants={itemVariants} className="space-y-6 pt-4 border-t border-gray-100">
          <h2 className="text-xl font-koulen tracking-widest text-gray-400">TECHNOLOGIES //</h2>
          <div className="flex flex-wrap gap-4">
            {job.technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl p-2 shadow-sm border border-gray-100"
                title={tech}
              >
                <div className="w-8 h-8 pointer-events-none">
                  <StackIcon name={tech as any} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
