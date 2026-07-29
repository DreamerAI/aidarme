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
    id: '1',
    title: 'POPUTCHIK',
    category: 'E-Commerce Experience',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    description:
      'A futuristic e-commerce platform redefining digital shopping with immersive WebGL product viewers and fluid interactions.',
    techStack: ['React', 'Three.js', 'Framer Motion', 'TailwindCSS'],
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: '2',
    title: 'Image unifier',
    category: 'SaaS Platform',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
    description:
      'An intuitive interface for a complex neural network dashboard, turning raw data into visual poetry.',
    techStack: ['Next.js', 'TypeScript', 'D3.js', 'Zustand'],
    galleryImages: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: '3',
    title: 'Portfolio Nebula',
    category: 'Personal Website',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=2000&auto=format&fit=crop',
    description:
      'A polished personal portfolio featuring smooth micro-interactions and an animated project showcase.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    galleryImages: [
      'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  {
    id: '4',
    title: 'AR Gallery',
    category: 'Experimental',
    year: '2026',
    image:
      'https://images.unsplash.com/photo-1517249374323-9f7f8a1b0f3b?q=80&w=2000&auto=format&fit=crop',
    description:
      'An augmented-reality exhibition platform blending 3D models with real-world spaces for immersive viewing.',
    techStack: ['React', 'Three.js', 'AR.js', 'Vite'],
    galleryImages: [
      'https://images.unsplash.com/photo-1517249374323-9f7f8a1b0f3b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527694224016-4e8b5b8b3d2f?q=80&w=1200&auto=format&fit=crop',
    ],
  },
];
