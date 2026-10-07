import Link from 'next/link';
import { tours } from '../../../data/tours';
import TourCard from '../../../components/TourCard';
import { cancellationPolicy } from '../../../data/config';

export function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === parseInt(id));
  if (!tour) return { title: 'Tour Not Found' };
  return {
    title: `${tour.name} - PackLight Trips`,
    description: tour.description,
    openGraph: {
      title: tour.name,
      description: tour.description,
      images: [tour.image],
    },
  };
}

export default async function TourDetailPage({ params }) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === parseInt(id));

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

  const tourJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.name,
    description: tour.description,
    image: tour.image,
    provider: {
      '@type': 'TravelAgency',
      name: 'PackLight Trips',
      url: 'https://packlight-trips.vercel.app',
    },
    offers: {
      '@type': 'Offer',
      price: tour.price,
      priceCurrency: 'INR',
      availability: tour.spotsLeft && tour.spotsLeft <= 5 ? 'https://schema.org/LimitedAvailability' : 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tour.rating,
      reviewCount: tour.reviews,
    },
    location: {
      '@type': 'Place',
      name: tour.location,
    },
    touristType: tour.category,
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Schema Markup for Tour */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tourJsonLd) }}
      />

      {/* Hero Image */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="absolute inset-0 w-full h-full object-cover"
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
                      <span className="text-primary-600 text-lg" aria-hidden="true">✓</span>
                      <span className="text-gray-700 font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day-by-day Itinerary */}
              {tour.itinerary && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Day-by-day Itinerary</h2>
                  <div className="space-y-4">
                    {tour.itinerary.map((item, i) => (
                      <div key={i} className="border-l-4 border-primary-500 pl-4">
                        <h3 className="font-semibold text-gray-900">{item.day}: {item.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{item.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Meeting Point */}
              {tour.meetingPoint && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Meeting Point & Time</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700"><strong>Meeting Point:</strong> {tour.meetingPoint}</p>
                    {tour.meetingTime && <p className="text-gray-700 mt-2"><strong>Meeting Time:</strong> {tour.meetingTime}</p>}
                  </div>
                </div>
              )}

              {/* Inclusions */}
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What is Included</h2>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <ul className="space-y-3">
                    {tour.inclusions.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-sm flex-shrink-0" aria-hidden="true">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Not Included */}
              {tour.notIncluded && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What is Not Included</h2>
                  <div className="bg-red-50 rounded-2xl p-6">
                    <ul className="space-y-3">
                      {tour.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm flex-shrink-0" aria-hidden="true">✗</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Things to Carry */}
              {tour.thingsToCarry && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Things to Carry</h2>
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {tour.thingsToCarry.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-blue-600" aria-hidden="true">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Fitness Level */}
              {tour.fitnessLevel && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Fitness Level Required</h2>
                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <p className="text-gray-700">{tour.fitnessLevel}</p>
                  </div>
                </div>
              )}

              {/* Cancellation Summary */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="font-display text-xl font-bold text-gray-900 mb-3">Cancellation Policy</h2>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Full refund if cancelled {cancellationPolicy.fullRefundDays}+ days before trip</li>
                  <li>• {cancellationPolicy.partialRefundPercent}% refund if cancelled {cancellationPolicy.partialRefundDays}-{cancellationPolicy.fullRefundDays - 1} days before trip</li>
                  <li>• No refund if cancelled less than {cancellationPolicy.noRefundDays} days before trip</li>
                </ul>
                <Link href="/cancellation" className="text-primary-600 hover:text-primary-700 font-medium text-sm mt-3 inline-block">
                  Read full cancellation policy →
                </Link>
              </div>

              {/* Quick Info */}
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Quick Information</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1" aria-hidden="true">⏱️</div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{tour.duration}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1" aria-hidden="true">👥</div>
                    <div className="text-sm text-gray-500">Group Size</div>
                    <div className="font-semibold text-gray-900">{tour.groupSize}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1" aria-hidden="true">📅</div>
                    <div className="text-sm text-gray-500">Best Season</div>
                    <div className="font-semibold text-gray-900 text-sm">{tour.bestSeason}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1" aria-hidden="true">⭐</div>
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
                  {tour.originalPrice && (
                    <div className="text-sm text-gray-500 line-through">₹{tour.originalPrice.toLocaleString()}</div>
                  )}
                  <div className="font-display text-3xl font-bold text-gray-900">₹{tour.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">per person</div>
                </div>

                {/* Next Date */}
                <div className="bg-accent-50 rounded-xl p-4 mb-4 text-center">
                  <div className="text-sm text-accent-600 font-semibold">📅 Next Available Date</div>
                  <div className="font-display font-bold text-accent-700 text-lg">{tour.nextDate}</div>
                  {tour.spotsLeft && tour.spotsLeft <= 5 && (
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

                <Link
                  href={`/booking?tour=${encodeURIComponent(tour.name)}&date=${encodeURIComponent(tour.nextDate)}`}
                  className="btn-primary w-full block text-center"
                >
                  Book This Trip
                </Link>

                <a
                  href={`https://wa.me/919632690362?text=Hi!%20I'm%20interested%20in%20booking%20the%20${encodeURIComponent(tour.name)}%20(${encodeURIComponent(tour.nextDate)})%20for%20₹${tour.price.toLocaleString()}.%20Please%20share%20availability.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full block text-center mt-3"
                >
                  Book via WhatsApp
                </a>

                <Link href="/contact" className="block text-center mt-3 text-sm text-gray-500 hover:text-primary-600 transition-colors">
                  or send an inquiry instead
                </Link>

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
