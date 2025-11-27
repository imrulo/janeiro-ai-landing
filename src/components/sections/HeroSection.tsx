import Link from 'next/link';

const whatsappMessage = encodeURIComponent(
  "Hello, I'm interested in acquiring the domain janeiro.ai. My name is [Name] and I represent [Company]. Could we discuss availability and pricing?"
);

type HeroSectionProps = {
  domain: string;
  contactId?: string;
};

export function HeroSection({ domain, contactId = 'contact' }: HeroSectionProps) {
  const whatsappHref = `https://wa.link/6difl3?text=${whatsappMessage}`;

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at top, rgba(250, 204, 21, 0.25), transparent 45%)' }} />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[90vh] max-w-6xl flex-col items-start justify-center gap-10 px-4 py-24 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-200">
          Premium .ai asset • {domain.toLowerCase()}
        </span>

        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.1]">
            A domain for the AI leaders of tomorrow.
          </h1>
          <p className="max-w-3xl text-lg text-slate-200 sm:text-xl">
            {domain.toLowerCase()} is a rare, one-word .ai domain for ambitious AI, venture, and innovation firms. A name that signals intelligent beginnings,
            long-term vision, and global ambition.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-4 sm:flex-row">
          <Link
            href={`#${contactId}`}
            className="flex items-center justify-center rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
            aria-label="Request availability for janeiro.ai"
          >
            Request availability
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
            aria-label="Start a WhatsApp inquiry about janeiro.ai"
          >
            WhatsApp inquiry
          </a>
        </div>

        <p className="text-sm uppercase tracking-[0.3em] text-white/70">Premium asset • Serious inquiries only</p>
      </div>
    </section>
  );
}

