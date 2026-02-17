"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Utensils, Building2 } from "lucide-react";

export default function Location() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-slate-50 -skew-y-3 z-0 origin-bottom-right transform scale-110" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={containerVariants}
           className="text-center mb-16"
        >
           <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-medical-light text-medical-primary font-bold tracking-wider uppercase text-sm mb-4">
              Sector 38, Gurgaon
           </motion.span>
           <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-heading mb-6 tracking-tight">
             Prime Location Advantage
           </motion.h2>
           <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
             Convenient for both medical and corporate travelers. Stay close to what matters.
           </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Visual Map / Location representation */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-[400px] bg-slate-100 group"
           >
              {/* Placeholder for Map - using an image or iframe would go here. Using a stylized map image for now. */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop')" }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute bottom-8 left-8 text-white">
                 <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-medical-accent fill-medical-accent" />
                    <span className="font-bold text-lg">Angel Hotel & Suites</span>
                 </div>
                 <p className="text-white/80 text-sm max-w-xs">
                    Plot No 123, Sector 38, Near Medanta Hospital, Gurgaon, Haryana.
                 </p>
              </div>
           </motion.div>

           {/* Location Highlights */}
           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid gap-6"
           >
              {[
                  { icon: Navigation, title: "3 Mins to Medanta", desc: "Just 600 meters away. Walking distance for attendants." },
                  { icon: Building2, title: "Close to Sohna Road", desc: "Easy access to business hubs and corporate offices." },
                  { icon: Navigation, title: "HUDA City Centre", desc: "10 mins drive to the main metro station connecting Delhi." },
                  { icon: Utensils, title: "Restaurants & Market", desc: "Pharmacy, grocery, and food options within 200 meters." }
              ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                     <div className="w-12 h-12 rounded-full bg-medical-light flex items-center justify-center shrink-0 text-medical-primary">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-heading mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                     </div>
                  </motion.div>
              ))}
           </motion.div>
        </div>

      </div>
    </section>
  );
}
