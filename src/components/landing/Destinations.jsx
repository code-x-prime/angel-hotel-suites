"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    country: "India",
    desc: "World-class cardiac & ortho care at 70% less cost.",
    image: "/dest-india.jpg",
    color: "from-orange-500/80 to-purple-600/50",
  },
  {
    id: 2,
    country: "Turkey",
    desc: "Leading destination for hair transplants & cosmetic surgery.",
    image: "/dest-turkey.jpg",
    color: "from-red-500/80 to-pink-600/50",
  },
  {
    id: 3,
    country: "Thailand",
    desc: "Luxury wellness & advanced cosmetic procedures.",
    image: "/dest-thailand.jpg",
    color: "from-yellow-500/80 to-green-600/50",
  },
  {
    id: 4,
    country: "Nepal",
    desc: "Affordable eye care & wellness in the Himalayas.",
    image: "/dest-nepal.jpg",
    color: "from-blue-500/80 to-indigo-600/50",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-8 md:py-12 bg-medical-alt relative overflow-hidden">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="text-medical-primary font-bold tracking-wider uppercase text-sm mb-3 block">Global Network</span>
          <h2 className="text-3xl md:text-4xl font-bold text-medical-heading mb-6">Top Medical Destinations</h2>
          <p className="text-medical-text text-lg leading-relaxed">
            Choose from our network of accredited hospitals in leading medical tourism hubs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl bg-white transition-all duration-300"
            >
              {/* Background with CSS Image fallback */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})`, backgroundColor: '#e2e8f0' }}
              />
              
              {/* Gradient Overlay - Smooth transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Hover Color Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-medical-teal-900/90 via-medical-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                        <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{dest.country}</h3>
                  </div>
                  
                  <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-[max-height] duration-500 ease-in-out">
                     <p className="text-white/90 text-sm mb-4 font-medium leading-relaxed">
                        {dest.desc}
                     </p>
                  </div>

                  <div className="mt-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span className="text-sm font-bold text-white">View 12+ Hospitals</span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
