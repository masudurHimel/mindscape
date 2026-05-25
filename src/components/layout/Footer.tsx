import Link from 'next/link'

const PHONE = '+8801610667603'
const WHATSAPP_URL = 'https://wa.me/8801610667603'

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-footer py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display font-black text-white text-base">
              Mindscape Academic Point
            </p>
            <p className="text-white/40 text-xs mt-1">Est. 2019 · Dhaka, Bangladesh</p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="text-white/50 hover:text-white text-xs transition-colors"
            >
              {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wa-green hover:text-green-400 text-xs font-bold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Mindscape Academic Point. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
