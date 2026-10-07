export const metadata = {
  title: 'About Us - PackLight Trips',
  description: 'Learn about PackLight Trips, a Bangalore-based adventure travel company founded by passionate trekkers. Meet our team and discover our values.',
};

export default function AboutPage() {
  const team = [
    { name: 'Arjun Kumar', role: 'Founder & Lead Guide', avatar: 'AK', bio: 'Mountaineer with 15+ years of trekking experience across the Himalayas and Western Ghats.' },
    { name: 'Sneha Rao', role: 'Operations Head', avatar: 'SR', bio: 'Travel industry veteran ensuring every trip runs smoothly from booking to return.' },
    { name: 'Karthik Shetty', role: 'Adventure Specialist', avatar: 'KS', bio: 'Certified rock climbing and rafting instructor. Designs our adventure sports itineraries.' },
    { name: 'Divya Nair', role: 'Community Manager', avatar: 'DN', bio: 'Builds our traveler community and manages social media. The voice behind PackLight Trips.' },
  ];

  const values = [
    { icon: '🏔️', title: 'Passion for Mountains', desc: 'We are trekkers first. Every trip is designed by people who have actually walked the trails.' },
    { icon: '🤝', title: 'Community Over Commerce', desc: 'We believe in building a family of travelers, not just a customer base.' },
    { icon: '🌱', title: 'Sustainable Travel', desc: 'Leave No Trace principles on every trip. We give back to the mountains we explore.' },
    { icon: '🛡️', title: 'Safety is Non-Negotiable', desc: 'Certified guides, quality equipment, and emergency protocols on every single trip.' },
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About PackLight Trips</h1>
          <p className="text-lg text-white/90">
            A community of passionate explorers making adventure travel accessible to everyone
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PackLight Trips was born in 2019 around a campfire in the Western Ghats. A group of friends,
                  bonded by their love for trekking, realized that planning an adventure trip in India was
                  unnecessarily complicated — unreliable operators, hidden costs, and zero community.
                </p>
                <p>
                  We started with a simple mission: <strong>create a travel company we would want to travel with.</strong>
                  One that prioritizes safety, transparency, and genuine human connection over profits.
                </p>
                <p>
                  Today, we have taken over 500 travelers on 50+ curated experiences across India — from the
                  misty peaks of Kudremukh to the high passes of Ladakh. But our philosophy remains the same:
                  small groups, expert guides, and memories that last a lifetime.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80)' }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏔️</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Since 2019</div>
                  <div className="text-sm text-gray-500">500+ happy travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every trip we organize
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The people who make every PackLight Trips experience unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{member.avatar}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-gray-900">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Join the PackLight Family
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Whether you are a seasoned trekker or a first-time adventurer, we have the perfect trip for you.
          </p>
          <a href="/tours" className="inline-block bg-white text-primary-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
            Explore Our Tours
          </a>
        </div>
      </section>
    </div>
  );
}
