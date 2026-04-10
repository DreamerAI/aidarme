export type Job = {
  id: string;
  role: string;
  company: string;
  date: string;
  description: string[];
  achievements: string[];
  technologies: string[];
};

export const jobsData: Job[] = [
  {
    id: "1",
    role: "Frontend Developer",
    company: "Discopus",
    date: "Jan 2023 - Present",
    description: [
      "Developed an interactive and highly responsive web platform from scratch using modern frontend frameworks.",
      "Collaborated closely with designers to implement intuitive user interfaces with a focus on seamless user experience."
    ],
    achievements: [
      "Reduced page load time by 30% through code splitting and lazy loading.",
      "Implemented a full-scale redesign of the primary dashboard, increasing user retention by 15%."
    ],
    technologies: ["react", "nextjs", "typescript", "tailwindcss", "framer"]
  },
  {
    id: "2",
    role: "Junior Web Developer",
    company: "Startup Co.",
    date: "Jun 2022 - Dec 2022",
    description: [
      "Assisted in the development of landing pages and internal admin panels.",
      "Maintained and updated existing codebase under the supervision of senior engineers."
    ],
    achievements: [
      "Wrote over 50 unit tests to ensure high test coverage across critical UI components.",
      "Migrated legacy CSS to Tailwind CSS."
    ],
    technologies: ["html5", "css3", "js", "vuejs"]
  }
];
