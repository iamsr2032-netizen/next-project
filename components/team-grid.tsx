"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

export interface TeamMember {
  id: string
  name: string
  role: string
  bio?: string
  image: string
  social?: {
    email?: string
    linkedin?: string
    twitter?: string
  }
}

interface TeamGridProps {
  title?: string
  description?: string
  members: TeamMember[]
  columns?: 2 | 3 | 4
  className?: string
}

export function TeamGrid({
  title,
  description,
  members,
  columns = 3,
  className,
}: TeamGridProps) {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

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

      <div className={cn("grid gap-8", gridClasses[columns])}>
        {members.map((member, index) => (
          <Reveal key={member.id} delay={index * 0.1}>
            <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 pb-8">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {member.role}
                </p>
                {member.bio && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                )}

                {/* Social Links */}
                {member.social && (
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 rounded-full hover:bg-accent hover:text-background transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-accent hover:text-background transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-accent hover:text-background transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
