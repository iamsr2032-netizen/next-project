export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  image: string
  date: string
  readingTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Design in 2024",
    excerpt:
      "Exploring the latest trends and technologies shaping modern web design practices.",
    content:
      "Web design continues to evolve with new technologies and user expectations. In 2024, we see a shift towards more interactive, personalized experiences...",
    author: "Alex Rivera",
    category: "Design",
    tags: ["Web Design", "Trends", "2024"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    date: "2024-04-15",
    readingTime: 5,
  },
  {
    id: "2",
    title: "Mastering React Hooks: A Complete Guide",
    excerpt:
      "Deep dive into React Hooks and how to use them effectively in your projects.",
    content:
      "React Hooks have revolutionized how we write components. In this comprehensive guide, we'll explore useState, useEffect, and custom hooks...",
    author: "Jordan Smith",
    category: "Development",
    tags: ["React", "JavaScript", "Tutorial"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    date: "2024-04-10",
    readingTime: 8,
  },
  {
    id: "3",
    title: "Building a Sustainable Design Business",
    excerpt:
      "Practical strategies for growing your design business while maintaining quality.",
    content:
      "Growing a design business requires more than just great design skills. You need to focus on client relationships, pricing strategy, and marketing...",
    author: "Sarah Chen",
    category: "Business",
    tags: ["Entrepreneurship", "Design", "Business"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    date: "2024-04-05",
    readingTime: 6,
  },
  {
    id: "4",
    title: "UI Design Best Practices: 10 Tips for Success",
    excerpt:
      "Essential tips and tricks for creating beautiful and functional user interfaces.",
    content:
      "Creating great UI goes beyond aesthetics. You need to consider usability, accessibility, and performance. Here are 10 essential practices...",
    author: "Marcus Johnson",
    category: "Design",
    tags: ["UI Design", "UX", "Best Practices"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    date: "2024-03-30",
    readingTime: 4,
  },
  {
    id: "5",
    title: "Optimizing Web Performance for Better User Experience",
    excerpt:
      "Learn how to optimize your website for speed and performance improvements.",
    content:
      "Website performance is crucial for user experience and SEO. In this post, we'll cover image optimization, code splitting, and caching strategies...",
    author: "Emily Rodriguez",
    category: "Development",
    tags: ["Performance", "Optimization", "Web"],
    image: "https://images.unsplash.com/photo-1488941179945-c3a8f7cf89d0?w=800",
    date: "2024-03-25",
    readingTime: 7,
  },
  {
    id: "6",
    title: "The Psychology of Color in Design",
    excerpt:
      "Understanding how colors impact user behavior and design decisions.",
    content:
      "Color psychology plays a crucial role in design. Different colors evoke different emotions and can influence user behavior. Let's explore...",
    author: "Lisa Wong",
    category: "Design",
    tags: ["Color Theory", "Psychology", "Design"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    date: "2024-03-20",
    readingTime: 5,
  },
]
