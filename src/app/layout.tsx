import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Janeiro.ai – Premium AI Domain for Visionary Businesses',
  description:
    'Acquire janeiro.ai, a rare one-word .ai domain that captures intelligent beginnings for ambitious AI, venture, and innovation firms. Serious inquiries only.',
  keywords: [
    'AI domain',
    'premium domain',
    'brandable .ai',
    'tech brand name',
    'AI company domain',
    'startup domain',
  ],
  authors: [{ name: 'imrulo.eth' }],
  creator: 'imrulo.eth',
  publisher: 'imrulo.eth',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://janeiro.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Janeiro.ai – Premium AI Domain for Visionary Businesses',
    description:
      'Acquire janeiro.ai, a rare .ai domain for AI funds, innovation labs, and enterprise platforms seeking intelligent beginnings.',
    url: 'https://janeiro.ai',
    siteName: 'Janeiro.ai Domain Sale',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&h=630&q=70',
        width: 1200,
        height: 630,
        alt: 'janeiro.ai premium AI domain',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Janeiro.ai – Premium AI Domain for Visionary Businesses',
    description:
      'Acquire janeiro.ai, a rare one-word .ai domain for ambitious AI, venture, and innovation firms.',
    images: ['https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&h=630&q=70'],
    creator: '@imruloeth',
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
  category: 'technology',
  classification: 'Domain Sale',
  other: {
    'msapplication-TileColor': '#3b82f6',
    'theme-color': '#3b82f6',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#3b82f6" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="7LDhIbFJ9BQKiuG1JPJxyQ"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}