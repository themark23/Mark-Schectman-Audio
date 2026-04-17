export type AudioTrack = {
  id: string;
  title: string;
  category: "Radio Imaging" | "Voice Over" | "Audiobooks" | "Emcee Highlights" | "Commercials";
  soundcloudUrl?: string;  // SoundCloud track URL for embedding
  audioUrl?: string;       // direct mp3/audio URL if hosted externally
  audibleUrl?: string;     // Audible/Amazon link for audiobooks
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
  // Add audibleUrl when you have the link for each title
  { id: "ab1", title: "Cardiac Arrest: Five Heart-Stopping Years as a CEO on the Feds' Hit List", category: "Audiobooks" },
  { id: "ab2", title: "The Global Silicon Valley Handbook", category: "Audiobooks" },
  { id: "ab3", title: "The Cyber Risk Handbook", category: "Audiobooks" },
  { id: "ab4", title: "The Agile Mind-Set", category: "Audiobooks" },
  { id: "ab5", title: "Now I Know", category: "Audiobooks" },
  { id: "ab6", title: "No Hope", category: "Audiobooks" },

  // Voice Over — add SoundCloud or direct audio URLs when available
  { id: "vo1", title: "Voice Over Demo Reel", category: "Voice Over", description: "Full demo reel — coming soon" },

  // Emcee Highlights — add audio when available
  { id: "em1", title: "Emcee Highlight Reel", category: "Emcee Highlights", description: "Coming soon" },
];
