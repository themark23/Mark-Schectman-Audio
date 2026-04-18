import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 pb-10 md:pt-24 md:pb-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1 lg:col-span-6 xl:col-span-5 text-center lg:text-left"
        >
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif font-black tracking-tight text-primary leading-[1.1] mb-4 md:mb-6">
            What up.<br/>
            <span className="italic text-foreground font-bold">It's Mark.</span>
          </h1>
          
          <p className="text-base md:text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-10">
            Award-winning DFW radio personality, voice over talent, and emcee.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
            <a 
              href="#audio"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest text-sm hover:bg-accent/90 transition-all shadow-xl"
            >
              Hear the Demo
            </a>
            <a 
              href="#booking"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-primary border-2 border-primary font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Book Mark
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 lg:col-span-6 xl:col-span-7 relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/6642ea1aa390b918824df07e/58832ad4-2b05-4929-be6e-67fc32333161/Mark-08.jpg" 
              alt="Mark Schectman" 
              className="w-full h-full object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
