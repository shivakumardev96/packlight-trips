import Link from 'next/link';
import { socialLinks, siteConfig } from '../data/config';

export default function Footer() {
  const socials = [
    { key: 'instagram', label: 'Instagram', short: 'IG', url: socialLinks.instagram },
    { key: 'facebook', label: 'Facebook', short: 'FB', url: socialLinks.facebook },
    { key: 'youtube', label: 'YouTube', short: 'YT', url: socialLinks.youtube },
    { key: 'whatsapp', label: 'WhatsApp', short: 'WA', url: socialLinks.whatsapp },
  ].filter((s) => s.url);

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
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <span className="text-sm">{social.short}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/tours" className="text-gray-400 hover:text-white transition-colors text-sm">All Tours</Link></li>
              <li><Link href="/booking" className="text-gray-400 hover:text-white transition-colors text-sm">Book Now</Link></li>
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
                <span aria-hidden="true" className="text-accent-400 mt-0.5">📍</span>
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="text-accent-400 mt-0.5">📞</span>
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="text-accent-400 mt-0.5">✉️</span>
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="text-accent-400 mt-0.5">🕐</span>
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/cancellation" className="hover:text-white transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
