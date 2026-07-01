export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  techStack: string[];
  galleryImages: string[];
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "POPUTCHIK",
    category: "E-Commerce Experience",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    description:
      "A futuristic e-commerce platform redefining digital shopping with immersive WebGL product viewers and fluid interactions.",
    techStack: ["React", "Three.js", "Framer Motion", "TailwindCSS"],
    galleryImages: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: "2",
    title: "Image unifier",
    category: "SaaS Platform",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    description:
      "An intuitive interface for a complex neural network dashboard, turning raw data into visual poetry.",
    techStack: ["Next.js", "TypeScript", "D3.js", "Zustand"],
    galleryImages: [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];
