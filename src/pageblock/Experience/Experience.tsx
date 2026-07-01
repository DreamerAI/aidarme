"use client";

import { motion, useScroll, useSpring } from "motion/react";
import React, { useRef } from "react";
import { jobsData } from "@/data/jobs";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export const Experience = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start center", "end center"],
	});

	const scaleY = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<section
			id="experience"
			ref={containerRef}
			className="relative w-full min-h-screen bg-main-white text-ink-900 px-6 py-10 md:px-10 lg:px-14 xl:px-20 font-inter overflow-hidden"
		>
			<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-20 gap-4">
				<div className="hidden md:flex flex-col items-start">
					<span className="font-koulen text-[3rem] leading-none">[02]</span>
					<span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-accent-orange">
						MY JOURNEY SO FAR
					</span>
				</div>
				<div className="flex flex-col md:items-end w-full md:w-auto">
					<h3 className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-wash-200 mb-4 text-left md:text-right">
						// EXPERIENCE
					</h3>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: EASE }}
						viewport={{ once: true }}
						className="font-koulen text-[clamp(2.5rem,6vw,4rem)] leading-none uppercase tracking-wide text-left md:text-right"
					>
						PROFESSIONAL EXPERIENCE
					</motion.h2>
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
				{/* Left sidebar / Animated Interactive Block */}
				<div className="hidden lg:flex flex-col w-[320px] shrink-0 sticky top-32 h-fit gap-8">
					{/* Interactive CV Download Block */}
					<a
						href="/Aidar_Abdykaiymov_CV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						download
						className="group relative w-full aspect-square border border-paper-300 flex items-center justify-center overflow-hidden hover:border-ink-900 transition-colors duration-500 cursor-pointer bg-main-white"
					>
						{/* Background Fill Animation */}
						<div className="absolute inset-0 bg-ink-900 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]" />

						{/* Crosshair Decor */}
						<div className="absolute top-4 right-4 w-4 h-4 text-wash-200 group-hover:text-main-white transition-colors duration-500 z-10">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1"
							>
								<circle cx="12" cy="12" r="10" />
								<path d="M12 2v20M2 12h20" />
							</svg>
						</div>

						<div className="absolute bottom-4 left-4 text-[0.6rem] font-bold uppercase tracking-widest text-wash-200 group-hover:text-paper-300 transition-colors duration-500 z-10">
							GET PDF VERSION
						</div>

						{/* Center Arrow */}
						<div className="absolute z-10 text-ink-900 group-hover:text-main-white transition-colors duration-500 group-hover:-translate-y-1 group-hover:scale-110">
							<svg
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
							>
								<path d="M12 4v16m0 0l-6-6m6 6l6-6" />
							</svg>
						</div>

						{/* Spinning Text */}
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 15, ease: "linear", repeat: Infinity }}
							className="absolute w-[85%] h-[85%] z-0 opacity-50 group-hover:opacity-100 group-hover:text-main-white transition-opacity duration-500"
						>
							<svg
								viewBox="0 0 100 100"
								className="w-full h-full text-ink-900 group-hover:text-main-white transition-colors duration-500"
							>
								<path
									id="textPath"
									d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
									fill="none"
								/>
								<text
									fontSize="10.5"
									className="font-koulen tracking-[0.2em] uppercase"
								>
									<textPath href="#textPath" startOffset="0%">
										DOWNLOAD RESUME • DOWNLOAD RESUME •
									</textPath>
								</text>
							</svg>
						</motion.div>
					</a>

					<div className="border-l border-ink-900 pl-5 py-2">
						<p className="text-[0.7rem] font-bold uppercase tracking-widest leading-relaxed text-ink-900">
							AVAILABLE FOR FREELANCE
						</p>
						<p className="text-[0.75rem] text-wash-200 mt-2">
							Currently exploring new opportunities and open to collaborating on
							ambitious projects.
						</p>
					</div>
				</div>

				{/* The Timeline */}
				<div className="relative flex-1 pl-10 md:pl-16">
					{/* The progress bar line */}
					<div className="absolute left-2 md:left-4 top-2 bottom-0 w-px bg-paper-300 -translate-x-1/2 origin-top">
						<motion.div
							className="absolute top-0 left-0 w-full bg-ink-900 origin-top h-full"
							style={{ scaleY }}
						/>
					</div>

					<div className="flex flex-col gap-12 md:gap-20 relative z-10 pb-10">
						{jobsData.map((job, index) => (
							<motion.div
								key={job.id}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1, ease: EASE }}
								viewport={{ once: true, margin: "-100px" }}
								className="relative flex flex-col group"
							>
								{/* Dot */}
								<div className="absolute -left-8 md:-left-12 top-2 w-[9px] h-[9px] rounded-full bg-ink-900 -translate-x-1/2 ring-4 ring-transparent group-hover:ring-accent-orange/20 group-hover:bg-accent-orange group-hover:scale-125 transition-all duration-300 ease-out" />

								<div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-1 md:gap-4">
									<div>
										<h4 className="font-koulen text-[1.5rem] tracking-wide uppercase text-ink-900 leading-none">
											{job.company}
										</h4>
										<p className="text-[0.8rem] text-wash-300 mt-2 font-inter">
											{job.role}
										</p>
									</div>
									<div className="flex flex-col md:items-end text-left md:text-right mt-2 md:mt-0">
										<span className="text-[0.7rem] font-bold tracking-widest uppercase text-ink-900">
											{job.date}
										</span>
										<span className="text-[0.65rem] tracking-widest uppercase text-wash-200 mt-1">
											{job.location || "REMOTE"}
										</span>
									</div>
								</div>

								<ul className="list-none space-y-3 mt-4 text-[0.85rem] leading-relaxed text-wash-300 max-w-2xl">
									{job.description.map((desc, i) => (
										<li
											key={i}
											className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-ink-900 before:font-bold"
										>
											{desc}
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
