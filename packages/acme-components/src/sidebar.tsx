'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarProps {
  isDocsApp?: boolean
}

export function Sidebar({ isDocsApp = false }: SidebarProps) {
  const pathname = usePathname()

  const mainLinks = [
    { href: '/', label: 'Home', isExternal: false },
    { href: '/about', label: 'About', isExternal: false },
  ]

  const docsLinks = [
    { href: '/docs', label: 'Docs Home', isExternal: !isDocsApp },
    { href: '/docs/about', label: 'About Docs', isExternal: !isDocsApp },
  ]

  const dashboardCRALinks = [
    { href: '/dashboard-cra', label: 'Dashboard CRA', isExternal: false },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="overflow-y-auto fixed top-0 left-0 p-4 w-64 h-full bg-gray-50 border-r border-gray-200">
      <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Navigation</h2>
        <div className="text-sm text-gray-600">
          {isDocsApp ? 'Docs App' : 'Main App'}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-medium tracking-wide text-gray-700 uppercase">
          Main App
        </h3>
        <nav className="space-y-1">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
              {link.isExternal && (
                <span className="ml-1 text-xs text-gray-400">↗</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-medium tracking-wide text-gray-700 uppercase">
          Docs App
        </h3>
        <nav className="space-y-1">
          {docsLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
              {link.isExternal && (
                <span className="ml-1 text-xs text-gray-400">↗</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-medium tracking-wide text-gray-700 uppercase">
          Dashboard CRA
        </h3>
        <nav className="space-y-1">
          {dashboardCRALinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="pt-6 mt-auto border-t border-gray-200">
        <div className="text-xs text-gray-500">
          <div>Current path: {pathname}</div>
          <div className="mt-1">
            {isDocsApp ? 'Running on port 3001' : 'Running on port 3000'}
          </div>
        </div>
      </div>
    </div>
  )
} 