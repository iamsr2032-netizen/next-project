import { MetadataRoute } from 'next'
import { portfolioProjects } from '@/data/portfolio'
import { blogPosts } from '@/data/blog'

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://portfolio-pro.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Dynamic portfolio pages
  const portfolioPages = portfolioProjects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.id}`,
    lastModified: new Date(project.year, 0, 1),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic blog pages
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...portfolioPages, ...blogPages]
}
