"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SceneContent } from "./components/SceneContent";

export const WelcomePageV2 = () => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
	const nameXDesktop = useTransform(scrollYProgress, [0, 0.3], ["0%", "-25%"]);
	const nameYMobile = useTransform(scrollYProgress, [0, 0.3], ["0%", "-35%"]);

	const titlesProgress = useTransform(scrollYProgress, [0.3, 0.9], [0, 1], {
		clamp: true,
	});
	const titlesOpacity = useTransform(titlesProgress, [0, 0.05], [0, 1]);

	const wipeProgress = useTransform(scrollYProgress, [0.4, 1], [0, 1], {
		clamp: true,
	});

	const wipeClipPath = useTransform(
		wipeProgress,
		(v) => `inset(${(1 - v) * 100}% 0% 0% 0%)`,
	);

	const lightTextClipPath = useTransform(
		wipeProgress,
		(v) => `inset(0% 0% ${v * 100}% 0%)`,
	);

	const sceneProps = {
		nameScale,
		nameXDesktop,
		nameYMobile,
		titlesProgress,
		titlesOpacity,
	};

	return (
		<motion.div
			id="home"
			ref={containerRef}
			className="relative h-[180vh] w-full isolate"
		>
			<div className="absolute inset-0 bg-ink-900 -z-20 pointer-events-none border-b" />

			<motion.div
				style={{ clipPath: wipeClipPath }}
				className="absolute inset-0 z-0 bg-paper-100 pointer-events-none"
			/>

			<motion.div
				style={{ clipPath: lightTextClipPath }}
				className="absolute inset-0 z-10 text-paper-100 pointer-events-none"
			>
				<SceneContent {...sceneProps} />
			</motion.div>

			<motion.div
				style={{ clipPath: wipeClipPath }}
				className="absolute inset-0 z-10 text-ink-900"
			>
				<SceneContent {...sceneProps} />
			</motion.div>
		</motion.div>
	);
};
