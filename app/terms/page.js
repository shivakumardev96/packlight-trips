export const metadata = {
  title: 'Terms & Conditions - PackLight Trips',
  description: 'Terms and Conditions for PackLight Trips. Read our terms of service for booking treks and adventure travel.',
};

export default function TermsPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Last updated: October 2026</p>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">1. Booking and Payment</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bookings are confirmed only after receiving the advance payment</li>
              <li>Remaining payment must be completed before the trip departure</li>
              <li>Prices are subject to change without prior notice</li>
              <li>Group discounts may be available for bookings of 5 or more people</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">2. Cancellation and Refund</h2>
            <p>
              Please refer to our <a href="/cancellation" className="text-primary-600 hover:underline">Cancellation Policy</a> for
              detailed information on refunds and cancellation timelines.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">3. Participant Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Participants must disclose any medical conditions before the trip</li>
              <li>Participants must follow the instructions of trek leaders and guides</li>
              <li>Participants must carry valid ID proof</li>
              <li>Participants must be physically fit for the chosen activity</li>
              <li>Consumption of alcohol or drugs during treks is strictly prohibited</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">4. Liability</h2>
            <p>
              PackLight Trips is not responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal injuries or accidents during the trip</li>
              <li>Loss or damage of personal belongings</li>
              <li>Delays caused by weather, natural disasters, or other unforeseen circumstances</li>
              <li>Medical emergencies (participants are advised to carry personal insurance)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">5. Safety</h2>
            <p>
              Safety is our top priority. All treks are led by certified guides. However, adventure activities
              carry inherent risks. Participants must:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Follow all safety briefings and guidelines</li>
              <li>Use provided safety equipment properly</li>
              <li>Stay with the group at all times</li>
              <li>Inform guides of any health issues immediately</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">6. Changes to Itinerary</h2>
            <p>
              We reserve the right to modify the itinerary due to weather conditions, safety concerns, or
              other unforeseen circumstances. We will notify participants of any changes as early as possible.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">7. Contact</h2>
            <p>For any questions regarding these terms, please contact us:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Phone: +91 96326 90362</li>
              <li>Email: hello@packlighttrips.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
