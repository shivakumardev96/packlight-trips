export const metadata = {
  title: 'Privacy Policy - PackLight Trips',
  description: 'Privacy Policy for PackLight Trips. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Last updated: October 2026</p>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and contact details (phone number, email address)</li>
              <li>Booking information (tour selection, dates, number of participants)</li>
              <li>Communication records (messages sent through our contact form or WhatsApp)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process and manage your bookings</li>
              <li>Communicate with you about your trips</li>
              <li>Send trip updates and important information</li>
              <li>Improve our services and customer experience</li>
              <li>Respond to your inquiries and requests</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your
              information only with:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tour operators and guides involved in your trip</li>
              <li>Payment processors (for online payments)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access,
              alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Phone: +91 96326 90362</li>
              <li>Email: hello@packlighttrips.com</li>
              <li>Address: Indiranagar, Bangalore, Karnataka 560038</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
