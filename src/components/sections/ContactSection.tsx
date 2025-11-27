import { Mail, MessageCircle } from 'lucide-react';

const mailtoHref = 'mailto:imrulo.eth@proton.me?subject=Domain Inquiry - janeiro.ai&body=Hello%2C%20I%27m%20interested%20in%20acquiring%20the%20domain%20janeiro.ai.%20My%20name%20is%20%5BName%5D%20and%20I%20represent%20%5BCompany%5D.%20Could%20we%20discuss%20availability%20and%20pricing%3F';
const whatsappMessage = encodeURIComponent(
  "Hello, I'm interested in acquiring the domain janeiro.ai. My name is [Name] and I represent [Company]. Could we discuss availability and pricing?"
);
const whatsappHref = `https://wa.link/6difl3?text=${whatsappMessage}`;

export function ContactSection() {
  return (
    <section className="bg-slate-950/95 px-4 py-24 text-white sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto max-w-4xl space-y-10 rounded-3xl border border-white/5 bg-slate-950/60 p-10 shadow-2xl shadow-slate-900/80">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Contact</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Request availability</h2>
          <p className="text-base text-slate-300 sm:text-lg">
            Introduce your project, share who you are, and outline how you plan to activate janeiro.ai. All inquiries are answered privately.
          </p>
        </div>

        <ul className="space-y-3 text-sm text-slate-300">
          <li>• Include your name, company, and role.</li>
          <li>• Summarize your vision or go-to-market plans.</li>
          <li>• State your preferred timeline for acquisition.</li>
        </ul>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={mailtoHref}
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:border-amber-200/60 hover:bg-amber-200/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200/60"
            aria-label="Email to request availability for janeiro.ai"
          >
            <Mail aria-hidden="true" focusable="false" className="h-5 w-5" />
            Email introduction
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl border border-amber-200/40 bg-amber-400/20 px-6 py-4 text-base font-semibold text-amber-100 transition hover:border-amber-200 hover:bg-amber-300/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200/60"
            aria-label="Open WhatsApp to discuss janeiro.ai"
          >
            <MessageCircle aria-hidden="true" focusable="false" className="h-5 w-5" />
            WhatsApp inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

