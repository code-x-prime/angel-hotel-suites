"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle, MapPin, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
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
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2000&auto=format&fit=crop"
          alt="Angel Hotel Near Medanta"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-medical-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/50 via-transparent to-medical-dark/20" />
      </div>

      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center pt-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-medical-primary/20 border border-medical-primary/30 backdrop-blur-md text-white text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-sky-300" />
            Sector 38, Gurgaon – Close to Medanta & Sohna Road
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
            Hotel Near Medanta <br className="hidden md:block" />
            <span className="text-medical-accent">Just 3 Minutes Away</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/95 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            Comfortable, Affordable Stay for Patients & Families in Gurgaon
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-white/90 text-sm md:text-base font-medium">
             <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Peaceful Rooms</span>
             <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Lift Access</span>
             <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Long Stay Discounts</span>
             <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> 24x7 Assistance</span>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a 
              href="tel:+919958800961" 
              className="w-full sm:w-auto px-8 py-4 bg-medical-primary hover:bg-medical-dark text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/919958800961" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Booking
            </a>
            <a 
              href="#booking" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-medical-heading rounded-lg font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Check Availability
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
