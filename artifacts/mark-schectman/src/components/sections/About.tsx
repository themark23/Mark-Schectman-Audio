import { motion } from "framer-motion";
import { Mic, Radio, BookOpen, Users } from "lucide-react";

export function About() {
  const cards = [
    {
      icon: <Radio className="w-8 h-8 text-primary" />,
      title: "Radio Personality",
      description: "A staple of DFW radio for over two decades. Heard on 102.1 The Edge, 96.7/1310 The Ticket, ALT103.7, and 88.1 Indie."
    },
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "Voice Over",
      description: "From commercial imaging to narrating Smithsonian Magazine on Audible and numerous full-length audiobooks."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Emcee & Host",
      description: "Commanding the stage at corporate galas, charity events, and conferences. Professional, warm, and engaging."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Writer & Strategist",
      description: "Expert in social media strategy, content creation, and engaging audiences across multiple digital platforms."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            Behind the <span className="text-primary italic font-normal">Mic</span>.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I believe that great broadcasting is about connection. Whether it's to millions of listeners during morning drive, narrating a piece of history, or commanding a room of thousands—it's about making people feel something. I bring that same electric energy and polished professionalism to every project.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-card border border-card-border p-8 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
