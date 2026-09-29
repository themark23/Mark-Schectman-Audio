import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Music2, Play } from "lucide-react";
import { audioTracks } from "@/data/audioTracks";

const ALL_CATEGORIES = ["All", "Radio Imaging", "Audiobooks", "Voice Over", "Emcee Highlights"] as const;

// Builds the SoundCloud embed URL from a track URL
function scEmbedUrl(url: string) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23152e22&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`;
}

// Individual track row — shows a play button facade, loads SC iframe on click
function TrackRow({ track, index }: { track: (typeof audioTracks)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  // ── Audiobook ──────────────────────────────────────────────────────────────
  if (track.category === "Audiobooks") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04 }}
        className="flex items-center gap-4 p-5 md:p-6 border-b border-border bg-background hover:bg-secondary/40 transition-colors"
      >
        {track.coverUrl ? (
          <img
            src={track.coverUrl}
            alt={track.title}
            className="w-14 h-14 object-cover shadow-sm shrink-0"
          />
        ) : (
          <div className="w-14 h-14 bg-secondary border border-border flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent block mb-0.5">
            Audiobook
          </span>
          <h4 className="text-sm md:text-base font-serif font-bold text-primary leading-snug line-clamp-2">
            {track.title}
          </h4>
          {track.description && (
            <p className="text-xs text-muted-foreground mt-0.5">{track.description}</p>
          )}
        </div>
        {track.audibleUrl && (
          <a
            href={track.audibleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors shrink-0"
          >
            Audible
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </motion.div>
    );
  }

  // ── Coming Soon (no audio URL) ─────────────────────────────────────────────
  if (!track.soundcloudUrl && !track.audioUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04 }}
        className="flex items-center gap-4 p-5 md:p-6 border-b border-border bg-background opacity-50"
      >
        <div className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center shrink-0">
          <Music2 className="w-4 h-4 text-muted-foreground" />
        </div>
        <div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground block mb-0.5">
            {track.category}
          </span>
          <h4 className="text-base font-serif font-bold text-muted-foreground">{track.title}</h4>
          <p className="text-xs text-muted-foreground">Coming soon</p>
        </div>
      </motion.div>
    );
  }

  // ── SoundCloud track — facade → expand on click ────────────────────────────
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`border-b border-border transition-colors ${
        expanded ? "bg-primary/5" : "bg-background hover:bg-secondary/40"
      }`}
    >
      {/* Facade row */}
      <div
        className="flex items-center gap-4 p-5 md:p-6 cursor-pointer"
        onClick={() => setExpanded(true)}
      >
        {/* Play button */}
        <button
          aria-label={`Play ${track.title}`}
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform hover:scale-105"
          style={{ background: expanded ? "hsl(8, 75%, 50%)" : "hsl(152, 42%, 22%)" }}
          onClick={(e) => { e.stopPropagation(); setExpanded(true); }}
        >
          <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
        </button>

        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent block mb-0.5">
            {track.category}
          </span>
          <h4 className="text-base md:text-lg font-serif font-bold text-primary truncate">
            {track.title}
          </h4>
        </div>

        {track.duration && (
          <span className="text-xs text-muted-foreground font-mono shrink-0">
            {track.duration}
          </span>
        )}
      </div>

      {/* Lazy-loaded SoundCloud player — only mounts when expanded */}
      {expanded && track.soundcloudUrl && (
        <div className="px-5 md:px-6 pb-5">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={scEmbedUrl(track.soundcloudUrl)}
            className="w-full"
          />
        </div>
      )}
    </motion.div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export function AudioSamples() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTracks = activeCategory === "All"
    ? audioTracks
    : audioTracks.filter(t => t.category === activeCategory);

  return (
    <section id="audio" className="py-16 md:py-24 bg-background relative border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col gap-8 mb-12 md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3"
            >
              Listen
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary"
            >
              Audio <span className="text-accent italic font-normal">Library</span>.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent border border-border text-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Track list */}
        <div className="border-t border-border">
          {filteredTracks.map((track, i) => (
            <TrackRow key={track.id} track={track} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
