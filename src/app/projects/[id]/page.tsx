import { projectsData } from "@/data/projects";
import ProjectPageClient from "./ProjectPageClient";

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
		return (
			<div className="p-8 text-center text-main-white font-inter">
				Project not found
			</div>
		);
	}

	return <ProjectPageClient project={project} />;
}
