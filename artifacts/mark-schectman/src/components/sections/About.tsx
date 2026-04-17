import { motion } from "framer-motion";
import { Mic, Radio, BookOpen, Users } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <Radio className="w-8 h-8 text-accent" />,
      title: "Radio",
      description: "20+ years on the DFW radio dial: 102.1 The Edge, 96.7/1310 The Ticket, ALT103.7, 88.1 Indie."
    },
    {
      icon: <Mic className="w-8 h-8 text-accent" />,
      title: "Voice Over",
      description: "Voiced Smithsonian Magazine on Audible.com and has narrated numerous audiobooks."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Emcee / Host",
      description: "Award-winning TV host and emcee for galas, festivals, and corporate events across Texas."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Writer & Social Media Expert",
      description: "Freelance writer and social media strategist with deep roots in the Dallas music scene."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-20 text-center mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-accent mb-4"
          >
            What I Do
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
          >
            Award-winning DFW radio personality, voice over talent, emcee, social media expert, freelance writer, and TV host.
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-background border border-border p-10 group hover:border-accent transition-colors"
            >
              <div className="mb-8">
                {card.icon}
              </div>
              <h4 className="text-2xl font-serif font-bold text-primary mb-4">{card.title}</h4>
              <p className="text-muted-foreground text-base leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
