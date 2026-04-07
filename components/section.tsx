import { cn } from "@/lib/utils"
import { Reveal, AnimatedHeading } from "@/components/animated-text"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  label?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  title,
  subtitle,
  label,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {label && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent uppercase tracking-widest">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {label}
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        </Reveal>
      )}
      <AnimatedHeading
        as="h2"
        className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
        delay={0.1}
      >
        {title}
      </AnimatedHeading>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
