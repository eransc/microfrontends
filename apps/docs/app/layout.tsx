import type { Metadata } from 'next'
import { PrefetchCrossZoneLinks } from '@acme/components/prefetch'
import { Sidebar } from '@acme/components/sidebar'
import { Layout } from '@vercel/examples-ui'
import '@vercel/examples-ui/globals.css'

export const metadata: Metadata = {
  title: 'Microfrontends - Docs',
  description: 'Example demonstrating vertical microfrontends on Vercel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <div className="flex">
          <Sidebar isDocsApp />
          <div className="flex-1 ml-64">
            <Layout title="Microfrontends" path="solutions/microfrontends">
              {children}
            </Layout>
          </div>
        </div>
        <PrefetchCrossZoneLinks hrefs={['/', '/about']} />
      </body>
    </html>
  )
}
