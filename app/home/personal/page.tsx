import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, Github, Linkedin, Twitter, Mail, MapPin, Download } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PortfolioFilter } from "@/components/portfolio-filter"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "Figma", level: 75 },
  { name: "Tailwind CSS", level: 92 },
]

const experience = [
  {
    period: "2024 - Present",
    role: "Senior Frontend Engineer",
    company: "TechCorp",
    description: "Leading the frontend architecture and mentoring junior developers.",
  },
  {
    period: "2021 - 2024",
    role: "Full Stack Developer",
    company: "StartupXYZ",
    description: "Built and maintained multiple web applications using modern technologies.",
  },
  {
    period: "2019 - 2021",
    role: "Junior Developer",
    company: "Digital Agency",
    description: "Developed responsive websites and collaborated with design teams.",
  },
]

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export default function PersonalHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />
      
      {/* Hero Section - Modern Split Layout */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-16 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <Reveal>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  Available for work
                </div>
              </Reveal>
              
              <AnimatedHeading as="h1" className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95]" delay={0.1}>
                Alex Morgan
              </AnimatedHeading>
              
              <Reveal delay={0.2}>
                <p className="mt-4 text-2xl md:text-3xl text-muted-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                  Frontend Engineer
                </p>
              </Reveal>
              
              <Reveal delay={0.3}>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                  I build accessible, pixel-perfect digital experiences for the web. 
                  Currently focused on creating high-performance applications at TechCorp.
                </p>
              </Reveal>

              {/* Location */}
              <Reveal delay={0.35}>
                <div className="mt-6 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal delay={0.4}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <MagneticButton href="/portfolio" variant="primary" size="lg" icon="arrow">
                    View Projects
                  </MagneticButton>
                  <MagneticButton href="/contact" variant="outline" size="lg" icon="arrow-up">
                    Contact Me
                  </MagneticButton>
                </div>
              </Reveal>

              {/* Social Links */}
              <Reveal delay={0.5}>
                <div className="mt-10 flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <Reveal direction="right" delay={0.2}>
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[480px] rounded-3xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                      alt="Alex Morgan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Floating Card - Experience */}
                  <div className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-card border border-border shadow-elevated">
                    <p className="text-4xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>5+</p>
                    <p className="text-sm text-muted-foreground">Years Exp.</p>
                  </div>
                  
                  {/* Floating Card - Projects */}
                  <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-card border border-border shadow-elevated">
                    <p className="text-4xl font-medium" style={{ fontFamily: 'var(--font-display)' }}>50+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-[1px] bg-border relative overflow-hidden">
              <div className="absolute top-0 w-full h-1/2 bg-foreground animate-bounce-soft" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-muted/30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: About */}
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                About Me
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Crafting digital experiences
            </AnimatedHeading>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in web development, I specialize in building 
                  modern web applications using React, Next.js, and TypeScript.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating experiences that 
                  are both functional and delightful to use.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-foreground font-medium"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right: Skills */}
          <div>
            <Reveal>
              <h3 className="text-lg font-semibold mb-8">Skills & Expertise</h3>
            </Reveal>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <Reveal key={skill.name} delay={index * 0.1}>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-foreground rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Experience
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Career journey
            </AnimatedHeading>
          </div>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group grid md:grid-cols-12 gap-6 p-8 rounded-2xl border border-border hover:border-foreground/20 hover:bg-muted/30 transition-all duration-300">
                <div className="md:col-span-3">
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-accent mt-1">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="bg-muted/30">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Projects
              </span>
            </Reveal>
            <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
              Featured work
            </AnimatedHeading>
          </div>
          <Reveal delay={0.2}>
            <MagneticButton href="/portfolio" variant="outline" icon="arrow">
              View All
            </MagneticButton>
          </Reveal>
        </div>
        <PortfolioFilter />
      </Section>

      {/* Contact CTA */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimatedHeading as="h2" className="text-4xl md:text-5xl lg:text-6xl font-medium text-background">
            Let&apos;s work{" "}
            <span className="italic">together</span>
          </AnimatedHeading>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-background/70">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-foreground bg-background rounded-full transition-all duration-300 hover:shadow-2xl"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
