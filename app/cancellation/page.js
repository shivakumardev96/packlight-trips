export const metadata = {
  title: 'Cancellation Policy - PackLight Trips',
  description: 'Cancellation and Refund Policy for PackLight Trips. Understand our cancellation terms for trekking and adventure travel bookings.',
};

export default function CancellationPage() {
  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">Cancellation Policy</h1>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Last updated: October 2026</p>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">1. Cancellation by Participant</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
                <div>
                  <p className="font-semibold text-gray-900">15+ days before trip</p>
                  <p className="text-gray-600">Full refund (minus processing fees)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">B</span>
                <div>
                  <p className="font-semibold text-gray-900">7-14 days before trip</p>
                  <p className="text-gray-600">50% refund</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">C</span>
                <div>
                  <p className="font-semibold text-gray-900">Less than 7 days before trip</p>
                  <p className="text-gray-600">No refund</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              TODO: Confirm these percentages and time windows with your business requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">2. Cancellation by PackLight Trips</h2>
            <p>
              We reserve the right to cancel a trip due to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Insufficient number of participants</li>
              <li>Adverse weather conditions</li>
              <li>Natural disasters or unforeseen circumstances</li>
              <li>Safety concerns</li>
            </ul>
            <p className="mt-3">
              In such cases, participants will receive a full refund or the option to reschedule.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">3. Rescheduling</h2>
            <p>
              Participants may reschedule their booking to another available date, subject to availability.
              Rescheduling requests must be made at least 7 days before the original trip date.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">4. Refund Process</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Refunds will be processed within 7-10 business days</li>
              <li>Refunds will be credited to the original payment method</li>
              <li>Processing fees (if applicable) will be deducted from the refund amount</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">5. No-Show Policy</h2>
            <p>
              Participants who fail to report at the designated meeting point on time will be considered
              as no-show and will not be eligible for any refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-gray-900 mb-3">6. Contact for Cancellations</h2>
            <p>To request a cancellation or reschedule, please contact us:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Phone/WhatsApp: +91 96326 90362</li>
              <li>Email: hello@packlighttrips.com</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
