"use client";
import Image from "next/image";
import { useState } from "react";

export default function ConnectWithUs() {
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState({ sending: false, ok: null, error: null });

  async function handleSubmit(e) {
    e.preventDefault();
    if (status.sending) return;
    setStatus({ sending: true, ok: null, error: null });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name.trim(),
          phone: formState.phone.trim(),
          email: formState.email.trim(),
          message: formState.message.trim(),
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Failed to send');
      setStatus({ sending: false, ok: true, error: null });
      setFormState({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setStatus({ sending: false, ok: false, error: err.message || 'Something went wrong' });
    }
  }
  return (
    <div className="w-full min-h-screen flex flex-col" style={{background: '#FCF5EF'}}>
      {/* Hero Section */}
      <div className="w-full flex items-center justify-center min-h-[220px] md:min-h-[320px] bg-gradient-to-b from-[#FEA735] to-[#FE7235]">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center">Connect With Us</h1>
      </div>
      {/* Contact Content Section */}
      <div className="w-full py-12 px-4 md:px-8" style={{background: '#FCF5EF'}}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-black">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Form */}
              <form className="flex flex-col gap-6 flex-1" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg text-black"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="flex-1 border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg text-black"
                    value={formState.phone}
                    onChange={(e) => setFormState(s => ({ ...s, phone: e.target.value }))}
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg text-black"
                  value={formState.email}
                  onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                  required
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="border-b-2 border-gray-200 focus:border-[#FEA735] outline-none py-2 px-2 text-lg resize-none text-black"
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  required
                />
                <div className="flex items-center justify-between mt-2">
                  <div className="text-sm">
                    {status.ok && <span className="text-green-600">Message sent successfully.</span>}
                    {status.error && <span className="text-red-600">{status.error}</span>}
                  </div>
                  <button
                    type="submit"
                    disabled={status.sending}
                    className="mt-4 w-40 bg-[#FEA735] hover:bg-[#FE7235] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 rounded-full self-end transition"
                  >
                    {status.sending ? 'Sending…' : 'Submit'}
                  </button>
                </div>
              </form>
              {/* Contact Info */}
              <div className="flex flex-col justify-center gap-6 text-black text-lg flex-1">
                <p className="mb-2">Your gateway to personalized assistance and expert guidance.<br/>Whether you have inquiries about our services.</p>
                <div>
                  <span className="font-semibold">Address:</span><br/>
                  901 McCune Road, Middle River, MD 21220
                </div>
                <div>
                  <span className="font-semibold">Email:</span><br/>
                  info@morningpeacefinancial.com
                </div>
                <div>
                  <span className="font-semibold">Phone:</span><br/>
                  443-297-7557
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Booking Section */}
      <div className="w-full bg-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Enhanced Header with Logo */}
            <div className="bg-gradient-to-r from-[#FEA735] to-[#FE7235] p-6 md:p-8 text-white">
              {/* Logo Section */}
              <div className="text-center mb-6">
                <img 
                  src="/src/img/Screenshot_2025-07-17_123817-removebg-preview.png" 
                  alt="Morning Peace Financial Services" 
                  className="h-24 md:h-32 w-auto mx-auto mb-4 drop-shadow-lg bg-white rounded-lg p-3"
                />
              </div>
              
              {/* Main Content */}
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-3">Schedule Your Free Consultation</h3>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                  Take the first step toward financial peace of mind with a personalized consultation from our licensed professionals
                </p>
                
                {/* Feature Badges */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base">
                  <div className="flex items-center gap-2 bg-white/25 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/30">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">30-60 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/25 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/30">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">100% Free</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/25 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full border border-white/30">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">No Obligations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar Content */}
            <div className="p-8">
              {/* What to Expect Section */}
              <div className="text-center mb-8">
                
                {/* Trust Statement */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-[#FEA735] max-w-3xl mx-auto">
                  <p className="text-gray-700 font-medium">
                    <span className="text-[#FE7235] font-semibold">Commitment to You:</span> This consultation is completely free with no pressure to purchase anything. Our goal is to provide you with valuable insights and help you make informed decisions about your financial future.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">Choose Your Preferred Time</h4>
                <p className="text-sm text-gray-600 mb-6 text-center">(GMT-04:00) Eastern Time - New York</p>
                {/* Calendar iframe placeholder */}
                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ23g0yG8Jw1BgQ0x3rgG3HkjogBHsoNTemdm97CCsOXC4z_SjTy9mTWsRuuGC6JwF1qRp4oODpa?gv=true" style={{border: '0', width: "100%", height: "600px", frameBorder: "0"}}></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
