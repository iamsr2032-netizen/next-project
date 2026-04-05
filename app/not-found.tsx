import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const pages = [
  { name: "Homepage", description: "Go back to our main page", href: "/" },
  { name: "About", description: "Learn more about us", href: "/about" },
  { name: "Services", description: "Explore what we offer", href: "/services" },
  { name: "Portfolio", description: "View our work", href: "/portfolio" },
  { name: "Blog", description: "Read our articles", href: "/blog" },
  { name: "Contact", description: "Get in touch", href: "/contact" },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-4xl w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Message */}
            <div>
              {/* 404 Number */}
              <span 
                className="text-[120px] sm:text-[160px] font-medium leading-none text-foreground/5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                404
              </span>

              <h1 
                className="text-4xl md:text-5xl font-medium tracking-tight -mt-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Page not{" "}
                <span className="italic text-muted-foreground">found</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. 
                Perhaps you&apos;ve mistyped the URL or the page has been moved.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-all duration-300 hover:bg-foreground/90"
                >
                  Back to Homepage
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Quick Links */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">
                Quick Links
              </p>
              {pages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="group flex items-center justify-between p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-muted/50 transition-all duration-300"
                >
                  <div>
                    <p className="font-medium group-hover:text-accent transition-colors">
                      {page.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {page.description}
                    </p>
                  </div>
                  <div className="h-10 w-10 flex items-center justify-center rounded-full border border-border group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
