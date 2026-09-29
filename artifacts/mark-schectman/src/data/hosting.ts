export type HostingVideo = {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  orientation: "portrait" | "landscape";
  thumbnail?: string; // custom hosted thumbnail; falls back to YouTube's if omitted
};

// Event hosting / emcee clips. Two are vertical Shorts, one is a horizontal video.
export const hostingVideos: HostingVideo[] = [
  {
    id: "hv1",
    youtubeId: "AihkJ7wZxNc",
    title: "Hosting a Game Show Activation",
    orientation: "portrait",
  },
  {
    id: "hv2",
    youtubeId: "aITwBX6XeUg",
    title: "Corporate Event Stage Hosting",
    orientation: "landscape",
  },
  {
    id: "hv3",
    youtubeId: "TFE9lWbPvBI",
    title: "Event Hosting in a Corporate Office Setting",
    orientation: "portrait",
    thumbnail: "/hosting-office.jpg",
  },
];
