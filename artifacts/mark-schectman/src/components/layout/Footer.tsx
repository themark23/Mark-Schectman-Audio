import { Instagram, Twitter, Facebook, Linkedin, Music2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight text-foreground hover:text-primary transition-colors mb-6 inline-block">
              Mark Schectman
            </a>
            <p className="text-muted-foreground max-w-sm">
              Award-winning radio personality, voice over talent, and professional emcee based in Dallas/Fort Worth.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#audio" className="text-muted-foreground hover:text-primary transition-colors">Audio Samples</a></li>
              <li><a href="#booking" className="text-muted-foreground hover:text-primary transition-colors">Booking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Music2 className="w-5 h-5" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Mark Schectman. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed for the Stage.
          </p>
        </div>
      </div>
    </footer>
  );
}
