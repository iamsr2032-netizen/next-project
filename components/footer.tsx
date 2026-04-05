"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Mail } from "lucide-react"
import { Reveal } from "@/components/animated-text"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: CTA */}
            <div>
              <Reveal>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  Get in touch
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 
                  className="mt-4 text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Let&apos;s create something{" "}
                  <span className="italic text-muted-foreground">amazing</span>{" "}
                  together
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  href="mailto:hello@folio.design"
                  className="group inline-flex items-center gap-3 mt-8 text-lg font-medium text-foreground hover:text-accent transition-colors"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border group-hover:border-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  hello@folio.design
                </Link>
              </Reveal>
            </div>

            {/* Right: Navigation & Info */}
            <div className="grid sm:grid-cols-2 gap-12">
              {/* Navigation */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                  Navigation
                </h3>
                <nav className="space-y-4">
                  {navigation.main.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                    >
                      {item.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social & Info */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                  Follow
                </h3>
                <div className="space-y-4">
                  {navigation.social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="group">
            <span 
              className="text-xl font-semibold tracking-tight transition-opacity group-hover:opacity-70"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Folio<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Folio. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border group-hover:border-foreground transition-colors">
              <ArrowUpRight className="h-3 w-3 -rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
