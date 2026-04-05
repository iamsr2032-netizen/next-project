"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Search, X } from "lucide-react"
import { Reveal } from "@/components/animated-text"
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio"

// Generate categories from portfolio data
const generateCategories = () => {
  const categories = new Set<string>(["All"])
  portfolioProjects.forEach((project) => {
    categories.add(project.category)
  })
  return Array.from(categories)
}

const categories = generateCategories()

interface PortfolioFilterProps {
  showAll?: boolean
}

export function PortfolioFilter({ showAll = false }: PortfolioFilterProps) {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null)

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  return (
    <div className="space-y-12">
      {/* Search Bar */}
      <Reveal>
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </Reveal>

      {/* Filter Buttons */}
      <Reveal>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Projects Grid */}
      {displayedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <Link
                href={project.link || "#"}
                className="group relative block"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={cn(
                      "object-cover transition-all duration-700",
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    )}
                  />
                  
                  {/* Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-foreground/0 transition-colors duration-500",
                    hoveredProject === project.id && "bg-foreground/20"
                  )} />
                  
                  {/* View Button */}
                  <div className={cn(
                    "absolute top-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500",
                    hoveredProject === project.id 
                      ? "opacity-100 scale-100 rotate-0" 
                      : "opacity-0 scale-75 -rotate-45"
                  )}>
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal>
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No projects found matching your search.</p>
          </div>
        </Reveal>
      )}

      {!showAll && filteredProjects.length > 6 && (
        <Reveal>
          <div className="text-center pt-8">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium border-2 border-foreground rounded-full transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  )
}
