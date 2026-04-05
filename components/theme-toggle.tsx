"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative h-10 w-10 rounded-full transition-all duration-500",
        "bg-muted hover:bg-muted/80",
        "flex items-center justify-center",
        "group overflow-hidden"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Sun icon */}
      <Sun
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-500",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        )}
      />
      
      {/* Moon icon */}
      <Moon
        className={cn(
          "absolute h-[18px] w-[18px] transition-all duration-500",
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
      
      {/* Hover ring effect */}
      <span className="absolute inset-0 rounded-full border border-foreground/0 group-hover:border-foreground/20 transition-colors duration-300" />
    </button>
  )
}
