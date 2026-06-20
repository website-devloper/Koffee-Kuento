# Koffee Kuento â Website Build Brief

**For:** Google Antigravity / Claude Code agentic build
**Base template:** FreshEat â Food & Restaurant React/Next.js Template (ThemeServices)
**Demo reference:** https://fresheat-nextjs.vercel.app (Home 1/2/3 layouts)
**Deliverable:** Production cafÃ©-restaurant website for *CafÃ© Restaurant Koffee Kuento*, Palmiers, Casablanca.

> **How to use this file:** Drop it in the project root as `BUILD.md`. Point the agent at it: *"Read BUILD.md and implement it on top of the FreshEat Next.js template in this repo. Treat Section 3 (Business Data) as the single source of truth â never invent NAP, hours, or prices."*

---

## 1. Objective

Turn the FreshEat template into a fast, bilingual (FR primary / EN secondary, AR-ready), mobile-first website for a real Casablanca cafÃ©-restaurant. The site is **not** an e-commerce store â ordering is delegated to **Glovo**. The goal is: showcase the place, drive in-store visits + reservations, and route delivery to Glovo. Reflect the actual 4.8â "industrial-chic" identity, not the template's generic fast-food look.

**Primary conversions (in priority order):**
1. Tap-to-call / tap-to-WhatsApp
2. "Order on Glovo" (delivery)
3. Get Directions (Google Maps)
4. Reserve a table (form â email/WhatsApp)

---

## 2. Tech stack & ground rules

- **Framework:** Next.js (App Router preferred; if the template ships Pages Router, keep its router â do not rewrite the whole thing). TypeScript where the template allows.
- **Styling:** keep the template's SCSS/Bootstrap base; override via a single theme layer (Section 4). Do **not** rip out the design system â re-skin it.
- **No backend store.** Remove cart/checkout/wishlist/shop entirely (Section 5).
- **No fake data ships to production.** Every Lorem Ipsum, every `$` price, every "Devon Lane" chef, every "info@example.com" must be replaced or removed. Search the repo for: `Lorem`, `example.com`, `Devon Lane`, `Ralph Edwards`, `Marvin McKinney`, `Sandigo`, `Philadelphia`, `+88`, `$`.
- **Currency:** MAD (Moroccan Dirham), formatted `45 MAD` or `MAD 45` â never `$`.
- **Images:** use `next/image`. Replace all template stock food shots with Koffee Kuento's own photos (Section 11).
- **Deploy target:** Vercel.

---

## 3. Business data â SINGLE SOURCE OF TRUTH

Put this in `src/config/site.ts` (or `data/site.json`) and reference it everywhere. Do not hardcode these values into components.

```ts
export const SITE = {
  name: "CafÃ© Restaurant Koffee Kuento",
  shortName: "Koffee Kuento",
  tagline: "Specialty coffee & all-day brunch in the heart of Palmiers, Casablanca",
  type: "CafÃ© / Restaurant",
  priceRange: "MAD 50â100", // per person
  rating: { value: 4.8, count: 111, source: "Google" },

  address: {
    street: "Intersection Rue Mortada & Rue de BethlÃ©em",
    district: "Palmiers",
    city: "Casablanca",
    postalCode: "20250",
    country: "MA",
    plusCode: "H9H9+WX Casablanca",
  },

  geo: { lat: 33.5797571, lng: -7.6300481 },

  // Confirmed: opens 7:30 AM. FULL WEEK MUST BE CONFIRMED WITH CLIENT before launch.
  hours: {
    note: "PLACEHOLDER â confirm exact daily hours with the owner.",
    open: "07:30",
    // Suggested structure, replace with real values:
    schedule: {
      mon: "07:30â22:00", tue: "07:30â22:00", wed: "07:30â22:00",
      thu: "07:30â22:00", fri: "07:30â22:00", sat: "07:30â22:00",
      sun: "07:30â22:00",
    },
  },

  contact: {
    phoneDisplay: "05 22 98 30 39",
    phoneIntl: "+212522983039",        // for tel: links
    whatsapp: "",                      // TO CONFIRM â ask owner for WhatsApp number
    email: "",                         // TO CONFIRM
  },

  services: ["Dine-in", "Kerbside pickup", "Delivery"],

  links: {
    glovo: "https://glovoapp.com",     // REPLACE with the exact Koffee Kuento Glovo store URL
    googleMaps: "https://maps.app.goo.gl/", // REPLACE with the real short Maps link
    googleReviews: "",                 // REPLACE with the "write a review" link
    instagram: "",                     // TO CONFIRM
    facebook: "",                      // TO CONFIRM
    tiktok: "",                        // TO CONFIRM
  },
};
```

**Data still to collect from the client (block launch until filled):** full weekly hours, WhatsApp number, email, exact Glovo store URL, social handles, and the real menu (items + MAD prices), high-res interior/food photos, logo in SVG.

---

## 4. Brand & design direction

The reviews describe a **warm, industrial-chic** space ("fresh coffee," "well-presented dishes," "beautiful cafe," tourist/English-friendly). Re-skin FreshEat away from its red fast-food energy toward a calm, premium third-wave-coffee aesthetic.

**Palette (override the template's primary):**
```
--kk-espresso:   #2B211A   /* near-black brown â text, footer, headers */
--kk-coffee:     #6F4E37   /* primary accent â buttons, links */
--kk-caramel:    #C08A4E   /* secondary accent / hover */
--kk-cream:      #F6F1EB   /* page background (warm off-white) */
--kk-sand:       #E7DDCF   /* section alt background, cards */
--kk-leaf:       #4F6F52   /* subtle "fresh/brunch" accent, sparingly */
--kk-ink:        #1A1A1A   /* deep neutral for high-contrast blocks */
```

**Typography:**
- Headings: a confident serif or high-contrast display (e.g. *Fraunces*, *Playfair Display*, or *Cormorant*) to signal "cafÃ©, not fast food."
- Body/UI: a clean grotesque (e.g. *Inter*, *Work Sans*, or *Montserrat*).
- Load via `next/font` for zero layout shift. Keep one heading + one body family.

**Visual language:**
- Industrial-chic textures: exposed-brick/wood photo backgrounds, generous whitespace, thin rules instead of heavy template shapes.
- **Remove** the template's playful SVG splatter/blob shapes (`bannerShape*`, `ctaShape*`, vegetable/chili shapes). They fight the premium feel. Replace with subtle grain/photo overlays or nothing.
- Buttons: solid `--kk-coffee`, square-ish (4â6px radius), uppercase tracking, hover â `--kk-caramel`. Reuse the easing the team already standardizes on: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Imagery does the heavy lifting â large, well-lit photos of coffee, brunch plates, and the interior.

---

## 5. Site map â keep / adapt / remove

FreshEat ships many pages. Trim to what a single-location cafÃ© needs.

| Template page | Action | Becomes |
|---|---|---|
| Home 1 / 2 / 3 | **Adapt** â pick Home 2 as base, build one home | `/` |
| About 1 / 2 | **Adapt** (keep one) | `/about` â our story + the space |
| Food Menu 1 / 2 | **Adapt** (keep one, tabbed) | `/menu` |
| Reservation | **Adapt** | `/reservation` (or modal) |
| Gallery | **Keep** | `/gallery` â interior + dishes |
| Contact 1 / 2 | **Adapt** (keep one) | `/contact` |
| FAQ | **Keep, slim** | `/faq` |
| Chef / Chef Details | **Remove** (no celebrity-chef angle) â or repurpose into a small "Our Team" strip on About |
| Services / Service Details | **Remove** â fold into a "Dine-in / Pickup / Delivery" strip on home |
| Testimonials page | **Remove standalone**, keep as a home section using real Google reviews |
| Blog / Blog Standard / Sidebar / Details | **Remove for v1** (optional later for SEO) |
| Shop / Cart / Checkout / Wishlist / Shop Details | **Remove entirely** â delete routes, nav items, and cart state |

**Final nav:** `Accueil Â· Menu Â· Ã propos Â· Galerie Â· RÃ©servation Â· Contact` + persistent **"Commander sur Glovo"** button and a **tel:** click-to-call icon.

---

## 6. Page-by-page content spec

### `/` Home (base: FreshEat Home 2)
1. **Top bar:** address line ("Palmiers, Casablanca") + opening status ("Ouvert Â· ferme Ã  22h" â compute from `SITE.hours`) + social icons. Replace template's "New market Sandigo - California / 9â5".
2. **Hero slider:** 2â3 real photo slides (espresso pour, brunch spread, interior). Headline e.g. *"Le cafÃ© de spÃ©cialitÃ©, au cÅur des Palmiers."* CTAs: **Voir le menu** + **Commander sur Glovo**. Kill the floating SVG shapes.
3. **Offer / "Aujourd'hui" strip:** repurpose the template's "Today Special" into "Brunch servi toute la journÃ©e" (brunch is a flagged popular offering). MAD pricing, not `$`.
4. **About teaser:** the "Variety of flavours" block â real story snippet + the 4.8â / 111 avis badge + "super quality / qualified" icons reworded to *CafÃ© de spÃ©cialitÃ©* / *Brunch maison*.
5. **Popular dishes / signature menu:** 5â6 real signature items with photos + MAD prices (replace Chicken Pizza $24 etc.). "Voir tout le menu" â `/menu`.
6. **Feature categories:** Coffee Â· Brunch Â· PÃ¢tisseries Â· Salades Â· Plats Â· Boissons fraÃ®ches (replace "Chinese Pasta / Chicken Pizza").
7. **CTA band:** "Commandez en livraison sur Glovo" â Glovo link (replace App Store/Play "download app" block, since there's no app).
8. **Testimonials:** real Google reviews (see Section 9 â paraphrase or use verbatim only with the reviewer's public text + attribution; pull 3â4). Replace Lorem Ipsum.
9. **Reservation / "RÃ©server une table":** date, time, party size, name, phone, message â submit (Section 8). Replace "Meet Our Expert Chefe" heading.
10. **Footer:** real NAP, real hours, real socials, Glovo link, Google Maps embed. Replace "4648 Rocky Road Philadelphia / info@example.com / +88...". Copyright â current year, "Koffee Kuento".

### `/menu`
- Tabbed/anchored categories (template Food Menu layout). **Categories (confirm with client):** CafÃ©s & Boissons chaudes Â· Boissons fraÃ®ches & Jus Â· Petit-dÃ©jeuner Â· Brunch Â· Salades Â· Plats Â· PÃ¢tisseries & Desserts.
- Each item: name (FR + EN where useful), short description, **MAD price**, optional photo, optional tags (VÃ©gÃ©tarien, Signature, Nouveau).
- Store menu in `data/menu.ts` so it's editable in one place. **All prices are placeholders until the owner provides the real menu â mark the file `// TODO: replace with official menu & prices`.**
- Sticky "Commander sur Glovo" CTA on this page.

### `/about`
- Story of Koffee Kuento + the Palmiers location + the industrial-chic space. Lead with the 4.8â/111 reviews social proof. Optional small team strip (repurposed chef block) only if the owner wants it.

### `/gallery`
- Masonry/grid of real photos: interior, coffee, brunch, plating. Lightbox. Lazy-loaded.

### `/reservation`
- Same form as the home reservation section, full-page version. (Section 8.)

### `/contact`
- NAP, click-to-call, WhatsApp, hours table (computed/highlight "today"), **embedded Google Map** centered on `33.5797571, -7.6300481`, "Get Directions" button, Glovo button. Contact form optional (can reuse reservation backend).

### `/faq`
- 6â10 real Q&As: hours, reservations needed?, delivery zones (Glovo), parking, brunch timing, dietary options, kid-friendly, payment methods. Confirm answers with owner.

---

## 7. Localization

- **Primary language: French** (Casablanca default). **Secondary: English** (reviews note "English & tourist friendly").
- Architecture: `next-intl` or `next-i18next` with locale routes `/fr` (default) and `/en`. Keep copy in `messages/fr.json` and `messages/en.json`.
- **Arabic (AR) ready:** structure strings so AR can be added later with RTL support (`dir="rtl"`), but AR copy is optional for v1.
- Language switcher in the header.

---

## 8. Integrations

- **Glovo:** every "Order" CTA â `SITE.links.glovo` (exact store URL), `target="_blank" rel="noopener"`. Label: *"Commander sur Glovo"*.
- **Click-to-call:** `tel:+212522983039`.
- **WhatsApp:** `https://wa.me/<number>?text=Bonjour%20Koffee%20Kuento` (once number confirmed).
- **Google Maps:** embedded iframe + "ItinÃ©raire" button â `https://www.google.com/maps/dir/?api=1&destination=33.5797571,-7.6300481`.
- **Reservation form backend:** no DB. Use a Next.js Route Handler (`app/api/reservation/route.ts`) that sends an email via **Resend** (team already uses Resend) to the restaurant, and optionally formats a WhatsApp deep link as a fallback. Add spam protection (honeypot + basic rate limit). Validate inputs server-side.
- **Analytics:** GA4 or Plausible; track Glovo clicks, call clicks, directions clicks, reservation submits as events.

---

## 9. Reviews / testimonials handling

Use the **real Google reviews** (4.8â, 111 reviews) for credibility. To respect the reviewers, either link out with attribution or display their existing public text with name + "via Google." Paraphrased summaries are fine for hero copy. Themes to surface (pulled from current public reviews): the fresh-coffee + food aroma drawing people in, the warm industrial-chic interior, beautifully presented dishes, and standout English/tourist-friendly service. Display the aggregate **"4.8 â Â· 111 avis Google"** badge prominently and link it to the Google listing.

> Don't fabricate reviews or invent named customers. If you can't get clean review text, show only the aggregate rating + a "Lire les avis" link to Google.

---

## 10. SEO & local SEO

- **Per-page metadata** via Next.js Metadata API: title, description, OpenGraph, Twitter, canonical. FR + EN variants.
  - Home title e.g.: `Koffee Kuento â CafÃ© & Brunch Ã  Casablanca (Palmiers)`
- **`robots.txt` + `sitemap.xml`** (generate with `next-sitemap` or App Router metadata routes).
- **JSON-LD structured data** â inject `Restaurant` schema on home + contact (this powers rich results and local SEO). Drop-in:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "CafÃ© Restaurant Koffee Kuento",
  "servesCuisine": ["CafÃ©", "Brunch", "Petit-dÃ©jeuner"],
  "priceRange": "MAD 50â100",
  "image": "https://<domain>/og/koffee-kuento.jpg",
  "url": "https://<domain>",
  "telephone": "+212522983039",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Intersection Rue Mortada & Rue de BethlÃ©em",
    "addressLocality": "Casablanca",
    "postalCode": "20250",
    "addressCountry": "MA"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 33.5797571, "longitude": -7.6300481 },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "111" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "07:30", "closes": "22:00" }
  ],
  "acceptsReservations": "True",
  "hasMenu": "https://<domain>/menu",
  "potentialAction": {
    "@type": "OrderAction",
    "target": "https://glovoapp.com/<koffee-kuento-store>",
    "deliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
  }
}
```
> Update `closes` and the per-day breakdown once real hours are confirmed. Don't ship the `4.8/111` rating in schema unless it's still accurate at launch (it updates over time on Google).

- **Local keywords to target:** "cafÃ© Palmiers Casablanca", "brunch Casablanca", "cafÃ© spÃ©cialitÃ© Casablanca", "petit dÃ©jeuner Casablanca Palmiers".

---

## 11. Performance & accessibility

- All images â `next/image` with explicit `sizes`, AVIF/WebP, blur placeholders. Compress source photos before import.
- Lighthouse targets: **LCP < 2.5s, CLS < 0.1, INP < 200ms**; Performance & SEO â¥ 90 on mobile.
- Self-host fonts via `next/font`. Remove unused template JS/SCSS (sliders, shop, blog) to cut bundle.
- a11y: semantic landmarks, alt text on every image, focus-visible states, color contrast â¥ 4.5:1 (check `--kk-caramel` on cream), keyboard-navigable menu & forms, `aria-label` on icon-only buttons (call, social, Glovo).

---

## 12. Agent build prompt (paste into Antigravity / Claude Code)

> **Task:** Re-skin and rebuild the FreshEat Next.js template in this repo into the production website for *CafÃ© Restaurant Koffee Kuento* (Palmiers, Casablanca), following `BUILD.md`.
>
> **Do this in order:**
> 1. Read `BUILD.md` fully. Create `src/config/site.ts` from Section 3 â this is the single source of truth; never hardcode NAP/hours/prices elsewhere.
> 2. Delete all e-commerce routes/components (shop, cart, checkout, wishlist) and remove their nav links and any cart state/provider. Delete blog, chef, services, standalone testimonial pages per Section 5.
> 3. Apply the theme in Section 4: replace the primary color tokens, swap fonts via `next/font`, remove the decorative SVG "shape" clutter. Re-skin, don't rewrite the layout system.
> 4. Build the pages in Section 6 using the FreshEat sections as scaffolding. Replace every placeholder string, `$` price, fake name, and Lorem Ipsum. Grep for: `Lorem`, `example.com`, `Devon Lane`, `Ralph Edwards`, `Marvin McKinney`, `Sandigo`, `Philadelphia`, `+88`, `$`.
> 5. Set up i18n (FR default, EN secondary) per Section 7 with a header switcher.
> 6. Wire integrations (Section 8): Glovo CTAs, tel:, WhatsApp, Google Maps embed + directions, and the `/api/reservation` Resend route with validation + honeypot.
> 7. Add metadata, sitemap, robots, and the Restaurant JSON-LD (Section 10).
> 8. Optimize images and fonts; hit the Lighthouse targets in Section 11.
> 9. Where real data is missing (full hours, menu/prices, WhatsApp, Glovo URL, socials, photos), insert clearly-marked `// TODO:` placeholders and list them at the end â do **not** invent values.
>
> **Constraints:** No `$` anywhere â MAD only. No fabricated reviews or chef names. Mobile-first. Ship nothing with Lorem Ipsum.
>
> **When done:** output a short report of (a) pages built, (b) template cruft removed, (c) the list of client-data TODOs still blocking launch.

---

## 13. Pre-launch checklist

- [ ] Real weekly hours confirmed & wired into header status + schema
- [ ] Real menu items + MAD prices in `data/menu.ts`
- [ ] Exact Glovo store URL on every Order CTA
- [ ] Real Google Maps short link + embed centered on the coordinates
- [ ] Phone (`tel:`), WhatsApp, email confirmed and live
- [ ] Social links (Instagram/Facebook/TikTok) confirmed
- [ ] Real photos in hero, gallery, menu, about (no template stock)
- [ ] Logo in SVG (light + dark) installed
- [ ] No `$`, no Lorem Ipsum, no template demo names anywhere
- [ ] FR/EN copy complete; language switch works
- [ ] Reservation form delivers email (test end-to-end) + spam protection
- [ ] JSON-LD validates (Rich Results Test); rating only if still accurate
- [ ] `sitemap.xml` + `robots.txt` present; Search Console verified
- [ ] Lighthouse mobile: Perf/SEO/Best Practices/a11y â¥ 90
- [ ] GA4/Plausible events: Glovo click, call, directions, reservation
- [ ] Tested on real mobile (iOS Safari + Android Chrome)

---

## 14. Open data to request from the owner

1. Full opening hours for each day of the week.
2. Official menu with categories, item names, and **MAD prices**.
3. Exact **Glovo** store link.
4. WhatsApp number + contact email for reservations.
5. Instagram / Facebook / TikTok handles.
6. High-resolution photos: interior, coffee, brunch/plating, exterior/signage.
7. Logo files (SVG preferred, light & dark).
8. Confirmation of services (dine-in / kerbside pickup / delivery) and any reservation policy.
