import { Page, Text, Code, Link } from '@vercel/examples-ui'

export default function IndexPage() {
  return (
    <Page>
      <Text variant="h1" className="mb-6">
        Docs
      </Text>
      <Text className="mb-4">
        This is the index page in the docs app (
        <Code>apps/docs/app/docs/page.tsx</Code>).
      </Text>
      <Text>
        Navigations between <Link href="/docs">Docs</Link> and{' '}
        <Link href="/docs/about">About Docs</Link> are client-side transitions
        because they&apos;re part of the same Next.js app. Navigating to{' '}
        <a
          className="text-link hover:text-link-light transition-colors"
          href="/"
        >
          Home (Multi-Zones)
        </a>{' '}
        requires a page refresh because it lives in a different Next.js app.
      </Text>
    </Page>
  )
}
