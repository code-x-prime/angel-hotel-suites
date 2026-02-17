"use client";

import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function CTASection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section id="cta" className="py-24 bg-medical-primary text-white text-center">
      <div className="container px-6">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight text-white">
            Looking for a Comfortable Stay Near Medanta?
          </h2>
          <p className="text-xl text-white/90 mb-10 font-medium max-w-2xl mx-auto font-light leading-relaxed">
            Rooms fill quickly due to high medical demand. 
            <span className="font-bold text-white mt-4 block text-2xl">Secure Your Room Today.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <AnimatedButton 
                href="tel:+918448295915"
                className="w-full sm:w-auto px-8 py-4 text-lg gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
             >
                <Phone className="w-5 h-5" />
                Call Now
             </AnimatedButton>
             
             <a 
                href="#booking"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-medical-primary px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
             >
                <Calendar className="w-5 h-5" />
                Book Online
             </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
