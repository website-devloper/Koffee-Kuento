import { Montserrat, Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/main.css";
import "./assets/kk-theme.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--title-font',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--body-font',
});

export const metadata = {
  title: {
    default: 'Koffee Kuento – Café & Brunch à Casablanca (Palmiers)',
    template: '%s | Koffee Kuento Casablanca',
  },
  description: 'Café de spécialité et brunch maison au cœur des Palmiers, Casablanca. Specialty coffee & all-day brunch. Ouvert 07h30–22h tous les jours.',
  openGraph: {
    title: 'Koffee Kuento – Café & Brunch Casablanca',
    description: 'Specialty coffee & brunch maison. Palmiers, Casablanca.',
    type: 'website',
  },
};

import Providers from './Providers';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="author" content="Koffee Kuento" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Café Restaurant Koffee Kuento",
              "servesCuisine": ["Café", "Brunch", "Petit-déjeuner"],
              "priceRange": "MAD 50–100",
              "url": "https://koffeekuento.ma",
              "telephone": "+212522983039",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Intersection Rue Mortada & Rue de Bethléem",
                "addressLocality": "Casablanca",
                "postalCode": "20250",
                "addressCountry": "MA"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 33.5797571, "longitude": -7.6300481 },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "111" },
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                "opens": "07:30",
                "closes": "22:00"
              }],
              "acceptsReservations": "True",
              "hasMenu": "https://koffeekuento.ma/menu"
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
