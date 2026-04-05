"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

export interface Feature {
  id: string
  title: string
  description: string
  icon?: string
  details?: string[]
  link?: string
}

interface FeatureGridProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
}

export function FeatureGrid({
  title,
  description,
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <Section className={className}>
      {(title || description) && (
        <div className="max-w-3xl mx-auto text-center mb-16">
          {title && (
            <AnimatedHeading as="h2" className="text-4xl md:text-5xl font-medium">
              {title}
            </AnimatedHeading>
          )}
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-muted-foreground">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      )}

      <div className={cn("grid gap-8", gridClasses[columns])}>
        {features.map((feature, index) => (
          <Reveal key={feature.id} delay={index * 0.1}>
            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              {/* Icon */}
              {feature.icon && (
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              )}

              {/* Content */}
              <h3 className="text-xl font-semibold group-hover:text-accent transition-colors mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>

              {/* Details */}
              {feature.details && (
                <ul className="space-y-2 mb-6">
                  {feature.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Link */}
              {feature.link && (
                <a
                  href={feature.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
