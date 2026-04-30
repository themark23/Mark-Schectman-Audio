import { useState } from "react";
import { motion } from "framer-motion";
import { socialRoles, featuredClients, type SocialRole } from "@/data/socialMedia";

function RoleRow({ role, index }: { role: SocialRole; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="bg-background border border-border p-5 md:p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-primary/40 transition-colors"
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
        {role.highlights.length > 0 && (
          <ul className="space-y-1.5">
            {role.highlights.map((h, hi) => (
              <li key={hi} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                <span className="text-accent font-bold shrink-0 mt-0.5">—</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export function SocialMedia() {
  const [showAll, setShowAll] = useState(false);
  const featured = socialRoles.filter(r => r.featured);
  const additional = socialRoles.filter(r => !r.featured);

  return (
    <section id="social" className="py-16 md:py-24 bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 md:gap-16 items-end mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">Digital Strategy</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
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
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 md:mb-6">
              Almost two decades leading organic social strategy at the world's top agencies — building content practices, launching brand presences, and managing social for some of the most recognized names in the world.
            </p>

            {/* Client ticker */}
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">Clients include</p>
              <div className="flex flex-wrap gap-2">
                {featuredClients.map(client => (
                  <span key={client} className="px-3 py-1.5 text-xs sm:text-sm font-semibold border border-primary/30 text-primary bg-background">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Don Draper hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <img
            src="/don-draper.jpg"
            alt="Don Draper pointing at a whiteboard that reads 'Organic Social'"
            className="w-full h-auto border border-border"
          />
        </motion.div>

        {/* All roles — uniform horizontal list */}
        <div className="space-y-4 mb-5 md:mb-6">
          {featured.map((role, i) => (
            <RoleRow key={role.id} role={role} index={i} />
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
            <div className="mt-5 md:mt-6 space-y-4">
              {additional.map((role, i) => (
                <RoleRow key={role.id} role={role} index={i} />
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
