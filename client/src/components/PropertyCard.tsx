import { Link } from "wouter";
import { BedDouble, Bath, Users, MapPin } from "lucide-react";
import type { Property } from "@shared/schema";
import { motion } from "framer-motion";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      <Link href={`/property/${property.id}`} className="block relative overflow-hidden aspect-[4/3]">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={property.imageUrls[0]} 
          alt={property.title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute bottom-4 left-4 z-20 bg-background/95 backdrop-blur px-4 py-2">
          <span className="font-display text-lg">${property.pricePerNight}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider ml-1">/ night</span>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow border border-t-0 border-border">
        <div className="flex items-center gap-1 text-xs text-primary uppercase tracking-widest mb-3">
          <MapPin size={14} />
          <span>{property.location}</span>
        </div>
        
        <Link href={`/property/${property.id}`} className="inline-block">
          <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground font-light mb-6 line-clamp-2 flex-grow">
          {property.description}
        </p>
        
        <div className="flex justify-between items-center pt-6 border-t border-border text-sm text-foreground/70 font-light">
          <div className="flex items-center gap-2" title={`${property.bedrooms} Bedrooms`}>
            <BedDouble size={18} className="text-primary/70" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2" title={`${property.bathrooms} Bathrooms`}>
            <Bath size={18} className="text-primary/70" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2" title={`Up to ${property.maxGuests} Guests`}>
            <Users size={18} className="text-primary/70" />
            <span>{property.maxGuests}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
