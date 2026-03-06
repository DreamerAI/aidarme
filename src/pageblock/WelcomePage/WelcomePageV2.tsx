"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const HighlightedTitle = ({
	text,
	progress,
	range,
}: {
	text: string;
	progress: MotionValue<number>;
	range: [number, number, number];
}) => {
	// Animates from dim (0.2) to bright (1) and back to dim (0.2)
	const opacity = useTransform(progress, range, [0.2, 1, 0.2]);

	return (
		<motion.p
			style={{ opacity }}
			className="py-2 transition-colors duration-300"
		>
			{text}
		</motion.p>
	);
};

export const WelcomePageV2 = () => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// 1. Name shrinks and moves left from 0 to 0.3
	const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
	const nameX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-25%"]);

	// 2. Title Block visibility: Hidden until 0.3, then stays visible
	const titlesOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
	const titlesDisplay = useTransform(scrollYProgress, (latest) =>
		latest >= 0.3 ? "block" : "none",
	);

	return (
		<div ref={containerRef} className="relative h-[250vh] bg-black w-full">
			{/* GRAIN EFFECT */}
			<div className="absolute inset-0 bg-[url('/grain.png')] opacity-5 z-10 pointer-events-none"></div>
			<div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
				{/* MAIN NAME */}
				<motion.h1
					style={{ scale: nameScale, x: nameX }}
					className="text-white leading-none text-center font-bold text-[6rem] md:text-[10rem] lg:text-[20rem]"
				>
					AIDAR.
				</motion.h1>

				{/* TITLES BLOCK - Only appears after 0.3 */}
				<motion.div
					style={{
						opacity: titlesOpacity,
						display: titlesDisplay,
					}}
					className="text-white font-medium text-2xl md:text-4xl md:absolute md:right-24 md:text-left space-y-2"
				>
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
