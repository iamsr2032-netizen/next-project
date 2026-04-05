import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://portfolio-pro.vercel.app'

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = '/',
  image?: string
): Metadata {
  const fullTitle = `${title} | Portfolio Pro`
  const url = `${baseUrl}${path}`

  return {
    title: fullTitle,
    description,
    canonical: url,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title: fullTitle,
      description,
      siteName: 'Portfolio Pro',
      images: image ? [{ url: image, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export function generateSchemaMarkup(
  type: 'Organization' | 'LocalBusiness' | 'Person' | 'WebPage',
  data: Record<string, any>
) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  return JSON.stringify({ ...baseSchema, ...data })
}

export const organizationSchema = generateSchemaMarkup('Organization', {
  name: 'Portfolio Pro',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description: 'Premium portfolio template for creative professionals',
  sameAs: [
    'https://twitter.com/portfoliopro',
    'https://linkedin.com/company/portfolio-pro',
    'https://github.com/portfolio-pro',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Sales',
    email: 'hello@portfoliopro.com',
    telephone: '+1-555-000-0000',
  },
})

export const localBusinessSchema = generateSchemaMarkup('LocalBusiness', {
  name: 'Portfolio Pro',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Design Street',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94103',
    addressCountry: 'US',
  },
  telephone: '+1-555-000-0000',
  image: `${baseUrl}/og-image.png`,
})

export const personSchema = generateSchemaMarkup('Person', {
  name: 'Portfolio Pro',
  url: baseUrl,
  image: `${baseUrl}/profile.png`,
  sameAs: [
    'https://twitter.com/portfoliopro',
    'https://linkedin.com/in/portfoliopro',
  ],
})

// Structured data for breadcrumbs
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  })
}

// Structured data for portfolio items
export function generatePortfolioItemSchema(
  title: string,
  description: string,
  image: string,
  url: string,
  date: string,
  category: string
) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description,
    image,
    url,
    datePublished: date,
    keywords: category,
    author: {
      '@type': 'Organization',
      name: 'Portfolio Pro',
      url: baseUrl,
    },
  })
}

// Structured data for blog posts
export function generateBlogPostSchema(
  title: string,
  description: string,
  image: string,
  url: string,
  date: string,
  author: string,
  content: string
) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: author,
    },
    articleBody: content,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: 'Portfolio Pro Blog',
      url: `${baseUrl}/blog`,
    },
  })
}
