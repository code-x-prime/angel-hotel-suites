"use client";

import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function MedicalPackages() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  return (
    <section id="packages" className="py-8 md:py-12 bg-white relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           className="max-w-4xl mx-auto text-center"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-medical-primary text-sm font-bold mb-6">
              <Clock className="w-4 h-4" />
              <span className="uppercase tracking-wide">Long Stay Benefits</span>
           </div>
           
           <h2 className="text-3xl md:text-5xl font-bold text-medical-heading mb-6 leading-tight">
             Staying for Treatment? <br />
             <span className="text-medical-primary">We Offer Special Weekly Rates.</span>
           </h2>

           <p className="text-xl text-slate-600 mb-12 font-light max-w-2xl mx-auto">
             Medical journeys can be unpredictable. We support you with flexible, discounted rates for extended stays.
           </p>

           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { title: "Cancer Treatment", icon: "/Treatment/cancer-treatment.svg" },
                { title: "Surgery Recovery", icon: "/Treatment/surgery-recovery.svg" },
                { title: "Follow-up Visits", icon: "/Treatment/Follow-up-visits.svg" },
                { title: "Transplant Care", icon: "/Treatment/transplant-care.svg" }
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                   <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={32} 
                        height={32} 
                        className="w-8 h-8 object-contain"
                      />
                   </div>
                   <span className="font-semibold text-medical-heading block">{item.title}</span>
                </div>
              ))}
           </div>

           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
               href="tel:+919205601379" 
               className="bg-medical-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-medical-dark transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
             >
               <Phone className="w-5 h-5" />
               Call for Rates
             </a>
             <a 
               href="https://wa.me/919205601379" 
               target="_blank"
               rel="noopener noreferrer"
               className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
             >
                <Image src="/whatsapp.png" alt="WhatsApp" width={30} height={30} />
               WhatsApp Inquiry
             </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
