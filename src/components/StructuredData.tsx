import { useEffect } from 'react';

const StructuredData = () => {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "name": "Moon Studios – The Family Salon",
      "url": "https://moonstudiossalon.in/",
      "description": "Warm, family-friendly salon in Andheri East and Marol, Mumbai. Haircuts, Nanoplastia, Balayage, Hydra Medi Facial, Olaplex, facials, and grooming for women, men, and kids.",
      "image": "https://moonstudiossalon.in/og-image.jpg",
      "telephone": "+919004832184",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar",
        "addressLocality": "Andheri East",
        "addressRegion": "Maharashtra",
        "postalCode": "400072",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.114226682023627",
        "longitude": "72.88492991149732"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:30",
          "closes": "21:00"
        }
      ],
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
      "currenciesAccepted": "INR",
      "sameAs": [
        "https://maps.app.goo.gl/YqntQGMKfKekQMN69",
        "https://www.instagram.com/moonstudiossalon/",
        "https://www.facebook.com/people/Moon-Studios-The-Family-Salon/61579161101740/"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "545",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services offered",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Nanoplastia Hair Treatment",
              "description": "Signature treatment for frizzy, damaged hair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Balayage & Hair Coloring",
              "description": "Global color technique with precision blending"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Olaplex Hair Treatment",
              "description": "Advanced bond-building treatment for hair repair"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Haircut & Styling",
              "description": "Precision cuts for men, women, and kids"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facial & Skincare",
              "description": "Customized facial treatments for all skin types"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vegan Facial",
              "description": "Plant-based, organic formulation using cruelty-free botanical extracts."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Derma Glow Facial",
              "description": "Brightening skincare treatment using active dermatological ingredients."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hydra Medi Facial",
              "description": "Advanced medical-grade skin cleansing and hydration therapy."
            }
          }
        ]
      },
      "areaServed": [
        { "@type": "Place", "name": "Andheri East" },
        { "@type": "Place", "name": "Marol" },
        { "@type": "Place", "name": "Chakala" },
        { "@type": "Place", "name": "Powai" },
        { "@type": "Place", "name": "Saki Naka" },
        { "@type": "Place", "name": "Ghatkopar" },
        { "@type": "Place", "name": "Kurla" }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Monica",
          "jobTitle": "Founder & Head Consultant",
          "description": "Certified skincare consultant specializing in dermal barrier treatments, Hydra hydration, and organic vegan botanical therapies.",
          "knowsAbout": ["Dermal Facials", "Organic Skin Therapy", "Salon Management"]
        },
        {
          "@type": "Person",
          "name": "Shehzad",
          "jobTitle": "Lead Stylist & Hair Artisan",
          "description": "Master hair stylist with over 10 years of experience in formaldehyde-free Nanoplastia, Olaplex repair, and custom Balayage color mapping.",
          "knowsAbout": ["Nanoplastia", "Balayage", "Olaplex Restoration", "Precision Haircuts"]
        }
      ]
    };

    const servicesSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Nanoplastia Hair Treatment",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "offers": {
          "@type": "Offer",
          "price": "3999",
          "priceCurrency": "INR"
        },
        "description": "Signature treatment for frizzy, damaged hair — most praised in reviews."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Olaplex Hair Treatment",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "description": "Advanced bond-building treatment for hair repair."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Hair Coloring with Highlights and Balayage",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "description": "Global color & balayage technique with precision blending."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Vegan Facial",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "description": "Completely cruelty-free, organic skincare treatment using plant-based botanicals and natural extracts. Free from parabens and sulfates."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Derma Glow Facial",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "description": "Professional skin-brightening treatment using active ingredients like Vitamin C and Niacinamide to target tan and pigmentation."
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Hydra Medi Facial",
        "provider": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "description": "Advanced multi-step facial combining exfoliation, deep pore extraction, and customized skin hydration boosters."
      }
    ];

    const reviewsSchema = [
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "author": {
          "@type": "Person",
          "name": "Riddhima C."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-02-15",
        "reviewBody": "I couldn't be happier with the results of my hair highlights! The attention to detail and precision was outstanding. The color is perfectly blended, giving my hair a natural yet vibrant look that suits me perfectly."
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "author": {
          "@type": "Person",
          "name": "Anindita R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-03-15",
        "reviewBody": "I went for Nanoplastia treatment 2 days back and I am amazed by the service provided by Shehzad. Monica the owner is a sweetheart. The warmth here is unparalleled."
      },
      {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
          "@type": "HairSalon",
          "name": "Moon Studios"
        },
        "author": {
          "@type": "Person",
          "name": "Anannya D."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "datePublished": "2024-05-15",
        "reviewBody": "This is by far the best hair experience ever. Monica the owner is a sweetheart! Sadam was magical!! My hair has never looked better! Highly recommend Moon Studios."
      }
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Nanoplastia hair treatment and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nanoplastia is a formaldehyde-free hair treatment that uses nano-technology to reconstruct hair fibers. It works by penetrating the hair cuticle with amino acids and proteins to repair damage, eliminate frizz, and add shine. Results last 3-4 months with proper care."
          }
        },
        {
          "@type": "Question",
          "name": "How much does Nanoplastia cost at Moon Studios in Andheri East?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nanoplastia treatment at Moon Studios in Andheri East starts at ₹3,999 for shoulder-length hair. Pricing varies based on hair length and thickness. We offer a free consultation to assess your hair and provide an exact quote."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between Balayage and traditional highlights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Balayage is a free-hand painting technique that creates natural, sun-kissed highlights with softer regrowth lines. Unlike traditional foil highlights, Balayage gives a more blended, low-maintenance look that grows out beautifully. Our stylists specialize in customized Balayage for all hair types."
          }
        },
        {
          "@type": "Question",
          "name": "Is Moon Studios a family salon and what services do you offer for kids?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Moon Studios is a family salon in Andheri East offering services for all ages. Kids' haircuts start at ₹499 and include a gentle wash, age-appropriate styling, and a fun, welcoming experience. We use kid-friendly products and have experienced stylists who specialize in children's haircuts."
          }
        },
        {
          "@type": "Question",
          "name": "What are your opening hours and location in Marol, Andheri East?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moon Studios is located at Shop C13, Harmony Apartments, Krishanlal Marwah Marg, Ashok Nagar, Andheri East, Mumbai 400072. We're open all days from 9:30 AM to 9:00 PM. Easy access from Marol Naka and Andheri East metro stations."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Vegan Facial and what are its skin benefits?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Vegan Facial is a plant-based, cruelty-free skincare treatment using organic botanical extracts. It is free from animal by-products, parabens, and sulfates, making it highly effective at hydrating and soothing sensitive or irritated skin while being clean and eco-friendly."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Derma Glow Facial help with skin tan and pigmentation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Derma Glow Facial utilizes advanced active dermatological ingredients like Vitamin C, Niacinamide, and gentle AHAs/BHAs. It works by deeply exfoliating dead skin cells, inhibiting melanin production, and accelerating cell renewal to target tan, uneven skin tone, and dullness."
          }
        }
      ]
    };

    // Insert schemas into head
    const schemas = [localBusinessSchema, ...servicesSchema, ...reviewsSchema, faqSchema];
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.id = `structured-data-${index}`;
      document.head.appendChild(script);
    });

    // Cleanup on unmount
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default StructuredData;
