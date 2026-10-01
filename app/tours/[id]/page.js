import Link from 'next/link';
import { tours } from '../../../data/tours';
import TourCard from '../../../components/TourCard';

export function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id.toString(),
  }));
}

export default function TourDetailPage({ params }) {
  const tour = tours.find((t) => t.id === parseInt(params.id));

  if (!tour) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-gray-900 mb-4">Tour Not Found</h1>
          <Link href="/tours" className="btn-primary">Back to Tours</Link>
        </div>
      </div>
    );
  }

  const relatedTours = tours.filter((t) => t.category === tour.category && t.id !== tour.id).slice(0, 3);

  const difficultyColor = {
    Easy: 'bg-green-100 text-green-700',
    'Easy to Moderate': 'bg-blue-100 text-blue-700',
    Moderate: 'bg-yellow-100 text-yellow-700',
    Difficult: 'bg-red-100 text-red-700',
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[tour.difficulty]}`}>
                {tour.difficulty}
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white">
                {tour.category.charAt(0).toUpperCase() + tour.category.slice(1)}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">{tour.name}</h1>
            <p className="text-white/80 text-lg">📍 {tour.location}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Trip Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 bg-primary-50 rounded-xl p-4">
                      <span className="text-primary-600 text-lg">✓</span>
                      <span className="text-gray-700 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What is Included</h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {tour.inclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-sm flex-shrink-0">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quick Info */}
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Quick Information</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">⏱️</div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{tour.duration}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">👥</div>
                    <div className="text-sm text-gray-500">Group Size</div>
                    <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">📅</div>
                    <div className="text-sm text-gray-500">Best Season</div>
                    <div className="font-semibold text-gray-900 text-sm">{tour.bestSeason}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="text-sm text-gray-500">Rating</div>
                    <div className="font-semibold text-gray-900">{tour.rating} ({tour.reviews})</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 line-through">₹{tour.originalPrice.toLocaleString()}</div>
                  <div className="font-display text-3xl font-bold text-gray-900">₹{tour.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                {/* Next Date */}
                <div className="bg-accent-50 rounded-xl p-4 mb-4 text-center">
                  <div className="text-sm text-accent-600 font-semibold">📅 Next Available Date</div>
                  <div className="font-display font-bold text-accent-700 text-lg">{tour.nextDate}</div>
                  {tour.spotsLeft <= 5 && (
                    <div className="text-red-500 text-sm font-semibold mt-1 animate-pulse">
                      🔥 Only {tour.spotsLeft} spots left!
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium text-gray-900">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Difficulty</span>
                    <span className="font-medium text-gray-900">{tour.difficulty}</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600">Group Size</span>
                    <span className="font-medium text-gray-900">{tour.groupSize}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/919632690362?text=Hi!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(tour.name)}%20(${encodeURIComponent(tour.nextDate)})%20for%20₹${tour.price.toLocaleString()}.%20Please%20share%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center"
                >
                  Book via WhatsApp
                </a>

                <a href="/contact" className="btn-secondary w-full block text-center mt-3">
                  Send Inquiry
                </a>

                <p className="text-center text-xs text-gray-500 mt-4">
                  No advance payment required to inquire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      {relatedTours.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-max">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-8">Related Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
