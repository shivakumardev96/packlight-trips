import BookingForm from './BookingForm';
import { tours } from '../../data/tours';
import { siteConfig } from '../../data/config';

export const metadata = {
  title: 'Book Your Trip - PackLight Trips',
  description: 'Book your trekking, road trip, or adventure travel experience with PackLight Trips. Easy online booking with instant confirmation.',
  openGraph: {
    title: 'Book Your Trip - PackLight Trips',
    description: 'Book your adventure travel experience with PackLight Trips.',
    url: `${siteConfig.url}/booking`,
  },
};

export default function BookingPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Book Your Trip
          </h1>
          <p className="text-gray-600">
            Fill in the form below and we will confirm your booking within 24 hours.
          </p>
        </div>

        {/* Server-rendered form shell */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <BookingForm tours={tours} />
        </div>

        {/* Fallback contact */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-3">Having trouble with the form?</p>
          <a
            href={`https://wa.me/919632690362?text=Hi!%20I%20want%20to%20book%20a%20trip%20with%20PackLight%20Trips.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Book via WhatsApp
          </a>
          <p className="text-gray-500 text-sm mt-3">
            or call us at <a href="tel:+919632690362" className="text-primary-600 hover:underline">{siteConfig.phone}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
