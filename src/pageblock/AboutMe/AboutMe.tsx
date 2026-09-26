"use client";

import {
	motion,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import Image from "next/image";
import type React from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";
import { AboutInfo } from "./components/AboutInfo";
import { AboutStats } from "./components/AboutStats";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, delay, ease: EASE },
	}),
};

const fadeRight = {
	hidden: { opacity: 0, x: -30 },
	visible: (delay: number) => ({
		opacity: 1,
		x: 0,
		transition: { duration: 0.75, delay: delay + 0.1, ease: EASE },
	}),
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: (delay = 0) => ({
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

export const AboutMe = () => {
	const { t } = useLanguage();
	const [headerRef, headerInView] = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const [bodyRef, bodyInView] = useInView({
		triggerOnce: true,
		threshold: 0.08,
	});
	const [statsRef, statsInView] = useInView({
		triggerOnce: true,
		threshold: 0.15,
	});
	const [footerRef, footerInView] = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
		damping: 30,
		stiffness: 200,
	});
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
		damping: 30,
		stiffness: 200,
	});

	const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = event.currentTarget.getBoundingClientRect();
		mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
		mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
	};

	const resetMousePosition = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	return (
		<section
			id="about"
			className="relative w-full min-h-screen bg-main-white text-ink-900 px-6 py-10 md:px-10 lg:px-14 xl:px-20 overflow-hidden font-inter"
		>
			<h3 className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-wash-200 font-inter mb-5">
				{t("about.sectionTitle")}
			</h3>

			<motion.div
				ref={headerRef}
				variants={staggerContainer}
				initial="hidden"
				animate={headerInView ? "visible" : "hidden"}
				className="flex justify-between items-start mb-6 lg:mb-10"
			>
				<div className="flex flex-col gap-2">
					<h2 className="font-koulen text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-wide uppercase flex flex-wrap gap-x-3">
						{t("about.name").split(" ").map((word, wordIndex) => (
							<span key={`${word}-${wordIndex}`} className="flex overflow-hidden">
								{word.split("").map((character, characterIndex) => (
									<motion.span
										key={`${character}-${characterIndex}`}
										variants={itemFadeUp}
									>
										{character}
									</motion.span>
								))}
							</span>
						))}
					</h2>
				</div>

				<motion.div
					variants={itemFadeUp}
					className="hidden md:flex flex-col items-end gap-1"
				>
					<span className="font-koulen text-[2.5rem] leading-none">[24]</span>
					<span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-accent-orange font-inter">
						{t("about.role")}
					</span>
				</motion.div>
			</motion.div>

			<div
				ref={bodyRef}
				className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12"
			>
				<motion.div
					variants={fadeRight}
					initial="hidden"
					animate={bodyInView ? "visible" : "hidden"}
					custom={0}
					style={{ y }}
					className="shrink-0 w-full max-w-70 mx-auto mb-16 lg:mb-0 lg:mx-0 lg:w-65 xl:w-75 lg:max-w-none"
				>
					<motion.div
						onMouseMove={handleMouseMove}
						onMouseLeave={resetMousePosition}
						style={{ rotateX, rotateY, transformPerspective: 1000 }}
						className="relative w-full aspect-3/4 overflow-hidden rounded-sm grayscale-0 lg:grayscale-30 lg:hover:grayscale-0 transition-[filter] duration-600"
					>
						<motion.div
							className="absolute inset-0 z-10 bg-main-white"
							initial={{ scaleY: 1 }}
							animate={bodyInView ? { scaleY: 0 } : { scaleY: 1 }}
							transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
							style={{ originY: 0 }}
						/>
						<Image
							src="/images/aidar.png"
							alt={t("about.name")}
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 280px, 300px"
							priority
						/>
					</motion.div>
				</motion.div>

				<AboutInfo inView={bodyInView} />
				<AboutStats
					statsRef={statsRef}
					statsInView={statsInView}
					bodyInView={bodyInView}
				/>
			</div>

			<motion.div
				ref={footerRef}
				variants={fadeUp}
				initial="hidden"
				animate={footerInView ? "visible" : "hidden"}
				custom={0.1}
				className="flex justify-end items-center gap-2 mt-8 lg:mt-10 pt-4"
			>
				<span className="font-inter text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-wash-200">
					{t("about.location")}
				</span>
				<span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
			</motion.div>
		</section>
	);
};
