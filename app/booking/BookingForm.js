'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function BookingFormInner({ tours }) {
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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const tourName = searchParams.get('tour');
    const date = searchParams.get('date');
    if (tourName) {
      setFormData((prev) => ({ ...prev, tourName, tourDate: date || '' }));
      const tour = tours.find((t) => t.name === tourName);
      setSelectedTour(tour);
    }
  }, [searchParams, tours]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[+]?[\d\s-]{10,}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.tourName) newErrors.tourName = 'Please select a tour';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (name === 'tourName') {
      const tour = tours.find((t) => t.name === value);
      setSelectedTour(tour);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

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

  const handlePayment = () => {
    if (!selectedTour) {
      setStatus({ type: 'error', message: 'Please select a tour first' });
      return;
    }

    const totalAmount = selectedTour.price * formData.participants;
    const paymentUrl = `https://razorpay.me/@31807565?amount=${totalAmount}&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&contact=${encodeURIComponent(formData.phone)}&description=${encodeURIComponent(selectedTour.name)}`;

    window.open(paymentUrl, '_blank');
    setStatus({
      type: 'info',
      message: 'Opening payment page in a new tab. After payment, please submit the booking form below.',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.message && (
        <div
          className={`p-4 rounded-xl text-center font-medium ${
            status.type === 'success'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : status.type === 'error'
              ? 'bg-red-50 text-red-700 border border-red-200'
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}
          role="alert"
        >
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.name ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-200'
            }`}
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="tourName" className="block text-sm font-medium text-gray-700 mb-2">
            Select Tour *
          </label>
          <select
            id="tourName"
            name="tourName"
            value={formData.tourName}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              errors.tourName ? 'border-red-500' : 'border-gray-200'
            }`}
          >
            <option value="">Choose a tour</option>
            {tours.map((tour) => (
              <option key={tour.id} value={tour.name}>
                {tour.name} - ₹{tour.price.toLocaleString()}
              </option>
            ))}
          </select>
          {errors.tourName && <p className="text-red-500 text-xs mt-1">{errors.tourName}</p>}
        </div>
        <div>
          <label htmlFor="tourDate" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Date
          </label>
          <input
            type="text"
            id="tourDate"
            name="tourDate"
            value={formData.tourDate}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="e.g., Nov 15-16, 2026"
          />
        </div>
      </div>

      <div>
        <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-2">
          Number of Participants
        </label>
        <select
          id="participants"
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
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Message
        </label>
        <textarea
          id="message"
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
  );
}

function BookingFormSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-12 bg-gray-200 rounded-xl"></div>
        <div className="h-12 bg-gray-200 rounded-xl"></div>
      </div>
      <div className="h-12 bg-gray-200 rounded-xl"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-12 bg-gray-200 rounded-xl"></div>
        <div className="h-12 bg-gray-200 rounded-xl"></div>
      </div>
      <div className="h-12 bg-gray-200 rounded-xl"></div>
      <div className="h-24 bg-gray-200 rounded-xl"></div>
      <div className="h-12 bg-gray-200 rounded-xl"></div>
    </div>
  );
}

export default function BookingForm({ tours }) {
  return (
    <Suspense fallback={<BookingFormSkeleton />}>
      <BookingFormInner tours={tours} />
    </Suspense>
  );
}
