"use client"

import * as React from "react"
import { useInView, useCounter } from "@/hooks/use-animations"

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Happy Clients" },
]

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const { ref, isInView } = useInView()
  const { count, startCounter } = useCounter(stat.value, 2000)

  React.useEffect(() => {
    if (isInView) {
      startCounter()
    }
  }, [isInView, startCounter])

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center group p-8 rounded-2xl glass-card border border-border/50 hover-lift transition-all duration-500"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-baseline justify-center gap-1">
        <span
          className="text-5xl md:text-6xl lg:text-7xl font-bold counter-value transition-all duration-500 group-hover:text-accent group-hover:scale-110"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {count}
        </span>
        <span
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {stat.suffix}
        </span>
      </div>
      <p className="relative mt-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-32 border-b border-border/50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-up"
            >
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
