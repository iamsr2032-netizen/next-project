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
      className="text-center group"
    >
      <div className="flex items-baseline justify-center gap-1">
        <span
          className="text-5xl md:text-6xl lg:text-7xl font-medium counter-value transition-colors group-hover:text-accent"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {count}
        </span>
        <span
          className="text-3xl md:text-4xl lg:text-5xl font-medium text-accent"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {stat.suffix}
        </span>
      </div>
      <p className="mt-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
