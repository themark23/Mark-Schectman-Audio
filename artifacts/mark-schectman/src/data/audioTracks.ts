export type AudioTrack = {
  id: string;
  title: string;
  category: "Radio Imaging" | "Voice Over" | "Audiobooks" | "Emcee Highlights" | "Commercials";
  soundcloudUrl?: string;  // SoundCloud track URL for embedding
  audioUrl?: string;       // direct mp3/audio URL if hosted externally
  audibleUrl?: string;     // Audible/Amazon link for audiobooks
  coverUrl?: string;       // book cover image URL
  duration?: string;       // e.g. "2:30"
  description?: string;
};

// Add your own tracks by updating audioTracks.ts
export const audioTracks: AudioTrack[] = [
  // Radio Imaging — SoundCloud embeds
  { id: "1", title: "DJ Mark Aircheck 2024", category: "Radio Imaging", soundcloudUrl: "https://soundcloud.com/themark23/dj-mark-aircheck-2024", duration: "2:18" },
  { id: "2", title: "Local Ticket Aircheck", category: "Radio Imaging", soundcloudUrl: "https://soundcloud.com/themark23/local-ticket-aircheck", duration: "7:30" },
  { id: "3", title: "Locals Only - ALT 103.7", category: "Radio Imaging", soundcloudUrl: "https://soundcloud.com/themark23/locals-only-alt-1037-6919", duration: "1:09:11" },

  // Audiobooks — narrated by Mark, available on Audible
  {
    id: "ab1",
    title: "Cardiac Arrest: Five Heart-Stopping Years as a CEO on the Feds' Hit List",
    category: "Audiobooks",
    audibleUrl: "https://www.audible.com/pd/Bios-Memoirs/Cardiac-Arrest-Audiobook/B06XT12LQV",
    coverUrl: "https://m.media-amazon.com/images/I/51CnicEUi8L._SL500_.jpg",
  },
  {
    id: "ab2",
    title: "The Global Silicon Valley Handbook",
    category: "Audiobooks",
    audibleUrl: "https://www.audible.com/pd/Business/The-Global-Silicon-Valley-Handbook-Audiobook/B06Y14CSXN",
    coverUrl: "https://m.media-amazon.com/images/I/51Tifcig9rL._SL500_.jpg",
  },
  {
    id: "ab3",
    title: "The Cyber Risk Handbook",
    category: "Audiobooks",
    audibleUrl: "https://www.audible.com/pd/Business/The-Cyber-Risk-Handbook-Audiobook/B073X45LZS",
    coverUrl: "https://m.media-amazon.com/images/I/51Gn-k-dbAL._SL500_.jpg",
  },
  {
    id: "ab4",
    title: "The Agile Mind-Set",
    category: "Audiobooks",
    audibleUrl: "https://www.audible.com/pd/Business/The-Agile-Mind-Set-Audiobook/B01N6YBLMH",
    coverUrl: "https://m.media-amazon.com/images/I/517PrbxsJHL._SL500_.jpg",
  },
  {
    id: "ab5",
    title: "Now I Know",
    category: "Audiobooks",
    audibleUrl: "https://www.audible.com/pd/You-Can-Taste-the-Price-Audiobook/B01J8K4GZ2",
    coverUrl: "https://m.media-amazon.com/images/I/41K1DIRLk1L._SL500_.jpg",
    description: "Short-form episode series by Dan Lewis — multiple episodes narrated by Mark",
  },
  {
    id: "ab6",
    title: "No Hope",
    category: "Audiobooks",
    audibleUrl: "https://www.audible.com/pd/Nonfiction/No-Hope-Audiobook/B01604HE1M",
    coverUrl: "https://m.media-amazon.com/images/I/51K2THhoSuL._SL500_.jpg",
  },

  // Voice Over — add SoundCloud or direct audio URLs when available
  { id: "vo1", title: "Voice Over Demo Reel", category: "Voice Over", description: "Full demo reel — coming soon" },

  // Emcee Highlights — add audio when available
  { id: "em1", title: "Emcee Highlight Reel", category: "Emcee Highlights", description: "Coming soon" },
];
