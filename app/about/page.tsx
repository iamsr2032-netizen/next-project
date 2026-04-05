import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, Target, Heart, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { StatsSection } from "@/components/stats"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

export const metadata = {
  title: "About - Folio",
  description: "Learn more about our story, mission, and the team behind Folio.",
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from design to development to client communication.",
    number: "01",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe the best work comes from true partnership between our team and our clients.",
    number: "02",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We&apos;re genuinely passionate about creating digital experiences that make a difference.",
    number: "03",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We stay ahead of trends and continuously explore new technologies and methodologies.",
    number: "04",
  },
]

const team = [
  {
    name: "Jessica Williams",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Johnson",
    role: "Strategy Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
]

const timeline = [
  { year: "2018", title: "The Beginning", description: "Folio was founded with a mission to help businesses succeed in the digital age." },
  { year: "2020", title: "Rapid Growth", description: "Expanded our team and services, reaching 50+ clients across multiple industries." },
  { year: "2022", title: "Industry Recognition", description: "Won multiple design awards and established ourselves as industry leaders." },
  { year: "2024", title: "Global Reach", description: "Now serving clients worldwide with a team of talented professionals." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <Reveal>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  About Us
                </span>
              </Reveal>
              <AnimatedHeading as="h1" className="mt-4 text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95]" delay={0.1}>
                We create digital experiences that{" "}
                <span className="italic text-muted-foreground">inspire</span>
              </AnimatedHeading>
              <Reveal delay={0.2}>
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Founded in 2018, Folio has grown from a small design studio to a full-service 
                  digital agency. We combine creativity, strategy, and technology to help 
                  businesses thrive.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8">
                  <MagneticButton href="/contact" variant="primary" size="lg" icon="arrow">
                    Work With Us
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            {/* Right: Image */}
            <Reveal direction="right" delay={0.2}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Our Story with Timeline */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Story */}
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Our Story
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              What started as a passion project
            </AnimatedHeading>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Folio began with a simple belief: that great design has the power to 
                  transform businesses. Our founder, Jessica Williams, started the company 
                  from her home office with just a laptop and a vision.
                </p>
                <p>
                  Today, we&apos;re a team of passionate designers, developers, and strategists 
                  who share a commitment to excellence. We&apos;ve helped over 150 businesses 
                  across industries create digital products that drive real results.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.1}>
                <div className="group relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-accent transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-muted border-2 border-border rounded-full group-hover:bg-accent group-hover:border-accent transition-colors" />
                  <span 
                    className="text-3xl font-medium text-muted-foreground/30 group-hover:text-accent/50 transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Our Values
            </span>
          </Reveal>
          <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
            Principles that guide us
          </AnimatedHeading>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.1}>
              <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-500 hover-lift h-full">
                <span className="text-5xl font-light text-muted-foreground/20 group-hover:text-accent/30 transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                  {value.number}
                </span>
                <div className="mt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground group-hover:bg-accent group-hover:text-background transition-colors">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Our Team
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Meet the people
            </AnimatedHeading>
          </div>
          <Reveal delay={0.2}>
            <MagneticButton href="/contact" variant="outline" icon="arrow">
              Join Our Team
            </MagneticButton>
          </Reveal>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  
                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {["twitter", "linkedin"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm text-foreground hover:bg-background transition-colors"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center">
          <AnimatedHeading as="h2" className="text-4xl md:text-5xl lg:text-6xl font-medium text-background">
            Ready to work{" "}
            <span className="italic">together?</span>
          </AnimatedHeading>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-background/70 max-w-xl mx-auto">
              We&apos;re always looking for talented people and exciting projects.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-foreground bg-background rounded-full transition-all duration-300 hover:shadow-2xl"
              >
                Start a Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-background/80 hover:text-background transition-colors"
              >
                View Services
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
