"use client"

import * as React from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

export interface PricingPlan {
  id: string
  name: string
  description?: string
  price: number
  period?: string
  features: string[]
  cta: {
    text: string
    href: string
  }
  highlighted?: boolean
}

interface PricingTableProps {
  title?: string
  description?: string
  plans: PricingPlan[]
  className?: string
}

export function PricingTable({
  title,
  description,
  plans,
  className,
}: PricingTableProps) {
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Reveal key={plan.id} delay={index * 0.1}>
            <div
              className={cn(
                "relative rounded-2xl border p-8 transition-all duration-300",
                plan.highlighted
                  ? "border-accent bg-card shadow-lg shadow-accent/20 md:scale-105"
                  : "border-border hover:border-foreground/20"
              )}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-background text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plan.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={plan.cta.href}
                className={cn(
                  "inline-flex w-full items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 mb-8",
                  plan.highlighted
                    ? "bg-accent text-background hover:shadow-lg hover:shadow-accent/30"
                    : "border border-border text-foreground hover:bg-muted"
                )}
              >
                {plan.cta.text}
              </Link>

              {/* Divider */}
              <div className="h-px bg-border mb-6" />

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
