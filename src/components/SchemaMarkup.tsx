import React from 'react';

interface SchemaMarkupProps {
  domain: string;
  description: string;
  image?: string;
}

export default function SchemaMarkup({ domain, description, image }: SchemaMarkupProps) {
  // Input validation - ensure all inputs are strings and not empty
  const safeDomain = typeof domain === 'string' ? domain.trim() : 'Janeiro.ai';
  const safeDescription = typeof description === 'string' ? description.trim() : '';
  const safeImage = (image && typeof image === 'string') ? image.trim() : "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop";
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": safeDomain,
    "description": safeDescription,
    "image": safeImage,
    "brand": {
      "@type": "Brand",
      "name": safeDomain.toLowerCase()
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "description": "Price upon request for qualified buyers"
      },
      "seller": {
        "@type": "Person",
        "name": "imrulo.eth",
        "email": "imrulo.eth@proton.me"
      },
      "description": `Premium domain ${safeDomain} for sale - ideal for AI funds, innovation labs, and global advisory firms.`
    },
    "category": "Domain Name",
    "keywords": ["AI domain", "artificial intelligence", "premium domain", "tech startup", "AI company", "machine learning"],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "TLD",
        "value": ".ai"
      },
      {
        "@type": "PropertyValue", 
        "name": "Domain Type",
        "value": "Premium"
      },
      {
        "@type": "PropertyValue",
        "name": "Transfer Method",
        "value": "Escrow.com"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is janeiro.ai an active product or just a domain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "janeiro.ai is presented as a concept landing page to showcase brand potential. The domain name is the primary asset for sale, with design assets negotiable for interested buyers."
        }
      },
      {
        "@type": "Question",
        "name": "Who is this domain ideal for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ambitious AI, venture, and innovation organizations that need a memorable, global-ready brand. From AI funds and innovation labs to B2B AI platforms, janeiro.ai signals leadership from day one."
        }
      },
      {
        "@type": "Question",
        "name": "How do I make an offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the email or WhatsApp links on the page to introduce yourself, your organization, and intended use. All serious inquiries receive a private response to discuss availability and pricing."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
