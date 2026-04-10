"use client";

import { motion, useScroll, useTransform, MotionValue, useMotionValueEvent } from "motion/react";
import { CSSProperties, useRef, useState, useEffect } from "react";
import { GrainOverlay } from "@/components";

const HighlightedTitle = ({
	text,
	progress,
	range,
}: {
	text: string;
	progress: MotionValue<number>;
	range: [number, number, number];
}) => {
	const opacity = useTransform(progress, range, [0.2, 1, 0.2]);
	const scale = useTransform(progress, range, [1, 1.1, 1]);

	return (
		<motion.p
			style={{ opacity, scale }}
			className="py-2 transition-colors duration-300"
		>
			{text}
		</motion.p>
	);
};



export const WelcomePageV2 = () => {
	const containerRef = useRef(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [images, setImages] = useState<HTMLImageElement[]>([]);

	// Preload all 192 frames
	useEffect(() => {
		const loadedImages: HTMLImageElement[] = [];
		let loadedCount = 0;
		for (let i = 1; i <= 192; i++) {
			const img = new Image();
			const frameNum = i.toString().padStart(3, "0");
			// Assumes images are in the root of the public folder
			img.src = `/frames/ezgif-frame-${frameNum}.jpg`; 
			img.onload = () => {
				loadedCount++;
				if (loadedCount === 1) {
					// Draw the very first frame immediately once loaded!
					const ctx = canvasRef.current?.getContext("2d");
					if (ctx && canvasRef.current) {
						canvasRef.current.width = img.width;
						canvasRef.current.height = img.height;
						ctx.drawImage(img, 0, 0);
					}
				}
			};
			loadedImages.push(img);
		}
		setImages(loadedImages);
	}, []);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	// Track when the block starts leaving the viewport
	const { scrollYProgress: exitProgress } = useScroll({
		target: containerRef,
		offset: ["end end", "end start"],
	});

	const nameScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
	const nameXDesktop = useTransform(scrollYProgress, [0, 0.3], ["0%", "-25%"]);
	const nameYMobile = useTransform(scrollYProgress, [0, 0.3], ["0%", "-35%"]);

	const titlesOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
	const titlesDisplay = useTransform(scrollYProgress, (latest) =>
		latest >= 0.3 ? "block" : "none",
	);

	// Expanding white circle transition triggers ONLY when the block starts scrolling OUT of view
	const circleScale = useTransform(exitProgress, [0, 0.2], [0, 100]);
	const circleOpacity = useTransform(exitProgress, [0, 0.05], [0, 1]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (images.length === 192 && canvasRef.current) {
			const frameIndex = Math.min(191, Math.floor(latest * 192));
			const img = images[frameIndex];
			const ctx = canvasRef.current.getContext("2d");
			
			if (ctx && img && img.complete) {
				// Set canvas dimensions to match image if not already
				if (canvasRef.current.width !== img.width) {
					canvasRef.current.width = img.width;
					canvasRef.current.height = img.height;
				}
				ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
				ctx.drawImage(img, 0, 0);
			}
		}
	});

	return (
		<div
			ref={containerRef}
			className="relative h-[250vh] bg-black w-full isolate"
		>
			{/* GRAIN EFFECT */}
			<GrainOverlay />

			{/* SCROLL DRIVEN CANVAS */}
			<canvas
				ref={canvasRef}
				className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-screen opacity-[0.2]"
			/>

			<div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden z-20">



				{/* MAIN NAME */}
				<motion.h1
					style={
						{
							"--name-scale": nameScale,
							"--name-x": nameXDesktop,
							"--name-y": nameYMobile,
						} as CSSProperties
					}
					className="welcome-name text-white leading-none text-center font-bold text-[6rem] md:text-[10rem] lg:text-[20rem]"
				>
					AIDAR.
				</motion.h1>

				<motion.div
					style={{
						opacity: titlesOpacity,
						display: titlesDisplay,
					}}
					className="text-white font-medium text-2xl md:text-4xl absolute bottom-[20%] md:bottom-auto md:right-24 text-center md:text-left space-y-2"
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

			{/* EXPANDING WHITE CIRCLE AT VERY BOTTOM OF BLOCK */}
			{/* <motion.div
				style={{
					scale: circleScale,
					opacity: circleOpacity,
				}}
				className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-40 h-40 bg-white rounded-full z-50 pointer-events-none origin-center"
			/> */}
		</div>
	);
};
