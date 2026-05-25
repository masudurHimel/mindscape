import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Login — Coming Soon' }

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-5xl mb-5" aria-hidden="true">🔐</p>
        <h1 className="font-display text-4xl font-black text-navy-dark mb-3">Coming Soon</h1>
        <p className="text-body-gray mb-8">
          Student accounts are not yet available. We&rsquo;ll let you know when they launch.
        </p>
        <Link href="/" className="btn-primary inline-block">Back to Home</Link>
      </div>
    </div>
  )
}
