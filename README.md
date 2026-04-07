# Portfolio Pro - Premium Next.js Portfolio Template

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.2+-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A sophisticated, production-ready portfolio template designed for creative professionals, designers, developers, and digital agencies. Built with cutting-edge technologies including Next.js 16, Tailwind CSS v4, and TypeScript.

**Live Demo:** Coming Soon  
**Documentation:** [View Full Docs](#documentation)  
**Support:** support@portfoliopro.dev

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Development Guide](#development-guide)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Performance](#performance)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

---

## Features

### Core Features

- **Fully Responsive Design** - Mobile-first, works flawlessly on all devices and screen sizes
- **Dark & Light Mode** - Automatic theme detection with manual toggle support
- **Smooth Animations** - Sophisticated scroll reveals, micro-interactions, and transitions
- **Dynamic Portfolio** - Advanced filtering, keyword search, and category management
- **Blog System** - Pre-configured structure ready for content integration
- **Contact Form** - Production-ready with Zod validation and multiple email integrations
- **SEO Optimized** - Complete meta tags, Open Graph, sitemaps, RSS feeds, and structured data
- **Performance Optimized** - 95+ Lighthouse scores with optimized images and code splitting

### Advanced Features

- **Multiple Hero Sections** - 3+ variants with customizable layouts and animations
- **Testimonials Carousel** - Interactive slider with smooth transitions and autoplay
- **Animated Statistics** - Auto-counting sections with scroll reveal animations
- **Newsletter Signup** - Email subscription with validation and confirmation
- **Team Member Grid** - Showcase team with photos, bios, and social links
- **Pricing Tables** - Flexible layouts with plans, features, and CTA buttons
- **Feature Grid** - Multiple column layouts for service/feature showcase
- **FAQ Accordion** - Elegant accordion component with smooth animations
- **CTA Sections** - Dark/light variants for conversion optimization

### Developer Features

- **TypeScript Throughout** - Full type safety for better developer experience
- **Reusable Components** - Well-structured, documented components for easy customization
- **Clean Architecture** - Separation of concerns with utilities, hooks, and data files
- **Pre-configured Tools** - React Hook Form, Zod validation, Lucide icons included
- **Custom Hooks** - Animation hooks for parallax, scroll reveals, and counters
- **CSS-in-JS Ready** - Tailwind v4 with custom utilities and variables
- **Environment Ready** - Pre-configured for multiple email services

---

## Tech Stack

### Frontend Framework
- **Next.js 16.2** - Latest React meta-framework with App Router
- **React 19** - Modern React with latest features
- **TypeScript 5.7** - Full type safety and developer tooling

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework with custom configuration
- **shadcn/ui** - Premium UI component library
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library (500+ icons)

### Forms & Validation
- **React Hook Form** - Performant form handling with minimal re-renders
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Integration between Hook Form and Zod

### Utilities & Features
- **next-themes** - Theme management with system preference detection
- **date-fns** - Modern date utility library
- **Recharts** - Composable charting library
- **Embla Carousel** - Lightweight carousel component
- **Sonner** - Elegant toast notification system
- **clsx + tailwind-merge** - Utility class merging with conflict resolution

### Developer Tools
- **ESLint** - Code quality linting
- **PostCSS** - CSS transformation
- **Autoprefixer** - Vendor prefix management

### Deployment
- **Vercel** - Recommended hosting platform (zero-config deployment)
- **Docker** - Container support for self-hosted options

---

## Quick Start

### Prerequisites
- Node.js 18.17+ or higher
- npm, pnpm, yarn, or bun package manager
- Git installed

### 30-Second Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/portfolio-pro.git
cd portfolio-pro

# 2. Install dependencies
pnpm install
# or: npm install / yarn install / bun install

# 3. Start development server
pnpm dev

# 4. Open in browser
# Visit http://localhost:3000
```

That's it! Your portfolio is now running locally.

---

## Installation

### Step-by-Step Installation Guide

#### 1. Clone Repository

```bash
git clone https://github.com/your-username/portfolio-pro.git
cd portfolio-pro
```

#### 2. Install Dependencies

Choose your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

#### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:

```bash
# Contact Form Email Configuration
CONTACT_EMAIL=your-email@example.com

# Optional: Email Service Configuration
# For Nodemailer (Gmail/Outlook)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# For SendGrid
SENDGRID_API_KEY=your-sendgrid-key

# For Resend
RESEND_API_KEY=your-resend-key
```

See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed email configuration.

#### 4. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` to see your portfolio.

#### 5. Customize Your Content

Edit these files with your information:
- `config/site.ts` - Site metadata and social links
- `data/portfolio.ts` - Portfolio projects
- `data/blog.ts` - Blog posts
- `data/testimonials.ts` - Client testimonials
- `data/services.ts` - Services or skills

---

## Development Guide

### Project Structure

```
portfolio-pro/
│
├── app/                              # Next.js App Router
│   ├── api/
│   │   └── contact/
│   │       └── route.ts             # Contact form API endpoint
│   ├── blog/
│   │   ├── page.tsx                 # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx             # Individual blog post
│   ├── portfolio/
│   │   ├── page.tsx                 # Portfolio grid page
│   │   └── [id]/
│   │       └── page.tsx             # Portfolio detail page
│   ├── contact/
│   │   └── page.tsx                 # Contact page
│   ├── layout.tsx                   # Root layout (metadata, fonts)
│   ├── page.tsx                     # Home page
│   ├── sitemap.ts                   # Dynamic sitemap generation
│   └── feed.xml/
│       └── route.ts                 # RSS feed endpoint
│
├── components/                       # React Components
│   ├── ui/                          # Base UI components (shadcn)
│   │   ├── button.tsx               # Button component
│   │   ├── input.tsx                # Form input
│   │   └── [other components]
│   ├── navbar.tsx                   # Navigation bar
│   ├── footer.tsx                   # Footer section
│   ├── hero.tsx                     # Hero section
│   ├── portfolio-filter.tsx          # Portfolio filter & search
│   ├── contact-form.tsx             # Contact form
│   ├── testimonials.tsx             # Testimonials section
│   ├── stats.tsx                    # Statistics counters
│   ├── feature-grid.tsx             # Features showcase
│   ├── pricing-table.tsx            # Pricing section
│   ├── team-grid.tsx                # Team members grid
│   ├── faq-section.tsx              # FAQ accordion
│   ├── cta-section.tsx              # Call-to-action blocks
│   ├── newsletter-section.tsx       # Newsletter signup
│   ├── animated-text.tsx            # Text animations
│   └── [other components]
│
├── config/                          # Configuration Files
│   └── site.ts                      # Site-wide configuration
│
├── data/                            # Content Data
│   ├── portfolio.ts                 # Portfolio projects
│   ├── blog.ts                      # Blog posts
│   ├── testimonials.ts              # Client testimonials
│   ├── services.ts                  # Services list
│   └── [other data files]
│
├── hooks/                           # Custom React Hooks
│   └── use-animations.ts            # Animation utilities
│
├── lib/                             # Utility Functions
│   ├── utils.ts                     # Common utilities (cn, etc)
│   ├── constants.ts                 # App constants
│   ├── seo.ts                       # SEO utilities
│   ├── email.ts                     # Email templates
│   └── [other utilities]
│
├── public/                          # Static Assets
│   ├── images/                      # Image files
│   ├── fonts/                       # Custom fonts
│   ├── icons/                       # Icon files
│   ├── favicon.ico                  # Favicon
│   ├── robots.txt                   # SEO robots file
│   └── sitemap.xml                  # XML sitemap
│
├── styles/                          # Global Styles
│   └── globals.css                  # Tailwind & custom styles
│
├── app.config.ts                    # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies & scripts
└── .env.example                     # Environment variables template
```

### Development Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint
```

### Creating New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Use existing components or create new ones

Example:
```typescript
// app/services/page.tsx
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services",
  description: "Our services and expertise"
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Your content here */}
      </main>
      <Footer />
    </>
  )
}
```

### Adding Components

1. Create component in `components/` directory
2. Use TypeScript for type safety
3. Export from component file

Example:
```typescript
// components/my-component.tsx
interface MyComponentProps {
  title: string
  description?: string
}

export function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
```

### Modifying Data

All content data is in `data/` directory. Edit files to update:

**Portfolio Projects** (`data/portfolio.ts`):
```typescript
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "project-1",
    title: "Your Project Name",
    description: "Project description",
    image: "image-url",
    category: "Web Design",
    tags: ["tag1", "tag2"],
    year: "2024",
    link: "project-link"
  }
  // Add more projects...
]
```

**Blog Posts** (`data/blog.ts`):
```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Blog Post Title",
    excerpt: "Short excerpt",
    content: "Full content here",
    author: "Author Name",
    publishedAt: "2024-01-01",
    readingTime: "5 min read",
    tags: ["design", "web"]
  }
  // Add more posts...
]
```

---

## Customization

### Changing Colors

Edit `app/globals.css` to modify the color system:

```css
:root {
  /* Primary colors */
  --primary: oklch(0.55 0.12 25);
  --primary-foreground: oklch(0.98 0.01 0);

  /* Accent colors */
  --accent: oklch(0.60 0.15 170);
  --accent-foreground: oklch(0.98 0.01 0);

  /* Neutral colors */
  --background: oklch(0.98 0.01 0);
  --foreground: oklch(0.14 0.01 0);
  
  /* And more... */
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode colors */
  }
}
```

### Changing Fonts

Fonts are configured in `app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from 'next/font/google'

const sansFont = Inter({ subsets: ['latin'] })
const displayFont = Playfair_Display({ subsets: ['latin'] })
```

To use different fonts:
1. Import from `next/font/google`
2. Initialize in layout
3. Update CSS variables in `globals.css`

### Updating Site Config

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  email: "your@email.com",
  phone: "+1 (555) 000-0000",
  location: "City, Country",
  
  // Social links
  socials: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // Add more...
  },
  
  // Navigation
  navItems: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ]
}
```

### Customizing Components

Components are fully customizable. Edit them directly or extend with variants:

```typescript
// Creating a component variant
export function HeroVariantTwo() {
  return (
    <section className="custom-layout">
      {/* Your custom implementation */}
    </section>
  )
}
```

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed customization guide.

---

## Deployment

### Deploy to Vercel (Recommended)

**Benefits:**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Serverless functions
- Analytics included

**Steps:**

1. Push your code to GitHub:
```bash
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "Import Project" and select your repository

4. Vercel will auto-detect Next.js settings

5. Add environment variables in project settings

6. Click "Deploy"

Your site is live! Vercel creates a unique URL and custom domain support.

**Deployment Command:**
```bash
vercel deploy --prod
```

### Deploy to Other Platforms

#### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

#### Docker (Self-hosted)

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio-pro .
docker run -p 3000:3000 portfolio-pro
```

---

## API Documentation

### Contact Form Endpoint

**Route:** `POST /api/contact`

**Request Body:**
```json
{
  "firstName": "string (2-50 chars, required)",
  "lastName": "string (2-50 chars, required)",
  "email": "string (valid email, required)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string (10-5000 chars, required)",
  "budget": "string (optional)",
  "services": ["string"] (optional)
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully. We'll get back to you within 24 hours.",
  "submissionId": "1704067200000-abc123def456"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

**Example Usage:**
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    message: 'I would like to discuss a project...'
  })
})

const data = await response.json()
```

See [CONTACT_FORM.md](./CONTACT_FORM.md) for complete documentation.

---

## Performance

### Current Performance Metrics

- **Lighthouse Score:** 95+ (Mobile & Desktop)
- **Core Web Vitals:** All Green
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Page Load Time:** < 2 seconds
- **Bundle Size:** < 150KB (gzipped)

### Performance Optimization Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Optimize images with compression
   - Use WebP format when possible

2. **Code Splitting**
   - Use dynamic imports for heavy components
   - Lazy load below-the-fold content

3. **Caching**
   - Static pages are pre-rendered
   - ISR for semi-dynamic content

4. **Monitoring**
   - Use Vercel Analytics
   - Monitor Web Vitals in production

---

## Troubleshooting

### Common Issues

**Issue: Port 3000 already in use**
```bash
# Use different port
pnpm dev -- -p 3001
```

**Issue: Dependencies not installing**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Issue: Environment variables not loading**
```bash
# Check .env.local exists and has correct variables
# Restart dev server after editing .env.local
```

**Issue: TypeScript errors after changes**
```bash
# Regenerate types
pnpm build
```

**Issue: Images not loading**
```
- Check image URLs in data files
- Ensure images are in public/images folder
- Use absolute paths starting with /
```

**Issue: Forms not submitting**
```
- Check network tab in DevTools
- Verify API route exists
- Check browser console for errors
- Ensure environment variables are set
```

See [CONTACT_FORM.md](./CONTACT_FORM.md) and [EMAIL_SETUP.md](./EMAIL_SETUP.md) for issue-specific guides.

---

## FAQ

**Q: Can I use this for client projects?**  
A: Yes! You can resell and modify for your clients with the MIT license.

**Q: How do I add more pages?**  
A: Create a new folder in `app/` directory with a `page.tsx` file.

**Q: How do I change the design/colors?**  
A: Edit `app/globals.css` for colors and `components/` for layouts. See CUSTOMIZATION.md for detailed guide.

**Q: Can I use this with a headless CMS?**  
A: Yes! Data is separated in `data/` folder. Replace with API calls to your CMS.

**Q: How do I enable email sending?**  
A: Follow the setup in [EMAIL_SETUP.md](./EMAIL_SETUP.md). Choose between Nodemailer, SendGrid, or Resend.

**Q: Is this mobile responsive?**  
A: Absolutely! Built mobile-first and fully responsive.

**Q: What's the easiest way to deploy?**  
A: Deploy to Vercel - it's zero-config and takes 2 minutes.

**Q: Can I modify and resell this?**  
A: Yes, with MIT license attribution.

**Q: Do you provide support?**  
A: Check documentation files first. For issues, contact support@portfoliopro.dev.

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |
| Mobile Safari | iOS 12+ |
| Chrome Mobile | Latest 2 versions |

---

## Documentation

Detailed guides available:
- **[CUSTOMIZATION.md](./CUSTOMIZATION.md)** - Comprehensive customization guide
- **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** - Email configuration for 3 services
- **[CONTACT_FORM.md](./CONTACT_FORM.md)** - Contact form API documentation
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and updates

---

## Support & Contact

### Getting Help

1. Check the relevant documentation file
2. Review troubleshooting section
3. Search GitHub issues
4. Contact support team

### Support Options

- **Email:** support@portfoliopro.dev
- **GitHub Issues:** [Report a bug](https://github.com/your-username/portfolio-pro/issues)
- **Documentation:** [Read the docs](./README.md)

### Feedback & Feature Requests

We'd love to hear your feedback! Share ideas at support@portfoliopro.dev

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

See CONTRIBUTING.md for detailed guidelines.

---

## Changelog

### Version 1.0.0 (Initial Release)

**Features:**
- Complete portfolio template
- Dynamic filtering and search
- Contact form with email integration
- Blog system ready
- SEO optimization
- Dark/light mode
- Fully responsive
- Production-ready code

See [CHANGELOG.md](./CHANGELOG.md) for detailed history.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

You are free to:
- Use commercially
- Modify the code
- Distribute copies
- Use privately

You must include:
- License notice
- Attribution to original author

---

## Acknowledgments

Built with modern web technologies and best practices:
- Next.js team for the amazing framework
- Vercel for hosting and deployment
- shadcn/ui for component library
- Tailwind Labs for CSS utility framework
- All open-source contributors

---

## Stay Updated

- **GitHub:** [Star on GitHub](https://github.com/your-username/portfolio-pro)
- **Email:** Subscribe to updates at support@portfoliopro.dev
- **Twitter:** [@portfoliopro](https://twitter.com/portfoliopro)

---

**Made with ❤️ for creative professionals**

Happy building! If you find this template useful, please consider giving it a star on GitHub.
