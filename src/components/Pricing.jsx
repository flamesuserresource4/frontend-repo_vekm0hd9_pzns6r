import React from 'react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    description: 'For trying things out',
    features: ['Up to 100 customers', 'Basic analytics', 'Community support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29',
    period: '/mo',
    description: 'For growing teams',
    features: ['Up to 5k customers', 'Advanced analytics', 'Priority support', 'Custom domains'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    period: '/mo',
    description: 'For scaling companies',
    features: ['Unlimited customers', 'Realtime events', 'SLA & SSO', 'Dedicated success'],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Pricing that scales with you
          </h2>
          <p className="mt-3 text-slate-600">
            Transparent plans with a soft pastel aesthetic — simple, modern, and friendly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 transition ${
                tier.highlight
                  ? 'border-sky-200 bg-sky-50/60 shadow-sm'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="mb-4 flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
              </div>
              <div className="mb-2 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">{tier.period}</span>
              </div>
              <p className="mb-6 text-sm text-slate-600">{tier.description}</p>
              <ul className="mb-8 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`w-full rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  tier.highlight
                    ? 'bg-sky-500 text-white hover:bg-sky-600'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
                onClick={() => alert(`Selected ${tier.name}`)}
              >
                Choose {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
