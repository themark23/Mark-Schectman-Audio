import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Radio", href: "#radio" },
    { name: "Audio", href: "#audio" },
    { name: "Interviews", href: "#interviews" },
    { name: "Press", href: "#press" },
    { name: "Writing", href: "#writing" },
    { name: "Social", href: "#social" },
    { name: "Booking", href: "#booking" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-3 md:py-4 shadow-sm" : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-5 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-xl md:text-3xl font-bold tracking-tight text-primary hover:text-accent transition-colors leading-none">
          Mark On the Radio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l border-border pl-5">
            <a href="https://instagram.com" className="text-foreground hover:text-accent transition-colors"><FaInstagram size={18} /></a>
            <a href="https://twitter.com" className="text-foreground hover:text-accent transition-colors"><FaTwitter size={18} /></a>
            <a href="https://facebook.com" className="text-foreground hover:text-accent transition-colors"><FaFacebookF size={18} /></a>
            <a href="https://linkedin.com" className="text-foreground hover:text-accent transition-colors"><FaLinkedinIn size={18} /></a>
            <a href="https://tiktok.com" className="text-foreground hover:text-accent transition-colors"><FaTiktok size={18} /></a>
          </div>
          <a
            href="#booking"
            className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-none hover:bg-primary/90 transition-all uppercase tracking-wide text-sm"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground hover:text-accent transition-colors p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold text-foreground hover:text-accent transition-colors uppercase tracking-wider py-3 border-b border-border/40 last:border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-5 pt-5 mt-2">
                <a href="https://instagram.com" className="text-foreground hover:text-accent transition-colors"><FaInstagram size={20} /></a>
                <a href="https://twitter.com" className="text-foreground hover:text-accent transition-colors"><FaTwitter size={20} /></a>
                <a href="https://facebook.com" className="text-foreground hover:text-accent transition-colors"><FaFacebookF size={20} /></a>
                <a href="https://linkedin.com" className="text-foreground hover:text-accent transition-colors"><FaLinkedinIn size={20} /></a>
                <a href="https://tiktok.com" className="text-foreground hover:text-accent transition-colors"><FaTiktok size={20} /></a>
              </div>
              <a
                href="#booking"
                className="mt-4 w-full text-center py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
