import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 text-center lg:text-left z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live & On-Air
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-foreground leading-[1.05] mb-6">
            The Voice <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-300 italic font-normal">That Connects.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
            Award-winning DFW radio personality, voice over talent, and emcee. Over 20 years of bringing energy, warmth, and professionalism to the mic.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#audio"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] text-center text-lg"
            >
              Hear the Demo
            </a>
            <a 
              href="#booking"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-foreground font-bold rounded-full hover:bg-secondary/80 border border-border transition-all text-center text-lg"
            >
              Book Mark
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Decorative elements behind image */}
          <div className="absolute top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-3xl z-0" />
          <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-3xl z-0 blur-xl" />
          
          <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-3xl border border-border/50 bg-secondary shadow-2xl">
            <img 
              src="/mark-headshot.png" 
              alt="Mark Schectman" 
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          
          {/* Floating badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 lg:-right-12 bg-background border border-border p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">20+ Years</p>
              <p className="text-xs text-muted-foreground">On-Air Experience</p>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
