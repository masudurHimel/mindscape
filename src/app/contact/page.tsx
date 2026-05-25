import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Mindscape Academic Point — WhatsApp, phone, or visit us in Dhaka.',
}

const PHONE = '+8801610667603'
const WHATSAPP_URL = 'https://wa.me/8801610667603'

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="We're happy to answer questions about courses, batches, and enrolment."
      />

      <section className="bg-brand-surface py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:shadow-wa-green/10 transition-shadow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">
                💬
              </div>
              <p className="font-display font-bold text-navy-dark">WhatsApp</p>
              <p className="text-wa-green font-bold text-sm">{PHONE}</p>
              <p className="text-body-gray text-xs">Tap to open WhatsApp chat</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${PHONE}`}
              className="card-base p-6 flex flex-col items-center text-center gap-3 hover:shadow-lg hover:shadow-brand-blue/10 transition-shadow group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">
                📞
              </div>
              <p className="font-display font-bold text-navy-dark">Call Us</p>
              <p className="text-brand-blue font-bold text-sm">{PHONE}</p>
              <p className="text-body-gray text-xs">Available during batch hours</p>
            </a>
          </div>

          {/* Location */}
          <div className="card-base p-6 text-center">
            <p className="text-3xl mb-3" aria-hidden="true">📍</p>
            <p className="font-display font-bold text-navy-dark mb-1">Location</p>
            <p className="text-body-gray text-sm">Dhaka, Bangladesh</p>
            <p className="text-body-gray text-xs mt-2">
              Exact address shared upon enrolment enquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
