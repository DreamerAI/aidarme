export type Job = {
	id: string;
	role: string;
	roleRu: string;
	company: string;
	date: string;
	dateRu: string;
	location?: string;
	locationRu?: string;
	description: string[];
	descriptionRu: string[];
	achievements: string[];
	technologies: string[];
};

export const jobsData: Job[] = [
	{
		id: "1",
		role: "Frontend Developer",
		roleRu: "Фронтенд-разработчик",
		company: "NDA COMPANY",
		date: "Jan 2026 - Present",
		dateRu: "Янв 2026 - Наст. время",
		location: "REMOTE",
		locationRu: "УДАЛЕННО",
		description: [
			"Develop and maintain scalable, modular architecture based on React, Next.js, and TypeScript for high-load web applications.",
			"Strengthened application reliability by integrating E2E and unit testing, effectively eliminating regression bugs.",
			"Enforce coding standards and architecture via code reviews, using Confluence for knowledge sharing and Storybook for UI development.",
			"Drove team-wide quality through systematic code reviews, enforcing architectural standards and engineering best practices.",
			"Boosted performance and maintainability by refactoring legacy code and establishing comprehensive documentation for both AI-assisted workflows and developers.",
		],
		descriptionRu: [
			"Разработка и поддержка масштабируемой модульной архитектуры на React, Next.js и TypeScript для высоконагруженных веб-приложений.",
			"Повышение надежности приложения за счет интеграции E2E- и юнит-тестирования, что позволило полностью устранить регрессионные ошибки.",
			"Обеспечение стандартов кодирования и архитектуры посредством код-ревью, использование Confluence для обмена знаниями и Storybook для разработки UI.",
			"Повышение качества кода всей команды через систематические код-ревью с соблюдением архитектурных стандартов и лучших практик разработки.",
			"Оптимизация производительности и удобства поддержки за счет рефакторинга устаревшего кода и документирования процессов разработки.",
		],
		achievements: [],
		technologies: ["react", "nextjs", "typescript"],
	},
	{
		id: "2",
		role: "Frontend Developer",
		roleRu: "Фронтенд-разработчик",
		company: "COMBOTECH",
		date: "Jan 2024 - Nov 2025",
		dateRu: "Янв 2024 - Ноя 2025",
		location: "REMOTE",
		locationRu: "УДАЛЕННО",
		description: [
			"Developed a reusable React component library and design system within a monorepo, accelerating new module development by approximately 30% across multiple projects.",
			"Led frontend code reviews to maintain code quality, enforce architectural standards, and reduce technical debt.",
			"Mentored and taught new developers, leveraging an authored developer guide to reduce onboarding time by 20%.",
			"Led migration of a major frontend app from Vue.js to React, significantly boosting maintainability and scalability, and speeding up future development.",
			"Boosted React app performance by applying memoization and targeted optimizations, achieving a 15% reduction in UI load times.",
		],
		descriptionRu: [
			"Разработка библиотеки переиспользуемых React-компонентов и дизайн-системы в монорепозитории, что ускорило разработку новых модулей примерно на 30% во всех проектах.",
			"Проведение код-ревью для контроля качества кода, соблюдения архитектурных стандартов и снижения технического долга.",
			"Менторство и обучение новых разработчиков с использованием авторского руководства, что сократило время онбординга на 20%.",
			"Руководство миграцией крупного фронтенд-приложения с Vue.js на React, что значительно улучшило поддерживаемость и скорость разработки.",
			"Повышение производительности React-приложений за счет мемоизации и точечных оптимизаций, снизившее время загрузки UI на 15%.",
		],
		achievements: [],
		technologies: ["react", "vuejs"],
	},
	{
		id: "3",
		role: "Frontend Developer",
		roleRu: "Фронтенд-разработчик",
		company: "DISCOPUS",
		date: "Jan 2023 - Dec 2023",
		dateRu: "Янв 2023 - Дек 2023",
		location: "REMOTE",
		locationRu: "УДАЛЕННО",
		description: [
			"Collaborated with designers and backend engineers to translate complex product requirements into scalable frontend architecture.",
			"Implemented subscription-based access logic and paywalls for an image editing module.",
		],
		descriptionRu: [
			"Сотрудничество с дизайнерами и бэкенд-инженерами для переноса сложных продуктовых требований в масштабируемую архитектуру фронтенда.",
			"Внедрение логики подписки и пейволлов для модуля редактирования изображений.",
		],
		achievements: [],
		technologies: ["react", "typescript"],
	},
];
