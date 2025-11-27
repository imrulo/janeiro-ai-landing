import { MessageCircle } from 'lucide-react';

const whatsappMessage = encodeURIComponent(
  "Hello, I'm interested in acquiring the domain janeiro.ai. My name is [Name] and I represent [Company]. Could we discuss availability and pricing?"
);

export function StickyCTA() {
  const whatsappHref = `https://wa.link/6difl3?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 transition duration-300 ease-out">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl shadow-emerald-500/30 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
        aria-label="WhatsApp inquiry for janeiro.ai"
      >
        <MessageCircle aria-hidden="true" focusable="false" className="h-4 w-4" />
        Live WhatsApp inquiry
      </a>
    </div>
  );
}

