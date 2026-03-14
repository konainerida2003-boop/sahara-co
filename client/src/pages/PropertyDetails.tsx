import { useState, useMemo } from "react";
import { useRoute, useLocation } from "wouter";
import { motion } from "framer-motion";
import { format, differenceInDays } from "date-fns";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useProperty } from "@/hooks/use-properties";
import { useCreateBooking } from "@/hooks/use-bookings";
import { MapPin, BedDouble, Bath, Users, Check, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function PropertyDetails() {
  const [, params] = useRoute("/property/:id");
  const propertyId = params?.id ? parseInt(params.id) : 0;
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const { data: property, isLoading, error } = useProperty(propertyId);
  const { mutate: createBooking, isPending: isBooking } = useCreateBooking();

  // Booking Form State
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [guests, setGuests] = useState<number>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // Gallery State
  const [currentImage, setCurrentImage] = useState(0);

  // Price Calculation
  const totalPrice = useMemo(() => {
    if (!property || !checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (end <= start) return 0;
    
    const days = differenceInDays(end, start);
    return days * property.pricePerNight;
  }, [checkIn, checkOut, property]);

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center font-display text-2xl animate-pulse">Loading...</div>;
  }

  if (error || !property) {
    return <div className="min-h-screen bg-background flex items-center justify-center font-display text-2xl">Property not found.</div>;
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.imageUrls.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.imageUrls.length) % property.imageUrls.length);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut || totalPrice <= 0) {
      toast({ title: "Invalid Dates", description: "Please select valid check-in and check-out dates.", variant: "destructive" });
      return;
    }
    
    createBooking({
      propertyId: property.id,
      guestName: name,
      guestEmail: email,
      guestPhone: phone,
      checkInDate: new Date(checkIn),
      checkOutDate: new Date(checkOut),
      guests: guests,
      totalPrice: totalPrice,
    }, {
      onSuccess: () => {
        setLocation("/booking-confirmation");
      },
      onError: (err) => {
        toast({ title: "Booking Failed", description: err.message, variant: "destructive" });
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Image Gallery */}
      <section className="relative pt-24 pb-8 px-6 max-w-7xl mx-auto w-full">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-black group">
          <motion.img 
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={property.imageUrls[currentImage]} 
            alt={`${property.title} view ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          
          {property.imageUrls.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-y-1/2 flex gap-2">
                {property.imageUrls.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full pb-32 grid grid-cols-1 lg:grid-cols-3 gap-16">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-sm text-primary uppercase tracking-widest mb-4">
            <MapPin size={16} />
            <span>{property.location}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display mb-6">{property.title}</h1>
          
          <div className="flex flex-wrap gap-8 py-6 border-y border-border mb-10">
            <div className="flex items-center gap-3">
              <Users size={24} className="text-muted-foreground" />
              <div className="flex flex-col text-sm">
                <span className="font-semibold">{property.maxGuests}</span>
                <span className="text-muted-foreground uppercase tracking-wider text-[0.65rem]">Max Guests</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BedDouble size={24} className="text-muted-foreground" />
              <div className="flex flex-col text-sm">
                <span className="font-semibold">{property.bedrooms}</span>
                <span className="text-muted-foreground uppercase tracking-wider text-[0.65rem]">Bedrooms</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bath size={24} className="text-muted-foreground" />
              <div className="flex flex-col text-sm">
                <span className="font-semibold">{property.bathrooms}</span>
                <span className="text-muted-foreground uppercase tracking-wider text-[0.65rem]">Bathrooms</span>
              </div>
            </div>
            {property.isFeatured && (
              <div className="flex items-center gap-3">
                <Star size={24} className="text-primary" />
                <div className="flex flex-col text-sm text-primary">
                  <span className="font-semibold uppercase tracking-wider text-xs">Featured</span>
                  <span className="uppercase tracking-wider text-[0.65rem]">Collection</span>
                </div>
              </div>
            )}
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-display mb-6">About the Space</h2>
            <p className="text-muted-foreground font-light leading-relaxed whitespace-pre-line text-lg">
              {property.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-display mb-6">Premium Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {property.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-border/50 pb-3">
                  <Check size={18} className="text-primary" />
                  <span className="font-light">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white border border-border p-8 shadow-2xl">
            <div className="flex items-end gap-1 mb-8">
              <span className="text-3xl font-display">${property.pricePerNight}</span>
              <span className="text-sm text-muted-foreground uppercase tracking-wider mb-1">/ night</span>
            </div>

            <form onSubmit={handleBooking} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Check-In</label>
                  <input 
                    type="date" 
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="p-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm font-light"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Check-Out</label>
                  <input 
                    type="date" 
                    required
                    min={checkIn || new Date().toISOString().split('T')[0]}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="p-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm font-light"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Guests</label>
                <select 
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="p-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm font-light appearance-none rounded-none"
                >
                  {Array.from({ length: property.maxGuests }).map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1} Guest{i > 0 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <hr className="border-border my-2" />

              <div className="flex flex-col gap-4">
                <input 
                  type="text" 
                  required placeholder="Full Name"
                  value={name} onChange={(e) => setName(e.target.value)}
                  className="p-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm font-light"
                />
                <input 
                  type="email" 
                  required placeholder="Email Address"
                  value={email} onChange={(e) => setEmail(e.target.value)}
                  className="p-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm font-light"
                />
                <input 
                  type="tel" 
                  required placeholder="Phone Number"
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                  className="p-3 border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm font-light"
                />
              </div>

              {totalPrice > 0 && (
                <div className="bg-secondary p-4 mt-2 flex justify-between items-center">
                  <span className="text-sm font-semibold uppercase tracking-widest text-foreground/70">Total</span>
                  <span className="text-xl font-display font-semibold">${totalPrice}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isBooking || totalPrice <= 0}
                className="w-full bg-foreground text-background py-4 uppercase tracking-widest text-sm font-medium hover:bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {isBooking ? 'Processing...' : 'Reserve Now'}
              </button>
            </form>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
