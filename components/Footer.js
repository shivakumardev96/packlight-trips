import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">PL</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">PackLight</span>
                <span className="font-display font-bold text-xl text-accent-500">Trips</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting unforgettable travel experiences across India. From Himalayan peaks to coastal escapes, we make adventure accessible to everyone.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm">FB</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm">YT</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <span className="text-sm">WA</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/tours" className="text-gray-400 hover:text-white transition-colors text-sm">All Tours</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Travel Blog</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Popular Destinations</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Kudremukh, Karnataka</span></li>
              <li><span className="text-gray-400 text-sm">Ladakh, J&K</span></li>
              <li><span className="text-gray-400 text-sm">Coorg, Karnataka</span></li>
              <li><span className="text-gray-400 text-sm">Rishikesh, Uttarakhand</span></li>
              <li><span className="text-gray-400 text-sm">Andaman Islands</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-0.5">📍</span>
                <span>Indiranagar, Bangalore, Karnataka 560038</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-0.5">📞</span>
                <span>+91 96326 90362</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-0.5">✉️</span>
                <span>hello@packlighttrips.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-400 mt-0.5">🕐</span>
                <span>Mon-Sat: 9 AM - 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 PackLight Trips. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
