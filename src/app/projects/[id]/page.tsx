import { projectsData } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
	return projectsData.map((project) => ({
		id: project.id,
	}));
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const project = projectsData.find((p) => p.id === id);

	if (!project) {
		notFound();
	}

	return <ProjectPageClient project={project} />;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	const project = projectsData.find((project) => project.id === id);

	if (!project) {
		return { title: "Project not found" };
	}

	return {
		title: project.title,
		description: project.description,
		openGraph: {
			title: project.title,
			description: project.description,
			images: [{ url: project.image }],
		},
	};
}
