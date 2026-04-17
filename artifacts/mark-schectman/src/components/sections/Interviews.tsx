import { useState } from "react";
import { motion } from "framer-motion";
import { interviews } from "@/data/interviews";
import { Play, Disc } from "lucide-react";

export function Interviews() {
  const [filter, setFilter] = useState<"all" | "video" | "audio">("all");

  const filteredInterviews = filter === "all" 
    ? interviews 
    : interviews.filter(i => i.type === filter);

  return (
    <section id="interviews" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6"
            >
              Band <span className="text-accent italic font-normal">Interviews</span>.
            </motion.h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Decades spent digging into the DFW music scene and beyond. Candid conversations with artists, from backstage at local venues to live in-studio sessions.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            {(["all", "video", "audio"] as const).map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2.5 text-sm font-bold uppercase tracking-widest transition-all ${
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

        <div className="grid md:grid-cols-2 gap-8">
          {filteredInterviews.map((interview, idx) => (
            <motion.div
              key={interview.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background border border-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="mb-6 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase px-3 py-1 bg-accent/10">
                    {interview.type === "video" ? "Video" : "Audio"}
                  </span>
                  {interview.show && <span className="text-sm font-bold text-muted-foreground">{interview.show}</span>}
                </div>
                <h3 className="text-3xl font-serif font-bold text-primary mb-3">{interview.artistName}</h3>
                {interview.description && <p className="text-muted-foreground">{interview.description}</p>}
              </div>

              <div className="w-full aspect-video bg-secondary border border-border flex items-center justify-center">
                {interview.type === "video" && interview.youtubeId ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${interview.youtubeId}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                ) : interview.type === "audio" && interview.soundcloudUrl ? (
                  <div className="w-full h-full flex items-center justify-center p-4">
                     <iframe 
                      width="100%" 
                      height="166" 
                      scrolling="no" 
                      frameBorder="no" 
                      allow="autoplay" 
                      src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(interview.soundcloudUrl)}&color=%23E03C1A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
                    ></iframe>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground flex flex-col items-center p-6">
                    {interview.type === "video" ? <Play className="w-12 h-12 mb-3 opacity-20" /> : <Disc className="w-12 h-12 mb-3 opacity-20" />}
                    <span className="text-sm font-bold tracking-widest uppercase opacity-60">Media Coming Soon</span>
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
