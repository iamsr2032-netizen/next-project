"use client"

import * as React from "react"
import { Check, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

interface NewsletterSectionProps {
  title?: string
  description?: string
  placeholder?: string
  className?: string
  onSubmit?: (email: string) => Promise<void>
}

export function NewsletterSection({
  title = "Stay Updated",
  description = "Get the latest design insights and project updates delivered to your inbox.",
  placeholder = "Enter your email",
  className,
  onSubmit,
}: NewsletterSectionProps) {
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      if (onSubmit) {
        await onSubmit(email)
      }
      setSuccess(true)
      setEmail("")
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section className={className}>
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Newsletter
          </span>
        </Reveal>

        <AnimatedHeading as="h2" className="mt-4 text-4xl md:text-5xl font-medium" delay={0.1}>
          {title}
        </AnimatedHeading>

        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">
              {description}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.3}>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError("")
                }}
                placeholder={placeholder}
                className="w-full px-6 py-4 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
              />
              {error && (
                <p className="absolute top-full left-0 mt-2 text-sm text-red-500">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading || success}
              className={cn(
                "px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap",
                success
                  ? "bg-green-500/20 text-green-600 border border-green-500/30"
                  : "bg-accent text-background hover:shadow-lg hover:shadow-accent/30 active:scale-95"
              )}
            >
              {success ? (
                <>
                  <Check className="h-4 w-4" />
                  Subscribed!
                </>
              ) : isLoading ? (
                <>
                  <div className="h-4 w-4 rounded-full border-2 border-background border-t-transparent animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </Reveal>

        {success && (
          <Reveal delay={0.4}>
            <p className="mt-6 text-sm text-muted-foreground">
              Thanks for subscribing! Check your email for updates.
            </p>
          </Reveal>
        )}
      </div>
    </Section>
  )
}
