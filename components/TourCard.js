import Link from 'next/link';

export default function TourCard({ tour }) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-700',
    'Easy to Moderate': 'bg-blue-100 text-blue-700',
    Moderate: 'bg-yellow-100 text-yellow-700',
    Difficult: 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${tour.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColor[tour.difficulty]}`}>
            {tour.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-bold text-gray-900">₹{tour.price.toLocaleString()}</span>
          <span className="text-xs text-gray-500 line-through ml-1">₹{tour.originalPrice.toLocaleString()}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display font-bold text-xl text-white mb-1">{tour.name}</h3>
          <p className="text-white/80 text-sm flex items-center gap-1">
            <span>📍</span> {tour.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">⏱️ {tour.duration}</span>
          <span className="flex items-center gap-1">👥 {tour.groupSize}</span>
        </div>

        {/* Next Date & Spots */}
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-accent-50 text-accent-700 px-3 py-1 rounded-full text-xs font-semibold">
            📅 {tour.nextDate}
          </span>
          {tour.spotsLeft <= 5 && (
            <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              🔥 Only {tour.spotsLeft} spots left!
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold text-gray-900">{tour.rating}</span>
            <span className="text-gray-400 text-sm">({tour.reviews})</span>
          </div>
          <Link
            href={`/tours/${tour.id}`}
            className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center gap-1 group"
          >
            View Details
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
