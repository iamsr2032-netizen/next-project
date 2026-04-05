import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

export const metadata = {
  title: "Blog - Folio",
  description: "Insights, tutorials, and thoughts on design, development, and digital strategy.",
}

const featuredPost = {
  id: 1,
  title: "The Future of Web Design: Trends to Watch in 2026",
  excerpt: "Exploring the emerging design patterns, technologies, and methodologies that are shaping the future of digital experiences. From AI-assisted design to immersive 3D interfaces.",
  image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&h=600&fit=crop",
  date: "Mar 15, 2026",
  category: "Design",
  author: {
    name: "Jessica Williams",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
  },
  href: "/blog/future-of-web-design",
}

const posts = [
  {
    id: 2,
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to creating inclusive digital products that work for everyone.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=500&fit=crop",
    date: "Mar 10, 2026",
    category: "Development",
    href: "/blog/accessible-web-applications",
  },
  {
    id: 3,
    title: "The Art of Minimalist Design",
    excerpt: "How simplicity and restraint can lead to more impactful and memorable user experiences.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=500&fit=crop",
    date: "Mar 5, 2026",
    category: "Design",
    href: "/blog/minimalist-design",
  },
  {
    id: 4,
    title: "Mastering CSS Grid Layout",
    excerpt: "Deep dive into CSS Grid and how to use it for complex, responsive layouts.",
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&h=500&fit=crop",
    date: "Feb 28, 2026",
    category: "Development",
    href: "/blog/css-grid-layout",
  },
  {
    id: 5,
    title: "Brand Strategy for Startups",
    excerpt: "Essential branding principles every startup founder should know.",
    image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop",
    date: "Feb 20, 2026",
    category: "Branding",
    href: "/blog/brand-strategy-startups",
  },
  {
    id: 6,
    title: "Performance Optimization Tips",
    excerpt: "Practical techniques to make your website faster and improve user experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    date: "Feb 15, 2026",
    category: "Development",
    href: "/blog/performance-optimization",
  },
  {
    id: 7,
    title: "Color Theory in UI Design",
    excerpt: "Understanding color psychology and how to use it effectively in your designs.",
    image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=800&h=500&fit=crop",
    date: "Feb 10, 2026",
    category: "Design",
    href: "/blog/color-theory-ui",
  },
]

const categories = ["All", "Design", "Development", "Branding", "Strategy"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Blog
            </p>
            <h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Insights & Ideas
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Thoughts, tutorials, and reflections on design, development, and 
              creating meaningful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <Section className="pt-8">
        <Link href={featuredPost.href} className="group block">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="font-medium text-accent">{featuredPost.category}</span>
                <span>&middot;</span>
                <time>{featuredPost.date}</time>
              </div>
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-accent transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-medium text-sm">{featuredPost.author.name}</span>
              </div>
            </div>
          </div>
        </Link>
      </Section>

      {/* All Posts */}
      <Section>
        <SectionHeader
          title="Latest Articles"
          subtitle="Stay updated with our newest posts and insights."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <Link href={post.href} className="block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-accent">{post.category}</span>
                    <span>&middot;</span>
                    <time>{post.date}</time>
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="bg-muted/50">
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-2xl font-bold tracking-tight sm:text-3xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Subscribe to our newsletter
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get the latest articles, tutorials, and insights delivered directly to your inbox.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-11 w-full sm:w-80 rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <Button type="submit" size="lg">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
