import { tours } from '../data/tours';

export default function sitemap() {
  const baseUrl = 'https://packlight-trips.vercel.app';

  const staticPages = [
    '',
    '/tours',
    '/about',
    '/blog',
    '/faq',
    '/contact',
    '/booking',
    '/privacy',
    '/terms',
    '/cancellation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const tourPages = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.id}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticPages, ...tourPages];
}
