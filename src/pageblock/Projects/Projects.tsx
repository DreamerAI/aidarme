"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { TransitionLink } from "@/components/utils/TransitionLinks";

const EASE = [0.2, 0.8, 0.2, 1] as const;

export const Projects = () => {
	const targetRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});

	// We must use matching string templates for Framer Motion to interpolate properly!
	const x = useTransform(
		scrollYProgress,
		[0, 1],
		["calc(0% - 0vw)", "calc(-100% + 100vw)"],
	);

	return (
		<section
			id="projects"
			ref={targetRef}
			className="relative w-full bg-ink-900 text-main-white md:h-[400vh]"
		>
			<div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center overflow-hidden py-20 md:py-0">
				{/* Section Header */}
				<div className="px-6 md:px-20 mb-10 md:mb-16 shrink-0">
					<h3 className="text-[0.75rem] font-medium tracking-[0.15em] uppercase text-wash-200 mb-4">
						SELECTED WORKS //
					</h3>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: EASE }}
						viewport={{ once: true }}
						className="font-koulen text-[clamp(3rem,8vw,6rem)] leading-none uppercase tracking-wide"
					>
						FEATURED PROJECTS
					</motion.h2>
				</div>

				{/* Projects Track */}
				<div className="w-full overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none no-scrollbar">
					<motion.div
						className="flex gap-6 md:gap-16 px-6 md:px-20 w-max max-md:!transform-none"
						style={{ x }}
					>
						{projectsData.map((project, i) => (
							<TransitionLink
								href={`/projects/${project.id}`}
								key={project.id}
								className="block group relative w-[85vw] md:w-[45vw] lg:w-[35vw] h-[50vh] md:h-[60vh] shrink-0 snap-center rounded-lg overflow-hidden cursor-pointer bg-ink-800 border border-ink-700 hover:border-paper-300 transition-colors duration-500"
							>
								{/* Background Image */}
								<div
									className="absolute inset-0 bg-ink-800 overflow-hidden"
									style={{ viewTransitionName: `project-img-${project.id}` }}
								>
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
										sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
									/>
									{/* Overlay Gradient */}
									<div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent group-hover:opacity-60 transition-opacity duration-500" />
								</div>

								{/* Content Overlay */}
								<div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
									{/* Top Row: Category and Year */}
									<div className="flex justify-between items-start overflow-hidden">
										<div className="overflow-hidden">
											<span className="inline-block font-inter text-[0.65rem] font-bold tracking-widest uppercase text-main-white bg-ink-900/50 backdrop-blur-md px-4 py-2 rounded-full translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
												{project.category}
											</span>
										</div>
										<div className="overflow-hidden">
											<span className="inline-block font-koulen text-xl text-main-white translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
												{project.year}
											</span>
										</div>
									</div>

									{/* Bottom Row: Title and Description */}
									<div>
										<div className="overflow-hidden">
											<h3
												className="font-koulen text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-main-white translate-y-[20%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
												style={{
													viewTransitionName: `project-title-${project.id}`,
													width: "fit-content",
												}}
											>
												{project.title}
											</h3>
										</div>
										<p className="font-inter text-[0.8rem] text-paper-200 mt-3 max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-[cubic-bezier(0.2,0.8,0.2,1)]">
											{project.description}
										</p>
									</div>
								</div>

								{/* View Project Button (Mobile Only) */}
								<div className="absolute top-4 right-4 md:hidden">
									<span className="font-inter text-[0.6rem] font-bold tracking-widest uppercase text-main-white bg-accent-orange px-3 py-1.5 rounded-full">
										VIEW
									</span>
								</div>
							</TransitionLink>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};
