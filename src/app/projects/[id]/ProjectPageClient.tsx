"use client";

import { Link } from "next-view-transitions";
import { useLanguage } from "@/context/LanguageContext";
import { ResilientImage } from "@/components/shared/ResilientImage";
import type { Project } from "@/data/projects";

type Props = {
	project: Project;
};

export default function ProjectPageClient({ project }: Props) {
	const { t, language } = useLanguage();

	return (
		<main className="min-h-screen bg-ink-900 text-main-white font-inter">
			<div className="fixed top-20 right-6 left-6 z-50 flex justify-start md:top-8 md:right-auto md:left-8 md:block">
				<Link
					href="/#projects"
					className="flex w-fit items-center gap-2 rounded-full border border-ink-700 bg-ink-900/70 px-4 py-2 backdrop-blur-md transition-colors duration-300 group hover:bg-main-white hover:text-ink-900 focus-visible:bg-main-white focus-visible:text-ink-900"
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						aria-hidden="true"
						className="group-hover:-translate-x-1 transition-transform"
					>
						<path d="M19 12H5M12 19l-7-7 7-7" />
					</svg>
					<span className="font-koulen text-lg tracking-wide uppercase mt-1">
						{t("projects.back")}
					</span>
				</Link>
			</div>

			{/* Hero Section */}
			<section className="relative w-full h-[60vh] md:h-[80vh]">
				<div
					className="absolute inset-0 overflow-hidden"
					style={{ viewTransitionName: `project-img-${project.id}` }}
				>
					<ResilientImage
						src={project.image}
						alt={project.title}
						fill
						className="object-cover"
						priority
						sizes="100vw"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/20 to-transparent" />
				</div>

				<div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 z-10">
					<div className="overflow-hidden mb-4 flex items-center gap-4">
						<span className="font-inter text-[0.7rem] font-bold tracking-widest uppercase text-main-white bg-accent-orange px-4 py-2 rounded-full">
							{language === "ru" ? project.categoryRu : project.category}
						</span>
						<span className="font-koulen text-2xl text-paper-200">
							{project.year}
						</span>
					</div>
					<h1
						className="font-koulen text-[clamp(4rem,10vw,8rem)] leading-none text-main-white"
						style={{
							viewTransitionName: `project-title-${project.id}`,
							width: "fit-content",
							margin: 0,
						}}
					>
						{project.title}
					</h1>
				</div>
			</section>

			<section className="mx-auto max-w-350 px-8 py-16 md:px-20 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
					<div className="md:col-span-2">
						<h2 className="font-koulen text-3xl mb-6 tracking-wide">
							{t("projects.aboutProject")}
						</h2>
						<p className="text-paper-200 text-lg md:text-xl leading-relaxed max-w-2xl">
							{language === "ru" ? project.descriptionRu : project.description}
						</p>
					</div>
					<div>
						<h2 className="font-koulen text-3xl mb-6 tracking-wide">
							{t("projects.technologies")}
						</h2>
						<div className="flex flex-wrap gap-3">
							{project.techStack.map((tech) => (
								<span
									key={tech}
									className="px-4 py-2 bg-ink-800 border border-ink-700 rounded-lg text-sm text-paper-100 font-medium"
								>
									{tech}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-350 px-8 pb-24 md:px-20 md:pb-32">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{project.galleryImages.map((img, idx) => (
						<div
							key={idx}
							className={`relative w-full rounded-xl overflow-hidden bg-ink-800 border border-ink-700 ${idx === 2 ? "md:col-span-2 aspect-21/9" : "aspect-video"}`}
						>
							<ResilientImage
								src={img}
								alt={`${project.title} gallery image ${idx + 1}`}
								fill
								className="object-cover hover:scale-105 transition-transform duration-700"
							/>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
