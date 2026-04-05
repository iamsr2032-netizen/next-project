"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-animations"

interface AnimatedTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  animation?: "fade-up" | "split" | "blur"
  delay?: number
}

export function AnimatedText({
  text,
  className,
  as: Component = "p",
  animation = "fade-up",
  delay = 0,
}: AnimatedTextProps) {
  const { ref, isInView } = useInView()

  if (animation === "split") {
    const words = text.split(" ")
    return (
      <Component
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className={cn("overflow-hidden", className)}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
            <span
              className={cn(
                "inline-block transition-all duration-700",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              )}
              style={{ transitionDelay: `${delay + i * 0.05}s` }}
            >
              {word}
            </span>
          </span>
        ))}
      </Component>
    )
  }

  if (animation === "blur") {
    return (
      <Component
        ref={ref as React.RefObject<HTMLParagraphElement>}
        className={cn(
          "transition-all duration-1000",
          isInView
            ? "opacity-100 blur-0 translate-y-0"
            : "opacity-0 blur-sm translate-y-4",
          className
        )}
        style={{ transitionDelay: `${delay}s` }}
      >
        {text}
      </Component>
    )
  }

  // Default fade-up
  return (
    <Component
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className={cn(
        "transition-all duration-700",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {text}
    </Component>
  )
}

// Animated heading with serif styling
interface AnimatedHeadingProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3"
  delay?: number
}

export function AnimatedHeading({
  children,
  className,
  as: Component = "h1",
  delay = 0,
}: AnimatedHeadingProps) {
  const { ref, isInView } = useInView()

  return (
    <Component
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={cn(
        "transition-all duration-1000",
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12",
        className
      )}
      style={{ 
        fontFamily: 'var(--font-display)',
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </Component>
  )
}

// Reveal wrapper for any element
interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const { ref, isInView } = useInView()

  const getTransform = () => {
    if (!isInView) {
      switch (direction) {
        case "down": return "translateY(-30px)"
        case "left": return "translateX(30px)"
        case "right": return "translateX(-30px)"
        case "scale": return "scale(0.95)"
        default: return "translateY(30px)"
      }
    }
    return direction === "scale" ? "scale(1)" : "translate(0)"
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "transition-all duration-700",
        isInView ? "opacity-100" : "opacity-0",
        className
      )}
      style={{
        transform: getTransform(),
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  )
}
