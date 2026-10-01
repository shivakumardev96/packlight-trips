const blogPosts = [
  {
    id: 1,
    title: "Kudremukh Trek: The Complete Guide for 2026",
    excerpt: "Everything you need to know about Karnataka's highest trek — difficulty, permits, best season, packing list, and pro tips.",
    category: "Trekking",
    readTime: "8 min read",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  },
  {
    id: 2,
    title: "10 Road Trips from Bangalore You Must Take Before You Turn 30",
    excerpt: "From coastal drives to mountain highways, these are the most scenic road trips starting from Bangalore.",
    category: "Road Trips",
    readTime: "10 min read",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
  {
    id: 3,
    title: "How to Choose Your First Trek: A Beginner's Handbook",
    excerpt: "New to trekking? This guide covers fitness preparation, gear essentials, and how to pick the right first trek.",
    category: "Beginners",
    readTime: "6 min read",
    date: "Jan 5, 2026",
    image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
  },
  {
    id: 4,
    title: "Ladakh by Road: The Ultimate 7-Day Itinerary",
    excerpt: "The complete Leh-Ladakh road trip plan — routes, acclimatization, fuel stops, and the best campsites.",
    category: "Road Trips",
    readTime: "12 min read",
    date: "Dec 28, 2025",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: 5,
    title: "Leave No Trace: How We Practice Sustainable Trekking",
    excerpt: "Our commitment to eco-friendly travel and how you can minimize your impact on the mountains.",
    category: "Sustainability",
    readTime: "5 min read",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    id: 6,
    title: "Winter Treks in India: Top 5 Destinations for December-February",
    excerpt: "Snow-covered trails, frozen waterfalls, and the magic of Himalayan winter treks.",
    category: "Trekking",
    readTime: "7 min read",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Travel Blog</h1>
          <p className="text-lg text-white/90">
            Stories, guides, and tips from the mountains
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-primary-600 font-medium text-sm flex items-center gap-1 cursor-pointer group-hover:gap-2 transition-all">
                    Read More →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
