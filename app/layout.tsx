import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Header from './components/Header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/Footer'
import { BASE_URL } from './config'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'brhn.me',
    template: '%s | brhn.me',
  },
  description: 'This is personal website of K H M Burhan Uddin',
  openGraph: {
    title: 'brhn.me',
    description: 'This is personal website of K H M Burhan Uddin',
    url: BASE_URL,
    siteName: 'brhn.me',
    locale: 'en_US',
    type: 'website',
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </head>
      <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto flex flex-col min-h-screen">
        <Header />
        <main className="flex-auto flex flex-col mt-6 px-2 md:px-0">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
