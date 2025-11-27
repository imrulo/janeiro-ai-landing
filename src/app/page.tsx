import SchemaMarkup from '@/components/SchemaMarkup';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhySection } from '@/components/sections/WhySection';
import { ApplicationsSection } from '@/components/sections/ApplicationsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { StickyCTA } from '@/components/StickyCTA';

const DOMAIN = 'janeiro.ai';
const HERO_IMAGE = 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=70';

export default function Home() {
  return (
    <>
      <SchemaMarkup
        domain={DOMAIN}
        description="Acquire janeiro.ai, a rare one-word .ai domain for ambitious AI, venture, and innovation firms. Intelligent beginnings for global brands."
        image={HERO_IMAGE}
      />

      <main className="min-h-screen bg-slate-950 text-white">
        <HeroSection domain={DOMAIN} />
        <WhySection />
        <ApplicationsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <StickyCTA />
    </>
  );
}
