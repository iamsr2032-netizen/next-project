import { blogPosts } from '@/data/blog'

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://portfolio-pro.vercel.app'

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Portfolio Pro - Blog</title>
    <description>Latest design insights and project updates from Portfolio Pro</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>${baseUrl}/blog/${post.id}</link>
      <guid>${baseUrl}/blog/${post.id}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${post.author}</author>
      <category>${post.category}</category>
      <image>
        <url>${post.image}</url>
        <title>${post.title}</title>
        <link>${baseUrl}/blog/${post.id}</link>
      </image>
    </item>
    `
      )
      .join('\n')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
    },
  })
}
