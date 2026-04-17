import { useState } from "react";
import { motion } from "framer-motion";
import { socialRoles, featuredClients } from "@/data/socialMedia";

export function SocialMedia() {
  const [showAll, setShowAll] = useState(false);
  const featured = socialRoles.filter(r => r.featured);
  const additional = socialRoles.filter(r => !r.featured);

  return (
    <section id="social" className="py-24 bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">Digital Strategy</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary leading-tight">
              Social Media<br />
              <span className="italic font-normal">at Scale.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Over a decade leading organic social strategy at the world's top agencies — building content practices, launching brand presences, and managing social for some of the most recognized names in the world.
            </p>

            {/* Client ticker */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">Clients include</p>
              <div className="flex flex-wrap gap-2">
                {featuredClients.map(client => (
                  <span key={client} className="px-3 py-1.5 text-sm font-semibold border border-primary/30 text-primary bg-background">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured roles — big 4 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background border border-border p-8 flex flex-col hover:border-primary/50 transition-colors group"
            >
              {/* Agency + period */}
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors">
                  {role.agency}
                </h3>
                <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground shrink-0 mt-1.5">
                  {role.period}
                </span>
              </div>

              {/* Title */}
              <p className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">{role.title}</p>

              {/* Clients */}
              {role.clients.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {role.clients.map(c => (
                    <span key={c} className="text-xs font-bold px-2.5 py-1 bg-primary/8 text-primary border border-primary/20">
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <ul className="space-y-2 mt-auto">
                {role.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent font-bold shrink-0 mt-0.5">—</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional roles toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full py-4 border border-border text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:border-primary transition-all"
          >
            {showAll ? "Show Less" : `+ ${additional.length} More Roles`}
          </button>

          {showAll && (
            <div className="mt-6 space-y-4">
              {additional.map((role, i) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-background border border-border p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-primary/40 transition-colors"
                >
                  <div className="sm:w-48 shrink-0">
                    <p className="font-serif font-bold text-primary text-lg">{role.agency}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{role.period}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">{role.title}</p>
                    {role.clients.length > 0 && (
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium text-foreground">Clients: </span>
                        {role.clients.join(", ")}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground leading-relaxed">{role.highlights[0]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
