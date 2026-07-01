export type Job = {
  id: string;
  role: string;
  company: string;
  date: string;
  location?: string;
  description: string[];
  achievements: string[];
  technologies: string[];
};

export const jobsData: Job[] = [
  {
    id: "1",
    role: "Frontend Developer",
    company: "NDA COMPANY",
    date: "Jan 2026 - Present",
    location: "REMOTE",
    description: [
      "Develop and maintain scalable, modular architecture based on React, Next.js, and TypeScript for high-load web applications.",
      "Strengthened application reliability by integrating E2E and unit testing, effectively eliminating regression bugs.",
      "Enforce coding standards and architecture via code reviews, using Confluence for knowledge sharing and Storybook for UI development.",
      "Drove team-wide quality through systematic code reviews, enforcing architectural standards and engineering best practices.",
      "Boosted performance and maintainability by refactoring legacy code and establishing comprehensive documentation for both AI-assisted workflows and developers.",
    ],
    achievements: [],
    technologies: ["react", "nextjs", "typescript"],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "COMBOTECH",
    date: "Jan 2024 - Nov 2025",
    location: "REMOTE",
    description: [
      "Developed a reusable React component library and design system within a monorepo, accelerating new module development by approximately 30% across multiple projects.",
      "Led frontend code reviews to maintain code quality, enforce architectural standards, and reduce technical debt.",
      "Mentored and taught new developers, leveraging an authored developer guide to reduce onboarding time by 20%.",
      "Led migration of a major frontend app from Vue.js to React, significantly boosting maintainability and scalability, and speeding up future development.",
      "Boosted React app performance by applying memoization and targeted optimizations, achieving a 15% reduction in UI load times.",
    ],
    achievements: [],
    technologies: ["react", "vuejs"],
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "DISCOPUS",
    date: "Jan 2023 - Dec 2023",
    location: "REMOTE",
    description: [
      "Collaborated with designers and backend engineers to translate complex product requirements into scalable frontend architecture.",
      "Implemented subscription-based access logic and paywalls for an image editing module.",
    ],
    achievements: [],
    technologies: ["react", "typescript"],
  },
];
