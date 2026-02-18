"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

const heroImages = [
  "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2000&auto=format&fit=crop"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

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
      
      {/* Background Slideshow with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage]}
              alt="Angel Hotel Ambience"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlays - these sit on top of the images but behind text */}
        <div className="absolute inset-0 bg-medical-dark/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-medical-dark/50 via-transparent to-medical-dark/20 z-10" />
      </div>

      <div className="container relative z-20 h-full flex flex-col justify-center items-center text-center pt-10">
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

          <motion.div variants={fadeUp} className="mb-6 flex justify-center w-full">
            <LayoutTextFlip
              text="Hotel Near Medanta"
              words={["Just 3 Min Away", "Premium Comfort", "Affordable Stays"]}
              textClassName="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-xl shadow-black"
              buttonClassName="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-medical-accent drop-shadow-xl shadow-black bg-transparent p-0 m-0"
              className="flex-col  items-center justify-center gap-x-3 gap-y-1"
            />
          </motion.div>
          
          <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/95 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            Comfortable, Affordable Stay for Patients & Families in Gurgaon
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-white/90 text-sm md:text-base font-medium">
             <span className="flex items-center gap-2"><Image
              src="/peaceful-pooms.svg"
              alt="Peaceful Rooms"
              width={25}
              height={25}
              className="invert"
             /> Peaceful Rooms</span>
             <span className="flex items-center gap-2"><Image
              src="/lift-access.svg"
              alt="Lift Access"
              width={25}
              height={25}
              className="invert"
             /> Lift Access</span>
             <span className="flex items-center gap-2"><Image
              src="/long-stay-discounts.svg"
              alt="Long Stay Discounts"
              width={25}
              height={25}
              className="invert"
             /> Long Stay Discounts</span>
             <span className="flex items-center gap-2"><Image
              src="/24-hours-support.svg"
              alt="24x7 Assistance"
              width={25}
              height={25}
              className="invert"
             /> 24x7 Assistance</span>
          </motion.div>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a 
              href="tel:+919205601379" 
              className="w-full sm:w-auto px-8 py-4 bg-medical-primary hover:bg-medical-dark text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/919205601379" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg"
            >
               <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />
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
