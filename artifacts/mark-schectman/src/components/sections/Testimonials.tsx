import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Mark brings an unparalleled level of energy to our annual gala. He knows how to read the room, adapt on the fly, and keep everyone engaged from start to finish.",
    author: "Sarah Jenkins",
    role: "Event Director, Children's Health Foundation"
  },
  {
    quote: "Working with Mark on the Smithsonian audio series was a breeze. His tone is authoritative yet approachable—exactly what we needed for historical narration.",
    author: "David Chen",
    role: "Executive Producer, Audible"
  },
  {
    quote: "For morning drive radio, you need someone who wakes people up without shouting at them. Mark has that rare blend of wit, warmth, and timing.",
    author: "Michael Ross",
    role: "Program Director, iHeartMedia"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            The <span className="text-primary italic font-normal">Verdict</span>.
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take my word for it. Here's what event directors and producers have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-card-border p-8 rounded-3xl relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground text-lg leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">{t.author}</p>
                <p className="text-sm text-primary">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
