import React from 'react';

interface SchemaMarkupProps {
  domain: string;
  price?: string;
  description: string;
  image?: string;
}

export default function SchemaMarkup({ domain, price, description, image }: SchemaMarkupProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": domain,
    "description": description,
    "image": image || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
    "brand": {
      "@type": "Brand",
      "name": "Janeiro.ai"
    },
    "offers": {
      "@type": "Offer",
      "price": price || "Contact for pricing",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": "imrulo.eth",
        "email": "imrulo.eth@proton.me"
      },
      "description": `Premium domain ${domain} for sale - Perfect for AI companies, tech startups, and innovative businesses.`
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
        "name": "What makes this domain so valuable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Janeiro.ai combines a premium .ai extension with a memorable, brandable name. The .ai TLD is specifically designed for artificial intelligence companies, while 'Janeiro' (Portuguese for January) suggests new beginnings and innovation - perfect for AI companies launching groundbreaking products."
        }
      },
      {
        "@type": "Question",
        "name": "Who is the ideal buyer for this asset?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perfect for AI startups, tech companies, venture capital firms, consulting agencies, and any business looking to establish authority in the artificial intelligence space. The domain works for both B2B and B2C companies in the AI ecosystem."
        }
      },
      {
        "@type": "Question",
        "name": "How does the secure transfer work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use Escrow.com for all transactions, ensuring both parties are protected. The process typically takes 5-7 business days: payment is held in escrow, domain is transferred to your account, and funds are released to us. You'll have full ownership and control immediately after transfer."
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
