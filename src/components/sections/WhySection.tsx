import { Compass, Globe2, Layers3, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: 'Intelligent beginnings',
    description:
      '“Janeiro” evokes January—the start of a new cycle. It is a powerful metaphor for innovation, AI adoption, and business transformation.',
    icon: Sparkles,
  },
  {
    title: 'Global and memorable',
    description:
      'Simple, elegant, and easy to pronounce across languages. Perfect for international branding, investor updates, and earned media.',
    icon: Globe2,
  },
  {
    title: 'Built for B2B',
    description:
      'Strong enough for venture funds, AI platforms, innovation labs, or strategic consulting firms that need a name with gravitas.',
    icon: Layers3,
  },
  {
    title: 'Optionally Brazilian',
    description:
      'For buyers focused on Latin America, the name nods to Rio de Janeiro—without locking the brand into any single geography.',
    icon: Compass,
  },
];

export function WhySection() {
  return (
    <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8" id="why">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Positioning</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Why “Janeiro” works as a brand</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:mx-auto sm:text-lg">
            A singular name that carries both heritage and future-forward energy, ready for any AI or innovation narrative.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_0_30px_rgba(15,23,42,0.4)] transition hover:border-amber-200/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-amber-200">
                <Icon aria-hidden="true" focusable="false" className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

