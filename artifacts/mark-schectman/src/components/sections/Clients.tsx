import { motion } from "framer-motion";

const clients = [
  "Smithsonian",
  "Dallas Mavericks",
  "Toyota",
  "American Airlines",
  "Children's Health",
  "Audible",
  "iHeartMedia",
  "Cumulus Media"
];

export function Clients() {
  return (
    <section className="py-16 border-y border-border bg-card/50 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="container mx-auto px-6 md:px-12 mb-8 text-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Trusted By</p>
      </div>

      <div className="flex w-[200%] md:w-full overflow-hidden">
        <motion.div 
          className="flex items-center justify-around min-w-full gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div 
              key={i}
              className="text-xl md:text-2xl font-serif font-semibold text-foreground/40 whitespace-nowrap"
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
