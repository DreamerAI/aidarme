"use client";

import { motion, MotionValue, useTransform } from "motion/react";

type Props = {
	text: string;
	progress: MotionValue<number>;
	range: [number, number];
};

export const HighlightedTitle = ({ text, progress, range }: Props) => {
	const localProgress = useTransform(progress, range, [0, 1], { clamp: true });
	const opacity = useTransform(localProgress, [0, 0.5, 1], [0.3, 1, 0.2]);
	const scale = useTransform(localProgress, [0, 0.5, 1], [1.02, 1.1, 1]);

	return (
		<motion.p style={{ opacity, scale }} className="py-2">
			{text}
		</motion.p>
	);
};
