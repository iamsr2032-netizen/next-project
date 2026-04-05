export interface PortfolioProject {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  link?: string
  year: number
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Mobile Banking App",
    description:
      "A modern mobile banking application with real-time transactions and intuitive UI/UX design.",
    image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=800",
    category: "Mobile App",
    tags: ["iOS", "Android", "UI/UX", "FinTech"],
    link: "#",
    year: 2024,
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with product showcase, cart management, and checkout flow.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e6d2e5fa?w=800",
    category: "Web Design",
    tags: ["React", "Node.js", "Shopify"],
    link: "#",
    year: 2024,
  },
  {
    id: "3",
    title: "Brand Identity System",
    description: "Complete branding package including logo, color palette, typography, and guidelines.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    category: "Branding",
    tags: ["Logo", "Color", "Typography", "Guidelines"],
    link: "#",
    year: 2023,
  },
  {
    id: "4",
    title: "SaaS Dashboard",
    description:
      "Data visualization dashboard with real-time analytics and interactive charts.",
    image: "https://images.unsplash.com/photo-1639749881753-b0b0a4a1e9b5?w=800",
    category: "UI/UX",
    tags: ["Dashboard", "Analytics", "Data Viz"],
    link: "#",
    year: 2023,
  },
  {
    id: "5",
    title: "Motion Design Showcase",
    description:
      "Interactive animations and microinteractions for enhanced user engagement.",
    image: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=800",
    category: "Animation",
    tags: ["Motion", "After Effects", "Web Animation"],
    link: "#",
    year: 2023,
  },
  {
    id: "6",
    title: "Corporate Website",
    description:
      "Enterprise-level website design with modern aesthetics and smooth performance.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    category: "Web Design",
    tags: ["Next.js", "Tailwind", "Responsive"],
    link: "#",
    year: 2023,
  },
]
