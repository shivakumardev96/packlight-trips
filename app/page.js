import Link from 'next/link';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';
import { testimonials } from '../data/testimonials';
import { siteConfig, travelerCount, googleReviewsUrl } from '../data/config';

export const metadata = {
  title: 'PackLight Trips - Trekking, Road Trips & Adventure Travel from Bangalore',
  description: 'PackLight Trips offers curated trekking expeditions, road trips, camping, and adventure sports experiences from Bangalore. Explore the Western Ghats and Himalayas with expert guides.',
  openGraph: {
    title: 'PackLight Trips - Adventure Travel from Bangalore',
    description: 'Curated treks, road trips, and adventure experiences from Bangalore.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
};

export default function Home() {
  const featuredTours = tours.slice(0, 6);
  const totalReviews = tours.reduce((sum, t) => sum + t.reviews, 0);
  const avgRating = (tours.reduce((sum, t) => sum + t.rating, 0) / tours.length).toFixed(1);
  const destinations = new Set(tours.map((t) => t.location.split(',').pop().trim())).size;

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Adventure Awaits.<br />
            <span className="text-accent-400">Pack Light, Travel Far.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Curated treks, road trips, and adventure experiences from Bangalore.
            Explore the Western Ghats, Himalayas, and beyond with expert guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary text-lg">
              Explore Tours
            </Link>
            <Link href="/about" className="btn-secondary text-lg">
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-600">
                {travelerCount ? `${travelerCount}+` : '500+'}
              </div>
              <div className="text-gray-500 text-sm mt-1">Happy Travelers</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-600">{tours.length}+</div>
              <div className="text-gray-500 text-sm mt-1">Curated Tours</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-600">{destinations}+</div>
              <div className="text-gray-500 text-sm mt-1">Destinations</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-600">{avgRating}</div>
              <div className="text-gray-500 text-sm mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked adventures that promise unforgettable memories. From sunrise treks to road trips through paradise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/tours" className="btn-primary inline-block">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why PackLight Trips?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are not just a travel company — we are a community of passionate explorers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏔️', title: 'Expert Guides', desc: 'Certified trek leaders with 10+ years of experience in the mountains.' },
              { icon: '🛡️', title: 'Safety First', desc: 'Comprehensive safety protocols, first aid kits, and emergency support on every trip.' },
              { icon: '🌿', title: 'Eco-Friendly', desc: 'Responsible travel practices that minimize environmental impact and support local communities.' },
              { icon: '💰', title: 'Best Prices', desc: 'Transparent pricing with no hidden charges. Group discounts available.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from real adventurers who have explored with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-700">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-gray-500 text-sm">{t.city}</div>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">&ldquo;{t.text}&rdquo;</p>
                <div className="text-xs text-primary-600 font-medium">{t.trip}</div>
                {t.isSample && (
                  <div className="text-xs text-gray-400 mt-1 italic">Sample review</div>
                )}
              </div>
            ))}
          </div>
          {googleReviewsUrl && (
            <div className="text-center mt-8">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Read more reviews on Google →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join {travelerCount ? `${travelerCount}+` : '500+'} happy travelers who have explored the mountains with us.
            Your journey starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-primary text-lg">
              Browse Tours
            </Link>
            <Link href="/contact" className="btn-secondary text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
