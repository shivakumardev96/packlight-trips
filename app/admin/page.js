'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [authenticated, activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'bookings') {
        const res = await fetch('/api/bookings');
        const data = await res.json();
        setBookings(data.bookings || []);
      } else {
        const res = await fetch('/api/admin/contacts');
        const data = await res.json();
        setContacts(data.contacts || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (id, newStatus) => {
    try {
      await fetch('/api/admin/bookings', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      fetchData();
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  if (!authenticated) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
          <h1 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Login
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Default password: admin123
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage bookings and contact messages</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="text-sm text-gray-600 hover:text-primary-600">
              ← Back to Website
            </Link>
            <button
              onClick={() => setAuthenticated(false)}
              className="text-sm text-red-600 hover:text-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'bookings'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeTab === 'contacts'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Contact Messages ({contacts.length})
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">⏳</div>
            <p className="text-gray-600">Loading...</p>
          </div>
        ) : activeTab === 'bookings' ? (
          <div className="space-y-4">
            {bookings.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="text-4xl mb-4">📋</div>
                <p className="text-gray-600">No bookings yet</p>
              </div>
            ) : (
              bookings.map((booking) => (
                <div key={booking.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.name}</h3>
                      <p className="text-gray-600 text-sm">{booking.tourName}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span>📞 {booking.phone}</span>
                        {booking.email && <span>✉️ {booking.email}</span>}
                        <span>📅 {booking.tourDate || 'Flexible'}</span>
                        <span>👥 {booking.participants}</span>
                      </div>
                      {booking.message && (
                        <p className="text-gray-600 text-sm mt-2 italic">"{booking.message}"</p>
                      )}
                      <p className="text-gray-400 text-xs mt-2">
                        {new Date(booking.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={booking.status}
                        onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                        className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="cancelled">Cancelled</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="text-4xl mb-4">✉️</div>
                <p className="text-gray-600">No contact messages yet</p>
              </div>
            ) : (
              contacts.map((contact) => (
                <div key={contact.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                      <p className="text-gray-600 text-sm">{contact.subject || 'General Inquiry'}</p>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span>✉️ {contact.email}</span>
                        {contact.phone && <span>📞 {contact.phone}</span>}
                      </div>
                      <p className="text-gray-700 text-sm mt-2">{contact.message}</p>
                      <p className="text-gray-400 text-xs mt-2">
                        {new Date(contact.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      contact.status === 'new' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {contact.status}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
