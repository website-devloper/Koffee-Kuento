// src/config/site.js
export const SITE = {
  name: "Café Restaurant Koffee Kuento",
  shortName: "Koffee Kuento",
  tagline: "Specialty coffee & all-day brunch in the heart of Palmiers, Casablanca",
  type: "Café / Restaurant",
  priceRange: "MAD 50–100",
  rating: { value: 4.8, count: 111, source: "Google" },
  address: {
    street: "Intersection Rue Mortada & Rue de Bethléem",
    district: "Palmiers",
    city: "Casablanca",
    postalCode: "20250",
    country: "MA",
  },
  geo: { lat: 33.5797571, lng: -7.6300481 },
  hours: {
    open: "07:30",
    close: "22:00",
    schedule: {
      mon: "07:30–22:00", tue: "07:30–22:00", wed: "07:30–22:00",
      thu: "07:30–22:00", fri: "07:30–22:00", sat: "07:30–22:00",
      sun: "07:30–22:00",
    },
  },
  contact: {
    phoneDisplay: "05 22 98 30 39",
    phoneIntl: "+212522983039",
    whatsapp: "", // TODO: confirm with owner
    email: "",   // TODO: confirm with owner
  },
  services: ["Dine-in", "Kerbside pickup", "Delivery via Glovo"],
  links: {
    glovo: "https://glovoapp.com/fr/ma/casablanca/stores/koffee-kuento-cas",
    googleMaps: "https://maps.app.goo.gl/KoffeeKuento", // TODO: replace with real short link
    googleReviews: "", // TODO: add review link
    instagram: "", // TODO: confirm
    facebook: "",  // TODO: confirm
    tiktok: "",    // TODO: confirm
  },
};
