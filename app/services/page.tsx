import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Palette, Code, Megaphone, PenTool, Monitor, Smartphone, Search, BarChart3, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section, SectionHeader } from "@/components/section"
import { TestimonialsSection } from "@/components/testimonials"

export const metadata = {
  title: "Services - Folio",
  description: "Explore our comprehensive range of digital services including web design, development, and digital marketing.",
}

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "We create memorable brand identities that resonate with your audience and stand out in competitive markets.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality to create delightful experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Beautiful, responsive websites that capture your brand essence and convert visitors into customers.",
    features: ["Responsive Design", "Landing Pages", "E-commerce Design", "Design Systems"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, secure, and scalable web applications built with modern technologies and best practices.",
    features: ["Frontend Development", "Backend Development", "CMS Integration", "API Development"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility and drive measurable results.",
    features: ["Social Media", "Content Marketing", "Email Campaigns", "PPC Advertising"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Improve your search rankings and organic traffic with our comprehensive SEO strategies.",
    features: ["Technical SEO", "On-Page Optimization", "Link Building", "Local SEO"],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics and actionable insights.",
    features: ["Google Analytics", "Custom Dashboards", "A/B Testing", "Performance Reports"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, audience, and competition to build a strong foundation.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Based on our findings, we develop a comprehensive strategy tailored to achieve your specific objectives.",
  },
  {
    step: "03",
    title: "Design & Development",
    description: "Our team brings the strategy to life through iterative design and development, keeping you involved throughout.",
  },
  {
    step: "04",
    title: "Testing & Launch",
    description: "Rigorous testing ensures everything works perfectly before we launch your project to the world.",
  },
  {
    step: "05",
    title: "Support & Growth",
    description: "Post-launch, we provide ongoing support and optimization to help your digital presence grow.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Everything you need to succeed online
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From strategy to execution, we offer comprehensive digital services that help 
              businesses thrive in the modern digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                    {service.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={`relative aspect-[3/2] overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-muted/50">
        <SectionHeader
          title="Our Process"
          subtitle="A proven approach that delivers results consistently."
        />
        <div className="mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={step.step} className={`relative grid lg:grid-cols-2 gap-8 items-center`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground lg:-translate-x-1/2 -translate-x-4">
                    {step.step}
                  </div>
                  
                  <div className={`pl-8 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  
                  {index % 2 === 0 && <div className="hidden lg:block" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Pricing CTA */}
      <Section>
        <div className="bg-muted/50 rounded-2xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ready to discuss your project?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every project is unique. Let&apos;s talk about your specific needs and 
                create a custom solution that fits your budget and timeline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
