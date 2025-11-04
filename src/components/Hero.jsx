import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-gradient-to-b from-pink-50 via-sky-50 to-violet-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-28">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur">
          Modern Fintech SaaS
        </span>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 drop-shadow-sm sm:text-5xl md:text-6xl">
          Simple, pastel, and powerful.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Launch your digital banking or e‑commerce toolkit with a clean, minimalist interface and delightful 3D accents.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Get started
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
