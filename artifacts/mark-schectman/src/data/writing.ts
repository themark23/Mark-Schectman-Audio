export type WritingPiece = {
  id: string;
  title: string;
  publication: string;
  category: "Lifestyle" | "Music" | "Cocktails & Spirits";
  url?: string;
};

export const writing: WritingPiece[] = [
  { id: "k1", title: "A Gentleman's Guide to Kissing Strangers", publication: "Kempt (UrbanDaddy)", category: "Lifestyle" },
  { id: "k2", title: "A Cinematic Guide to Grand Gestures", publication: "Kempt (UrbanDaddy)", category: "Lifestyle" },
  { id: "a1", title: "Summer Weekender: Southern USA", publication: "AskMen.com", category: "Lifestyle" },
  { id: "a2", title: "Beyond Bar Hopping: Dallas", publication: "AskMen.com", category: "Lifestyle" },
  { id: "c1", title: "Grey Goose Le Voyage: Day 1", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits", url: "http://cocktailenthusiast.com/grey-goose-le-voyage" },
  { id: "c2", title: "Grey Goose Le Voyage: Day 2", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits", url: "http://cocktailenthusiast.com/grey-goose-le-voyage-day-two" },
  { id: "c3", title: "Grey Goose Le Voyage: Day 3", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits", url: "http://cocktailenthusiast.com/grey-goose-le-voyage-day-three" },
  { id: "c4", title: "Drinking Cocktails at Midnight Cowboy", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits", url: "http://cocktailenthusiast.com/drinking-cocktails-austin-midnight-cowboy" },
  { id: "c5", title: "Woodford Reserve Introduces Four Wood Bourbon", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits", url: "http://cocktailenthusiast.com/woodford-reserve-introduces-wood-bourbon" },
  { id: "c6", title: "Scenes From the William Grant & Sons Party at Tales of the Cocktail", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits", url: "http://cocktailenthusiast.com/scenes-from-the-william-grant-sons-party-at-tales-of-the-cocktail" },
  { id: "c7", title: "Tasting Woodford Reserve's New Malt Whiskeys", publication: "Cocktail Enthusiast", category: "Cocktails & Spirits", url: "http://cocktailenthusiast.com/tasting-woodford-reserve-new-malt-whiskeys116" },
  { id: "d1", title: "Quaker City Night Hawks", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/quaker-city-night-hawks-6422171/" },
  { id: "d2", title: "Burning Hotels", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/the-burning-hotels-6407079" },
  { id: "d3", title: "Soviet El Cento", publication: "Dallas Observer", category: "Music" },
  { id: "d4", title: "Phantom Caste", publication: "Dallas Observer", category: "Music" },
  { id: "d5", title: "The 1969s", publication: "Dallas Observer", category: "Music" },
  { id: "d6", title: "The Orbans", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/the-orbans-6406721/" },
  { id: "d7", title: "Intake", publication: "Dallas Observer", category: "Music" },
  { id: "d8", title: "Katie Carroll", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/katie-carroll-6419486" },
  { id: "d9", title: "Pale Horse", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/pale-horse-6419487" },
  { id: "d10", title: "The Timeline Post", publication: "Dallas Observer", category: "Music" },
  { id: "d11", title: "Sleeperstar", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/sleeperstar-6421724" },
  { id: "d12", title: "Sherilyn Segrest", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/sherilyn-segrest-6421718" },
  { id: "d13", title: "Descender", publication: "Dallas Observer", category: "Music" },
  { id: "d14", title: "Incubus / Young the Giant: Show Review", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/uncategorized/last-night-incubus-and-young-the-giant-at-gexa-energy-pavilion-7054552/" },
  { id: "d15", title: "The Pretty Reckless: Show Review", publication: "Dallas Observer", category: "Music" },
  { id: "d16", title: "Hot Hot Heat: Show Review", publication: "Dallas Observer", category: "Music", url: "https://www.dallasobserver.com/music/hot-hot-heat-6398762/" },
];

export const publications = [
  { name: "Kempt (UrbanDaddy)", category: "Lifestyle" },
  { name: "AskMen.com", category: "Lifestyle" },
  { name: "Cocktail Enthusiast", category: "Cocktails & Spirits" },
  { name: "Dallas Observer", category: "Music" },
];

export const writingCategories = ["All", "Lifestyle", "Music", "Cocktails & Spirits"] as const;
export type WritingCategory = typeof writingCategories[number];
