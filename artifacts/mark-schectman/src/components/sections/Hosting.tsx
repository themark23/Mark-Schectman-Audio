import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hostingVideos, type HostingVideo } from "@/data/hosting";
import { X } from "lucide-react";

const IFRAME_ALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

// ── Modal (adapts to portrait Shorts or landscape video) ──────────────────────
function HostingModal({ video, onClose }: { video: HostingVideo; onClose: () => void }) {
  const isPortrait = video.orientation === "portrait";
  const src = `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{ background: "rgba(0,0,0,0.88)" }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative"
          style={
            isPortrait
              ? { height: "82vh", aspectRatio: "9 / 16", maxWidth: "100%" }
              : { width: "100%", maxWidth: 900 }
          }
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Close</span>
          </button>

          {/* Title */}
          <p className="absolute -top-10 left-0 text-white font-serif font-bold text-base md:text-lg truncate max-w-[70%]">
            {video.title}
          </p>

          {/* Video */}
          {isPortrait ? (
            <iframe
              className="w-full h-full"
              src={src}
              title={video.title}
              frameBorder="0"
              allow={IFRAME_ALLOW}
              allowFullScreen
            />
          ) : (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={src}
                title={video.title}
                frameBorder="0"
                allow={IFRAME_ALLOW}
                allowFullScreen
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
function HostingCard({
  video,
  index,
  onPlay,
}: {
  video: HostingVideo;
  index: number;
  onPlay: () => void;
}) {
  const isPortrait = video.orientation === "portrait";
  const thumb = isPortrait
    ? `https://i.ytimg.com/vi/${video.youtubeId}/oardefault.jpg`
    : `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={onPlay}
      className={`group cursor-pointer ${
        isPortrait ? "w-[220px] sm:w-[250px]" : "w-full sm:w-[460px]"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-secondary border border-border group-hover:border-primary/40 transition-colors ${
          isPortrait ? "aspect-[9/16]" : "aspect-video"
        }`}
      >
        <img
          src={thumb}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
          }}
        />

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
            <svg className="ml-1" width="22" height="22" viewBox="0 0 24 24" fill="white">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base md:text-lg font-serif font-bold text-primary leading-snug">
        {video.title}
      </h3>
      {video.description && (
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{video.description}</p>
      )}
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export function Hosting() {
  const [activeVideo, setActiveVideo] = useState<HostingVideo | null>(null);

  return (
    <>
      <section
        id="hosting"
        className="py-16 md:py-24 bg-background relative border-y border-border/50"
      >
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-2xl mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3"
            >
              On Stage
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4"
            >
              Event <span className="text-accent italic font-normal">Hosting</span>.
            </motion.h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From corporate stages to game-show activations — bringing energy, polish, and
              command of the room to events of every size.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {hostingVideos.map((video, idx) => (
              <HostingCard
                key={video.id}
                video={video}
                index={idx}
                onPlay={() => setActiveVideo(video)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeVideo && (
        <HostingModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}
