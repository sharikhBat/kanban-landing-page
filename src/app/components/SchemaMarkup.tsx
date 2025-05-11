import Script from 'next/script';

export default function SchemaMarkup() {
  // FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is React Kanban Board?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "React Kanban Board is a lightweight, drag-and-drop Kanban board component built with React. It's designed to be easy to install, customize, and integrate into your React applications."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The full version costs $30 for lifetime access, with no subscription or hidden fees. There is also a free lite version available."
        }
      },
      {
        "@type": "Question",
        "name": "Does it support drag and drop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The full version provides seamless drag and drop functionality using React DnD, allowing users to move cards between columns with intuitive interactions."
        }
      },
      {
        "@type": "Question",
        "name": "Is it responsive?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. The Kanban board is fully responsive and works beautifully on both mobile and desktop devices, with layouts that adapt automatically to different screen sizes."
        }
      }
    ]
  };

  // Product review schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "React Kanban Board with Drag & Drop",
    "description": "A lightweight, drag-and-drop Kanban board built with React.",
    "image": "https://your-domain.com/images/kanban-preview.jpg",
    "sku": "RKB001",
    "mpn": "RKB2023",
    "brand": {
      "@type": "Brand",
      "name": "React Kanban"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John Developer"
      },
      "reviewBody": "This Kanban board component saved me hours of development time. The drag and drop feels natural and it was incredibly easy to customize to match our app's design."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "124"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.privjs.com/packages/react-dnd-kanban-board",
      "priceCurrency": "USD",
      "price": "30.00",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    }
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://your-domain.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "React Components",
        "item": "https://your-domain.com/components"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "React Kanban Board",
        "item": "https://your-domain.com"
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
} 