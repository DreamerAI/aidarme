"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCard } from "./components/ProjectCard";

const EASE = [0.2, 0.8, 0.2, 1] as const;

// Extra scroll room keeps the pinned section from feeling cut off while the
// first and last cards are still entering/leaving the viewport.
const SCROLL_VIEWPORTS = 1 + projectsData.length * 0.8;

export const Projects = () => {
	const { t, language } = useLanguage();
	const targetRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end end"],
	});

	// The percentage refers to the track width, while the viewport correction
	// keeps the final card fully visible without hardcoding card widths.
	const x = useTransform(
		scrollYProgress,
		[0, 1],
		["calc(0% - 0vw)", "calc(-100% + 100vw)"],
	);

	return (
		<section
			id="projects"
			ref={targetRef}
			className="relative w-full bg-ink-900 text-main-white md:h-[calc(var(--project-scroll-vh)*1vh)]"
			style={
				{
					"--project-scroll-vh": `${SCROLL_VIEWPORTS * 100}`,
				} as React.CSSProperties
			}
		>
			<div className="flex flex-col justify-center py-20 md:sticky md:top-0 md:h-screen md:py-0">
				<div className="mb-10 shrink-0 px-6 md:mb-12 md:px-20">
					<h3 className="mb-4 text-[0.75rem] font-medium tracking-[0.15em] text-wash-200 uppercase">
						{t("projects.sectionTitle")}
					</h3>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: EASE }}
						viewport={{ once: true }}
						className="font-koulen text-[clamp(3rem,8vw,6rem)] leading-none tracking-wide uppercase"
					>
						{t("projects.mainTitle")}
					</motion.h2>
				</div>

				<div className="no-scrollbar w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2 md:snap-none md:overflow-x-visible md:pb-0">
					<motion.div
						className="flex w-max gap-6 px-6 md:gap-16 md:px-20 max-md:transform-none!"
						style={{ x }}
					>
						{projectsData.map((project, index) => (
							<ProjectCard
								key={project.id}
								project={project}
								index={index}
								language={language}
								viewLabel={t("projects.view")}
							/>
						))}
					</motion.div>
				</div>

				<div
					className="mt-10 hidden items-center gap-5 px-6 md:flex md:px-20"
					aria-hidden="true"
				>
					<span className="font-inter text-[0.65rem] font-bold tracking-widest text-wash-200 uppercase">
						{String(projectsData.length).padStart(2, "0")}
					</span>
					<div className="h-px flex-1 bg-ink-700">
						<motion.div
							className="h-full origin-left bg-paper-300"
							style={{ scaleX: scrollYProgress }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
