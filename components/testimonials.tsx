"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

const testimonials = [
  {
    quote: "Working with this team has been transformative for our brand. Their attention to detail and creative vision exceeded our expectations at every turn.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "The level of professionalism and creativity brought to our project was exceptional. They truly understood our vision and brought it to life beautifully.",
    author: "Michael Torres",
    role: "Founder, Startup Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "An incredible partner for any digital project. Their strategic approach combined with flawless execution delivered results beyond our expectations.",
    author: "Emily Watson",
    role: "Marketing Director, Bloom Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <Section className="bg-gradient-to-b from-background via-card/30 to-background">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Left: Content */}
        <div>
          <Reveal>
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Testimonials
            </span>
          </Reveal>
          <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
            What clients say
          </AnimatedHeading>

          {/* Quote */}
          <div className="mt-12 relative group">
            <div className="absolute -inset-8 bg-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Quote className="absolute -top-4 -left-4 h-14 w-14 text-accent/15 transition-all duration-500" />
            
            <blockquote
              key={activeIndex}
              className={cn(
                "relative pl-8 text-xl md:text-2xl leading-relaxed text-foreground font-medium",
                "animate-fade-in"
              )}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mt-8 pl-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full overflow-hidden ring-3 ring-accent/30 shadow-soft">
                  <Image
                    src={activeTestimonial.image}
                    alt={activeTestimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-lg">{activeTestimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{activeTestimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent transition-transform hover:scale-110" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pl-8 flex items-center gap-4">
            <button
              onClick={goToPrev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-border text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-soft"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={goToNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-border text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-soft"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="ml-auto text-sm font-medium text-muted-foreground">
              <span className="text-accent">{String(activeIndex + 1).padStart(2, "0")}</span> / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right: Large Image or Decorative Element */}
        <Reveal direction="right" delay={0.2}>
          <div className="relative aspect-square max-w-lg mx-auto lg:ml-auto">
            {/* Decorative circles with gradient */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border border-border/50 shadow-soft" />
              <div className="absolute w-[85%] h-[85%] rounded-full border border-border/30" />
              <div className="absolute w-[70%] h-[70%] rounded-full border border-accent/20 bg-gradient-to-b from-accent/5 to-transparent" />
            </div>
            
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-accent/5 animate-pulse-soft" />
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="text-7xl md:text-8xl font-bold text-foreground/8" style={{ fontFamily: 'var(--font-display)' }}>
                  {testimonials.length}0
                </span>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-4">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* Floating avatars */}
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={cn(
                  "absolute h-16 w-16 rounded-full overflow-hidden ring-4 transition-all duration-500 shadow-elevated",
                  index === 0 && "top-0 left-1/2 -translate-x-1/2",
                  index === 1 && "bottom-8 left-8",
                  index === 2 && "bottom-8 right-8",
                  activeIndex === index 
                    ? "scale-125 ring-accent shadow-glow" 
                    : "ring-background/50 opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
