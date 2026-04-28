"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { CSSProperties, useRef } from "react";

const HighlightedTitle = ({
	text,
	progress,
	range,
}: {
	text: string;
	progress: MotionValue<number>;
	range: [number, number];
}) => {
	const localProgress = useTransform(progress, range, [0, 1], { clamp: true });
	const opacity = useTransform(localProgress, [0, 0.5, 1], [0.3, 1, 0.2]);
	const scale = useTransform(localProgress, [0, 0.5, 1], [1.02, 1.1, 1]);

	return (
		<motion.p style={{ opacity, scale }} className="py-2">
			{text}
		</motion.p>
	);
};

/** Shared content rendered in both colour layers */
const SceneContent = ({
	nameScale,
	nameXDesktop,
	nameYMobile,
	titlesProgress,
	titlesOpacity,
}: {
	nameScale: MotionValue<number>;
	nameXDesktop: MotionValue<string>;
	nameYMobile: MotionValue<string>;
	titlesProgress: MotionValue<number>;
	titlesOpacity: MotionValue<number>;
}) => (
	<div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
		<motion.h1
			style={
				{
					"--name-scale": nameScale,
					"--name-x": nameXDesktop,
					"--name-y": nameYMobile,
				} as CSSProperties
			}
			className="welcome-name leading-none text-center font-bold text-[6rem] md:text-[10rem] lg:text-[20rem]"
		>
			AIDAR.
		</motion.h1>

		<motion.div
			style={{ opacity: titlesOpacity, pointerEvents: titlesOpacity }}
			className="font-medium text-2xl md:text-4xl absolute bottom-[20%] md:bottom-auto md:right-24 text-center md:text-left space-y-2"
		>
			<HighlightedTitle text="Frontend Developer" progress={titlesProgress} range={[0.0, 0.33]} />
			<HighlightedTitle text="UI Designer"        progress={titlesProgress} range={[0.33, 0.66]} />
			<HighlightedTitle text="React Specialist"   progress={titlesProgress} range={[0.66, 1]} />
		</motion.div>
	</div>
);

export const WelcomePageV2 = () => {
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const nameScale     = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
	const nameXDesktop  = useTransform(scrollYProgress, [0, 0.3], ["0%", "-25%"]);
	const nameYMobile   = useTransform(scrollYProgress, [0, 0.3], ["0%", "-35%"]);

	const titlesProgress = useTransform(scrollYProgress, [0.3, 0.9], [0, 1], { clamp: true });
	const titlesOpacity  = useTransform(titlesProgress, [0, 0.05], [0, 1]);

	const wipeProgress = useTransform(scrollYProgress, [0.40, 1], [0, 1], { clamp: true });

	// White overlay grows from bottom upward; also used to clip the dark-text layer
	const wipeClipPath = useTransform(wipeProgress, (v) => `inset(${(1 - v) * 100}% 0% 0% 0%)`);

	// Light-text layer stays visible above the wipe edge (still on dark bg)
	const lightTextClipPath = useTransform(wipeProgress, (v) => `inset(0% 0% ${v * 100}% 0%)`);

	const sceneProps = { nameScale, nameXDesktop, nameYMobile, titlesProgress, titlesOpacity };

	return (
		<motion.div ref={containerRef} className="relative h-[250vh] w-full isolate">
			{/* Base dark background */}
			<div className="absolute inset-0 bg-ink-900 -z-20" />

			{/* White wipe overlay — grows from bottom upward */}
			<motion.div
				style={{ clipPath: wipeClipPath }}
				className="absolute inset-0 z-0 bg-paper-100"
			/>

			{/* Light text — visible on the dark (un-wiped) top portion */}
			<motion.div
				style={{ clipPath: lightTextClipPath }}
				className="absolute inset-0 z-10 text-paper-100 pointer-events-none"
			>
				<SceneContent {...sceneProps} />
			</motion.div>

			{/* Dark text — visible on the white (wiped) bottom portion; same clip as wipe */}
			<motion.div
				style={{ clipPath: wipeClipPath }}
				className="absolute inset-0 z-10 text-ink-900 pointer-events-none"
			>
				<SceneContent {...sceneProps} />
			</motion.div>
		</motion.div>
	);
};
