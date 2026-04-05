"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Section } from "@/components/section"
import { AnimatedHeading, Reveal } from "@/components/animated-text"

export interface FAQItem {
  id: string
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  description?: string
  items: FAQItem[]
  columns?: 1 | 2
  className?: string
}

export function FAQSection({
  title,
  description,
  items,
  columns = 1,
  className,
}: FAQSectionProps) {
  return (
    <Section className={className}>
      {(title || description) && (
        <div className={cn("mb-16", columns === 2 ? "max-w-3xl" : "max-w-3xl mx-auto text-center")}>
          {title && (
            <AnimatedHeading as="h2" className="text-4xl md:text-5xl font-medium">
              {title}
            </AnimatedHeading>
          )}
          {description && (
            <Reveal delay={0.1}>
              <p className={cn("mt-6 text-lg text-muted-foreground", columns === 1 && "max-w-2xl mx-auto")}>
                {description}
              </p>
            </Reveal>
          )}
        </div>
      )}

      {columns === 2 ? (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[0, 1].map((colIndex) => (
            <Reveal key={colIndex} delay={colIndex * 0.1}>
              <Accordion type="single" collapsible className="space-y-4">
                {items
                  .slice(colIndex * Math.ceil(items.length / 2), (colIndex + 1) * Math.ceil(items.length / 2))
                  .map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="border border-border rounded-lg px-6 py-2 data-[state=open]:bg-muted/50 transition-colors"
                    >
                      <AccordionTrigger className="text-left hover:text-accent transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border border-border rounded-lg px-6 py-2 data-[state=open]:bg-muted/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:text-accent transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      )}
    </Section>
  )
}
