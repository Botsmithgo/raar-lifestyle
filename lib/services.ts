export type Service = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

// Imagery curated from Unsplash — editorial, luxe, atmospheric.
export const services: Service[] = [
  {
    id: "hotels-travel",
    index: "01",
    eyebrow: "The Where & How",
    title: "Hotels & Travels",
    description:
      "From private jets to the world's most storied resorts — we orchestrate every leg of your journey with obsessive care.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "real-estate",
    index: "02",
    eyebrow: "Luxury meets convenience",
    title: "Real Estate",
    description:
      "A villa in the South of France, a riad in Marrakech, or a pied-à-terre in Paris — our property network is global, confidential, and exacting.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "dining",
    index: "03",
    eyebrow: "Reservations & Rituals",
    title: "Dining & Reservations",
    description:
      "Chef's table access, private dining rooms, and tables where the booking closed months ago. Our network delivers.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "wellness",
    index: "04",
    eyebrow: "Body, Mind & Care",
    title: "Wellness",
    description:
      "Well-being tourism, holistic retreats, responsible food, and interior design for a considered life — curated with trusted partners worldwide.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "health",
    index: "05",
    eyebrow: "On-demand",
    title: "Health",
    description:
      "Discreet in-home medical visits, vitamin infusions, physiotherapists and doctors on call — at your service in record time.",
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "luxury-fashion",
    index: "06",
    eyebrow: "Wardrobe & Objects",
    title: "Luxury & Fashion",
    description:
      "Personal shoppers, style consultants, fine jewellery, elusive timepieces and one-of-a-kind artworks — sourced, reserved, delivered.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "art",
    index: "07",
    eyebrow: "Curation & Collecting",
    title: "Art",
    description:
      "Art advisory and consultancy with the most exclusive artists, galleries and fairs — plus private viewings your dealer can't arrange.",
    image:
      "https://images.unsplash.com/photo-1577720643272-265f09367456?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "beauty",
    index: "08",
    eyebrow: "Beauty & Make Up",
    title: "Beauty",
    description:
      "Make-up artists, coiffeurs, aesthetic doctors for botox or bespoke injectables — the best, at the pace your life demands.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "staffing",
    index: "09",
    eyebrow: "Household & Team",
    title: "Staffing",
    description:
      "Nannies, private chefs, chauffeurs, housekeepers, security — meticulously trained professionals available around the clock.",
    image:
      "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1600&q=80&auto=format&fit=crop",
  },
  {
    id: "polo-racing",
    index: "10",
    eyebrow: "Equestrian",
    title: "Polo & Racing",
    description:
      "With partner Capy Mourier, we curate Dubai's finest equestrian days — Meydan races, desert rides, and Al Habtoor polo matches.",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=80&auto=format&fit=crop",
  },
];

// Polo signature triptych
export const signatureExperiences = [
  {
    title: "Races at Meydan",
    description:
      "The 24-hour experience opens Thursday at 5pm with an evening at Meydan Races. A lavish dinner at the racecourse's finest restaurant overlooks the track and the parade ring.",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Desert Rides",
    description:
      "Friday morning begins with a beautiful desert ride. Whatever your level, we have a gentle horse for you — then a delicious breakfast waits back at the stable resort.",
    image:
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Polo Matches",
    description:
      "Then onward to Al Habtoor Polo for a glamorous VIP lunch at Dubai's famous club — exhilarating matches followed by behind-the-scenes access with players and trainers.",
    image:
      "https://images.unsplash.com/photo-1527195575508-5b138d415739?w=1200&q=80&auto=format&fit=crop",
  },
];

// Marquee destination images
export const marqueeImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=900&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570285697828-c5d0f61e7e02?w=900&q=80&auto=format&fit=crop",
];
