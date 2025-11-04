import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import BlogPreview from './components/BlogPreview';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-sky-400 to-violet-500" />
            <span className="font-semibold">PastelPay</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-slate-700 sm:flex">
            <a href="#pricing" className="hover:text-sky-600">Pricing</a>
            <a href="#blog" className="hover:text-sky-600">Blog</a>
            <a href="#contact" className="hover:text-sky-600">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-white sm:inline-block">
              Sign in
            </button>
            <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Pricing />
        <BlogPreview />
        <ContactForm />
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
