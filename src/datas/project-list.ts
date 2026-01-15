export interface ProjectProps {
  id: number
  title: string
  description: string
  image: string
  author: string
  authorAvatar: string
  date: string
  technologies: string[]
  href: string
}

export const PROJECTS: ProjectProps[] = [
  {
    id: 1,
    title: "project1.name",
    description: "project1.description",
    image: "/assets/projects/project-dapur-tradisional.webp",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 15, 2024",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Express.js", "PostgreSQL"],
    href: "https://dapur-tradisional.vercel.app/",
  },
  {
    id: 2,
    title: "project2.name",
    description: "project2.description",
    image: "/assets/projects/project-bento.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 10, 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://bentodesu.vercel.app/",
  },
  {
    id: 3,
    title: "project3.name",
    description: "project3.description",
    image: "/assets/projects/project-convert.webp",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 8, 2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://magic-image-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "project4.name",
    description: "project4.description",
    image: "/assets/projects/project-diagnosa.jpg",
    author: "Ahmad Januar",
    authorAvatar: "/assets/images/profile-2.jpg",
    date: "March 5, 2024",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    href: "https://github.com/AhmadJanuarr/ayam-sehat",
  },
]
