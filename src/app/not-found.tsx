'use client';

import Link from 'next/link';
import { Home, ArrowLeft, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-9xl font-bold text-slate-700 mb-4" aria-label="404 Error">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-slate-200 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="text-lg text-slate-400 mb-8">
          But don't worry! The <span className="text-blue-400 font-semibold">Janeiro.ai</span> domain is still available for purchase.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Return to Janeiro.ai homepage"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          <a
            href="https://wa.link/6difl3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Contact about Janeiro.ai domain via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
