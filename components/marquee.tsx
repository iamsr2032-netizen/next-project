"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeSectionProps {
  clients: string[]
  className?: string
}

export function MarqueeSection({ clients, className }: MarqueeSectionProps) {
  // Double the array for seamless looping
  const doubledClients = [...clients, ...clients]

  return (
    <section className={cn("py-16 border-y border-border overflow-hidden", className)}>
      <div className="marquee">
        <div className="marquee-content gap-16">
          {doubledClients.map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex items-center gap-4 text-2xl md:text-3xl font-medium text-muted-foreground/40 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>{client}</span>
              <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
            </div>
          ))}
        </div>
        <div className="marquee-content gap-16" aria-hidden>
          {doubledClients.map((client, index) => (
            <div
              key={`${client}-${index}-dup`}
              className="flex items-center gap-4 text-2xl md:text-3xl font-medium text-muted-foreground/40 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span>{client}</span>
              <span className="h-2 w-2 rounded-full bg-muted-foreground/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Text marquee variant
interface TextMarqueeProps {
  text: string
  className?: string
  speed?: "slow" | "normal" | "fast"
}

export function TextMarquee({ text, className, speed = "normal" }: TextMarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_40s_linear_infinite]",
    normal: "animate-[marquee_30s_linear_infinite]",
    fast: "animate-[marquee_20s_linear_infinite]",
  }

  return (
    <div className={cn("overflow-hidden py-8", className)}>
      <div className="flex">
        <div className={cn("flex shrink-0 items-center gap-8", speedClass[speed])}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl lg:text-9xl font-medium text-foreground/5 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {text}
            </span>
          ))}
        </div>
        <div className={cn("flex shrink-0 items-center gap-8", speedClass[speed])} aria-hidden>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl lg:text-9xl font-medium text-foreground/5 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
