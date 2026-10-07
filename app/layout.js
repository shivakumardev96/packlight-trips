import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { siteConfig } from '../data/config';

export const metadata = {
  title: {
    default: `${siteConfig.name} - Trekking, Road Trips & Adventure Travel from Bangalore`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: 'trekking bangalore, road trips india, adventure travel, camping trips, western ghats treks, himalayan treks, packlight trips',
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
