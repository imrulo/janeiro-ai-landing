const faqs = [
  {
    question: 'Is janeiro.ai an active product or just a domain?',
    answer:
      'janeiro.ai is currently showcased as a concept landing page to demonstrate the brand potential of the domain. The primary asset for sale is the domain itself. Visual concepts and content can be negotiated for buyers who want them.',
  },
  {
    question: 'Who is this domain ideal for?',
    answer:
      'Ambitious AI, venture, and innovation-focused organizations that want a memorable, global-ready brand. From AI funds and innovation labs to B2B AI platforms, janeiro.ai signals leadership from day one.',
  },
  {
    question: 'Is the price negotiable?',
    answer:
      'This is a premium, one-word .ai domain. We are open to serious, market-aligned offers from qualified buyers, discussed directly via email or WhatsApp.',
  },
  {
    question: 'What is included in the sale?',
    answer:
      'The sale includes the janeiro.ai domain name. Depending on the agreement, visual identity concepts, copy, and parts of the landing page can be negotiated as optional extras.',
  },
  {
    question: 'How do I make an offer?',
    answer:
      'Use the contact section to introduce yourself, your organization, and your intended use. We will respond directly to discuss availability and next steps.',
  },
];

export function FAQSection() {
  return (
    <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8" id="faq">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-200">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">Clarity first—no surprises for serious buyers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group rounded-2xl border border-white/5 bg-white/5 p-6">
              <summary className="cursor-pointer text-lg font-semibold text-white marker:text-amber-200">
                {question}
              </summary>
              <p className="mt-3 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

