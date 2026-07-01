"use client";

import { motion } from "motion/react";
import React from "react";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: (delay: number = 0) => ({
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: delay,
		},
	}),
};

const itemFadeUp = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: EASE },
	},
};

type Props = {
	number: string;
	title: string;
	children: React.ReactNode;
	delay?: number;
	inView: boolean;
};

export const InfoSection = ({
	number,
	title,
	children,
	delay = 0,
	inView,
}: Props) => (
	<motion.div
		variants={staggerContainer}
		initial="hidden"
		animate={inView ? "visible" : "hidden"}
		custom={delay}
		className="pb-5 mb-5 border-b border-paper-300 last:border-b-0 last:mb-0 last:pb-0"
	>
		<motion.div
			variants={itemFadeUp}
			className="flex items-baseline gap-3 mb-3"
		>
			<span className="text-[0.8rem] font-bold text-accent-orange tracking-wide font-inter">
				{number}
			</span>
			<span className="text-[0.8rem] font-bold tracking-[0.12em] uppercase text-ink-900 font-inter">
				[{title}]
			</span>
		</motion.div>
		{children}
	</motion.div>
);
