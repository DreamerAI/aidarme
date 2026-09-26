export type TechStackGroup = {
	key: string;
	items: string[];
};

export const TECH_STACK: TechStackGroup[] = [
	{ key: "frontend", items: ["React", "Next.js", "TypeScript", "Vue/Nuxt"] },
	{
		key: "statemanage",
		items: ["Redux", "RTK Query", "MobX", "Zustand", "Effector"],
	},
	{ key: "styling", items: ["Tailwind CSS", "Chakra UI", "CSS Modules"] },
	{ key: "backend", items: ["Node.js", "Express", "REST API/GraphQL"] },
	{
		key: "tools",
		items: ["Git", "Docker", "Vite", "Figma", "Biome"],
	},
	{ key: "testing", items: ["Jest", "React Testing Library", "Playwright"] },
];

export const LANGUAGES = [
	{ code: "EN", levelKey: "c1" },
	{ code: "RU", levelKey: "native" },
	{ code: "KG", levelKey: "native" },
] as const satisfies ReadonlyArray<{ code: string; levelKey: string }>;

export const STATS = [
	{ value: "4+", key: "experience" },
	{ value: "15+", key: "projects" },
	{ value: "12", key: "clients" },
] as const;
