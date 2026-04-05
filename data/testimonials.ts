export interface Testimonial {
  id: number
  content: string
  author: string
  role: string
  company?: string
  image: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Working with this designer was an absolute game-changer. They transformed our vision into reality and exceeded our expectations in every way.",
    author: "Sarah Thompson",
    role: "CEO",
    company: "TechVision Inc.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The attention to detail is remarkable. Every pixel was carefully considered, and the final result is both beautiful and highly functional.",
    author: "Michael Chen",
    role: "Product Manager",
    company: "StartupHub",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Professional, creative, and incredibly responsive to feedback. I would definitely recommend to anyone looking for top-tier design work.",
    author: "Emma Rodriguez",
    role: "Founder",
    company: "Creative Agency Co.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    rating: 5,
  },
  {
    id: 4,
    content:
      "Outstanding work delivered on time and within budget. The design significantly improved our user engagement metrics.",
    author: "David Park",
    role: "Marketing Director",
    company: "Global Solutions Ltd.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    rating: 5,
  },
  {
    id: 5,
    content:
      "The best designer I've worked with. Their process is transparent, and they truly care about the success of your project.",
    author: "Jessica Williams",
    role: "UX Lead",
    company: "InnovateTech",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    rating: 5,
  },
  {
    id: 6,
    content:
      "Exceptional talent! The design not only looks amazing but was also built with scalability and maintenance in mind.",
    author: "Robert Johnson",
    role: "Technical Director",
    company: "Digital Innovations",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
    rating: 5,
  },
]
