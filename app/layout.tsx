import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Portfolio Pro - Premium Portfolio & Creative Agency Template',
  description: 'A premium, modern portfolio template crafted for designers, developers, and creative agencies. Features smooth animations, dynamic filtering, and conversion-optimized sections. Envato ThemeForest ready.',
  keywords: [
    'portfolio template',
    'creative portfolio',
    'agency template',
    'next.js template',
    'design template',
    'freelancer portfolio',
  ],
  authors: [{ name: 'Portfolio Pro', url: 'https://portfolio-pro.vercel.app' }],
  creator: 'Portfolio Pro',
  publisher: 'Portfolio Pro',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-pro.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-pro.vercel.app',
    title: 'Portfolio Pro - Premium Portfolio Template',
    description: 'A premium, modern portfolio template for creative professionals',
    siteName: 'Portfolio Pro',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Pro - Premium Portfolio Template',
    description: 'A premium, modern portfolio template for creative professionals',
    creator: '@portfoliopro',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
