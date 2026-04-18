import { motion } from "framer-motion";
import { pressClippings, featuredQuotes, allClippings } from "@/data/press";

export function Press() {
  const cocktailClipping = pressClippings.find(p => p.id === "12");
  const regularClippings = allClippings.filter(p => p.id !== "12");

  return (
    <section id="press" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Decorative vertical rule */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block opacity-40" />

      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">As Seen In</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary">
            Press &amp; <span className="italic font-normal">Recognition</span>.
          </h2>
        </motion.div>

        {/* Featured Pull Quotes */}
        <div className="grid md:grid-cols-3 gap-px bg-border mb-10 md:mb-16">
          {featuredQuotes.map((clipping, i) => (
            <motion.div
              key={clipping.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-7 md:p-10 relative group hover:bg-secondary transition-colors"
            >
              <div className="text-5xl md:text-6xl font-serif text-primary/15 leading-none mb-3 md:mb-4 select-none">&ldquo;</div>
              <p className="text-base md:text-xl font-serif text-foreground leading-relaxed mb-5 md:mb-6">
                {clipping.quote}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-xs font-bold tracking-widest uppercase text-accent">{clipping.publication}</p>
                {clipping.headline && (
                  <p className="text-sm text-muted-foreground mt-1">{clipping.headline}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Clippings Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
          {regularClippings.map((clipping, i) => (
            <motion.div
              key={clipping.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-5 md:gap-6 items-start py-5 md:py-6 border-b border-border group"
            >
              <div className="shrink-0 w-1 self-stretch bg-border group-hover:bg-accent transition-colors rounded-full" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent">
                    {clipping.publication}
                  </span>
                  {clipping.year && (
                    <span className="text-xs text-muted-foreground">{clipping.year}</span>
                  )}
                </div>
                <p className="text-xs md:text-sm font-bold text-muted-foreground mb-2 md:mb-3 uppercase tracking-wide">
                  {clipping.headline}
                </p>
                <p className="text-sm md:text-base text-foreground leading-relaxed">
                  &ldquo;{clipping.quote}&rdquo;
                </p>
                {clipping.author && (
                  <p className="text-sm text-primary font-medium mt-2 md:mt-3">&mdash; {clipping.author}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cocktail Easter Egg */}
        {cocktailClipping && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-8 border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col sm:flex-row gap-5 md:gap-6 items-start sm:items-center"
          >
            <div className="shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                  <path d="M8 22h8"/><path d="M7 10h10"/><path d="m12 10 4-8H8l4 8Z"/><path d="M12 10v12"/>
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-1">
                {cocktailClipping.publication} — {cocktailClipping.headline}
              </p>
              <p className="text-foreground font-serif text-base md:text-lg leading-relaxed">
                &ldquo;{cocktailClipping.quote}&rdquo;
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
