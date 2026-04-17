import { useState } from "react";
import { motion } from "framer-motion";
import { Disc, BookOpen, ExternalLink } from "lucide-react";
import { audioTracks } from "@/data/audioTracks";

const ALL_CATEGORIES = ["All", "Radio Imaging", "Audiobooks", "Voice Over", "Emcee Highlights"] as const;

export function AudioSamples() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTracks = activeCategory === "All"
    ? audioTracks
    : audioTracks.filter(t => t.category === activeCategory);

  return (
    <section id="audio" className="py-24 bg-background relative border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
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
              className="text-5xl md:text-6xl font-serif font-bold text-primary"
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
                className={`px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${
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

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredTracks.map((track, i) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col bg-card border border-card-border p-6 group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase mb-2 block">{track.category}</span>
                  <h4 className="text-xl font-serif font-bold text-primary leading-snug">{track.title}</h4>
                </div>
                {track.duration && (
                  <span className="text-muted-foreground font-mono text-sm shrink-0 mt-1">{track.duration}</span>
                )}
              </div>

              {track.description && (
                <p className="text-muted-foreground mb-4 text-sm">{track.description}</p>
              )}

              <div className="mt-auto">
                {/* SoundCloud embed */}
                {track.soundcloudUrl && (
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.soundcloudUrl)}&color=%23E03C1A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                  />
                )}

                {/* Audiobook card */}
                {track.category === "Audiobooks" && !track.soundcloudUrl && (
                  <a
                    href={track.audibleUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-5 bg-secondary border border-border p-4 hover:border-primary transition-colors group"
                  >
                    {track.coverUrl ? (
                      <img
                        src={track.coverUrl}
                        alt={track.title}
                        className="w-20 h-20 object-cover shrink-0 shadow-md"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Narrated by Mark Schectman</p>
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">Listen on Audible</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                  </a>
                )}

                {/* Placeholder for VO / Emcee */}
                {!track.soundcloudUrl && track.category !== "Audiobooks" && (
                  <div className="w-full h-[80px] bg-background border border-border flex items-center justify-center text-muted-foreground gap-3">
                    <Disc className="w-6 h-6 opacity-40" />
                    <span className="text-sm font-medium uppercase tracking-widest">Coming Soon</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
