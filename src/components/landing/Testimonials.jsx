"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    text: "Very comfortable stay during my father’s treatment at Medanta. Staff was very supportive.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    text: "Clean rooms and very close to hospital. Highly recommended for medical visits.",
    rating: 5
  },
  {
    name: "Amit Singh",
    text: "Affordable and peaceful compared to other hotels nearby.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
             What Our Guests Say
           </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col relative"
            >
               <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 fill-blue-100" />
               
               <div className="flex gap-1 mb-6">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                 ))}
               </div>
               
               <p className="text-slate-700 font-medium leading-relaxed mb-6 flex-1 italic">
                 &quot;{review.text}&quot;
               </p>

               <div>
                 <h4 className="font-bold text-slate-900">{review.name}</h4>
                 <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Verified Guest</span>
               </div>
            </motion.div>
          ))}
        </div>
        
        {/* Placeholder for Google Review Screenshot as per PDF */}
        <div className="mt-12 text-center">
             <div className="inline-block px-6 py-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                 <div className="flex items-center gap-2 justify-center mb-1">
                     <span className="font-bold text-lg">4.5/5</span>
                     <div className="flex"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /></div>
                 </div>
                 <p className="text-sm text-slate-500">Based on 500+ Google Reviews</p>
             </div>
        </div>

      </div>
    </section>
  );
}
