import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Disc } from "lucide-react";
import { audioTracks } from "@/data/audioTracks";

export function AudioSamples() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  
  const categories = ["All", "Radio Imaging", "Voice Over", "Emcee Highlights", "Commercials"];

  const filteredTracks = activeCategory === "All" 
    ? audioTracks 
    : audioTracks.filter(t => t.category === activeCategory);

  return (
    <section id="audio" className="py-24 bg-background relative border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6"
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
            {categories.map(cat => (
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
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-accent tracking-widest uppercase mb-2 block">{track.category}</span>
                  <h4 className="text-2xl font-serif font-bold text-primary">{track.title}</h4>
                </div>
                {track.duration && (
                  <span className="text-muted-foreground font-mono text-sm">{track.duration}</span>
                )}
              </div>
              
              {track.description && (
                <p className="text-muted-foreground mb-6">{track.description}</p>
              )}

              <div className="mt-auto">
                {track.soundcloudUrl ? (
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(track.soundcloudUrl)}&color=%23E03C1A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                  ></iframe>
                ) : (
                  <div className="w-full h-[166px] bg-background border border-border flex flex-col items-center justify-center text-muted-foreground gap-3">
                    <Disc className="w-8 h-8 opacity-50" />
                    <span className="text-sm font-medium uppercase tracking-widest">Track Coming Soon</span>
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
