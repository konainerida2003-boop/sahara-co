import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { PropertyCard } from "@/components/PropertyCard";
import { useProperties } from "@/hooks/use-properties";
import { motion } from "framer-motion";

export function Properties() {
  const { data: properties, isLoading } = useProperties();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Mini Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-foreground">
        <div className="absolute inset-0 z-0 opacity-40">
          {/* properties header skyline */}
          <img 
            src="https://pixabay.com/get/gde89e919b1082e9ebf34b5d30b273fecf363967e52b9b2d2e6e7336ec0475c8779a099880bc651ab5d5d2140fb9425d2281acae5c184e4280abdf60f06f01195_1280.jpg" 
            alt="Dubai View" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-20">
          <motion.h1 
            className="text-5xl md:text-6xl font-display text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Collection
          </motion.h1>
          <motion.p 
            className="text-white/80 font-light tracking-widest uppercase text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover your next extraordinary stay
          </motion.p>
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto flex-grow w-full">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse bg-secondary aspect-[4/5]" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties?.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))}
            
            {properties?.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-xl font-display text-muted-foreground">No properties available at the moment.</p>
              </div>
            )}
          </div>
        )}
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
