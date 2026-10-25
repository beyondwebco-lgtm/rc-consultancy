import { companyData } from "@/data/company";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${companyData.contact.website}/#organization`,
    name: companyData.name,
    legalName: companyData.name,
    alternateName: companyData.seoLockup,
    url: companyData.contact.website,
    logo: `${companyData.contact.website}/images/logo.png`,
    description: companyData.about.primaryText,
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    foundingDate: companyData.established,
    founder: {
      "@type": "Person",
      name: companyData.founder.name,
      jobTitle: companyData.founder.designation,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address.street,
      addressLocality: "Bhiwandi, Thane",
      addressRegion: "Maharashtra",
      postalCode: companyData.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.2635",
      longitude: "73.0425",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:30",
        closes: "18:30",
      },
    ],
    priceRange: "$$",
    sameAs: [
      companyData.contact.whatsappHref,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
