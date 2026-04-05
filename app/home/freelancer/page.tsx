import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Sparkles, Clock, Target, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

const services = [
  {
    icon: Sparkles,
    title: "Web Design",
    price: "From $2,000",
    description: "Custom website designs that capture your brand essence and convert visitors.",
    features: ["Responsive Design", "UI/UX Design", "Figma Prototype", "Design System"],
  },
  {
    icon: Target,
    title: "Development",
    price: "From $3,500",
    description: "Fast, accessible, and SEO-friendly websites built with modern technologies.",
    features: ["Next.js / React", "CMS Integration", "Performance Optimization", "Deployment"],
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    price: "$150/hour",
    description: "Strategic guidance on design systems, tech stacks, and product development.",
    features: ["Code Review", "Architecture Planning", "Team Training", "Best Practices"],
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with a deep dive into your business, goals, and target audience to understand what you need.",
  },
  {
    step: "02",
    title: "Design",
    description: "I create wireframes and visual designs, refining them based on your feedback until we nail it.",
  },
  {
    step: "03",
    title: "Development",
    description: "Using modern tech, I build your project with clean code and attention to performance.",
  },
  {
    step: "04",
    title: "Launch",
    description: "After thorough testing, we launch and I provide support to ensure everything runs smoothly.",
  },
]

const projects = [
  {
    title: "SaaS Dashboard",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Portfolio Website",
    category: "Design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
  },
  {
    title: "E-learning Platform",
    category: "Development",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
  },
]

export default function FreelancerHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Clock className="h-4 w-4" />
                Available for projects
              </div>
              <h1 
                className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Hi, I&apos;m Jordan. I design & build digital products.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                A freelance designer and developer with 7+ years of experience helping startups 
                and businesses bring their ideas to life through thoughtful design and solid code.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Hire Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">See My Work</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-150" />
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face"
                  alt="Jordan"
                  width={320}
                  height={320}
                  className="relative rounded-full object-cover border-4 border-background shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Services & Pricing"
          subtitle="Transparent pricing for quality work. Every project includes unlimited revisions and dedicated support."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-accent/10">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-lg font-bold text-accent">{service.price}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeader
          title="How I Work"
          subtitle="A proven process that delivers results on time and within budget."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div key={step.step} className="relative">
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-[2px] bg-border -translate-x-4" />
              )}
              <span 
                className="text-5xl font-bold text-muted-foreground/20"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Recent Work */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Recent Projects"
          subtitle="A selection of recent work from my portfolio."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/portfolio"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-lg font-semibold text-background">{project.title}</h3>
                <p className="text-sm text-background/80">{project.category}</p>
                <ArrowUpRight className="mt-2 h-5 w-5 text-background" />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative">
            <svg className="absolute -top-8 -left-4 h-16 w-16 text-muted-foreground/10" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground">
              &quot;Jordan transformed our outdated website into a modern, high-converting platform. 
              The attention to detail and communication throughout was exceptional.&quot;
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Client"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="text-left">
              <p className="font-semibold">Michael Chen</p>
              <p className="text-sm text-muted-foreground">CEO, StartupXYZ</p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Common Questions"
          subtitle="Quick answers to questions I get asked frequently."
        />
        <div className="mt-12 mx-auto max-w-2xl space-y-6">
          {[
            {
              q: "What's your typical turnaround time?",
              a: "Most projects take 4-8 weeks depending on scope. I'll provide a detailed timeline during our initial consultation.",
            },
            {
              q: "Do you work with clients remotely?",
              a: "Absolutely! I work with clients worldwide. We'll stay connected through regular video calls and async updates.",
            },
            {
              q: "What's included in your pricing?",
              a: "All packages include unlimited revisions during the design phase, responsive development, and 30 days of post-launch support.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border border-border">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let&apos;s build something great together
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s chat and see how I can help.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
              <Link href="mailto:hello@example.com">hello@example.com</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
