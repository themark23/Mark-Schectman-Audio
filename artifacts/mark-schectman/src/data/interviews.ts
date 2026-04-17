export type Interview = {
  id: string;
  artistName: string;
  description?: string;
  show?: string;
  date?: string;
  youtubeId?: string;   // YouTube video ID for embedding
  soundcloudUrl?: string; // SoundCloud URL for audio interviews
  type: "video" | "audio";
};

// To add real interviews, update this array with real youtubeId or soundcloudUrl values
export const interviews: Interview[] = [
  // Placeholder interviews — Mark will replace with real ones
  { id: "1", artistName: "DFW Local Artist Interview", show: "Locals Only", type: "audio", soundcloudUrl: "https://soundcloud.com/themark23", description: "From the Locals Only show on ALT 103.7" },
  { id: "2", artistName: "Band Interview - ALT 103.7", show: "The Local Edge", type: "video", youtubeId: "", description: "Live in-studio interview" },
  { id: "3", artistName: "Local Music Spotlight", show: "Locals Only", type: "audio", soundcloudUrl: "https://soundcloud.com/themark23", description: "Spotlighting Dallas/Denton local scene" },
  { id: "4", artistName: "Concert Backstage Interview", show: "DFW Music Scene", type: "video", youtubeId: "", description: "Backstage at a DFW venue" },
];
