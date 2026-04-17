import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { writing, publications, writingCategories, type WritingCategory } from "@/data/writing";

const pubColors: Record<string, string> = {
  "Kempt (UrbanDaddy)": "bg-amber-100 text-amber-800 border-amber-200",
  "AskMen.com": "bg-sky-100 text-sky-800 border-sky-200",
  "Cocktail Enthusiast": "bg-rose-100 text-rose-800 border-rose-200",
  "Dallas Observer": "bg-emerald-100 text-emerald-800 border-emerald-200",
};

export function Writing() {
  const [activeCategory, setActiveCategory] = useState<WritingCategory>("All");

  const filtered = activeCategory === "All"
    ? writing
    : writing.filter(w => w.category === activeCategory);

  // Group filtered pieces by publication
  const grouped = publications
    .map(pub => ({
      ...pub,
      pieces: filtered.filter(w => w.publication === pub.name),
    }))
    .filter(g => g.pieces.length > 0);

  return (
    <section id="writing" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">Freelance Writing</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary">
              The <span className="italic font-normal">Written</span> Word.
            </h2>
            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
              From music criticism and concert reviews to lifestyle features and cocktail culture — bylines across print and digital.
            </p>
          </motion.div>

          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 shrink-0"
          >
            {writingCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border text-foreground hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Publication groups */}
        <div className="space-y-12">
          {grouped.map((group, gi) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
            >
              {/* Publication header */}
              <div className="flex items-center gap-4 mb-6">
                <span className={`text-xs font-bold tracking-widest uppercase px-3 py-1.5 border ${pubColors[group.name] ?? "bg-muted text-muted-foreground border-border"}`}>
                  {group.name}
                </span>
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground font-medium">{group.pieces.length} {group.pieces.length === 1 ? "piece" : "pieces"}</span>
              </div>

              {/* Article list */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.pieces.map((piece, pi) => (
                  <motion.div
                    key={piece.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: pi * 0.03 }}
                  >
                    {piece.url ? (
                      <a
                        href={piece.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between gap-3 p-4 bg-background border border-border hover:border-primary hover:shadow-sm transition-all group"
                      >
                        <span className="text-foreground font-medium leading-snug group-hover:text-primary transition-colors">
                          {piece.title}
                        </span>
                        <ExternalLink className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors mt-0.5" />
                      </a>
                    ) : (
                      <div className="flex items-start gap-3 p-4 bg-background border border-border">
                        <div className="w-1 h-full shrink-0 self-stretch bg-primary/20 rounded-full mt-1" />
                        <span className="text-foreground font-medium leading-snug">{piece.title}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground mt-12 text-center"
        >
          Links coming soon — reach out at{" "}
          <a href="mailto:markschectman@gmail.com" className="text-primary hover:text-accent transition-colors font-medium">
            markschectman@gmail.com
          </a>{" "}
          for writing samples.
        </motion.p>

      </div>
    </section>
  );
}
