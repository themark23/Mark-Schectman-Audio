import { motion } from "framer-motion";
import { Mic, Radio, BookOpen, Users } from "lucide-react";

const cards = [
  {
    icon: <Radio className="w-7 h-7 text-accent" />,
    title: "Radio",
    description: "20+ years on the DFW radio dial: 102.1 The Edge, 96.7/1310 The Ticket, ALT103.7, 88.1 Indie."
  },
  {
    icon: <Mic className="w-7 h-7 text-accent" />,
    title: "Voice Over",
    description: "Voiced Smithsonian Magazine on Audible.com and has narrated numerous audiobooks."
  },
  {
    icon: <Users className="w-7 h-7 text-accent" />,
    title: "Emcee / Host",
    description: "Award-winning TV host and emcee for galas, festivals, and corporate events across Texas."
  },
  {
    icon: <BookOpen className="w-7 h-7 text-accent" />,
    title: "Writer & Social Media Expert",
    description: "Freelance writer and social media strategist with deep roots in the Dallas music scene."
  }
];

const milestones = [
  {
    era: "2009 — 2015",
    station: "102.1 The Edge",
    show: "The Local Edge",
    description: "Dallas Observer's Best Radio DJ 2009. Built \"The Local Edge\" into the definitive Sunday night showcase for DFW's independent music scene — the show that Pete Freedman called deserving of a medal.",
  },
  {
    era: "2015 — 2018",
    station: "96.7 / 1310 The Ticket",
    show: "The Local Ticket",
    description: "Pioneered the first and only music show on a sports radio station in the DFW market. Brought local songwriters, guitar heroes, and aspiring pop stars to an entirely new audience.",
  },
  {
    era: "2018 — 2020",
    station: "ALT 103.7",
    show: "DJ Mark Aircheck & Locals Only",
    description: "Hosted afternoons and mornings at ALT 103.7 while running Locals Only on Sunday nights — a weekly deep dive into the best music coming out of Dallas, Fort Worth, and Denton.",
  },
  {
    era: "Present",
    station: "88.1 Indie & Beyond",
    show: "Voice Over, Emcee & More",
    description: "Championing independent music while expanding nationally — voice of Smithsonian Magazine on Audible, audiobook narrator, and emcee for events from concert festivals to corporate galas.",
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-secondary">

      {/* What I Do */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-12 md:mb-20 text-center mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest uppercase text-accent mb-4"
            >
              What I Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary"
            >
              Award-winning DFW radio personality, voice over talent, emcee, social media expert, freelance writer, and TV host.
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="bg-background border border-border p-7 md:p-10 group hover:border-accent transition-colors"
              >
                <div className="mb-6 md:mb-8">{card.icon}</div>
                <h4 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 md:mb-4">{card.title}</h4>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="border-t border-border py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">

            {/* Left: label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">Career Arc</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight mb-4 md:mb-6">
                Two Decades<br />
                <span className="italic font-normal">On Air.</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A career built on connecting audiences with the music and artists that matter — in the country's fifth-largest media market.
              </p>
            </motion.div>

            {/* Right: timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

              <div className="space-y-10 md:space-y-12">
                {milestones.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="relative pl-10"
                  >
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${
                      i === milestones.length - 1
                        ? "border-accent bg-accent"
                        : "border-primary bg-background"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        i === milestones.length - 1 ? "bg-accent-foreground" : "bg-primary"
                      }`} />
                    </div>

                    <div className="pb-2">
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
                        <span className="text-xs font-bold tracking-widest uppercase text-accent">{item.era}</span>
                        <span className="text-xs text-muted-foreground font-medium">{item.show}</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-serif font-bold text-primary mb-2 md:mb-3">{item.station}</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
