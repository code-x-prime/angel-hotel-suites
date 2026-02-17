"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";

export default function DirectBooking() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       <div className="container relative z-10 px-6">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="max-w-5xl mx-auto"
          >
             <div className="text-center mb-12">
                <span className="text-medical-accent font-bold tracking-widest uppercase text-xs mb-2 block">
                    Best Price Guarantee
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-medical-heading mb-6">
                   Why Book Directly With Us?
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Skip the middleman fees. Get the lowest rates and best perks when you book through our official channels.
                </p>
             </div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                   { title: "Lowest Price Guaranteed", desc: "Cheaper than Agoda/Booking.com" },
                   { title: "No OTA Commission", desc: "Honest pricing, no surprise charges" },
                   { title: "Early Check-in Priority", desc: "Subject to availability" },
                   { title: "Direct WhatsApp Support", desc: "Talk directly to hotel manager" }
                ].map((item, i) => (
                   <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col items-center text-center group">
                      <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                         <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                   </div>
                ))}
             </div>
             
          </motion.div>
       </div>
    </section>
  );
}
