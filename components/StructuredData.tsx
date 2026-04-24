type Props = { locale: "en" | "fr" };

const SITE_URL = "https://www.raarlifestyle.com";

export default function StructuredData({ locale }: Props) {
  const isFr = locale === "fr";

  const orgDescription = isFr
    ? "Maison de lifestyle et d'événements sur mesure basée à Dubaï — voyages, séjours, dining, bien-être, staffing et expériences rares, à travers le monde."
    : "A tailored luxury lifestyle & events management atelier based in Dubai — travel, stays, dining, wellness, staffing and rare experiences, worldwide.";

  const serviceDescription = isFr
    ? "Conciergerie privée et gestion d'événements sur mesure : hôtels, voyages, immobilier, dining, bien-être, santé, mode, art, beauté, staffing, polo & courses."
    : "Private concierge and bespoke events management: hotels, travel, real estate, dining, wellness, health, fashion, art, beauty, staffing, polo & racing.";

  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "RAAR Lifestyle",
      alternateName: "RAAR",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/apple-icon`,
        width: 180,
        height: 180,
      },
      description: orgDescription,
      foundingDate: "2021",
      founder: { "@id": `${SITE_URL}/#founder` },
      areaServed: ["Worldwide", "United Arab Emirates", "Morocco", "France"],
      sameAs: ["https://instagram.com/raarlifestyle"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "asmaa@raarlifestyle.com",
          contactType: "customer service",
          availableLanguage: ["en", "fr", "ar"],
          areaServed: "Worldwide",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Asmaa Hanine",
      jobTitle: isFr ? "Fondatrice et CEO" : "Founder & CEO",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      url: `${SITE_URL}${isFr ? "/fr" : "/"}#founder`,
      sameAs: ["https://instagram.com/raarlifestyle"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "RAAR Lifestyle",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: isFr ? "fr-FR" : "en-US",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: isFr
        ? "Conciergerie de luxe & événementiel sur mesure"
        : "Luxury concierge & bespoke events",
      description: serviceDescription,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
      serviceType: [
        "Concierge service",
        "Events management",
        "Travel planning",
        "Private staffing",
      ],
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
