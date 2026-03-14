import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled || !isHome || mobileMenuOpen
      ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm text-foreground py-4"
      : "bg-transparent text-white py-6"
  }`;

  return (
    <>
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3">
            <img 
              src="/assets/logo_no_bg.png" 
              alt="Sahar & Co Logo" 
              className={`h-20 w-auto transition-all duration-500 ${isScrolled || !isHome ? 'brightness-0' : 'brightness-0 invert'}`}
            />
            <div className="flex flex-col">
              <span className="font-[Playfair_Display] text-2xl md:text-3xl tracking-[0.25em] uppercase">
                Sahar & Co
              </span>
              <span className={`text-[0.5rem] tracking-[0.3em] uppercase transition-colors duration-300 ${isScrolled || !isHome ? 'text-primary' : 'text-white/80'}`}>
                Exceptional Locations
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/properties" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">
              Residences
            </Link>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-primary transition-colors">
              Our Story
            </a>
            <Link href="/properties" className="border border-current px-6 py-2 text-sm uppercase tracking-widest hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-32 px-6 pb-12 flex flex-col gap-8"
          >
            <Link href="/" className="text-2xl font-display uppercase tracking-widest border-b border-border pb-4">
              Home
            </Link>
            <Link href="/properties" className="text-2xl font-display uppercase tracking-widest border-b border-border pb-4">
              Residences
            </Link>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest border-b border-border pb-4">
              Our Story
            </a>
            <Link href="/properties" className="mt-8 bg-foreground text-background text-center py-4 text-sm uppercase tracking-widest">
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
