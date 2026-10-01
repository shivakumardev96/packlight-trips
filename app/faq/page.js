'use client';

import { useState } from 'react';

const faqs = [
  {
    category: "Booking & Payment",
    questions: [
      {
        q: "How do I book a trip?",
        a: "You can book directly through our website by clicking 'Book Now' on any tour page, or contact us via WhatsApp/phone. We will confirm availability and send you a payment link. Your booking is confirmed once you pay the advance amount (typically 25-50%).",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept UPI, credit/debit cards, net banking, and bank transfer. International customers can pay via PayPal. All payments are processed through secure payment gateways (Razorpay/Stripe).",
      },
      {
        q: "What is your cancellation policy?",
        a: "Full refund (minus processing fees) if cancelled 15+ days before the trip. 50% refund if cancelled 7-14 days before. No refund if cancelled less than 7 days before the trip. Date changes are subject to availability and may incur a fee.",
      },
      {
        q: "Can I pay in installments?",
        a: "Yes! For trips above ₹10,000, we offer a 2-installment plan — 50% at booking and 50% two weeks before the trip. Contact us to set this up.",
      },
    ],
  },
  {
    category: "Trip Preparation",
    questions: [
      {
        q: "What fitness level do I need for your treks?",
        a: "Our treks are rated Easy, Moderate, and Difficult. Easy treks require basic fitness (able to walk 5-8 km). Moderate treks require regular exercise and ability to trek 8-12 km with elevation gain. Difficult treks require prior trekking experience and good cardiovascular fitness. Each trek page specifies the difficulty level.",
      },
      {
        q: "What should I pack for a trek?",
        a: "We provide a detailed packing list after booking. Essentials include: trekking shoes, backpack, water bottle, rain jacket, warm layers, personal medication, sunscreen, and a headlamp. We provide camping equipment (tents, sleeping bags) on multi-day treks.",
      },
      {
        q: "Do I need to bring my own camping equipment?",
        a: "No. We provide all shared camping equipment including tents, sleeping bags, cooking gear, and first aid kits. You only need to bring personal gear (clothing, shoes, toiletries, etc.).",
      },
      {
        q: "What is the group size?",
        a: "We keep groups small — typically 8-15 people for treks and 4-10 for road trips. This ensures a better experience, more attention from guides, and minimal environmental impact.",
      },
    ],
  },
  {
    category: "Safety & Logistics",
    questions: [
      {
        q: "Are your guides certified?",
        a: "Yes. All our trek leaders are certified by recognized mountaineering institutes (NIM, HMI, or equivalent). They are trained in wilderness first aid, CPR, and emergency response. Adventure sports instructors hold relevant certifications for their activities.",
      },
      {
        q: "What safety measures do you have in place?",
        a: "Every trip has: a certified first aid kit, emergency evacuation plan, satellite communication device in remote areas, and a support vehicle on road trips. We also conduct a safety briefing at the start of every trek.",
      },
      {
        q: "What happens in case of bad weather?",
        a: "Safety is our top priority. If weather conditions are dangerous, we will modify the itinerary or postpone the trip. In case of postponement, you can reschedule or receive a full refund.",
      },
      {
        q: "Is travel insurance included?",
        a: "Travel insurance is not included in our packages but we strongly recommend it. We can suggest affordable options that cover trekking up to 6,000m, medical emergencies, and trip cancellations.",
      },
    ],
  },
  {
    category: "General",
    questions: [
      {
        q: "Do you organize corporate trips?",
        a: "Yes! We specialize in corporate offsites, team-building adventures, and custom group trips. Contact us with your group size, dates, and preferences for a customized quote.",
      },
      {
        q: "Can I join a trip as a solo traveler?",
        a: "Absolutely! 60% of our travelers join solo. It is a great way to meet like-minded people. You will be paired with another solo traveler of the same gender for accommodation, or you can opt for a single occupancy at an additional cost.",
      },
      {
        q: "Do you offer customized/private trips?",
        a: "Yes, we do. Whether it is a private trek for your group, a customized road trip itinerary, or a special occasion celebration in the mountains — we can design it for you. Contact us with your requirements.",
      },
      {
        q: "How do I contact you?",
        a: "You can reach us via WhatsApp at +91 96326 90362, email at hello@packlighttrips.com, or through the contact form on our website. We typically respond within 2-4 hours during business hours (Mon-Sat, 9 AM - 7 PM).",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  let globalIndex = 0;

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80)' }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/90">
            Everything you need to know before your adventure
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-4xl">
          {faqs.map((section, sIndex) => (
            <div key={sIndex} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-sm">
                  {sIndex + 1}
                </span>
                {section.category}
              </h2>
              <div className="space-y-3">
                {section.questions.map((faq, qIndex) => {
                  const currentIndex = globalIndex++;
                  const isOpen = openIndex === currentIndex;
                  return (
                    <div
                      key={qIndex}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : currentIndex)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        <span className={`text-primary-600 text-xl flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-primary-50 rounded-2xl p-8 text-center mt-12">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">We are here to help! Reach out to us anytime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="https://wa.me/919632690362" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
