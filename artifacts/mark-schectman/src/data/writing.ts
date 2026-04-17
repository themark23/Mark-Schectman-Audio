export type WritingPiece = {
  id: string;
  title: string;
  publication: string;
  category: "Lifestyle" | "Music" | "Cocktails & Spirits";
  url?: string;
};

// To add new writing, add entries here. Add a url if you have the link.
export const writing: WritingPiece[] = [
  // KEMPT (UrbanDaddy)
  { id: "k1", title: "A Gentleman's Guide to Kissing Strangers", publication: "Kempt (UrbanDaddy)", category: "Lifestyle" },
  { id: "k2", title: "A Cinematic Guide to Grand Gestures", publication: "Kempt (UrbanDaddy)", category: "Lifestyle" },

  // AskMen.com
  { id: "a1", title: "Summer Weekender: Southern USA", publication: "AskMen.com", category: "Lifestyle" },
  { id: "a2", title: "Beyond Bar Hopping: Dallas", publication: "AskMen.com", category: "Lifestyle" },

  // Cocktail Enthusiast
  { id: "c1", title: "Grey Goose Le Voyage: Day 1", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { id: "c2", title: "Grey Goose Le Voyage: Day 2", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { id: "c3", title: "Grey Goose Le Voyage: Day 3", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { id: "c4", title: "Drinking Cocktails at Midnight Cowboy", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { id: "c5", title: "Woodford Reserve Introduces Four Wood Bourbon", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { id: "c6", title: "Scenes From the William Grant & Sons Party at Tales of the Cocktail", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { id: "c7", title: "Tasting Woodford Reserve's New Malt Whiskeys", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits" },

  // Dallas Observer
  { id: "d1", title: "Quaker City Night Hawks", publication: "Dallas Observer", category: "Music" },
  { id: "d2", title: "Burning Hotels", publication: "Dallas Observer", category: "Music" },
  { id: "d3", title: "Soviet El Cento", publication: "Dallas Observer", category: "Music" },
  { id: "d4", title: "Phantom Caste", publication: "Dallas Observer", category: "Music" },
  { id: "d5", title: "The 1969s", publication: "Dallas Observer", category: "Music" },
  { id: "d6", title: "The Orbans", publication: "Dallas Observer", category: "Music" },
  { id: "d7", title: "Intake", publication: "Dallas Observer", category: "Music" },
  { id: "d8", title: "Katie Carroll", publication: "Dallas Observer", category: "Music" },
  { id: "d9", title: "Pale Horse", publication: "Dallas Observer", category: "Music" },
  { id: "d10", title: "The Timeline Post", publication: "Dallas Observer", category: "Music" },
  { id: "d11", title: "Sleeperstar", publication: "Dallas Observer", category: "Music" },
  { id: "d12", title: "Sherilyn Segrest", publication: "Dallas Observer", category: "Music" },
  { id: "d13", title: "Descender", publication: "Dallas Observer", category: "Music" },
  { id: "d14", title: "Incubus / Young the Giant: Show Review", publication: "Dallas Observer", category: "Music" },
  { id: "d15", title: "The Pretty Reckless: Show Review", publication: "Dallas Observer", category: "Music" },
  { id: "d16", title: "Hot Hot Heat: Show Review", publication: "Dallas Observer", category: "Music" },
];

export const publications = [
  { name: "Kempt (UrbanDaddy)", category: "Lifestyle" },
  { name: "AskMen.com", category: "Lifestyle" },
  { name: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { name: "Dallas Observer", category: "Music" },
];

export const writingCategories = ["All", "Lifestyle", "Music", "Cocktails & Spirits"] as const;
export type WritingCategory = typeof writingCategories[number];
