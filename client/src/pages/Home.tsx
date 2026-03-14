import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { PropertyCard } from "@/components/PropertyCard";
import { useProperties } from "@/hooks/use-properties";
import { MapPin, Key, ShieldCheck, Sparkles } from "lucide-react";

export function Home() {
  const { data: properties, isLoading } = useProperties();
  const featuredProperties = properties?.filter(p => p.isFeatured).slice(0, 3) || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* landing page hero dubai cinematic */}
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2940&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 image-vignette" />
          {/* VIDEO BUTTON */}
          <div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 
                       md:left-auto md:right-16 md:bottom-24 md:translate-x-0
                       flex items-center justify-center cursor-pointer z-20"
            onClick={() => window.open("https://www.youtube.com/watch?v=kUjvQ-WrA1o&list=RDVJxppgsHjF8&index=14")}
          >
            <svg
              viewBox="0 0 160 160"
              className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M80,80
                     m-60,0
                     a60,60 0 1,1 120,0
                     a60,60 0 1,1 -120,0"
                />
              </defs>

              <text fill="white" fontSize="10" letterSpacing="4">
                <textPath href="#circlePath">
                  EXPERIENCE DUBAI WITH US • EXPERIENCE DUBAI WITH US •
                </textPath>
              </text>
            </svg>

            <div className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-white">
              ▶
            </div>
          </div>
        </div>
  
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.4em] uppercase text-xs md:text-sm mb-6 block font-bold">
              Sahar & Co Collection
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Refined Living. <br />
            <span className="italic text-white/90">Exceptional</span> Locations.
          </motion.h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link 
              href="/properties" 
              className="w-full sm:w-auto bg-primary text-primary-foreground px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-foreground transition-all duration-500"
            >
              Explore Stays
            </Link>
            <a 
              href="#about" 
              className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-500"
            >
              Our Story
            </a>
          </motion.div>
         

          {/* ⭐ BOOKING BAR GOES HERE */}

          <div className="mt-16 w-full max-w-6xl mx-auto">
            <div className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-xl overflow-hidden shadow-2xl">
              
              <div className="flex-1 px-6 py-4 border-r border-white/20">
                <p className="text-xs text-white/60 mb-1">Location</p>
                <select className="bg-transparent outline-none w-full text-sm">
                  <option className="text-black">Dubai</option>
                  <option className="text-black">Downtown</option>
                  <option className="text-black">Jeddah (Coming Soon)</option>
                </select>
              </div>

              <div className="flex-1 px-6 py-4 border-r border-white/20">
                <p className="text-xs text-white/60 mb-1">Check In – Check Out</p>
                <input type="date" className="bg-transparent outline-none w-full text-sm"/>
              </div>

              <div className="flex-1 px-6 py-4 border-r border-white/20">
                <p className="text-xs text-white/60 mb-1">Guests</p>
                <select className="bg-transparent outline-none w-full text-sm">
                  <option className="text-black">1 Adult</option>
                  <option className="text-black">2 Adults</option>
                </select>
              </div>

              <div className="px-6 py-4">
                <button className="bg-[#5a4a42] px-6 py-3 text-sm rounded-md hover:bg-[#3d2f28] transition">
                  Browse Properties
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-[#f3efe9] py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center px-6">

          <div>
            <h3 className="text-3xl text-[#b08a5a] font-semibold">2+</h3>
            <p className="text-sm text-gray-700 mt-1">Years of Expertise</p>
          </div>

          <div>
            <h3 className="text-3xl text-[#b08a5a] font-semibold">100+</h3>
            <p className="text-sm text-gray-700 mt-1">Units in Mgmt.</p>
          </div>

          <div>
            <h3 className="text-3xl text-[#b08a5a] font-semibold">2000+</h3>
            <p className="text-sm text-gray-700 mt-1">Reservations</p>
          </div>

          <div>
            <h3 className="text-3xl text-[#b08a5a] font-semibold">85%</h3>
            <p className="text-sm text-gray-700 mt-1">Avg. Occupancy</p>
          </div>

          <div>
            <h3 className="text-3xl text-[#b08a5a] font-semibold">18,000+</h3>
            <p className="text-sm text-gray-700 mt-1">5-Star Reviews</p>
          </div>

          <div>
            <h3 className="text-3xl text-[#b08a5a] font-semibold">15%</h3>
            <p className="text-sm text-gray-700 mt-1">Higher ROI on Avg.</p>
          </div>

        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">
              The Standard of Luxury
            </span>
            <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
              Curated elegance in the heart of Dubai
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Sahar & Co represents the pinnacle of luxury short-term leasing. We meticulously select and design every residence to ensure an unparalleled experience for the world's most discerning travelers.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-10">
              From penthouses overlooking the Burj Khalifa to serene beachfront villas, our portfolio is a testament to extraordinary architecture and bespoke hospitality.
            </p>
            <Link 
              href="/properties" 
              className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-all duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* WHY CHOOSE SECTION */}
            <section className="bg-[#f6f4f1] py-20 px-6">
              <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-display mb-12 tracking-wide">
                  WHY CHOOSE sahara and co
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                  {/* Card 1 */}
                  <div className="border rounded-lg p-8 bg-white/60">
                    <h3 className="text-lg mb-2">
                      Transparent commission-based pricing
                    </h3>
                    <p className="text-sm text-gray-600">
                      sahara & co makes revenue simple
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="border rounded-lg p-8 bg-white/60">
                    <h3 className="text-lg">
                      Dynamic pricing to maximise returns
                    </h3>
                  </div>

                  {/* Card 3 */}
                  <div className="border rounded-lg p-8 bg-white/60">
                    <h3 className="text-lg">
                      24/7 guest and owner support
                    </h3>
                  </div>

                  {/* Card 4 */}
                  <div className="border rounded-lg p-8 bg-white/60">
                    <h3 className="text-lg">
                      In-house furnishing and maintenance
                    </h3>
                  </div>

                </div>
              </div>
            </section>
            {/* about section luxury interior */}
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full aspect-[4/5] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl hidden md:block">
              <span className="font-display text-5xl text-primary block mb-2">15+</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Exclusive<br/>Residences</span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Featured Properties */}
      <section className="bg-secondary py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary tracking-widest uppercase text-xs font-semibold mb-4 block">
                Exclusive Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-display">Featured Stays</h2>
            </motion.div>
            
            <Link 
              href="/properties" 
              className="border border-foreground px-8 py-3 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              View All
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-white h-[400px]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display mb-6">The Sahar Signature</h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            Beyond beautiful spaces, we offer an ecosystem of premium services designed to make your stay effortless and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: Sparkles, title: "Impeccable Design", desc: "Museum-quality furnishings and bespoke interiors in every home." },
            { icon: MapPin, title: "Prime Locations", desc: "Situated in Dubai's most coveted and vibrant neighborhoods." },
            { icon: Key, title: "Seamless Access", desc: "24/7 self check-in and dedicated on-call concierge service." },
            { icon: ShieldCheck, title: "Absolute Privacy", desc: "Secure environments ensuring complete discretion for our guests." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500 text-primary">
                <feature.icon size={28} />
              </div>
              <h3 className="font-display text-xl mb-4">{feature.title}</h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
