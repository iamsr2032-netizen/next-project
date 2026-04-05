# Portfolio Pro - Customization Guide

This guide walks you through customizing Portfolio Pro to match your brand and content.

## Table of Contents
1. [Site Configuration](#site-configuration)
2. [Content Management](#content-management)
3. [Colors & Design](#colors--design)
4. [Typography](#typography)
5. [Navigation](#navigation)
6. [Contact Form](#contact-form)
7. [SEO Setup](#seo-setup)
8. [Advanced Customization](#advanced-customization)

## Site Configuration

Edit `config/site.ts` to customize basic site information:

```ts
export const siteConfig = {
  name: "Your Name or Company",
  description: "Your short description",
  url: "https://yoursite.com",
  ogImage: "https://yoursite.com/og.jpg",
  author: "Your Name",
  email: "hello@yoursite.com",
  
  nav: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  social: {
    twitter: "https://twitter.com/yourhandle",
    github: "https://github.com/yourname",
    linkedin: "https://linkedin.com/in/yourname",
    dribbble: "https://dribbble.com/yourname",
    instagram: "https://instagram.com/yourname",
  },

  contactEmail: "hello@yoursite.com",
  contactPhone: "+1 (555) 123-4567",
  contactLocation: "Your City, State",
}
```

## Content Management

### Portfolio Projects

Edit `data/portfolio.ts` to add your projects:

```ts
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Project Title",
    description: "Brief project description",
    image: "https://images.unsplash.com/photo-...",
    category: "Web Design",
    tags: ["React", "Tailwind", "Design"],
    link: "https://project-link.com",
    year: 2024,
  },
  // Add more projects...
]
```

**Categories available:** Web Design, Mobile App, Branding, UI/UX, Animation

### Blog Posts

Edit `data/blog.ts` to add blog content:

```ts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Blog Post Title",
    excerpt: "Short excerpt shown in list",
    content: "Full post content here...",
    author: "Your Name",
    category: "Design",
    tags: ["design", "tips"],
    image: "https://images.unsplash.com/photo-...",
    date: "2024-04-15",
    readingTime: 5,
  },
  // Add more posts...
]
```

### Testimonials

Edit `data/testimonials.ts` to add client testimonials:

```ts
export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Great work! Highly recommended.",
    author: "Client Name",
    role: "CEO",
    company: "Company Name",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ClientName",
    rating: 5,
  },
  // Add more testimonials...
]
```

### Services

Edit `data/services.ts` to customize your services:

```ts
export const services: Service[] = [
  {
    id: "web-design",
    title: "Web Design",
    description: "Beautiful, responsive websites...",
    features: [
      "Responsive Design",
      "Modern UI/UX",
      // ...
    ],
    icon: "🎨",
  },
  // Add more services...
]
```

## Colors & Design

### Update Color Palette

Edit `app/globals.css` to change colors:

```css
:root {
  /* Primary brand color */
  --primary: oklch(0.15 0.01 60);
  --primary-foreground: oklch(0.985 0.002 75);
  
  /* Accent color (highlights, buttons) */
  --accent: oklch(0.55 0.12 25);
  --accent-foreground: oklch(0.985 0.002 75);
  
  /* Neutral colors */
  --background: oklch(0.985 0.002 75);
  --foreground: oklch(0.12 0.01 60);
  --muted: oklch(0.94 0.005 75);
  --muted-foreground: oklch(0.45 0.01 60);
  
  /* Other semantic colors */
  --destructive: oklch(0.55 0.2 25);
  --border: oklch(0.90 0.005 75);
  --ring: oklch(0.55 0.12 25);
}

.dark {
  --primary: oklch(0.92 0.005 75);
  --background: oklch(0.08 0.01 60);
  --foreground: oklch(0.92 0.005 75);
  /* ... dark mode colors */
}
```

### Understanding OKLch Colors

Portfolio Pro uses OKLch color space:
- **First value (0-1):** Lightness
- **Second value:** Chroma (saturation)
- **Third value (0-360):** Hue (color angle)

Use [oklch.com](https://oklch.com) to generate colors easily.

## Typography

### Change Fonts

Edit `app/layout.tsx`:

```ts
import { Geist, Playfair_Display } from 'next/font/google'

const geist = Geist({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${geist.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
```

Edit `app/globals.css`:

```css
@theme inline {
  --font-sans: 'Geist', 'Geist Fallback';
  --font-display: 'Playfair Display', 'Playfair Display Fallback';
}
```

**Popular font combinations:**
- Geist + Playfair Display (current)
- Inter + Space Grotesk
- Poppins + Merriweather
- Work Sans + Lora

## Navigation

### Update Navigation Items

Edit `components/navbar.tsx` to customize the navigation:

```tsx
const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]
```

### Change Navbar Styling

Modify navbar variant in `app/page.tsx`:

```tsx
<Navbar variant="transparent" /> {/* or "solid" */}
```

## Contact Form

### Setup Email Service

The contact form API is in `app/api/contact/route.ts`.

#### Option 1: Resend (Recommended)

1. Install Resend:
```bash
pnpm add resend
```

2. Get API key from [resend.com](https://resend.com)

3. Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

4. Update `app/api/contact/route.ts`:
```ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  await resend.emails.send({
    from: 'noreply@yoursite.com',
    to: 'your@email.com',
    subject: `New contact from ${body.firstName}`,
    html: `<p>${body.message}</p>`,
  })
  
  return NextResponse.json({ success: true })
}
```

#### Option 2: Nodemailer

1. Install Nodemailer:
```bash
pnpm add nodemailer
```

2. Add credentials to `.env.local`:
```
EMAIL_USER=your@gmail.com
EMAIL_PASSWORD=your_app_password
```

3. Update contact API accordingly

### Customize Contact Form

Edit `components/contact-form.tsx` to change fields or validation.

## SEO Setup

### Update Meta Tags

Meta tags are in `app/layout.tsx`. Update:
- Title
- Description
- Open Graph image
- Twitter card image

### Add JSON Schema

Edit `lib/seo.ts` to customize structured data for search engines.

### Sitemap

Sitemap is auto-generated in `app/sitemap.ts`.

### RSS Feed

Blog RSS feed is at `/feed.xml`.

## Advanced Customization

### Add New Pages

1. Create file in `app/[name]/page.tsx`
2. Export async `generateMetadata` for SEO
3. Use existing components to build page

### Create Custom Components

Store new components in `components/` directory:

```tsx
// components/my-component.tsx
import { cn } from "@/lib/utils"

interface MyComponentProps {
  className?: string
}

export function MyComponent({ className }: MyComponentProps) {
  return (
    <div className={cn("base-styles", className)}>
      {/* Component content */}
    </div>
  )
}
```

### Modify Animations

Animation hooks are in `hooks/use-animations.ts`.

CSS animations are in `app/globals.css` (keyframes section).

### Database Integration

For storing blog posts or portfolio items:

1. Choose database (Supabase, Neon, etc.)
2. Create tables matching data interfaces
3. Update `data/` files to fetch from database

Example with Supabase:

```ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(url, key)

export async function getPortfolioProjects() {
  const { data } = await supabase
    .from('portfolio_projects')
    .select('*')
  return data
}
```

### Add Comments to Blog Posts

Popular options:
- Disqus
- Utterances
- Giscus (GitHub-based)

### Form Validation

Contact form uses React Hook Form + Zod. Customize validation:

```ts
const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  email: z.string().email(),
  // Add more fields...
})
```

## Deployment Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_URL=http://localhost:3000
RESEND_API_KEY=your_key_here
DATABASE_URL=your_database_url
```

For Vercel deployment, add these in Project Settings > Environment Variables.

## Performance Tips

1. Optimize images before uploading (use TinyPNG or similar)
2. Use Next.js Image component for all images
3. Add `loading="lazy"` to images below the fold
4. Keep blog post count reasonable (pagination coming soon)
5. Minimize custom fonts (currently using 2)

## Troubleshooting

### Images not loading
- Check image URL is accessible
- Use HTTPS URLs
- Ensure image dimensions are reasonable

### Form not submitting
- Check API route is accessible at `/api/contact`
- Verify email service credentials in `.env.local`
- Check browser console for errors

### Animations not working
- Ensure CSS is compiled (run `pnpm build`)
- Check browser supports CSS animations
- Verify animations.css is imported in globals.css

### Dark mode not toggling
- Check ThemeProvider in layout.tsx
- Verify next-themes is installed
- Check localStorage for 'theme' key

## Need Help?

- Check [README.md](./README.md) for overview
- Review example components in `app/`
- Check [Next.js docs](https://nextjs.org)
- Review [Tailwind docs](https://tailwindcss.com)

Happy customizing!
