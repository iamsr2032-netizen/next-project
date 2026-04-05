"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedHeading, Reveal } from "@/components/animated-text"
import { MagneticButton } from "@/components/magnetic-button"

interface HeroProps {
  badge?: string
  title: React.ReactNode
  description?: string
  cta?: {
    text: string
    href: string
    variant?: "primary" | "outline"
  }[]
  backgroundGradient?: boolean
  alignment?: "center" | "left"
  className?: string
}

export function Hero({
  badge,
  title,
  description,
  cta,
  backgroundGradient = true,
  alignment = "center",
  className,
}: HeroProps) {
  const alignmentClasses = {
    center: "text-center items-center justify-center",
    left: "text-left items-start justify-start",
  }

  return (
    <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden pt-20", className)}>
      {/* Background Elements */}
      {backgroundGradient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      )}

      <div className={cn("relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 flex flex-col", alignmentClasses[alignment])}>
        <div className={cn("max-w-5xl", alignment === "left" && "max-w-3xl")}>
          {/* Badge */}
          {badge && (
            <Reveal delay={0}>
              <div className={cn("inline-flex items-center gap-2 mb-8", alignment === "center" && "justify-center")}>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                  </span>
                  {badge}
                </span>
              </div>
            </Reveal>
          )}

          {/* Headline */}
          <div>
            <AnimatedHeading
              as="h1"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight"
              delay={0.1}
            >
              {title}
            </AnimatedHeading>
          </div>

          {/* Description */}
          {description && (
            <Reveal delay={0.3}>
              <p className={cn("mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed", alignment === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl")}>
                {description}
              </p>
            </Reveal>
          )}

          {/* CTA Buttons */}
          {cta && cta.length > 0 && (
            <Reveal delay={0.4}>
              <div className={cn("mt-12 flex flex-col sm:flex-row items-center gap-4", alignment === "center" && "justify-center", alignment === "left" && "justify-start")}>
                {cta.map((button, index) => (
                  <MagneticButton
                    key={index}
                    href={button.href}
                    variant={button.variant || "primary"}
                    size="lg"
                    icon="arrow"
                  >
                    {button.text}
                  </MagneticButton>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
