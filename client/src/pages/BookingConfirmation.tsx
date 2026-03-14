import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function BookingConfirmation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl w-full bg-white p-12 md:p-16 text-center shadow-2xl border border-border"
        >
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-primary">
              <CheckCircle2 size={48} strokeWidth={1.5} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display mb-4">Reservation Confirmed</h1>
          <p className="text-muted-foreground font-light mb-10 leading-relaxed text-lg">
            Thank you for choosing Sahar & Co. Your request has been received, and our concierge team will reach out to you shortly to finalize the details of your stay.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full sm:w-auto border border-foreground text-foreground px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Return Home
            </Link>
            <Link 
              href="/properties" 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-foreground transition-colors duration-300"
            >
              Explore More
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
