import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="contact" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Contact us
          </h2>
          <p className="mt-3 text-slate-600">
            Questions about pricing, authentication, or integrations? We’d love to help.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-pink-50 p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="jane@company.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                placeholder="Tell us a bit about your project..."
              />
            </div>
            <div className="sm:col-span-2 mt-2 flex items-center justify-between">
              <p className="text-sm text-slate-600">
                We’ll get back to you within 1–2 business days.
              </p>
              <button
                type="submit"
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Send message
              </button>
            </div>
            {status === 'success' && (
              <div className="sm:col-span-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 ring-1 ring-emerald-200">
                Thanks! Your message has been captured. We’ll wire this to the backend next.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
