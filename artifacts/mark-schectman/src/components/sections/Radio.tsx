import { motion } from "framer-motion";

export function Radio() {
  const shows = [
    {
      title: "DJ Mark Aircheck",
      dates: "2018–2020",
      description: "Mark hosted afternoons and mornings at ALT 103.7 from 2018–2020.",
      embed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/themark23/dj-mark-aircheck-2024&color=%23E03C1A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
    },
    {
      title: "The Local Ticket",
      dates: "2015–2018",
      description: "Mark hosted the first and only music show on a sports station from 2015–2018 on Sportsradio 96.7/1310 The Ticket.",
      embed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/themark23/local-ticket-aircheck&color=%23E03C1A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
    },
    {
      title: "Locals Only",
      dates: "ALT 103.7",
      description: "Locals Only aired Sunday nights on ALT 103.7 and featured the best local music from Dallas/Ft. Worth/denton.",
      embed: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/themark23/locals-only-alt-1037-6919&color=%23E03C1A&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
    }
  ];

  return (
    <section id="radio" className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-background mb-4 md:mb-6">
                Mark on the <br/><span className="italic text-accent">Radio</span>.
              </h2>
              <div className="w-16 h-1 bg-accent mb-6 md:mb-8"></div>
              <div className="aspect-[4/5] overflow-hidden shadow-2xl relative max-w-sm lg:max-w-none">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/6642ea1aa390b918824df07e/b412c351-aba3-42cc-ad4d-ee0daebd265f/IMG_3549.jpg"
                  alt="Mark in the radio studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-8 md:space-y-12">
            {shows.map((show, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background/5 border border-primary-foreground/10 p-6 md:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-2 md:gap-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-background">{show.title}</h3>
                  <span className="text-accent font-bold tracking-widest uppercase text-sm shrink-0">{show.dates}</span>
                </div>
                <p className="text-primary-foreground/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-2xl">
                  {show.description}
                </p>
                <div className="w-full h-[166px] bg-black/20 rounded overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay" 
                    src={show.embed}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
