export type Interview = {
  id: string;
  artistName: string;
  description?: string;
  show?: string;
  date?: string;
  youtubeId?: string;
  soundcloudUrl?: string;
  type: "video" | "audio";
};

// To add a new interview, add an entry to this array.
// For YouTube videos: set type: "video" and youtubeId: "VIDEO_ID" (the part after youtu.be/ or ?v=)
// For SoundCloud audio: set type: "audio" and soundcloudUrl: "https://soundcloud.com/..."
export const interviews: Interview[] = [
  {
    id: "1",
    artistName: "The Avett Brothers",
    type: "video",
    youtubeId: "wOi08tHvE14",
    description: "Sitting down with The Avett Brothers for a candid conversation.",
  },
  {
    id: "2",
    artistName: "Edgefest 24 Backstage",
    type: "video",
    youtubeId: "itVe6W9Dv8k",
    show: "Edgefest",
    description: "Backstage at Edgefest 24 — behind the scenes at one of DFW's biggest music festivals.",
  },
  {
    id: "3",
    artistName: "The Antlers",
    type: "video",
    youtubeId: "Rze3vuTfvZY",
    description: "An in-depth conversation with The Antlers about their music and creative process.",
  },
  {
    id: "4",
    artistName: "Givers",
    type: "video",
    youtubeId: "E1F51EV1HWQ",
    description: "Catching up with Givers ahead of their DFW show.",
  },
  {
    id: "5",
    artistName: "The Crookes",
    type: "video",
    youtubeId: "qxPYOymwN4I",
    description: "Mark sits down with The Crookes for a conversation about their sound and influences.",
  },
  {
    id: "6",
    artistName: "Disclosure",
    type: "video",
    youtubeId: "wuSw-O-No2Y",
    description: "An exclusive interview with electronic duo Disclosure.",
  },
  {
    id: "7",
    artistName: "Mark at Scarborough Faire",
    type: "video",
    youtubeId: "G262CGDzc24",
    show: "Scarborough Faire",
    description: "On location at Scarborough Faire — a different kind of event day.",
  },
];
