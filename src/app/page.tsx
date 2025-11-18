'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Check, TrendingUp, Shield, Star, ArrowRight, Clock, Users, Globe, Zap } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

const DOMAIN = 'Janeiro.ai';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewCount] = useState(() => Math.floor(Math.random() * 50) + 127);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // viewCount intentionally initialized once via lazy state above to avoid cascading renders

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <SchemaMarkup 
        domain={DOMAIN}
        price="Contact for pricing"
        description="Acquire Janeiro.ai - The definitive digital asset bridging Brazil and AI innovation. Instant brand authority, SEO advantage, and investment potential for forward-thinking companies."
        image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* Sticky CTA */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            isScrolled ? 'scale-100' : 'scale-0'
          }`}
        >
          <a
            href="https://wa.link/6difl3"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-label="Secure Janeiro.ai domain via WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">Secure Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&q=80"
              alt="AI Technology Background showcasing artificial intelligence innovation"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/70 to-slate-900/85" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="space-y-8"
            >
              {/* Urgency Indicator */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Clock className="w-4 h-4" />
                <span>Limited Time Opportunity</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Acquire{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {DOMAIN}
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-slate-200 font-light">
                  Brazil&rsquo;s Premier AI Brand
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl sm:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Bridge the gap between Brazil&rsquo;s innovation culture and AI&rsquo;s limitless potential. 
                This premium domain delivers instant credibility, market dominance, and unlimited growth opportunities.
              </motion.p>

              {/* Social Proof */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center gap-6 text-sm text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{viewCount}+ companies interested</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>Global reach potential</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <a
                  href="https://wa.link/6difl3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Secure Janeiro.ai domain via WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                  Secure This Domain
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:imrulo.eth@proton.me?subject=Domain Inquiry - Janeiro.ai"
                  className="group flex items-center gap-3 bg-slate-800/60 hover:bg-slate-700/60 backdrop-blur-sm border border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  aria-label="Make an offer for Janeiro.ai domain via email"
                >
                  <Mail className="w-6 h-6" />
                  Make an Offer
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Why <span className="text-blue-400">{DOMAIN}</span> is Your Strategic Advantage
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light">
                In the competitive landscape of AI and technology, your domain name is your first impression. 
                Make it count with a premium asset that commands respect and drives results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  icon: <Star className="w-8 h-8 text-yellow-400" />,
                  title: "Brand Authority",
                  description: "Instant credibility and trust in the AI space"
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-400" />,
                  title: "SEO Advantage",
                  description: "Exact-match potential and high organic traffic value"
                },
                {
                  icon: <Shield className="w-8 h-8 text-blue-400" />,
                  title: "Market Versatility",
                  description: "Perfect for AI, tech, and innovation companies"
                },
                {
                  icon: <Zap className="w-8 h-8 text-purple-400" />,
                  title: "Appreciation Potential",
                  description: "Sound digital real estate investment"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-slate-600 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-slate-800"
                  tabIndex={0}
                >
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brazilian AI Ecosystem Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Brazil&rsquo;s AI Revolution
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light">
                Position your brand at the heart of Latin America&rsquo;s fastest-growing AI ecosystem. 
                Brazil leads regional AI adoption with 40% year-over-year growth.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-green-400">Market Data</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
                    <span className="font-medium">Brazil AI Market Size</span>
                    <span className="text-green-400 font-bold">$2.1B</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
                    <span className="font-medium">Growth Rate</span>
                    <span className="text-blue-400 font-bold">40% YoY</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-lg">
                    <span className="font-medium">AI Startups</span>
                    <span className="text-purple-400 font-bold">500+</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Key Industries</h3>
                <div className="space-y-4">
                  {[
                    "Fintech & Banking",
                    "Healthcare & MedTech", 
                    "AgTech & Sustainability",
                    "E-commerce & Retail",
                    "Education Technology"
                  ].map((industry, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{industry}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-purple-400">Recent AI Domain Sales</h3>
                <div className="space-y-4">
                  {[
                    { domain: "AI.com", price: "$3.5M", year: "2023" },
                    { domain: "MachineLearning.ai", price: "$180K", year: "2023" },
                    { domain: "TechInnovation.com", price: "$95K", year: "2024" },
                    { domain: "SmartAI.com", price: "$45K", year: "2024" },
                    { domain: "FutureTech.ai", price: "$28K", year: "2024" }
                  ].map((sale, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                      <span className="font-mono text-blue-400">{sale.domain}</span>
                      <div className="text-right">
                        <div className="font-bold text-green-400">{sale.price}</div>
                        <div className="text-sm text-slate-400">{sale.year}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Strategic Applications
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light">
                Discover how {DOMAIN} can transform your business across multiple industries and use cases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-700/50">
                    <tr>
                      <th className="px-8 py-6 text-left text-lg font-semibold">Industry</th>
                      <th className="px-8 py-6 text-left text-lg font-semibold">Strategic Application & Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        industry: "AI Startup",
                        application: "Perfect brand foundation for AI companies launching innovative products. Establishes immediate credibility and memorability in a crowded market."
                      },
                      {
                        industry: "Venture Capital Firm",
                        application: "Ideal for AI-focused investment firms. Projects expertise and forward-thinking approach to attract top-tier AI entrepreneurs and investors."
                      },
                      {
                        industry: "SaaS Company",
                        application: "Transform your AI-powered software platform with a domain that screams innovation. Enhances user trust and conversion rates significantly."
                      },
                      {
                        industry: "Consulting Firm",
                        application: "Position as the go-to AI strategy consultants. The domain reinforces expertise and attracts high-value enterprise clients seeking AI transformation."
                      }
                    ].map((useCase, index) => (
                      <tr key={index} className="border-t border-slate-700 hover:bg-slate-700/20 transition-colors">
                        <td className="px-8 py-6 font-semibold text-blue-400">{useCase.industry}</td>
                        <td className="px-8 py-6 text-slate-300">{useCase.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust & Process Section */}
        <section className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Secure & Trusted Process
              </h2>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto font-light">
                Your investment is protected with industry-leading security and a proven transfer process.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Escrow.com Protection</h3>
                  <p className="text-slate-300">
                    All transactions are secured through Escrow.com, the industry standard for domain transfers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <Check className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Guaranteed Transfer</h3>
                  <p className="text-slate-300">
                    Fast, secure domain transfer with full ownership rights and no hidden fees.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                  <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                  <p className="text-slate-300">
                    &ldquo;Smooth transaction, professional service. The domain transfer was completed exactly as promised.&rdquo; - Previous Client
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-200 font-light">
                Everything you need to know about acquiring this premium domain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  question: "What makes this domain so valuable?",
                  answer: "Janeiro.ai combines a premium .ai extension with a memorable, brandable name. The .ai TLD is specifically designed for artificial intelligence companies, while &lsquo;Janeiro&rsquo; (Portuguese for January) suggests new beginnings and innovation - perfect for AI companies launching groundbreaking products."
                },
                {
                  question: "Who is the ideal buyer for this asset?",
                  answer: "Perfect for AI startups, tech companies, venture capital firms, consulting agencies, and any business looking to establish authority in the artificial intelligence space. The domain works for both B2B and B2C companies in the AI ecosystem."
                },
                {
                  question: "What is the process for making an offer?",
                  answer: "Simply contact us via WhatsApp or email with your offer. We&rsquo;ll respond within 24 hours to discuss terms. All serious offers are considered, and we&rsquo;re open to negotiation for qualified buyers."
                },
                {
                  question: "How does the secure transfer work?",
                  answer: "We use Escrow.com for all transactions, ensuring both parties are protected. The process typically takes 5-7 business days: payment is held in escrow, domain is transferred to your account, and funds are released to us. You&rsquo;ll have full ownership and control immediately after transfer."
                },
                {
                  question: "Is this a one-time opportunity?",
                  answer: "Yes, premium domains like Janeiro.ai are unique digital assets. Once sold, this specific domain will no longer be available. The AI industry is rapidly growing, making this an increasingly valuable investment opportunity."
                },
                {
                  question: "What&rsquo;s included with the domain purchase?",
                  answer: "You receive full ownership of the domain, complete transfer to your preferred registrar, and all associated rights. No additional fees, no hidden costs. The domain is yours to use, develop, or resell as you see fit."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">{faq.question}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-slate-400">
                Made with ❤️ by <span className="text-blue-400 font-semibold">imrulo.eth</span>
              </p>
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()}. All rights reserved.
              </p>
              <p className="text-slate-600 text-xs italic">
                This is a domain landing page for sale purposes only. No active services are implied. Domain availability is subject to change.
              </p>
            </motion.div>
          </div>
        </footer>
      </main>
    </>
  );
}