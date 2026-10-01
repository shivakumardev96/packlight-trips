import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'PackLight Trips - Trekking, Road Trips & Adventure Travel from Bangalore',
  description: 'PackLight Trips offers curated trekking expeditions, road trips, camping, and adventure sports experiences from Bangalore. Explore the Western Ghats and Himalayas with expert guides.',
  keywords: 'trekking bangalore, road trips india, adventure travel, camping trips, western ghats treks, himalayan treks, packlight trips',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
