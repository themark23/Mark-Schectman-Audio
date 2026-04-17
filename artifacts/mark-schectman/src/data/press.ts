export type PressClipping = {
  id: string;
  publication: string;
  headline: string;
  quote: string;
  author?: string;
  year?: string;
  url?: string;
  featured?: boolean;
};

// To add a new press clipping, add an entry to this array.
// Set featured: true on your strongest quotes to display them as pull quotes at the top.
export const pressClippings: PressClipping[] = [
  {
    id: "1",
    publication: "Dallas Observer",
    headline: "People 2015: Dallas Music's Radio Evangelist",
    quote: "Since [2009], Schectman has been standing outside Dallas' window, holding up the local music boombox and hoping for someone out there to fall in love with what's coming out of it.",
    year: "2015",
    featured: true,
  },
  {
    id: "2",
    publication: "Dallas Observer",
    headline: "And the Winners Are...You",
    quote: "He's charming, he's funny and — dammit, America! — he loves him some local music. There really isn't a stauncher advocate for the local music scene than Schectman, and he proves it passionately and repeatedly every Sunday night.",
    author: "Pete Freedman",
    featured: true,
  },
  {
    id: "3",
    publication: "Best of Fort Worth",
    headline: "Best Radio Personality 2017",
    quote: "We want to give a much-deserved shout out to DJ Mark Schectman, whose Sunday night show on 1310 and 96.7 focuses on the area's unsung songwriters, guitar heroes, and aspiring pop stars. Schectman is a man of many talents, and we're glad he's got his ear to the local music underground.",
    year: "2017",
    featured: true,
  },
  {
    id: "4",
    publication: "Dallas Observer",
    headline: "Best Radio DJ in Dallas — Best of Dallas 2009",
    quote: "Unlike some of his predecessors, Schectman actually seems to pay attention to the local scene, instead of just relying on the music that just-launched local acts toss the station's way.",
    author: "Pete Freedman",
    year: "2009",
  },
  {
    id: "5",
    publication: "Dallas Morning News",
    headline: "We Were There — Local Edge Presents at Granada Theater",
    quote: "Savvy and knowledgeable emcee Mark Schectman, host of the Local Edge radio show on KDGE-FM (102.1), introduced each performance and kept the joint jumping with humorous between-set tweets.",
    author: "Mario Tarradell",
  },
  {
    id: "6",
    publication: "35 Denton",
    headline: "Local DJ Keeps Dallas's Ear to Denton's Sound",
    quote: "Schectman's sociable vibe and accessibility contributes to his ability to be so in tune with the music scene in Denton. His passion to discover the next big thing is only second to his passion to share it with the rest of the world.",
    author: "Ron Johnson",
  },
  {
    id: "7",
    publication: "Dallas Observer",
    headline: "Get to Know Your DOMA XXIII Nominees",
    quote: "Schectman sheds light on some of the best local indie, rock and punk talent, and helps make the scene a little more fun in the process.",
    author: "Daniel Hopkins",
  },
  {
    id: "8",
    publication: "Dallas Observer",
    headline: "The 22nd Dallas Observer Music Award Winners",
    quote: "Not since the early days has an Edge jockey done so much with so little. Schectman scours the scene with a constant grin on his face, constantly searching high and low for the next band he hopes to play on his show.",
    author: "Pete Freedman",
  },
  {
    id: "9",
    publication: "Dallas Observer",
    headline: "Looking Back on the Biggest Local Music Stories of 2009",
    quote: "KDGE-102.1 FM The Edge's Mark Schectman deserves a medal for expanding his Sunday night show, The Local Edge.",
    author: "Pete Freedman",
    year: "2009",
  },
  {
    id: "10",
    publication: "Pegasus News",
    headline: "Concert Calendar — Local Edge Live",
    quote: "Seriously, The Edge, these shows have been incredible. Only featuring one band from North Texas is ludicrous. If I were you, I'd just let Mark book the whole festival.",
    author: "Sarah Crisman",
  },
  {
    id: "11",
    publication: "But I Just Like Music",
    headline: "Our Picks for the Dallas Observer Music Awards",
    quote: "My vote goes to Mark Schectman for his work with one of the best local music shows in Dallas, The Local Edge.",
  },
  {
    id: "12",
    publication: "Dallas Observer",
    headline: "Local Band Cocktail Selections",
    quote: "The Mark Schectman: 2 oz. vodka, 1 oz. sour apple schnapps. Shake well. Strain into chilled martini glass. Garnish with a lemon twist.",
  },
];

export const featuredQuotes = pressClippings.filter(p => p.featured);
export const allClippings = pressClippings.filter(p => !p.featured);
