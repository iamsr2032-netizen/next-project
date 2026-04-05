"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

interface CTASectionProps {
  title: React.ReactNode
  description?: string
  buttonText?: string
  buttonHref?: string
  variant?: "dark" | "light"
  className?: string
}

export function CTASection({
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "#contact",
  variant = "dark",
  className,
}: CTASectionProps) {
  const isDark = variant === "dark"

  return (
    <Section className={cn("relative overflow-hidden", className, isDark && "bg-foreground")}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        {isDark ? (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </>
        ) : (
          <>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </>
        )}
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <AnimatedHeading
          as="h2"
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-medium",
            isDark && "text-background"
          )}
        >
          {title}
        </AnimatedHeading>

        {description && (
          <Reveal delay={0.2}>
            <p
              className={cn(
                "mt-8 text-lg md:text-xl max-w-xl mx-auto",
                isDark ? "text-background/70" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          </Reveal>
        )}

        {buttonText && buttonHref && (
          <Reveal delay={0.3}>
            <div className="mt-12">
              <Link
                href={buttonHref}
                className={cn(
                  "group inline-flex items-center gap-4 px-10 py-5 text-lg font-medium rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105",
                  isDark
                    ? "text-foreground bg-background"
                    : "text-background bg-foreground"
                )}
              >
                {buttonText}
                <span className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:rotate-45",
                  isDark
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground"
                )}>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
