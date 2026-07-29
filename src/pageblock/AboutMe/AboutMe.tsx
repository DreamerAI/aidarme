"use client";

import {
	motion,
	animate,
	useScroll,
	useTransform,
	useSpring,
	useMotionValue,
} from "motion/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

const AnimatedNumber = ({
	value,
	inView,
}: {
	value: string;
	inView: boolean;
}) => {
	const numMatch = value.match(/\d+/);
	const suffix = value.replace(/\d+/, "");
	const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;
	const nodeRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (inView && targetNumber > 0) {
			const controls = animate(0, targetNumber, {
				duration: 2.5,
				ease: [0.2, 0.8, 0.2, 1],
				onUpdate(v) {
					if (nodeRef.current) {
						nodeRef.current.textContent = Math.round(v) + suffix;
					}
				},
			});
			return () => controls.stop();
		}
	}, [inView, targetNumber, suffix]);

	return <span ref={nodeRef}>{targetNumber === 0 ? value : `0${suffix}`}</span>;
};

const TepigTooltip = ({ children }: { children: React.ReactNode }) => {
	return (
		<span className="relative inline-block group cursor-pointer text-accent-orange font-bold">
			{children}
			<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 z-50 drop-shadow-2xl">
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png"
					alt="Tepig"
					width={120}
					height={120}
					className="max-w-25 sm:max-w-30 drop-shadow-md origin-bottom animate-bounce"
					style={{ animationDuration: "2s" }}
				/>
			</span>
		</span>
	);
};

const TECH_STACK = [
	{ label: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue/Nuxt"] },
	{
		label: "State Manage",
		items: ["Redux", "RTK Query", "MobX", "Zustand", "Effector"],
	},
	{ label: "Styling", items: ["Tailwind CSS", "Chakra UI", "CSS Modules"] },
	{ label: "Backend", items: ["Node.js", "Express", "REST API/GraphQL"] },
	{
		label: "Tools",
		items: ["Git", "Docker", "Vite", "Figma", "ESLint", "Prettier"],
	},
	{ label: "Testing", items: ["Jest", "React Testing Library", "Playwright"] },
];

const LANGUAGES = [
	{ code: "EN", level: "C1" },
	{ code: "RU", level: "Native" },
	{ code: "KG", level: "Native" },
];

const STATS = [
	{ value: "4+", label: "Years of\nExperience" },
	{ value: "15+", label: "Successful\nProjects" },
	{ value: "12", label: "Clients &\nCompanies" },
];

const EASE = [0.2, 0.8, 0.2, 1] as const;

const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.65, delay, ease: EASE },
	}),
};

const fadeLeft = {
	hidden: { opacity: 0, x: 30 },
	visible: (delay: number) => ({
		opacity: 1,
		x: 0,
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

/* ─── Section block ─── */
const InfoSection = ({
	number,
	title,
	children,
	delay = 0,
	inView,
}: {
	number: string;
	title: string;
	children: React.ReactNode;
	delay?: number;
	inView: boolean;
}) => (
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

/* ─── Stat block ─── */
const StatBlock = ({
	value,
	label,
	delay,
	inView,
	icon,
}: {
	value?: string;
	label: string;
	delay: number;
	inView: boolean;
	icon?: React.ReactNode;
}) => (
	<motion.div
		variants={fadeLeft}
		initial="hidden"
		animate={inView ? "visible" : "hidden"}
		custom={delay}
		className="flex flex-col gap-1"
	>
		{icon ?? (
			<span className="font-koulen text-[2.5rem] xl:text-[3rem] leading-none text-ink-900">
				<AnimatedNumber value={value!} inView={inView} />
			</span>
		)}
		<span className="font-inter text-[0.65rem] font-semibold tracking-widest uppercase text-wash-200 leading-snug whitespace-pre-line">
			{label}
		</span>
	</motion.div>
);

/* ─── Main component ─── */
export const AboutMe = () => {
	const { t, language } = useLanguage();
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

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		mouseX.set(x);
		mouseY.set(y);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
	};

	const infinityIcon = (
		<motion.svg
			className="w-10 h-5.5 text-ink-900"
			viewBox="0 0 40 22"
			fill="none"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			initial={{ pathLength: 0 }}
			animate={bodyInView ? { pathLength: 1 } : { pathLength: 0 }}
			transition={{ duration: 2.5, ease: "easeInOut" }}
		>
			<motion.path d="M20 11c-3-5-7-8-10-8a7 7 0 1 0 0 16c3 0 7-3 10-8Zm0 0c3 5 7 8 10 8a7 7 0 1 0 0-16c-3 0-7 3-10 8Z" />
		</motion.svg>
	);

	return (
		<section
			id="about"
			className="relative w-full min-h-screen bg-main-white text-ink-900 px-6 py-10 md:px-10 lg:px-14 xl:px-20 overflow-hidden font-inter"
		>
			{/* ── Header ── */}
			<h3 className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-wash-200 font-inter mb-5">
				{t("about.sectionTitle")}
			</h3>
			<motion.div
				ref={headerRef}
				variants={staggerContainer}
				initial="hidden"
				animate={headerInView ? "visible" : "hidden"}
				custom={0}
				className="flex justify-between items-start mb-6 lg:mb-10"
			>
				<div className="flex flex-col gap-2">
					<h2 className="font-koulen text-[clamp(2rem,5vw,3.5rem)] leading-none tracking-wide uppercase flex flex-wrap gap-x-3">
						{language === "ru"
							? "Айдар Абдыкайымов"
							: "Aidar Abdykaiymov"?.split(" ").map((word, i) => (
									<span key={i} className="flex overflow-hidden">
										{word.split("").map((char, j) => (
											<motion.span key={j} variants={itemFadeUp}>
												{char}
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

			{/* ── Body ── */}
			<div
				ref={bodyRef}
				className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12"
			>
				{/* Photo */}
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
						onMouseLeave={handleMouseLeave}
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
							alt="Aidar Abdykaiymov"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 280px, 300px"
							priority
							unoptimized
						/>
					</motion.div>
				</motion.div>

				{/* Info */}
				<div className="flex-1 min-w-0">
					<motion.h3
						variants={fadeUp}
						initial="hidden"
						animate={bodyInView ? "visible" : "hidden"}
						custom={0}
						className="font-koulen text-[2rem] tracking-[0.04em] uppercase mb-5 lg:mb-7"
					>
						{t("about.infoTitle")}
					</motion.h3>

					{/* 01 — Profile */}
					<InfoSection
						number="01"
						title={language === "ru" ? "Профиль" : "Profile"}
						delay={0.05}
						inView={bodyInView}
					>
						<motion.p
							variants={itemFadeUp}
							className="font-inter text-[0.85rem] leading-relaxed text-wash-300 max-w-110"
						>
							{t("about.bio")} <TepigTooltip>{t("about.pokemon")}</TepigTooltip>
							.
						</motion.p>
					</InfoSection>

					{/* 02 — Tech Stack */}
					<InfoSection
						number="02"
						title={language === "ru" ? "Стек технологий" : "Tech Stack"}
						delay={0.15}
						inView={bodyInView}
					>
						<div className="flex flex-col gap-0.5">
							{TECH_STACK.map((row) => (
								<motion.div
									variants={itemFadeUp}
									key={row.label}
									className="flex items-baseline gap-4 py-0.75"
								>
									<span className="font-inter text-[0.7rem] sm:text-[0.7rem] font-bold tracking-widest uppercase text-ink-900 min-w-25 sm:min-w-32.5 shrink-0">
										{t(
											`about.techLabel.${row.label.toLowerCase().replace(" ", "")}`,
										)}
									</span>
									<span className="font-inter text-[0.8rem] text-wash-300 flex flex-wrap gap-x-1">
										{row.items.map((item, i) => (
											<React.Fragment key={item}>
												{i > 0 && (
													<span className="text-wash-100 mx-0.5">•</span>
												)}
												<span className="hover:text-accent-orange transition-colors cursor-default">
													{item}
												</span>
											</React.Fragment>
										))}
									</span>
								</motion.div>
							))}
						</div>
					</InfoSection>

					{/* 03 — Languages */}
					<InfoSection
						number="03"
						title={language === "ru" ? "Языки" : "Languages"}
						delay={0.25}
						inView={bodyInView}
					>
						<div className="flex flex-wrap items-baseline gap-6">
							{LANGUAGES.map((lang, i) => (
								<motion.div
									variants={itemFadeUp}
									key={lang.code}
									className={`flex items-baseline gap-2 font-inter ${
										i < LANGUAGES.length - 1
											? "pr-6 border-r border-paper-300"
											: ""
									}`}
								>
									<span className="text-[0.85rem] font-bold uppercase text-ink-900">
										{lang.code}
									</span>
									<span className="text-[0.8rem] text-wash-200">
										{t(`about.langLevels.${lang.level.toLowerCase()}`)}
									</span>
								</motion.div>
							))}
						</div>
					</InfoSection>
				</div>

				{/* Stats — Desktop sidebar */}
				<div
					ref={statsRef}
					className="hidden lg:flex flex-col items-start gap-6 pl-8 xl:pl-10 border-l border-paper-300 min-w-40"
				>
					{STATS.map((stat, i) => {
						const labelKey = stat.value.includes("4")
							? "about.stats.experience"
							: stat.value.includes("15")
								? "about.stats.projects"
								: "about.stats.clients";
						return (
							<StatBlock
								key={stat.value}
								value={stat.value}
								label={t(labelKey)}
								delay={0.12 * (i + 1)}
								inView={statsInView}
							/>
						);
					})}
				</div>
			</div>

			{/* Stats — Mobile (below body) */}
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 lg:hidden">
				{STATS.map((stat) => {
					const labelKey = stat.value.includes("4")
						? "about.stats.experience"
						: stat.value.includes("15")
							? "about.stats.projects"
							: "about.stats.clients";
					return (
						<div key={stat.value} className="flex flex-col gap-1">
							<span className="font-koulen text-[2.5rem] leading-none text-ink-900">
								<AnimatedNumber value={stat.value} inView={bodyInView} />
							</span>
							<span className="font-inter text-[0.65rem] font-semibold tracking-widest uppercase text-wash-200 leading-snug whitespace-pre-line">
								{t(labelKey)}
							</span>
						</div>
					);
				})}
				<div className="flex flex-col gap-1">
					{infinityIcon}
					<span className="font-inter text-[0.65rem] font-semibold tracking-widest uppercase text-wash-200 leading-snug whitespace-pre-line">
						{t("about.stats.learning")}
					</span>
				</div>
			</div>

			{/* ── Footer ── */}
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
