export type SocialRole = {
  id: string;
  agency: string;
  location: string;
  title: string;
  period: string;
  clients: string[];
  highlights: string[];
  featured: boolean;
};

export const socialRoles: SocialRole[] = [
  {
    id: "burson",
    agency: "Burson",
    location: "Dallas, TX",
    title: "Vice President, Comms Social",
    period: "2025 — Present",
    clients: ["Ford Motor Company"],
    highlights: [
      "Comms social lead for executive social presence and comms social strategy",
      "Strategic and creative SME ensuring social-first content creation for the comms team",
      "Liaison between comms and marketing social teams for aligned goals and messaging",
    ],
    featured: true,
  },
  {
    id: "cheil",
    agency: "Cheil",
    location: "Plano, TX",
    title: "Group Account Director, Social + Influencer",
    period: "2024 — 2025",
    clients: ["Samsung Mobile"],
    highlights: [
      "Business and client lead for organic social and influencer strategy",
      "Senior leader for cross-functional teams of strategists, creatives, producers, and PMs",
      "Built new social editorial process leveraging deep strategic expertise",
    ],
    featured: true,
  },
  {
    id: "gsdm",
    agency: "GSD&M",
    location: "Dallas, TX",
    title: "Social Media Director",
    period: "2022 — 2024",
    clients: ["US Air Force", "US Space Force", "Capital One"],
    highlights: [
      "Led a team of 15+ social media experts and creatives",
      "Built a content creation practice from the ground up — a first for the agency",
      "Helped launch Capital One's organic TikTok presence and creator program",
    ],
    featured: true,
  },
  {
    id: "saatchi",
    agency: "Saatchi & Saatchi",
    location: "Dallas, TX",
    title: "Associate Director, Social Media",
    period: "2018 — 2022",
    clients: ["Toyota", "Panasonic"],
    highlights: [
      "Led social campaigns spanning Olympics/Paralympics, Super Bowl, and major vehicle launches",
      "Launched Toyota's first TikTok and IG Reels presence",
      "Developed Panasonic's organic social content strategy for the 2020/2021 Olympic campaign",
    ],
    featured: true,
  },
  {
    id: "goodr",
    agency: "goodr Sunglasses",
    location: "Los Angeles, CA",
    title: "Director of Social",
    period: "2025",
    clients: [],
    highlights: [
      "Operationalized the brand's organic social and influencer practices",
      "Built the brand's first social media playbook — strategy, creative guidelines, and KPIs",
      "Scaled in-house content creation 400% for organic, paid, and email channels",
    ],
    featured: false,
  },
  {
    id: "belo",
    agency: "Belo + Company",
    location: "Dallas, TX",
    title: "Account Director",
    period: "2017 — 2018",
    clients: ["Revlon Hair Tools", "Bed Head Styling", "Fuzzy's Taco Shop", "Highland Park Village"],
    highlights: [
      "Led client service team overseeing strategy, creative, and paid social for national and local clients",
      "Managed $225k MRR in account profitability",
    ],
    featured: false,
  },
  {
    id: "speakeasy",
    agency: "Speakeasy",
    location: "Dallas, TX",
    title: "Account Director",
    period: "2015 — 2017",
    clients: ["UT Southwestern Medical Center", "Goshen Health System"],
    highlights: [
      "Led organic social and content strategy for 10–12 regional and national health & wellness accounts",
    ],
    featured: false,
  },
  {
    id: "hypeworthy",
    agency: "Hypeworthy",
    location: "Dallas, TX",
    title: "Vice President",
    period: "2012 — 2015",
    clients: ["Rhythm Superfoods", "The 86 Co.", "Cinco Vodka", "Ambhar Tequila"],
    highlights: [
      "Social media strategy, implementation, client relations, and new business development",
    ],
    featured: false,
  },
];

export const featuredClients = [
  "Ford Motor Company",
  "Samsung Mobile",
  "US Air Force",
  "US Space Force",
  "Capital One",
  "Toyota",
  "Panasonic",
];
