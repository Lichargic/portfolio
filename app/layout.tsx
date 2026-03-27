import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.lichargic.com'),
  title: 'Aman Malik',
  description: 'Full stack developer. I build things that work and care about how they feel to use.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aman Malik',
    description: 'Full stack developer. I build things that work and care about how they feel to use.',
    url: 'https://portfolio.lichargic.com',
    siteName: 'Aman Malik',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Malik',
    description: 'Full stack developer. I build things that work and care about how they feel to use.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmMono.variable} ${GeistSans.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div id="cursor-glow" aria-hidden="true" suppressHydrationWarning />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const g = document.getElementById('cursor-glow');
              if (g) {
                document.addEventListener('mousemove', (e) => {
                  g.style.left = e.clientX + 'px';
                  g.style.top = e.clientY + 'px';
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
