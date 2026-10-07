'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { tours } from '../../data/tours';

function BookingForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourName: '',
    tourDate: '',
    participants: 1,
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    const tourName = searchParams.get('tour');
    const date = searchParams.get('date');
    if (tourName) {
      setFormData((prev) => ({ ...prev, tourName, tourDate: date || '' }));
      const tour = tours.find((t) => t.name === tourName);
      setSelectedTour(tour);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'tourName') {
      const tour = tours.find((t) => t.name === value);
      setSelectedTour(tour);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({
          name: '',
          email: '',
          phone: '',
          tourName: '',
          tourDate: '',
          participants: 1,
          message: '',
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!selectedTour) {
      setStatus({ type: 'error', message: 'Please select a tour first' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: selectedTour.price * formData.participants,
          receipt: `booking_${Date.now()}`,
          notes: {
            name: formData.name,
            phone: formData.phone,
            tour: selectedTour.name,
          },
        }),
      });

      const data = await res.json();

      if (data.success) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          const options = {
            key: data.keyId,
            amount: data.amount,
            currency: data.currency,
            name: 'PackLight Trips',
            description: selectedTour.name,
            order_id: data.orderId,
            handler: async function (response) {
              setStatus({
                type: 'success',
                message: `Payment successful! Payment ID: ${response.razorpay_payment_id}`,
              });
            },
            prefill: {
              name: formData.name,
              email: formData.email,
              contact: formData.phone,
            },
            theme: {
              color: '#16a34a',
            },
          };
          const rzp = new window.Razorpay(options);
          rzp.open();
        };
        document.body.appendChild(script);
      } else if (data.fallback) {
        setStatus({ type: 'info', message: data.error });
      } else {
        setStatus({ type: 'error', message: data.error || 'Payment failed' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Payment error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 md:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Book Your Trip
          </h1>
          <p className="text-gray-600">
            Fill in the form below and we will confirm your booking within 24 hours.
          </p>
        </div>

        {status.message && (
          <div
            className={`mb-6 p-4 rounded-xl text-center font-medium ${
              status.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="your@email.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Tour *
              </label>
              <select
                name="tourName"
                value={formData.tourName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Choose a tour</option>
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.name}>
                    {tour.name} - ₹{tour.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="text"
                name="tourDate"
                value={formData.tourDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="e.g., Nov 15-16, 2026"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Participants
            </label>
            <select
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'person' : 'people'}
                </option>
              ))}
            </select>
          </div>

          {/* Price Summary */}
          {selectedTour && (
            <div className="bg-primary-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-xs text-gray-500">
                    ₹{selectedTour.price.toLocaleString()} × {formData.participants}{' '}
                    {formData.participants === 1 ? 'person' : 'people'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-2xl font-bold text-primary-700">
                    ₹{(selectedTour.price * formData.participants).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              placeholder="Any special requirements or questions..."
            />
          </div>

          <div className="space-y-3">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Booking Request'}
            </button>

            {selectedTour && (
              <button
                type="button"
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay ₹${(selectedTour.price * formData.participants).toLocaleString()} Online`}
              </button>
            )}
          </div>

          <p className="text-center text-sm text-gray-500">
            By submitting, you agree to be contacted by PackLight Trips via phone, email, or WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-600">Loading booking form...</p>
        </div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
}
