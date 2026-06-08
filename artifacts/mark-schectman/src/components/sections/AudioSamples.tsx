import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Music2 } from "lucide-react";
import { audioTracks } from "@/data/audioTracks";
import { WaveformPlayer } from "@/components/ui/WaveformPlayer";

const ALL_CATEGORIES = ["All", "Radio Imaging", "Audiobooks", "Voice Over", "Emcee Highlights"] as const;

export function AudioSamples() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);

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

          {/* Filter tabs */}
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
        <div className="flex flex-col gap-0">
          {filteredTracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              {/* ── Waveform player (tracks with hosted audioUrl) ── */}
              {track.audioUrl && (
                <div
                  className={`flex flex-col gap-3 p-5 md:p-6 border-b border-border transition-colors ${
                    activeTrackId === track.id
                      ? "bg-primary/5 border-l-2 border-l-primary"
                      : "bg-background hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-accent block mb-0.5">
                        {track.category}
                      </span>
                      <h4 className="text-base md:text-lg font-serif font-bold text-primary leading-snug">
                        {track.title}
                      </h4>
                    </div>
                  </div>
                  <WaveformPlayer
                    audioUrl={track.audioUrl}
                    isActive={activeTrackId === track.id}
                    onActivate={() => setActiveTrackId(track.id)}
                    onDeactivate={() => setActiveTrackId(null)}
                  />
                </div>
              )}

              {/* ── SoundCloud link card (long-form shows / no hosted file) ── */}
              {!track.audioUrl && track.soundcloudUrl && (
                <div className="flex items-center gap-4 p-5 md:p-6 border-b border-border bg-background hover:bg-secondary/50 transition-colors">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "hsl(152, 42%, 22%)" }}
                  >
                    <Music2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-accent block mb-0.5">
                      {track.category}
                    </span>
                    <h4 className="text-base font-serif font-bold text-primary truncate">
                      {track.title}
                    </h4>
                    {track.duration && (
                      <span className="text-xs text-muted-foreground font-mono">
                        {track.duration}
                      </span>
                    )}
                  </div>
                  <a
                    href={track.soundcloudUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors shrink-0"
                    onClick={e => e.stopPropagation()}
                  >
                    Listen
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* ── Audiobook card ── */}
              {track.category === "Audiobooks" && !track.soundcloudUrl && !track.audioUrl && (
                <div className="flex items-center gap-4 p-5 md:p-6 border-b border-border bg-background group hover:bg-secondary/50 transition-colors">
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
                </div>
              )}

              {/* ── Coming soon (VO / Emcee with no audio) ── */}
              {!track.audioUrl && !track.soundcloudUrl && track.category !== "Audiobooks" && (
                <div className="flex items-center gap-4 p-5 md:p-6 border-b border-border bg-background opacity-50">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center shrink-0"
                  >
                    <Music2 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground block mb-0.5">
                      {track.category}
                    </span>
                    <h4 className="text-base font-serif font-bold text-muted-foreground">{track.title}</h4>
                    <p className="text-xs text-muted-foreground">Coming soon</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
