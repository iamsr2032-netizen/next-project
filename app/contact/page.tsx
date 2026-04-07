"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"
import { ContactForm } from "@/components/contact-form"

const contactInfo = [
  { icon: Mail, title: "Email", value: "hello@folio.design", href: "mailto:hello@folio.design" },
  { icon: Phone, title: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, title: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Clock, title: "Hours", value: "Mon - Fri: 9AM - 6PM", href: "#" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="transparent" />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Get in Touch
              </span>
            </Reveal>
            <AnimatedHeading as="h1" className="mt-4 text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95]" delay={0.1}>
              Let&apos;s start a{" "}
              <span className="italic text-muted-foreground">conversation</span>
            </AnimatedHeading>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Have a project in mind? We&apos;d love to hear about it. 
                Reach out and let&apos;s explore how we can bring your vision to life.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="p-8 md:p-10 rounded-3xl border border-border bg-card">
                <ContactForm className="" />
              </div>
            </Reveal>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact */}
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-background transition-all duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.title}</p>
                        <p className="font-medium group-hover:text-accent transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Social Links */}
            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl border border-border bg-card">
                <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="group flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      {social}
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Schedule Call CTA */}
            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-foreground text-background">
                <h3 className="text-lg font-semibold mb-3">Prefer to talk?</h3>
                <p className="text-background/70 mb-6">
                  Schedule a free 30-minute consultation call to discuss your project.
                </p>
                <Link
                  href="#"
                  className="group inline-flex items-center gap-2 text-sm font-medium"
                >
                  Schedule a Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-muted">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-20 w-20 mx-auto flex items-center justify-center rounded-full bg-background shadow-lg mb-6">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                    San Francisco, CA
                  </p>
                  <p className="text-muted-foreground mt-2">123 Design Street, Suite 100</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
