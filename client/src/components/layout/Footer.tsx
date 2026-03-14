import { Link } from "wouter";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/80 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-b border-white/10 pb-16">
        
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <img 
              src="/assets/logo_no_bg.png" 
              alt="Sahar & Co Logo" 
              className="h-10 w-auto brightness-0 invert"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl text-white tracking-widest uppercase">
                Sahar & Co
              </span>
              <span className="text-[0.5rem] text-primary tracking-[0.3em] uppercase mt-1">
                Refined Living
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed mb-6 font-light">
            Curating exceptional stays in Dubai's most prestigious locations. Experience unparalleled luxury and personalized service.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-6 uppercase tracking-widest">Explore</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="/properties" className="hover:text-primary transition-colors">Our Residences</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Concierge Services</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Journal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-6 uppercase tracking-widest">Legal</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-white mb-6 uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
              <span>Downtown Dubai<br/>United Arab Emirates</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+971 50 123 4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>concierge@saharandco.com</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wider">
        <p>&copy; {new Date().getFullYear()} Sahar & Co. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed with precision.</p>
      </div>
    </footer>
  );
}
