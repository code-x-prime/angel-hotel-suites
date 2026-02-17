"use client";

import { motion } from "framer-motion";
import Image from "next/image";


export default function Introduction() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="container px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="max-w-4xl mx-auto"
        >
          <span className="text-medical-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            Medical Stay Focused
          </span>
          
          <h2 className="text-3xl md:text-5xl font-bold text-medical-heading mb-8 leading-tight">
            When You’re Here for Treatment, <br/> 
            <span className="text-medical-accent">Comfort Matters Most</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-10">
            If you or your loved one is visiting <strong>Medanta – The Medicity</strong>, you need more than just a room — 
            you need peace, cleanliness, and supportive hospitality.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
             {[
               { text: "Calm, hygienic environment", icon: "/Medical/calm-hygienic-environment.svg" },
               { text: "Spacious AC rooms with private bathrooms", icon: "/Medical/spacious-ac-rooms-with-private-bathrooms.svg" },
               { text: "Easy lift access (no stairs stress)", icon: "/Medical/easy-lift-access.svg" },
               { text: "Flexible stay options", icon: "/Medical/flexible-stay-options.svg" },
               { text: "Friendly, understanding staff", icon: "/Medical/friendly-understanding-staff.svg" },
               { text: "Hosts patients & families regularly", icon: "/Medical/hosts-patients-families-regularly.svg" }
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-3">
                 <div className="mt-1 flex-shrink-0">
                    <Image src={item.icon} alt="" width={30} height={30} className="w-10 h-10 object-contain" />
                 </div>
                 <span className="text-slate-700 font-medium text-lg">{item.text}</span>
               </div>
             ))}
          </div>
          
          <div className="mt-12 h-1 w-24 bg-medical-primary/20 mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
