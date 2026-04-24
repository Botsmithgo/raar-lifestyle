// Service IDs map to keys in messages/*.json under `services.list.<id>`.
// Images live here because they're shared across locales.
export const serviceIds = [
  "hotels-travel",
  "real-estate",
  "dining",
  "wellness",
  "health",
  "luxury-fashion",
  "art",
  "beauty",
  "staffing",
  "polo-racing",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceImages: Record<ServiceId, string> = {
  "hotels-travel":
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop",
  "real-estate":
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=80&auto=format&fit=crop",
  dining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop",
  wellness:
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80&auto=format&fit=crop",
  health:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=80&auto=format&fit=crop",
  "luxury-fashion":
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80&auto=format&fit=crop",
  art:
    "https://images.unsplash.com/photo-1577720643272-265f09367456?w=1600&q=80&auto=format&fit=crop",
  beauty:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&q=80&auto=format&fit=crop",
  staffing:
    "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1600&q=80&auto=format&fit=crop",
  "polo-racing":
    "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1600&q=80&auto=format&fit=crop",
};

// Signature itinerary — moment IDs correspond to messages under
// `itinerary.moments.<id>`. Rotate seasonally.
export const itineraryMomentIds = ["arrival", "desert", "medina"] as const;
export type ItineraryMomentId = (typeof itineraryMomentIds)[number];

export const itineraryImages: Record<ItineraryMomentId, string> = {
  arrival: "/images/arrival-riad.jpg",
  desert:
    "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=1400&q=85&auto=format&fit=crop",
  medina: "/images/medina-marrakech.jpg",
};

// Destination IDs map to messages under `destinations.list.<id>`.
export const destinationIds = [
  "santorini",
  "positano",
  "maldives",
  "capri",
  "borabora",
  "marrakech",
  "cappadocia",
  "mykonos",
  "dolomites",
  "dubai",
  "mauritius",
  "sttropez",
] as const;
export type DestinationId = (typeof destinationIds)[number];

export const destinationImages: Record<DestinationId, string> = {
  santorini:
    "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=85&auto=format&fit=crop",
  positano:
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=85&auto=format&fit=crop",
  maldives:
    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=85&auto=format&fit=crop",
  capri: "/images/capri.jpg",
  borabora:
    "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=85&auto=format&fit=crop",
  marrakech:
    "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=85&auto=format&fit=crop",
  cappadocia:
    "https://images.unsplash.com/photo-1559783510-c448bd7d686b?w=1200&q=85&auto=format&fit=crop",
  mykonos:
    "https://images.unsplash.com/photo-1601581875039-e899893d520c?w=1200&q=85&auto=format&fit=crop",
  dolomites:
    "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&q=85&auto=format&fit=crop",
  dubai:
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=85&auto=format&fit=crop",
  mauritius:
    "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=85&auto=format&fit=crop",
  sttropez:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85&auto=format&fit=crop",
};
