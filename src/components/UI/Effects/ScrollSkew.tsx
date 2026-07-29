"use client";

import {
	motion,
	useScroll,
	useVelocity,
	useSpring,
	useTransform,
} from "motion/react";
import React from "react";

export const ScrollSkew = ({ children }: { children: React.ReactNode }) => {
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);

	// Smooth out the velocity to avoid jittering
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});

	// Transform velocity into a skew degree.
	// Negative velocity = scroll up = positive skew
	// Positive velocity = scroll down = negative skew
	// Max skew is clamped between -2 and 2 degrees to keep it subtle and elegant.
	const skewY = useTransform(smoothVelocity, [-1500, 1500], [2, -2], {
		clamp: true,
	});

	return (
		<motion.div
			style={{ skewY }}
			className="origin-center w-full"
			// Ensure no layout breaks occur during skewing
		>
			{children}
		</motion.div>
	);
};
