export const siteConfig = {
  name: "Portfolio Pro",
  description: "A premium portfolio template for designers, developers, and creatives",
  url: "https://portfolio-pro.vercel.app",
  ogImage: "https://portfolio-pro.vercel.app/og.jpg",
  author: "Portfolio Pro",
  email: "hello@portfoliopro.com",
  
  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  // Social links
  social: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    dribbble: "https://dribbble.com",
    instagram: "https://instagram.com",
  },

  // Contact
  contactEmail: "hello@portfoliopro.com",
  contactPhone: "+1 (555) 000-0000",
  contactLocation: "San Francisco, CA",

  // Analytics
  gaId: "UA-XXXXXXXXX-X",

  // Features
  features: {
    blog: true,
    portfolio: true,
    testimonials: true,
    newsletter: true,
    darkMode: true,
  },
}

export type SiteConfig = typeof siteConfig
