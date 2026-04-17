export type AudioTrack = {
  id: string;
  title: string;
  category: "Radio Imaging" | "Voice Over" | "Emcee Highlights" | "Commercials";
  soundcloudUrl?: string;  // SoundCloud track URL for embedding
  audioUrl?: string;       // direct mp3/audio URL if hosted externally  
  duration?: string;       // e.g. "2:30"
  description?: string;
};

// Add your own tracks by updating audioTracks.ts
export const audioTracks: AudioTrack[] = [
  // Radio Imaging
  { id: "1", title: "DJ Mark Aircheck 2024", category: "Radio Imaging", soundcloudUrl: "https://soundcloud.com/themark23/dj-mark-aircheck-2024", duration: "2:18" },
  { id: "2", title: "Local Ticket Aircheck", category: "Radio Imaging", soundcloudUrl: "https://soundcloud.com/themark23/local-ticket-aircheck", duration: "7:30" },
  { id: "3", title: "Locals Only - ALT 103.7", category: "Radio Imaging", soundcloudUrl: "https://soundcloud.com/themark23/locals-only-alt-1037-6919", duration: "1:09:11" },
  // Voice Over
  { id: "4", title: "Smithsonian Magazine Audiobook Excerpt", category: "Voice Over", duration: "2:30", description: "Featured narration from Smithsonian Magazine on Audible" },
  { id: "5", title: "National Commercial Demo", category: "Voice Over", duration: "0:30" },
  { id: "6", title: "Documentary Narration", category: "Voice Over", duration: "1:45" },
  // Emcee Highlights
  { id: "7", title: "Corporate Gala Host Intro", category: "Emcee Highlights", duration: "2:15" },
  { id: "8", title: "Concert Festival MC Set", category: "Emcee Highlights", duration: "3:20" },
];
