import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-20 pb-10 relative z-10 text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold tracking-tight text-primary-foreground hover:text-accent transition-colors mb-6 inline-block">
              Mark Schectman
            </a>
            <p className="text-primary-foreground/80 max-w-sm font-medium mb-6">
              Dallas, Texas
            </p>
            <a href="mailto:markschectman@gmail.com" className="text-xl font-serif italic text-accent hover:text-accent/80 transition-colors">
              markschectman@gmail.com
            </a>
          </div>
          
          <div>
            <h4 className="font-bold text-primary-foreground/50 mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-primary-foreground/90 hover:text-accent transition-colors font-medium">About</a></li>
              <li><a href="#radio" className="text-primary-foreground/90 hover:text-accent transition-colors font-medium">Radio</a></li>
              <li><a href="#audio" className="text-primary-foreground/90 hover:text-accent transition-colors font-medium">Audio Samples</a></li>
              <li><a href="#interviews" className="text-primary-foreground/90 hover:text-accent transition-colors font-medium">Interviews</a></li>
              <li><a href="#booking" className="text-primary-foreground/90 hover:text-accent transition-colors font-medium">Booking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary-foreground/50 mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-white transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-white transition-all">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-white transition-all">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-white transition-all">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-accent hover:text-white transition-all">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm font-medium">
            &copy; {currentYear} Mark Schectman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
