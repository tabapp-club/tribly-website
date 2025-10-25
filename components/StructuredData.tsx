"use client";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tribly",
    "description": "India's leading AI-powered customer engagement and retention platform. Boost customer retention, automate WhatsApp marketing, and grow your business.",
    "url": "https://tribly.ai",
    "logo": "https://tribly.ai/images/logo.png",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Tribly Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": ["Andhra Pradesh", "Telangana", "Karnataka"],
      "addressLocality": ["Hyderabad", "Bengaluru", "Vijayawada", "Visakhapatnam"]
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/tribly",
      "https://twitter.com/tribly",
      "https://www.facebook.com/tribly"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Customer Engagement Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WhatsApp Automation",
            "description": "Automated WhatsApp marketing and customer engagement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer Retention",
            "description": "AI-powered customer retention strategies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Automation",
            "description": "Automated marketing campaigns and customer engagement"
          }
        }
      ]
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tribly",
    "description": "AI-powered customer engagement and retention platform for businesses in India",
    "url": "https://tribly.ai",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "2999",
      "priceCurrency": "INR",
      "description": "Starting from ₹2,999 per month"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "20",
      "bestRating": "5"
    },
    "featureList": [
      "WhatsApp Automation",
      "Customer Retention",
      "AI-Powered Engagement",
      "Marketing Automation",
      "Customer Data Management",
      "Analytics & Insights"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tribly",
    "description": "Customer engagement and retention platform serving businesses across India",
    "url": "https://tribly.ai",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "17.3850",
        "longitude": "78.4867"
      },
      "geoRadius": "1000000"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Andhra Pradesh"
      },
      {
        "@type": "State", 
        "name": "Telangana"
      },
      {
        "@type": "City",
        "name": "Bengaluru"
      },
      {
        "@type": "City",
        "name": "Hyderabad"
      }
    ],
    "serviceType": "Customer Engagement Platform"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
