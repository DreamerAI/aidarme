"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const WelcomePage = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
	const paragraphY = useTransform(scrollYProgress, [0, 1], ["0em", "-50px"]);
	const subParagraphY = useTransform(
		scrollYProgress,
		[0, 1],
		["0em", "-150px"],
	);

	return (
		<motion.div
			ref={ref}
			className="min-h-screen h-full text-black w-screen flex flex-col items-center justify-center "
			style={{
				opacity,
				scale,
				y,
			}}
		>
			<div className="text-center">
				<motion.h1
					style={{ y: paragraphY }}
					className="text-headline font-bold"
				>
					AIDAR.
				</motion.h1>
				<div className="flex justify-around mt-6 gap-2 w-full text-xl md:flex-row flex-col sm:text-4xl">
					<motion.p style={{ y: subParagraphY }}>Frontend Developer</motion.p>
					<motion.p style={{ y: subParagraphY }}>UI/UX Designer</motion.p>
				</div>
			</div>
		</motion.div>
	);
};
