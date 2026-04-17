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
    { name: "Booking", href: "#booking" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-primary hover:text-accent transition-colors">
          Mark On the Radio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l border-border pl-6">
            <a href="https://instagram.com" className="text-foreground hover:text-accent transition-colors"><FaInstagram size={18} /></a>
            <a href="https://twitter.com" className="text-foreground hover:text-accent transition-colors"><FaTwitter size={18} /></a>
            <a href="https://facebook.com" className="text-foreground hover:text-accent transition-colors"><FaFacebookF size={18} /></a>
            <a href="https://linkedin.com" className="text-foreground hover:text-accent transition-colors"><FaLinkedinIn size={18} /></a>
            <a href="https://tiktok.com" className="text-foreground hover:text-accent transition-colors"><FaTiktok size={18} /></a>
          </div>
          <a
            href="mailto:markschectman@gmail.com"
            className="ml-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-none hover:bg-primary/90 transition-all uppercase tracking-wide text-sm"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground hover:text-accent transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            <nav className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-foreground hover:text-accent transition-colors uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <a href="https://instagram.com" className="text-foreground hover:text-accent transition-colors"><FaInstagram size={22} /></a>
                <a href="https://twitter.com" className="text-foreground hover:text-accent transition-colors"><FaTwitter size={22} /></a>
                <a href="https://facebook.com" className="text-foreground hover:text-accent transition-colors"><FaFacebookF size={22} /></a>
                <a href="https://linkedin.com" className="text-foreground hover:text-accent transition-colors"><FaLinkedinIn size={22} /></a>
                <a href="https://tiktok.com" className="text-foreground hover:text-accent transition-colors"><FaTiktok size={22} /></a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
