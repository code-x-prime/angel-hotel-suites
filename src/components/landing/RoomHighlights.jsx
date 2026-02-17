"use client";

import { motion } from "framer-motion";
import { Wifi, Tv, Wind, Maximize, Users, Star } from "lucide-react";
import Image from "next/image";

const rooms = [
  {
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    title: "Classic Patient Room",
    desc: "Designed for recovery. Peaceful, hygienic, and equipped with all medical-stay essentials.",
    icon: Wind,
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=800&auto=format&fit=crop",
    title: "Twin Staying Room",
    desc: "Perfect for a patient and an attendant. Includes two comfortable beds and ample space.",
    icon: Users,
  },
  {
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
    title: "Premium Suite",
    desc: "Extra spacious for long-term stays. Features a small seating area and premium amenities.",
    icon: Star,
  },
];

export default function RoomHighlights() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="rooms" className="py-24 bg-[#F4F8FB]">
      <div className="container px-6">
        
        {/* Section Heading */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           className="text-center mb-16 max-w-4xl mx-auto"
        >
           <span className="text-medical-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
              Accommodation
           </span>
           <h2 className="text-3xl md:text-5xl font-bold text-medical-heading mb-6">
             Clean, Cozy & Fully Equipped Rooms
           </h2>
           
           {/* Amenities List from Copy */}
           <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-slate-600 mb-8 font-medium">
              {[
                "Air Conditioned", 
                "Free High-Speed WiFi", 
                "LED TV", 
                "Daily Housekeeping", 
                "Fresh Linen", 
                "Room Service", 
                "GST Billing Available"
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-medical-accent"></span>
                  {item}
                </span>
              ))}
           </div>

           <div className="inline-block bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm text-sm md:text-base">
              <span className="font-bold text-medical-primary">Perfect for: </span>
              <span className="text-slate-600">Patient attendants • Small families • Corporate short stays • Long stay guests</span>
           </div>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group overflow-hidden border border-slate-100"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-slate-200">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="p-6">
                 <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-medical-heading group-hover:text-medical-primary transition-colors">
                      {room.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-medical-light flex items-center justify-center text-medical-primary">
                        <room.icon className="w-4 h-4" />
                    </div>
                 </div>
                 <p className="text-slate-600 leading-relaxed text-sm">
                   {room.desc}
                 </p>
                 
                 {/* Mini Amenities Row */}
                 <div className="flex gap-3 mt-4 pt-4 border-t border-slate-50 text-slate-400">
                    <Wifi className="w-4 h-4" />
                    <Tv className="w-4 h-4" />
                    <Wind className="w-4 h-4" />
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
