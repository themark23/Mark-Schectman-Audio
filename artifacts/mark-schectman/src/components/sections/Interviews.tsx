import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { interviews } from "@/data/interviews";
import { X } from "lucide-react";

// ── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) {
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
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Close</span>
          </button>

          {/* Title */}
          <p className="text-white font-serif font-bold text-lg mb-3 truncate">{title}</p>

          {/* Video */}
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Interview Card ───────────────────────────────────────────────────────────
function InterviewCard({
  interview,
  index,
  onPlay,
}: {
  interview: (typeof interviews)[0];
  index: number;
  onPlay: () => void;
}) {
  const thumbUrl = interview.youtubeId
    ? `https://img.youtube.com/vi/${interview.youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      className="group bg-background border border-border hover:border-primary/40 transition-colors cursor-pointer overflow-hidden"
      onClick={onPlay}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {thumbUrl ? (
          <img
            src={thumbUrl}
            alt={interview.artistName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={(e) => {
              // Fall back to hqdefault if maxresdefault isn't available
              (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${interview.youtubeId}/hqdefault.jpg`;
            }}
          />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}

        {/* Dark overlay + play button */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
            <svg
              className="ml-1"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="white"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-accent text-white px-2.5 py-1">
            {interview.type === "video" ? "Video" : "Audio"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-primary leading-tight">
            {interview.artistName}
          </h3>
          {interview.show && (
            <span className="text-xs font-semibold text-muted-foreground shrink-0 mt-1">
              {interview.show}
            </span>
          )}
        </div>
        {interview.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {interview.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export function Interviews() {
  const [filter, setFilter] = useState<"all" | "video" | "audio">("all");
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const filtered =
    filter === "all" ? interviews : interviews.filter((i) => i.type === filter);

  return (
    <>
      <section id="interviews" className="py-16 md:py-24 bg-secondary relative">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4"
              >
                Band{" "}
                <span className="text-accent italic font-normal">
                  Interviews
                </span>
                .
              </motion.h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Decades spent digging into the DFW music scene and beyond.
                Candid conversations with artists, from backstage at local
                venues to live in-studio sessions.
              </p>
            </div>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {(["all", "video", "audio"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${
                    filter === type
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {type}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filtered.map((interview, idx) => (
              <InterviewCard
                key={interview.id}
                interview={interview}
                index={idx}
                onPlay={() => {
                  if (interview.youtubeId) {
                    setActiveVideo({
                      id: interview.youtubeId,
                      title: interview.artistName,
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal — rendered outside the section so it covers everything */}
      {activeVideo && (
        <VideoModal
          videoId={activeVideo.id}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}
