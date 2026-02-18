"use client";

import { motion } from "framer-motion";
import { Wifi, Tv, Wind, Coffee, ArrowRight, CheckCircle2 } from "lucide-react";

const rooms = [
  {
    name: "Classic Deluxe",
    type: "Ideal for 2 Adults",
    amenities: ["Free High-Speed WiFi", "Air Conditioning", "Led TV", "Daily Housekeeping"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
    price: "Budget Friendly"
  },
  {
    name: "Patient Suite",
    type: "Extra Space for Recovery",
    amenities: ["Wheelchair Accessible", "Room Service", "Clean Linen", "Attached Bathroom"],
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=1000&auto=format&fit=crop",
    price: "Most Popular"
  },
  {
    name: "Long Stay Apartment",
    type: "Kitchenette Option",
    amenities: ["Discounted Package", "Fridge Available", "Power Backup", "Privacy Guaranteed"],
    image: "https://images.unsplash.com/photo-1522771753035-485906281192?q=80&w=1000&auto=format&fit=crop",
    price: "Best Value"
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="text-center mb-16"
        >
           <motion.span variants={itemVariants} className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-medical-primary font-bold tracking-wider uppercase text-sm mb-4">
             Clean & Cozy
           </motion.span>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-heading mb-6 tracking-tight">
            Room Highlights
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Perfect for patient attendants, small families, and long-stay guests. Every room is fully equipped for a hassle-free stay.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400 overflow-hidden border border-slate-100 flex flex-col"
            >
              <div className="h-64 bg-slate-100 relative overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${room.image})` }}
                />
                <div className="absolute top-4 right-4 bg-medical-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {room.price}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-heading group-hover:text-medical-primary transition-colors mb-1">{room.name}</h3>
                    <p className="text-slate-500 text-sm font-medium">{room.type}</p>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                   {room.amenities.map((item, i) => (
                       <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                           <CheckCircle2 className="w-4 h-4 text-medical-primary shrink-0" />
                           {item}
                       </div>
                   ))}
                </div>
                
                <a href="https://wa.me/919205601379" target="_blank" className="w-full py-3 rounded-lg bg-slate-50 border border-slate-200 text-heading font-semibold hover:bg-medical-primary hover:text-white hover:border-medical-primary transition-all text-center flex items-center justify-center gap-2">
                    Check Availability <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
