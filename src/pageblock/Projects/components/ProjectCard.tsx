"use client";

import type { ComponentProps } from "react";
import { TransitionLink } from "@/components/utils/TransitionLinks";
import { ResilientImage } from "@/components/shared/ResilientImage";
import type { Language } from "@/context/LanguageContext";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
	project: Project;
	index: number;
	language: Language;
	viewLabel: string;
};

export const ProjectCard = ({
	project,
	index,
	language,
	viewLabel,
}: ProjectCardProps) => {
	const category = language === "ru" ? project.categoryRu : project.category;
	const description =
		language === "ru" ? project.descriptionRu : project.description;
	const linkProps = {
		href: `/projects/${project.id}`,
		className:
			"group relative flex h-[58vh] w-[85vw] shrink-0 snap-center flex-col overflow-hidden rounded-lg border border-ink-700 bg-ink-800 outline-none transition-colors duration-500 hover:border-paper-300 focus-visible:border-paper-300 md:h-[60vh] md:w-[45vw] lg:w-[35vw]",
		"aria-label": `${project.title}: ${category}, ${project.year}`,
	} satisfies ComponentProps<typeof TransitionLink>;

	return (
		<TransitionLink {...linkProps}>
			<article className="absolute inset-0">
				<div
					className="absolute inset-0 overflow-hidden bg-ink-800"
					style={{ viewTransitionName: `project-img-${project.id}` }}
				>
					<ResilientImage
						src={project.image}
						alt=""
						fill
						className="object-cover opacity-70 grayscale-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:grayscale-0"
						sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/45 to-ink-900/10 transition-opacity duration-500 group-hover:opacity-80" />
				</div>

				<div className="relative flex h-full flex-col justify-between p-6 md:p-8">
					<div className="flex items-start justify-between gap-4">
						<div className="flex flex-wrap items-center gap-2">
							<span className="inline-block rounded-full bg-ink-900/70 px-4 py-2 font-inter text-[0.65rem] font-bold tracking-widest text-main-white uppercase backdrop-blur-md">
								{category}
							</span>
							<span className="rounded-full border border-paper-300/30 px-3 py-2 font-inter text-[0.6rem] font-bold tracking-widest text-paper-200 uppercase">
								{String(index + 1).padStart(2, "0")}
							</span>
						</div>
						<span className="font-koulen text-xl text-main-white">
							{project.year}
						</span>
					</div>

					<div>
						<h3
							className="w-fit font-koulen text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-main-white transition-transform duration-500 group-hover:-translate-y-1"
							style={{ viewTransitionName: `project-title-${project.id}` }}
						>
							{project.title}
						</h3>
						<p className="mt-3 max-w-sm font-inter text-[0.8rem] leading-relaxed text-paper-200 opacity-100 transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
							{description}
						</p>

						<div className="mt-5 flex items-center justify-between gap-4">
							<div className="flex flex-wrap gap-2">
								{project.techStack.slice(0, 3).map((tech) => (
									<span
										key={tech}
										className="rounded border border-ink-700 bg-ink-900/60 px-2.5 py-1 font-inter text-[0.6rem] font-semibold tracking-wide text-paper-200"
									>
										{tech}
									</span>
								))}
							</div>
							<span
								aria-hidden="true"
								className="rounded-full bg-accent-orange px-3 py-1.5 font-inter text-[0.6rem] font-bold tracking-widest text-main-white uppercase"
							>
								{viewLabel}
							</span>
						</div>
					</div>
				</div>
			</article>
		</TransitionLink>
	);
};
