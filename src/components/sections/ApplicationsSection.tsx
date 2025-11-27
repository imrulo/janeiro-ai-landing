import { Building2, Candle, Factory, Rocket, Workflow } from 'lucide-react';

const buyers = [
  {
    label: 'AI venture funds & investment vehicles',
    description: 'Signal long-term conviction in AI and frontier technologies from the very first pitch.',
    icon: Candle,
  },
  {
    label: 'Innovation labs & corporate AI hubs',
    description: 'Own a memorable identity for flagship enterprise programs and partnerships.',
    icon: Factory,
  },
  {
    label: 'B2B AI consulting or growth platforms',
    description: 'Communicate clarity, rigor, and premium advisory services with a single word.',
    icon: Workflow,
  },
  {
    label: 'Startup accelerators and incubators',
    description: 'Launch cohorts, demo days, and thought-leadership under a distinctive .ai brand.',
    icon: Rocket,
  },
  {
    label: 'Premium AI products targeting global markets',
    description: 'Pair a refined product experience with a domain that carries weight in any boardroom.',
    icon: Building2,
  },
];

export function ApplicationsSection() {
  return (
    <section className="bg-slate-950/95 px-4 py-24 text-white sm:px-6 lg:px-8" id="applications">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Use cases</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Built for ambitious AI and innovation brands</h2>
          <p className="mt-4 max-w-2xl text-base text-slate-300 sm:mx-auto sm:text-lg">
            Every buyer profile shares the same need: a name that immediately communicates intelligence, trust, and scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {buyers.map(({ label, description, icon: Icon }) => (
            <article key={label} className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/10 text-amber-200">
                <Icon aria-hidden="true" focusable="false" className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{label}</h3>
                <p className="mt-2 text-sm text-slate-300">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

