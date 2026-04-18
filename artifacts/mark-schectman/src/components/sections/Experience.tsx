import { motion } from "framer-motion";

const milestones = [
  {
    year: "2002 - 2010",
    title: "102.1 The Edge",
    description: "Started the journey in alternative rock, hosting the evening show and eventually moving to the highly coveted afternoon drive slot."
  },
  {
    year: "2010 - 2015",
    title: "96.7 / 1310 The Ticket",
    description: "Brought sports and culture together, contributing to the dominant sports talk station in the DFW market."
  },
  {
    year: "2015 - 2020",
    title: "ALT 103.7",
    description: "Returned to alternative roots as the voice of mornings, waking up Dallas/Fort Worth with music and mayhem."
  },
  {
    year: "2020 - Present",
    title: "88.1 Indie & Beyond",
    description: "Championing independent music while expanding into national voice over campaigns, audiobook narration, and high-profile emcee work."
  }
];

export function Experience() {
  return (
    <section className="py-16 md:py-24 bg-card/30 relative border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4 md:mb-6">
              Two Decades on <br/><span className="text-primary italic font-normal">Air</span>.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              A career built on connecting with audiences in the country's fifth-largest media market. From late-night alternative rock to morning drive sports talk, versatility and authenticity have been the constant.
            </p>
            <div className="flex gap-4 items-center">
              <div className="h-px bg-border flex-1" />
              <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">DFW Radio History</span>
              <div className="h-px bg-border flex-1" />
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-border md:left-[19px]" />
            
            <div className="space-y-8 md:space-y-10">
              {milestones.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-10 md:pl-16"
                >
                  <div className="absolute left-0 top-1 w-[30px] h-[30px] md:w-[38px] md:h-[38px] bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-primary mb-1 block">{item.year}</span>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
