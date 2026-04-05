import Link from "next/link"
import { ArrowRight, User, Building2, Briefcase } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"

export const metadata = {
  title: "Homepage Variants - Folio",
  description: "Choose from our collection of homepage layouts designed for different use cases.",
}

const variants = [
  {
    icon: User,
    title: "Personal",
    description: "Perfect for individual professionals, developers, and designers showcasing their personal brand and portfolio.",
    href: "/home/personal",
    features: ["Split hero layout", "Skills showcase", "Timeline experience", "Social links"],
  },
  {
    icon: Building2,
    title: "Agency",
    description: "Designed for digital agencies and studios looking to highlight their team, services, and client work.",
    href: "/home/agency",
    features: ["Client logos", "Team showcase", "Featured work grid", "Process section"],
  },
  {
    icon: Briefcase,
    title: "Freelancer",
    description: "Ideal for freelancers and consultants with transparent pricing and a focus on services and testimonials.",
    href: "/home/freelancer",
    features: ["Pricing cards", "Process steps", "FAQ section", "Availability badge"],
  },
]

export default function HomeVariantsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Homepage Variants
            </p>
            <h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Choose your style
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              This template includes three distinct homepage layouts, each designed 
              for different use cases. Explore them below.
            </p>
          </div>
        </div>
      </section>

      {/* Variants Grid */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {variants.map((variant) => (
            <Link
              key={variant.title}
              href={variant.href}
              className="group block bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <variant.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold">{variant.title}</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                {variant.description}
              </p>
              <ul className="space-y-2 mb-6">
                {variant.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                View Demo
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* All Pages */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="All Template Pages"
          subtitle="Complete list of all pages included in this template."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Default Home", href: "/" },
            { name: "Personal Home", href: "/home/personal" },
            { name: "Agency Home", href: "/home/agency" },
            { name: "Freelancer Home", href: "/home/freelancer" },
            { name: "About", href: "/about" },
            { name: "Services", href: "/services" },
            { name: "Portfolio", href: "/portfolio" },
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
            { name: "404 Error", href: "/not-found-demo" },
          ].map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <span className="font-medium">{page.name}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
