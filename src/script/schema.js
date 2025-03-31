const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "My Cleaning Service",
  "url": "https://sonudryclean.wuaze.com",
  "image": "https://i.imgur.com/nA46Iir.jpeg",
  "description": "We provide home, bathroom, and kitchen cleaning services. Book now for a spotless home!",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5CQC+7J6, Mandakini Colony, Kolar Rd",
    "addressLocality": "Bhopal",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "462042",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "23.18840939759114",
    "longitude": "77.42154640674686"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 8817366188",
    "contactType": "customer service"
  }
};



// Add JSON-LD script to <head>
const scriptTag = document.createElement('script');
scriptTag.type = 'application/ld+json';
scriptTag.textContent = JSON.stringify(schemaData);
document.head.appendChild(scriptTag);
