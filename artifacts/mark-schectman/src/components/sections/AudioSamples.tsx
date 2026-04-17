import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

type Track = {
  id: string;
  title: string;
  duration: string;
  category: string;
};

const tracks: Track[] = [
  { id: "1", title: "Morning Drive Opener", duration: "1:24", category: "Radio Imaging" },
  { id: "2", title: "Alternative Station ID", duration: "0:45", category: "Radio Imaging" },
  { id: "3", title: "Sports Talk Intro", duration: "1:12", category: "Radio Imaging" },
  { id: "4", title: "Smithsonian Audiobook Excerpt", duration: "2:30", category: "Voice Over" },
  { id: "5", title: "National Auto Commercial", duration: "0:30", category: "Voice Over" },
  { id: "6", title: "Documentary Narration", duration: "1:45", category: "Voice Over" },
  { id: "7", title: "Corporate Gala Host Intro", duration: "2:15", category: "Emcee Highlights" },
  { id: "8", title: "Charity Auction Call", duration: "1:50", category: "Emcee Highlights" },
];

const categories = ["All", "Radio Imaging", "Voice Over", "Emcee Highlights"];

export function AudioSamples() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Mock audio functionality since we don't have real audio files
  const togglePlay = (id: string) => {
    if (playingTrack === id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingTrack(id);
      setIsPlaying(true);
    }
  };

  const filteredTracks = activeCategory === "All" 
    ? tracks 
    : tracks.filter(t => t.category === activeCategory);

  return (
    <section id="audio" className="py-24 bg-secondary/50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
            >
              Hear the <span className="text-primary italic font-normal">Difference</span>.
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              From high-energy morning drives to measured, professional narration.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {filteredTracks.map((track, i) => {
            const isThisPlaying = playingTrack === track.id && isPlaying;
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-4 p-4 md:p-6 rounded-2xl transition-all border ${
                  playingTrack === track.id 
                    ? "bg-card border-primary/50 shadow-[0_0_20px_rgba(245,158,11,0.1)]" 
                    : "bg-background border-border hover:border-primary/30 hover:bg-card"
                }`}
              >
                <button
                  onClick={() => togglePlay(track.id)}
                  className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center transition-all ${
                    isThisPlaying
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                      : "bg-secondary text-foreground hover:bg-primary/20 hover:text-primary"
                  }`}
                >
                  {isThisPlaying ? <Pause className="w-6 h-6" fill="currentColor" /> : <Play className="w-6 h-6 ml-1" fill="currentColor" />}
                </button>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-medium text-primary tracking-wider uppercase">{track.category}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground truncate">{track.title}</h4>
                </div>
                
                <div className="flex items-center gap-4">
                  {playingTrack === track.id && (
                    <div className={`flex items-end gap-1 h-6 w-12 ${isPlaying ? 'playing' : ''}`}>
                      <div className="w-1.5 bg-primary rounded-t-sm eq-bar" style={{height: '4px'}}></div>
                      <div className="w-1.5 bg-primary rounded-t-sm eq-bar" style={{height: '8px'}}></div>
                      <div className="w-1.5 bg-primary rounded-t-sm eq-bar" style={{height: '12px'}}></div>
                      <div className="w-1.5 bg-primary rounded-t-sm eq-bar" style={{height: '6px'}}></div>
                      <div className="w-1.5 bg-primary rounded-t-sm eq-bar" style={{height: '10px'}}></div>
                    </div>
                  )}
                  <span className="text-muted-foreground font-mono text-sm">{track.duration}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
